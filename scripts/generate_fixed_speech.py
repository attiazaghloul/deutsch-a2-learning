import argparse
import asyncio
import json
import re
import subprocess
import unicodedata
from pathlib import Path

import edge_tts
import imageio_ffmpeg
from mutagen.mp3 import MP3

ROOT = Path(__file__).resolve().parents[1]
BUILD = ROOT / "build" / "fixed-speech"
OUTPUT = ROOT / "app" / "assets" / "speech"
TEXTS_PATH = ROOT / "build" / "speech-library-texts.json"
DATA_PATH = ROOT / "app" / "data_speech_clean.js"
FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()
VERSION = "fixed-voices-3"
MARKER = "Audiomarker"

VOICES = [
    {
        "id": "mia",
        "name": "Mia",
        "description": "Frau, klar und freundlich",
        "voice": "de-DE-SeraphinaMultilingualNeural",
        "rate": "+11%",
        "pitch": "+0Hz",
    },
    {
        "id": "tarek",
        "name": "Tarek",
        "description": "Mann, ruhig und erwachsen",
        "voice": "de-DE-ConradNeural",
        "rate": "+9%",
        "pitch": "+0Hz",
    },
    {
        "id": "jonas",
        "name": "Jonas",
        "description": "Mann, jung und lebendig",
        "voice": "de-DE-KillianNeural",
        "rate": "+10%",
        "pitch": "+1Hz",
    },
    {
        "id": "samir",
        "name": "Samir",
        "description": "Mann, tief und gelassen",
        "voice": "de-DE-FlorianMultilingualNeural",
        "rate": "+6%",
        "pitch": "-2Hz",
    },
]


def normalized_word(value):
    return "".join(
        character.lower()
        for character in unicodedata.normalize("NFKD", value)
        if character.isalnum()
    )


def duration(path):
    return float(MP3(path).info.length)


def make_batches(texts, max_bytes=2800):
    batches = []
    current = []
    current_length = 0
    separator_length = len(f" {MARKER}. ".encode("utf-8"))
    for text_id, text in enumerate(texts):
        addition = len(text.encode("utf-8")) + (separator_length if current else 0)
        if current and current_length + addition > max_bytes:
            batches.append(current)
            current = []
            current_length = 0
        current.append((text_id, text))
        current_length += addition
    if current:
        batches.append(current)
    return batches


def map_batch_boundaries(batch, boundaries):
    marker = normalized_word(MARKER)
    stream = ""
    spans = []
    for boundary in boundaries:
        word = normalized_word(boundary["text"])
        if not word or word == marker:
            continue
        char_start = len(stream)
        stream += word
        spans.append({
            "char_start": char_start,
            "char_end": len(stream),
            "start": boundary["start"],
            "end": boundary["end"],
        })

    mapped = {}
    cursor = 0
    for text_id, text in batch:
        expected = normalized_word(text)
        position = stream.find(expected, cursor)
        if position < 0:
            continue
        phrase_end = position + len(expected)
        first = next(
            (span for span in spans if span["char_end"] > position),
            None,
        )
        last = next(
            (span for span in reversed(spans) if span["char_start"] < phrase_end),
            None,
        )
        if first and last:
            mapped[text_id] = {
                "start": round(first["start"], 3),
                "end": round(max(first["start"] + 0.12, last["end"] - 0.025), 3),
            }
            cursor = phrase_end
    return mapped


async def synthesize_batch(voice, batch_index, batch, semaphore):
    voice_dir = BUILD / voice["id"]
    voice_dir.mkdir(parents=True, exist_ok=True)
    audio_path = voice_dir / f"{batch_index:03d}.mp3"
    timing_path = voice_dir / f"{batch_index:03d}.json"
    signature = {
        "texts": [text for _, text in batch],
        "voice": voice["voice"],
        "rate": voice["rate"],
        "pitch": voice["pitch"],
    }
    if audio_path.exists() and timing_path.exists():
        try:
            metadata = json.loads(timing_path.read_text(encoding="utf-8"))
            if (
                metadata.get("signature") == signature
                and duration(audio_path) > 0.2
                and metadata.get("timings")
            ):
                return audio_path, metadata["timings"]
        except Exception:
            pass

    text = f" {MARKER}. ".join(item[1] for item in batch)
    async with semaphore:
        for attempt in range(4):
            temp_path = audio_path.with_suffix(".tmp.mp3")
            temp_path.unlink(missing_ok=True)
            try:
                communicate = edge_tts.Communicate(
                    text,
                    voice["voice"],
                    rate=voice["rate"],
                    pitch=voice["pitch"],
                    volume="+0%",
                    boundary="WordBoundary",
                )
                boundaries = []
                with temp_path.open("wb") as audio_file:
                    async for chunk in communicate.stream():
                        if chunk["type"] == "audio":
                            audio_file.write(chunk["data"])
                        elif chunk["type"] == "WordBoundary":
                            boundaries.append({
                                "text": chunk["text"],
                                "start": chunk["offset"] / 10_000_000,
                                "end": (chunk["offset"] + chunk["duration"]) / 10_000_000,
                            })
                temp_path.replace(audio_path)
                timings = map_batch_boundaries(batch, boundaries)
                if len(timings) != len(batch):
                    missing = [
                        f"{text_id}:{text}"
                        for text_id, text in batch
                        if text_id not in timings
                    ]
                    raise RuntimeError(
                        f"{voice['id']} batch {batch_index}: "
                        f"mapped {len(timings)} of {len(batch)} texts; "
                        f"missing {missing[:5]}"
                    )
                timing_path.write_text(
                    json.dumps(
                        {"signature": signature, "timings": timings},
                        ensure_ascii=False,
                        separators=(",", ":"),
                    ),
                    encoding="utf-8",
                )
                return audio_path, timings
            except Exception:
                temp_path.unlink(missing_ok=True)
                if attempt == 3:
                    raise
                await asyncio.sleep(1.5 * (attempt + 1))


async def generate_voice(voice, texts, concurrency):
    batches = make_batches(texts)
    semaphore = asyncio.Semaphore(concurrency)
    print(f"{voice['name']}: {len(batches)} Audiopakete")
    results = await asyncio.gather(*[
        synthesize_batch(voice, index, batch, semaphore)
        for index, batch in enumerate(batches)
    ])

    voice_dir = BUILD / voice["id"]
    concat_path = voice_dir / "concat.txt"
    concat_path.write_text(
        "\n".join(
            f"file '{str(path.resolve()).replace(chr(39), chr(39) * 2)}'"
            for path, _ in results
        ),
        encoding="utf-8",
    )
    OUTPUT.mkdir(parents=True, exist_ok=True)
    output_path = OUTPUT / f"{voice['id']}.mp3"
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
    for (path, batch_timings) in results:
        for text_id, timing in batch_timings.items():
            timings[int(text_id)] = [
                round(cursor + timing["start"], 3),
                round(cursor + timing["end"], 3),
            ]
        cursor += duration(path)
    if any(timing is None for timing in timings):
        raise RuntimeError(f"{voice['name']}: incomplete timing map")
    print(
        f"{voice['name']}: {duration(output_path) / 60:.1f} min, "
        f"{output_path.stat().st_size / 1024 / 1024:.1f} MB"
    )
    return timings


def write_data(texts, selected_voices, voice_timings):
    payload = {
        "version": VERSION,
        "texts": texts,
        "voices": [
            {
                "id": voice["id"],
                "name": voice["name"],
                "description": voice["description"],
                "audio": f"assets/speech/{voice['id']}.mp3?v={VERSION}",
                "timings": voice_timings[voice["id"]],
            }
            for voice in selected_voices
        ],
    }
    DATA_PATH.write_text(
        "/* Generated fixed cross-device speech library. */\n"
        f"window.A2_FIXED_SPEECH={json.dumps(payload, ensure_ascii=False, separators=(',', ':'))};\n",
        encoding="utf-8",
    )


async def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--voices", default="all")
    parser.add_argument("--concurrency", type=int, default=4)
    args = parser.parse_args()
    texts = json.loads(TEXTS_PATH.read_text(encoding="utf-8"))
    selected_ids = (
        {voice["id"] for voice in VOICES}
        if args.voices == "all"
        else set(args.voices.split(","))
    )
    selected = [voice for voice in VOICES if voice["id"] in selected_ids]
    existing = {}
    if DATA_PATH.exists():
        source = DATA_PATH.read_text(encoding="utf-8")
        try:
            data = json.loads(source.split("window.A2_FIXED_SPEECH=", 1)[1].rsplit(";", 1)[0])
            if data.get("texts") == texts:
                existing = {voice["id"]: voice["timings"] for voice in data.get("voices", [])}
        except Exception:
            pass
    timings = dict(existing)
    for voice in selected:
        timings[voice["id"]] = await generate_voice(voice, texts, args.concurrency)
    output_voices = [voice for voice in VOICES if voice["id"] in timings]
    write_data(texts, output_voices, timings)


if __name__ == "__main__":
    asyncio.run(main())
