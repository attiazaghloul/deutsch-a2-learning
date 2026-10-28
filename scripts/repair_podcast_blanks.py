"""Cut the read-out blanks out of the A2 podcasts (word-sync-3).

The quiz questions ("Frage 1: Ich ___ gestern lange gearbeitet.") were sent
to the voice with "___" in them, so every episode says "Unterstrich,
Unterstrich, Unterstrich" in its quiz. This finds those words by speech
recognition in the 45 quiz lines, replaces each blank with a short pause and
moves the line and word timings after it, so the highlighting stays in sync.

    pip install faster-whisper librosa soundfile numpy
    python scripts/repair_podcast_blanks.py --model <faster-whisper model dir>

It reads the old episodes from git and rewrites app/assets/podcasts/*.mp3
and app/data_podcast.js. Needs ffmpeg on PATH.
"""

import argparse
import json
import subprocess
from pathlib import Path

import librosa
import numpy as np
import soundfile
from faster_whisper import WhisperModel

from repair_fixed_speech import ASR_SR, FADE, HOP, SR, blank_cuts, decode, git_show, without

ROOT = Path(__file__).resolve().parents[1]
DATA_PATH = ROOT / "app" / "data_podcast.js"
OUTPUT = ROOT / "app" / "assets" / "podcasts"
SOURCE_COMMIT = "46317ca"  # the last commit with the read-out blanks
VERSION = "word-sync-4"
PAUSE = 0.6                # a quiz blank is a pause the listener fills


def load(source):
    return json.loads(source.split("window.A2_PODCASTS=", 1)[1].rsplit(";", 1)[0])


def line_cuts(model, pcm16, rms, line):
    """Source-time spans of the read-out blanks in one line."""
    spans = [(line["start"], line["end"])]
    for _ in range(3):
        cuts = blank_cuts(model, pcm16, rms, line["de"], spans, first_pass=False)
        if not cuts or not without(spans, cuts):
            break
        spans = without(spans, cuts)
    # what was removed between the kept spans
    return [[left[1], right[0]] for left, right in zip(spans, spans[1:])] + (
        [[spans[-1][1], line["end"]]] if line["end"] - spans[-1][1] > 0.04 else [])


def repair_episode(model, episode):
    name = f"chapter-{episode['chapter']}.mp3"
    audio = git_show(SOURCE_COMMIT, f"app/assets/podcasts/{name}")
    pcm, pcm16 = decode(audio, SR), decode(audio, ASR_SR)
    rms = librosa.feature.rms(y=pcm, frame_length=2 * HOP, hop_length=HOP, center=True)[0]

    cuts = []
    for line in episode["lines"]:
        if "___" in line["de"]:
            cuts += line_cuts(model, pcm16, rms, line)
    cuts.sort()

    def moved(t):
        """Where source time `t` lands in the repaired episode."""
        shift = 0.0
        for cut_start, cut_end in cuts:
            if t >= cut_end:
                shift += PAUSE - (cut_end - cut_start)
            elif t > cut_start:
                return cut_start + shift
        return t + shift

    pieces, position = [], 0.0
    for cut_start, cut_end in cuts:
        piece = pcm[int(position * SR):int(cut_start * SR)].copy()
        if position and len(piece) > 2 * FADE:
            piece[:FADE] *= np.linspace(0, 1, FADE, dtype=np.float32)
        if len(piece) > 2 * FADE:
            piece[-FADE:] *= np.linspace(1, 0, FADE, dtype=np.float32)
        pieces += [piece, np.zeros(int(PAUSE * SR), np.float32)]
        position = cut_end
    tail = pcm[int(position * SR):].copy()
    if position and len(tail) > FADE:
        tail[:FADE] *= np.linspace(0, 1, FADE, dtype=np.float32)
    pieces.append(tail)

    for line in episode["lines"]:
        start, end = line["start"], line["end"]
        for timing in line.get("wordTimings") or []:
            timing["start"] = round(moved(start + timing["start"]) - moved(start), 3)
            timing["end"] = round(moved(start + timing["end"]) - moved(start), 3)
        line["start"], line["end"] = round(moved(start), 3), round(moved(end), 3)

    wav = OUTPUT / f"chapter-{episode['chapter']}.wav"
    soundfile.write(wav, np.concatenate(pieces), SR, subtype="PCM_16")
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", str(wav), "-codec:a", "libmp3lame", "-b:a", "48k",
                    "-ar", str(SR), "-ac", "1", str(OUTPUT / name)], check=True)
    wav.unlink()
    seconds = round(sum(len(piece) for piece in pieces) / SR, 2)
    episode.update({"audio": f"assets/podcasts/{name}?v={VERSION}", "durationSeconds": seconds,
                    "duration": f"{round(seconds / 60)} Min."})
    print(f"{name}: {len(cuts)} blanks cut, {seconds / 60:.1f} min", flush=True)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--model", required=True, help="faster-whisper model directory or name")
    args = parser.parse_args()
    episodes = load(git_show(SOURCE_COMMIT, "app/data_podcast.js").decode("utf-8"))
    model = WhisperModel(args.model, device="cpu", compute_type="int8")
    for episode in episodes:
        repair_episode(model, episode)
    payload = json.dumps(episodes, ensure_ascii=False, separators=(",", ":"))
    DATA_PATH.write_text("/* Generated synchronized A2 podcast data. */\nwindow.A2_PODCASTS=" + payload + ";\n",
                         encoding="utf-8")


if __name__ == "__main__":
    main()
