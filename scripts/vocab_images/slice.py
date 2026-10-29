#!/usr/bin/env python3
"""Slice a reviewed 4x4 photo sheet, then rebuild exact-word image bindings.
Usage: python scripts/vocab_images/slice.py --sheet 1 --input /path/to/sheet.png
Keep every generated original in incoming/sheet-NNN.png (git-ignored).
"""
import argparse
import importlib.util
import json
import shutil
import subprocess
from pathlib import Path
import numpy as np
from PIL import Image

DIR = Path(__file__).resolve().parent
ROOT = DIR.parents[1]
spec = importlib.util.spec_from_file_location('a1_slicer', ROOT / 'scripts/a1_images/slice_sheets.py')
slicer = importlib.util.module_from_spec(spec)
spec.loader.exec_module(slicer)

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--sheet', type=int, required=True)
    parser.add_argument('--input', type=Path, required=True)
    args = parser.parse_args()
    sheets = json.loads((DIR / 'sheets.json').read_text())
    sheet = next(s for s in sheets if s['sheet'] == args.sheet)
    if len(sheet['cells']) != 16:
        raise ValueError('A sheet must contain exactly 16 reviewed pictures')
    image = Image.open(args.input).convert('RGB')
    if abs(image.width-image.height) > min(image.size)*.03 or min(image.size)<1000:
        raise ValueError('Use a square sheet of at least 1000px')
    gray = np.asarray(image.convert('L'), dtype=np.uint8)
    cols, xnotes = slicer.cell_edges(gray, 0, 4)
    rows, ynotes = slicer.cell_edges(gray, 1, 4)
    incoming = DIR / 'incoming'
    incoming.mkdir(exist_ok=True)
    original = incoming / f'sheet-{args.sheet:03}.png'
    if args.input.resolve() != original.resolve():
        shutil.copy2(args.input, original)
    output = ROOT / 'app/assets/vocab-generated'
    output.mkdir(parents=True, exist_ok=True)
    delivered_path = DIR / 'delivered.json'
    delivered = json.loads(delivered_path.read_text()) if delivered_path.exists() else {}
    for index, cell in enumerate(sheet['cells']):
        row, col = divmod(index, 4)
        x0, x1 = cols[col]
        y0, y1 = rows[row]
        inset = max(2, round(min(x1-x0, y1-y0)*.012))
        x0, y0, x1, y1 = x0+inset, y0+inset, x1-inset, y1-inset
        side = min(x1-x0, y1-y0)
        left, top = x0+(x1-x0-side)//2, y0+(y1-y0-side)//2
        filename = f's{args.sheet:03}-{index+1:02}.webp'
        image.crop((left, top, left+side, top+side)).resize((420,420),Image.Resampling.LANCZOS).save(output/filename,quality=85,method=6)
        delivered[cell['word'].split(',')[0].strip()] = f'assets/vocab-generated/{filename}'
    delivered_path.write_text(json.dumps(delivered,ensure_ascii=False,indent=2)+'\n')
    print(f'Sheet {args.sheet}: 16 images sliced. Grid: {cols}, {rows}; notes: {xnotes+ynotes}')
    subprocess.run(['node',str(DIR/'build.cjs')],cwd=ROOT,check=True)

if __name__ == '__main__':
    main()
