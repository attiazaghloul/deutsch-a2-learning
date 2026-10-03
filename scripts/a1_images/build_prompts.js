/* Builds the 4x4 image-sheet prompts for the A1.1 words that still have no picture.

   Input : scripts/a1_images/subjects.tsv  (chapter, German headword, English picture description)
   Output: scripts/a1_images/manifest.json (sheet number -> 16 cells, used by slice_sheets.py)
           scripts/a1_images/PROMPTS.md    (one copy-paste prompt per sheet for Gemini / ChatGPT)

   Run from the repo root:  node scripts/a1_images/build_prompts.js
   It also checks every row against app/data_a11_vocab.js, so a typo in the TSV fails loudly. */
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
for (const file of ['data_a1.js', 'data_a12.js', 'data_a11_vocab.js']) {
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'app', file), 'utf8'), ctx, { filename: file });
}
const chapters = new Map(ctx.A1_BOOK.map(chapter => [chapter.num, chapter]));

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
  const chapter = chapters.get(row.chapter);
  const card = chapter && chapter.vocab.find(entry => entry.w === row.word);
  const id = `k${row.chapter}-${slug(row.word)}`;
  if (!row.subject) errors.push(`no description: ${row.chapter} ${row.word}`);
  else if (!card) errors.push(`word not found in chapter ${row.chapter}: ${row.word}`);
  else if (card.img) errors.push(`already has a picture: ${row.chapter} ${row.word}`);
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
Style for all ${PER_SHEET} photos: realistic, bright natural light, vivid colors, ONE clear main subject centered, simple uncluttered background, friendly and modern, like a stock photo on a language-learning flashcard. People are adults unless stated.
Fill the grid in reading order (left to right, top to bottom):`;

let md = `# A1.1 image sheets (${GRID}x${GRID})\n\n`
  + `${items.length} pictures on ${sheets.length} sheets. For each sheet: paste the prompt into Gemini or ChatGPT (new chat per sheet), `
  + `save the result as \`sheet-NN.png\` (NN = sheet number) and put it in \`scripts/a1_images/incoming/\`.\n\n`
  + `If a sheet comes out with a wrong number of cells, misses a picture or has text in it, just ask for it again.\n\n`;
for (const { sheet, cells } of sheets) {
  const list = cells.map((cell, i) => `${i + 1}. ${cell.subject}`).join('\n');
  md += `## Sheet ${pad(sheet)}\n\n`;
  md += `Words: ${cells.map(cell => cell.word).join(' · ')}\n\n`;
  md += '```text\n' + header + '\n' + list + '\n```\n\n';
}

fs.writeFileSync(path.join(DIR, 'manifest.json'), JSON.stringify({ grid: GRID, sheets }, null, 1) + '\n');
fs.writeFileSync(path.join(DIR, 'PROMPTS.md'), md);
console.log(`${items.length} pictures, ${sheets.length} sheets`);
