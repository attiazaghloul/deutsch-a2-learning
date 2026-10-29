"""Listen to every recorded clip the way the app plays it and flag the bad ones.

    pip install faster-whisper numpy
    python scripts/verify_voices.py --model <faster-whisper model dir> [--level b1] [--sample N]

For each voice of scripts/voices/<level>-timings.json the parts in
app/assets/speech/<level>/ are decoded, every clip is cut at its timing
(exactly what the player plays), and Whisper transcribes the clips in groups
of ten with a second of silence between them. A clip is flagged when
  - fewer than 70 % of its words are heard (a missing, wrong or extra word,
    a cut-off start or end), or
  - for clips of four words or more: Whisper does not hear German
    (an English or foreign accent).
The flagged clips go to build/voices/<level>-flagged.json with what was heard.
"""
import argparse
import json
import re
import subprocess
import unicodedata
from pathlib import Path

import numpy as np
from faster_whisper import WhisperModel

ROOT = Path(__file__).resolve().parents[1]
RATE = 16000
GROUP = 10
PAUSE = np.zeros(RATE, dtype=np.float32)


def decode(path):
    out = subprocess.run(
        ["ffmpeg", "-v", "error", "-i", str(path), "-f", "s16le", "-ac", "1", "-ar", str(RATE), "-"],
        check=True, capture_output=True,
    ).stdout
    return np.frombuffer(out, dtype=np.int16).astype(np.float32) / 32768


def words(value):
    value = unicodedata.normalize("NFKC", value).lower().replace("ß", "ss")
    value = re.sub(r"_{2,}", " ", value)
    return [word for word in re.findall(r"[a-zäöü0-9]+", value)]


def heard_share(expected, heard):
    want, got = words(expected), words(heard)
    if not want:
        return 1.0
    table = [[0] * (len(got) + 1) for _ in range(len(want) + 1)]
    for i in range(len(want) - 1, -1, -1):
        for j in range(len(got) - 1, -1, -1):
            table[i][j] = table[i + 1][j + 1] + 1 if want[i] == got[j] else max(table[i + 1][j], table[i][j + 1])
    return table[0][0] / len(want)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--model", required=True)
    parser.add_argument("--level", default="b1")
    parser.add_argument("--sample", type=int, default=0, help="check every n-th clip only")
    parser.add_argument("--voices", default="")
    parser.add_argument("--timings", help="another timings file, e.g. to calibrate on a checked library")
    args = parser.parse_args()
    timings_path = Path(args.timings) if args.timings else ROOT / "scripts" / "voices" / f"{args.level}-timings.json"
    data = json.loads(timings_path.read_text(encoding="utf-8"))
    model = WhisperModel(args.model, device="cpu", compute_type="int8")
    flagged = []
    for voice in data["voices"]:
        if args.voices and voice["id"] not in args.voices.split(","):
            continue
        parts = [decode(ROOT / "app" / "assets" / "speech" / part) for part in voice["parts"]]
        indexes = list(range(len(data["texts"])))
        if args.sample:
            indexes = indexes[::args.sample]
        checked = 0
        for start in range(0, len(indexes), GROUP):
            group = indexes[start:start + GROUP]
            pieces, windows, cursor = [], [], 0.0
            for index in group:
                begin, end, part = voice["timings"][index]
                clip = parts[part][int(begin * RATE):int(end * RATE)]
                windows.append((index, cursor, cursor + len(clip) / RATE, clip))
                pieces += [clip, PAUSE]
                cursor += len(clip) / RATE + 1
            segments, _ = model.transcribe(np.concatenate(pieces), language="de", beam_size=5,
                                           word_timestamps=True, condition_on_previous_text=False)
            heard = {index: [] for index in group}
            for segment in segments:
                for word in segment.words or []:
                    middle = (word.start + word.end) / 2
                    for index, w0, w1, _ in windows:
                        if w0 - 0.4 <= middle <= w1 + 0.4:
                            heard[index].append(word.word)
                            break
            for index, _, _, clip in windows:
                text = data["texts"][index]
                said = "".join(heard[index]).strip()
                share = heard_share(text, said)
                problem = None
                if share < 0.7:
                    problem = "words"
                elif len(words(text)) >= 4:
                    language, probability, _ = model.detect_language(clip)
                    if language != "de" and probability > 0.5:
                        problem = f"language {language} {probability:.2f}"
                if problem:
                    flagged.append({"voice": voice["id"], "index": index, "text": text, "heard": said,
                                    "share": round(share, 2), "problem": problem})
                checked += 1
            if (start // GROUP) % 20 == 0:
                print(f"{voice['id']}: {checked}/{len(indexes)} checked, {sum(item['voice'] == voice['id'] for item in flagged)} flagged", flush=True)
        print(f"{voice['id']}: {checked} checked, {sum(item['voice'] == voice['id'] for item in flagged)} flagged", flush=True)
    out = ROOT / "build" / "voices" / f"{args.level}-flagged.json"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps(flagged, ensure_ascii=False, indent=1), encoding="utf-8")
    print(f"{out}: {len(flagged)} flagged")


if __name__ == "__main__":
    main()
