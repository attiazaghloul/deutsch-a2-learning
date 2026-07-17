/* Service Worker – Deutsch Learning (PWA)
   - App-Shell + Daten + kleine Bilder werden vorab gecacht
   - Audio/große Bilder: stale-while-revalidate (beim ersten Abruf gecacht)
   - "cache-lesson" Nachricht: cacht alle Audio-Dateien einer Lektion on-demand
   Bei Inhaltsänderungen: CACHE_VERSION erhöhen. */
importScripts('dictionary-data/manifest.js');

const CACHE_VERSION = 'v36';
const CACHE = 'deutsch-' + CACHE_VERSION;
const MEDIA_CACHE = 'deutsch-media-v1';
const DICTIONARY_CACHE = `deutsch-dictionary-v${self.OFFLINE_DICTIONARY_MANIFEST.version}`;
const DICTIONARY_ASSETS = [
  'dictionary-worker.js', 'dictionary-data/manifest.js',
  ...self.OFFLINE_DICTIONARY_MANIFEST.assets
];

const CORE = [
  './',
  'index.html',
  'manifest.json',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-512.png',
  'icons/apple-touch-icon.png',
  'dictionary-data/manifest.js',
  // JS data files
  'data_a1.js','data_a12.js','data_a1_grammar_full.js','data_a1_grammar_lessons.js','data_a1_verbs.js',
  'data_a21_library.js','data_a2_grammar_lessons.js','data_book0.js','data_book0_expansion.js','data_book1.js',
  'data_book2.js','data_lernwortschatz8.js','data_lernwortschatz9.js','dictionary-worker.js','data_enrichment.js','data_exam.js','data_extra.js','data_gram.js','data_gram_complete.js',
  'data_gram_extra.js','data_hoeren.js','data_hoeren_a1.js','data_hoeren_a1_figures.js','data_hoeren_a1_interactive.js',
  'data_hoeren_figures.js','data_hoeren_interactive.js','data_phonetik_a1.js','data_phonetik_a1_figures.js',
  'data_phonetik_a1_interactive.js','data_podcast.js','data_speech_a1.js','data_speech_clean.js','data_verbs.js',
  'ui-next.js','styles/ui-next.css',
  // Chapter covers (A2) – ~2 MB
  'assets/chapters/chapter-1.webp','assets/chapters/chapter-2.webp','assets/chapters/chapter-3.webp',
  'assets/chapters/chapter-4.webp','assets/chapters/chapter-5.webp','assets/chapters/chapter-6.webp',
  'assets/chapters/chapter-7.webp','assets/chapters/chapter-8.webp','assets/chapters/chapter-9.webp',
  'assets/chapters/chapter-10.webp','assets/chapters/chapter-11.webp','assets/chapters/chapter-12.webp',
  // Chapter covers (A1) – ~0.8 MB
  'assets/a1/chapters/chapter-1.webp','assets/a1/chapters/chapter-2.webp','assets/a1/chapters/chapter-3.webp',
  'assets/a1/chapters/chapter-4.webp','assets/a1/chapters/chapter-5.webp','assets/a1/chapters/chapter-6.webp',
  'assets/a1/chapters/chapter-7.webp','assets/a1/chapters/chapter-8.webp','assets/a1/chapters/chapter-9.webp',
  'assets/a1/chapters/chapter-10.webp','assets/a1/chapters/chapter-11.webp','assets/a1/chapters/chapter-12.webp',
  // Grammar images – ~1 MB
  'assets/grammar/lesson-1.webp','assets/grammar/lesson-2.webp','assets/grammar/lesson-3.webp',
  'assets/grammar/lesson-4.webp','assets/grammar/lesson-5.webp','assets/grammar/lesson-6.webp',
  'assets/grammar/lesson-7.webp','assets/grammar/lesson-8.webp',
  // Chapter scene images – ~1.2 MB
  'assets/chapter-scenes/chapter-1-scene-1.webp','assets/chapter-scenes/chapter-1-scene-2.webp',
  'assets/chapter-scenes/chapter-1-scene-3.webp','assets/chapter-scenes/chapter-1-scene-4.webp',
  'assets/chapter-scenes/chapter-2-scene-1.webp','assets/chapter-scenes/chapter-2-scene-2.webp',
  'assets/chapter-scenes/chapter-2-scene-3.webp','assets/chapter-scenes/chapter-2-scene-4.webp',
  'assets/chapter-scenes/chapter-3-scene-1.webp','assets/chapter-scenes/chapter-3-scene-2.webp',
  'assets/chapter-scenes/chapter-3-scene-3.webp','assets/chapter-scenes/chapter-3-scene-4.webp',
  'assets/chapter-scenes/chapter-4-scene-1.webp','assets/chapter-scenes/chapter-4-scene-2.webp',
  'assets/chapter-scenes/chapter-4-scene-3.webp','assets/chapter-scenes/chapter-4-scene-4.webp',
  'assets/chapter-scenes/chapter-5-scene-1.webp','assets/chapter-scenes/chapter-5-scene-2.webp',
  'assets/chapter-scenes/chapter-5-scene-3.webp','assets/chapter-scenes/chapter-5-scene-4.webp',
  'assets/chapter-scenes/chapter-6-scene-1.webp','assets/chapter-scenes/chapter-6-scene-2.webp',
  'assets/chapter-scenes/chapter-6-scene-3.webp','assets/chapter-scenes/chapter-6-scene-4.webp',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache =>
      Promise.allSettled(CORE.map(url => cache.add(url)))
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key =>
        key !== CACHE && key !== MEDIA_CACHE && key !== DICTIONARY_CACHE
      ).map(key => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('message', event => {
  if (event.data === 'skipWaiting') { self.skipWaiting(); return; }

  if (event.data && event.data.type === 'cache-dictionary') {
    const source = event.source;
    event.waitUntil((async () => {
      const cache = await caches.open(DICTIONARY_CACHE);
      let done = 0;
      let ok = true;
      for (const url of DICTIONARY_ASSETS) {
        try {
          const cached = await cache.match(url, { ignoreSearch: true });
          if (!cached) {
            const response = await fetch(url, { cache: 'reload' });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            await cache.put(url, response.clone());
          }
        } catch (_) { ok = false; }
        done += 1;
        source?.postMessage({ type: 'dictionary-cache-progress', done, total: DICTIONARY_ASSETS.length });
      }
      source?.postMessage({ type: 'dictionary-cached', ok });
    })());
    return;
  }

  if (event.data && event.data.type === 'dictionary-cache-status') {
    const source = event.source;
    const requestId = event.data.requestId;
    event.waitUntil((async () => {
      const cache = await caches.open(DICTIONARY_CACHE);
      let cached = 0;
      for (const url of DICTIONARY_ASSETS) {
        if (await cache.match(url, { ignoreSearch: true })) cached += 1;
      }
      source?.postMessage({
        type: 'dictionary-cache-status', requestId, cached,
        total: DICTIONARY_ASSETS.length, complete: cached === DICTIONARY_ASSETS.length
      });
    })());
    return;
  }

  // { type:'cache-lesson', urls:[...] } – on-demand audio pre-cache
  if (event.data && event.data.type === 'cache-lesson') {
    const urls = [...new Set(event.data.urls || [])];
    const source = event.source;
    event.waitUntil((async () => {
      const cache = await caches.open(MEDIA_CACHE);
      let done = 0;
      let failed = 0;
      for (const rawUrl of urls) {
        try {
          const url = new URL(rawUrl, self.location.href).href;
          const cached = await cache.match(url, { ignoreSearch: true });
          if (!cached) {
            const response = await fetch(url, { cache: 'reload' });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            await cache.put(url, response.clone());
          }
        } catch (_) {
          failed += 1;
        }
        done += 1;
        source?.postMessage({ type: 'lesson-cache-progress', done, total: urls.length });
      }
      source?.postMessage({
        type: 'lesson-cached', urls, failed,
        ok: failed === 0, total: urls.length
      });
    })());
    return;
  }
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).catch(() => caches.match('index.html', { ignoreSearch: true }).then(r => r || caches.match('./', { ignoreSearch: true })))
    );
    return;
  }

  const dictionaryAsset = url.pathname.includes('/dictionary-data/');
  // Dictionary files and downloaded lesson media live in durable caches so a
  // normal app update cannot erase them. Other app assets use the versioned shell.
  event.respondWith(
    Promise.all([caches.open(CACHE), caches.open(DICTIONARY_CACHE), caches.open(MEDIA_CACHE)]).then(([shell, dictionary, media]) =>
      Promise.all([
        shell.match(req, { ignoreSearch: true }),
        dictionary.match(req, { ignoreSearch: true }),
        media.match(req, { ignoreSearch: true })
      ]).then(([shellHit, dictionaryHit, mediaHit]) => {
        const cached = shellHit || dictionaryHit || mediaHit;
        const network = fetch(req).then(res => {
          if (res && res.status === 200 && res.type === 'basic') {
            (dictionaryAsset ? dictionary : shell).put(req, res.clone());
          }
          return res;
        }).catch(() => cached);
        return cached || network;
      })
    )
  );
});
