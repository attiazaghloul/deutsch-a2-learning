"""Crop question figures and chapter thumbnails for Hören & Sprechen A1."""
from pathlib import Path
from PIL import Image

BASE = Path(r"C:\Users\DELL\Downloads\New folder (9)")
PAGES = BASE / "app/assets/listening/a1/pages"
FIGURES = BASE / "app/assets/listening/a1/figures"
FIGURES.mkdir(parents=True, exist_ok=True)

# (page, left%, top%, right%, bottom%, outfile)
CROPS = [
    # A8 · Lisa und Paul (page 16)
    (16, 0.04, 0.14, 0.48, 0.34, "a8/a8-p16-bike.webp"),
    (16, 0.52, 0.30, 0.96, 0.52, "a8/a8-p16-city.webp"),
    (16, 0.04, 0.52, 0.48, 0.72, "a8/a8-p16-cat.webp"),
    (16, 0.52, 0.72, 0.96, 0.92, "a8/a8-p16-tea.webp"),
    # A8 continued (page 17)
    (17, 0.04, 0.08, 0.48, 0.30, "a8/a8-p17-pingpong.webp"),
    (17, 0.52, 0.08, 0.96, 0.30, "a8/a8-p17-mountains.webp"),
    (17, 0.04, 0.42, 0.48, 0.64, "a8/a8-p17-talk.webp"),
    (17, 0.52, 0.64, 0.96, 0.90, "a8/a8-p17-kino.webp"),
    # C2 map
    (35, 0.08, 0.12, 0.92, 0.58, "c2/c2-p35-map.webp"),
    # C3 place illustrations
    (37, 0.04, 0.12, 0.32, 0.28, "c3/c3-p37-supermarkt.webp"),
    (37, 0.34, 0.12, 0.62, 0.28, "c3/c3-p37-post.webp"),
    (37, 0.64, 0.12, 0.96, 0.28, "c3/c3-p37-firma.webp"),
    (37, 0.04, 0.30, 0.32, 0.46, "c3/c3-p37-garten.webp"),
    (37, 0.34, 0.30, 0.62, 0.46, "c3/c3-p37-tankstelle.webp"),
    (37, 0.64, 0.30, 0.96, 0.46, "c3/c3-p37-meldeamt.webp"),
    # F1 professions (page 55, left column rows)
    (55, 0.04, 0.14, 0.42, 0.22, "f1/f1-p55-taxi.webp"),
    (55, 0.04, 0.22, 0.42, 0.30, "f1/f1-p55-lehrerin.webp"),
    (55, 0.04, 0.30, 0.42, 0.38, "f1/f1-p55-kellnerin.webp"),
    (55, 0.04, 0.38, 0.42, 0.46, "f1/f1-p55-friseur.webp"),
    (55, 0.04, 0.46, 0.42, 0.54, "f1/f1-p55-verkaeuferin.webp"),
    (55, 0.04, 0.54, 0.42, 0.62, "f1/f1-p55-kunde.webp"),
    (55, 0.04, 0.62, 0.42, 0.70, "f1/f1-p55-aerztin.webp"),
    # F2 profession pictures a-i (page 57, right column)
    (57, 0.58, 0.10, 0.78, 0.20, "f2/f2-p57-a.webp"),
    (57, 0.78, 0.10, 0.96, 0.20, "f2/f2-p57-b.webp"),
    (57, 0.58, 0.20, 0.78, 0.32, "f2/f2-p57-c.webp"),
    (57, 0.78, 0.20, 0.96, 0.32, "f2/f2-p57-d.webp"),
    (57, 0.58, 0.32, 0.78, 0.44, "f2/f2-p57-e.webp"),
    (57, 0.78, 0.32, 0.96, 0.44, "f2/f2-p57-f.webp"),
    (57, 0.58, 0.44, 0.78, 0.56, "f2/f2-p57-g.webp"),
    (57, 0.78, 0.44, 0.96, 0.56, "f2/f2-p57-h.webp"),
    (57, 0.58, 0.56, 0.78, 0.68, "f2/f2-p57-i.webp"),
    # G1 activity grid (page 58)
    (58, 0.52, 0.10, 0.96, 0.88, "g1/g1-p58-grid.webp"),
    # H2 clothing scenes
    (69, 0.04, 0.12, 0.48, 0.42, "h2/h2-p69-hose.webp"),
    (69, 0.52, 0.12, 0.96, 0.42, "h2/h2-p69-pullover.webp"),
    # H3 TV shop
    (71, 0.08, 0.14, 0.92, 0.48, "h3/h3-p71-tv.webp"),
]

manifest = {}

for page, l, t, r, b, rel in CROPS:
    src = PAGES / f"page-{page:03d}.webp"
    out = FIGURES / rel
    out.parent.mkdir(parents=True, exist_ok=True)
    im = Image.open(src).convert("RGB")
    w, h = im.size
    box = (int(w * l), int(h * t), int(w * r), int(h * b))
    crop = im.crop(box)
    crop.save(out, "WEBP", quality=85, method=6)
    manifest[rel] = {"page": page, "width": crop.width, "height": crop.height}
    print("saved", rel, crop.size)

print("done", len(manifest), "figures")