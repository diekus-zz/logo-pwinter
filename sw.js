// Perform install steps
var CACHE_NAME = 'pwinter-v1';
var urlsToCache = [
    'css/style.css',
    'fonts/fonts.css',
    'fonts/SamsungOne-300.woff',
    'fonts/SamsungOne-400.woff',
    'fonts/SamsungOne-600.woff',
    'fonts/SamsungOne-700.woff',
    'fonts/SamsungOne-800.woff',
    'images/pwalogo.svg',
    'images/pwinter192.png',
    'images/pwinter512.png',
    'images/pwinterlogo.svg',
    'js/pwrinter.js',
    'index.html'
];

self.addEventListener('install', function(event) {
// Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Opened cache');
        return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

self.addEventListener('activate', function(event) {

  var cacheWhitelist = ['pwinter-v1'];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});