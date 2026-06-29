from __future__ import annotations

import json
import math
import re
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
OUT_ROOT = ROOT / "app" / "assets" / "vocab-scenes"
FONT_DIR = ROOT / "app" / "assets" / "fonts"
SIZE = 720


PALETTES = {
    1: ("#174b49", "#f0faf6", "#f7c948"),
    2: ("#355070", "#f1f6fb", "#ffb703"),
    3: ("#27548a", "#edf7ff", "#60a5fa"),
    4: ("#7c2d45", "#fff2f5", "#f59e0b"),
    5: ("#365314", "#f5faee", "#84cc16"),
    6: ("#3b3a6d", "#f3f2ff", "#a78bfa"),
    7: ("#0f5d6b", "#eefbfd", "#22c55e"),
    8: ("#6d3b7a", "#fbf2ff", "#e879f9"),
    9: ("#7f1d1d", "#fff4ef", "#fb923c"),
    10: ("#415a38", "#f7fbf1", "#a3e635"),
    11: ("#25406f", "#f1f6ff", "#38bdf8"),
    12: ("#5b2b7a", "#faf3ff", "#f472b6"),
}


VISUAL_RULES: list[tuple[re.Pattern[str], str, str]] = [
    (re.compile(r"freizeit|hobby|pause|erholen|entspann", re.I), "☼", "Freizeit"),
    (re.compile(r"vorstellen|kennenlernen|person|ledig|verheiratet|geboren|kindheit|aufwachsen", re.I), "P", "Person"),
    (re.compile(r"gemeinsam|gruppe|klasse|team|verein|gast|publikum|mitglied|teilnehm", re.I), "G", "Gruppe"),
    (re.compile(r"verabred|zusag|einverstanden|treffpunkt|termin|pünktlich|verschieb|absag", re.I), "✓", "Treffen"),
    (re.compile(r"restaurant|gericht|speisekarte|bestellen|rechnung|trinkgeld|bedienung|lecker|schmecken|satt|vegetar", re.I), "U", "Restaurant"),
    (re.compile(r"heimat|wohnort|adresse|stadt|viertel|innenstadt|sehenswürdigkeit|führung|museum", re.I), "⌖", "Ort"),
    (re.compile(r"schule|schulfach|klasse|unterricht|hausaufgabe|lehr|mitschüler|gymnasium|realschule|grundschule", re.I), "S", "Schule"),
    (re.compile(r"studium|universität|ausbildung|lehre|abschluss|zeugnis|zertifikat|prüfung|bestehen|durchfallen", re.I), "B", "Bildung"),
    (re.compile(r"lernen|wiederholen|erklären|stoff|vokabel|wörterbuch|notiz|karteikarte|regel", re.I), "W", "Lernen"),
    (re.compile(r"präsentation|vortrag|thema|einleitung|hauptteil|schluss|folie", re.I), "▣", "Präsentation"),
    (re.compile(r"beruf|arbeit|stelle|bewerb|lebenslauf|arbeitgeber|arbeitsplatz|kollege|kunde|aufgabe|gehalt", re.I), "▤", "Arbeit"),
    (re.compile(r"konto|bank|überweis|einzahl|abheb|formular|antrag|unterschreib|geld|preis|kosten", re.I), "€", "Geld"),
    (re.compile(r"gerät|app|online|internet|smartphone|handy|computer|laptop|tablet|bildschirm|passwort|zugang", re.I), "▯", "Digital"),
    (re.compile(r"download|herunterladen|hochladen|speichern|löschen|teilen|suchmaschine", re.I), "↓", "Datei"),
    (re.compile(r"chat|nachricht|posten|kommentar|werbung|medium|medien", re.I), "…", "Medien"),
    (re.compile(r"film|kino|handlung|rolle|spannend|langweilig|lustig|bewerten|eintritt", re.I), "▭", "Film"),
    (re.compile(r"gefühl|freuen|ärgern|wütend|enttäuscht|überrascht|erleichtert|peinlich|ruhig|nervös|stolz", re.I), "♡", "Gefühl"),
    (re.compile(r"feier|fest|geschenk|einladung|gratulieren|wünschen|bedanken|anlass|geburtstag", re.I), "✦", "Feier"),
    (re.compile(r"blog|beitrag|bericht|veröffentlichen|erlebnis|erinnerung|stimmung", re.I), "N", "Bericht"),
    (re.compile(r"verkehr|bus|bahn|u-bahn|straßenbahn|haltestelle|gleis|bahnsteig|fahrplan|fahrkarte|zug", re.I), "T", "Verkehr"),
    (re.compile(r"stau|baustelle|ampel|kreuzung|abbiegen|geradeaus|wegbeschreibung|route|verbindung", re.I), "→", "Weg"),
    (re.compile(r"einsteigen|aussteigen|umsteigen|verpassen|erreichen|verspätung|ziel", re.I), "↗", "Fahrt"),
    (re.compile(r"fahrrad|leihrad|radtour|helm|bewegung", re.I), "○", "Rad"),
    (re.compile(r"sport|training|mannschaft|spiel|stadion|fan|tor|sieg|niederlage|wettkampf|fit|schiedsrichter", re.I), "◎", "Sport"),
    (re.compile(r"wohnung|haus|wohnen|nachbar|miete|zimmer|möbel|küche|bad|umziehen|einziehen|keller|ruhe", re.I), "⌂", "Wohnen"),
    (re.compile(r"zeit|uhr|dauer|alltag|gewohnheit|stress|planen|traum|pflicht|warten|eilig|selten|häufig", re.I), "◷", "Zeit"),
    (re.compile(r"musik|lied|melodie|rhythmus|konzert|festival|bühne|gitarre|klavier|schlagzeug|singen|album|band", re.I), "♪", "Musik"),
    (re.compile(r"bild|gemälde|maler|künstler|ausstellung|vordergrund|hintergrund|leinwand|darstellen", re.I), "□", "Kunst"),
]


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    candidates = [
        FONT_DIR / ("cairo-700.ttf" if bold else "cairo-500.ttf"),
        FONT_DIR / "cairo-600.ttf",
        Path("C:/Windows/Fonts/arial.ttf"),
    ]
    for path in candidates:
        if path.exists():
            return ImageFont.truetype(str(path), size)
    return ImageFont.load_default()


def classify(item: dict, chapter: int) -> tuple[str, str]:
    text = " ".join(str(item.get(k, "")) for k in ("w", "d", "ex", "ar", "cat", "catAr"))
    for pattern, symbol, label in VISUAL_RULES:
        if pattern.search(text):
            return symbol, label
    fallback = {
        1: ("P", "Alltag"),
        2: ("S", "Schule"),
        3: ("▯", "Digital"),
        4: ("♡", "Gefühl"),
        5: ("▥", "Stadt"),
        6: ("▤", "Arbeit"),
        7: ("T", "Verkehr"),
        8: ("W", "Lernen"),
        9: ("◎", "Sport"),
        10: ("⌂", "Wohnen"),
        11: ("◷", "Zeit"),
        12: ("♪", "Kultur"),
    }
    return fallback.get(chapter, ("W", "Wort"))


def clean_word(value: str) -> str:
    return re.sub(r"\s+", " ", value).strip()


def compact_ar(value: str) -> str:
    value = clean_word(value)
    value = re.split(r"\s*/\s*|،|,", value)[0]
    return value[:46]


def fit_font(draw: ImageDraw.ImageDraw, text: str, max_width: int, start: int, min_size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    for size in range(start, min_size - 1, -2):
        f = font(size, bold)
        if draw.textbbox((0, 0), text, font=f)[2] <= max_width:
            return f
    return font(min_size, bold)


def wrap_text(draw: ImageDraw.ImageDraw, text: str, fnt: ImageFont.FreeTypeFont, max_width: int, max_lines: int = 2) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current = ""
    for word in words:
        candidate = f"{current} {word}".strip()
        if draw.textbbox((0, 0), candidate, font=fnt)[2] <= max_width:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    if len(lines) > max_lines:
        lines = lines[:max_lines]
        while draw.textbbox((0, 0), lines[-1] + "...", font=fnt)[2] > max_width and len(lines[-1]) > 3:
            lines[-1] = lines[-1][:-1]
        lines[-1] += "..."
    return lines


def center_text(draw: ImageDraw.ImageDraw, xy: tuple[int, int], text: str, fnt: ImageFont.FreeTypeFont, fill: str) -> None:
    box = draw.textbbox((0, 0), text, font=fnt)
    draw.text((xy[0] - (box[2] - box[0]) / 2, xy[1]), text, font=fnt, fill=fill)


def draw_card(chapter: dict, item: dict, index: int) -> Image.Image:
    num = int(chapter["num"])
    ink, bg, accent = PALETTES[num]
    img = Image.new("RGB", (SIZE, SIZE), bg)
    draw = ImageDraw.Draw(img)

    # Soft geometric background.
    draw.rounded_rectangle((36, 36, SIZE - 36, SIZE - 36), radius=42, fill="#ffffff", outline="#dce9e6", width=3)
    draw.ellipse((SIZE - 205, -70, SIZE + 70, 190), fill=accent)
    draw.ellipse((-75, SIZE - 175, 190, SIZE + 80), fill="#dfeeea")
    draw.rounded_rectangle((70, 70, SIZE - 70, 130), radius=24, fill=bg, outline="#dce9e6", width=2)

    cat = clean_word(item.get("cat") or f"Kapitel {num}")
    header = f"K{num} · {cat}"
    header_font = fit_font(draw, header, 500, 25, 17, True)
    center_text(draw, (SIZE // 2, 86), header, header_font, ink)

    symbol, label = classify(item, num)
    draw.ellipse((190, 168, 530, 508), fill=bg, outline=accent, width=10)
    draw.ellipse((228, 206, 492, 470), fill="#ffffff", outline="#e5efed", width=3)
    symbol_font = fit_font(draw, symbol, 210, 135, 64, True)
    sbox = draw.textbbox((0, 0), symbol, font=symbol_font)
    draw.text(((SIZE - (sbox[2] - sbox[0])) / 2, 258 - (sbox[3] - sbox[1]) / 2), symbol, font=symbol_font, fill=ink)

    badge_font = font(24, True)
    badge_w = draw.textbbox((0, 0), label, font=badge_font)[2] + 44
    draw.rounded_rectangle(((SIZE - badge_w) / 2, 474, (SIZE + badge_w) / 2, 522), radius=24, fill=accent)
    center_text(draw, (SIZE // 2, 479), label, badge_font, "#1b2b2b")

    word = clean_word(item["w"])
    word_font = fit_font(draw, word, 590, 48, 30, True)
    lines = wrap_text(draw, word, word_font, 590, 2)
    y = 552 if len(lines) == 1 else 532
    for line in lines:
        center_text(draw, (SIZE // 2, y), line, word_font, ink)
        y += math.ceil(word_font.size * 1.05)

    ar = compact_ar(item.get("ar", ""))
    if ar:
        ar_font = fit_font(draw, ar, 570, 28, 20, False)
        try:
            box = draw.textbbox((0, 0), ar, font=ar_font, direction="rtl")
            draw.text(((SIZE - (box[2] - box[0])) / 2, 642), ar, font=ar_font, fill="#52615f", direction="rtl")
        except Exception:
            center_text(draw, (SIZE // 2, 642), ar, ar_font, "#52615f")

    idx_font = font(20, True)
    draw.rounded_rectangle((584, 584, 650, 626), radius=20, fill=bg, outline="#dce9e6", width=2)
    center_text(draw, (617, 590), f"{index:02d}", idx_font, ink)
    return img


def main() -> None:
    if len(sys.argv) > 1:
        with open(sys.argv[1], "r", encoding="utf-8") as handle:
            chapters = json.load(handle)
    else:
        chapters = json.load(sys.stdin)
    total = 0
    for chapter in chapters:
        out_dir = OUT_ROOT / f"k{chapter['num']}"
        out_dir.mkdir(parents=True, exist_ok=True)
        for old in out_dir.glob("*.webp"):
            old.unlink()
        for i, item in enumerate(chapter["vocab"], start=1):
            card = draw_card(chapter, item, i)
            card.save(out_dir / f"{i:02d}.webp", "WEBP", quality=88, method=6)
            total += 1
    print(f"Generated {total} A2 vocabulary visual cards.")


if __name__ == "__main__":
    main()
