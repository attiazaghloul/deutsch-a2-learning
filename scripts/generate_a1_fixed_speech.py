import asyncio
import argparse
import json
import subprocess
from pathlib import Path

from generate_fixed_speech import (
    BUILD,
    FFMPEG,
    OUTPUT,
    VOICES,
    duration,
    make_batches,
    synthesize_batch,
)

ROOT = Path(__file__).resolve().parents[1]
TEXTS_PATH = ROOT / "build" / "a1-speech-library-texts.json"
DATA_PATH = ROOT / "app" / "data_speech_a1.js"
VERSION = "a1-fixed-voices-1"
BATCH_OFFSET = 1200


async def generate_voice(voice, texts, concurrency):
    batches = make_batches(texts)
    semaphore = asyncio.Semaphore(concurrency)
    print(f"{voice['name']} A1: {len(batches)} Audiopakete")
    results = await asyncio.gather(*[
        synthesize_batch(voice, BATCH_OFFSET + index, batch, semaphore)
        for index, batch in enumerate(batches)
    ])

    voice_dir = BUILD / f"{voice['id']}-a1"
    voice_dir.mkdir(parents=True, exist_ok=True)
    concat_path = voice_dir / "concat.txt"
    concat_path.write_text(
        "\n".join(
            f"file '{str(path.resolve()).replace(chr(39), chr(39) * 2)}'"
            for path, _ in results
        ),
        encoding="utf-8",
    )
    OUTPUT.mkdir(parents=True, exist_ok=True)
    output_path = OUTPUT / f"a1-{voice['id']}.mp3"
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

    cursor = 0.0
    timings = [None] * len(texts)
    for path, batch_timings in results:
        for text_id, timing in batch_timings.items():
            timings[int(text_id)] = [
                round(cursor + timing["start"], 3),
                round(cursor + timing["end"], 3),
            ]
        cursor += duration(path)
    if any(timing is None for timing in timings):
        raise RuntimeError(f"{voice['name']} A1: incomplete timing map")
    print(
        f"{voice['name']} A1: {duration(output_path) / 60:.1f} min, "
        f"{output_path.stat().st_size / 1024 / 1024:.1f} MB"
    )
    return timings


async def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--voices", default="all")
    parser.add_argument("--concurrency", type=int, default=2)
    args = parser.parse_args()
    texts = json.loads(TEXTS_PATH.read_text(encoding="utf-8"))
    selected_ids = (
        {voice["id"] for voice in VOICES}
        if args.voices == "all"
        else set(args.voices.split(","))
    )
    selected = [voice for voice in VOICES if voice["id"] in selected_ids]
    if not selected:
        raise SystemExit("No voices selected")
    timings = {}
    existing = {}
    if DATA_PATH.exists():
        source = DATA_PATH.read_text(encoding="utf-8")
        try:
            data = json.loads(source.split("window.A1_FIXED_SPEECH=", 1)[1].rsplit(";", 1)[0])
            if data.get("texts") == texts:
                existing = {voice["id"]: voice["timings"] for voice in data.get("voices", [])}
        except Exception:
            pass
    timings.update(existing)
    for voice in selected:
        timings[voice["id"]] = await generate_voice(voice, texts, concurrency=args.concurrency)

    payload = {
        "version": VERSION,
        "texts": texts,
        "voices": [
            {
                "id": voice["id"],
                "name": voice["name"],
                "description": voice["description"],
                "audio": f"assets/speech/a1-{voice['id']}.mp3?v={VERSION}",
                "timings": timings[voice["id"]],
            }
            for voice in VOICES
            if voice["id"] in timings
        ],
    }
    DATA_PATH.write_text(
        "/* Generated fixed cross-device A1 speech library. */\n"
        f"window.A1_FIXED_SPEECH={json.dumps(payload, ensure_ascii=False, separators=(',', ':'))};\n",
        encoding="utf-8",
    )


if __name__ == "__main__":
    asyncio.run(main())
