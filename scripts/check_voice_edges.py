"""Check that no recorded clip cuts into a word at its start or end.

    python scripts/check_voice_edges.py [--level b1]

The player plays a clip from its start to its end time. The recordings keep
0.12 s of the original audio around every clip, so speech right before the
start or right after the end means the clip cuts a word. Fast (no speech
recognition): every clip of every voice is checked.
"""
import argparse
import json
import subprocess
from pathlib import Path

import numpy as np

ROOT = Path(__file__).resolve().parents[1]
RATE = 16000
EDGE = 0.08


def decode(path):
    out = subprocess.run(["ffmpeg", "-v", "error", "-i", str(path), "-f", "s16le", "-ac", "1", "-ar", str(RATE), "-"],
                         check=True, capture_output=True).stdout
    return np.frombuffer(out, dtype=np.int16).astype(np.float32) / 32768


def rms(samples):
    return float(np.sqrt(np.mean(samples ** 2))) if len(samples) else 0.0


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--level", default="")
    args = parser.parse_args()
    flagged = []
    for file in sorted((ROOT / "scripts" / "voices").glob(f"{args.level}*-timings.json")):
        data = json.loads(file.read_text(encoding="utf-8"))
        voice = data["voice"]
        parts = [decode(ROOT / "app" / "assets" / "speech" / part) for part in voice["parts"]]
        found = 0
        for index, (start, end, part) in enumerate(voice["timings"]):
            audio = parts[part]
            body = rms(audio[int(start * RATE):int(end * RATE)])
            before = rms(audio[max(0, int((start - EDGE) * RATE)):int(start * RATE)])
            after = rms(audio[int(end * RATE):int((end + EDGE) * RATE)])
            if body < 0.005 or before > 0.45 * body or after > 0.45 * body:
                found += 1
                flagged.append({"file": file.name, "index": index, "text": data["texts"][index],
                                "body": round(body, 4), "before": round(before / max(body, 1e-6), 2),
                                "after": round(after / max(body, 1e-6), 2)})
        print(f"{file.name}: {len(voice['timings'])} clips, {found} flagged", flush=True)
    out = ROOT / "build" / "voices" / f"edges{('-' + args.level) if args.level else ''}.json"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps(flagged, ensure_ascii=False, indent=1), encoding="utf-8")
    print(f"{out}: {len(flagged)} flagged")


if __name__ == "__main__":
    main()
