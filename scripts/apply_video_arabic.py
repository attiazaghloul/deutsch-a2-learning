"""Put an Arabic translation into a video's transcript, line by line.

The Arabic of these videos is written by meaning, not word for word, so it is
written by hand (or by a model reading whole sentences) into a JSON list of
lines - one Arabic line per German line, in order - and put in place here:
    python scripts/apply_video_arabic.py <id> <lines.json>

It refuses a list that does not line up with the transcript, because a shifted
line would put the wrong Arabic under the German. On success the file's Arabic
kind becomes "ai", which is what the app shows its note for.
"""
import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from fetch_video_transcripts import OUT  # noqa: E402


def main():
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    video, lines = sys.argv[1], Path(sys.argv[2])
    path = OUT / f"{video}.json"
    if not path.exists():
        sys.exit(f"{video}: no transcript to translate")
    data = json.loads(path.read_text(encoding="utf-8"))
    arabic = json.loads(lines.read_text(encoding="utf-8"))

    if not isinstance(arabic, list) or not all(isinstance(text, str) for text in arabic):
        sys.exit(f"{lines}: expected a list of strings")
    if len(arabic) != len(data["cues"]):
        sys.exit(f"{video}: {len(arabic)} Arabic lines for {len(data['cues'])} German ones")
    missing = [index for index, text in enumerate(arabic) if not text.strip()]
    if missing:
        sys.exit(f"{video}: no Arabic on line(s) {missing}")
    untranslated = [index for index, text in enumerate(arabic)
                    if not any("؀" <= letter <= "ۿ" for letter in text)]
    if untranslated:
        sys.exit(f"{video}: no Arabic letters on line(s) {untranslated}")

    for cue, text in zip(data["cues"], arabic):
        cue["ar"] = text.strip()
    data["ar"] = "ai"
    path.write_text(json.dumps(data, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    print(f"{video}: {len(arabic)} lines of Arabic in place")


if __name__ == "__main__":
    main()
