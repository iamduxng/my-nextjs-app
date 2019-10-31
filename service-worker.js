self.__precacheManifest = [
  {
    "url": "https://iamduxng.github.io/my-nextjs-app//_next/static/chunks/commons.bf0ab1fdbe787e257510.js",
    "revision": "0272b90052d3dda4dae9"
  },
  {
    "url": "https://iamduxng.github.io/my-nextjs-app//_next/static/chunks/styles.fba985c71c39d5f5d5a8.js",
    "revision": "480c02444d93c4b7d6eb"
  },
  {
    "url": "https://iamduxng.github.io/my-nextjs-app//_next/static/css/styles.ed448685.chunk.css",
    "revision": "480c02444d93c4b7d6eb"
  },
  {
    "url": "https://iamduxng.github.io/my-nextjs-app//_next/static/runtime/main-29a719755c19ef6776d0.js",
    "revision": "01bce23dd0d252e91346"
  },
  {
    "url": "https://iamduxng.github.io/my-nextjs-app//_next/static/runtime/webpack-4b444dab214c6491079c.js",
    "revision": "71726f334912f74c262a"
  },
  {
    "url": "https://iamduxng.github.io/my-nextjs-app//_next/static\\G0XdcAAwnRRcuHu0p-xNo\\pages\\_app.js",
    "revision": "6d5099b709602ab74752"
  },
  {
    "url": "https://iamduxng.github.io/my-nextjs-app//_next/static\\G0XdcAAwnRRcuHu0p-xNo\\pages\\_error.js",
    "revision": "3437cf39a3ba5da608b5"
  },
  {
    "url": "https://iamduxng.github.io/my-nextjs-app//_next/static\\G0XdcAAwnRRcuHu0p-xNo\\pages\\home.js",
    "revision": "09759ca47cf71f78de53"
  },
  {
    "url": "https://iamduxng.github.io/my-nextjs-app//_next/static\\G0XdcAAwnRRcuHu0p-xNo\\pages\\posts.js",
    "revision": "2015152763f26180f512"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(.png|.jpg)$/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/https:.*min\.(css|js)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/api/, new workbox.strategies.CacheFirst({ "cacheName":"cache-apis", plugins: [new workbox.expiration.Plugin({ maxEntries: 10, maxAgeSeconds: 3600, purgeOnQuotaError: false })] }), 'GET');
