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
  'PHONETIK_A1_BOOK', 'PHONETIK_A1_INTERACTIVE',
  'BOOK0', 'BOOK1', 'BOOK2', 'GRAM', 'A2_VERBS', 'HOEREN_BOOK',
  'HOEREN_INTERACTIVE', 'A2_EXAM', 'READY_EXPRESSIONS'
];
const ignoredKeys = new Set([
  'ar', 'fbAr', 'image', 'img', 'audio', 'src', 'cover', 'pageImage',
  'poster', 'icon', 'illustration'
]);
const fixedInterfaceSpeech = [
  'Ich lerne Deutsch Schritt für Schritt.',
  'Guten Tag! Ich spreche Deutsch mit dir.',
  'Ich lerne jeden Tag ein bisschen Deutsch.',
  'Guten Tag! Ich bin eine deutsche Stimme. So klinge ich beim Vorlesen.',
  'Diese Stimme ist jetzt ausgewählt.'
];
const texts = new Set(fixedInterfaceSpeech);

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

const result = [...texts].sort((left, right) =>
  left.localeCompare(right, 'de', {sensitivity: 'base'})
);
fs.mkdirSync('build', {recursive: true});
fs.writeFileSync('build/speech-library-texts.json', JSON.stringify(result, null, 2));
console.log(`${result.length} feste Sprechtexte, ${result.reduce((sum, text) => sum + text.length, 0)} Zeichen`);
