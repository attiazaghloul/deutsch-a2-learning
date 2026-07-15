/* Keeps the large offline dictionary and its search index off the UI thread. */
let dictionary = null;
let germanBuckets = null;
let arabicBuckets = null;

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
  // Keep this URL identical to the key pre-cached by the service worker.
  // Safari/iOS can otherwise miss the cached response while offline.
  importScripts('data_dictionary_de_ar.js');
  dictionary = self.OFFLINE_DE_AR || { meta: { entries: 0 }, entries: [] };
  return dictionary;
}

function addBucket(bucketMap, key, index) {
  if (key.length < 2) return;
  const prefix = key.slice(0, 2);
  const bucket = bucketMap.get(prefix);
  if (bucket) bucket.push(index);
  else bucketMap.set(prefix, [index]);
}

function germanSearchKeys(entry) {
  const word = normalizeDictionaryText(entry[0]);
  const articleWord = entry[5] ? normalizeDictionaryText(`${entry[5]} ${entry[0]}`) : '';
  const forms = (entry[7] || []).map(normalizeDictionaryText);
  return [...new Set([word, articleWord, ...forms, ...word.split(' ')].filter(value => value.length >= 2))];
}

function arabicSearchKeys(entry) {
  const values = (entry[2] || []).flatMap(value => {
    const normalized = normalizeDictionaryText(value);
    const withoutArticle = normalized.startsWith('ال') ? normalized.slice(2) : '';
    return [normalized, withoutArticle, ...normalized.split(' ')];
  });
  return [...new Set(values.filter(value => value.length >= 2))];
}

function dictionaryBuckets(language) {
  const data = loadDictionary();
  if (language === 'ar' && arabicBuckets) return arabicBuckets;
  if (language === 'de' && germanBuckets) return germanBuckets;

  const buckets = new Map();
  for (let index = 0; index < data.entries.length; index += 1) {
    const entry = data.entries[index];
    const keys = language === 'ar' ? arabicSearchKeys(entry) : germanSearchKeys(entry);
    for (const key of keys) addBucket(buckets, key, index);
  }
  if (language === 'ar') arabicBuckets = buckets;
  else germanBuckets = buckets;
  return buckets;
}

function searchDictionary(value, limit = 60) {
  const data = loadDictionary();
  const query = normalizeDictionaryText(value);
  if (query.length < 2) return [];

  const arabicQuery = /[\u0600-\u06ff]/.test(query);
  const language = arabicQuery ? 'ar' : 'de';
  const candidates = dictionaryBuckets(language).get(query.slice(0, 2)) || [];
  const primaryExact = [];
  const primaryPrefix = [];
  const relatedExact = [];
  const relatedPrefix = [];
  const contains = [];

  // The old implementation normalized and scanned all 138k records for every
  // keystroke. Prefix buckets keep only numeric entry references and reduce a
  // mobile search to the small set that can actually match the typed prefix.
  for (const index of candidates) {
    const entry = data.entries[index];
    const keys = arabicQuery ? arabicSearchKeys(entry) : germanSearchKeys(entry);
    const primaryKeys = arabicQuery
      ? (entry[2] || []).flatMap(value => {
          const normalized = normalizeDictionaryText(value);
          return [normalized, normalized.startsWith('ال') ? normalized.slice(2) : ''];
        }).filter(Boolean)
      : [normalizeDictionaryText(entry[0]), entry[5] ? normalizeDictionaryText(`${entry[5]} ${entry[0]}`) : ''].filter(Boolean);
    const matching = keys.filter(key => key.includes(query));
    if (!matching.length) continue;
    if (primaryKeys.some(key => key === query)) {
      primaryExact.push(entry);
    } else if (primaryKeys.some(key => key.startsWith(query))) {
      primaryPrefix.push(entry);
    } else if (matching.some(key => key === query)) {
      relatedExact.push(entry);
    } else if (matching.some(key => key.startsWith(query))) {
      relatedPrefix.push(entry);
    } else {
      contains.push(entry);
    }
  }

  return [...new Set([...primaryExact, ...primaryPrefix, ...relatedExact, ...relatedPrefix, ...contains])].slice(0, limit);
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
