"""Build simple visual covers and question helpers for Phonetik A1."""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

BASE = Path(__file__).resolve().parents[1]
OUT = BASE / "app" / "assets" / "listening" / "a1-phonetik" / "visuals"

LESSONS = {
    "a1": ("A1", "Wortakzent", "TA ta ta", "stress"),
    "a2": ("A2", "Satzakzent", "ich KOMme", "rhythm"),
    "a3": ("A3", "Melodie", "?", "melody"),
    "b1": ("B1", "lang / kurz", "Miete - Mitte", "length"),
    "b2": ("B2", "a / ae", "Tag - Kaese", "vowels"),
    "b3": ("B3", "e", "gehen - Bett", "vowels"),
    "b4": ("B4", "i", "viel - bitte", "vowels"),
    "b5": ("B5", "o / oe", "Sohn - schoen", "vowels"),
    "b6": ("B6", "u / ue", "gut - gruen", "vowels"),
    "b7": ("B7", "Diphthonge", "au  ei  eu", "diphthong"),
    "b8": ("B8", "Vokaleinsatz", "' acht", "glottal"),
    "c1": ("C1", "r", "rot - Uhr", "r"),
    "c2": ("C2", "p t k", "P T K", "air"),
    "c3": ("C3", "s / z", "S z", "buzz"),
    "c4": ("C4", "sch ch h", "sch  ich", "friction"),
    "c5": ("C5", "f v w", "f  v  w", "teeth"),
    "c6": ("C6", "l", "L L L", "tongue"),
    "c7": ("C7", "ng / nk", "lang - Bank", "nasal"),
    "c8": ("C8", "j", "Ja  Job", "j"),
}

UNITS = {
    "a": ("A", "Prosodie", "stress · rhythm · melody", ("#e6f7cb", "#77b72e")),
    "b": ("B", "Vokale", "long · short · rounded", ("#dff4ff", "#1f86b8")),
    "c": ("C", "Konsonanten", "air · friction · voice", ("#ffe9f1", "#c23b74")),
}

PALETTE = {
    "a": ("#77b72e", "#e6f7cb", "#23401d"),
    "b": ("#1f86b8", "#dff4ff", "#14384d"),
    "c": ("#c23b74", "#ffe9f1", "#52233a"),
}


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    candidates = [
        "C:/Windows/Fonts/arialbd.ttf" if bold else "C:/Windows/Fonts/arial.ttf",
        "C:/Windows/Fonts/segoeuib.ttf" if bold else "C:/Windows/Fonts/segoeui.ttf",
    ]
    for candidate in candidates:
        if Path(candidate).exists():
            return ImageFont.truetype(candidate, size=size)
    return ImageFont.load_default()


FONT_XL = font(72, True)
FONT_L = font(42, True)
FONT_M = font(28, True)
FONT_S = font(20)
FONT_XS = font(16)


def rounded(draw: ImageDraw.ImageDraw, box, radius, fill, outline=None, width=1):
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def centered(draw: ImageDraw.ImageDraw, box, text, fnt, fill):
    left, top, right, bottom = box
    bbox = draw.textbbox((0, 0), text, font=fnt)
    x = left + (right - left - (bbox[2] - bbox[0])) / 2
    y = top + (bottom - top - (bbox[3] - bbox[1])) / 2 - 2
    draw.text((x, y), text, font=fnt, fill=fill)


def draw_wave(draw, color, y=238, x0=92, x1=628, amp=34):
    points = []
    for x in range(x0, x1, 8):
        t = (x - x0) / 32
        dy = amp * __import__("math").sin(t) * (0.65 + 0.35 * __import__("math").sin(t / 3))
        points.append((x, y + dy))
    draw.line(points, fill=color, width=7, joint="curve")


def draw_mouth(draw, cx, cy, scale, accent, dark):
    draw.ellipse((cx - 90 * scale, cy - 54 * scale, cx + 90 * scale, cy + 54 * scale), fill="#ffffff", outline=accent, width=max(2, int(4 * scale)))
    draw.arc((cx - 60 * scale, cy - 20 * scale, cx + 60 * scale, cy + 38 * scale), 0, 180, fill=dark, width=max(2, int(4 * scale)))
    draw.ellipse((cx - 16 * scale, cy - 8 * scale, cx + 16 * scale, cy + 20 * scale), fill=accent)


def lesson_image(key: str, size=(720, 420), kind="cover") -> Image.Image:
    code, title, example, motif = LESSONS[key]
    group = key[0]
    accent, pale, dark = PALETTE[group]
    img = Image.new("RGB", size, "#fbfdfc")
    draw = ImageDraw.Draw(img)
    w, h = size
    draw.rectangle((0, 0, w, h), fill=pale)
    rounded(draw, (26, 26, w - 26, h - 26), 28, "#ffffff")
    rounded(draw, (48, 48, 154, 154), 24, accent)
    centered(draw, (48, 48, 154, 154), code.upper(), FONT_L, "#ffffff")
    draw.text((178, 54), title, font=FONT_L, fill=dark)
    draw.text((180, 104), example, font=FONT_M, fill=accent)

    if motif in {"stress", "rhythm"}:
        for i, label in enumerate(["TA", "ta", "ta"]):
            x = 130 + i * 145
            y = 230 + (22 if i else 0)
            r = 54 if i == 0 else 38
            draw.ellipse((x - r, y - r, x + r, y + r), fill=accent if i == 0 else pale, outline=accent, width=4)
            centered(draw, (x - r, y - r, x + r, y + r), label, FONT_M if i == 0 else FONT_S, "#fff" if i == 0 else dark)
        draw_wave(draw, accent, y=315)
    elif motif == "melody":
        draw_wave(draw, accent, y=265, amp=58)
        draw.line((480, 310, 570, 210, 650, 255), fill=dark, width=8)
        draw.polygon([(650, 255), (625, 248), (640, 230)], fill=dark)
    elif motif in {"vowels", "length", "diphthong", "glottal"}:
        for i, vowel in enumerate(["a", "e", "i", "o", "u"]):
            x = 132 + i * 108
            y = 250 + (i % 2) * 26
            draw_mouth(draw, x, y, 0.42, accent, dark)
            centered(draw, (x - 44, y + 54, x + 44, y + 94), vowel, FONT_S, dark)
        if motif == "length":
            draw.line((142, 350, 330, 350), fill=accent, width=8)
            draw.line((412, 350, 492, 350), fill=accent, width=8)
        if motif == "glottal":
            draw.line((530, 210, 530, 330), fill=dark, width=8)
            draw.ellipse((510, 190, 550, 230), outline=accent, width=6)
    else:
        for i, letter in list(enumerate(example.replace(" ", "")))[:6]:
            x = 126 + i * 82
            y = 266 + (i % 2) * 26
            rounded(draw, (x - 35, y - 35, x + 35, y + 35), 18, "#ffffff", accent, 4)
            centered(draw, (x - 35, y - 35, x + 35, y + 35), letter, FONT_M, dark)
        if motif in {"air", "friction"}:
            for x in (500, 548, 596):
                draw.line((x, 250, x + 70, 220), fill=accent, width=5)
                draw.polygon([(x + 70, 220), (x + 52, 218), (x + 62, 235)], fill=accent)
        if motif == "nasal":
            draw.arc((492, 218, 642, 340), 205, 345, fill=accent, width=7)

    if kind == "question":
        rounded(draw, (48, h - 82, w - 48, h - 34), 18, "#f7faf9", "#d8e5e2", 2)
        centered(draw, (48, h - 82, w - 48, h - 34), "Listen · mark · repeat", FONT_XS, dark)
    return img


def unit_image(key: str) -> Image.Image:
    code, title, subtitle, colors = UNITS[key]
    pale, accent = colors
    dark = PALETTE[key][2]
    img = Image.new("RGB", (960, 420), pale)
    draw = ImageDraw.Draw(img)
    rounded(draw, (34, 34, 926, 386), 34, "#ffffff")
    rounded(draw, (70, 76, 222, 228), 34, accent)
    centered(draw, (70, 76, 222, 228), code, FONT_XL, "#ffffff")
    draw.text((258, 82), title, font=FONT_XL, fill=dark)
    draw.text((264, 160), subtitle, font=FONT_M, fill=accent)
    draw_wave(draw, accent, y=294, x0=260, x1=860, amp=44)
    for x in (650, 735, 820):
        draw.ellipse((x - 28, 238, x + 28, 294), fill="#ffffff", outline=accent, width=5)
    return img


def main() -> None:
    for sub in ("units", "lessons", "questions"):
        (OUT / sub).mkdir(parents=True, exist_ok=True)

    for key in UNITS:
        unit_image(key).save(OUT / "units" / f"{key}.webp", "WEBP", quality=88, method=4)

    for key in LESSONS:
        lesson_image(key, size=(720, 420), kind="cover").save(
            OUT / "lessons" / f"{key}.webp", "WEBP", quality=88, method=4
        )
        lesson_image(key, size=(960, 420), kind="question").save(
            OUT / "questions" / f"{key}.webp", "WEBP", quality=88, method=4
        )

    print(f"Built {len(UNITS)} unit covers, {len(LESSONS)} lesson covers, {len(LESSONS)} question visuals in {OUT}")


if __name__ == "__main__":
    main()
