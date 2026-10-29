const assert = require('node:assert/strict');
const { readFileSync, existsSync, readdirSync } = require('node:fs');
const { join } = require('node:path');
const vm = require('node:vm');
const test = require('node:test');

const root = join(__dirname, '..');
const jsDir = join(root, 'app', 'js');
// The app shell is split into index.html plus ordered classic scripts; tests
// inspect them as one source so helpers can be loaded regardless of file.
const html = [
  readFileSync(join(root, 'app', 'index.html'), 'utf8'),
  ...readdirSync(jsDir).filter(file => file.endsWith('.js')).sort().map(file => readFileSync(join(jsDir, file), 'utf8')),
  readFileSync(join(root, 'app', 'styles', 'app.css'), 'utf8')
].join('\n');

function functionSource(name) {
  const start = html.indexOf(`function ${name}(`);
  assert.notEqual(start, -1, `Expected function ${name} to exist`);
  const nextFunction = html.indexOf('\nfunction ', start + 1);
  const boundary = nextFunction === -1 ? html.length : nextFunction;
  const end = html.lastIndexOf('\n}', boundary);
  assert.ok(end > start, `Could not extract function ${name}`);
  return html.slice(start, end + 2);
}

function loadFunctions(names) {
  const context = vm.createContext({});
  const exports = names.map(name => `this.${name}=${name};`).join('\n');
  vm.runInContext(`${names.map(functionSource).join('\n')}\n${exports}`, context);
  return context;
}

test('HTML escaping protects generated markup', () => {
  const { escapeHtml } = loadFunctions(['escapeHtml']);
  assert.equal(escapeHtml(`<a title="x">Tom & Jerry's</a>`), '&lt;a title=&quot;x&quot;&gt;Tom &amp; Jerry&#39;s&lt;/a&gt;');
});

test('search normalization is case, accent, punctuation, and whitespace insensitive', () => {
  const { normalizeWordForSearch, bareWordKey } = loadFunctions(['normalizeWordForSearch', 'bareWordKey']);
  assert.equal(normalizeWordForSearch('  ÄPFEL,   schön!  '), 'apfel schon');
  assert.equal(bareWordKey('die Äpfel'), 'apfel');
  assert.equal(bareWordKey('sich anmelden'), 'anmelden');
});

test('vocabulary speech removes plural symbols and grammar annotations', () => {
  const { prepareSpeechText } = loadFunctions(['prepareSpeechText']);
  assert.equal(prepareSpeechText('der Fahrplan, ⸚e', { vocabulary: true }), 'der Fahrplan');
  assert.equal(prepareSpeechText('die Fahrt, -en', { vocabulary: true }), 'die Fahrt');
  assert.equal(prepareSpeechText('das Chaos (Sg.)', { vocabulary: true }), 'das Chaos');
  assert.equal(prepareSpeechText('außer (+ D.)', { vocabulary: true }), 'außer');
  assert.equal(prepareSpeechText('Ich fahre mit dem Zug.'), 'Ich fahre mit dem Zug.');
});

function speechElement(text, { arabic = false, insideButton = false } = {}) {
  return {
    dataset: {},
    buttons: [],
    classList: { add() {} },
    closest(selector) {
      if (selector.includes('[lang="ar"]')) return arabic ? this : null;
      if (selector === 'button') return insideButton ? this : null;
      return null;
    },
    matches() { return false; },
    cloneNode() { return { textContent: text, querySelectorAll() { return []; } }; },
    appendChild(button) { this.buttons.push(button); }
  };
}

test('speech accepts German prose and skips Arabic regions and unmarked Arabic text', () => {
  const { germanSpeechText } = loadFunctions(['isArabicSpeechElement', 'germanSpeechText', 'cleanSpeechText', 'prepareSpeechText']);
  assert.equal(germanSpeechText(speechElement('Ich lerne Deutsch.')), 'Ich lerne Deutsch.');
  assert.equal(germanSpeechText(speechElement('ترجمة النص')), '');
  assert.equal(germanSpeechText(speechElement('معنى Haus')), '');
  assert.equal(germanSpeechText(speechElement('Haus', { arabic: true })), '');
  assert.equal(germanSpeechText(speechElement('123 ▶')), '');
});

test('speech enhancement adds only German buttons and stays idempotent', () => {
  const context = loadFunctions(['isArabicSpeechElement', 'germanSpeechText', 'cleanSpeechText', 'prepareSpeechText', 'enhanceSpeech']);
  const spoken = [];
  context.speakText = (text, lang) => spoken.push([text, lang]);
  context.document = { createElement() { return { setAttribute() {}, addEventListener(type, callback) { this[type] = callback; } }; } };
  const candidates = [
    speechElement('Guten Tag.'),
    speechElement('عنوان القراءة', { arabic: true }),
    speechElement('Deutsch', { arabic: true }),
    speechElement('ترجمة بدون علامة'),
    speechElement('Deutsch', { insideButton: true })
  ];
  const root = { querySelectorAll() { return candidates; } };
  context.enhanceSpeech(root);
  context.enhanceSpeech(root);
  assert.deepEqual(candidates.map(element => element.buttons.length), [1, 0, 0, 0, 0]);
  candidates[0].buttons[0].click({ preventDefault() {}, stopPropagation() {} });
  assert.deepEqual(spoken, [['Guten Tag.', 'de']]);
});

test('listen mode ignores Arabic clicks inside a German speech target', () => {
  const context = loadFunctions(['isArabicSpeechElement', 'germanSpeechText', 'cleanSpeechText', 'prepareSpeechText', 'handleListenClick']);
  const spoken = [];
  context.speakText = (text, lang) => spoken.push([text, lang]);
  context.document = { body: { classList: { contains() { return true; } } } };
  const german = speechElement('Mein Alltag');
  function event(arabic) {
    return {
      target: { closest(selector) {
        if (selector.includes('[lang="ar"]')) return arabic ? this : null;
        if (selector === '.speakable,.quiz-opt,.word-token') return german;
        return null;
      } },
      preventDefault() {}, stopPropagation() {}
    };
  }
  context.handleListenClick(event(true));
  assert.deepEqual(spoken, []);
  context.handleListenClick(event(false));
  assert.deepEqual(spoken, [['Mein Alltag', 'de']]);
});

test('favorite identifiers are stable and distinguish entries', () => {
  const { stableFavoriteHash, wordEntryId } = loadFunctions(['stableFavoriteHash', 'wordEntryId']);
  assert.equal(stableFavoriteHash('lernen'), stableFavoriteHash('lernen'));
  assert.notEqual(stableFavoriteHash('lernen'), stableFavoriteHash('lehren'));
  assert.match(wordEntryId('a1', { num: 3 }, 2, { w: 'lernen' }), /^a1-k3-2-[a-z0-9]+$/);
});

test('sentence selection and highlighting handle case and unsafe markup', () => {
  const { escapeHtml, selectionIndex, sentenceContainingSelection, highlightedContextHtml } = loadFunctions([
    'escapeHtml', 'selectionIndex', 'sentenceContainingSelection', 'highlightedContextHtml'
  ]);
  assert.equal(selectionIndex('Ich lerne Deutsch.', 'LERNE'), 4);
  assert.equal(sentenceContainingSelection('Hallo! Ich lerne Deutsch. Tschüss!', 'lerne'), 'Ich lerne Deutsch.');
  assert.equal(highlightedContextHtml('<b>Deutsch</b>', 'Deutsch'), '&lt;b&gt;<mark>Deutsch</mark>&lt;/b&gt;');
  assert.equal(sentenceContainingSelection('Ein kurzer Satz.', 'fehlt'), null);
});

test('gap exercise markup escapes prose and answer attributes', () => {
  const { escapeHtml, gapField, parseGaps } = loadFunctions(['escapeHtml', 'gapField', 'parseGaps']);
  const rendered = parseGaps('<b>Ich</b> {{bin|war}} hier.');
  assert.match(rendered, /^&lt;b&gt;Ich&lt;\/b&gt; /);
  assert.match(rendered, /data-ans="bin\|war"/);
  assert.match(gapField('*'), /data-free="1"/);
  assert.match(gapField('=eine lange Antwort'), /gap-wide/);
});

test('route fallbacks preserve the expected navigation hierarchy', () => {
  const { fallbackBackTarget } = loadFunctions(['fallbackBackTarget']);
  assert.equal(fallbackBackTarget('a1/k4/grammar'), 'a1/k4');
  assert.equal(fallbackBackTarget('a1/k4'), 'a1/lessons');
  assert.equal(fallbackBackTarget('a1/listen/phonetik/B/2'), 'a1/listen/phonetik/B');
  assert.equal(fallbackBackTarget('listen/C/4'), 'listen/C');
  assert.equal(fallbackBackTarget('games/memory'), 'games');
  assert.equal(fallbackBackTarget('unknown'), '');
});

test('listening answer summaries cover every question type', () => {
  const { listeningCorrectAnswer } = loadFunctions(['listeningCorrectAnswer']);
  assert.equal(listeningCorrectAnswer({ type: 'text', answer: ['Hallo', 'Hi'] }), 'Hallo');
  assert.equal(listeningCorrectAnswer({ type: 'choice', options: ['A', 'B'], answer: 1 }), 'B');
  assert.equal(listeningCorrectAnswer({ type: 'multi', options: ['A', 'B', 'C'], answer: [0, 2] }), 'A, C');
  assert.match(listeningCorrectAnswer({ type: 'match', left: ['1', '2'], options: ['A', 'B'], answer: [1, 0] }), /^1: B.+2: A$/);
  assert.equal(listeningCorrectAnswer({ type: 'unknown' }), '');
});

test('service-worker precache entries exist on disk', () => {
  const source = readFileSync(join(root, 'app', 'sw.js'), 'utf8');
  const coreBody = source.match(/const CORE = \[([\s\S]*?)\];/)[1];
  const paths = [...coreBody.matchAll(/'([^']+)'/g)].map(match => match[1]);
  const missing = paths
    .filter(path => path !== './')
    .filter(path => !existsSync(join(root, 'app', path)));
  assert.deepEqual(missing, []);
});

test('large offline dictionary is searched outside the UI thread', () => {
  assert.doesNotMatch(html, /<script[^>]+data_dictionary_de_ar\.js/);
  assert.equal((html.match(/function selectionContext\(/g) || []).length, 1, 'Dead duplicate selection handler should stay removed');

  const workerSource = readFileSync(join(root, 'app', 'dictionary-worker.js'), 'utf8');
  const listeners = {};
  const messages = [];
  const entries = [
    ['Apfel', 'n', ['تفاحة'], [], '', 'der', [], ['Äpfel']],
    ['Apfelsaft', 'n', ['عصير التفاح'], [], '', 'der', [], []],
    ['lernen', 'v', ['يتعلم'], [], '', '', [], ['lernt']]
  ];
  const workerGlobal = {
    addEventListener(type, handler) { listeners[type] = handler; },
    postMessage(message) { messages.push(message); }
  };
  const context = vm.createContext({
    self: workerGlobal,
    importScripts(asset) {
      if (asset.endsWith('manifest.js')) {
        workerGlobal.OFFLINE_DICTIONARY_MANIFEST = { version: 2, entries: 3, chunkSize: 3, indexBuckets: 16, assets: ['test'] };
      } else if (asset.includes('index-de-')) {
        const key = asset.match(/index-(de-\d+)\.js/)[1];
        workerGlobal.OFFLINE_DICT_INDEXES[key] = [['apfel', 0, 0], ['apfelsaft', 1, 0]];
      } else if (asset.includes('index-ar-')) {
        const key = asset.match(/index-(ar-\d+)\.js/)[1];
        workerGlobal.OFFLINE_DICT_INDEXES[key] = [['يتعلم', 2, 0]];
      } else if (asset.includes('chunk-00.js')) {
        workerGlobal.OFFLINE_DICT_CHUNKS[0] = entries;
      }
    }
  });
  vm.runInContext(workerSource, context);

  listeners.message({ data: { type: 'search', requestId: 7, query: 'apfel', limit: 10 } });
  assert.equal(messages[0].type, 'results');
  assert.equal(messages[0].requestId, 7);
  assert.equal(Array.from(messages[0].entries, entry => entry[0]).join(','), 'Apfel,Apfelsaft');

  messages.length = 0;
  listeners.message({ data: { type: 'search', requestId: 8, query: 'يتعلم', limit: 10 } });
  assert.equal(messages[0].entries[0][0], 'lernen');
});

test('A2 lesson 7 keeps the expanded vocabulary complete and searchable', () => {
  const context = vm.createContext({ window: {} });
  const source = readFileSync(join(root, 'app', 'data_book1.js'), 'utf8');
  vm.runInContext(source, context);
  const lesson = context.window.BOOK1.find(chapter => chapter.num === 7);

  assert.ok(lesson, 'A2 lesson 7 must exist');
  assert.ok(lesson.vocab.length >= 100, `Expected expanded vocabulary, found ${lesson.vocab.length} words`);
  for (const [index, word] of lesson.vocab.entries()) {
    assert.equal(typeof word.w, 'string', `Word ${index + 1} is missing its German term`);
    assert.ok(word.w.trim(), `Word ${index + 1} has an empty German term`);
    assert.equal(typeof word.d, 'string', `${word.w} is missing its definition`);
    assert.equal(typeof word.ar, 'string', `${word.w} is missing its Arabic translation`);
  }

  const { normalizeWordForSearch } = loadFunctions(['normalizeWordForSearch']);
  const searchable = lesson.vocab.map(word => normalizeWordForSearch(`${word.w} ${word.d} ${word.ar}`));
  assert.equal(searchable.length, lesson.vocab.length);
  assert.ok(searchable.every(Boolean), 'Every lesson 7 vocabulary entry must produce searchable text');
});

test('Kapitel 9 includes the official Lernwortschatz with matching square photos', () => {
  const context = vm.createContext({ window: {} });
  vm.runInContext(readFileSync(join(root, 'app', 'data_book1.js'), 'utf8'), context);
  vm.runInContext(readFileSync(join(root, 'app', 'data_lernwortschatz9.js'), 'utf8'), context);
  const chapter = context.window.BOOK1.find(item => item.num === 9);
  const additions = chapter.vocab.filter(item => item.img?.includes('/k9-added/'));
  const stats = context.window.K9_LERNWORTSCHATZ_STATS;

  assert.deepEqual(
    { official: stats.official, added: stats.added, skippedAsDuplicate: stats.skippedAsDuplicate, withoutImage: stats.withoutImage },
    { official: 95, added: 88, skippedAsDuplicate: 7, withoutImage: 0 }
  );
  assert.equal(additions.length, 88);
  additions.forEach((item, index) => {
    const expectedImage = `assets/vocab-scenes/k9-added/${String(index + 1).padStart(2, '0')}.webp`;
    assert.ok(item.w && item.ar && item.d && item.ex);
    assert.doesNotMatch(item.d, /offiziellen Lernwortschatz/);
    assert.equal(item.img, expectedImage);
    assert.ok(existsSync(join(root, 'app', expectedImage)), `Missing ${expectedImage}`);
  });
  assert.deepEqual(
    [...new Set(additions.map(item => item.cat))],
    ['Sport machen', 'Sportgeräte', 'Vereine und Fans', 'Vorschläge machen', 'Wetter', 'Andere wichtige Wörter und Wendungen', 'Unterwegs in D-A-CH']
  );
  assert.match(html, /data_lernwortschatz9\.js\?v=lernwortschatz9-3/);
});

test('Kapitel 10 includes its Lernwortschatz with matching square photos', () => {
  const context = vm.createContext({ window: {} });
  vm.runInContext(readFileSync(join(root, 'app', 'data_book1.js'), 'utf8'), context);
  vm.runInContext(readFileSync(join(root, 'app', 'data_book2.js'), 'utf8'), context);
  vm.runInContext(readFileSync(join(root, 'app', 'data_extra.js'), 'utf8'), context);
  vm.runInContext(readFileSync(join(root, 'app', 'data_lernwortschatz10.js'), 'utf8'), context);
  const chapter = context.window.BOOK2.find(item => item.num === 10);
  const additions = chapter.vocab.filter(item => item.img?.includes('/k10-added/'));
  const stats = context.window.K10_LERNWORTSCHATZ_STATS;

  assert.deepEqual(
    { official: stats.official, added: stats.added, skippedAsDuplicate: stats.skippedAsDuplicate, withoutImage: stats.withoutImage, total: stats.total },
    { official: 111, added: 111, skippedAsDuplicate: 0, withoutImage: 0, total: 158 }
  );
  assert.equal(additions.length, 111);
  additions.forEach((item, index) => {
    const expectedImage = `assets/vocab-scenes/k10-added/${String(index + 1).padStart(2, '0')}.webp`;
    assert.ok(item.w && item.ar && item.d && item.ex && item.cat);
    assert.equal(item.img, expectedImage);
    assert.ok(existsSync(join(root, 'app', expectedImage)), `Missing ${expectedImage}`);
  });
  assert.deepEqual(
    [...new Set(additions.map(item => item.cat))],
    ['Wohnformen und Maße', 'Nachbarschaft und Alltag', 'Einrichten und Umziehen', 'Tiere und Kosenamen', 'Tiergeschichten und wichtige Wörter']
  );
  assert.match(html, /data_lernwortschatz10\.js\?v=lernwortschatz10-1/);
});

test('Kapitel 11 includes its Lernwortschatz with matching square photos', () => {
  const context = vm.createContext({ window: {} });
  for (const file of ['data_book1.js', 'data_book2.js', 'data_extra.js', 'data_lernwortschatz11.js']) {
    vm.runInContext(readFileSync(join(root, 'app', file), 'utf8'), context);
  }
  const chapter = context.window.BOOK2.find(item => item.num === 11);
  const additions = chapter.vocab.filter(item => item.img?.includes('/k11-added/'));
  const stats = context.window.K11_LERNWORTSCHATZ_STATS;

  assert.deepEqual(
    { official: stats.official, added: stats.added, skippedAsDuplicate: stats.skippedAsDuplicate, withoutImage: stats.withoutImage, total: stats.total },
    { official: 78, added: 75, skippedAsDuplicate: 3, withoutImage: 0, total: 121 }
  );
  assert.equal(additions.length, 75);
  additions.forEach((item, index) => {
    const expectedImage = `assets/vocab-scenes/k11-added/${String(index + 1).padStart(2, '0')}.webp`;
    assert.ok(item.w && item.ar && item.d && item.ex && item.cat);
    assert.equal(item.img, expectedImage);
    assert.ok(existsSync(join(root, 'app', expectedImage)), `Missing ${expectedImage}`);
  });
  assert.deepEqual(
    [...new Set(additions.map(item => item.cat))],
    ['Lebensphasen', 'Arbeit', 'Freizeit und Ratschläge', 'Ausflüge organisieren', 'Zeitreise', 'Vergangenheit und Verzicht', 'Sprichwörter', 'Andere wichtige Wörter und Wendungen']
  );
  assert.match(html, /data_lernwortschatz11\.js\?v=lernwortschatz11-1/);
});

test('Kapitel 12 includes its Lernwortschatz with matching square photos', () => {
  const context = vm.createContext({ window: {} });
  for (const file of ['data_book1.js', 'data_book2.js', 'data_extra.js', 'data_lernwortschatz12.js']) {
    vm.runInContext(readFileSync(join(root, 'app', file), 'utf8'), context);
  }
  const chapter = context.window.BOOK2.find(item => item.num === 12);
  const additions = chapter.vocab.filter(item => item.img?.includes('/k12-added/'));
  const stats = context.window.K12_LERNWORTSCHATZ_STATS;

  assert.deepEqual(
    { official: stats.official, added: stats.added, skippedAsDuplicate: stats.skippedAsDuplicate, withoutImage: stats.withoutImage, total: stats.total },
    { official: 99, added: 90, skippedAsDuplicate: 9, withoutImage: 0, total: 136 }
  );
  assert.equal(additions.length, 90);
  additions.forEach((item, index) => {
    const expectedImage = `assets/vocab-scenes/k12-added/${String(index + 1).padStart(2, '0')}.webp`;
    assert.ok(item.w && item.ar && item.d && item.ex && item.cat);
    assert.equal(item.img, expectedImage);
    assert.ok(existsSync(join(root, 'app', expectedImage)), `Missing ${expectedImage}`);
  });
  assert.deepEqual(
    [...new Set(additions.map(item => item.cat))],
    ['Gute Unterhaltung', 'Festival und Musik', 'Ein Ticket online kaufen', 'Meldungen', 'Malerei', 'Andere wichtige Wörter und Wendungen']
  );
  assert.match(html, /data_lernwortschatz12\.js\?v=lernwortschatz12-1/);
});

test('every B1.1 card carries its own reviewed photo', () => {
  const context = vm.createContext({ window: {} });
  vm.runInContext(readFileSync(join(root, 'app', 'data_b1_1.js'), 'utf8'), context);
  const cards = context.window.B1_BOOK.flatMap(chapter => chapter.vocab);
  assert.equal(cards.length, 982);
  // photos come only from the reviewed, generated set, and no card is left without one
  const withImg = cards.filter(card => 'img' in card);
  assert.deepEqual(cards.filter(card => !card.img).map(card => card.w).join(' | '), '', 'a B1.1 card has no photo');
  withImg.forEach(card => {
    assert.match(card.img, /^assets\/vocab-scenes\/b1-1\/k\d+\/\d{3}\.webp$/, `Unexpected image path: ${card.w}`);
    assert.ok(existsSync(join(root, 'app', card.img)), `Missing ${card.img}`);
    // a looping story card also ships its first frame for readers who ask for less motion
    if (card.still) {
      assert.equal(card.still, card.img.replace(/\.webp$/, '-still.webp'), `Unexpected still frame: ${card.w}`);
      assert.ok(existsSync(join(root, 'app', card.still)), `Missing ${card.still}`);
    }
  });
  assert.equal(new Set(withImg.map(card => card.img)).size, withImg.length, 'an image is shared by two cards');
  // each unit's photos are numbered by card position
  for (const chapter of context.window.B1_BOOK) {
    const num = chapter.num, unit = chapter.vocab;
    unit.forEach((card, index) => {
      if (card.img) assert.equal(card.img, `assets/vocab-scenes/b1-1/k${num}/${String(index + 1).padStart(3, '0')}.webp`, `Photo out of order: ${card.w}`);
    });
  }
  cards.forEach(card => {
    assert.ok(card.d && card.ex && card.ar, `Incomplete card: ${card.w}`);
    assert.doesNotMatch(card.d, /bezeichnet eine Person, einen Gegenstand oder einen Begriff aus dem Kapitel|Mit „.*“ beschreibt man eine Handlung|häufig verwendeter Ausdruck im Deutschen/);
    assert.doesNotMatch(card.ex, /^(Wir sprechen heute über|Im Alltag kann man oft|Dieser Ausdruck kommt im Alltag häufig vor)/);
  });
  assert.equal(cards.find(card => card.w === 'der Typ').ar, 'النوع / الشخص');
  assert.equal(cards.find(card => card.w === 'aufladen').ar, 'يشحن');
  assert.match(cards.find(card => card.w === 'operieren').d, /medizinischen Eingriff/);
  assert.equal(cards.find(card => card.w === 'der Mars').ar, 'كوكب المريخ');
  assert.equal(cards.find(card => card.w === 'die Karotte').ar, 'جزرة');
  assert.equal(cards.find(card => card.w === 'die Vollpension').ar, 'إقامة كاملة تشمل الإفطار والغداء والعشاء');
  assert.match(html, /data_b1_1\.js\?v=b1-1-vocab-20/);
  cards.forEach(card => {
    // definitions and examples must read as B1 sentences, not dictionary dumps
    assert.match(card.d, /^[A-ZÄÖÜ„]/, `Definition not a sentence: ${card.w}`);
    assert.match(card.d, /[.!?]$/, `Definition has no end: ${card.w}`);
    assert.match(card.ex, /^[A-ZÄÖÜ„»]/, `Example not a sentence: ${card.w}`);
    assert.match(card.ex, /[.!?]$/, `Example has no end: ${card.w}`);
    assert.ok(card.ex.trim().split(/\s+/).length <= 20, `Example too long for B1: ${card.w}`);
    assert.doesNotMatch(card.d, /Sinnverwandte Wörter|beziehungsweise|jmd\.|etw\./, `Dictionary artefact: ${card.w}`);
    assert.doesNotMatch(card.ex, /jmd\.|etw\./, `Dictionary artefact in example: ${card.w}`);
    // Arabic must be present and must actually be Arabic script
    assert.match(card.ar, /[؀-ۿ]/, `Arabic missing: ${card.w}`);
  });
  // no word may appear twice inside the same chapter
  context.window.B1_BOOK.forEach(chapter => {
    const names = chapter.vocab.map(v => v.w.replace(/^(der|die|das)\s+/, '').toLowerCase());
    assert.equal(new Set(names).size, names.length, `Duplicate word in Kapitel ${chapter.num}`);
    assert.equal(chapter.badges[2], `${chapter.vocab.length} Wörter`, `Badge count wrong in Kapitel ${chapter.num}`);
  });
  // no chapter may still promise a photo that no longer exists
  context.window.B1_BOOK.forEach(chapter => {
    assert.doesNotMatch(chapter.vocabSummary.note, /الصورة|صورة|Foto|Bild/);
  });
});

test('B1.1 chapters contain complete lesson sections', () => {
  const context = vm.createContext({ window: {} });
  for (const file of ['data_b1_1.js', 'data_b1_1_lessons.js']) {
    vm.runInContext(readFileSync(join(root, 'app', file), 'utf8'), context);
  }

  assert.equal(context.window.B1_BOOK.length, 6);
  assert.equal(context.window.B1_BOOK.reduce((sum, chapter) => sum + chapter.readings.length, 0), 16);
  for (const chapter of context.window.B1_BOOK) {
    assert.ok(chapter.readings.length >= 2, `B1.1 K${chapter.num} needs readings`);
    assert.ok(chapter.grammar.length >= 2, `B1.1 K${chapter.num} needs grammar`);
    assert.ok(chapter.redemittel.length >= 2, `B1.1 K${chapter.num} needs phrases`);
    assert.ok(chapter.speaking.questions.length >= 4, `B1.1 K${chapter.num} needs speaking prompts`);
    assert.ok(chapter.quiz.length >= 3, `B1.1 K${chapter.num} needs a quiz`);
    chapter.readings.forEach(reading => {
      assert.ok(reading.text.length > 500);
      assert.ok(reading.ar.length > 300, `${reading.title} needs a complete Arabic translation`);
      assert.doesNotMatch(reading.ar, /^ملخص ومساعدة:/, `${reading.title} still contains the chapter summary`);
      assert.equal((reading.ar.match(/<br><br>/g) || []).length, (reading.text.match(/<br><br>/g) || []).length,
        `${reading.title} must preserve paragraph breaks in Arabic`);
      assert.ok(reading.glossary.length >= 6);
      assert.equal(reading.questions.length, 4);
    });
  }
  assert.match(html, /data_b1_1_lessons\.js\?v=b1-1-lessons-2/);
  assert.match(html, /serviceWorker\.register\('sw\.js'/);
  assert.match(html, /const B1_TABS = \[[\s\S]*?\['lesen','Lesen'\][\s\S]*?\['redemittel','Redemittel'\][\s\S]*?\['grammatik','Grammatik'\][\s\S]*?\['sprechen','Sprechen'\][\s\S]*?\['quiz','Lerncheck'\]/);
  assert.match(html, /go\('\$\{chapter\.route\}\/ueberblick'\)/);
});

test('the old B1.1 images and their code paths stay removed', () => {
  assert.ok(!existsSync(join(root, 'app', 'assets', 'vocab-scenes', 'b1.1')), 'b1.1 asset folder still exists');
  assert.doesNotMatch(html, /vocab-scenes\/b1\.1/);
  assert.doesNotMatch(html, /b1AtlasVisual|B1_ATLAS_RULES|fc-atlas-tile/);
  assert.doesNotMatch(html, /Bild wird neu erstellt/);
  const worker = readFileSync(join(root, 'app', 'sw.js'), 'utf8');
  // the worker must not cache any b1.1 image, but it must still purge the
  // copies devices downloaded before the images were removed
  assert.doesNotMatch(worker.match(/const CORE = \[[\s\S]*?\];/)[0], /b1\.1/);
  assert.match(worker, /vocab-scenes\/b1\.1\/[\s\S]{0,120}?media\.delete/);
  const shell = readFileSync(join(root, 'app', 'ui-next.js'), 'utf8');
  assert.doesNotMatch(shell, /Karteikarten mit Bildern/);
  // B1.1 must not fall back to the A2 emoji stickers either: those keywords
  // mismatch B1 words (Insekt -> football), which is what images were removed for.
  assert.match(html, /startsWith\('b1\.1\/'\)\)\{[\s\S]{0,1600}?fc-visual--plain/);
  assert.doesNotMatch(html, /startsWith\('b1\.1\/'\)\)\{[\s\S]{0,1600}?fallbackVocabSticker/);
});

test('fixed vocabulary speech covers every word in chapters 7 through 12', () => {
  const context = vm.createContext({ window: {} });
  for (const file of [
    'data_book0.js', 'data_book0_expansion.js', 'data_book1.js', 'data_book2.js',
    'data_extra.js', 'data_lernwortschatz8.js', 'data_lernwortschatz9.js',
    'data_lernwortschatz10.js', 'data_lernwortschatz11.js', 'data_lernwortschatz12.js', 'data_enrichment.js',
    'data_speech_clean.js'
  ]) {
    vm.runInContext(readFileSync(join(root, 'app', file), 'utf8'), context);
  }
  const speech = context.window.A2_FIXED_SPEECH;
  const aliasIndex = new Map(speech.aliases.texts.map((text, index) => [text, index]));
  const spokenWord = value => String(value || '')
    .replace(/\s*,.*$/, '')
    .replace(/\s+\((?:Sg\.|Pl\.|\+\s*[ADG]\.?)\)\s*$/i, '')
    .replace(/\s+/g, ' ')
    .trim();

  assert.equal(speech.aliases.voices.map(voice => voice.id).join(','), 'mia,tarek');
  for (const voice of speech.aliases.voices) {
    assert.equal(voice.timings.length, speech.aliases.texts.length);
    assert.match(voice.audio, /-words\.mp3\?v=fixed-voices-6$/);
    assert.ok(existsSync(join(root, 'app', voice.audio.split('?')[0])), `Missing ${voice.audio}`);
  }
  for (const chapterNumber of [7, 8, 9, 10, 11, 12]) {
    const book = chapterNumber >= 10 ? context.window.BOOK2 : context.window.BOOK1;
    const chapter = book.find(item => item.num === chapterNumber);
    for (const word of chapter.vocab) {
      const spoken = spokenWord(word.w);
      const index = aliasIndex.get(spoken);
      assert.notEqual(index, undefined, `Missing fixed speech for K${chapterNumber}: ${spoken}`);
      assert.ok(speech.aliases.voices.every(voice => voice.timings[index]?.length === 2));
    }
  }
});

test('chapters 7 through 12 group every vocabulary card by a real topic', () => {
  const context = vm.createContext({ window: {} });
  for (const file of [
    'data_book1.js', 'data_book2.js', 'data_extra.js',
    'data_lernwortschatz8.js', 'data_lernwortschatz9.js',
    'data_lernwortschatz10.js', 'data_lernwortschatz11.js', 'data_lernwortschatz12.js',
    'data_enrichment.js', 'data_vocab_topics7_12.js'
  ]) {
    vm.runInContext(readFileSync(join(root, 'app', file), 'utf8'), context);
  }

  for (const chapterNumber of [7, 8, 9, 10, 11, 12]) {
    const book = chapterNumber >= 10 ? context.window.BOOK2 : context.window.BOOK1;
    const chapter = book.find(item => item.num === chapterNumber);
    assert.ok(chapter.vocab.every(item => item.cat), `K${chapterNumber} contains an ungrouped word`);
    assert.ok(chapter.vocab.every(item => !/^Kapitel\s+\d+$/i.test(item.cat)), `K${chapterNumber} uses a chapter number as a topic`);
    assert.ok(new Set(chapter.vocab.map(item => item.cat)).size >= 4, `K${chapterNumber} needs meaningful topic groups`);
  }
  assert.match(html, /data_vocab_topics7_12\.js\?v=vocab-topics-1/);
});

test('fixed vocabulary audio uses silent separators and prefers clean word clips', () => {
  const generator = readFileSync(join(root, 'scripts', 'generate_fixed_speech.py'), 'utf8');
  const aliasLookup = html.indexOf("const aliasIndex=library.data.aliases?.texts?.indexOf(value)??-1;");
  const mainLookup = html.indexOf('const textIndex=library.index.get(value);');
  assert.doesNotMatch(generator, /Audiomarker/);
  assert.match(generator, /SEPARATOR = " \.\.\. "/);
  assert.ok(aliasLookup >= 0 && mainLookup > aliasLookup, 'Short clean vocabulary clips must be checked before the legacy library');
});

test('chapter 9 reading lessons follow the coursebook topics', () => {
  const context = vm.createContext({ window: {} });
  for (const file of ['data_book1.js', 'data_book2.js', 'data_extra.js']) {
    vm.runInContext(readFileSync(join(root, 'app', file), 'utf8'), context);
  }
  const readings = context.window.BOOK1.find(chapter => chapter.num === 9).readings;

  assert.equal(readings.length, 2);
  assert.deepEqual(
    Array.from(readings, reading => reading.title),
    ['Ein Fußballstar: Stimmen nach dem Spiel', 'Aktiv unterwegs in D-A-CH']
  );
  assert.match(readings[0].text, /Kommentare|Mike07|Bällchen|deshalb|trotzdem/);
  assert.match(readings[1].text, /Sächsischen Schweiz|Hoch-Ybrig|Eisriesenwelt|Grüne Band/);
  readings.forEach(reading => {
    assert.ok(reading.ar && reading.glossary.length >= 6 && reading.questions.length === 4);
  });
  assert.doesNotMatch(readings.map(reading => reading.title).join(' '), /Kletterwettbewerb|Verein sucht neue Mitglieder/);
});

test('chapter 10 reading lessons follow the coursebook topics', () => {
  const context = vm.createContext({ window: {} });
  for (const file of ['data_book1.js', 'data_book2.js', 'data_extra.js']) {
    vm.runInContext(readFileSync(join(root, 'app', file), 'utf8'), context);
  }
  const readings = context.window.BOOK2.find(chapter => chapter.num === 10).readings;

  assert.equal(readings.length, 2);
  assert.deepEqual(
    Array.from(readings, reading => reading.title),
    ['Ungewöhnlich wohnen', 'Pero findet nach Hause']
  );
  assert.match(readings[0].text, /Bauernhof|Hallig|Hausboot|Wagenburg/);
  assert.match(readings[1].text, /Pero|320 Kilometer|zwei Wochen/);
  readings.forEach(reading => {
    assert.ok(reading.ar && reading.glossary.length >= 6 && reading.questions.length === 4);
  });
});

test('chapter 11 reading lessons follow the coursebook topics', () => {
  const context = vm.createContext({ window: {} });
  for (const file of ['data_book1.js', 'data_book2.js', 'data_extra.js', 'data_lernwortschatz11.js']) {
    vm.runInContext(readFileSync(join(root, 'app', file), 'utf8'), context);
  }
  const readings = context.window.BOOK2.find(chapter => chapter.num === 11).readings;

  assert.equal(readings.length, 2);
  assert.deepEqual(
    Array.from(readings, reading => reading.title),
    ['Leben wie vor hundert Jahren', 'Worauf können Sie verzichten?']
  );
  assert.match(readings[0].text, /Familie Ketterer|Bauernhof|Schwarzwald|Kutsche|Holz/);
  assert.match(readings[1].text, /Massimo|Ingrid|Lea|Fred|verzichten/);
  readings.forEach(reading => {
    assert.ok(reading.ar && reading.glossary.length >= 6 && reading.questions.length === 4);
  });
});

test('chapter 12 reading lessons follow the coursebook topics', () => {
  const context = vm.createContext({ window: {} });
  for (const file of ['data_book1.js', 'data_book2.js', 'data_extra.js', 'data_lernwortschatz12.js']) {
    vm.runInContext(readFileSync(join(root, 'app', file), 'utf8'), context);
  }
  const readings = context.window.BOOK2.find(chapter => chapter.num === 12).readings;

  assert.equal(readings.length, 2);
  assert.deepEqual(
    Array.from(readings, reading => reading.title),
    ['Drei besondere Bauwerke', 'Kunst mal anders']
  );
  assert.match(readings[0].text, /Amphitheater Trier|Berliner Fernsehturm|Karl-Marx-Hof|1\.400 Wohnungen/);
  assert.match(readings[1].text, /Kunstmuseum|Meister der Natur|Automuseum|alte Fahrzeuge/);
  readings.forEach(reading => {
    assert.ok(reading.ar && reading.glossary.length >= 6 && reading.questions.length === 4);
  });
});

test('lesson 7 has every configured real photo and keeps key cards mapped correctly', () => {
  const context = vm.createContext({ window: {} });
  for (const file of ['data_book1.js', 'data_book2.js', 'data_extra.js']) {
    vm.runInContext(readFileSync(join(root, 'app', file), 'utf8'), context);
  }
  const lesson = context.window.BOOK1.find(chapter => chapter.num === 7);
  const expectedScenes = [...Array.from({ length: 136 }, (_, index) => index + 1), 140, 144, 145]
    .map(scene => `${String(scene).padStart(2, '0')}.webp`);
  const actualScenes = readdirSync(join(root, 'app', 'assets', 'vocab-scenes', 'k7'))
    .filter(file => /^\d+\.webp$/.test(file))
    .sort((left, right) => Number.parseInt(left, 10) - Number.parseInt(right, 10));
  assert.deepEqual(actualScenes, expectedScenes, 'Lesson 7 must contain all 139 correctly named real photos');
  const expected = new Map([
    [38, 'die Fahrt, -en'], [44, 'das Chaos (Sg.)'], [53, 'das Fahrzeug, -e'],
    [55, 'der Pkw, -s'], [65, 'tanken'], [68, 'das Parkhaus, ⸚er'],
    [73, 'die Zugfahrt, -en'], [87, 'dorthin'], [88, 'die Richtung, -en'],
    [93, 'halten'], [94, 'der Kundenservice, -s'], [104, 'gegen (+ A.)'],
    [115, 'das Gewitter, -'], [116, 'die Kaution, -en'], [119, 'schon mal'],
    [121, 'der Tarif, -e'], [123, 'sogar'], [140, 'der Bordcomputer, -'],
    [144, 'sich verfahren'], [145, 'die Sperrung, -en']
  ]);

  for (const [scene, word] of expected) {
    assert.equal(lesson.vocab[scene - 1]?.w, word, `Scene ${scene} must remain linked to ${word}`);
    assert.ok(existsSync(join(root, 'app', 'assets', 'vocab-scenes', 'k7', `${scene}.webp`)), `Missing scene ${scene}`);
  }
});

test('A2 section covers preserve their native 3:2 aspect ratio', () => {
  assert.match(html, /\.chapter-tab-card\.a2-chapter-tab-card \.section-card-img\{aspect-ratio:3\/2;object-fit:contain;object-position:center\}/);
  assert.match(html, /isA1\?'a1-chapter-tab-card':'a2-chapter-tab-card'/);
  assert.doesNotMatch(html, /<span class="icon" aria-hidden="true"><\/span>/, 'Chapter cards must not render empty icon placeholders');
});

test('in-app back navigation uses real session history without adding a duplicate route', () => {
  assert.match(html, /history\.pushState\(/);
  assert.match(html, /history\.back\(\)/);
  assert.match(html, /addEventListener\('popstate'/);
  assert.doesNotMatch(html, /routeBackStack/);
});

test('every A2 chapter uses seven distinct section-cover assets', () => {
  const sections = ['ueberblick', 'wortschatz', 'lesen', 'redemittel', 'grammatik', 'sprechen', 'quiz'];
  for (let chapter = 1; chapter <= 12; chapter += 1) {
    const sources = chapter <= 6 ? {
      ueberblick: `assets/section-covers/k${chapter}/1.webp`,
      wortschatz: `assets/section-covers/k${chapter}/2.webp`,
      lesen: `assets/section-covers/k${chapter}/3.webp`,
      redemittel: `assets/section-covers/k${chapter}/4.webp`,
      grammatik: `assets/section-covers/k${chapter}/5.webp`,
      sprechen: `assets/section-covers/k${chapter}/6.webp`,
      quiz: `assets/section-covers/k${chapter}/7.webp`
    } : {
      ueberblick: `assets/chapters/chapter-${chapter}.webp`,
      wortschatz: `assets/section-covers/k${chapter}/2.webp`,
      lesen: `assets/section-covers/k${chapter}/3.webp`,
      redemittel: `assets/section-covers/k${chapter}/4.webp`,
      grammatik: `assets/section-covers/k${chapter}/5.webp`,
      sprechen: `assets/section-covers/k${chapter}/1.webp`,
      quiz: `assets/section-covers/k${chapter}/6.webp`
    };
    assert.equal(new Set(Object.values(sources)).size, sections.length, `Chapter ${chapter} repeats a section cover`);
    for (const section of sections) {
      assert.ok(existsSync(join(root, 'app', sources[section])), `Missing chapter ${chapter} ${section} cover`);
    }
  }
});

test('next-generation shell and design system are wired into the offline app', () => {
  const ui = readFileSync(join(root, 'app', 'ui-next.js'), 'utf8');
  const css = readFileSync(join(root, 'app', 'styles', 'ui-next.css'), 'utf8');
  const worker = readFileSync(join(root, 'app', 'sw.js'), 'utf8');
  assert.match(html, /styles\/ui-next\.css/);
  assert.match(html, /src="ui-next\.js/);
  assert.match(ui, /renderDashboard/);
  assert.match(ui, /renderReviewCenter/);
  assert.match(ui, /lessonProgress/);
  assert.match(css, /\.app-bottom-nav/);
  assert.match(css, /\.flashcard-face\[aria-hidden="true"\]\{visibility:hidden/);
  assert.match(html, /legacyMarkerPadding=trimmed\|\|\(library==='a2'&&kind==='aliases'\)\?0:\.085/);
  assert.match(css, /@media\(min-width:900px\)/);
  assert.match(worker, /ui-next\.js/);
  assert.match(worker, /styles\/ui-next\.css/);
  assert.match(worker, /shell\.match\(req, \{ ignoreSearch: true \}\)/, 'Versioned shell assets must resolve from cache while offline');
  assert.match(worker, /dictionary\.match\(req, \{ ignoreSearch \}\)/, 'Dictionary assets must resolve from their durable cache');
  assert.match(worker, /media\.match\(req, \{ ignoreSearch \}\)/, 'Downloaded lesson media must resolve from its durable cache');
  assert.match(worker, /data_lernwortschatz8\.js/);
  assert.match(worker, /data_lernwortschatz9\.js/);
  assert.match(worker, /data_lernwortschatz10\.js/);
  assert.match(worker, /data_lernwortschatz11\.js/);
  assert.match(worker, /data_lernwortschatz12\.js/);
  assert.match(worker, /data_vocab_topics7_12\.js/);
  assert.match(worker, /assets\/vocab-scenes\/k7\/145\.webp/);
  assert.match(worker, /CACHE_VERSION = 'v\d+'/);
  assert.match(worker, /vocab-scenes\\\/k7\\\/\\d\+\\\.webp/);
});

test('offline lesson download includes the complete chapter and reports real progress', () => {
  const worker = readFileSync(join(root, 'app', 'sw.js'), 'utf8');
  assert.match(html, /function collectCurrentLessonOfflineUrls\(/);
  assert.match(html, /collectOfflineMedia\(chapter,urls\)/);
  assert.match(html, /TABS\.forEach\(\(\[id\]\)=>collectOfflineMedia\(chapterTabImage\(chapter,id\),urls\)\)/);
  assert.match(html, /assets\/vocab-scenes\/k\$\{chapter\.num\}/);
  assert.match(html, /lesson-cache-progress/);
  assert.match(worker, /type: 'lesson-cache-progress'/);
  assert.match(worker, /ok: failed === 0/);
  assert.match(worker, /await cache\.put\(url, response\.clone\(\)\)/);
});

test('learning interactions expose keyboard and live-region semantics', () => {
  assert.match(html, /class="flashcard[^\n]+role="button" tabindex="0"/);
  assert.match(html, /role="tablist" aria-label="Kapitelbereiche"/);
  assert.match(html, /class="quiz-fb"[^>]+role="status" aria-live="polite"/);
  assert.match(html, /class="podcast-line"[^\n]+role="button" tabindex="0"/);
  assert.match(html, /class="podcast-ar" lang="ar" dir="rtl"/);
});

test('A1 and B1.1 cards without a picture are one fixed card that does not flip', () => {
  const css = readFileSync(join(root, 'app', 'styles', 'ui-next.css'), 'utf8');
  assert.match(html, /function isPictureFreeCard\(v\)\{\s*if\(v\.img\) return false;/);
  assert.match(html, /route\.startsWith\('a1\/'\)\|\|route\.startsWith\('b1\.1\/'\)/);
  // drawFC renders the fixed card (no onclick/role=button) and flipFC ignores it
  assert.match(html, /isPictureFreeCard\(v\) \? `\s*<div class="flashcard flashcard--static" id="fcCard">/);
  assert.match(html, /function flipFC\(\)\{\s*if\(!fcState\|\|isPictureFreeCard\(fcState\.cards\[fcState\.i\]\)\)return;/);
  assert.match(css, /\.flashcard--static \.flashcard-face\{position:relative/);
  // the picture cards keep their flip markup
  assert.match(html, /class="flashcard \$\{fcState\.flipped\?'is-flipped':''\}" id="fcCard" role="button" tabindex="0"/);
});

test('mistakes from quizzes, practice, and exams feed the review queue', () => {
  const ui = readFileSync(join(root, 'app', 'ui-next.js'), 'utf8');
  assert.match(ui, /function addMistake\(/);
  assert.ok((html.match(/NextUI\?\.addMistake/g)||[]).length >= 4);
  assert.match(ui, /source:'mistake'/);
});

test('offline dictionary worker uses the exact pre-cached asset keys', () => {
  const dictionaryWorker = readFileSync(join(root, 'app', 'dictionary-worker.js'), 'utf8');
  const serviceWorker = readFileSync(join(root, 'app', 'sw.js'), 'utf8');
  const manifestSource = readFileSync(join(root, 'app', 'dictionary-data', 'manifest.js'), 'utf8');
  const manifestContext = vm.createContext({ self: {} });
  vm.runInContext(manifestSource, manifestContext);
  const manifest = manifestContext.self.OFFLINE_DICTIONARY_MANIFEST;
  assert.match(html, /new Worker\('dictionary-worker\.js'\)/);
  assert.match(dictionaryWorker, /importScripts\('dictionary-data\/manifest\.js'\)/);
  assert.match(dictionaryWorker, /dictionary-data\/index-/);
  assert.match(dictionaryWorker, /dictionary-data\/chunk-/);
  assert.equal(manifest.entries, 138755);
  assert.ok(manifest.assets.length > 60);
  for (const asset of manifest.assets) assert.ok(existsSync(join(root, 'app', asset)), `Missing ${asset}`);
  assert.match(functionSource('renderWordSearch'), /searchOfflineDictionary\(/);
  assert.match(html, /downloadOfflineDictionary/);
  assert.match(serviceWorker, /DICTIONARY_CACHE/);
  assert.match(serviceWorker, /cache-dictionary/);
  assert.match(serviceWorker, /dictionary-cache-status/);
  assert.match(html, /register\('sw\.js',\{updateViaCache:'none'\}\)/);
  assert.match(html, /addEventListener\('controllerchange'/);
  assert.match(html, /data.type==='sw-activated'/);
  assert.match(html, /location\.reload\(\)/);
});

test('B1.1 sub-sections navigate back to their level hub', () => {
  const { fallbackBackTarget } = loadFunctions(['fallbackBackTarget']);
  assert.equal(fallbackBackTarget('b1.1/dict'), 'b1.1');
  assert.equal(fallbackBackTarget('b1.1/games/memory'), 'b1.1/games');
  assert.equal(fallbackBackTarget('b1.1/exam/lesen'), 'b1.1/exam');
  assert.equal(fallbackBackTarget('b1.1/exam'), 'b1.1');
});

test('B1 exam training is complete and every answer index is valid', () => {
  const context = vm.createContext({ window: {} });
  vm.runInContext(readFileSync(join(root, 'app', 'data_exam_b1.js'), 'utf8'), context);
  const exam = context.window.B1_EXAM;
  assert.deepEqual(Object.keys(exam.modules), ['lesen', 'hoeren', 'schreiben', 'sprechen']);
  for (const id of ['lesen', 'hoeren']) {
    const questions = exam.modules[id].parts.flatMap(part => part.questions);
    assert.equal(questions.length, 20, `${id} should have 20 questions`);
    questions.forEach(question => {
      assert.ok(Number.isInteger(question.a) && question.a >= 0 && question.a < question.o.length, question.q);
    });
  }
  exam.modules.hoeren.parts.forEach(part => {
    assert.ok(part.id && part.script.length > 200 && part.plays >= 1, part.title);
  });
  assert.equal(exam.modules.schreiben.tasks.length, 3);
  assert.ok(exam.modules.sprechen.checklist.length >= 5);
});

test('B1 verb reference has complete forms for every verb', () => {
  const context = vm.createContext({ window: {} });
  vm.runInContext(readFileSync(join(root, 'app', 'data_b1_verbs.js'), 'utf8'), context);
  const verbs = context.window.B1_VERBS;
  assert.ok(verbs.length >= 60);
  const seen = new Set();
  verbs.forEach(verb => {
    ['inf', 'praes', 'praet', 'part', 'rektion', 'ar', 'example'].forEach(key => assert.ok(verb[key], `${verb.inf} misses ${key}`));
    assert.ok(['haben', 'sein'].includes(verb.aux), verb.inf);
    assert.ok(verb.chapter >= 1 && verb.chapter <= 6, verb.inf);
    assert.ok(!seen.has(verb.inf), `duplicate ${verb.inf}`);
    seen.add(verb.inf);
  });
});

test('B1.1 exposes dictionary, verbs, phrases, training and exam routes', () => {
  ['renderB1Dictionary', 'renderB1Verbs', 'renderB1Expressions'].forEach(name => functionSource(name));
  for (const route of ['b1.1/dict', 'b1.1/verbs', 'b1.1/phrases', 'b1.1/games', 'b1.1/exam']) {
    assert.ok(html.includes(`h==='${route}'`), `router misses ${route}`);
  }
  const ui = readFileSync(join(root, 'app', 'ui-next.js'), 'utf8');
  assert.match(ui, /\['exam','Prüfung','b1\.1\/exam'\]/);
  const sw = readFileSync(join(root, 'app', 'sw.js'), 'utf8');
  assert.match(sw, /'data_exam_b1\.js'/);
  assert.match(sw, /'data_b1_verbs\.js'/);
});

test('games and exams keep separate scores per level', () => {
  const games = loadFunctions(['gameScoresKey']);
  assert.equal(vm.runInContext("let gameLevel='b1.1';gameScoresKey()", games), 'b1GameBestScores');
  const exams = loadFunctions(['examScoresKey']);
  assert.equal(vm.runInContext("let examLevel='a2';examScoresKey()", exams), 'a2ExamScores');
});

test('progress backups only accept files exported by this app', () => {
  const ui = readFileSync(join(root, 'app', 'ui-next.js'), 'utf8').replace(/\r\n/g, '\n');
  const start = ui.indexOf('  function parseBackup(');
  const end = ui.indexOf('\n  }\n', start) + 4;
  const context = vm.createContext({});
  vm.runInContext(`${ui.slice(start, end)}\nthis.parseBackup=parseBackup;`, context);
  const entries = context.parseBackup(JSON.stringify({ app: 'deutsch-learning', version: 1, data: { favoriteWordsV1: '[]', bad: 5 } }));
  assert.deepEqual(JSON.parse(JSON.stringify(entries)), [['favoriteWordsV1', '[]']]);
  assert.throws(() => context.parseBackup(JSON.stringify({ app: 'other', data: {} })));
  assert.throws(() => context.parseBackup('not json'));
});

test('service-worker cache version changes whenever a precached file changes', () => {
  const { shellVersion } = require('../scripts/stamp_service_worker.js');
  const appDir = join(root, 'app');
  const source = readFileSync(join(appDir, 'sw.js'), 'utf8');
  const version = shellVersion(appDir, source);
  assert.match(version, /^v\d+-[0-9a-f]{10}$/);
  assert.equal(shellVersion(appDir, source), version, 'hash must be deterministic');
  const restamped = source.replace(/const CACHE_VERSION = '[^']*';/, `const CACHE_VERSION = '${version}';`);
  assert.equal(shellVersion(appDir, restamped), version, 'stamping must be idempotent');
  const changedShell = source.replace("'manifest.json',", "'manifest.json','index.html',");
  assert.notEqual(shellVersion(appDir, changedShell), version);
});

test('large podcast and speech bundles are loaded on demand, not at startup', () => {
  for (const file of ['data_podcast.js', 'data_speech_clean.js', 'data_speech_a1.js']) {
    assert.doesNotMatch(html, new RegExp(`<script[^>]+${file.replace('.', '\\.')}`), `${file} must not block startup`);
    assert.ok(html.includes(`'${file}?v=`), `${file} must be listed in LAZY_SCRIPTS`);
  }
  functionSource('ensurePodcasts');
  functionSource('ensureSpeechLibraries');
  assert.match(functionSource('renderPodcastEpisode'), /renderLazyDataLoading/);
  const sw = readFileSync(join(root, 'app', 'sw.js'), 'utf8');
  assert.match(sw, /'data_podcast\.js'/, 'lazy bundles stay precached for offline use');
});

test('downloading a lesson also saves its level voice sprite for offline speech', () => {
  // The sprites are referenced by no lesson, so "Download" used to leave them
  // out and recorded speech was silent offline.
  const context = loadFunctions(['speechOfflineUrls']);
  context.speechVoiceURI = 'tarek';
  context.location = { hash: '#a1/k3' };
  const voices = id => [{ id: 'mia', audio: `${id}-mia.mp3` }, { id: 'tarek', audio: `${id}-tarek.mp3` }];
  context.A1_FIXED_SPEECH = { voices: voices('a1') };
  context.B1_FIXED_SPEECH = { voices: [] };
  context.FIXED_SPEECH = { voices: voices('a2'), aliases: { voices: voices('words') } };
  assert.deepEqual([...context.speechOfflineUrls({ route: 'a1/k3' })], ['a1-tarek.mp3', 'words-tarek.mp3']);
  assert.deepEqual([...context.speechOfflineUrls({ num: 7 })], ['a2-tarek.mp3', 'words-tarek.mp3']);
  assert.deepEqual([...context.speechOfflineUrls({ route: 'b1.1/k2' })], ['words-tarek.mp3']);
  assert.match(functionSource('collectCurrentLessonOfflineUrls'), /speechOfflineUrls\(chapter\)/);
  const page = readFileSync(join(root, 'app', 'js', 'offline-download.js'), 'utf8');
  assert.match(page, /await ensureSpeechLibraries\(\)/);
});

test('recorded speech plays from the current level library first', () => {
  const context = loadFunctions(['currentSpeechLevel', 'findFixedSpeechClip']);
  const library = (audio, texts) => ({ voices: [{ id: 'mia', audio, timings: texts.map(() => [1, 2]) }], texts });
  Object.assign(context, {
    FIXED_SPEECH: library('a2.mp3', ['Guten Tag']),
    A1_FIXED_SPEECH: library('a1.mp3', ['Guten Tag']),
    B1_FIXED_SPEECH: { voices: [], texts: [] },
    FIXED_SPEECH_INDEX: new Map([['Guten Tag', 0]]),
    A1_FIXED_SPEECH_INDEX: new Map([['Guten Tag', 0]]),
    B1_FIXED_SPEECH_INDEX: new Map()
  });
  context.location = { hash: '#a1/k1' };
  assert.equal(context.findFixedSpeechClip('Guten Tag', 'mia').audioSource, 'a1.mp3');
  context.location = { hash: '#k7' };
  assert.equal(context.findFixedSpeechClip('Guten Tag', 'mia').audioSource, 'a2.mp3');
});

test('the service worker answers audio range requests from saved copies', async () => {
  // A sprite clip is a seek into the middle of the file; Safari plays nothing
  // when a saved copy comes back as a plain 200.
  const sw = readFileSync(join(root, 'app', 'sw.js'), 'utf8');
  const start = sw.indexOf('async function partial(');
  const source = sw.slice(start, sw.indexOf('\n}\n', start) + 2);
  const context = vm.createContext({ Response, Blob, Number, Math, String });
  vm.runInContext(`${source}\nthis.partial=partial;`, context);
  const saved = new Response(new Blob([new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])]), { headers: { 'Content-Type': 'audio/mpeg' } });
  const request = range => ({ headers: new Headers(range ? { range } : {}) });
  const middle = await context.partial(request('bytes=2-5'), saved.clone());
  assert.equal(middle.status, 206);
  assert.equal(middle.headers.get('Content-Range'), 'bytes 2-5/10');
  assert.deepEqual([...new Uint8Array(await middle.arrayBuffer())], [2, 3, 4, 5]);
  const rest = await context.partial(request('bytes=7-'), saved.clone());
  assert.deepEqual([...new Uint8Array(await rest.arrayBuffer())], [7, 8, 9]);
  assert.equal((await context.partial(request('bytes=20-'), saved.clone())).status, 416);
  assert.equal((await context.partial(request(''), saved.clone())).status, 200);
  // a sprite saved for another version never answers for this one
  assert.match(sw, /const ignoreSearch = !url\.pathname\.includes\('\/assets\/speech\/'\)/);
  assert.match(sw, /cache\.match\(url, \{ ignoreSearch: !speech \}\)/);
});

test('B1.1 recorded speech plugs into the same lazy speech lookup', () => {
  assert.ok(html.includes("speechB1:'data_speech_b1.js?v="));
  assert.match(functionSource('findFixedSpeechClip'), /id:'b1', data:B1_FIXED_SPEECH/);
  const context = vm.createContext({ window: {} });
  vm.runInContext(readFileSync(join(root, 'app', 'data_speech_b1.js'), 'utf8'), context);
  const speech = context.window.B1_FIXED_SPEECH;
  assert.ok(Array.isArray(speech.texts) && Array.isArray(speech.voices));
  for (const voice of speech.voices) {
    assert.equal(voice.timings.length, speech.texts.length);
    assert.ok(existsSync(join(root, 'app', voice.audio.split('?')[0])), `Missing ${voice.audio}`);
  }
  assert.ok(existsSync(join(root, 'scripts', 'generate_b1_fixed_speech.py')));
  assert.ok(existsSync(join(root, 'scripts', 'extract_b1_speech_library.js')));
});

test('recorded speech ships exactly two voices and no retired recordings', () => {
  for (const [file, name] of [['data_speech_clean.js', 'A2_FIXED_SPEECH'], ['data_speech_a1.js', 'A1_FIXED_SPEECH']]) {
    const context = vm.createContext({ window: {} });
    vm.runInContext(readFileSync(join(root, 'app', file), 'utf8'), context);
    assert.equal(context.window[name].voices.map(voice => voice.id).join(','), 'mia,tarek', file);
  }
  const speechFiles = readdirSync(join(root, 'app', 'assets', 'speech'));
  assert.deepEqual(speechFiles.filter(file => /jonas|samir/.test(file)), []);
});

test('A1 and A2 recorded sentences play clean clips separated by silence', () => {
  // The first A1 and A2 sentence recordings spoke "Audiomarker." after every
  // clip and read "___" aloud as "Unterstrich"; clips cut from them carried
  // those words.
  for (const [file, name, prefix] of [
    ['data_speech_a1.js', 'A1_FIXED_SPEECH', 'a1-'],
    ['data_speech_clean.js', 'A2_FIXED_SPEECH', '']
  ]) {
    const context = vm.createContext({ window: {} });
    vm.runInContext(readFileSync(join(root, 'app', file), 'utf8'), context);
    const speech = context.window[name];
    assert.equal(speech.trimmed, true, file);
    for (const voice of speech.voices) {
      assert.equal(voice.audio, `assets/speech/${prefix}${voice.id}.mp3?v=${speech.version}`);
      assert.ok(existsSync(join(root, 'app', voice.audio.split('?')[0])), `Missing ${voice.audio}`);
      assert.equal(voice.timings.length, speech.texts.length);
      voice.timings.forEach(([start, end], index) => {
        assert.ok(end - start >= 0.12, `${file} ${voice.id} clip ${index} is empty`);
        if (index) assert.ok(start - voice.timings[index - 1][1] >= 0.3, `${file} ${voice.id} clip ${index} touches the previous clip`);
      });
    }
  }
  assert.ok(html.includes("speechA1:'data_speech_a1.js?v=a1-fixed-voices-3'"), 'LAZY_SCRIPTS must load the rebuilt A1 library');
  assert.ok(html.includes("speechA2:'data_speech_clean.js?v=speech-clean-8'"), 'LAZY_SCRIPTS must load the rebuilt A2 library');
  // Trimmed libraries must not lose another 85 ms at the end of each clip.
  assert.match(functionSource('playFixedSpeech'), /trimmed\|\|\(library==='a2'&&kind==='aliases'\)\?0:\.085/);
  assert.match(functionSource('fallbackBrowserSpeech'), /replace\(\/_\{2,\}\/g/);
});

test('app code is network-first and open pages reload when a new version goes live', () => {
  const sw = readFileSync(join(root, 'app', 'sw.js'), 'utf8');
  assert.match(sw, /function isAppCode\(/);
  assert.match(sw, /if \(isAppCode\(url\)\) \{\s*event\.respondWith\(networkFirst\(req\)\)/);
  assert.match(sw, /type: 'sw-activated', version: CACHE_VERSION/);
  assert.match(sw, /fetch\(req, \{ cache: 'no-cache' \}\)/);
  const page = readFileSync(join(root, 'app', 'js', 'offline-download.js'), 'utf8');
  assert.match(page, /addEventListener\('visibilitychange'/);
  assert.match(page, /data\.type==='sw-activated'/);
  assert.doesNotMatch(page, /pwa-v65-reloaded/);
  assert.match(page, /sessionStorage\.setItem\(RELOAD_GUARD_KEY,pendingVersion\)/);
});

test('verb cards of every level expand into full six-tense conjugation tables', () => {
  const context = vm.createContext({ window: {}, escapeHtml: value => String(value) });
  for (const file of ['data_a1_verbs.js', 'data_verbs.js', 'data_b1_verbs.js']) {
    vm.runInContext(readFileSync(join(root, 'app', file), 'utf8'), context);
  }
  vm.runInContext(readFileSync(join(root, 'app', 'js', '15-conjugation.js'), 'utf8').replace(/^const /gm, 'var '), context);
  const all = [...context.window.A1_VERBS, ...context.window.A2_VERBS, ...context.window.B1_VERBS];
  for (const verb of all) {
    const tables = context.conjugateVerb(verb);
    assert.equal(tables.length, 6, `${verb.inf} should have six tenses`);
    tables.forEach(([tense, forms]) => forms.forEach(form => assert.ok(form && !/undefined/.test(form), `${verb.inf} ${tense}`)));
  }
  const table = verb => Object.fromEntries(context.conjugateVerb(context.window.B1_VERBS.find(item => item.inf === verb)));
  assert.equal(table('sich aufhalten')['Präsens'][1], 'hältst dich auf');
  assert.equal(table('sich aufhalten')['Präteritum'][3], 'hielten uns auf');
  assert.equal(table('sich vornehmen')['Perfekt'][0], 'habe mir vorgenommen');
  assert.equal(table('ankommen')['Perfekt'][2], 'ist angekommen');
  assert.equal(table('messen')['Präteritum'][1], 'maßest');
  assert.equal(table('bewerten')['Präteritum'][4], 'bewertetet');
  assert.equal(table('verzeihen')['Futur I'][1], 'wirst verzeihen');
  assert.ok(context.window.B1_VERBS.every(verb => verb.forms.length === 6));
  for (const page of ['05-levels.js', '08-dictionary.js']) {
    assert.match(readFileSync(join(root, 'app', 'js', page), 'utf8'), /conjugationTableHtml\(verb\)/);
  }
});

test('Arabic help stays a quiet line and long translations fold away', () => {
  const { ar } = loadFunctions(['ar']);
  const context = vm.createContext({ location: { hash: '' } });
  vm.runInContext(`${functionSource('ar')}\nthis.ar=ar;`, context);
  assert.equal(context.ar('Vorlieben und Abneigungen'), '', 'German-only text is not repeated as Arabic');
  assert.match(context.ar('مرحبا'), /^<div class="ar"/);
  assert.match(context.ar('ترجمة '.repeat(60)), /<details class="ar ar-long"/);
  assert.ok(typeof ar === 'function');
});

test('word trainer checks answers tolerantly and schedules words with Leitner boxes', () => {
  const source = readFileSync(join(root, 'app', 'js', '16-word-trainer.js'), 'utf8').replace(/^(const|let) /gm, 'var ');
  const context = vm.createContext({ Date, Math, JSON, localStorage: { getItem: () => null, setItem() {} } });
  vm.runInContext(source, context);
  const check = (input, expected, article = '') => context.checkTrainerAnswer(input, expected, { article });
  assert.equal(check('der Fahrplan', 'der Fahrplan', 'der').ok, true);
  assert.equal(check('  Der FAHRPLAN. ', 'der Fahrplan', 'der').ok, true);
  const wrongArticle = check('die Fahrplan', 'der Fahrplan', 'der');
  assert.equal(wrongArticle.ok, false);
  assert.match(wrongArticle.note, /Artikel: der/);
  assert.match(check('Fahrplan', 'der Fahrplan', 'der').note, /Mit Artikel/);
  const umlaut = check('die Kuehlung', 'die Kühlung', 'die');
  assert.equal(umlaut.ok, true);
  assert.equal(umlaut.close, true);
  assert.equal(check('Aufenthalt', 'Aufenthalte').ok, true, 'one typo in a long word is accepted');
  assert.equal(check('Haus', 'Maus').ok, false, 'short words must be exact');

  const store = {};
  let record = context.trainerRecordResult(store, 'w1', true);
  assert.equal(record.box, 1);
  record = context.trainerRecordResult(store, 'w1', true);
  assert.equal(record.box, 2);
  assert.ok(record.due - Date.now() > 2.9 * 24 * 60 * 60 * 1000);
  record = context.trainerRecordResult(store, 'w1', false);
  assert.equal(record.box, 1);
  assert.ok(record.due - Date.now() <= 10 * 60 * 1000);

  const words = Array.from({ length: 30 }, (_, index) => ({ id: `w${index}` }));
  const schedule = { w0: { box: 2, due: 0 }, w1: { box: 3, due: Date.now() + 1e9 } };
  const picked = context.pickTrainerWords(words, schedule, { size: 14, newLimit: 8 });
  assert.equal(picked[0].id, 'w0', 'due words come first');
  assert.ok(!picked.some(word => word.id === 'w1'), 'words not yet due are skipped');
  assert.equal(picked.length, 9);
});

test('every B1.1 chapter offers five conversation situations with dialogues', () => {
  const context = vm.createContext({ window: {} });
  for (const file of ['data_b1_1.js', 'data_b1_1_lessons.js', 'data_b1_1_conversations.js']) {
    vm.runInContext(readFileSync(join(root, 'app', file), 'utf8'), context);
  }
  for (const chapter of context.window.B1_BOOK) {
    assert.equal(chapter.conversations.length, 5, `Kapitel ${chapter.num}`);
    for (const item of chapter.conversations) {
      assert.ok(item.situation && /[؀-ۿ]/.test(item.situationAr));
      assert.ok(item.phrases.length >= 8, item.situation);
      assert.ok(item.dialogue.length >= 6, item.situation);
      [...item.phrases, ...item.dialogue].forEach(line => {
        assert.ok(line.de && /[؀-ۿ]/.test(line.ar), `${item.situation}: ${line.de}`);
      });
      assert.ok(item.task && item.taskAr);
      assert.ok(chapter.redemittel.some(group => group.cat === item.situation), 'phrases feed the Redemittel');
    }
  }
  assert.match(functionSource('renderChapterTab'), /conversationsHtml\(c\)/);
});

test('B1.1 grammar has detailed topics with at least eight varied exercises each', () => {
  const context = vm.createContext({ window: {} });
  for (const file of ['data_b1_1_grammar_1.js', 'data_b1_1_grammar_2.js', 'data_b1_1_grammar_3.js']) {
    vm.runInContext(readFileSync(join(root, 'app', file), 'utf8'), context);
  }
  const grammar = context.window.B1_GRAMMAR;
  const normalize = value => String(value).replace(/[„“"'‚‘’]/g, '').replace(/[.,!?;:–—-]/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
  const ids = new Set();
  for (let chapter = 1; chapter <= 6; chapter += 1) {
    assert.ok(grammar[chapter]?.length >= 2, `Kapitel ${chapter}`);
    for (const topic of grammar[chapter]) {
      assert.ok(!ids.has(topic.id), `duplicate ${topic.id}`);
      ids.add(topic.id);
      assert.ok(topic.summary && /[؀-ۿ]/.test(topic.summaryAr), topic.id);
      assert.ok(topic.sections.length >= 2, `${topic.id} sections`);
      assert.ok(topic.sections.some(section => section.table), `${topic.id} table`);
      assert.ok(topic.pitfalls.length >= 2, `${topic.id} pitfalls`);
      assert.ok(topic.exercises.length >= 8, `${topic.id} exercises`);
      assert.ok(new Set(topic.exercises.map(exercise => exercise.type)).size >= 4, `${topic.id} variety`);
      for (const exercise of topic.exercises) {
        assert.ok(exercise.why, `${topic.id} explanation`);
        if (exercise.type === 'choice') assert.ok(exercise.a >= 0 && exercise.a < exercise.o.length);
        if (exercise.type === 'truefalse') assert.equal(typeof exercise.a, 'boolean');
        if (['gap', 'transform', 'error', 'order'].includes(exercise.type)) assert.ok(exercise.a.length >= 1);
        if (exercise.type === 'order') {
          const bag = words => normalize(words).split(' ').sort().join(' ');
          assert.ok(exercise.a.some(answer => bag(answer) === bag(exercise.words.join(' '))), `${topic.id} order`);
        }
        if (exercise.type === 'error') assert.ok(!exercise.a.some(answer => normalize(answer) === normalize(exercise.q)));
      }
    }
  }
  assert.ok([...ids].length >= 17);
  const { grammarNormalize, grammarAnswerMatches } = loadFunctions(['grammarNormalize', 'grammarAnswerMatches']);
  assert.equal(grammarNormalize(' Ich habe „keine“ Zeit. '), 'ich habe keine zeit');
  assert.equal(grammarAnswerMatches('ich lasse mein auto reparieren', ['Ich lasse mein Auto reparieren.']), true);
  assert.equal(grammarAnswerMatches('', ['x']), false);
  assert.match(functionSource('renderChapterTab'), /renderGrammarTopics\(c\)/);
  assert.match(functionSource('renderChapterTab'), /renderGrammarTest\(c\)/);
});

function loadBausteine() {
  const context = vm.createContext({ window: {} });
  for (const file of ['data_bausteine.js', 'data_bausteine_2.js', 'data_core_dictionary.js']) {
    vm.runInContext(readFileSync(join(root, 'app', file), 'utf8'), context);
  }
  return context.window;
}

test('Satzbaukasten data is complete, bilingual and uses valid cases', () => {
  const { BAUSTEINE: data } = loadBausteine();
  const arabic = /[؀-ۿ]/;
  const levels = new Set(['A1', 'A2', 'B1']);
  const verbLists = { reflexive: 80, prepVerbs: 60, dativeVerbs: 40, dativeAccusativeVerbs: 30 };
  for (const [name, minimum] of Object.entries(verbLists)) {
    assert.ok(data[name].length >= minimum, `${name} has only ${data[name].length} verbs`);
    for (const item of data[name]) {
      assert.ok(item.v && item.ex && arabic.test(item.ar), `${name}: ${item.v}`);
      assert.ok(levels.has(item.lvl), `${name}: ${item.v} level`);
      for (const [prep, kasus] of item.p || []) assert.ok(prep && ['A', 'D'].includes(kasus), `${item.v} ${prep}`);
    }
  }
  assert.ok(data.reflexive.every(item => ['A', 'D'].includes(item.c)));
  assert.ok(data.reflexive.some(item => item.c === 'D') && data.reflexive.some(item => item.only));
  assert.ok(data.prepVerbs.every(item => item.p?.length));
  assert.deepEqual(Array.from(data.connectors, group => group.id), ['pos0', 'nebensatz', 'pos1', 'zweiteilig', 'infinitiv']);
  assert.ok(data.connectors.every(group => group.items.every(item => item.w && item.ex && arabic.test(item.ar))));
  assert.ok(data.questions.length >= 20 && data.questions.every(item => item.ex && item.ans && arabic.test(item.ar)));
  assert.deepEqual(Array.from(data.prepositions, group => group.id), ['akk', 'dat', 'wechsel', 'gen']);
  assert.ok(data.prepositions.find(group => group.id === 'wechsel').items.every(item => item.wo && item.wohin));
  for (const pattern of data.patterns) {
    assert.ok(pattern.rows.every(row => row.cells.length === pattern.slots.length && arabic.test(row.ar)), pattern.id);
  }
  for (const table of data.tables) assert.ok(table.rows.every(row => row.length === table.head.length), table.id);
  assert.ok(data.nounVerb.length >= 30 && data.starters.length >= 5 && data.time.length >= 4);
  assert.deepEqual(Array.from(data.articleRules, group => group.art), ['der', 'die', 'das']);
});

test('Satzbaukasten builds question words and reads articles from lesson words', () => {
  const { prepAdverb, prepQuestion, parseArticleNoun } = loadFunctions(['prepAdverb', 'prepQuestion', 'parseArticleNoun']);
  assert.equal(prepAdverb('wo', 'auf'), 'worauf');
  assert.equal(prepAdverb('da', 'über'), 'darüber');
  assert.equal(prepAdverb('wo', 'mit'), 'womit');
  assert.equal(prepAdverb('da', 'für'), 'dafür');
  assert.deepEqual({ ...prepQuestion('auf', 'A') }, { thing: 'Worauf?', person: 'Auf wen?', pronoun: 'darauf' });
  assert.equal(prepQuestion('mit', 'D').person, 'Mit wem?');
  assert.deepEqual({ ...parseArticleNoun('die Suppe, -n') }, { article: 'die', noun: 'Suppe', plural: '-n' });
  assert.deepEqual({ ...parseArticleNoun('das Viertel') }, { article: 'das', noun: 'Viertel', plural: '' });
  assert.equal(parseArticleNoun('der/die Kollege'), null);
  assert.equal(parseArticleNoun('gehen'), null);
});

test('Satzbaukasten is routed, linked from every level and precached', () => {
  const { fallbackBackTarget } = loadFunctions(['fallbackBackTarget']);
  assert.equal(fallbackBackTarget('bausteine/reflexiv'), 'bausteine');
  assert.equal(fallbackBackTarget('bausteine'), '');
  ['renderBausteineHome', 'renderBaustein'].forEach(name => functionSource(name));
  assert.match(html, /h==='bausteine'/);
  // the A1, A2 and B1 hubs and the Üben page
  assert.equal((html.match(/\{route:'bausteine'/g) || []).length, 4, 'A1, A2, B1 and Üben link the Satzbaukasten');
  const sw = readFileSync(join(root, 'app', 'sw.js'), 'utf8');
  for (const file of ['data_bausteine.js', 'data_bausteine_2.js', 'data_core_dictionary.js', 'js/19-bausteine.js']) {
    assert.ok(sw.includes(`'${file}'`), `${file} is not precached`);
    assert.ok(html.includes(`src="${file}"`), `${file} is not loaded`);
  }
});

test('dictionary shows reviewed translations before the machine-translated dictionary', () => {
  const { CORE_DICTIONARY } = loadBausteine();
  assert.ok(CORE_DICTIONARY.length >= 400);
  assert.ok(CORE_DICTIONARY.every(entry => entry[0] && entry[1] && /[؀-ۿ]/.test(entry[2])));
  const bekommen = CORE_DICTIONARY.find(entry => entry[0] === 'bekommen');
  assert.match(bekommen[2], /يستلم/);

  const context = loadFunctions(['normalizeWordForSearch', 'bareWordKey', 'rankCuratedEntries']);
  const entry = (word, ar, rank = 0) => ({
    word, ar, rank,
    key: context.normalizeWordForSearch(word), bare: context.bareWordKey(word), arKey: context.normalizeWordForSearch(ar)
  });
  const entries = [entry('die Haustür', 'الباب الأمامي', 1), entry('das Haus', 'بيت'), entry('bekommen', 'يستلم / ياخد'), entry('abholen', 'يروح ياخد / يستلم', 1)];
  assert.deepEqual(Array.from(context.rankCuratedEntries(entries, 'Haus'), item => item.word), ['das Haus', 'die Haustür']);
  assert.deepEqual(Array.from(context.rankCuratedEntries(entries, 'يستلم'), item => item.word), ['bekommen', 'abholen']);
  assert.deepEqual(Array.from(context.rankCuratedEntries(entries, 'x')), []);

  const { onlineDictionaryLinks } = loadFunctions(['onlineDictionaryLinks']);
  const links = Object.fromEntries(onlineDictionaryLinks('Haus'));
  assert.match(links.PONS, /deutsch-arabisch\/Haus$/);
  assert.match(links['Reverso Context'], /german-arabic\/Haus$/);
  assert.match(Object.fromEntries(onlineDictionaryLinks('بيت'))['Google Übersetzer'], /sl=ar&tl=de/);

  const build = readFileSync(join(root, 'scripts', 'build_dictionary_mobile_assets.js'), 'utf8');
  assert.match(build, /function qualityPenalty\(entry\)/, 'Wiktionary entries must outrank FreeDict pivots');
});

test('word search ranks whole Arabic meanings first and honours the chosen sources', () => {
  const context = loadFunctions(['normalizeWordForSearch', 'bareWordKey', 'rankCuratedEntries', 'filterWordSearchEntries']);
  const entry = (word, ar, extra = {}) => ({
    word, ar, rank: 1, kind: 'lesson', level: 'A1', ...extra,
    key: context.normalizeWordForSearch(word), bare: context.bareWordKey(word), arKey: context.normalizeWordForSearch(ar),
    arParts: ar.split(/\s*[\/،,;]\s*/).map(context.normalizeWordForSearch)
  });
  const entries = [
    entry('verpassen', 'تفوته مواصلة أو موعد', { level: 'A2', kind: 'verb' }),
    entry('der Termin', 'موعد'),
    entry('vereinbaren', 'يتفق على موعد'),
    entry('sagen', 'يقول', { kind: 'core', level: '', rank: 0 })
  ];
  assert.equal(context.rankCuratedEntries(entries, 'موعد')[0].word, 'der Termin');
  const words = prefs => Array.from(context.filterWordSearchEntries(entries, prefs), item => item.word);
  assert.deepEqual(words({ level: '', lessons: true, basics: true }), ['verpassen', 'der Termin', 'vereinbaren', 'sagen']);
  assert.deepEqual(words({ level: 'A2', lessons: true, basics: true }), ['verpassen', 'sagen']);
  assert.deepEqual(words({ level: '', lessons: false, basics: true }), ['sagen']);
  assert.deepEqual(words({ level: '', lessons: true, basics: false }), ['verpassen', 'der Termin', 'vereinbaren']);
  const search = functionSource('renderWordSearch');
  assert.match(search, /data-ws-level/);
  assert.match(search, /WORD_SEARCH_LEVELS/);
  assert.match(html, /\['B1\.1','B1'\]/, 'B1 (B1.1 + B1.2) can be chosen as a level');
});

/* ---------- A1.1 (Netzwerk neu A1.1, chapters 1-6) ---------- */
function loadA11Data(files) {
  const context = vm.createContext({ window: {} });
  for (const file of files) vm.runInContext(readFileSync(join(root, 'app', file), 'utf8'), context);
  return context.window;
}
const A11_FILES = ['data_a1.js', 'data_a12.js', 'data_a11_vocab.js', 'data_a11_lessons.js', 'data_a11_conversations.js',
  'data_a11_grammar_1.js', 'data_a11_grammar_2.js', 'data_a11_grammar_3.js'];
const ARABIC = /[؀-ۿ]/;

test('A1.1 vocabulary carries the whole word list, grouped by topic, with explanations and Arabic', () => {
  const win = loadA11Data(A11_FILES);
  for (let number = 1; number <= 6; number += 1) {
    const chapter = win.A1_BOOK.find(item => item.num === number);
    assert.ok(chapter.vocab.length >= 140, `Kapitel ${number} has ${chapter.vocab.length} cards`);
    const seen = new Set();
    const closedGroups = new Set();
    let current = '';
    chapter.vocab.forEach(card => {
      assert.ok(card.w && card.d && card.ex, `${number}: ${card.w}`);
      assert.ok(ARABIC.test(card.ar), `${number}: ${card.w} needs Arabic`);
      assert.ok(card.cat && ARABIC.test(card.catAr), `${number}: ${card.w} needs a group`);
      assert.ok(!seen.has(card.w), `${number}: duplicate ${card.w}`);
      seen.add(card.w);
      if (card.cat !== current) {
        assert.ok(!closedGroups.has(card.cat), `${number}: group ${card.cat} is split in two`);
        if (current) closedGroups.add(current);
        current = card.cat;
      }
    });
    assert.ok(chapter.vocab.filter(card => card.img).length >= 30, `Kapitel ${number} keeps its existing photos`);
    assert.ok(chapter.vocabSummary?.note, `Kapitel ${number} explains the word list`);
  }
  assert.ok(win.A1_BOOK.slice(0, 6).reduce((sum, chapter) => sum + chapter.vocab.length, 0) >= 1000);
  assert.equal(win.A1_BOOK.find(item => item.num === 7).vocab.length, 46, 'chapters 7-12 stay untouched');
});

test('word ids of existing A1 cards stay stable after the A1.1 vocabulary rebuild', () => {
  const before = loadA11Data(['data_a1.js', 'data_a12.js']);
  const after = loadA11Data(A11_FILES);
  const { wordEntryId } = loadFunctions(['stableFavoriteHash', 'wordEntryId']);
  for (let number = 1; number <= 6; number += 1) {
    const oldChapter = before.A1_BOOK.find(item => item.num === number);
    const newChapter = after.A1_BOOK.find(item => item.num === number);
    const newIds = new Set(newChapter.vocab.map((card, index) => wordEntryId('A1', newChapter, index, card)));
    assert.equal(newIds.size, newChapter.vocab.length, `Kapitel ${number}: ids must be unique`);
    oldChapter.vocab.forEach((card, index) => {
      assert.ok(newIds.has(wordEntryId('A1', oldChapter, index, card)), `Kapitel ${number}: "${card.w}" keeps its id`);
    });
  }
  assert.match(wordEntryId('a1', { num: 3 }, 2, { w: 'lernen' }), /^a1-k3-2-[a-z0-9]+$/);
});

test('A1.1 chapters contain complete lesson sections', () => {
  const win = loadA11Data(A11_FILES);
  for (let number = 1; number <= 6; number += 1) {
    const chapter = win.A1_BOOK.find(item => item.num === number);
    assert.ok(chapter.intro.length > 80 && ARABIC.test(chapter.introAr), `Kapitel ${number} intro`);
    assert.ok(chapter.goals.length >= 6 && chapter.goals.every(goal => goal.de && ARABIC.test(goal.ar)), `Kapitel ${number} goals`);
    assert.equal(chapter.readings.length, 3, `Kapitel ${number} readings`);
    chapter.readings.forEach(reading => {
      assert.ok(reading.text.length > 200 && ARABIC.test(reading.ar), `${reading.title} text`);
      assert.equal(reading.questions.length, 4, `${reading.title} questions`);
      assert.ok(reading.glossary.length >= 5 && reading.glossary.every(([de, ar]) => de && ARABIC.test(ar)), `${reading.title} glossary`);
    });
    assert.ok(chapter.redemittel.length >= 4, `Kapitel ${number} Redemittel`);
    assert.ok(chapter.speaking.questions.length >= 5 && chapter.speaking.model && ARABIC.test(chapter.speaking.modelAr));
    assert.equal(chapter.quiz.length, 8, `Kapitel ${number} quiz`);
    chapter.quiz.forEach(item => {
      assert.ok(item.a >= 0 && item.a < item.o.length && new Set(item.o).size === item.o.length, item.q);
      assert.ok(item.fb && ARABIC.test(item.fbAr), item.q);
    });
  }
});

test('every A1.1 chapter offers five conversation situations with dialogues', () => {
  const win = loadA11Data(A11_FILES);
  for (let number = 1; number <= 6; number += 1) {
    const chapter = win.A1_BOOK.find(item => item.num === number);
    assert.equal(chapter.conversations.length, 5, `Kapitel ${number}`);
    for (const item of chapter.conversations) {
      assert.ok(item.situation && ARABIC.test(item.situationAr));
      assert.ok(item.phrases.length >= 8, item.situation);
      assert.ok(item.dialogue.length >= 6, item.situation);
      assert.ok(new Set(item.dialogue.map(line => line.s)).size >= 2, `${item.situation}: two speakers`);
      [...item.phrases, ...item.dialogue].forEach(line => {
        assert.ok(line.de && ARABIC.test(line.ar), `${item.situation}: ${line.de}`);
      });
      assert.ok(item.task && item.taskAr);
      assert.ok(chapter.redemittel.some(group => group.cat === item.situation), 'phrases feed the Redemittel');
    }
  }
  assert.match(functionSource('playDialogue'), /route/, 'A1.1 and B1.1 share chapter numbers, so playback looks chapters up by route');
});

test('A1.1 grammar has detailed topics with varied exercises', () => {
  const win = loadA11Data(['data_a11_grammar_1.js', 'data_a11_grammar_2.js', 'data_a11_grammar_3.js']);
  const grammar = win.A1_GRAMMAR;
  const normalize = value => String(value).replace(/[„“"'‚‘’]/g, '').replace(/[.,!?;:–—-]/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
  const ids = new Set();
  const positions = new Set();
  let exerciseCount = 0;
  for (let chapter = 1; chapter <= 6; chapter += 1) {
    assert.ok(grammar[chapter]?.length >= 3, `Kapitel ${chapter}`);
    for (const topic of grammar[chapter]) {
      assert.ok(topic.id.startsWith('a1-k'), `${topic.id} id prefix keeps A1 and B1.1 progress apart`);
      assert.ok(!ids.has(topic.id), `duplicate ${topic.id}`);
      ids.add(topic.id);
      assert.ok(topic.summary && ARABIC.test(topic.summaryAr), topic.id);
      assert.ok(topic.sections.length >= 3, `${topic.id} sections`);
      assert.ok(topic.sections.some(section => section.table), `${topic.id} table`);
      assert.ok(topic.sections.every(section => ARABIC.test(section.ar) && ARABIC.test(section.hAr)), `${topic.id} Arabic help`);
      assert.ok(topic.pitfalls.length >= 3, `${topic.id} pitfalls`);
      assert.ok(topic.exercises.length >= 9, `${topic.id} exercises`);
      assert.ok(new Set(topic.exercises.map(exercise => exercise.type)).size >= 5, `${topic.id} variety`);
      exerciseCount += topic.exercises.length;
      for (const exercise of topic.exercises) {
        assert.ok(ARABIC.test(exercise.why), `${topic.id} explanation`);
        if (exercise.type === 'choice') {
          assert.ok(exercise.a >= 0 && exercise.a < exercise.o.length);
          assert.equal(new Set(exercise.o).size, exercise.o.length, `${topic.id}: duplicate options`);
          positions.add(exercise.a);
        }
        if (exercise.type === 'truefalse') assert.equal(typeof exercise.a, 'boolean');
        if (['gap', 'transform', 'error', 'order'].includes(exercise.type)) assert.ok(exercise.a.length >= 1);
        if (exercise.type === 'gap') assert.match(exercise.q, /_{2,}/, `${topic.id}: gap marker`);
        if (exercise.type === 'order') {
          const bag = words => normalize(words).split(' ').sort().join(' ');
          assert.ok(exercise.a.some(answer => bag(answer) === bag(exercise.words.join(' '))), `${topic.id} order`);
        }
        if (exercise.type === 'error') assert.ok(!exercise.a.some(answer => normalize(answer) === normalize(exercise.q)));
      }
    }
  }
  assert.ok(ids.size >= 24);
  assert.ok(exerciseCount >= 250);
  assert.ok(positions.size >= 3, 'the correct choice must not always be the same button');
});

test('grammar practice serves both A1.1 and B1.1 chapters', () => {
  const context = vm.createContext({ window: { A1_GRAMMAR: { 1: ['a1'] }, B1_GRAMMAR: { 1: ['b1'] } } });
  vm.runInContext(`${functionSource('chapterGrammar')}\nthis.chapterGrammar=chapterGrammar;`, context);
  assert.deepEqual(Array.from(context.chapterGrammar({ route: 'a1/k1', num: 1 })), ['a1']);
  assert.deepEqual(Array.from(context.chapterGrammar({ route: 'b1.1/k1', num: 1 })), ['b1']);
  assert.deepEqual(Array.from(context.chapterGrammar({ num: 1 })), []);
  assert.match(functionSource('renderGrammarTest'), /chapterByRoute/);
});

test('A1.1 data files are loaded by the page and precached', () => {
  const sw = readFileSync(join(root, 'app', 'sw.js'), 'utf8');
  const page = readFileSync(join(root, 'app', 'index.html'), 'utf8');
  for (const file of ['data_a11_vocab.js', 'data_a11_lessons.js', 'data_a11_conversations.js', 'data_a11_grammar_1.js', 'data_a11_grammar_2.js', 'data_a11_grammar_3.js']) {
    assert.match(sw, new RegExp(`'${file}'`), `${file} precached`);
    assert.match(page, new RegExp(`src="${file}[?"]`), `${file} loaded`);
  }
  const order = ['data_a1.js', 'data_a12.js', 'data_a11_vocab.js', 'data_a11_lessons.js', 'data_a11_conversations.js']
    .map(file => page.indexOf(`src="${file}`));
  assert.deepEqual([...order].sort((a, b) => a - b), order, 'A1.1 files load after the base A1 data and in dependency order');
});

test('A1.1 verbs extend the A1 verb reference with complete forms in every tense', () => {
  const context = vm.createContext({ window: {}, escapeHtml: value => String(value) });
  for (const file of ['data_a1_verbs.js', 'data_a11_verbs.js']) {
    vm.runInContext(readFileSync(join(root, 'app', file), 'utf8'), context);
  }
  vm.runInContext(readFileSync(join(root, 'app', 'js', '15-conjugation.js'), 'utf8').replace(/^const /gm, 'var '), context);
  const verbs = context.window.A1_VERBS;
  assert.ok(verbs.length >= 150, `only ${verbs.length} A1 verbs`);
  const seen = new Set();
  verbs.forEach(verb => {
    ['inf', 'praet', 'part', 'ar', 'example'].forEach(key => assert.ok(verb[key], `${verb.inf} misses ${key}`));
    assert.ok(/[؀-ۿ]/.test(verb.ar), `${verb.inf} needs Arabic`);
    assert.ok(['haben', 'sein'].includes(verb.aux), verb.inf);
    assert.equal(verb.forms.length, 6, verb.inf);
    assert.ok(verb.chapter >= 1 && verb.chapter <= 12, verb.inf);
    assert.ok(!seen.has(verb.inf), `duplicate ${verb.inf}`);
    seen.add(verb.inf);
    const tables = context.conjugateVerb(verb);
    assert.equal(tables.length, 6, `${verb.inf} should have six tenses`);
    tables.forEach(([tense, forms]) => forms.forEach(form => assert.ok(form && !/undefined/.test(form), `${verb.inf} ${tense}`)));
  });
  const chapters = Array.from(verbs, verb => verb.chapter);
  assert.deepEqual(chapters, [...chapters].sort((a, b) => a - b), 'verbs stay sorted by chapter');
  assert.ok(verbs.filter(verb => verb.chapter <= 6).length >= 110, 'A1.1 verbs from chapters 1-6');
  const table = name => Object.fromEntries(context.conjugateVerb(verbs.find(item => item.inf === name)));
  assert.equal(table('zuordnen')['Präteritum'][0], 'ordnete zu');
  assert.equal(table('mitbringen')['Präsens'][1], 'bringst mit');
  assert.equal(table('sich verabschieden')['Perfekt'][0], 'habe mich verabschiedet');
  assert.equal(table('einfallen')['Perfekt'][2], 'ist eingefallen');
  assert.equal(table('zeichnen')['Präsens'][1], 'zeichnest');
  assert.equal(table('grüßen')['Präsens'][1], 'grüßt');
  assert.equal(table('wissen')['Präsens'][2], 'weiß');
});

const A12_FILES = [...A11_FILES, 'data_a12_vocab.js', 'data_a12_lessons.js', 'data_a12_conversations.js',
  'data_a12_grammar_1.js', 'data_a12_grammar_2.js'];

/* Shared checks for a rebuilt level: whole word list, lessons, conversations, grammar. */
function assertVocabularyChapter(chapter, minimum) {
  const label = `Kapitel ${chapter.num}`;
  assert.ok(chapter.vocab.length >= minimum, `${label} has ${chapter.vocab.length} cards`);
  const seen = new Set();
  const closedGroups = new Set();
  let current = '';
  chapter.vocab.forEach(card => {
    assert.ok(card.w && card.d && card.ex, `${label}: ${card.w}`);
    assert.ok(ARABIC.test(card.ar), `${label}: ${card.w} needs Arabic`);
    assert.ok(card.cat && ARABIC.test(card.catAr), `${label}: ${card.w} needs a group`);
    assert.ok(!seen.has(card.w), `${label}: duplicate ${card.w}`);
    seen.add(card.w);
    if (card.cat !== current) {
      assert.ok(!closedGroups.has(card.cat), `${label}: group ${card.cat} is split in two`);
      if (current) closedGroups.add(current);
      current = card.cat;
    }
  });
  assert.ok(chapter.vocabSummary?.note, `${label} explains the word list`);
}

function assertLessonChapter(chapter) {
  const label = `Kapitel ${chapter.num}`;
  assert.ok(chapter.intro.length > 80 && ARABIC.test(chapter.introAr), `${label} intro`);
  assert.ok(chapter.goals.length >= 6 && chapter.goals.every(goal => goal.de && ARABIC.test(goal.ar)), `${label} goals`);
  assert.equal(chapter.readings.length, 3, `${label} readings`);
  chapter.readings.forEach(reading => {
    assert.ok(reading.text.length > 200 && ARABIC.test(reading.ar), `${reading.title} text`);
    assert.equal(reading.questions.length, 4, `${reading.title} questions`);
    assert.ok(reading.glossary.length >= 5 && reading.glossary.every(([de, ar]) => de && ARABIC.test(ar)), `${reading.title} glossary`);
  });
  assert.ok(chapter.redemittel.length >= 4, `${label} Redemittel`);
  assert.ok(chapter.speaking.questions.length >= 5 && chapter.speaking.model && ARABIC.test(chapter.speaking.modelAr));
  assert.equal(chapter.quiz.length, 8, `${label} quiz`);
  chapter.quiz.forEach(item => {
    assert.ok(item.a >= 0 && item.a < item.o.length && new Set(item.o).size === item.o.length, item.q);
    assert.ok(item.fb && ARABIC.test(item.fbAr), item.q);
  });
  assert.ok(new Set(chapter.quiz.map(item => item.a)).size >= 2, `${label}: the right answer is not always the same button`);
  assert.equal(chapter.conversations.length, 5, `${label} conversations`);
  for (const item of chapter.conversations) {
    assert.ok(item.situation && ARABIC.test(item.situationAr));
    assert.ok(item.phrases.length >= 8, item.situation);
    assert.ok(item.dialogue.length >= 6, item.situation);
    assert.ok(new Set(item.dialogue.map(line => line.s)).size >= 2, `${item.situation}: two speakers`);
    [...item.phrases, ...item.dialogue].forEach(line => assert.ok(line.de && ARABIC.test(line.ar), `${item.situation}: ${line.de}`));
    assert.ok(item.task && item.taskAr);
    assert.ok(chapter.redemittel.some(group => group.cat === item.situation), 'phrases feed the Redemittel');
  }
}

function assertGrammarTopics(topics, prefix) {
  const normalize = value => String(value).replace(/[„“"'‚‘’]/g, '').replace(/[.,!?;:–—-]/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
  const positions = new Set();
  let exercises = 0;
  for (const topic of topics) {
    assert.ok(topic.id.startsWith(prefix), `${topic.id} id prefix keeps each level's progress apart`);
    assert.ok(topic.summary && ARABIC.test(topic.summaryAr), topic.id);
    assert.ok(topic.sections.length >= 3 && topic.sections.some(section => section.table), `${topic.id} sections`);
    assert.ok(topic.sections.every(section => ARABIC.test(section.ar) && ARABIC.test(section.hAr)), `${topic.id} Arabic help`);
    assert.ok(topic.pitfalls.length >= 3 && topic.pitfalls.every(item => item.wrong !== item.right), `${topic.id} pitfalls`);
    assert.ok(topic.exercises.length >= 9, `${topic.id} exercises`);
    assert.ok(new Set(topic.exercises.map(exercise => exercise.type)).size >= 5, `${topic.id} variety`);
    exercises += topic.exercises.length;
    for (const exercise of topic.exercises) {
      assert.ok(ARABIC.test(exercise.why), `${topic.id} explanation`);
      if (exercise.type === 'choice') {
        assert.ok(exercise.a >= 0 && exercise.a < exercise.o.length);
        assert.equal(new Set(exercise.o).size, exercise.o.length, `${topic.id}: duplicate options`);
        positions.add(exercise.a);
      }
      if (exercise.type === 'truefalse') assert.equal(typeof exercise.a, 'boolean');
      if (['gap', 'transform', 'error', 'order'].includes(exercise.type)) assert.ok(exercise.a.length >= 1);
      if (exercise.type === 'gap') assert.match(exercise.q, /_{2,}/, `${topic.id}: gap marker`);
      if (exercise.type === 'order') {
        const bag = words => normalize(words).split(' ').sort().join(' ');
        assert.ok(exercise.a.some(answer => bag(answer) === bag(exercise.words.join(' '))), `${topic.id} order`);
      }
      if (exercise.type === 'error') assert.ok(!exercise.a.some(answer => normalize(answer) === normalize(exercise.q)));
    }
  }
  assert.ok(positions.size >= 3, 'the correct choice must not always be the same button');
  return exercises;
}

test('A1.2 vocabulary carries the whole word list and keeps saved word ids', () => {
  const before = loadA11Data(['data_a1.js', 'data_a12.js']);
  const win = loadA11Data(A12_FILES);
  const { wordEntryId } = loadFunctions(['stableFavoriteHash', 'wordEntryId']);
  let total = 0;
  for (let number = 7; number <= 12; number += 1) {
    const chapter = win.A1_BOOK.find(item => item.num === number);
    assertVocabularyChapter(chapter, 170);
    total += chapter.vocab.length;
    assert.ok(chapter.vocab.filter(card => card.img).length >= 40, `Kapitel ${number} keeps its existing photos`);
    const oldChapter = before.A1_BOOK.find(item => item.num === number);
    const newIds = new Set(chapter.vocab.map((card, index) => wordEntryId('A1', chapter, index, card)));
    assert.equal(newIds.size, chapter.vocab.length, `Kapitel ${number}: ids must be unique`);
    oldChapter.vocab.forEach((card, index) => {
      assert.ok(newIds.has(wordEntryId('A1', oldChapter, index, card)), `Kapitel ${number}: "${card.w}" keeps its id`);
    });
  }
  assert.ok(total >= 1100, `A1.2 has ${total} cards`);
  assert.equal(win.A1_BOOK.find(item => item.num === 1).vocab.length, loadA11Data(A11_FILES).A1_BOOK.find(item => item.num === 1).vocab.length, 'A1.1 stays untouched');
});

test('A1.2 chapters contain complete lessons and five conversation situations', () => {
  const win = loadA11Data(A12_FILES);
  for (let number = 7; number <= 12; number += 1) assertLessonChapter(win.A1_BOOK.find(item => item.num === number));
});

test('A1.2 grammar has detailed topics with varied exercises', () => {
  const win = loadA11Data(['data_a11_grammar_1.js', 'data_a11_grammar_2.js', 'data_a11_grammar_3.js', 'data_a12_grammar_1.js', 'data_a12_grammar_2.js']);
  const topics = [];
  for (let chapter = 7; chapter <= 12; chapter += 1) {
    assert.ok(win.A1_GRAMMAR[chapter]?.length >= 3, `Kapitel ${chapter}`);
    topics.push(...win.A1_GRAMMAR[chapter]);
  }
  const ids = new Set(Object.values(win.A1_GRAMMAR).flat().map(topic => topic.id));
  assert.equal(ids.size, Object.values(win.A1_GRAMMAR).flat().length, 'grammar ids are unique across A1');
  assert.ok(topics.length >= 18);
  assert.ok(assertGrammarTopics(topics, 'a1-k') >= 200);
});

test('A1.2 verbs extend the A1 verb reference and every file is loaded and precached', () => {
  const context = vm.createContext({ window: {}, escapeHtml: value => String(value) });
  for (const file of ['data_a1_verbs.js', 'data_a11_verbs.js', 'data_a12_verbs.js']) {
    vm.runInContext(readFileSync(join(root, 'app', file), 'utf8'), context);
  }
  vm.runInContext(readFileSync(join(root, 'app', 'js', '15-conjugation.js'), 'utf8').replace(/^const /gm, 'var '), context);
  const verbs = context.window.A1_VERBS;
  assert.ok(verbs.filter(verb => verb.chapter >= 7).length >= 120, 'A1.2 verbs from chapters 7-12');
  assert.equal(new Set(verbs.map(verb => verb.inf)).size, verbs.length, 'no duplicate verbs');
  verbs.forEach(verb => context.conjugateVerb(verb).forEach(([tense, forms]) => forms.forEach(form => assert.ok(form && !/undefined/.test(form), `${verb.inf} ${tense}`))));
  const table = name => Object.fromEntries(context.conjugateVerb(verbs.find(item => item.inf === name)));
  assert.equal(table('einschlafen')['Perfekt'][0], 'bin eingeschlafen');
  assert.equal(table('sich hinlegen')['Präteritum'][0], 'legte mich hin');
  assert.equal(table('empfehlen')['Präsens'][1], 'empfiehlst');
  const sw = readFileSync(join(root, 'app', 'sw.js'), 'utf8');
  const page = readFileSync(join(root, 'app', 'index.html'), 'utf8');
  const files = ['data_a12_vocab.js', 'data_a12_lessons.js', 'data_a12_conversations.js', 'data_a12_grammar_1.js', 'data_a12_grammar_2.js', 'data_a12_verbs.js'];
  for (const file of files) {
    assert.match(sw, new RegExp(`'${file}'`), `${file} precached`);
    assert.match(page, new RegExp(`src="${file}[?"]`), `${file} loaded`);
  }
  const order = ['data_a12.js', 'data_a1_verbs.js', 'data_a11_verbs.js', ...files].map(file => page.indexOf(`src="${file}`));
  assert.deepEqual([...order].sort((a, b) => a - b), order, 'A1.2 files load after the base data in dependency order');
});

const A21_FILES = ['data_book0.js', 'data_book0_expansion.js', 'data_a21_vocab.js', 'data_a21_lessons.js', 'data_a21_conversations.js'];

test('A2.1 vocabulary carries the whole word list and keeps saved word ids', () => {
  const before = loadA11Data(['data_book0.js', 'data_book0_expansion.js']);
  const win = loadA11Data(A21_FILES);
  const { wordEntryId } = loadFunctions(['stableFavoriteHash', 'wordEntryId']);
  const plain = word => String(word).replace(/^(der|die|das)\s+/i, '').split(',')[0].trim().toLowerCase();
  let total = 0;
  for (let number = 1; number <= 6; number += 1) {
    const chapter = win.BOOK0.find(item => item.num === number);
    assertVocabularyChapter(chapter, 150);
    total += chapter.vocab.length;
    const oldChapter = before.BOOK0.find(item => item.num === number);
    const newIds = new Set(chapter.vocab.map((card, index) => wordEntryId('A2', chapter, index, card)));
    assert.equal(newIds.size, chapter.vocab.length, `Kapitel ${number}: ids must be unique`);
    const counts = new Map();
    oldChapter.vocab.forEach(card => counts.set(plain(card.w), (counts.get(plain(card.w)) || 0) + 1));
    oldChapter.vocab.forEach((card, index) => {
      if (counts.get(plain(card.w)) > 1) return; // an old duplicate card collapses into one
      assert.ok(newIds.has(wordEntryId('A2', oldChapter, index, card)), `Kapitel ${number}: "${card.w}" keeps its id`);
    });
  }
  assert.ok(total >= 900, `A2.1 has ${total} cards`);
});

test('A2.1 chapters contain complete lessons and five conversation situations', () => {
  const win = loadA11Data(A21_FILES);
  for (let number = 1; number <= 6; number += 1) {
    const chapter = win.BOOK0.find(item => item.num === number);
    assertLessonChapter(chapter);
    assert.ok(chapter.readings.every(reading => reading.visual?.src), `Kapitel ${number} keeps its reading pictures`);
  }
});

test('A2.1 grammar has detailed topics and is served in the A2 chapters', () => {
  const win = loadA11Data(['data_a11_grammar_1.js', 'data_a21_grammar_1.js', 'data_a21_grammar_2.js']);
  const topics = [];
  for (let chapter = 1; chapter <= 6; chapter += 1) {
    assert.ok(win.A2_GRAMMAR[chapter]?.length >= 3, `Kapitel ${chapter}`);
    topics.push(...win.A2_GRAMMAR[chapter]);
  }
  assert.equal(new Set(topics.map(topic => topic.id)).size, topics.length, 'grammar ids are unique');
  assert.ok(topics.length >= 18);
  assert.ok(assertGrammarTopics(topics, 'a2-k') >= 200);
  const context = vm.createContext({ window: { A1_GRAMMAR: { 1: ['a1'] }, A2_GRAMMAR: { 1: ['a2'] }, B1_GRAMMAR: { 1: ['b1'] } } });
  vm.runInContext(`${functionSource('chapterGrammar')}\nthis.chapterGrammar=chapterGrammar;`, context);
  assert.deepEqual(Array.from(context.chapterGrammar({ num: 1 })), ['a2'], 'A2 chapters have no route');
  assert.deepEqual(Array.from(context.chapterGrammar({ num: 7 })), [], 'A2.2 keeps its own grammar blocks');
  assert.deepEqual(Array.from(context.chapterGrammar({ route: 'a1/k1', num: 1 })), ['a1']);
  const labels = loadFunctions(['grammarLevelLabel']);
  assert.equal(labels.grammarLevelLabel('a2-k3-dass-4'), 'Grammatik A2.1');
  assert.equal(labels.grammarLevelLabel('test-a1-k9-wohin-akkusativ-2'), 'Grammatik A1.2');
  assert.equal(labels.grammarLevelLabel('b1-k2-x-1'), 'Grammatik B1.1');
  assert.equal(labels.grammarLevelLabel('k3-passiv'), 'Grammatik B1.1');
  assert.equal(labels.grammarLevelLabel('test-b1-k8-genitiv-2'), 'Grammatik B1.2');
});

test('A2.1 verbs and data files are loaded, precached and conjugate in every tense', () => {
  const context = vm.createContext({ window: {}, escapeHtml: value => String(value) });
  for (const file of ['data_verbs.js', 'data_a21_library.js', 'data_a21_verbs.js']) {
    vm.runInContext(readFileSync(join(root, 'app', file), 'utf8'), context);
  }
  vm.runInContext(readFileSync(join(root, 'app', 'js', '15-conjugation.js'), 'utf8').replace(/^const /gm, 'var '), context);
  const verbs = context.window.A2_VERBS;
  assert.ok(verbs.filter(verb => verb.chapter <= 6).length >= 120, 'A2.1 verbs from chapters 1-6');
  assert.equal(new Set(verbs.map(verb => verb.inf)).size, verbs.length, 'no duplicate verbs');
  const chapters = Array.from(verbs, verb => verb.chapter);
  assert.deepEqual(chapters, [...chapters].sort((a, b) => a - b), 'verbs stay sorted by chapter');
  verbs.forEach(verb => {
    assert.ok(ARABIC.test(verb.ar) && verb.example && ['haben', 'sein'].includes(verb.aux), verb.inf);
    context.conjugateVerb(verb).forEach(([tense, forms]) => forms.forEach(form => assert.ok(form && !/undefined/.test(form), `${verb.inf} ${tense}`)));
  });
  const table = name => Object.fromEntries(context.conjugateVerb(verbs.find(item => item.inf === name)));
  assert.equal(table('sich vorbereiten')['Perfekt'][0], 'habe mich vorbereitet');
  assert.equal(table('aufwachsen')['Präsens'][1], 'wächst auf');
  const sw = readFileSync(join(root, 'app', 'sw.js'), 'utf8');
  const page = readFileSync(join(root, 'app', 'index.html'), 'utf8');
  const files = ['data_a21_vocab.js', 'data_a21_lessons.js', 'data_a21_conversations.js', 'data_a21_grammar_1.js', 'data_a21_grammar_2.js', 'data_a21_verbs.js'];
  for (const file of files) {
    assert.match(sw, new RegExp(`'${file}'`), `${file} precached`);
    assert.match(page, new RegExp(`src="${file}[?"]`), `${file} loaded`);
  }
  const order = ['data_book0_expansion.js', ...files.slice(0, 5), 'data_verbs.js', 'data_a21_library.js', 'data_a21_verbs.js'].map(file => page.indexOf(`src="${file}`));
  assert.deepEqual([...order].sort((a, b) => a - b), order, 'A2.1 files load after the base data in dependency order');
});

test('chapter quiz shows the options in a random order and still checks the right one', () => {
  const { quizOptionOrder } = loadFunctions(['quizOptionOrder']);
  const values = [0.9, 0.1, 0.5, 0.3];
  let call = 0;
  const order = Array.from(quizOptionOrder(3, () => values[call++ % values.length]));
  assert.deepEqual([...order].sort(), [0, 1, 2], 'every option appears once');
  const positions = new Set();
  for (let seed = 0; seed < 40; seed += 1) {
    let step = 0;
    const random = () => ((seed * 0.6180339887 + (step += 1) * 0.4142135623) % 1);
    positions.add(Array.from(quizOptionOrder(3, random)).indexOf(0));
  }
  assert.equal(positions.size, 3, 'the first-written option lands on every position');
  const source = functionSource('initQuiz');
  assert.match(source, /quizOptionOrder\(q\.o\.length\)/);
  assert.match(source, /\+b\.dataset\.o===q\.a/, 'the right button is found by its original index');
});

test('dialogue playback finds the chapter by route, so A1 and A2 chapter 1 stay apart', () => {
  assert.match(functionSource('conversationsHtml'), /chapter\.route\|\|`k\$\{chapter\.num\}`/);
  assert.match(functionSource('playDialogue'), /item\.route\|\|`k\$\{item\.num\}`/);
});

test('A1 exam training is complete, original and routed like the other levels', () => {
  const win = loadA11Data(['data_exam_a1.js']);
  const exam = win.A1_EXAM;
  assert.deepEqual(Object.keys(exam.modules), ['lesen', 'hoeren', 'schreiben', 'sprechen']);
  for (const id of ['lesen', 'hoeren']) {
    const questions = exam.modules[id].parts.flatMap(part => part.questions);
    assert.equal(questions.length, 15, `${id} should have 15 questions`);
    questions.forEach(question => {
      assert.ok(Number.isInteger(question.a) && question.a >= 0 && question.a < question.o.length, question.q);
      assert.equal(new Set(question.o).size, question.o.length, question.q);
    });
  }
  exam.modules.lesen.parts.forEach(part => assert.ok(part.title && part.instruction && part.text, part.title));
  exam.modules.hoeren.parts.forEach(part => {
    assert.ok(part.id && part.script.length > 250 && part.plays >= 1, part.title);
  });
  assert.equal(new Set(exam.modules.hoeren.parts.map(part => part.id)).size, 3, 'listening parts need unique ids');
  assert.equal(exam.modules.schreiben.tasks.length, 2);
  exam.modules.schreiben.tasks.forEach(task => assert.ok(task.prompt && task.model && task.minWords > 0 && task.checklist.length >= 4));
  assert.equal(exam.modules.sprechen.tasks.length, 3);
  exam.modules.sprechen.tasks.forEach(task => assert.ok(task.prompt && task.help.length >= 3 && task.prep > 0 && task.speak > 0));
  assert.ok(exam.modules.sprechen.checklist.length >= 5);
  assert.deepEqual(['lesen', 'hoeren', 'schreiben', 'sprechen'].map(id => exam.modules[id].points), [25, 25, 25, 25]);

  const games = loadFunctions(['gameScoresKey']);
  assert.equal(vm.runInContext("let gameLevel='a1';gameScoresKey()", games), 'a1GameBestScores');
  const exams = loadFunctions(['examScoresKey']);
  assert.equal(vm.runInContext("let examLevel='a1';examScoresKey()", exams), 'a1ExamScores');
  for (const route of ['a1/games', 'a1/exam']) assert.ok(html.includes(`h==='${route}'`), `router misses ${route}`);
  assert.match(html, /a1\\\/games\\\/\(speed\|memory\|artikel\|sentence\)/);
  assert.match(html, /a1\\\/exam\\\/\(lesen\|hoeren\|schreiben\|sprechen\)/);
  const ui = readFileSync(join(root, 'app', 'ui-next.js'), 'utf8');
  assert.match(ui, /\['exam','Prüfung','a1\/exam'\]/);
  assert.match(ui, /\['games','Training','a1\/games'\]/);
  assert.match(readFileSync(join(root, 'app', 'sw.js'), 'utf8'), /'data_exam_a1\.js'/);
  assert.match(readFileSync(join(root, 'app', 'index.html'), 'utf8'), /src="data_exam_a1\.js"/);
  assert.equal(vm.runInContext("fallbackBackTarget('a1/exam/lesen')", loadFunctions(['fallbackBackTarget'])), 'a1/exam');
  assert.equal(vm.runInContext("fallbackBackTarget('a1/games')", loadFunctions(['fallbackBackTarget'])), 'a1');
});

test('the sentence puzzle only uses one clean sentence at a time', () => {
  const { plainText: _unused, isPuzzleSentence } = (() => {
    const context = vm.createContext({ plainText: value => String(value) });
    vm.runInContext(`${functionSource('isPuzzleSentence')}\nthis.isPuzzleSentence=isPuzzleSentence;`, context);
    return context;
  })();
  assert.equal(isPuzzleSentence('Ich nehme das Schnitzel mit Pommes.'), true);
  assert.equal(isPuzzleSentence('Ich nehme das Schnitzel. / Für mich eine Suppe.'), false);
  assert.equal(isPuzzleSentence('Wie heißt du? – Ich heiße Niklas.'), false);
  assert.equal(isPuzzleSentence('Hallo!'), false);
  assert.equal(isPuzzleSentence('Gehen Sie bis zur Brücke und dann rechts.'), true);
});

/* ---------- B1.2 (Netzwerk neu B1.2, chapters 7-12) ---------- */
const B11_FILES = ['data_b1_1.js', 'data_b1_1_lessons.js', 'data_b1_1_conversations.js'];
const B12_FILES = [...B11_FILES, 'data_b1_2_vocab.js', 'data_b1_2_lessons.js', 'data_b1_2_conversations.js'];

test('B1.2 Arabic covers vocabulary explanations, examples and reading questions and answers', () => {
  const win = loadA11Data(B12_FILES);
  let words = 0;
  let questions = 0;
  for (const chapter of win.B1_BOOK.filter(item => item.num >= 7)) {
    assert.match(chapter.titleAr, ARABIC);
    assert.match(chapter.subtitleAr, ARABIC);
    assert.match(chapter.visual.captionAr, ARABIC);
    assert.match(chapter.vocabSummary.titleAr, ARABIC);
    assert.match(chapter.vocabSummary.noteAr, ARABIC);
    assert.equal(chapter.badgesAr.length, chapter.badges.length);
    chapter.badgesAr.forEach(text => assert.match(text, ARABIC));
    chapter.vocab.forEach(word => {
      for (const field of ['ar', 'dAr', 'exAr', 'catAr']) assert.match(word[field], ARABIC, `${chapter.num}: ${word.w} ${field}`);
      words++;
    });
    chapter.readings.forEach(reading => {
      assert.match(reading.titleAr, ARABIC);
      assert.match(reading.kindAr, ARABIC);
      assert.equal(reading.ar.split('<br><br>').length, reading.text.split('<br><br>').length, `${chapter.num}: ${reading.title} paragraph coverage`);
      reading.questions.forEach(([q, answer, qAr, answerAr]) => {
        assert.ok(q && answer);
        assert.match(qAr, ARABIC);
        assert.match(answerAr, ARABIC);
        questions++;
      });
    });
    chapter.quiz.forEach(question => {
      assert.match(question.qAr, ARABIC);
      assert.equal(question.oAr.length, question.o.length);
      question.oAr.forEach(text => assert.match(text, ARABIC));
    });
  }
  assert.equal(words, 880);
  assert.equal(questions, 120);
});

test('B1 titles are translated in the lesson list, chapter menu, header and all reading headings', () => {
  const win = loadA11Data(B12_FILES);
  const view = { innerHTML: '' };
  const context = vm.createContext({ window: win, B1_BOOK: win.B1_BOOK, view, location: { hash: '#b1.1/lessons' } });
  context.setTop = (title, sub, hasBack, titleAr) => { context.headerAr = titleAr; };
  vm.runInContext(html.match(/const LESSON_UI_AR=\{[\s\S]*?\n\};/)[0], context);
  vm.runInContext(html.match(/const B1_TABS = \[[\s\S]*?\n\];/)[0], context);
  for (const name of ['escapeHtml', 'ar', 'arLabel', 'chapterTabs', 'cleanTabLabel', 'chapterTabTitle', 'chapterTabDescription', 'chapterTabImage', 'renderChapterMenu', 'renderChapterTab', 'renderChapter', 'renderB1Home']) {
    vm.runInContext(`${functionSource(name)}\nthis.${name}=${name};`, context);
  }
  context.renderB1Home();
  win.B1_BOOK.forEach(chapter => {
    assert.match(chapter.titleAr, ARABIC);
    assert.ok(view.innerHTML.includes(chapter.titleAr), `lesson list title ${chapter.num}`);
  });
  for (const chapter of win.B1_BOOK.filter(c => c.num >= 7)) {
    context.renderChapterMenu(chapter);
    assert.ok(context.headerAr.includes(chapter.titleAr), `menu header ${chapter.num}`);
    assert.ok(view.innerHTML.includes('نصوص قراءة مع أسئلة وإجابات.'), `reading menu ${chapter.num}`);
    context.renderChapter(chapter, 'lesen');
    assert.ok(context.headerAr.includes(chapter.titleAr), `active header ${chapter.num}`);
    chapter.readings.forEach(reading => {
      assert.ok(view.innerHTML.includes(reading.titleAr), reading.title);
      assert.ok(view.innerHTML.includes(reading.kindAr), reading.kind);
    });
    assert.match(view.innerHTML, /<details class="ar ar-long"[^>]* open>/, `reading translations are expanded ${chapter.num}`);
    assert.ok(view.innerHTML.includes('فهم المقروء'));
  }
});

test('Arabic labels use safe inline markup and reading expansion is optional', () => {
  const context = loadFunctions(['escapeHtml', 'ar']);
  context.location = { hash: '#b1.1/k7/lesen' };
  assert.match(context.ar('عنوان <اختبار>', { inline: true }), /^<span class="ar ar-label"[^>]*>عنوان &lt;اختبار&gt;<\/span>$/);
  const long = 'ترجمة كاملة '.repeat(40);
  assert.match(context.ar(long, { expanded: true }), /dir="rtl" open>/);
  assert.doesNotMatch(context.ar(long), / open>/);
});

test('B1.2 grammar tables, exercise prompts and solutions have Arabic support', () => {
  const win = loadA11Data(['data_b1_2_grammar_1.js', 'data_b1_2_grammar_2.js']);
  let exercises = 0;
  for (const topics of Object.values(win.B1_GRAMMAR)) for (const topic of topics) {
    topic.sections.filter(section => section.table).forEach(({ table }) => {
      assert.equal(table.headAr.length, table.head.length);
      table.headAr.forEach(text => assert.match(text, ARABIC));
      assert.equal(table.rowsAr.length, table.rows.length);
      table.rowsAr.forEach((row, i) => {
        assert.equal(row.length, table.rows[i].length);
        row.forEach(text => assert.match(text, ARABIC));
      });
    });
    topic.exercises.forEach(exercise => {
      assert.match(exercise.qAr, ARABIC, topic.id);
      if (exercise.o) {
        assert.equal(exercise.oAr.length, exercise.o.length);
        exercise.oAr.forEach(text => assert.match(text, ARABIC));
      }
      if (['gap', 'order', 'transform', 'error'].includes(exercise.type)) assert.match(exercise.solutionAr, ARABIC);
      exercises++;
    });
  }
  assert.equal(exercises, 288);
});

test('reading answers keep their Arabic inside the hidden answer container', () => {
  const { renderChapterTab } = loadFunctions(['renderChapterTab']);
  const context = vm.createContext({ ar: text => text ? `<div class="ar" lang="ar" dir="rtl">${text}</div>` : '', arLabel: () => '' });
  vm.runInContext(`${functionSource('renderChapterTab')}\nthis.render=renderChapterTab;`, context);
  const chapter = loadA11Data(B12_FILES).B1_BOOK.find(c => c.num === 7);
  const rendered = context.render(chapter, 'lesen');
  const [q, answer, qAr, answerAr] = chapter.readings[0].questions[0];
  assert.ok(rendered.includes(qAr));
  assert.ok(rendered.includes(`<div class="reading-answer">${answer}<div class="ar" lang="ar" dir="rtl">${answerAr}</div></div>`));
  assert.doesNotMatch(rendered, /class="reading-answer show"/);
  assert.ok(rendered.includes(chapter.readings[0].titleAr));
});

test('quiz shuffling keeps Arabic attached to the corresponding German option', () => {
  const area = { innerHTML: '', querySelectorAll: () => [] };
  const context = vm.createContext({ $: () => area, ar: text => text ? `<div class="ar">${text}</div>` : '', arLabel: () => '', quizOptionOrder: length => Array.from({ length }, (_, i) => length - i - 1) });
  vm.runInContext(`${functionSource('initQuiz')}\nthis.init=initQuiz;`, context);
  const question = loadA11Data(B12_FILES).B1_BOOK.find(c => c.num === 7).quiz[6];
  context.init([question]);
  question.o.forEach((option, i) => assert.ok(area.innerHTML.includes(`data-o="${i}">${option}<div class="ar">${question.oAr[i]}</div></button>`)));
  assert.ok(area.innerHTML.includes(question.qAr));
});

test('Arabic feedback follows the accepted order when two grammatical answers have opposite meanings', () => {
  const win = loadA11Data(['data_b1_2_grammar_2.js']);
  const exercise = win.B1_GRAMMAR[12][0].exercises[7];
  const context = loadFunctions(['grammarNormalize', 'grammarAnswerMatches', 'grammarFeedback']);
  const box = {};
  context.grammarExerciseIndex = new Map([['example', exercise]]);
  context.document = { querySelector: selector => selector.includes('.gx-feedback') ? box : { classList: { add() {} } } };
  context.ar = text => text || '';
  context.arLabel = () => '';
  context.escapeHtml = text => text;
  context.saveGrammarResult = () => {};
  context.updateGrammarScores = () => {};
  context.grammarFeedback('example', true, '', exercise.a[1]);
  assert.ok(box.innerHTML.includes(exercise.aAr[1]));
  assert.ok(!box.innerHTML.includes(exercise.aAr[0]));
});

test('B1.2 adds chapters 7-12 with the whole Lernwortschatz as text cards', () => {
  const win = loadA11Data(B12_FILES);
  assert.deepEqual(Array.from(win.B1_BOOK, chapter => chapter.num), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const { wordEntryId } = loadFunctions(['stableFavoriteHash', 'wordEntryId']);
  let total = 0;
  for (const chapter of win.B1_BOOK.filter(item => item.num > 6)) {
    const label = `B1.2 Kapitel ${chapter.num}`;
    assert.equal(chapter.route, `b1.1/k${chapter.num}`, `${label} lives in the B1 level`);
    assert.match(chapter.subtitle, /B1\.2/);
    assert.ok(chapter.vocab.length >= 120, `${label} has ${chapter.vocab.length} cards`);
    total += chapter.vocab.length;
    const names = chapter.vocab.map(card => card.w.replace(/^(der|die|das)\s+/, '').toLowerCase());
    assert.equal(new Set(names).size, names.length, `${label}: duplicate word`);
    chapter.vocab.forEach(card => {
      assert.ok(card.cat && !card.img, `${label}: ${card.w}`);
      assert.match(card.d, /^[A-ZÄÖÜ„].*[.!?]$/, `${label}: definition of ${card.w}`);
      assert.match(card.ex, /^[A-ZÄÖÜ„»].*[.!?]$/, `${label}: example of ${card.w}`);
      assert.ok(card.ex.trim().split(/\s+/).length <= 20, `${label}: example too long for ${card.w}`);
      assert.doesNotMatch(`${card.d} ${card.ex}`, /jmd\.|etw\./, `${label}: dictionary artefact in ${card.w}`);
      assert.match(card.ar, ARABIC, `${label}: Arabic for ${card.w}`);
    });
    const ids = new Set(chapter.vocab.map((card, index) => wordEntryId('B1.1', chapter, index, card)));
    assert.equal(ids.size, chapter.vocab.length, `${label}: word ids are unique`);
    assert.doesNotMatch(chapter.vocabSummary.note, /اقلب|صورة/, 'text cards do not flip and have no photo');
  }
  assert.ok(total >= 800, `B1.2 has ${total} cards`);
  assert.equal(loadA11Data(B11_FILES).B1_BOOK.length, 6, 'B1.1 data stays on its own');
});

test('B1.2 chapters contain complete lessons and five conversation situations', () => {
  const win = loadA11Data(B12_FILES);
  for (const chapter of win.B1_BOOK.filter(item => item.num > 6)) {
    const label = `B1.2 Kapitel ${chapter.num}`;
    assert.ok(chapter.intro.length > 80 && ARABIC.test(chapter.introAr), `${label} intro`);
    assert.ok(chapter.goals.length >= 6 && chapter.goals.every(goal => goal.de && ARABIC.test(goal.ar)), `${label} goals`);
    assert.ok(chapter.readings.length >= 3, `${label} readings`);
    chapter.readings.forEach(reading => {
      assert.ok(reading.text.length > 900 && ARABIC.test(reading.ar), `${reading.title} text`);
      assert.ok(reading.questions.length >= 4 && reading.questions.every(([q, a]) => q && a), `${reading.title} questions`);
      assert.ok(reading.glossary.length >= 5 && reading.glossary.every(([de, ar]) => de && ARABIC.test(ar)), `${reading.title} glossary`);
    });
    assert.ok(chapter.grammar.length >= 2 && chapter.grammar.every(item => item.body.includes('exbox')), `${label} grammar overview`);
    assert.ok(chapter.speaking.questions.length >= 4 && chapter.speaking.model && ARABIC.test(chapter.speaking.modelAr), `${label} speaking`);
    assert.ok(chapter.quiz.length >= 8, `${label} quiz`);
    chapter.quiz.forEach(item => {
      assert.ok(item.a >= 0 && item.a < item.o.length && new Set(item.o).size === item.o.length, item.q);
      assert.ok(item.fb && ARABIC.test(item.fbAr), item.q);
    });
    assert.equal(chapter.conversations.length, 5, `${label} conversations`);
    for (const item of chapter.conversations) {
      assert.ok(item.situation && ARABIC.test(item.situationAr));
      assert.ok(item.phrases.length >= 8 && item.dialogue.length >= 6, item.situation);
      assert.ok(new Set(item.dialogue.map(line => line.s)).size >= 2, `${item.situation}: two speakers`);
      [...item.phrases, ...item.dialogue].forEach(line => assert.ok(line.de && ARABIC.test(line.ar), `${item.situation}: ${line.de}`));
      assert.ok(item.task && ARABIC.test(item.taskAr));
      assert.ok(chapter.redemittel.some(group => group.cat === item.situation), 'phrases feed the Redemittel');
    }
    assert.ok(chapter.redemittel.length >= 8, `${label} Redemittel`);
  }
  // B1.1 chapters keep their own conversations
  assert.ok(win.B1_BOOK.filter(item => item.num <= 6).every(chapter => chapter.conversations.length === 5));
});

test('B1.2 grammar has detailed topics, varied exercises and its own label', () => {
  const win = loadA11Data(['data_b1_1_grammar_1.js', 'data_b1_1_grammar_2.js', 'data_b1_1_grammar_3.js', 'data_b1_2_grammar_1.js', 'data_b1_2_grammar_2.js']);
  const topics = [];
  for (let chapter = 7; chapter <= 12; chapter += 1) {
    assert.ok(win.B1_GRAMMAR[chapter]?.length >= 3, `Kapitel ${chapter}`);
    topics.push(...win.B1_GRAMMAR[chapter]);
  }
  const all = Object.values(win.B1_GRAMMAR).flat();
  assert.equal(new Set(all.map(topic => topic.id)).size, all.length, 'grammar ids are unique across B1');
  assert.ok(win.B1_GRAMMAR[1].length >= 2, 'B1.1 grammar stays');
  assert.ok(assertGrammarTopics(topics, 'b1-k') >= 250);
  const context = vm.createContext({ window: win });
  vm.runInContext(`${functionSource('chapterGrammar')}\nthis.chapterGrammar=chapterGrammar;`, context);
  assert.equal(context.chapterGrammar({ route: 'b1.1/k9', num: 9 })[0].id.slice(0, 6), 'b1-k9-');
  assert.equal(loadFunctions(['grammarLevelLabel']).grammarLevelLabel(topics[0].id), 'Grammatik B1.2');
});

test('B1.2 verbs extend the B1 verb reference and every file is loaded and precached', () => {
  const context = vm.createContext({ window: {}, escapeHtml: value => String(value) });
  for (const file of ['data_b1_verbs.js', 'data_b1_2_verbs.js']) {
    vm.runInContext(readFileSync(join(root, 'app', file), 'utf8'), context);
  }
  vm.runInContext(readFileSync(join(root, 'app', 'js', '15-conjugation.js'), 'utf8').replace(/^const /gm, 'var '), context);
  const verbs = context.window.B1_VERBS;
  assert.ok(verbs.filter(verb => verb.chapter >= 7).length >= 90, 'B1.2 verbs from chapters 7-12');
  assert.equal(new Set(verbs.map(verb => verb.inf)).size, verbs.length, 'no duplicate verbs');
  verbs.forEach(verb => {
    assert.ok(['haben', 'sein'].includes(verb.aux) && verb.forms.length === 6 && ARABIC.test(verb.ar), verb.inf);
    context.conjugateVerb(verb).forEach(([tense, forms]) => forms.forEach(form => assert.ok(form && !/undefined/.test(form), `${verb.inf} ${tense}`)));
  });
  const table = name => Object.fromEntries(context.conjugateVerb(verbs.find(item => item.inf === name)));
  assert.equal(table('sich streiten')['Perfekt'][0], 'habe mich gestritten');
  assert.equal(table('sich vornehmen')['Präsens'][4], 'nehmt euch vor');
  const sw = readFileSync(join(root, 'app', 'sw.js'), 'utf8');
  const page = readFileSync(join(root, 'app', 'index.html'), 'utf8');
  const files = ['data_b1_2_vocab.js', 'data_b1_2_lessons.js', 'data_b1_2_conversations.js', 'data_b1_2_grammar_1.js', 'data_b1_2_grammar_2.js', 'data_b1_2_verbs.js'];
  for (const file of files) {
    assert.match(sw, new RegExp(`'${file}'`), `${file} precached`);
    assert.match(page, new RegExp(`src="${file}[?"]`), `${file} loaded`);
  }
  const order = ['data_b1_1.js', 'data_b1_1_conversations.js', 'data_b1_verbs.js', ...files].map(file => page.indexOf(`src="${file}`));
  assert.deepEqual([...order].sort((a, b) => a - b), order, 'B1.2 files load after the B1.1 data in dependency order');
});

test('the B1 level lists B1.1 and B1.2 chapters and labels the level B1', () => {
  const home = functionSource('renderB1Home');
  assert.match(home, /B1\.1 · Kapitel 1–6/);
  assert.match(home, /B1\.2 · Kapitel 7–12/);
  assert.match(functionSource('renderChapterMenu'), /c\.num>6\?'B1\.2':'B1\.1'/);
  const ui = readFileSync(join(root, 'app', 'ui-next.js'), 'utf8');
  assert.match(ui, /function levelCode\(level\)\{\s*return level==='b1\.1'\?'B1'/);
});

test('design settings apply a saved theme, corner shape and text size', () => {
  const context = loadFunctions(['readDesignSetting', 'applyDesign']);
  const source = readFileSync(join(root, 'app', 'js', '00-theme.js'), 'utf8');
  vm.runInContext(source.slice(source.indexOf('const DESIGN_THEMES'), source.indexOf('function readDesignSetting')).replace(/const /g, 'var '), context);
  const saved = { designTheme: 'clear', designShape: 'square', designText: 'xlarge' };
  const links = [];
  context.localStorage = { getItem: key => saved[key] ?? null };
  context.document = {
    documentElement: { dataset: {} },
    head: { appendChild: link => links.push(link) },
    querySelector: () => null,
    createElement: () => ({ dataset: {} })
  };
  context.applyDesign();
  assert.deepEqual({ ...context.document.documentElement.dataset }, { theme: 'clear', shape: 'square', text: 'xlarge' });
  assert.match(links[0].href, /Atkinson\+Hyperlegible/);
  // unknown or missing values fall back to the original look
  saved.designTheme = 'neon'; saved.designShape = null; saved.designText = 'huge';
  context.applyDesign();
  assert.deepEqual({ ...context.document.documentElement.dataset }, { theme: 'original' });

  const css = readFileSync(join(root, 'app', 'styles', 'themes.css'), 'utf8');
  for (const theme of context.DESIGN_THEMES.filter(item => !['original', 'auto'].includes(item.id))) {
    assert.match(css, new RegExp(`html\\[data-theme="${theme.id}"\\] body\\{`), `${theme.id} needs its colours`);
    assert.match(css, new RegExp(`html\\[data-theme="${theme.id}"\\]\\{--shape:`), `${theme.id} needs its shape`);
  }
  // corners follow the --shape token everywhere, pills and circles excepted
  for (const file of ['app.css', 'ui-next.css']) {
    const sheet = readFileSync(join(root, 'app', 'styles', file), 'utf8');
    const fixed = (sheet.match(/radius[a-z-]*:[^;}]*/g) || []).filter(rule => /(?<![\w.(*])[1-9]\d?(?:\.\d+)?px/.test(rule.replace(/calc\([^)]*\)/g, '')));
    assert.deepEqual(fixed, [], `${file} has corners that ignore the theme shape`);
  }
  const html = readFileSync(join(root, 'app', 'index.html'), 'utf8');
  assert.ok(html.indexOf('js/00-theme.js') < html.indexOf('</head>'), 'the theme applies before the first paint');
});

test('the night theme stylesheet is generated from the current stylesheets', () => {
  // theme-night.css re-emits every colour rule of app.css and ui-next.css;
  // editing those without running the generator would leave light patches.
  const { build, OUTPUT } = require(join(root, 'scripts', 'build_night_theme.js'));
  assert.equal(readFileSync(join(root, OUTPUT), 'utf8'), build(), 'run: node scripts/build_night_theme.js');
  const night = readFileSync(join(root, OUTPUT), 'utf8');
  const palette = readFileSync(join(root, 'app', 'styles', 'themes.css'), 'utf8');
  for (const token of new Set(night.match(/--n(?:bg|tx)-[\w-]+/g))) {
    assert.match(palette, new RegExp(`${token}:`), `${token} is used at night but has no colour`);
  }
  const theme = readFileSync(join(root, 'app', 'js', '00-theme.js'), 'utf8');
  assert.match(theme, /DARK_STYLESHEET='styles\/theme-night\.css\?v=/);
  assert.match(readFileSync(join(root, 'app', 'sw.js'), 'utf8'), /'styles\/theme-night\.css'/);
});

test('a known meaning comes only from an exact dictionary entry', () => {
  const context = loadFunctions(['normalizeWordForSearch', 'bareWordKey']);
  const translation = readFileSync(join(jsDir, '02-translation.js'), 'utf8');
  vm.runInContext(translation.slice(translation.indexOf('function knownWordTranslation('), translation.indexOf('async function requestTranslation(')), context);
  context.window = { CORE_DICTIONARY: [] };
  context.A1_VERBS = []; context.VERBS = [];
  // the loose vocabulary search finds "so" inside "sofort"
  context.findWordEntry = () => ({ key: 'so', bareKey: 'so', item: { ar: 'كده' } });
  assert.equal(context.knownWordTranslation('sofort'), null);
  assert.equal(context.knownWordTranslation('Ab sofort'), null);
  assert.equal(context.knownWordTranslation('So'), 'كده');
});

test('one tap finds the whole word under the finger', () => {
  const source = readFileSync(join(jsDir, '20-tap-translate.js'), 'utf8');
  const context = loadFunctions(['wordRangeAt']);
  vm.runInContext(source.match(/const TAP_WORD=.*;/)[0].replace('const ', 'var '), context);
  const node = { nodeType: 3, textContent: 'Wollen Sie flexibel sein? E-Scooter!' };
  let box = { left: 0, right: 100, top: 0, bottom: 20 };
  context.document = {
    createRange: () => ({
      setStart(n, offset) { this.start = offset; }, setEnd(n, offset) { this.end = offset; },
      toString() { return node.textContent.slice(this.start, this.end); },
      getBoundingClientRect: () => box
    })
  };
  const tapAt = offset => { context.caretAt = () => ({ startContainer: node, startOffset: offset }); return context.wordRangeAt(50, 10); };
  assert.equal(tapAt(13).toString(), 'flexibel');
  assert.equal(tapAt(30).toString(), 'E-Scooter');
  assert.equal(tapAt(25), null, 'a tap on space or punctuation is not a word');
  box = { left: 120, right: 200, top: 0, bottom: 20 };
  assert.equal(tapAt(13), null, 'the caret snapped to a word away from the finger');

  assert.match(source, /const TAP_SKIP=\[\s*'button','a','input'/, 'controls keep their own tap');
  assert.match(source, /\[tabindex\]:not\(\[tabindex="-1"\]\)/);
  const app = readFileSync(join(root, 'app', 'index.html'), 'utf8');
  for (const id of ['translationSheet', 'ttWord', 'ttMeaning', 'ttSentence', 'ttSentenceResult', 'ttSentenceBtn', 'ttMore', 'ttFavorite', 'ttClose', 'ttSpeak']) {
    assert.match(app, new RegExp(`id="${id}"`), `${id} is missing`);
  }
  // a selection opens the same sheet, away from the browser's copy/share menu
  assert.match(functionSource('captureSelection'), /showTranslationSheet\(data\)/);
  const sw = readFileSync(join(root, 'app', 'sw.js'), 'utf8');
  assert.match(sw, /'js\/20-tap-translate\.js','js\/21-settings\.js'/);
});

test('every settings row belongs to one of the settings sections', () => {
  const app = readFileSync(join(root, 'app', 'index.html'), 'utf8');
  const panel = app.slice(app.indexOf('id="settingsModal"'), app.indexOf('id="translationModal"'));
  const tabs = [...panel.matchAll(/data-settings-tab="([\w-]+)"/g)].map(match => match[1]);
  assert.deepEqual(tabs, ['design', 'voice', 'translate', 'general']);
  const rows = panel.match(/class="setting-row[^"]*"[^>]*>/g);
  assert.ok(rows.length >= 6);
  for (const row of rows) {
    const section = row.match(/data-settings-section="([\w-]+)"/)?.[1];
    assert.ok(tabs.includes(section), `${row} has no settings section`);
  }
  const ui = readFileSync(join(root, 'app', 'ui-next.js'), 'utf8');
  for (const row of ui.match(/class="setting-row[^"]*"[^>]*>/g) || []) assert.match(row, /data-settings-section="(design|general)"/);
  for (const key of ['tapTranslate', 'selectTranslate']) assert.match(panel, new RegExp(`data-setting-switch="${key}"`));
});

test('Shadowing and Diktat sentences are generated from the current chapters', () => {
  const { build, OUTPUT, usable } = require(join(root, 'scripts', 'build_practice_sentences.js'));
  assert.equal(readFileSync(join(root, OUTPUT), 'utf8'), build(), 'run: node scripts/build_practice_sentences.js');
  const context = { window: {} };
  vm.runInNewContext(readFileSync(join(root, OUTPUT), 'utf8'), context);
  const practice = context.window.PRACTICE_SENTENCES;
  for (const level of ['a1', 'a2', 'b1']) {
    assert.equal(practice[level].length, 12, `${level} has every chapter`);
    for (const chapter of practice[level]) {
      assert.ok(chapter.sentences.length >= 20, `${level} Kapitel ${chapter.num} has enough sentences`);
      assert.ok(chapter.sentences.every(item => usable(item.de)));
    }
  }
  assert.ok(practice.a2.flatMap(chapter => chapter.sentences).filter(item => item.rec).length > 200, 'A2 sentences use the recordings');
  assert.equal(usable('Ich komme aus … / Ich lebe in …'), false);
  assert.equal(usable('Wo ist ___?'), false);
  assert.equal(usable('Ich lerne Deutsch.'), true);
  const sw = readFileSync(join(root, 'app', 'sw.js'), 'utf8');
  for (const file of ['data_practice.js', 'js/22-practice.js', 'js/23-videos.js', 'styles/practice.css']) assert.ok(sw.includes(`'${file}'`), `${file} is not precached`);
});

test('Diktat marks every word and the pronunciation check counts the heard words', () => {
  const { diktatCompare, speakingScore } = loadFunctions(['practiceWords', 'editDistance', 'diktatCompare', 'speakingScore']);
  const perfect = diktatCompare('Ich fahre mit dem Bus.', 'Ich fahre mit dem Bus');
  assert.equal(perfect.score, 100, 'punctuation does not count');
  const mixed = diktatCompare('Ich fahre mit dem Bus zur Arbeit.', 'ich fahre mit Bus zur arbiet extra');
  assert.deepEqual([...mixed.words.map(word => word.status)], ['case', 'ok', 'ok', 'missing', 'ok', 'ok', 'typo', 'extra']);
  assert.ok(mixed.score > 50 && mixed.score < 90);
  assert.equal(diktatCompare('Die Straße ist lang.', 'Die Strasse ist lang').words[1].status, 'typo');
  assert.equal(diktatCompare('Hallo', 'Tschüss').words[0].status, 'wrong');

  const heard = speakingScore('Kannst du mir sagen, wo die Haltestelle ist?', 'kannst du mir sagen wo die Haltestelle')
  assert.equal(heard.score, 88);
  assert.deepEqual([...heard.words.filter(word => !word.ok).map(word => word.word)], ['ist']);
  assert.equal(speakingScore('Ich heiße Amira.', 'ich heiße amira').score, 100);
});

test('video links in any YouTube form become a video or a playlist', () => {
  const { parseYouTubeLink } = loadFunctions(['parseYouTubeLink']);
  const id = '4-eDoThe6qo';
  for (const link of [`https://www.youtube.com/watch?v=${id}&t=30s`, `https://youtu.be/${id}`, `https://m.youtube.com/watch?v=${id}`,
    `https://www.youtube.com/shorts/${id}`, `https://www.youtube.com/embed/${id}`, id]) {
    assert.deepEqual({ ...parseYouTubeLink(link) }, { yt: id }, link);
  }
  assert.deepEqual({ ...parseYouTubeLink('https://www.youtube.com/playlist?list=PLs7zUO7VPyJ5DV1iBRgSw2uDl832n0bLg') }, { list: 'PLs7zUO7VPyJ5DV1iBRgSw2uDl832n0bLg' });
  assert.equal(parseYouTubeLink('https://example.com/video'), null);
  const source = readFileSync(join(jsDir, '23-videos.js'), 'utf8');
  const library = [...source.matchAll(/\{key:'([\w-]+)',level:'(a1|a2|b1|all)',(?:yt:'([\w-]{11})'|list:'([\w-]{10,})')/g)];
  assert.ok(library.length >= 10, 'every level has videos');
  assert.equal(new Set(library.map(match => match[1])).size, library.length, 'keys are unique');
  for (const level of ['a1', 'a2', 'b1']) assert.ok(library.some(match => match[2] === level), `${level} has videos`);
});

test('the Üben routes are wired into the router, the menu and the back button', () => {
  const { fallbackBackTarget } = loadFunctions(['fallbackBackTarget']);
  assert.equal(fallbackBackTarget('practice/shadow/a2/7'), 'practice/shadow/a2');
  assert.equal(fallbackBackTarget('practice/diktat/b1'), 'practice');
  assert.equal(fallbackBackTarget('videos/play/nico-a1'), 'videos');
  assert.equal(fallbackBackTarget('videos'), 'practice');
  assert.equal(fallbackBackTarget('my-words'), 'practice');
  assert.equal(fallbackBackTarget('practice'), '');
  assert.match(functionSource('renderCurrentRoute'), /routePractice\(h\)\|\|routeVideos\(h\)/);
  const ui = readFileSync(join(root, 'app', 'ui-next.js'), 'utf8');
  assert.match(ui, /\{id:'practice',label:'Üben',route:'practice'/);
  const app = readFileSync(join(root, 'app', 'index.html'), 'utf8');
  assert.ok(app.indexOf('js/22-practice.js') > app.indexOf('js/20-tap-translate.js'), 'Meine Wörter is filled from the translation sheet');
  assert.match(app, /data-setting-switch="tapSpeak" data-setting-default="off"/);
});
