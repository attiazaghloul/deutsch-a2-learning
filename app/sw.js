/* Service Worker – Deutsch Learning (PWA)
   - App-Shell + Daten + kleine Bilder werden vorab gecacht
   - Audio/große Bilder: stale-while-revalidate (beim ersten Abruf gecacht)
   - "cache-lesson" Nachricht: cacht alle Audio-Dateien einer Lektion on-demand
   Bei Inhaltsänderungen: CACHE_VERSION erhöhen. */
const CACHE_VERSION = 'v14';
const CACHE = 'deutsch-' + CACHE_VERSION;

const CORE = [
  './',
  'index.html',
  'manifest.json',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-512.png',
  'icons/apple-touch-icon.png',
  // JS data files
  'data_a1.js','data_a12.js','data_a1_grammar_full.js','data_a1_grammar_lessons.js','data_a1_verbs.js',
  'data_a21_library.js','data_a2_grammar_lessons.js','data_book0.js','data_book0_expansion.js','data_book1.js',
  'data_book2.js','data_enrichment.js','data_exam.js','data_extra.js','data_gram.js','data_gram_complete.js',
  'data_gram_extra.js','data_hoeren.js','data_hoeren_a1.js','data_hoeren_a1_figures.js','data_hoeren_a1_interactive.js',
  'data_hoeren_figures.js','data_hoeren_interactive.js','data_phonetik_a1.js','data_phonetik_a1_figures.js',
  'data_phonetik_a1_interactive.js','data_podcast.js','data_speech_a1.js','data_speech_clean.js','data_verbs.js',
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
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('message', event => {
  if (event.data === 'skipWaiting') { self.skipWaiting(); return; }

  // { type:'cache-lesson', urls:[...] } – on-demand audio pre-cache
  if (event.data && event.data.type === 'cache-lesson') {
    const urls = event.data.urls || [];
    caches.open(CACHE).then(cache =>
      Promise.allSettled(
        urls.map(url =>
          cache.match(url).then(hit => hit ? null : fetch(url).then(res => {
            if (res && res.status === 200) cache.put(url, res);
          }).catch(() => {}))
        )
      )
    ).then(() => {
      if (event.source) event.source.postMessage({ type: 'lesson-cached', urls });
    });
  }
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).catch(() => caches.match('index.html').then(r => r || caches.match('./')))
    );
    return;
  }

  // stale-while-revalidate: return cache immediately, update in background
  event.respondWith(
    caches.open(CACHE).then(cache =>
      cache.match(req).then(cached => {
        const network = fetch(req).then(res => {
          if (res && res.status === 200 && res.type === 'basic') cache.put(req, res.clone());
          return res;
        }).catch(() => cached);
        return cached || network;
      })
    )
  );
});
