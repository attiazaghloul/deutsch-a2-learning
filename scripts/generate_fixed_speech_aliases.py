import asyncio
import json
import subprocess
from pathlib import Path

from mutagen.mp3 import MP3

from generate_fixed_speech import (
    BUILD,
    DATA_PATH,
    FFMPEG,
    OUTPUT,
    VERSION,
    VOICES,
    duration,
    make_batches,
    synthesize_batch,
)

ROOT = Path(__file__).resolve().parents[1]
ALIAS_PATH = ROOT / "build" / "speech-vocab-aliases.json"


async def generate_voice(voice, texts):
    batches = make_batches(texts)
    semaphore = asyncio.Semaphore(8)
    alias_build = BUILD / f"{voice['id']}-aliases"
    alias_build.mkdir(parents=True, exist_ok=True)

    results = []
    for batch_index, batch in enumerate(batches):
        source_audio, source_timings = await synthesize_batch(
            voice, 900 + batch_index, batch, semaphore
        )
        target_audio = alias_build / f"{batch_index:03d}.mp3"
        target_audio.write_bytes(source_audio.read_bytes())
        results.append((target_audio, source_timings))

    concat_path = alias_build / "concat.txt"
    concat_path.write_text(
        "\n".join(f"file '{path.resolve()}'" for path, _ in results),
        encoding="utf-8",
    )
    output_path = OUTPUT / f"{voice['id']}-words.mp3"
    subprocess.run(
        [
            FFMPEG, "-y", "-f", "concat", "-safe", "0", "-i", str(concat_path),
            "-codec:a", "libmp3lame", "-b:a", "32k", "-ar", "24000", "-ac", "1",
            str(output_path),
        ],
        check=True,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )

    timings = [None] * len(texts)
    cursor = 0.0
    for path, batch_timings in results:
        for text_id, timing in batch_timings.items():
            timings[int(text_id)] = [
                round(cursor + timing["start"], 3),
                round(cursor + timing["end"], 3),
            ]
        cursor += duration(path)
    if any(timing is None for timing in timings):
        raise RuntimeError(f"{voice['name']}: incomplete alias timings")
    print(f"{voice['name']}: {len(texts)} words, {duration(output_path) / 60:.1f} min")
    return {
        "id": voice["id"],
        "audio": f"assets/speech/{voice['id']}-words.mp3?v={VERSION}",
        "timings": timings,
    }


async def main():
    texts = json.loads(ALIAS_PATH.read_text(encoding="utf-8"))
    voices = []
    for voice in VOICES:
        voices.append(await generate_voice(voice, texts))

    source = DATA_PATH.read_text(encoding="utf-8")
    data = json.loads(source.split("window.A2_FIXED_SPEECH=", 1)[1].rsplit(";", 1)[0])
    data["aliases"] = {"texts": texts, "voices": voices}
    DATA_PATH.write_text(
        "/* Generated fixed cross-device speech library. */\n"
        f"window.A2_FIXED_SPEECH={json.dumps(data, ensure_ascii=False, separators=(',', ':'))};\n",
        encoding="utf-8",
    )


if __name__ == "__main__":
    asyncio.run(main())
