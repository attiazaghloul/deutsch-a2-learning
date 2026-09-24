const fs = require('fs');
const vm = require('vm');

const sandbox = {window: {}, console};
vm.createContext(sandbox);
fs.readdirSync('app')
  .filter(file => file.startsWith('data_') && file.endsWith('.js') && !['data_podcast.js', 'data_podcast_b1.js', 'data_speech_b1.js', 'data_dictionary_de_ar.js'].includes(file))
  .forEach(file => {
    vm.runInContext(fs.readFileSync(`app/${file}`, 'utf8'), sandbox, {filename: file});
  });

/* Collects every German text of the B1.1 level (lessons, verbs, exam,
   grammar, listening) that is not already recorded in the A2 or A1
   libraries. Output feeds
   scripts/generate_b1_fixed_speech.py. */
const roots = ['B1_BOOK', 'B1_VERBS', 'B1_EXAM', 'B1_GRAMMAR', 'B1_HOEREN'];
const ignoredKeys = new Set([
  'ar', 'fbAr', 'image', 'img', 'audio', 'src', 'cover', 'pageImage',
  'poster', 'icon', 'illustration', 'id', 'type', 's'
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
    && !/_{2,}/.test(value)
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

// Vocabulary cards are spoken without plural endings and grammar notes
// (see prepareSpeechText in app/js/03-speech.js), so record that form too.
(sandbox.window.B1_BOOK || []).forEach(chapter => (chapter.vocab || []).forEach(card => {
  add(String(card.w || '')
    .replace(/\s*,.*$/, '')
    .replace(/\s+\((?:Sg\.|Pl\.|\+\s*[ADG]\.?)\)\s*$/i, ''));
}));

const existing = new Set();
for (const fixed of [sandbox.window.A2_FIXED_SPEECH, sandbox.window.A1_FIXED_SPEECH]) {
  if (!fixed) continue;
  (fixed.texts || []).map(normalize).forEach(text => existing.add(text));
  (fixed.aliases?.texts || []).map(normalize).forEach(text => existing.add(text));
}

const result = [...texts]
  .filter(text => !existing.has(text))
  .sort((left, right) => left.localeCompare(right, 'de', {sensitivity: 'base'}));

fs.mkdirSync('build', {recursive: true});
fs.writeFileSync('build/b1-speech-library-texts.json', JSON.stringify(result, null, 2));
console.log(`${result.length} B1-only feste Sprechtexte, ${result.reduce((sum, text) => sum + text.length, 0)} Zeichen`);
