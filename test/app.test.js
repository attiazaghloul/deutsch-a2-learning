const assert = require('node:assert/strict');
const { readFileSync, existsSync } = require('node:fs');
const { join } = require('node:path');
const vm = require('node:vm');
const test = require('node:test');

const root = join(__dirname, '..');
const html = readFileSync(join(root, 'app', 'index.html'), 'utf8');

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

test('fixed vocabulary speech covers every word in chapters 7, 8, 9, and 10', () => {
  const context = vm.createContext({ window: {} });
  for (const file of [
    'data_book0.js', 'data_book0_expansion.js', 'data_book1.js', 'data_book2.js',
    'data_extra.js', 'data_enrichment.js', 'data_lernwortschatz8.js',
    'data_lernwortschatz9.js', 'data_lernwortschatz10.js', 'data_speech_clean.js'
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

  assert.equal(speech.aliases.voices.length, 4);
  for (const voice of speech.aliases.voices) {
    assert.equal(voice.timings.length, speech.aliases.texts.length);
    assert.match(voice.audio, /-words\.mp3\?v=fixed-voices-3$/);
    assert.ok(existsSync(join(root, 'app', voice.audio.split('?')[0])), `Missing ${voice.audio}`);
  }
  for (const chapterNumber of [7, 8, 9, 10]) {
    const book = chapterNumber === 10 ? context.window.BOOK2 : context.window.BOOK1;
    const chapter = book.find(item => item.num === chapterNumber);
    for (const word of chapter.vocab) {
      const spoken = spokenWord(word.w);
      const index = aliasIndex.get(spoken);
      assert.notEqual(index, undefined, `Missing fixed speech for K${chapterNumber}: ${spoken}`);
      assert.ok(speech.aliases.voices.every(voice => voice.timings[index]?.length === 2));
    }
  }
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

test('lesson 7 replacement photos map to the intended vocabulary cards', () => {
  const context = vm.createContext({ window: {} });
  for (const file of ['data_book1.js', 'data_book2.js', 'data_extra.js']) {
    vm.runInContext(readFileSync(join(root, 'app', file), 'utf8'), context);
  }
  const lesson = context.window.BOOK1.find(chapter => chapter.num === 7);
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
  assert.match(worker, /CACHE_VERSION = 'v37'/);
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
  assert.match(html, /register\('sw\.js',\{updateViaCache:'none'\}\)/);
  assert.match(html, /addEventListener\('controllerchange'/);
  assert.doesNotMatch(html, /controllerchange[^}]+location\.reload\(\)/s);
});
