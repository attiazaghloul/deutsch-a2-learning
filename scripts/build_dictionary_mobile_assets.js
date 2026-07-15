/* Build small, mobile-safe dictionary indexes and data chunks from the legacy bundle. */
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const source = path.join(root, 'app', 'data_dictionary_de_ar.js');
const output = path.join(root, 'app', 'dictionary-data');
const CHUNK_SIZE = 4000;
const INDEX_BUCKETS = 16;

global.window = global;
require(source);
const dictionary = global.OFFLINE_DE_AR;
if (!dictionary?.entries?.length) throw new Error('Legacy dictionary data was not loaded.');

function normalize(value) {
  return String(value || '')
    .toLocaleLowerCase('de-DE')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[\u064B-\u065F\u0670]/g, '')
    .replace(/ß/g, 'ss')
    .replace(/[^A-Za-z0-9\u00C0-\u024F\u0600-\u06FF\s]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function bucketFor(value) {
  const bucketValue = /^[\u0600-\u06FF]/.test(value) && value.startsWith('ال') && value.length > 3 ? value.slice(2) : value;
  const prefix = [...bucketValue.slice(0, 2)];
  let hash = 0;
  for (const char of prefix) hash = (Math.imul(hash, 31) + char.codePointAt(0)) >>> 0;
  return hash % INDEX_BUCKETS;
}

function addEntryPairs(target, values, entryIndex) {
  const best = new Map();
  for (const [raw, rank] of values) {
    const value = normalize(raw);
    if (value.length < 2) continue;
    const previous = best.get(value);
    if (previous == null || rank < previous) best.set(value, rank);
  }
  for (const [value, rank] of best) target[bucketFor(value)].push([value, entryIndex, rank]);
}

fs.mkdirSync(output, { recursive: true });
for (const name of fs.readdirSync(output)) fs.unlinkSync(path.join(output, name));

const assets = [];
for (let start = 0, chunk = 0; start < dictionary.entries.length; start += CHUNK_SIZE, chunk += 1) {
  const id = String(chunk).padStart(2, '0');
  const name = `chunk-${id}.js`;
  const entries = dictionary.entries.slice(start, start + CHUNK_SIZE);
  fs.writeFileSync(
    path.join(output, name),
    `self.OFFLINE_DICT_CHUNKS=self.OFFLINE_DICT_CHUNKS||{};self.OFFLINE_DICT_CHUNKS[${chunk}]=${JSON.stringify(entries)};\n`
  );
  assets.push(`dictionary-data/${name}`);
}

const german = Array.from({ length: INDEX_BUCKETS }, () => []);
const arabic = Array.from({ length: INDEX_BUCKETS }, () => []);
dictionary.entries.forEach((entry, entryIndex) => {
  const word = entry[0] || '';
  const articleWord = entry[5] ? `${entry[5]} ${word}` : '';
  const germanValues = [[word, 0], [articleWord, 0]];
  for (const form of entry[7] || []) germanValues.push([form, 1]);
  for (const token of normalize(word).split(' ')) germanValues.push([token, 2]);
  addEntryPairs(german, germanValues, entryIndex);

  const arabicValues = [];
  for (const translation of entry[2] || []) {
    const value = normalize(translation);
    arabicValues.push([value, 0]);
    if (value.startsWith('ال')) arabicValues.push([value.slice(2), 1]);
    for (const token of value.split(' ')) arabicValues.push([token, 2]);
  }
  addEntryPairs(arabic, arabicValues, entryIndex);
});

for (const [language, buckets] of [['de', german], ['ar', arabic]]) {
  buckets.forEach((pairs, bucket) => {
    pairs.sort((a, b) => a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : a[2] - b[2] || a[1] - b[1]);
    const id = String(bucket).padStart(2, '0');
    const key = `${language}-${id}`;
    const name = `index-${key}.js`;
    fs.writeFileSync(
      path.join(output, name),
      `self.OFFLINE_DICT_INDEXES=self.OFFLINE_DICT_INDEXES||{};self.OFFLINE_DICT_INDEXES[${JSON.stringify(key)}]=${JSON.stringify(pairs)};\n`
    );
    assets.push(`dictionary-data/${name}`);
  });
}

const manifest = {
  version: 2,
  entries: dictionary.entries.length,
  chunkSize: CHUNK_SIZE,
  chunks: Math.ceil(dictionary.entries.length / CHUNK_SIZE),
  indexBuckets: INDEX_BUCKETS,
  assets,
};
fs.writeFileSync(
  path.join(output, 'manifest.js'),
  `self.OFFLINE_DICTIONARY_MANIFEST=${JSON.stringify(manifest)};\n`
);

const bytes = fs.readdirSync(output).reduce((sum, name) => sum + fs.statSync(path.join(output, name)).size, 0);
console.log(JSON.stringify({ ...manifest, bytes, files: assets.length + 1 }, null, 2));
