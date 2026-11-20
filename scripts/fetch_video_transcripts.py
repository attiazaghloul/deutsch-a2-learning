"""Fetch the German (and Arabic) subtitles of the app's videos as timed text.

YouTube is not reachable from every machine, and since 20 November 2026 that
includes GitHub's runners, so run this on a personal machine
(.github/workflows/video-transcripts.yml says more):
    pip install yt-dlp
    python scripts/fetch_video_transcripts.py

For every video in app/js/23-videos.js and app/js/23-video-books.js that has
no text yet (--all: every video) it writes app/data_videos/<id>.json:
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
    """The videos of the library (yt:'...') and of the course books (['...',)."""
    library = (ROOT / "app" / "js" / "23-videos.js").read_text(encoding="utf-8")
    books = (ROOT / "app" / "js" / "23-video-books.js").read_text(encoding="utf-8")
    return sorted(set(re.findall(r"yt:'([\w-]{11})'", library)) | set(re.findall(r"\['([\w-]{11})',", books)))


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
    """Automatic captions: every word has a time. Lines end at a sentence end,
    at a pause of 0.8 s once they have 3 words (of 2 s before), or after 14
    words."""
    words = [(t, w) for event in events for t, w in event["words"]
             if w and w != "\n" and not re.fullmatch(r"\[.*\]", w)]
    words.sort()
    cues, line = [], []
    for index, (time, word) in enumerate(words):
        line.append((time, word))
        following = words[index + 1][0] if index + 1 < len(words) else time + 2
        pause = following - time
        if (pause > 2 or (pause > 0.8 and len(line) >= 3) or (word[-1] in ".?!" and len(line) >= 3)
                or len(line) >= 14 or index + 1 == len(words)):
            cues.append({"s": round(line[0][0], 2), "e": round(min(following, time + 1.2), 2),
                         "de": " ".join(w for _, w in line),
                         "w": [[round(t, 2), w] for t, w in line]})
            line = []
    return cues


# A subtitle line ends where the picture changes, not where a sentence does, so
# a line often carries half a sentence, or the end of one and the start of the
# next. Half a sentence is hard to read along and impossible to translate, so
# the lines are joined and cut again at the sentence ends.
SENTENCE_MARKS = ".!?"
AFTER_SENTENCE = " 	\"'“”)]"
ABBREVIATIONS = ("z. B.", "u. a.", "d. h.", "bzw.", "ca.", "usw.", "etc.", "Nr.", "Dr.", "Prof.",
                 "vgl.", "inkl.", "mind.", "max.", "Abb.", "S.")


def ends_sentence(text, position):
    """Whether the sentence mark here really ends a sentence, and is not the dot
    of an abbreviation, of an initial or of a numbered item."""
    following = text[position + 1:position + 2]
    if following and following not in AFTER_SENTENCE:
        return False
    if text[position] == "." and text[position - 1:position] in (".", "…"):
        return False          # the last dot of an ellipsis: the sentence runs on
    head = text[:position + 1]
    if text[position] != "." :
        return True
    if any(head.endswith(short) for short in ABBREVIATIONS):
        return False
    letter = head[-2:-1]
    alone = len(head) < 3 or not head[-3:-2].isalnum()
    return not (letter.isdigit() or (letter.isalpha() and alone))


def timed_pieces(cues):
    """The cues as timed pieces: one per word where the words carry a time,
    otherwise one for the whole line."""
    pieces = []
    for cue in cues:
        words = cue.get("w") or []
        # only the words that spell the line out: a line whose words are
        # incomplete keeps its own text, so nothing is lost
        spelled = "".join("".join(word.split()) for _, word in words) == "".join(cue["de"].split())
        if words and spelled:
            for index, (start, word) in enumerate(words):
                end = words[index + 1][0] if index + 1 < len(words) else cue["e"]
                pieces.append({"s": start, "e": max(end, start + 0.1), "text": word, "timed": True})
        elif cue["de"].strip():
            pieces.append({"s": cue["s"], "e": cue["e"], "text": cue["de"].strip(), "timed": False})
    return pieces


def sentence_cues(cues):
    """Re-cut the lines into whole sentences. Lines that carry no sentence marks
    at all are left alone: the older automatic captions have neither marks nor
    capitals, and nothing here can tell where their sentences end."""
    pieces = timed_pieces(cues)
    if not pieces:
        return cues
    joined, spans = "", []
    for piece in pieces:
        if joined:
            joined += " "
        spans.append((len(joined), len(joined) + len(piece["text"])))
        joined += piece["text"]

    cuts = [position + 1 for position, mark in enumerate(joined)
            if mark in SENTENCE_MARKS and ends_sentence(joined, position)]
    if len(cuts) < max(len(cues) * 0.25, 2):
        return cues
    if cuts[-1] < len(joined):
        cuts.append(len(joined))

    def piece_at(position):
        """The piece a character belongs to."""
        for index, (low, high) in enumerate(spans):
            if low <= position < high:
                return index, low, high
        return len(pieces) - 1, spans[-1][0], spans[-1][1]

    def time_at(position, end):
        """The time of a character. A line of its own carries no word times, so
        the time is taken from how far into the line the character sits."""
        index, low, high = piece_at(position)
        piece = pieces[index]
        if piece["timed"]:
            return piece["e"] if end else piece["s"]
        share = (position + (1 if end else 0) - low) / max(high - low, 1)
        return piece["s"] + min(max(share, 0), 1) * (piece["e"] - piece["s"])

    out, start = [], 0
    for cut in cuts:
        sentence = joined[start:cut].strip()
        if not sentence:
            continue
        first = start + (len(joined[start:cut]) - len(joined[start:cut].lstrip()))
        last = cut - (len(joined[start:cut]) - len(joined[start:cut].rstrip())) - 1
        begin, finish = time_at(first, False), time_at(last, True)
        if out:
            begin = max(begin, out[-1]["s"])
        line = {"s": round(begin, 2), "e": round(max(finish, begin + 0.4), 2), "de": sentence}
        words = [[round(piece["s"], 2), piece["text"]] for piece, (low, high) in zip(pieces, spans)
                 if piece["timed"] and first <= low <= last]
        if words:
            line["w"] = words
        out.append(line)
        start = cut
    return out


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
    done = tried = 0
    every = "--all" in sys.argv
    for video in video_ids():
        if not every and (OUT / f"{video}.json").exists():
            continue
        tried += 1
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
        cues = sentence_cues(cues)
        # translated Arabic is cut like YouTube's lines, not like the lines
        # cut here from automatic German, so it would land on the wrong line;
        # the app translates those lines itself
        arabic_source = manual_ar[0] if manual_ar else auto_ar[0] if auto_ar and kind == "manual" else None
        if arabic_source:
            attach_arabic(cues, load(arabic_source))
        payload = {"id": video, "de": kind, "ar": ("manual" if manual_ar else "translated") if arabic_source else None, "cues": cues}
        (OUT / f"{video}.json").write_text(json.dumps(payload, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
        print(f"{video}: {len(cues)} lines ({kind}), Arabic: {payload['ar']}", flush=True)
        done += 1
    print(f"{done} of {tried} transcripts")
    if tried and not done:
        sys.exit(1)


if __name__ == "__main__":
    main()
