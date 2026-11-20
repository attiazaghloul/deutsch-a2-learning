"""Read the Impuls B1 booklet into one JSON file of placed lines.

The booklet mixes German and Arabic, and the Arabic sits in the PDF as it is
painted: glyph by glyph from right to left, in presentation forms. Taking the
text as the page hands it over gives "ةايحلا يف" and words torn apart, so every
line is rebuilt here from the glyphs and their places: the glyphs of a line are
read left to right, cut into runs of Arabic and of everything else, each Arabic
run is turned around, and a line that is Arabic as a whole has its runs turned
around too. NFKC then puts the presentation forms back to ordinary letters.

    python extract.py <booklet.pdf> <out.json>

Each line carries its page, its place (top, x0, x1), its font size and whether
it is Arabic, so the tables can be read by column afterwards.
"""
import json
import sys
import unicodedata

import pdfplumber


def arabic(letter):
    return "؀" <= letter <= "ۿ" or "ﭐ" <= letter <= "﻿"


# a bracket faces the other way once an Arabic run is turned around
MIRROR = str.maketrans("()[]{}<>", ")(][}{><")


def logical(glyphs):
    """The text of one line, in reading order, from glyphs placed left to right."""
    glyphs = sorted(glyphs, key=lambda g: g["x0"])
    runs, run, kind = [], [], None
    for glyph in glyphs:
        letter = glyph["text"]
        mine = arabic(letter) if letter.strip() else kind
        if kind is None or mine == kind:
            run.append(letter)
        else:
            runs.append((kind, run))
            run = [letter]
        kind = mine
    if run:
        runs.append((kind, run))

    letters = sum(1 for glyph in glyphs if arabic(glyph["text"]))
    latin = sum(1 for glyph in glyphs if glyph["text"].isalpha() and not arabic(glyph["text"]))
    whole_line_arabic = letters > latin
    pieces = [("".join(reversed(run)) if is_arabic else "".join(run)) for is_arabic, run in runs]
    if whole_line_arabic:
        pieces.reverse()
    # German and Arabic often touch without a space glyph between them
    text = ""
    for piece in pieces:
        if text and not text[-1].isspace() and not piece[:1].isspace() \
                and arabic(text[-1]) != arabic(piece[0]):
            text += " "
        text += piece
    # a bracket faces the other way once the line has been turned around; only
    # a line without German is turned around as a whole
    if whole_line_arabic and not latin:
        text = text.translate(MIRROR)
    return unicodedata.normalize("NFKC", text).strip(), whole_line_arabic


def main():
    source, target = sys.argv[1], sys.argv[2]
    out = []
    with pdfplumber.open(source) as pdf:
        for number, page in enumerate(pdf.pages, 1):
            rows = {}
            for glyph in page.chars:
                rows.setdefault(round(glyph["top"] / 2.5), []).append(glyph)
            lines = []
            for key in sorted(rows):
                # a row holds the cells of a table side by side, so it is cut
                # again wherever a gap is wider than a word space
                cell, cells = [], []
                for glyph in sorted(rows[key], key=lambda g: g["x0"]):
                    if cell and glyph["x0"] - cell[-1]["x1"] > max(4.5, 0.55 * glyph["size"]):
                        cells.append(cell)
                        cell = []
                    cell.append(glyph)
                if cell:
                    cells.append(cell)
                for glyphs in cells:
                    text, is_arabic = logical(glyphs)
                    if not text:
                        continue
                    lines.append({"top": round(min(g["top"] for g in glyphs), 1),
                                  "x0": round(min(g["x0"] for g in glyphs), 1),
                                  "x1": round(max(g["x1"] for g in glyphs), 1),
                                  "size": round(max(g["size"] for g in glyphs), 1),
                                  "ar": is_arabic, "text": text})
            out.append({"page": number, "lines": lines})
            if number % 25 == 0:
                print(f"page {number}", flush=True)
    with open(target, "w", encoding="utf-8") as handle:
        json.dump(out, handle, ensure_ascii=False)
    print(f"{len(out)} pages, {sum(len(p['lines']) for p in out)} lines -> {target}")


if __name__ == "__main__":
    main()
