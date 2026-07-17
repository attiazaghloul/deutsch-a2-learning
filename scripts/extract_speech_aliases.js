const fs = require('fs');
const vm = require('vm');

const sandbox = {window: {}};
vm.createContext(sandbox);
[
  'data_book0.js', 'data_book0_expansion.js', 'data_book1.js',
  'data_book2.js', 'data_extra.js', 'data_enrichment.js',
  'data_lernwortschatz8.js', 'data_lernwortschatz9.js'
].forEach(file => vm.runInContext(fs.readFileSync(`app/${file}`, 'utf8'), sandbox));

const aliases = new Set();
[...sandbox.window.BOOK0, ...sandbox.window.BOOK1, ...sandbox.window.BOOK2]
  .flatMap(chapter => chapter.vocab)
  .map(item => String(item.w || '')
    .replace(/\s*,.*$/, '')
    .replace(/\s+\((?:Sg\.|Pl\.|\+\s*[ADG]\.?)\)\s*$/i, '')
    .replace(/\s+/g, ' ')
    .trim())
  .filter(text => text.length > 1)
  .forEach(text => aliases.add(text));

fs.mkdirSync('build', {recursive: true});
fs.writeFileSync(
  'build/speech-vocab-aliases.json',
  JSON.stringify([...aliases].sort((a, b) => a.localeCompare(b, 'de')), null, 2)
);
console.log(`${aliases.size} kurze Wortformen für die Aussprache`);
