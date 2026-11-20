"""Turn the placed cells of the booklet into the app's data.

    python parse.py cells.json review.json

The booklet is the same shape on every lesson: a number and a German title, an
Arabic title, a line of Lernziele, then the sections Wortschatz, Lesetext,
Grammatik, Redemittel, Rollenspiele, Prüfungstraining and Übungen. The
vocabulary is a table of three columns - word, meaning, example - with the
Arabic of the word under the word itself, so it is read by column. The other
sections are prose and are kept as ordered blocks, each German block carrying
the Arabic that sits with it.
"""
import json
import re
import sys
from pathlib import Path

SECTIONS = [("Wortschatz", "wortschatz", "Wortschatz", "المفردات"),
            ("Lesetext", "lesetext", "Lesetext", "نص القراءة"),
            ("Grammatik", "grammatik", "Grammatik", "القواعد"),
            ("Redemittel", "redemittel", "Redemittel", "تعبيرات جاهزة"),
            ("Rollenspiele", "rollenspiele", "Rollenspiele & Schreiben", "حوار وكتابة"),
            ("Prüfungstraining", "pruefung", "Prüfungstraining", "تدريب الامتحان"),
            ("Übungen", "uebungen", "Übungen", "تمارين")]
EXTRAS = [("Grammatik auf einen Blick", "grammatik-blick", "القواعد في لمحة"),
          ("Typische Fehler", "fehler", "أخطاء شائعة"),
          ("Lösungen", "loesungen", "الحلول")]
COL2, COL3 = 188, 305            # where the meaning and the example column start
ARABIC = re.compile(r"[؀-ۿ]")
FORM = re.compile(r"^(.+?)\s+((?:Pl\.|nur Sg\.|ist |hat |Ausdruck|Adj\.|Adv\.|Nomen|Verb).*)$")


def tidy(text):
    """One space between words, and the dash, slash and brackets as they read."""
    text = re.sub(r"\s+", " ", text).strip()
    text = re.sub(r"\s*/\s*", " / ", text)
    text = re.sub(r"\s*([–—])\s*", lambda hit: " " + hit.group(1) + " ", text)
    text = re.sub(r"([(\[])\s+", lambda hit: hit.group(1), text)
    text = re.sub(r"\s+([)\]])", lambda hit: hit.group(1), text)
    # a diacritic that lost its letter in the PDF has nothing left to sit on
    text = re.sub(r"^[ً-ْٰ]+\s*", "", text)
    return re.sub(r"\s+", " ", text).strip()


def section_of(text):
    for name, key, _, _ in SECTIONS:
        if text.startswith(name):
            return key
    return None


def lesson_starts(pages):
    """The page of every lesson: it carries the number in a huge size."""
    starts = {}
    for page in pages:
        for cell in page["lines"]:
            if cell["size"] >= 40 and cell["text"].strip().isdigit():
                number = int(cell["text"].strip())
                if 1 <= number <= 30 and number not in starts:
                    starts[number] = page["page"]
    return starts


def rows_of(cells):
    """The cells grouped into the rows of the page, in reading order."""
    rows, row = [], []
    for cell in sorted(cells, key=lambda c: (c["page"], c["top"], c["x0"])):
        if row and (cell["page"] != row[0]["page"] or cell["top"] - row[0]["top"] > 1.6):
            rows.append(row)
            row = []
        row.append(cell)
    if row:
        rows.append(row)
    return rows


def words_of(cells):
    """The vocabulary table: one entry per word, read by column.

    A word, its meaning and its example stand on the same row, so a row that
    carries a meaning starts a new word; a row with only a word is the rest of
    the word above (der Gastarbeiter / die Gastarbeiterin), and a row with only
    a meaning or an example is the rest of that. The Arabic of a word sits
    under the word itself, the Arabic of a heading far to the right.
    """
    words, group, group_ar = [], "", ""
    for row in rows_of(cells):
        first = [c for c in row if c["x0"] < COL2 and not c["ar"]]
        middle = [c for c in row if COL2 <= c["x0"] < COL3 and not c["ar"]]
        last = [c for c in row if c["x0"] >= COL3 and not c["ar"]]
        for cell in [c for c in row if c["ar"]]:
            if cell["x0"] > 420:
                group_ar = cell["text"]
            elif words:
                piece = cell["text"]
                glue = "" if len(piece) == 1 and not piece.isalnum() else " "
                words[-1]["ar"] = (words[-1]["ar"] + glue + piece).strip()
        first = [c for c in first if c["text"] not in ("Wort", "Bedeutung", "Beispiel")
                 and not c["text"].startswith("Wortschatz")]
        if first and max(c["size"] for c in first) >= 10.1 and not middle:
            group, group_ar = " ".join(c["text"] for c in first), ""
            continue
        # every word in the booklet carries an Arabic line under it, so a row
        # that arrives before that line is the rest of the word above
        starts = (bool(first) and (bool(middle) or bool(last))
                  and max(c["size"] for c in first) >= 8.6
                  and (not words or words[-1]["ar"]))
        if starts:
            words.append({"w": " ".join(c["text"] for c in first if c["size"] >= 8.6),
                          "form": " ".join(c["text"] for c in first if c["size"] < 8.6),
                          "ar": "", "d": "", "ex": "", "group": group, "groupAr": group_ar})
        elif first and words:
            for cell in first:
                field = "w" if cell["size"] >= 8.6 else "form"
                words[-1][field] = (words[-1][field] + " " + cell["text"]).strip()
        if words:
            for cell in middle:
                words[-1]["d"] = (words[-1]["d"] + " " + cell["text"]).strip()
            for cell in last:
                words[-1]["ex"] = (words[-1]["ex"] + " " + cell["text"]).strip()
    out = []
    for word in words:
        word = {key: tidy(value) for key, value in word.items()}
        match = FORM.match(word["w"])
        if match:
            word["w"], extra = match.group(1), match.group(2)
            word["form"] = tidy(f"{extra} {word['form']}")
        if word["w"] and len(word["w"]) > 1:
            out.append(word)
    return out


def blocks_of(cells):
    """Prose: German blocks, each with the Arabic that belongs to it."""
    blocks = []
    for cell in cells:
        text, size = cell["text"], cell["size"]
        if cell["ar"]:
            if blocks:
                blocks[-1]["ar"] = (blocks[-1].get("ar", "") + " " + text).strip()
            else:
                blocks.append({"t": "p", "de": "", "ar": text})
            continue
        # a gap to fill is an exercise line, not a heading, however big it is set
        kind = "h" if size >= 10.1 and "___" not in text else "p"
        same = (blocks and blocks[-1]["t"] == kind == "p" and not blocks[-1].get("ar")
                and abs(cell["x0"] - blocks[-1].get("x0", 0)) < 2.5
                and 0 < cell["top"] - blocks[-1]["bottom"] < 16)
        if same:
            blocks[-1]["de"] = (blocks[-1]["de"] + " " + text).strip()
            blocks[-1]["bottom"] = cell["top"]
        else:
            blocks.append({"t": kind, "de": text, "ar": "", "x0": cell["x0"], "bottom": cell["top"]})
    labels = {ar_title for _, _, _, ar_title in SECTIONS}
    out = []
    for block in blocks:
        block.pop("x0", None)
        block.pop("bottom", None)
        block["de"] = tidy(block.get("de", ""))
        if block.get("ar"):
            block["ar"] = tidy(block["ar"])
        else:
            block.pop("ar", None)
        if not block["de"] and len(block.get("ar", "")) <= 14:
            continue          # the Arabic label of the section itself
        if block["de"] or block.get("ar"):
            out.append(block)
    return out


def main():
    pages = json.load(open(sys.argv[1], encoding="utf-8"))
    by_page = {page["page"]: page["lines"] for page in pages}
    starts = lesson_starts(pages)
    order = sorted(starts.items())
    lessons = []

    for index, (number, first) in enumerate(order):
        last = (order[index + 1][1] - 1) if index + 1 < len(order) else 280
        # the longest line of each, because a diacritic can land on a line of
        # its own and would otherwise pass for the title
        titles = [c for c in by_page[first] if 15 <= c["size"] < 40]
        pick = lambda want: tidy(max((c["text"] for c in titles if c["ar"] is want), key=len, default=""))
        german, arabic = pick(False), pick(True)
        goals, current, parts = "", None, {key: [] for _, key, _, _ in SECTIONS}
        for page in range(first, last + 1):
            for cell in by_page.get(page, []):
                text = cell["text"]
                if cell["size"] >= 15 or text == str(number):
                    continue
                if text.startswith("Impuls B1 ·") or re.fullmatch(r"\d+", text.strip()):
                    continue
                if text.startswith("Lernziele"):
                    goals = re.sub(r"^Lernziele\s*·?\s*", "", text)
                    goals = ARABIC.sub("", goals).replace("·  :", "").strip(" :·")
                    current = None
                    continue
                if cell["size"] >= 13.5:
                    found = section_of(text)
                    if found:
                        current = found
                        continue
                if current:
                    parts[current].append(dict(cell, page=page))
        lesson = {"n": number, "de": german, "ar": arabic, "goals": goals,
                  "pages": [first, last], "words": words_of(parts["wortschatz"]),
                  "parts": {key: blocks_of(parts[key]) for _, key, _, _ in SECTIONS if key != "wortschatz"}}
        lessons.append(lesson)

    extras = []
    marks = {}
    for page in pages:
        for cell in page["lines"]:
            for title, key, ar_title in EXTRAS:
                if cell["size"] >= 13.5 and cell["text"].startswith(title) and key not in marks:
                    marks[key] = page["page"]
    for title, key, ar_title in EXTRAS:
        if key not in marks:
            continue
        first = marks[key]
        # an extra runs until the next extra or the next lesson starts
        borders = [p for p in list(marks.values()) + list(starts.values()) if p > first]
        last = (min(borders) - 1) if borders else len(pages)
        cells = [dict(c, page=page) for page in range(first, last + 1) for c in by_page.get(page, [])
                 if c["size"] < 13.5 and not c["text"].startswith("Impuls B1 ·")
                 and not re.fullmatch(r"\d+", c["text"].strip())]
        extras.append({"id": key, "de": title, "ar": ar_title, "pages": [first, last],
                       "blocks": blocks_of(cells)})

    data = {"meta": {"id": "impuls-b1-review", "de": "Impuls B1 · Wiederholung Lektion 1–30",
                     "ar": "مراجعة شاملة على كتاب Impuls B1 – الدروس 1 لـ 30",
                     "sections": [{"id": key, "de": short, "ar": ar_title} for _, key, short, ar_title in SECTIONS]},
            "lessons": lessons, "extras": extras}
    target = Path(sys.argv[2])
    if target.suffix == ".js":
        # one line per lesson, so a change to a lesson is one line in the diff
        dump = lambda value: json.dumps(value, ensure_ascii=False, separators=(",", ":"))
        out = ["// Impuls B1 · Wiederholung Lektion 1-30: the booklet's own text, read out of",
               "// the PDF with the place of every glyph, so the Arabic keeps its reading order.",
               "// Built by scripts/booklet_extract.py and this script; do not edit by hand.",
               "const IMPULS_REVIEW={", '"meta":' + dump(data["meta"]) + ",", '"lessons":[']
        out += [dump(lesson) + ("," if index + 1 < len(lessons) else "")
                for index, lesson in enumerate(lessons)]
        out += ["],", '"extras":[']
        out += [dump(extra) + ("," if index + 1 < len(extras) else "")
                for index, extra in enumerate(extras)]
        out += ["]};"]
        target.write_text("\n".join(out) + "\n", encoding="utf-8")
    else:
        target.write_text(json.dumps(data, ensure_ascii=False), encoding="utf-8")
    print(f"lessons: {len(lessons)} | words: {sum(len(l['words']) for l in lessons)} | "
          f"blocks: {sum(len(b) for l in lessons for b in l['parts'].values())} | extras: {len(extras)}")


if __name__ == "__main__":
    main()
