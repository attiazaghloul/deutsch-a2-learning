"""Write the transcript of a video that YouTube has no German subtitles for.

yt-dlp brings the audio, faster-whisper reads it out in German with a time for
every word, and the lines are cut into whole sentences by the sentence_cues of
fetch_video_transcripts, so the file reads like every other transcript. Its
kind is "asr":
    pip install yt-dlp faster-whisper "av<16"
    python scripts/transcribe_videos.py <id> [<id> ...]

The audio is fetched one video at a time and deleted as soon as it is read, so
a long list still needs little room. A video whose own audio is near silent is
reported and skipped: AGFfuGf0mas and xY131QrSWjQ carry no audible speech at
all, and Whisper would otherwise write down what it thinks it hears in the
noise.
"""
import json
import re
import subprocess
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from fetch_video_transcripts import OUT, ROOT, sentence_cues  # noqa: E402

WORK = ROOT / "build" / "audio"
MODEL = "medium"
SILENT = 0.005          # a quarter of the level of the quietest video with speech
SPACED_HYPHEN = re.compile(r"(\w) -(\w)")      # Whisper writes "U -Bahn"


def audio_of(video):
    """The audio of one video, as a file in build/audio."""
    WORK.mkdir(parents=True, exist_ok=True)
    path = WORK / f"{video}.m4a"
    if not path.exists():
        subprocess.run([sys.executable, "-m", "yt_dlp", "-q", "-f", "140/bestaudio[ext=m4a]/bestaudio",
                        "-o", str(path), f"https://www.youtube.com/watch?v={video}"], check=False)
    return path if path.exists() else None


def cues_of(model, samples):
    """The lines Whisper hears, each with a time for every word."""
    cues = []
    segments, _ = model.transcribe(samples, language="de", word_timestamps=True,
                                   vad_filter=True, beam_size=5, condition_on_previous_text=False)
    for segment in segments:
        text = SPACED_HYPHEN.sub(r"\1-\2", segment.text.strip())
        if not text:
            continue
        cue = {"s": round(segment.start, 2), "e": round(segment.end, 2), "de": text}
        words = [[round(word.start, 2), word.word.strip()] for word in (segment.words or []) if word.word.strip()]
        if words:
            cue["w"] = words
        cues.append(cue)
    return cues


def main():
    import numpy
    from faster_whisper import WhisperModel
    from faster_whisper.audio import decode_audio

    videos = [name for name in sys.argv[1:] if not name.startswith("-")]
    if not videos:
        sys.exit(__doc__)
    OUT.mkdir(parents=True, exist_ok=True)
    model = WhisperModel(MODEL, device="cpu", compute_type="int8", cpu_threads=8)
    written = 0
    for video in videos:
        audio = audio_of(video)
        if not audio:
            print(f"{video}: no audio to fetch", flush=True)
            continue
        samples = decode_audio(str(audio), sampling_rate=16000)
        level = float(numpy.sqrt(numpy.mean(samples ** 2)))
        if level < SILENT:
            print(f"{video}: the audio is silent (level {level:.4f}), no transcript", flush=True)
            audio.unlink(missing_ok=True)
            continue
        cues = sentence_cues(cues_of(model, samples))
        (OUT / f"{video}.json").write_text(
            json.dumps({"id": video, "de": "asr", "ar": None, "cues": cues},
                       ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
        audio.unlink(missing_ok=True)
        print(f"{video}: {len(cues)} sentences", flush=True)
        written += 1
    print(f"{written} of {len(videos)} transcripts")


if __name__ == "__main__":
    main()
