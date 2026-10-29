# Vocabulary photograph completion

`audit.json` records actual coverage, broken paths and the remaining work by chapter.
`pending.json` contains only words still waiting for pictures, in batches of 16.
This is a work queue, **not a claim that those pictures have been generated**.

Delivered: two reviewed 4×4 sheets, 32 photographs, in `sheets.json`. The originals
are retained locally in `incoming/` and ignored by Git. Individual 420×420 WebP
crops are shipped in `app/assets/vocab-generated/`.

Existing pictures are reused only for matching headwords (preserving capitalization).
Original per-card pictures remain authoritative. Review homonyms when adding reuse
rules; do not map images by category or use icons/emoji as photographs.
A2.1's expanded vocabulary retains the original photo index in `legacy.index`;
using the new array position assigns pictures to the wrong words.

1. `node scripts/vocab_images/build.cjs` refreshes the inventory and JS bindings.
2. Choose 16 entries from `pending.json`, append a stable numbered entry to
   `sheets.json`, and write concrete scene descriptions for their exact meanings.
3. Generate one square 4×4 photo sheet: thin white gutters, consistent natural
   lighting, clear subjects, no text, numbers, logos, icons or emoji.
4. Inspect all 16 subjects and their order before slicing.
5. `python scripts/vocab_images/slice.py --sheet N --input /path/to/sheet.png`
   crops using detected gutters, saves WebP files, and updates `delivered.json`,
   the audit, queue and `app/data_vocab_images.js`.
6. `npm test` verifies bindings, file existence, A2 original positions and the
   emoji-free fallback. The page shell precaches the binding file; lesson downloads
   discover the image paths in chapter data.

Requirements for slicing: Pillow and NumPy. Run from the repository root after a
checkout that includes `app/assets/a1/` and `app/assets/vocab-scenes/`.
