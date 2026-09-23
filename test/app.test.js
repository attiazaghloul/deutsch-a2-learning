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
  assert.match(html, /serviceWorker\.register\('sw\.js\?v=65'/);
  assert.match(html, /sessionStorage\.setItem\('pwa-v65-reloaded','1'\)/);
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
  assert.match(html, /legacyMarkerPadding=library==='a2'&&kind==='aliases'\?0:\.085/);
  assert.match(css, /@media\(min-width:900px\)/);
  assert.match(worker, /ui-next\.js/);
  assert.match(worker, /styles\/ui-next\.css/);
  assert.match(worker, /shell\.match\(req, \{ ignoreSearch: true \}\)/, 'Versioned shell assets must resolve from cache while offline');
  assert.match(worker, /dictionary\.match\(req, \{ ignoreSearch: true \}\)/, 'Dictionary assets must resolve from their durable cache');
  assert.match(worker, /media\.match\(req, \{ ignoreSearch: true \}\)/, 'Downloaded lesson media must resolve from its durable cache');
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
  assert.match(html, /Suche im ganzen Programm/);
  assert.match(html, /downloadOfflineDictionary/);
  assert.match(serviceWorker, /DICTIONARY_CACHE/);
  assert.match(serviceWorker, /cache-dictionary/);
  assert.match(serviceWorker, /dictionary-cache-status/);
  assert.match(html, /register\('sw\.js\?v=65',\{updateViaCache:'none'\}\)/);
  assert.match(html, /addEventListener\('controllerchange'/);
  assert.match(html, /pwa-v65-reloaded/);
  assert.match(html, /controllerchange[^}]+location\.reload\(\)/s);
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
  const ui = readFileSync(join(root, 'app', 'ui-next.js'), 'utf8');
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
