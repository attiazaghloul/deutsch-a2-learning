const fs = require('fs');
const vm = require('vm');

const sandbox = {window: {}, console};
vm.createContext(sandbox);
fs.readdirSync('app')
  .filter(file => file.startsWith('data_') && file.endsWith('.js') && file !== 'data_podcast.js')
  .forEach(file => {
    vm.runInContext(fs.readFileSync(`app/${file}`, 'utf8'), sandbox, {filename: file});
  });

const roots = [
  'A1_BOOK', 'A1_VERBS', 'HOEREN_A1_BOOK', 'HOEREN_A1_INTERACTIVE',
  'PHONETIK_A1_BOOK', 'PHONETIK_A1_INTERACTIVE'
];
const ignoredKeys = new Set([
  'ar', 'fbAr', 'image', 'img', 'audio', 'src', 'cover', 'pageImage',
  'poster', 'icon', 'illustration'
]);
const texts = new Set();

function normalize(value) {
  return String(value || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\bUmlaute\s+\u00e4,\s*\u00f6,\s*\u00fc/gi, 'Umlaute')
    .replace(/\s+/g, ' ')
    .trim();
}

function isGermanSpeech(value) {
  return value.length >= 2
    && value.length <= 900
    && /[A-Za-zÄÖÜäöüß]/.test(value)
    && !/[\u0600-\u06ff]/.test(value)
    && !/^(?:assets\/|https?:|data:|#)/i.test(value)
    && !/\.(?:avif|gif|jpe?g|mp3|png|svg|webp)(?:\?.*)?$/i.test(value);
}

function add(value) {
  const clean = normalize(value);
  if (!isGermanSpeech(clean)) return;
  texts.add(clean);
  if (clean.length > 140) {
    const sentences = clean.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [];
    sentences.map(normalize).filter(isGermanSpeech).forEach(sentence => texts.add(sentence));
  }
}

function walk(value, key = '') {
  if (typeof value === 'string') {
    add(value);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach(item => walk(item, key));
    return;
  }
  if (!value || typeof value !== 'object') return;
  Object.entries(value).forEach(([childKey, child]) => {
    if (!ignoredKeys.has(childKey)) walk(child, childKey);
  });
}

roots.forEach(key => walk(sandbox.window[key]));

const existing = new Set();
const fixed = sandbox.window.A2_FIXED_SPEECH;
if (fixed) {
  (fixed.texts || []).map(normalize).forEach(text => existing.add(text));
  (fixed.aliases?.texts || []).map(normalize).forEach(text => existing.add(text));
}

const result = [...texts]
  .filter(text => !existing.has(text))
  .sort((left, right) => left.localeCompare(right, 'de', {sensitivity: 'base'}));

fs.mkdirSync('build', {recursive: true});
fs.writeFileSync('build/a1-speech-library-texts.json', JSON.stringify(result, null, 2));
console.log(`${result.length} A1-only feste Sprechtexte, ${result.reduce((sum, text) => sum + text.length, 0)} Zeichen`);
