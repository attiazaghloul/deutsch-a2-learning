# Task: generate the A2.1 flashcard pictures

Repository: `attiazaghloul/deutsch-a2-learning`, branch `claude/nifty-gauss-9q2mmg`.

The A2.1 vocabulary cards (Netzwerk neu A2.1, Kapitel 1-6) need 640 pictures. They are made as
40 image sheets, each sheet one square image with a 4x4 grid of 16 photos. Everything except the
image generation is already done.

## Files

- `scripts/a21_images/PROMPTS.md` - the 40 prompts, one per sheet (`## Sheet 01` ... `## Sheet 40`).
  Use the text inside each ```text block exactly as it is.
- `scripts/a21_images/manifest.json` - which word is in which cell (used by the slicer, do not edit).
- `scripts/a21_images/slice_sheets.py` - cuts the sheets into single pictures and links them to the words.

## Steps

1. For every sheet 01-40: generate ONE image from that sheet's prompt with your image-generation
   tool (GPT image model or Gemini image model). Use the highest resolution and quality available
   (2048x2048 or more if possible, square 1:1).
2. Save it as `scripts/a21_images/incoming/sheet-NN.png` (NN = two-digit sheet number, e.g. `sheet-07.png`).
3. Check every sheet before keeping it. Generate it again if:
   - it is not exactly 4 columns x 4 rows of equal square cells with thin white gutters,
   - a cell is missing, merged, or out of order (cells follow the numbered list, left to right, top to bottom),
   - there is any text, letters or numbers in the image,
   - any person is not fully and modestly dressed (no nudity, swimwear, underwear, bare chests,
     revealing or tight clothing), or there is violence or blood,
   - a photo does not clearly show the meaning of its description.
4. From the repo root run:
   ```
   pip install pillow numpy
   python3 scripts/a21_images/slice_sheets.py
   ```
   It writes `app/assets/vocab-scenes/a21/*.webp` and `app/data_a21_images.js`.
   It must print `16/16 pictures` for every sheet. If it prints a `!` warning about a gutter or
   cell size, regenerate that sheet and run it again (`--sheet NN` re-slices just one sheet).
5. Open a few results in `app/assets/vocab-scenes/a21/` and check the picture fits its word
   (the file name is the word, e.g. `k1-die-familie-n.webp`).
6. Run `npm test` - all tests must pass.
7. Commit `app/assets/vocab-scenes/a21/` and `app/data_a21_images.js` (do NOT commit the raw
   sheets in `incoming/`, they are git-ignored) and push to `claude/nifty-gauss-9q2mmg`.

Do not edit `PROMPTS.md`, `manifest.json` or `subjects.tsv`. If a description really cannot be
drawn well, change it in `subjects.tsv`, run `node scripts/a21_images/build_prompts.js`, and
regenerate only the sheets that changed.
