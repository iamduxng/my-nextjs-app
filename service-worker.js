self.__precacheManifest = [
  {
    "url": "/my-nextjs-app/_next/static/chunks/commons.bf0ab1fdbe787e257510.js",
    "revision": "0272b90052d3dda4dae9"
  },
  {
    "url": "/my-nextjs-app/_next/static/chunks/styles.fba985c71c39d5f5d5a8.js",
    "revision": "480c02444d93c4b7d6eb"
  },
  {
    "url": "/my-nextjs-app/_next/static/css/styles.ed448685.chunk.css",
    "revision": "480c02444d93c4b7d6eb"
  },
  {
    "url": "/my-nextjs-app/_next/static/runtime/main-29a719755c19ef6776d0.js",
    "revision": "01bce23dd0d252e91346"
  },
  {
    "url": "/my-nextjs-app/_next/static/runtime/webpack-4b444dab214c6491079c.js",
    "revision": "71726f334912f74c262a"
  },
  {
    "url": "/my-nextjs-app/_next/static\\DxK7qYZhY_n932tWZzBTP\\pages\\_app.js",
    "revision": "a8c751bc148f76e66237"
  },
  {
    "url": "/my-nextjs-app/_next/static\\DxK7qYZhY_n932tWZzBTP\\pages\\_error.js",
    "revision": "1f58e46745834da6aa5f"
  },
  {
    "url": "/my-nextjs-app/_next/static\\DxK7qYZhY_n932tWZzBTP\\pages\\home.js",
    "revision": "576f4bf10e9fe0fd485d"
  },
  {
    "url": "/my-nextjs-app/_next/static\\DxK7qYZhY_n932tWZzBTP\\pages\\posts.js",
    "revision": "7f0331662882b18bc690"
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
