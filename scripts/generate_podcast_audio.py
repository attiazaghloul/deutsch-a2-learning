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
BUILD = ROOT / "build"
SEGMENTS = BUILD / "podcast-segments"
OUTPUT = ROOT / "app" / "assets" / "podcasts"
FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()
PODCAST_VERSION = "word-sync-3"


def voice_settings(person):
    age = int(person.get("age", 30))
    if person.get("gender") == "female":
        return "+11%", "+0Hz"
    if age < 24:
        return "+10%", "+1Hz"
    if age > 45:
        return "+6%", "-2Hz"
    if age > 35:
        return "+7%", "-1Hz"
    return "+9%", "+0Hz"


async def synthesize(index, item, people, chapter_dir, semaphore):
    target = chapter_dir / f"{index:03d}.mp3"
    timing_target = chapter_dir / f"{index:03d}.words.json"
    person = next((entry for entry in people if entry["name"] == item["speaker"]), people[index % len(people)])
    rate, pitch = voice_settings(person)
    signature = {
        "text": item["de"],
        "voice": person["voice"],
        "rate": rate,
        "pitch": pitch
    }
    if target.exists() and timing_target.exists() and target.stat().st_size > 1000:
        try:
            metadata = json.loads(timing_target.read_text(encoding="utf-8"))
            if (
                MP3(target).info.length > 0.1
                and all(metadata.get(key) == value for key, value in signature.items())
                and metadata.get("timings")
            ):
                return target, metadata["timings"]
        except Exception:
            target.unlink(missing_ok=True)
            timing_target.unlink(missing_ok=True)
    async with semaphore:
        for attempt in range(4):
            temp_target = target.with_suffix(".tmp.mp3")
            temp_target.unlink(missing_ok=True)
            try:
                communicate = edge_tts.Communicate(
                    item["de"], person["voice"], rate=rate, pitch=pitch, volume="+0%",
                    boundary="WordBoundary"
                )
                boundaries = []
                with temp_target.open("wb") as audio_file:
                    async for chunk in communicate.stream():
                        if chunk["type"] == "audio":
                            audio_file.write(chunk["data"])
                        elif chunk["type"] == "WordBoundary":
                            boundaries.append({
                                "text": chunk["text"],
                                "start": chunk["offset"] / 10_000_000,
                                "end": (chunk["offset"] + chunk["duration"]) / 10_000_000
                            })
                temp_target.replace(target)
                if target.exists() and target.stat().st_size > 1000 and MP3(target).info.length > 0.1:
                    timings = map_boundaries_to_tokens(item["de"], boundaries)
                    timing_target.write_text(
                        json.dumps(
                            {**signature, "timings": timings},
                            ensure_ascii=False,
                            separators=(",", ":")
                        ),
                        encoding="utf-8"
                    )
                    return target, timings
            except Exception:
                temp_target.unlink(missing_ok=True)
                if attempt == 3:
                    raise
                await asyncio.sleep(1.5 * (attempt + 1))
    return target, []


def normalized_word(value):
    return "".join(
        character.lower()
        for character in unicodedata.normalize("NFKD", value)
        if character.isalnum()
    )


def map_boundaries_to_tokens(text, boundaries):
    tokens = [match.group(0) for match in re.finditer(r"\S+", text)]
    token_parts = [normalized_word(token) for token in tokens]
    mapped = []
    token_index = 0
    consumed = 0

    for boundary in boundaries:
        spoken = normalized_word(boundary["text"])
        if not spoken:
            continue
        while token_index < len(token_parts):
            available = token_parts[token_index][consumed:]
            if spoken in available or available in spoken:
                mapped.append({
                    "token": token_index,
                    "start": round(boundary["start"], 3),
                    "end": round(boundary["end"], 3)
                })
                consumed += len(spoken)
                if consumed >= len(token_parts[token_index]):
                    token_index += 1
                    consumed = 0
                break
            token_index += 1
            consumed = 0

    combined = []
    for timing in mapped:
        if combined and combined[-1]["token"] == timing["token"]:
            combined[-1]["end"] = timing["end"]
        else:
            combined.append(timing)
    return combined


def make_silence(seconds):
    silence_dir = SEGMENTS / "silence"
    silence_dir.mkdir(parents=True, exist_ok=True)
    key = f"{seconds:.2f}".replace(".", "_")
    target = silence_dir / f"silence-{key}.mp3"
    if target.exists():
        return target
    subprocess.run(
        [
            FFMPEG, "-y", "-f", "lavfi", "-i",
            "anullsrc=r=24000:cl=mono", "-t", f"{seconds:.2f}",
            "-codec:a", "libmp3lame", "-b:a", "48k", "-ar", "24000", "-ac", "1",
            str(target)
        ],
        check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL
    )
    return target


def duration(path):
    return float(MP3(path).info.length)


async def generate_episode(episode, concurrency):
    chapter = int(episode["chapter"])
    chapter_dir = SEGMENTS / f"k{chapter}"
    chapter_dir.mkdir(parents=True, exist_ok=True)
    OUTPUT.mkdir(parents=True, exist_ok=True)
    semaphore = asyncio.Semaphore(concurrency)
    tasks = [
        synthesize(index, item, episode["people"], chapter_dir, semaphore)
        for index, item in enumerate(episode["lines"])
    ]
    print(f"Kapitel {chapter}: generating {len(tasks)} voice segments...")
    segment_results = await asyncio.gather(*tasks)

    timeline = []
    concat_paths = []
    cursor = 0.0
    for item, (path, word_timings) in zip(episode["lines"], segment_results):
        spoken = duration(path)
        start = cursor
        end = start + spoken
        timeline.append({
            **item,
            "start": round(start, 3),
            "end": round(end, 3),
            "wordTimings": word_timings
        })
        concat_paths.append(path)
        pause = float(item.get("pauseAfter", 0.45))
        if pause > 0:
            concat_paths.append(make_silence(pause))
        cursor = end + pause

    concat_file = chapter_dir / "concat.txt"
    concat_file.write_text(
        "\n".join(f"file '{str(path.resolve()).replace(chr(39), chr(39) * 2)}'" for path in concat_paths),
        encoding="utf-8"
    )
    audio_target = OUTPUT / f"chapter-{chapter}.mp3"
    subprocess.run(
        [
            FFMPEG, "-y", "-f", "concat", "-safe", "0", "-i", str(concat_file),
            "-codec:a", "libmp3lame", "-b:a", "48k", "-ar", "24000", "-ac", "1",
            str(audio_target)
        ],
        check=True
    )
    episode["lines"] = timeline
    episode["audio"] = f"assets/podcasts/chapter-{chapter}.mp3?v={PODCAST_VERSION}"
    episode["durationSeconds"] = round(duration(audio_target), 2)
    episode["duration"] = f"{round(episode['durationSeconds'] / 60)} Min."
    print(
        f"Kapitel {chapter}: {episode['durationSeconds'] / 60:.1f} min, "
        f"{audio_target.stat().st_size / 1024 / 1024:.1f} MB"
    )


def write_javascript(episodes):
    payload = json.dumps(episodes, ensure_ascii=False, separators=(",", ":"))
    (ROOT / "app" / "data_podcast.js").write_text(
        "/* Generated synchronized A2 podcast data. */\nwindow.A2_PODCASTS=" + payload + ";\n",
        encoding="utf-8"
    )


async def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--chapters", default="all")
    parser.add_argument("--concurrency", type=int, default=6)
    args = parser.parse_args()
    episodes = json.loads((BUILD / "podcasts-long.json").read_text(encoding="utf-8"))
    selected = (
        {int(value) for value in args.chapters.split(",")}
        if args.chapters != "all"
        else {episode["chapter"] for episode in episodes}
    )
    existing = {}
    current_js = ROOT / "app" / "data_podcast.js"
    if current_js.exists() and "durationSeconds" in current_js.read_text(encoding="utf-8"):
        text = current_js.read_text(encoding="utf-8")
        existing_items = json.loads(text.split("window.A2_PODCASTS=", 1)[1].rsplit(";", 1)[0])
        existing = {item["chapter"]: item for item in existing_items}
    for episode in episodes:
        if episode["chapter"] in selected:
            await generate_episode(episode, args.concurrency)
        elif episode["chapter"] in existing:
            episode = existing[episode["chapter"]]
        existing[episode["chapter"]] = episode
    write_javascript([existing[number] for number in sorted(existing)])


if __name__ == "__main__":
    asyncio.run(main())
