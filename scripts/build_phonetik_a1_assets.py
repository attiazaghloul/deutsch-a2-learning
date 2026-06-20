"""Rebuild Deutsch ueben Phonetik A1 assets from the source PDF and MP3 files."""
from __future__ import annotations

import re
import shutil
from pathlib import Path

import fitz
from PIL import Image, ImageChops, ImageOps

BASE = Path(__file__).resolve().parents[1]
SRC = BASE / "app" / "Deutsch_Ueben_Phonetik_A1"
PDF = SRC / "phonetik-bungen-und-tipps-fr-eine-gute-aussprache-a1.pdf"
OUT = BASE / "app" / "assets" / "listening" / "a1-phonetik"
PAGES = OUT / "pages"
AUDIO = OUT / "audio"
THUMBS = OUT / "thumbnails"
FIGURES = OUT / "figures"

ZOOM = 2.0
BOOK_PAGES = 97
THUMB_SIZE = (400, 240)
PAGE_PAD = 20
BOOK_TO_ASSET_OFFSET = 1

EXERCISE_START = {
    "a1": 6,
    "a2": 9,
    "a3": 16,
    "b1": 21,
    "b2": 27,
    "b3": 30,
    "b4": 35,
    "b5": 37,
    "b6": 41,
    "b7": 45,
    "b8": 47,
    "c1": 49,
    "c2": 54,
    "c3": 58,
    "c4": 62,
    "c5": 68,
    "c6": 72,
    "c7": 74,
    "c8": 76,
}

# Pixel boxes for 2x rendered pages. They target the useful page body and avoid
# the scanner edges that made older crops feel cramped or misaligned.
SHEET_BOX = (100, 170, 2700, 3650)
THUMB_BOX = {
    "a1": (250, 280, 2520, 1460),
    "a2": (250, 300, 2520, 1520),
    "a3": (250, 300, 2520, 1520),
    "b1": (250, 280, 2520, 1460),
    "b2": (180, 300, 2620, 1640),
    "b3": (180, 280, 2620, 1640),
    "b4": (180, 300, 2620, 1640),
    "b5": (180, 280, 2620, 1640),
    "b6": (180, 300, 2620, 1640),
    "b7": (180, 280, 2620, 1640),
    "b8": (180, 300, 2620, 1640),
    "c1": (250, 280, 2520, 1460),
    "c2": (180, 300, 2620, 1640),
    "c3": (180, 280, 2620, 1640),
    "c4": (180, 300, 2620, 1640),
    "c5": (180, 280, 2620, 1640),
    "c6": (180, 300, 2620, 1640),
    "c7": (180, 280, 2620, 1640),
    "c8": (250, 280, 2520, 1460),
}


def clean_dir(path: Path) -> None:
    if path.exists():
        shutil.rmtree(path)
    path.mkdir(parents=True, exist_ok=True)


def trim_scanner_border(img: Image.Image) -> Image.Image:
    bg = Image.new(img.mode, img.size, img.getpixel((0, 0)))
    diff = ImageChops.difference(img, bg)
    bbox = diff.getbbox()
    if not bbox:
        return img
    left, top, right, bottom = bbox
    left = max(0, left - PAGE_PAD)
    top = max(0, top - PAGE_PAD)
    right = min(img.width, right + PAGE_PAD)
    bottom = min(img.height, bottom + PAGE_PAD)
    return img.crop((left, top, right, bottom))


def render_pages() -> None:
    doc = fitz.open(PDF)
    matrix = fitz.Matrix(ZOOM, ZOOM)
    for index in range(min(len(doc), BOOK_PAGES)):
        pix = doc[index].get_pixmap(matrix=matrix, alpha=False)
        img = Image.frombytes("RGB", (pix.width, pix.height), pix.samples)
        img = trim_scanner_border(img)
        img.save(PAGES / f"page-{index + 1:03d}.webp", "WEBP", quality=88, method=4)
    cover = Image.open(PAGES / "page-001.webp")
    cover.thumbnail((520, 760), Image.Resampling.LANCZOS)
    cover.save(OUT / "cover.webp", "WEBP", quality=86, method=4)
    doc.close()


def copy_audio() -> None:
    pattern = re.compile(r"Track_(\d+)-(\d+)\.mp3$", re.I)
    for src in sorted(SRC.glob("Deutsch_Ueben_Phonetik_A1_Track_*.mp3")):
        match = pattern.search(src.name)
        if not match:
            continue
        cd, track = match.group(1), match.group(2)
        shutil.copy2(src, AUDIO / f"track-{cd}-{track}.mp3")


def bounded_box(img: Image.Image, box: tuple[int, int, int, int]) -> tuple[int, int, int, int]:
    left, top, right, bottom = box
    return (
        max(0, min(left, img.width - 1)),
        max(0, min(top, img.height - 1)),
        max(1, min(right, img.width)),
        max(1, min(bottom, img.height)),
    )


def crop_page(page_no: int, box: tuple[int, int, int, int]) -> Image.Image:
    img = Image.open(PAGES / f"page-{page_no:03d}.webp")
    return img.crop(bounded_box(img, box))


def build_thumbnails() -> None:
    for ex_id, page_no in EXERCISE_START.items():
        crop = crop_page(page_no + BOOK_TO_ASSET_OFFSET, THUMB_BOX.get(ex_id, SHEET_BOX))
        crop = ImageOps.fit(crop, THUMB_SIZE, Image.Resampling.LANCZOS)
        crop.save(THUMBS / f"{ex_id}.webp", "WEBP", quality=88, method=4)


def build_figures() -> None:
    starts = sorted(EXERCISE_START.items(), key=lambda item: item[1])
    for index, (ex_id, start_page) in enumerate(starts):
        next_page = starts[index + 1][1] if index + 1 < len(starts) else 77
        folder = FIGURES / ex_id
        folder.mkdir(parents=True, exist_ok=True)
        for page_no in range(start_page, next_page):
            crop = crop_page(page_no + BOOK_TO_ASSET_OFFSET, SHEET_BOX)
            crop.save(folder / f"{ex_id}-p{page_no:02d}-sheet.webp", "WEBP", quality=88, method=4)


def main() -> None:
    if not PDF.exists():
        raise FileNotFoundError(PDF)
    for path in (PAGES, AUDIO, THUMBS, FIGURES):
        clean_dir(path)
    render_pages()
    copy_audio()
    build_thumbnails()
    build_figures()
    print(f"Pages: {len(list(PAGES.glob('*.webp')))}")
    print(f"Audio: {len(list(AUDIO.glob('*.mp3')))}")
    print(f"Thumbnails: {len(list(THUMBS.glob('*.webp')))}")
    print(f"Figure sheets: {len(list(FIGURES.glob('*/*.webp')))}")


if __name__ == "__main__":
    main()
