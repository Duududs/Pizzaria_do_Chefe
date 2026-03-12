const CACHE_NAME = "pizzaria-do-chefe-static-v1";
const IMAGE_ASSETS = [
  "/logo.png",
  "/logo_site.png",
  "/preview01.png",
  "/preview02.png",
  "/images/calabresa.png",
  "/images/frango-catupiry.png",
  "/images/hero.png",
  "/images/margherita.png",
  "/images/pepperoni.png",
  "/images/portuguesa.png",
  "/images/quatro-queijos.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(IMAGE_ASSETS)),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key)),
      ),
    ),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method !== "GET") {
    return;
  }

  const url = new URL(request.url);
  const isSameOrigin = url.origin === self.location.origin;
  const isImageRequest =
    request.destination === "image" || IMAGE_ASSETS.includes(url.pathname);

  if (!isSameOrigin || !isImageRequest) {
    return;
  }

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200) {
          return networkResponse;
        }

        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(request, responseToCache);
        });

        return networkResponse;
      });
    }),
  );
});
