# Vocabulary photographs: literal, useful meanings only

`review.json` records the decision for every word in the original 2,169-word
backlog. A photo must show a recognizable object, setting, observable action,
or clear expression. Grammar, pronouns, logical links, word forms, invisible
relationships, and meanings that require captions or a speculative proxy remain
text-only. A missing photo is never replaced with an emoji or an icon.

The final review selected **524 distinct words** for pictures and left **1,658**
words intentionally text-only (including 13 earlier generated proxies that were
withdrawn). Original files are retained; withdrawn pictures are no longer bound
to those cards.

Completed: **484 new reviewed photographs**, generated on 31 new 4×4 sheets
(sheets 3–33, including a repair sheet), plus **40 reviewed picture reuses** for
identical objects/actions and grammatical-number variants. Padding and rejected
or superseded cells are not bound to words. Every selected word is now covered.
The audit covers all 6,129 cards: 4,263 with a picture and 1,866 intentionally
text-only cards, with no eligible photographs pending and no broken image paths.

`aliases.json` records each reviewed equivalence. For example, `das Velo` can
use a photograph of `das Fahrrad`; a government job title cannot be represented
by a generic person in a suit. A bakery's actual bread-making room cannot be
replaced with a photograph of its shopfront.

- `audit.json`: actual coverage, missing file paths, text-only words, and the
  number of **eligible** photographs still pending. Text-only words are not work
  waiting for a future image.
- `pending.json` (generated locally): only eligible words still waiting for a photo.
- `sheets.json`: stable sheet/cell order and delivery status, with each word's
  exact definition and example so that a homonym is not mistaken for another meaning.
- `delivered.json`: the reviewed word-to-photo bindings. Earlier unused files stay
  available in Git but do not appear on cards.

## Generate and slice

1. `node scripts/vocab_images/build.cjs` refreshes the inventory and bindings.
2. Read the word's exact definition and example before writing a scene. Reuse
   an existing picture only for the same object/action and sense. Do not turn a
   vague office worker into a picture for an abstract idea or an invisible rank.
3. Generate one square 4×4 sheet: four equal columns and rows, thin white gutters
   on quarter boundaries, consistent natural light, clear centered subjects and
   safe crop margins. Use realistic photos, no captions, logos, emoji, icons,
   diagrams or symbols. Incidental real-world print should be small and indistinct.
4. Inspect all 16 subjects and their order before slicing.
5. `python scripts/vocab_images/slice.py --sheet N --input /path/to/sheet.png`
   detects gutters and writes individual 420×420 WebP crops. It skips padding
   cells and updates delivery status, bindings, audit and the remaining queue.
6. `npm test` verifies the bindings, file existence, original A2 photo positions,
   text-only exclusions, sheet coverage, and the emoji-free fallback.

Run from the repository root with Pillow and NumPy installed and the A1 and
vocab-scenes assets checked out. Sheet originals are retained locally in the
Git-ignored `incoming/` folder. The page shell precaches the JS binding file;
lesson downloads discover picture paths through chapter data. Leave the source
service-worker version unhashed: the Pages workflow stamps it **after** tests.
