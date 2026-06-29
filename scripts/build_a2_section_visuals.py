from __future__ import annotations

import json
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
OUT_ROOT = ROOT / "app" / "assets" / "chapter-scenes"
FONT_DIR = ROOT / "app" / "assets" / "fonts"
SIZE = (960, 540)

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

DEFAULT_SCENES = [
    ("Lesen und Kontext", "L"),
    ("Wortschatz und Sprechen", "W"),
    ("Redemittel und Quiz", "Q"),
    ("Grammatik klar", "G"),
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


def fit(draw: ImageDraw.ImageDraw, text: str, max_width: int, start: int, minimum: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    for size in range(start, minimum - 1, -2):
        fnt = font(size, bold)
        if draw.textbbox((0, 0), text, font=fnt)[2] <= max_width:
            return fnt
    return font(minimum, bold)


def center(draw: ImageDraw.ImageDraw, x: int, y: int, text: str, fnt: ImageFont.FreeTypeFont, fill: str) -> None:
    box = draw.textbbox((0, 0), text, font=fnt)
    draw.text((x - (box[2] - box[0]) / 2, y), text, font=fnt, fill=fill)


def draw_scene(chapter: dict, scene: dict, index: int) -> Image.Image:
    num = int(chapter["num"])
    ink, bg, accent = PALETTES[num]
    image = Image.new("RGB", SIZE, bg)
    draw = ImageDraw.Draw(image)

    draw.rounded_rectangle((34, 34, 926, 506), radius=42, fill="#ffffff", outline="#dce9e6", width=3)
    draw.ellipse((-110, 300, 230, 640), fill="#dfeeea")
    draw.ellipse((735, -120, 1090, 230), fill=accent)
    draw.rounded_rectangle((78, 76, 882, 132), radius=24, fill=bg, outline="#dce9e6", width=2)

    header = f"Kapitel {num} · {chapter['title']}"
    center(draw, 480, 88, header, fit(draw, header, 720, 28, 18, True), ink)

    symbol = scene.get("symbol") or DEFAULT_SCENES[index - 1][1]
    draw.ellipse((115, 178, 405, 468), fill=bg, outline=accent, width=10)
    draw.ellipse((150, 213, 370, 433), fill="#ffffff", outline="#e5efed", width=3)
    sfont = fit(draw, symbol, 170, 122, 64, True)
    box = draw.textbbox((0, 0), symbol, font=sfont)
    draw.text((260 - (box[2] - box[0]) / 2, 322 - (box[3] - box[1]) / 2), symbol, font=sfont, fill=ink)

    title = scene["caption"]
    title_font = fit(draw, title, 430, 48, 30, True)
    draw.text((460, 215), title, font=title_font, fill=ink)

    subtitle = scene.get("captionAr") or chapter.get("subtitle", "")
    subtitle_font = fit(draw, subtitle, 420, 28, 20)
    try:
        draw.text((460, 288), subtitle, font=subtitle_font, fill="#52615f", direction="rtl")
    except Exception:
        draw.text((460, 288), subtitle, font=subtitle_font, fill="#52615f")

    badge = f"Teil {index}"
    badge_font = font(24, True)
    draw.rounded_rectangle((460, 372, 600, 424), radius=26, fill=accent)
    center(draw, 530, 380, badge, badge_font, "#1b2b2b")
    return image


def main() -> None:
    with open(sys.argv[1], "r", encoding="utf-8") as handle:
        chapters = json.load(handle)
    OUT_ROOT.mkdir(parents=True, exist_ok=True)
    total = 0
    for chapter in chapters:
        scenes = chapter.get("scenes") or [
            {"caption": caption, "captionAr": chapter.get("subtitle", ""), "symbol": symbol}
            for caption, symbol in DEFAULT_SCENES
        ]
        for i, scene in enumerate(scenes[:4], start=1):
            out = OUT_ROOT / f"chapter-{chapter['num']}-scene-{i}.webp"
            draw_scene(chapter, scene, i).save(out, "WEBP", quality=88, method=6)
            total += 1
    print(f"Generated {total} A2 section visuals.")


if __name__ == "__main__":
    main()
