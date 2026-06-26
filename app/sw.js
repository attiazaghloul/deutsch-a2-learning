/* Service Worker für Deutsch A2 Learning (PWA)
   - App-Shell + Daten werden vorab gecacht (Offline-Nutzung)
   - Bilder/Audio werden zur Laufzeit gecacht (stale-while-revalidate)
   Bei Inhaltsänderungen: CACHE_VERSION erhöhen. */
const CACHE_VERSION = 'v4';
const CACHE = 'deutsch-a2-' + CACHE_VERSION;

const CORE = [
  './',
  'index.html',
  'manifest.json',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-512.png',
  'icons/apple-touch-icon.png',
  // Daten-/Inhaltsdateien (für Offline-Lektionen)
  'data_a1.js','data_a12.js','data_a1_grammar_full.js','data_a1_grammar_lessons.js','data_a1_verbs.js',
  'data_a21_library.js','data_a2_grammar_lessons.js','data_book0.js','data_book0_expansion.js','data_book1.js',
  'data_book2.js','data_enrichment.js','data_exam.js','data_extra.js','data_gram.js','data_gram_complete.js',
  'data_gram_extra.js','data_hoeren.js','data_hoeren_a1.js','data_hoeren_a1_figures.js','data_hoeren_a1_interactive.js',
  'data_hoeren_figures.js','data_hoeren_interactive.js','data_phonetik_a1.js','data_phonetik_a1_figures.js',
  'data_phonetik_a1_interactive.js','data_podcast.js','data_speech_a1.js','data_speech_clean.js','data_verbs.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache =>
      // einzeln cachen, damit ein fehlendes File die Installation nicht abbricht
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
  if (event.data === 'skipWaiting') self.skipWaiting();
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // Fonts/CDN nicht abfangen

  // Seitenaufrufe: Netzwerk zuerst, sonst App-Shell aus dem Cache
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).catch(() => caches.match('index.html').then(r => r || caches.match('./')))
    );
    return;
  }

  // Sonst: stale-while-revalidate
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
