"""Rebuild A1 Hören thumbnails and figure crops — preserve Bild labels (a, b, c …)."""
from pathlib import Path
from PIL import Image, ImageOps

BASE = Path(r"C:\Users\DELL\Downloads\New folder (9)")
PAGES = BASE / "app/assets/listening/a1/pages"
THUMBS = BASE / "app/assets/listening/a1/thumbnails"
FIGURES = BASE / "app/assets/listening/a1/figures"

THUMB_SIZE = (400, 240)
HEADER_BOX = (140, 200, 2660, 520)
LABEL_PAD = 90  # extra pixels below illustration to keep a) b) c) …

EXERCISE_PAGE = {
    "a1": 7, "a2": 9, "a3": 10, "a4": 11, "a5": 11, "a6": 13, "a7": 15, "a8": 16,
    "b1": 19, "b2": 19, "b3": 21, "b4": 23, "b5": 25, "b6": 29, "b7": 31,
    "c1": 33, "c2": 35, "c3": 37, "d1": 41, "d2": 44, "d3": 48,
    "e1": 49, "e2": 51, "e3": 53, "f1": 55, "f2": 57,
    "g1": 58, "g2": 61, "g3": 63, "g4": 63, "h1": 67, "h2": 69, "h3": 71, "h4": 72,
}

THUMB_BOX = {
    "a1": (900, 560, 1860, 1160),
    "a2": (1560, 540, 2400, 1480),
    "a3": HEADER_BOX, "a4": HEADER_BOX, "a5": HEADER_BOX, "a6": HEADER_BOX, "a7": HEADER_BOX,
    "a8": (300, 1180, 940, 2060),
    "b1": (900, 580, 1660, 940), "b2": (900, 2160, 1660, 2520),
    "b3": (980, 420, 1920, 880), "b4": (940, 400, 1840, 820),
    "b5": (420, 560, 2380, 2100), "b6": (360, 560, 2540, 1320),
    "b7": (460, 2040, 2020, 3160),
    "c1": (860, 380, 1920, 1100), "c2": (500, 520, 1770, 2080), "c3": HEADER_BOX,
    "d1": HEADER_BOX, "d2": (360, 1080, 2440, 2000), "d3": HEADER_BOX,
    "e1": (440, 580, 1210, 1240), "e2": (360, 1100, 2440, 2100), "e3": (820, 540, 1720, 1560),
    "f1": (450, 850, 730, 1120), "f2": (1660, 560, 2520, 1100),
    "g1": (400, 560, 2420, 1760),
    "g2": HEADER_BOX, "g3": (1680, 740, 2400, 3760), "g4": HEADER_BOX,
    "h1": (840, 2480, 2060, 3540), "h2": (1900, 780, 2520, 1660),
    "h3": (880, 540, 1620, 1360), "h4": HEADER_BOX,
}

# (page, box, path) — boxes include label area where needed
FIGURE_CROPS = [
    (16, (300, 1180, 940, 2060), "a8/a8-p16-bike.webp"),
    (16, (1580, 1790, 2680, 2680), "a8/a8-p16-city.webp"),
    (16, (340, 2540, 680, 3400), "a8/a8-p16-cat.webp"),
    (16, (1630, 3120, 2260, 3780), "a8/a8-p16-tea.webp"),
    (17, (360, 210, 1650, 820), "a8/a8-p17-pingpong.webp"),
    (17, (1420, 1080, 2590, 1950), "a8/a8-p17-mountains.webp"),
    (17, (370, 2040, 1290, 2620), "a8/a8-p17-talk.webp"),
    (17, (1350, 2760, 2540, 3740), "a8/a8-p17-kino.webp"),
    (35, (500, 520, 1770, 2080), "c2/c2-p35-map.webp"),
    (37, (2075, 515, 2515, 1020), "c3/c3-p37-01.webp"),
    (37, (2075, 1020, 2425, 1520), "c3/c3-p37-02.webp"),
    (37, (2095, 1505, 2515, 1850), "c3/c3-p37-03.webp"),
    (37, (2100, 1870, 2470, 2390), "c3/c3-p37-04.webp"),
    (37, (2075, 2405, 2480, 2945), "c3/c3-p37-05.webp"),
    (37, (2075, 3050, 2470, 3660), "c3/c3-p37-06.webp"),
]

# F1: numbered profession illustrations (1–7) with label visible
F1_BOXES = [
    ("1", (280, 800, 920, 1180)),
    ("2", (280, 1170, 920, 1560)),
    ("3", (280, 1570, 920, 1990)),
    ("4", (280, 2020, 920, 2420)),
    ("5", (280, 2430, 920, 2820)),
    ("6", (280, 2840, 920, 3320)),
    ("7", (280, 3320, 920, 3680)),
]

# F2: illustration box + label below (content-detected, bottom extended)
F2_BOXES = [
    ("a", (1674, 597, 1959, 1020)),
    ("b", (2097, 744, 2463, 1150)),
    ("c", (1836, 1209, 2046, 1655)),
    ("d", (2289, 1425, 2475, 1825)),
    ("e", (1737, 1776, 1935, 2185)),
    ("f", (2175, 2130, 2505, 2425)),
    ("g", (1800, 2385, 2061, 2855)),
    ("h", (2220, 2700, 2433, 3165)),
    ("i", (1761, 3144, 2049, 3525)),
]

G1_GRID_BOX = (400, 560, 2420, 1760)

# Scene illustrations and exercise sheets (Buchseite crops)
EXTRA_CROPS = [
    (7, (620, 380, 2180, 980), "a1/a1-p07-characters.webp"),
    (9, (320, 380, 2480, 1120), "a2/a2-p09-greetings.webp"),
    (10, (140, 280, 2660, 3200), "sheets/a3-p10-dialog.webp"),
    (11, (140, 350, 2660, 3000), "sheets/a4-p11-exercise.webp"),
    (13, (140, 350, 2660, 3200), "sheets/a6-p13-interview.webp"),
    (15, (140, 280, 2660, 3400), "sheets/a7-p15-dialog.webp"),
    (19, (140, 520, 2660, 2600), "sheets/b1-p19-exercise.webp"),
    (19, (140, 1800, 2660, 3800), "sheets/b2-p19-numbers.webp"),
    (21, (140, 380, 2660, 2000), "sheets/b3-p21-exercise.webp"),
    (23, (140, 380, 2660, 2000), "sheets/b4-p23-exercise.webp"),
    (25, (180, 580, 2450, 3180), "b5/b5-p25-clocks.webp"),
    (29, (140, 520, 2660, 3400), "sheets/b6-p29-dates.webp"),
    (31, (280, 2080, 2120, 3620), "b7/b7-p31-hiking.webp"),
    (33, (140, 350, 2660, 2200), "sheets/c1-p33-exercise.webp"),
    (41, (140, 320, 2660, 2100), "sheets/d1-p41-dialog.webp"),
    (44, (140, 320, 2660, 2900), "sheets/d2-p44-dialog.webp"),
    (48, (140, 350, 2660, 3600), "sheets/d3-p48-dictat.webp"),
    (49, (360, 380, 2440, 1180), "e1/e1-p49-family.webp"),
    (51, (140, 380, 2660, 2800), "sheets/e2-p51-exercise.webp"),
    (53, (260, 380, 1150, 1080), "e3/e3-p53-chef.webp"),
    (60, (380, 380, 2400, 1150), "g2/g2-p60-phone.webp"),
    (62, (200, 380, 2400, 1280), "g3/g3-p62-hobbies.webp"),
    (63, (140, 1180, 2660, 3600), "sheets/g4-p63-past.webp"),
    (66, (140, 380, 2660, 2400), "sheets/h1-p66-dialog.webp"),
    (67, (100, 2550, 2700, 3780), "h1/h1-p67-market.webp"),
    (72, (380, 520, 2400, 1250), "h4/h4-p72-shop.webp"),
]


def load_page(page: int) -> Image.Image:
    return Image.open(PAGES / f"page-{page:03d}.webp").convert("RGB")


def pad_box(box, margin=20, size=None):
    l, t, r, b = box
    if size:
        w, h = size
        l = max(0, l - margin)
        t = max(0, t - margin)
        r = min(w, r + margin)
        b = min(h, b + margin)
    return (int(l), int(t), int(r), int(b))


def crop(page: int, box, label_pad=0):
    im = load_page(page)
    l, t, r, b = box
    return im.crop(pad_box((l, t, r, b + label_pad), size=im.size))


def fit_thumb(im: Image.Image) -> Image.Image:
    return ImageOps.contain(im, THUMB_SIZE, method=Image.Resampling.LANCZOS)


def save_webp(im: Image.Image, path: Path, max_width=900):
    path.parent.mkdir(parents=True, exist_ok=True)
    if im.width > max_width:
        h = max(1, int(im.height * max_width / im.width))
        im = im.resize((max_width, h), Image.Resampling.LANCZOS)
    im.save(path, "WEBP", quality=90, method=6)


def build_thumbnails():
    THUMBS.mkdir(parents=True, exist_ok=True)
    for ex_id, page in EXERCISE_PAGE.items():
        thumb = fit_thumb(crop(page, THUMB_BOX[ex_id]))
        canvas = Image.new("RGB", THUMB_SIZE, (255, 255, 255))
        ox = (THUMB_SIZE[0] - thumb.width) // 2
        oy = (THUMB_SIZE[1] - thumb.height) // 2
        canvas.paste(thumb, (ox, oy))
        canvas.save(THUMBS / f"{ex_id}.webp", "WEBP", quality=88, method=6)
        print("thumb", ex_id)


def build_figures():
    for page, box, rel in FIGURE_CROPS:
        save_webp(crop(page, box), FIGURES / rel)
        print("figure", rel)

    # G1: full labelled grid (a–l) — one image like the book
    save_webp(crop(58, G1_GRID_BOX), FIGURES / "g1/g1-p58-grid.webp", max_width=1100)
    print("figure g1/g1-p58-grid.webp")

    for label, box in F1_BOXES:
        rel = f"f1/f1-p55-{label.zfill(2)}.webp"
        save_webp(crop(55, box), FIGURES / rel, max_width=320)
        print("figure", rel)
    sheet = FIGURES / "f1/f1-p55-sheet.webp"
    if sheet.exists():
        sheet.unlink()

    for label, box in F2_BOXES:
        rel = f"f2/f2-p57-{label}.webp"
        save_webp(crop(57, box, label_pad=LABEL_PAD), FIGURES / rel, max_width=300)
        print("figure", rel)

    # remove obsolete per-cell G1 splits (replaced by full grid)
    g1_dir = FIGURES / "g1"
    if g1_dir.exists():
        for old in g1_dir.glob("g1-p58-?.webp"):
            old.unlink()
            print("removed", old.name)

    save_webp(crop(68, (1880, 520, 2550, 1280)), FIGURES / "h2/h2-p68-hose.webp", max_width=340)
    save_webp(crop(68, (1880, 1680, 2550, 2480)), FIGURES / "h2/h2-p68-pullover.webp", max_width=340)
    save_webp(crop(71, (875, 535, 1625, 1365)), FIGURES / "h3/h3-p71-tv.webp")

    for page, box, rel in EXTRA_CROPS:
        max_w = 1100 if "clocks" in rel or "hobbies" in rel else (720 if "sheet" in rel else 900)
        save_webp(crop(page, box), FIGURES / rel, max_width=max_w)
        print("figure", rel)
    print("figures done")


if __name__ == "__main__":
    build_thumbnails()
    build_figures()
    print("done")