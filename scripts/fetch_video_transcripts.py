"""Fetch the German (and Arabic) subtitles of the app's videos as timed text.

YouTube is not reachable from every machine, so
.github/workflows/video-transcripts.yml runs this on GitHub:
    pip install yt-dlp
    python scripts/fetch_video_transcripts.py

For every video in app/js/23-videos.js it writes app/data_videos/<id>.json:
    {"id", "de": "manual"|"auto", "ar": "manual"|"translated"|null,
     "cues": [{"s": start, "e": end, "de": text, "ar": text?, "w": [[t, word], ...]?}]}
Manual subtitles come first. Automatic German captions carry a time for every
word ("w"), so the app can follow the words; they have no punctuation, so
their lines are cut at pauses. Arabic lines are matched to the German ones
by time.
"""
import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
WORK = ROOT / "build" / "subs"
OUT = ROOT / "app" / "data_videos"


def video_ids():
    source = (ROOT / "app" / "js" / "23-videos.js").read_text(encoding="utf-8")
    return sorted(set(re.findall(r"yt:'([\w-]{11})'", source)))


def fetch(video, langs, auto):
    WORK.mkdir(parents=True, exist_ok=True)
    args = ["yt-dlp", "--skip-download", "--sub-format", "json3", "--sub-langs", langs,
            "-o", str(WORK / f"{video}.{'auto' if auto else 'manual'}.%(ext)s"),
            "--write-auto-subs" if auto else "--write-subs", f"https://www.youtube.com/watch?v={video}"]
    result = subprocess.run(args, capture_output=True, text=True)
    print(result.stdout[-1500:], result.stderr[-1500:], sep="\n", flush=True)


def load(path):
    data = json.loads(path.read_text(encoding="utf-8"))
    events = []
    for event in data.get("events", []):
        segs = event.get("segs") or []
        text = "".join(seg.get("utf8", "") for seg in segs)
        if not text.strip() or "tStartMs" not in event:
            continue
        start = event["tStartMs"] / 1000
        words = [(start + seg.get("tOffsetMs", 0) / 1000, seg.get("utf8", "").strip())
                 for seg in segs if seg.get("utf8", "").strip()]
        events.append({"s": start, "e": start + event.get("dDurationMs", 0) / 1000,
                       "text": re.sub(r"\s+", " ", text).strip(), "words": words})
    return events


def manual_cues(events):
    cues = []
    for event in events:
        text = event["text"].replace("\n", " ").strip()
        if text and not re.fullmatch(r"\[.*\]|\(.*\)|♪.*", text):
            cues.append({"s": round(event["s"], 2), "e": round(event["e"], 2), "de": text})
    return cues


def auto_cues(events):
    """Automatic captions: every word has a time. Lines end at a pause of
    0.8 s or after 14 words."""
    words = [(t, w) for event in events for t, w in event["words"] if w and w != "\n"]
    words.sort()
    cues, line = [], []
    for index, (time, word) in enumerate(words):
        line.append((time, word))
        following = words[index + 1][0] if index + 1 < len(words) else time + 2
        if following - time > 0.8 or len(line) >= 14 or index + 1 == len(words):
            cues.append({"s": round(line[0][0], 2), "e": round(min(following, time + 1.2), 2),
                         "de": " ".join(w for _, w in line),
                         "w": [[round(t, 2), w] for t, w in line]})
            line = []
    return cues


def attach_arabic(cues, arabic):
    for cue in cues:
        best, overlap = None, 0.0
        for event in arabic:
            shared = min(cue["e"], event["e"]) - max(cue["s"], event["s"])
            if shared > overlap:
                best, overlap = event, shared
        if best and overlap > 0.3 * (cue["e"] - cue["s"]):
            cue["ar"] = best["text"].replace("\n", " ").strip()


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    done = 0
    for video in video_ids():
        fetch(video, "de.*,ar.*", auto=False)
        manual_de = sorted(WORK.glob(f"{video}.manual.de*.json3"))
        manual_ar = sorted(WORK.glob(f"{video}.manual.ar*.json3"))
        if not manual_de or not manual_ar:
            fetch(video, "de-orig,de,ar", auto=True)
        auto_de = sorted(WORK.glob(f"{video}.auto.de*.json3"))
        auto_ar = sorted(WORK.glob(f"{video}.auto.ar*.json3"))
        print(video, "manual:", [p.name for p in manual_de + manual_ar], "auto:", [p.name for p in auto_de + auto_ar], flush=True)
        if manual_de:
            cues, kind = manual_cues(load(manual_de[0])), "manual"
        elif auto_de:
            cues, kind = auto_cues(load(auto_de[0])), "auto"
        else:
            print(f"{video}: no German subtitles", flush=True)
            continue
        arabic_source = manual_ar[0] if manual_ar else auto_ar[0] if auto_ar else None
        if arabic_source:
            attach_arabic(cues, load(arabic_source))
        payload = {"id": video, "de": kind, "ar": ("manual" if manual_ar else "translated") if arabic_source else None, "cues": cues}
        (OUT / f"{video}.json").write_text(json.dumps(payload, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
        print(f"{video}: {len(cues)} lines ({kind}), Arabic: {payload['ar']}", flush=True)
        done += 1
    print(f"{done} transcripts")
    if not done:
        sys.exit(1)


if __name__ == "__main__":
    main()
