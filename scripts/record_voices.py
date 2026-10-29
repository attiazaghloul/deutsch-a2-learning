"""Record the B1 speech library (Mia, Tarek) in parts, on GitHub Actions.

The Edge TTS service is not reachable from every machine, so
.github/workflows/record-voices.yml runs this on GitHub:
    pip install edge-tts==7.3.1 mutagen==1.47.0 imageio-ffmpeg==0.6.0
    python scripts/record_voices.py --level b1

Reads scripts/voices/<level>-texts.json (a copy of the texts that
scripts/extract_b1_speech_library.js writes) and writes
app/assets/speech/<level>/<voice>-<part>.mp3 plus
scripts/voices/<level>-timings.json; scripts/import_voice_library.js turns
that into app/data_speech_b1.js after the recordings are checked.

Batches are recorded like generate_fixed_speech.py (texts joined with
" ... ", word boundaries mapped to each text, "___" spoken as a pause). Then
every clip is cut out with a short margin and the clips are laid end to end
with 0.3 s of silence: no silence is stored twice, the timings are
sample-exact, and the parts (about 2.5 hours each) stay small.
"""
import argparse
import asyncio
import json
import re
import subprocess
import unicodedata
import wave
from pathlib import Path

import edge_tts
import numpy as np
import imageio_ffmpeg
from mutagen.mp3 import MP3

ROOT = Path(__file__).resolve().parents[1]
BUILD = ROOT / "build" / "voices"
TEXTS = ROOT / "scripts" / "voices"
OUTPUT = ROOT / "app" / "assets" / "speech"
FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()
SEPARATOR = " ... "
SAMPLE_RATE = 24000
PART_SECONDS = 2.5 * 3600
MARGIN = 0.1       # kept before and after every clip
GAP = 0.3          # silence between two clips
STEP = 0.01        # 10 ms windows to find where a clip's sound begins and ends
QUIET = 0.05       # a window is quiet below 5 % of the clip's loudness
BITRATE = "32k"
# Mia is Katja, a native German voice: the multilingual voice she had before
# (de-DE-SeraphinaMultilingualNeural) read some single words with an English
# accent ("Körperteile" came out as "Corporatile"). A1 and A2 get her new
# recordings too, so she sounds the same on every level.
VERSIONS = {"b1": "b1-voices-1", "a1": "a1-mia-katja-1", "a2": "a2-mia-katja-1", "a2words": "a2-words-katja-1"}

VOICES = [
    {
        "id": "mia",
        "name": "Mia",
        "description": "Frau, klar und freundlich",
        "voice": "de-DE-KatjaNeural",
        "rate": "+6%",
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
]


def normalized_word(value):
    return "".join(
        character.lower()
        for character in unicodedata.normalize("NFKD", value)
        if character.isalnum()
    )


def make_batches(texts, max_bytes=2800):
    batches = []
    current = []
    current_length = 0
    separator_length = len(SEPARATOR.encode("utf-8"))
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
    stream = ""
    spans = []
    for boundary in boundaries:
        word = normalized_word(boundary["text"])
        if not word:
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
        first = next((span for span in spans if span["char_end"] > position), None)
        last = next((span for span in reversed(spans) if span["char_start"] < phrase_end), None)
        if first and last:
            mapped[text_id] = {
                "start": round(first["start"], 3),
                "end": round(max(first["start"] + 0.12, last["end"] - 0.025), 3),
            }
            cursor = phrase_end
    return mapped


def to_wav(mp3_path):
    wav_path = mp3_path.with_suffix(".wav")
    if not wav_path.exists():
        subprocess.run(
            [FFMPEG, "-v", "error", "-y", "-i", str(mp3_path), "-ac", "1", "-ar", str(SAMPLE_RATE), str(wav_path)],
            check=True,
        )
    with wave.open(str(wav_path)) as handle:
        return wav_path, handle.getnframes() / handle.getframerate()


async def synthesize_batch(level, voice, batch_index, batch, semaphore):
    voice_dir = BUILD / level / voice["id"]
    voice_dir.mkdir(parents=True, exist_ok=True)
    audio_path = voice_dir / f"{batch_index:04d}.mp3"
    timing_path = voice_dir / f"{batch_index:04d}.json"
    signature = {
        "texts": [text for _, text in batch],
        "voice": voice["voice"],
        "rate": voice["rate"],
        "pitch": voice["pitch"],
        "separator": SEPARATOR,
        "blanks": "pause",
    }
    if audio_path.exists() and timing_path.exists():
        try:
            metadata = json.loads(timing_path.read_text(encoding="utf-8"))
            if metadata.get("signature") == signature and MP3(audio_path).info.length > 0.2 and metadata.get("timings"):
                return audio_path, metadata["timings"]
        except Exception:
            pass

    # Gap-fill blanks ("___") would be read as "Unterstrich": speak a pause.
    text = SEPARATOR.join(re.sub(r"_{2,}", "…", item[1]) for item in batch)
    async with semaphore:
        for attempt in range(6):
            temp_path = audio_path.with_suffix(".tmp.mp3")
            temp_path.unlink(missing_ok=True)
            try:
                communicate = edge_tts.Communicate(
                    text, voice["voice"], rate=voice["rate"], pitch=voice["pitch"],
                    volume="+0%", boundary="WordBoundary",
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
                timings = map_batch_boundaries(batch, boundaries)
                if len(timings) != len(batch):
                    missing = [f"{text_id}:{value}" for text_id, value in batch if text_id not in timings]
                    raise RuntimeError(f"{voice['id']} batch {batch_index}: mapped {len(timings)} of {len(batch)}; missing {missing[:3]}")
                temp_path.replace(audio_path)
                audio_path.with_suffix(".wav").unlink(missing_ok=True)
                timing_path.write_text(
                    json.dumps({"signature": signature, "timings": timings}, ensure_ascii=False, separators=(",", ":")),
                    encoding="utf-8",
                )
                return audio_path, timings
            except Exception as error:
                temp_path.unlink(missing_ok=True)
                if attempt == 5:
                    raise
                print(f"retry {voice['id']} {batch_index}: {error}")
                await asyncio.sleep(3 * (attempt + 1))


def loudness(samples, t0, t1):
    window = samples[max(0, int(t0 * SAMPLE_RATE)):max(0, int(t1 * SAMPLE_RATE))]
    return float(np.sqrt(np.mean(window ** 2))) if len(window) else 0.0


def sound_bounds(samples, timings):
    """Where each clip really sounds. The service's word boundaries end
    before the last sound of a word (a final -n or -t fades for 60-100 ms),
    and some words start with a breath or plosive just before theirs: grow
    every clip until the audio stays quiet, never into the next or previous clip."""
    bounds = []
    for position, timing in enumerate(timings):
        start, end = timing["start"], timing["end"]
        body = loudness(samples, start, end) or 1.0
        later = timings[position + 1]["start"] if position + 1 < len(timings) else end + 0.6
        earlier = bounds[-1][1] if bounds else max(0.0, start - 0.4)
        # a stop (d, t, b) is silent for a moment before it sounds: the clip
        # ends only after 150 ms of quiet, and starts only after 100 ms
        def sounds(t0, t1):
            return any(loudness(samples, t, t + STEP) > QUIET * body for t in np.arange(t0, t1, STEP))
        while end < min(start + 30, later - 0.05) and end < timing["end"] + 1.5 and sounds(end, min(end + 0.15, later - 0.05)):
            end += STEP
        while start > earlier + 0.05 and start > timing["start"] - 0.6 and sounds(max(start - 0.1, earlier + 0.05), start):
            start -= STEP
        bounds.append((round(max(0.0, start - 0.02), 3), round(end + 0.03, 3)))
    return bounds


def encode_part(wav_path, output_path):
    subprocess.run(
        [FFMPEG, "-v", "error", "-y", "-i", str(wav_path),
         "-codec:a", "libmp3lame", "-b:a", BITRATE, "-ar", str(SAMPLE_RATE), "-ac", "1", str(output_path)],
        check=True,
    )


async def record_voice(level, voice, texts, concurrency, out_dir):
    batches = make_batches(texts)
    semaphore = asyncio.Semaphore(concurrency)
    print(f"{voice['name']} {level}: {len(batches)} batches", flush=True)
    done = 0

    async def counted(index, batch):
        nonlocal done
        result = await synthesize_batch(level, voice, index, batch, semaphore)
        done += 1
        if done % 10 == 0 or done == len(batches):
            print(f"{voice['name']} {level}: {done}/{len(batches)} batches", flush=True)
        return result

    results = await asyncio.gather(*[counted(index, batch) for index, batch in enumerate(batches)])
    timings = [None] * len(texts)
    files = []
    silence = b"\x00\x00" * int(GAP * SAMPLE_RATE)
    writer = None
    part_wav = None
    written = 0          # samples in the current part

    def close_part():
        nonlocal writer
        if not writer:
            return
        writer.close()
        name = f"{voice['id']}-{len(files) + 1}.mp3"
        encode_part(part_wav, out_dir / name)
        part_wav.unlink()
        size = (out_dir / name).stat().st_size / 1024 / 1024
        print(f"{voice['name']} {level} part {len(files) + 1}: {MP3(out_dir / name).info.length / 60:.0f} min, {size:.1f} MB", flush=True)
        files.append(name)
        writer = None

    for audio_path, batch_timings in results:
        wav_path, _ = to_wav(audio_path)
        with wave.open(str(wav_path)) as handle:
            frames = handle.readframes(handle.getnframes())
        samples = np.frombuffer(frames, dtype=np.int16).astype(np.float32)
        total = len(samples)
        ordered = sorted(batch_timings.items(), key=lambda item: item[1]["start"])
        bounds = sound_bounds(samples, [timing for _, timing in ordered])
        for (text_id, timing), (clip_start, clip_end) in zip(ordered, bounds):
            first = max(0, int((clip_start - MARGIN) * SAMPLE_RATE))
            last = min(total, int((clip_end + MARGIN) * SAMPLE_RATE))
            if writer and written / SAMPLE_RATE > PART_SECONDS:
                close_part()
            if not writer:
                part_wav = BUILD / level / f"{voice['id']}-part.wav"
                writer = wave.open(str(part_wav), "wb")
                writer.setnchannels(1)
                writer.setsampwidth(2)
                writer.setframerate(SAMPLE_RATE)
                written = 0
                writer.writeframes(silence)
                written += len(silence) // 2
            begin = written / SAMPLE_RATE
            writer.writeframes(frames[first * 2:last * 2])
            written += last - first
            timings[int(text_id)] = [
                round(begin + (clip_start - first / SAMPLE_RATE), 3),
                round(begin + (clip_end - first / SAMPLE_RATE), 3),
                len(files),
            ]
            writer.writeframes(silence)
            written += len(silence) // 2
    close_part()
    if any(timing is None for timing in timings):
        raise RuntimeError(f"{voice['name']} {level}: incomplete timing map")
    return files, timings


async def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--level", default="b1", choices=sorted(VERSIONS))
    parser.add_argument("--voices", default="mia,tarek")
    parser.add_argument("--concurrency", type=int, default=3)
    args = parser.parse_args()
    texts = json.loads((TEXTS / f"{args.level}-texts.json").read_text(encoding="utf-8"))
    out_dir = OUTPUT / args.level
    out_dir.mkdir(parents=True, exist_ok=True)
    version = VERSIONS[args.level]
    voices = []
    for voice in VOICES:
        if voice["id"] not in args.voices.split(","):
            continue
        files, timings = await record_voice(args.level, voice, texts, args.concurrency, out_dir)
        voices.append({
            "id": voice["id"],
            "name": voice["name"],
            "description": voice["description"],
            "parts": [f"{args.level}/{name}" for name in files],
            "timings": timings,
        })
    # one file per level and voice, so the voices can be recorded in parallel jobs
    for voice in voices:
        payload = {"version": version, "trimmed": True, "texts": texts, "voice": voice}
        timings_path = TEXTS / f"{args.level}-{voice['id']}-timings.json"
        timings_path.write_text(json.dumps(payload, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
        print(f"{timings_path}: {len(texts)} texts")


if __name__ == "__main__":
    asyncio.run(main())
