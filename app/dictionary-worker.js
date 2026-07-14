/* Keeps the large offline dictionary and its search index off the UI thread. */
let dictionary = null;

function normalizeDictionaryText(value) {
  return String(value || '')
    .toLocaleLowerCase('de-DE')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/ß/g, 'ss')
    .replace(/[^A-Za-z0-9\u00C0-\u024F\u0600-\u06FF\s]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function loadDictionary() {
  if (dictionary) return dictionary;

  // The generated data file targets a browser window. A worker's global scope
  // is equivalent for this read-only dataset.
  self.window = self;
  importScripts('data_dictionary_de_ar.js?v=offline-dict-1');
  dictionary = self.OFFLINE_DE_AR || { meta: { entries: 0 }, entries: [] };
  return dictionary;
}

function searchDictionary(value, limit = 60) {
  const data = loadDictionary();
  const query = normalizeDictionaryText(value);
  if (query.length < 2) return [];

  const arabicQuery = /[\u0600-\u06ff]/.test(query);
  const exact = [];
  const prefix = [];
  const contains = [];

  // Do not build a second in-memory copy of all 138k records. That eager index
  // caused severe memory pressure on mobile devices and could make the worker
  // disappear before returning a result. Scanning in the worker is slightly
  // more CPU work per query, but keeps the UI responsive and memory predictable.
  for (let index = 0; index < data.entries.length; index += 1) {
    const entry = data.entries[index];
    const word = normalizeDictionaryText(entry[0]);
    const arabicWords = arabicQuery ? (entry[2] || []).map(normalizeDictionaryText) : [];
    const haystack = arabicQuery
      ? arabicWords.join(' ')
      : normalizeDictionaryText(`${entry[0]} ${(entry[7] || []).join(' ')}`);
    if (!haystack.includes(query)) continue;

    if ((arabicQuery && arabicWords.includes(query)) || (!arabicQuery && word === query)) {
      exact.push(entry);
    } else if ((arabicQuery && arabicWords.some(value => value.startsWith(query))) || (!arabicQuery && word.startsWith(query))) {
      prefix.push(entry);
    } else if (contains.length < limit) {
      contains.push(entry);
    }

    if (exact.length + prefix.length >= limit && contains.length >= limit) break;
  }

  return [...exact, ...prefix, ...contains].slice(0, limit);
}

self.addEventListener('message', event => {
  const message = event.data || {};
  try {
    if (message.type === 'init') {
      const data = loadDictionary();
      self.postMessage({ type: 'ready', meta: data.meta });
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
