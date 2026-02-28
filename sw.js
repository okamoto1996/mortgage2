const CACHE_NAME = "mortgage-app-v27";
const urlsToCache = [
  "/mortgage2/",
  "/mortgage2/index.html",
  "/mortgage2/manifest.json",
  "/mortgage2/icon-192.png",
  "/mortgage2/icon-512.png",
  "https://cdn.jsdelivr.net/npm/chart.js"
];

// インストール時にキャッシュ
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

// 古いキャッシュ削除
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// fetch時の処理
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});