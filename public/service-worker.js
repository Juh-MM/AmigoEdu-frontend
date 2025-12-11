const CACHE_NAME = 'amigoedu-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => {
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    // limpar caches antigos 
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    ).then(() => {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', event => {
  try {
    const url = new URL(event.request.url);
    if (url.hostname === 'localhost' && (url.port === '5173' || url.pathname.startsWith('/@vite/'))) {
      return;
    }

    if (event.request.method !== 'GET') return;

    event.respondWith(
      caches.match(event.request).then(cacheRes => {
        if (cacheRes) return cacheRes;

        return fetch(event.request).catch(err => {
          if (event.request.mode === 'navigate') {
            return caches.match('/index.html');
          }
          return new Response('Network error occurred', { status: 408, statusText: 'Network error' });
        });
      })
    );
  } catch (e) {
    console.error('SW fetch handler error', e);
  }
});
