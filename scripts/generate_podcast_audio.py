import argparse
import asyncio
import json
import subprocess
from pathlib import Path

import edge_tts
import imageio_ffmpeg
from mutagen.mp3 import MP3

ROOT = Path(__file__).resolve().parents[1]
BUILD = ROOT / "build"
SEGMENTS = BUILD / "podcast-segments"
OUTPUT = ROOT / "app" / "assets" / "podcasts"
FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()


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
    if target.exists() and target.stat().st_size > 1000:
        try:
            if MP3(target).info.length > 0.1:
                return target
        except Exception:
            target.unlink(missing_ok=True)
    person = next((entry for entry in people if entry["name"] == item["speaker"]), people[index % len(people)])
    rate, pitch = voice_settings(person)
    async with semaphore:
        for attempt in range(4):
            try:
                communicate = edge_tts.Communicate(
                    item["de"], person["voice"], rate=rate, pitch=pitch, volume="+0%"
                )
                await communicate.save(str(target))
                if target.exists() and target.stat().st_size > 1000 and MP3(target).info.length > 0.1:
                    return target
            except Exception:
                if attempt == 3:
                    raise
                await asyncio.sleep(1.5 * (attempt + 1))
    return target


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
    segment_paths = await asyncio.gather(*tasks)

    timeline = []
    concat_paths = []
    cursor = 0.0
    for item, path in zip(episode["lines"], segment_paths):
        spoken = duration(path)
        start = cursor
        end = start + spoken
        timeline.append({**item, "start": round(start, 3), "end": round(end, 3)})
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
    episode["audio"] = f"assets/podcasts/chapter-{chapter}.mp3?v=natural-dialogue-2"
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
