/* Builds the 4x4 image-sheet prompts for the A2.1 words (Netzwerk neu A2.1, Kapitel 1-6)
   that still have no correct picture.

   Input : scripts/a21_images/subjects.tsv  (chapter, German headword, English picture description)
   Output: scripts/a21_images/manifest.json (sheet number -> 16 cells, used by slice_sheets.py)
           scripts/a21_images/PROMPTS.md    (one copy-paste prompt per sheet for Gemini / ChatGPT)

   Run from the repo root:  node scripts/a21_images/build_prompts.js
   It also checks every row against app/data_a21_vocab.js, so a typo in the TSV fails loudly. */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..', '..');
const DIR = __dirname;
const GRID = 4;
const PER_SHEET = GRID * GRID;

const ctx = { console };
ctx.window = ctx;
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'app', 'data_a21_vocab.js'), 'utf8'), ctx, { filename: 'data_a21_vocab.js' });
const vocab = ctx.A2_VOCAB_21;

const slug = text => text
  .toLowerCase()
  .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
  .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const rows = fs.readFileSync(path.join(DIR, 'subjects.tsv'), 'utf8')
  .split('\n')
  .filter(line => line.trim() && !line.startsWith('#'))
  .map(line => {
    const [chapter, word, subject] = line.split('\t');
    return { chapter: Number(chapter), word, subject };
  });

const errors = [];
const seen = new Set();
const items = rows.map(row => {
  const card = (vocab[row.chapter] || []).find(entry => entry.w === row.word);
  const id = `k${row.chapter}-${slug(row.word)}`;
  if (!row.subject) errors.push(`no description: ${row.chapter} ${row.word}`);
  else if (!card) errors.push(`word not found in chapter ${row.chapter}: ${row.word}`);
  if (seen.has(id)) errors.push(`duplicate id: ${id}`);
  seen.add(id);
  return { id, chapter: row.chapter, word: row.word, ar: card ? card.ar : '', subject: row.subject };
});
if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

const sheets = [];
for (let i = 0; i < items.length; i += PER_SHEET) {
  sheets.push({ sheet: sheets.length + 1, cells: items.slice(i, i + PER_SHEET) });
}

const pad = n => String(n).padStart(2, '0');
const header = `Create ONE single square image at the highest resolution you can: a perfectly regular ${GRID}x${GRID} grid of ${PER_SHEET} separate photographs, exactly ${GRID} columns and ${GRID} rows, every cell the same square size, separated only by thin plain white gutters (no frames, no shadows, no captions).
Absolutely no text, letters, numbers, labels or watermarks anywhere in the image, also not inside the photos (signs, screens, paper and posters must show unreadable blur or abstract shapes).
Every photo must make the meaning of its description obvious at first glance, like a flashcard for learning a word: clear action, clear facial expression, ONE clear main subject.
All people are fully and modestly dressed (no nudity, no swimwear, no underwear, no bare chests, no revealing or tight clothing); no violence, no blood.
Style for all ${PER_SHEET} photos: realistic, high detail, sharp focus, bright natural light, vivid colors, simple uncluttered background, friendly and modern, like a stock photo on a language-learning flashcard. People are adults unless stated.
Fill the grid in reading order (left to right, top to bottom):`;

let md = `# A2.1 image sheets (${GRID}x${GRID})\n\n`
  + `${items.length} pictures on ${sheets.length} sheets. `
  + `For each sheet: paste the prompt into Gemini or ChatGPT (new chat per sheet), `
  + `save the result as \`sheet-NN.png\` (NN = sheet number) and put it in \`scripts/a21_images/incoming/\`. `
  + `Then run \`python3 scripts/a21_images/slice_sheets.py\` from the repo root.\n\n`
  + `If a sheet comes out with a wrong number of cells, misses a picture, has text in it or shows anything immodest, just ask for it again.\n\n`;
for (const { sheet, cells } of sheets) {
  const list = cells.map((cell, i) => `${i + 1}. ${cell.subject}`).join('\n');
  md += `## Sheet ${pad(sheet)}\n\n`;
  md += `Words: ${cells.map(cell => cell.word).join(' · ')}\n\n`;
  md += '```text\n' + header + '\n' + list + '\n```\n\n';
}

fs.writeFileSync(path.join(DIR, 'manifest.json'), JSON.stringify({ grid: GRID, sheets }, null, 1) + '\n');
fs.writeFileSync(path.join(DIR, 'PROMPTS.md'), md);
console.log(`${items.length} pictures, ${sheets.length} sheets`);
