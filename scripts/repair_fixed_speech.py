"""Rebuild the A1 and A2 sentence sprites from their first recordings.

The A1 sprites (a1-fixed-voices-1) and the A2 sentence sprites
(fixed-voices-1; the A2 word sprites are fine) were synthesized with " Audiomarker. " between the texts and
with gap-fill blanks sent to the voice as they are, so the audio says
"Audiomarker" after every clip and "Unterstrich"/"underscore" for every "___".
Students heard both. edge-tts may not be reachable, so this cuts the existing
audio instead of synthesizing it again:

- every clip ends where the player used to stop it (85 ms before the old timing
  end, which is 60 ms after the last word), before the marker;
- in texts with "___", speech recognition finds the read-out blanks and the
  exercise number in front ("3. ___" was read "Dritter Unterstrich ..."); they
  are cut and each blank becomes a short pause;
- a few old timings end long after the last word; every clip is transcribed
  once more and where "Audiomarker" is still heard, it is cut out;
- the clips are written into a new sprite with silence between them, so a
  late stop on a slow device plays silence, never the neighbouring clip.

    pip install faster-whisper librosa soundfile numpy
    python scripts/repair_fixed_speech.py --level a1 --model <faster-whisper model dir>
    python scripts/repair_fixed_speech.py --level a2 --model <faster-whisper model dir>

The model can be any multilingual faster-whisper model ("small" was used).
It reads the old sprites and timings from git (they are replaced in the
working tree) and rewrites the level's sprites and data file (for A2 only the
sentence voices; the word aliases are kept). Needs ffmpeg on PATH.
"""

import argparse
import json
import re
import subprocess
from pathlib import Path

import librosa
import numpy as np
import soundfile
from faster_whisper import WhisperModel

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "app" / "assets" / "speech"
LEVELS = {
    "a1": {
        "data": "app/data_speech_a1.js",
        "global": "A1_FIXED_SPEECH",
        "comment": "Generated fixed cross-device A1 speech library.",
        "audio": "a1-{voice}.mp3",
        "source": "4590536",  # "Keep two recorded voices (Mia and Tarek)"
        "version": "a1-fixed-voices-4",
    },
    "a2": {
        "data": "app/data_speech_clean.js",
        "global": "A2_FIXED_SPEECH",
        "comment": "Generated fixed cross-device speech library.",
        "audio": "{voice}.mp3",
        "source": "46317ca",  # the last commit with the marker recordings
        "version": "fixed-voices-8",
    },
}

SR = 24000                 # rate of the sprites
ASR_SR = 16000
HOP = 240                  # 10 ms
SILENT = 0.01              # -40 dBFS
GAP, BLANK, FADE = 0.45, 0.3, int(0.008 * SR)
BUILD = ROOT / "build" / "repair-speech"
JUNK = re.compile(r"unter|strich|underscore|under|score|audi|marker|maker", re.I)
MARKER = re.compile(r"audi|marke|maker", re.I)
ORDINAL = re.compile(r"\d|erst|zweit|dritt|viert|fünft|sechst|sieb|acht|neun|zehn|elf|zwölf|gritt|ritter", re.I)


def load_library(source, name):
    return json.loads(source.split(f"window.{name}=", 1)[1].rsplit(";", 1)[0])


def git_show(commit, path):
    return subprocess.run(["git", "-C", str(ROOT), "show", f"{commit}:{path}"],
                          capture_output=True, check=True).stdout


def decode(audio, rate):
    raw = subprocess.run(["ffmpeg", "-v", "error", "-i", "pipe:0", "-f", "s16le", "-ac", "1", "-ar", str(rate), "-"],
                         input=audio, capture_output=True, check=True).stdout
    return np.frombuffer(raw, np.int16).astype(np.float32) / 32768


def quietest(rms, t0, t1):
    f0 = int(round(t0 * SR / HOP))
    f1 = max(f0 + 1, int(round(t1 * SR / HOP)))
    return (f0 + int(np.argmin(rms[f0:f1]))) * HOP / SR


def clip_bounds(rms, timings, index):
    """Start where the pause before the first word ends; end at the last word."""
    a, b = timings[index]
    frame = int(round(a * SR / HOP))
    stop = max(0, int(round((a - 0.12) * SR / HOP)))
    while frame > stop and rms[frame - 1] >= SILENT:
        frame -= 1
    start = frame * HOP / SR - 0.02
    if index:
        start = max(start, timings[index - 1][1] + 0.05)
    # The old timings end 60 ms after the last word and "Audiomarker" can
    # follow right after it; the player used to stop 85 ms early, keep that.
    end = max(start + 0.12, b - 0.085)
    return start, end


def blank_cuts(model, pcm16, rms, text, spans, first_pass, pattern=JUNK, pause=BLANK):
    """Source-time spans of read-out blanks (and the exercise number before
    them), or of other `pattern` words, in the audio the kept `spans` play
    (with `pause` seconds between them)."""
    gap = np.zeros(int(pause * ASR_SR), np.float32)
    pieces, layout, offset = [], [], 0.0
    for t0, t1 in spans:
        piece = pcm16[int(t0 * ASR_SR):int(t1 * ASR_SR)]
        layout.append((offset, t0, t1))
        pieces += [piece, gap]
        offset += len(piece) / ASR_SR + pause
    segments, _ = model.transcribe(np.concatenate(pieces), language="de", word_timestamps=True, beam_size=5,
                                   condition_on_previous_text=False)
    words = [word for part in segments for word in part.words]

    def source(word):
        middle = (word.start + word.end) / 2
        clip_offset, t0, t1 = next((span for span in reversed(layout) if span[0] <= middle), layout[0])
        return (min(t1, max(t0, t0 + word.start - clip_offset)),
                min(t1, max(t0, t0 + word.end - clip_offset)), t0, t1)

    # a word of the text itself ("untersucht", "Unterricht") is never junk
    text_words = {normalized(token) for token in re.findall(r"\w+", text)}
    cuts, previous_junk, heard_text = [], False, False
    for position, word in enumerate(words):
        match = pattern.search(word.word)
        if match and normalized(word.word) in text_words:
            match = None
        if first_pass and position == 0 and re.match(r"^\d{1,2}\.\s", text) and ORDINAL.search(word.word):
            match = re.match(r"", word.word)
        if not match:
            previous_junk = False
            heard_text = True
            continue
        cut_start, cut_end, t0, t1 = source(word)
        # "Hahnemann-Audiomarke" comes back as one word: cut from the marker on.
        if match.start() > len(word.word) - len(word.word.lstrip()) + 1:
            cut_start += (cut_end - cut_start) * match.start() / len(word.word)
        cut_start = t0 if cut_start - t0 < 0.08 else quietest(rms, cut_start - 0.07, cut_start + 0.07)
        cut_end = t1 if t1 - cut_end < 0.08 else quietest(rms, cut_end - 0.07, cut_end + 0.07)
        # "___? · Ja, ...": nothing of the text comes before the first blank
        if not cuts and not heard_text and re.match(r"^[\d.\s]*\W*_", text):
            cut_start = layout[0][1]
        # "Unter Strich, Unter Strich" is one blank: one cut, no slivers between
        if previous_junk and cuts:
            cuts[-1][1] = max(cuts[-1][1], cut_end)
        elif cut_end > cut_start:
            cuts.append([cut_start, cut_end])
        previous_junk = True
    return cuts


def normalized(value):
    return re.sub(r"\W", "", value).lower()


def pause_before(rms, t):
    """End of the pause (>= 50 ms of silence) nearest to `t`, or `t`."""
    f0, f1 = int((t - 0.35) * SR / HOP), int((t + 0.35) * SR / HOP)
    best, run = None, 0
    for frame in range(max(0, f0), f1):
        run = run + 1 if rms[frame] < SILENT else 0
        if run >= 5 and (frame + 1 >= f1 or rms[frame + 1] >= SILENT):
            end = (frame + 1) * HOP / SR
            if best is None or abs(end - t) < abs(best - t):
                best = end
    return best - 0.02 if best is not None else t


def without(spans, cuts):
    """`spans` minus `cuts`, dropping slivers shorter than 40 ms."""
    for cut_start, cut_end in cuts:
        kept = []
        for t0, t1 in spans:
            for piece in ((t0, min(t1, cut_start)), (max(t0, cut_end), t1)):
                if piece[1] - piece[0] > 0.04:
                    kept.append(piece)
        spans = kept
    return spans


def faded(pcm, t0, t1):
    piece = pcm[int(t0 * SR):int(t1 * SR)].copy()
    length = min(FADE, len(piece) // 2)
    if length:
        ramp = np.linspace(0, 1, length, dtype=np.float32)
        piece[:length] *= ramp
        piece[-length:] *= ramp[::-1]
    return piece


def blank_spans(model, pcm16, rms, texts, timings, cache_name):
    """Kept source spans of every clip; cached, the blank search is slow."""
    cache = BUILD / f"{cache_name}-spans.json"
    if cache.exists():
        cached = json.loads(cache.read_text(encoding="utf-8"))
        if cached["texts"] == texts:
            result = [[tuple(span) for span in spans] for spans in cached["spans"]]
            if not cached.get("rechecked"):
                result = recheck_blanks(model, pcm16, rms, texts, result, cache_name)
                cache.write_text(json.dumps({"texts": texts, "spans": result, "rechecked": True}), encoding="utf-8")
            return result
    result = []
    for index, text in enumerate(texts):
        start, end = clip_bounds(rms, timings, index)
        spans = [(start, end)]
        # Listen again to what is left: a blank the first pass merged into a
        # neighbouring word shows up on its own once that word is cut.
        for number in range(3 if "_" in text else 0):
            cuts = blank_cuts(model, pcm16, rms, text, spans, first_pass=number == 0)
            if not cuts or not without(spans, cuts):
                break
            spans = without(spans, cuts)
        result.append(spans)
        if index % 500 == 0:
            print(f"  {cache_name}: blanks {index}/{len(texts)}", flush=True)
    result = recheck_blanks(model, pcm16, rms, texts, result, cache_name)
    BUILD.mkdir(parents=True, exist_ok=True)
    cache.write_text(json.dumps({"texts": texts, "spans": result, "rechecked": True}), encoding="utf-8")
    return result


def recheck_blanks(model, pcm16, rms, texts, all_spans, cache_name):
    """Listen to every clip with a blank once more as one piece of audio.

    The search above hears the kept pieces with pauses between them; heard
    without them, a blank it missed ("___? · Ja, die Wohnung ...") can come
    out as "Undescore" and is cut too.
    """
    for index, text in enumerate(texts):
        if "_" not in text:
            continue
        for _ in range(2):
            cuts = blank_cuts(model, pcm16, rms, text, all_spans[index], first_pass=False, pause=0)
            if not cuts or not without(all_spans[index], cuts):
                break
            print(f"  {cache_name}: blank still heard in clip {index}: {text[:50]!r}", flush=True)
            all_spans[index] = without(all_spans[index], cuts)
    return all_spans


def clips_with_marker(model, pcm16, texts, all_spans, indexes):
    """Indexes of clips in which the recognizer still hears "Audiomarker".

    A few old timings end long after the last word (in "Frau Meier" the whole
    marker is inside). Many clips share one 30 s window to keep this fast; a
    word belongs to the clip its middle falls in.
    """
    gap = np.zeros(int(1.2 * ASR_SR), np.float32)
    heard, window, layout, offset = {}, [gap[:len(gap) // 2]], [], 0.6

    def transcribe():
        segments, _ = model.transcribe(np.concatenate(window + [gap[:len(gap) // 2]]), language="de", beam_size=1,
                                       temperature=0.0, word_timestamps=True, condition_on_previous_text=False)
        for word in (word for part in segments for word in part.words):
            middle = (word.start + word.end) / 2
            owner = min(layout, key=lambda item: 0 if item[1] <= middle <= item[2]
                        else min(abs(middle - item[1]), abs(middle - item[2])))
            heard[owner[0]] = heard.get(owner[0], "") + word.word

    for index in indexes:
        clip = np.concatenate([pcm16[int(t0 * ASR_SR):int(t1 * ASR_SR)] for t0, t1 in all_spans[index]])
        length = len(clip) / ASR_SR
        if layout and offset + length + 1.2 > 28.5:
            transcribe()
            window, layout, offset = [gap[:len(gap) // 2]], [], 0.6
        layout.append((index, offset, offset + length))
        window += [clip, gap]
        offset += length + 1.2
    if layout:
        transcribe()
    return [index for index, said in heard.items() if MARKER.search(said) and not MARKER.search(texts[index])]


def rebuild_voice(model, level, texts, voice):
    name = level["audio"].format(voice=voice["id"])
    audio = git_show(level["source"], f"app/assets/speech/{name}")
    pcm, pcm16 = decode(audio, SR), decode(audio, ASR_SR)
    rms = librosa.feature.rms(y=pcm, frame_length=2 * HOP, hop_length=HOP, center=True)[0]
    all_spans = blank_spans(model, pcm16, rms, texts, voice["timings"], Path(name).stem)

    # which clips still say "Audiomarker" (cached: the check takes an hour)
    markers = BUILD / f"{Path(name).stem}-markers.json"
    if markers.exists() and json.loads(markers.read_text(encoding="utf-8"))["texts"] == texts:
        suspects = json.loads(markers.read_text(encoding="utf-8"))["suspects"]
    else:
        suspects = clips_with_marker(model, pcm16, texts, all_spans, range(len(texts)))
        markers.write_text(json.dumps({"texts": texts, "suspects": suspects}), encoding="utf-8")
    print(f"  {voice['id']}: marker heard in {len(suspects)} clips {suspects}", flush=True)
    for index in suspects:
        # cut, then listen to this clip alone until the marker is gone
        for _ in range(3):
            cuts = blank_cuts(model, pcm16, rms, texts[index], all_spans[index], first_pass=False, pattern=MARKER)
            if cuts:
                # Nothing of the text follows the marker: cut to the end, from
                # the pause before it (word timestamps can be 0.3 s early).
                marker = [pause_before(rms, min(cut[0] for cut in cuts)), all_spans[index][-1][1]]
                all_spans[index] = without(all_spans[index], [marker]) or all_spans[index]
            if not clips_with_marker(model, pcm16, texts, all_spans, [index]):
                break
        else:
            print(f"  {voice['id']}: marker still heard in clip {index}: {texts[index]!r}", flush=True)

    out = [np.zeros(int(0.2 * SR), np.float32)]
    cursor, new_timings = 0.2, []
    for index, spans in enumerate(all_spans):
        end = clip_bounds(rms, voice["timings"], index)[1]
        clip = []
        for number, (t0, t1) in enumerate(spans):
            if number:
                clip.append(np.zeros(int(BLANK * SR), np.float32))
            clip.append(faded(pcm, t0, t1))
        if "_" in texts[index] and spans[-1][1] < end - 0.04:
            clip.append(np.zeros(int(BLANK * SR), np.float32))  # "Heute ist der ___" keeps its blank
        clip = np.concatenate(clip)
        # 30 ms of the surrounding silence on both sides
        new_timings.append([round(cursor - 0.03, 3), round(cursor + len(clip) / SR + 0.03, 3)])
        out += [clip, np.zeros(int(GAP * SR), np.float32)]
        cursor += len(clip) / SR + GAP

    wav = OUTPUT / f"{Path(name).stem}.wav"
    soundfile.write(wav, np.concatenate(out), SR, subtype="PCM_16")
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", str(wav), "-codec:a", "libmp3lame", "-b:a", "32k",
                    "-ar", str(SR), "-ac", "1", str(OUTPUT / name)], check=True)
    wav.unlink()
    print(f"{name}: {cursor / 60:.1f} min")
    return {**voice, "audio": f"assets/speech/{name}?v={level['version']}", "timings": new_timings}


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--level", required=True, choices=sorted(LEVELS))
    parser.add_argument("--model", required=True, help="faster-whisper model directory or name")
    args = parser.parse_args()
    level = LEVELS[args.level]
    library = load_library(git_show(level["source"], level["data"]).decode("utf-8"), level["global"])
    data_path = ROOT / level["data"]
    current = load_library(data_path.read_text(encoding="utf-8"), level["global"])
    if current["texts"] != library["texts"]:
        raise SystemExit("The texts changed since the first recordings; generate the library again instead.")
    model = WhisperModel(args.model, device="cpu", compute_type="int8")
    voices = [rebuild_voice(model, level, library["texts"], voice) for voice in library["voices"]]
    # keeps the A2 word aliases as they are
    payload = {**current, "version": level["version"], "trimmed": True, "voices": voices}
    data_path.write_text(
        f"/* {level['comment']} */\n"
        f"window.{level['global']}={json.dumps(payload, ensure_ascii=False, separators=(',', ':'))};\n",
        encoding="utf-8",
    )


if __name__ == "__main__":
    main()
