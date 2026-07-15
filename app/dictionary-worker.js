/* Mobile-safe offline dictionary search. Loads one small index shard and only
   the data chunks needed for the current results. */
let manifest = null;
self.OFFLINE_DICT_INDEXES = self.OFFLINE_DICT_INDEXES || {};
self.OFFLINE_DICT_CHUNKS = self.OFFLINE_DICT_CHUNKS || {};

function normalizeDictionaryText(value) {
  return String(value || '')
    .toLocaleLowerCase('de-DE')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[\u064B-\u065F\u0670]/g, '')
    .replace(/ß/g, 'ss')
    .replace(/[^A-Za-z0-9\u00C0-\u024F\u0600-\u06FF\s]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function loadManifest() {
  if (manifest) return manifest;
  importScripts('dictionary-data/manifest.js');
  manifest = self.OFFLINE_DICTIONARY_MANIFEST;
  if (!manifest?.assets?.length) throw new Error('Wörterbuch-Manifest ist ungültig.');
  return manifest;
}

function bucketFor(value) {
  const data = loadManifest();
  const bucketValue = /^[\u0600-\u06FF]/.test(value) && value.startsWith('ال') && value.length > 3 ? value.slice(2) : value;
  const prefix = [...bucketValue.slice(0, 2)];
  let hash = 0;
  for (const char of prefix) hash = (Math.imul(hash, 31) + char.codePointAt(0)) >>> 0;
  return hash % data.indexBuckets;
}

function loadIndex(language, query) {
  const bucket = bucketFor(query);
  const key = `${language}-${String(bucket).padStart(2, '0')}`;
  if (!self.OFFLINE_DICT_INDEXES[key]) importScripts(`dictionary-data/index-${key}.js`);
  const index = self.OFFLINE_DICT_INDEXES[key];
  if (!Array.isArray(index)) throw new Error('Wörterbuch-Index konnte nicht geladen werden.');

  // Safari keeps imported scripts in the worker. Retain only the current shard
  // so switching between many searches cannot grow memory without limit.
  for (const loadedKey of Object.keys(self.OFFLINE_DICT_INDEXES)) {
    if (loadedKey !== key) delete self.OFFLINE_DICT_INDEXES[loadedKey];
  }
  return index;
}

function matchingEntryIndexes(query, language, limit) {
  const pairs = loadIndex(language, query);
  const best = new Map();
  for (const [key, entryIndex, sourceRank] of pairs) {
    if (!key.includes(query)) continue;
    const matchRank = key === query ? 0 : key.startsWith(query) ? 1 : 2;
    const score = matchRank * 10 + sourceRank;
    const previous = best.get(entryIndex);
    if (!previous || score < previous.score || (score === previous.score && key.length < previous.key.length)) {
      best.set(entryIndex, { entryIndex, score, key });
    }
  }
  return [...best.values()]
    .sort((a, b) => a.score - b.score || a.key.length - b.key.length || a.entryIndex - b.entryIndex)
    .slice(0, limit)
    .map(item => item.entryIndex);
}

function loadEntries(entryIndexes) {
  const data = loadManifest();
  const chunkIds = [...new Set(entryIndexes.map(index => Math.floor(index / data.chunkSize)))];
  for (const chunkId of chunkIds) {
    if (!self.OFFLINE_DICT_CHUNKS[chunkId]) {
      importScripts(`dictionary-data/chunk-${String(chunkId).padStart(2, '0')}.js`);
    }
  }
  const entries = entryIndexes.map(index => {
    const chunkId = Math.floor(index / data.chunkSize);
    return self.OFFLINE_DICT_CHUNKS[chunkId]?.[index % data.chunkSize];
  }).filter(Boolean);
  for (const chunkId of chunkIds) delete self.OFFLINE_DICT_CHUNKS[chunkId];
  return entries;
}

function searchDictionary(value, limit = 60) {
  const query = normalizeDictionaryText(value);
  if (query.length < 2) return [];
  const language = /[\u0600-\u06ff]/.test(query) ? 'ar' : 'de';
  return loadEntries(matchingEntryIndexes(query, language, limit));
}

self.addEventListener('message', event => {
  const message = event.data || {};
  try {
    if (message.type === 'init') {
      const data = loadManifest();
      self.postMessage({ type: 'ready', meta: { entries: data.entries, version: data.version } });
      return;
    }
    if (message.type === 'search') {
      self.postMessage({
        type: 'results',
        requestId: message.requestId,
        entries: searchDictionary(message.query, message.limit)
      });
    }
  } catch (error) {
    self.postMessage({
      type: 'error',
      requestId: message.requestId,
      message: error instanceof Error ? error.message : String(error)
    });
  }
});
