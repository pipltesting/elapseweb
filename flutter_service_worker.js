'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2694d9d7884e685de19a32cb58d04935",
"assets/AssetManifest.bin.json": "263dcea5ea66c99d79722c6749160776",
"assets/AssetManifest.json": "050300babb1a5d3dca34c5f578351807",
"assets/assets/allDone.png": "912e07a71246cded626b17c520ae806d",
"assets/assets/allDoneDark.png": "7f3f38558720abc88d069aca5399e6ec",
"assets/assets/apple.png": "df63c78ca680d1795edbdcf16f474fca",
"assets/assets/cloudScout.png": "6987e6f198145dd302df6a97e667bac9",
"assets/assets/cloudScoutDark.png": "c5ba8283b6a2e86e304b70f1e4ed302b",
"assets/assets/darkIcon.png": "d7d6702fbb0283e7149004e2f3241849",
"assets/assets/darkMail.png": "624420ee7c23bf040f2fb180b92f95ba",
"assets/assets/darkMode.png": "2efed094143b312780708f59b880e716",
"assets/assets/dg4x.png": "00cccd648b446e8384bce0576e65f06c",
"assets/assets/disabled.png": "44c559159eee3fee6ee068dcbeda0b88",
"assets/assets/enabled.png": "ff2eeb732d7bd4ebce300dfd38e95093",
"assets/assets/google.png": "80edfb993f3b2daa0cb523e97fc68b86",
"assets/assets/lg4x.png": "3f4c11f1ffdc3dc1981b331a780491c8",
"assets/assets/lightMode.png": "7691e9decbf6cfda7a957c97c6363454",
"assets/assets/lottie/setup-match-notifs.json": "f25f90bf9ebf7da3b2f2cdb9b4b90637",
"assets/assets/mail.png": "2ea0c15ae8bd9430ac1c88b984c996fd",
"assets/assets/onboardingHome.png": "6eba8b40d3a485fc91a92003aeb524ca",
"assets/assets/onboardingHomeDark.png": "88977a8cbc4ed60104ccd83ca644b7c9",
"assets/assets/onboardingMyTeam.png": "6ef9352b18cde0f8b4d085456646872c",
"assets/assets/onboardingMyTeamDark.png": "53da86600b7e7232d72b95805a1914d9",
"assets/assets/onboardingRankings.png": "20b49ea84921bbe5dbb33ddb0065809c",
"assets/assets/onboardingRankingsDark.png": "447b21166e5622b464e217c8a138819a",
"assets/assets/onboardingSchedule.png": "36fec49b20cd7d87990da00c280faf1c",
"assets/assets/onboardingScheduleDark.png": "80a1620c8061546611825034c12305a6",
"assets/assets/radio_button_checked.png": "3190b4239e77be0cfa362afb5560f4ff",
"assets/assets/radio_button_unchecked.png": "7f0892d731a6165b71216920d84467df",
"assets/assets/system.png": "38a36baefb4a1be75b964d69c27a1f1e",
"assets/assets/tournamentMode.png": "39d35ee1d837867e3220fd31cb6074d2",
"assets/FontManifest.json": "c650ecacbc5323a97d0c29e467fc2abe",
"assets/fonts/Manrope-Bold.ttf": "69258532ce99ef9abf8220e0276fff04",
"assets/fonts/Manrope-ExtraBold.ttf": "8541582abce817ab8857c51ae0a35ca9",
"assets/fonts/Manrope-Light.ttf": "9e353f65739cc41a37bed272850cf92e",
"assets/fonts/Manrope-Medium.ttf": "aa9897f9fa37c84d7b9d3d05a8a6bc07",
"assets/fonts/Manrope-Regular.ttf": "f8105661cf5923464f0db8290746d2f9",
"assets/fonts/Manrope-SemiBold.ttf": "4410f0d144bea752f9bfb5f33909e0c5",
"assets/fonts/MaterialIcons-Regular.otf": "1f54dd71a51c91321688d9fe53c407a1",
"assets/NOTICES": "2ffb6b951027998fb9af8bd7bb1f2399",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "2929081b2d61d392f9022e7400b8cb9e",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "57687f0a098288a549231a4251450900",
"icons/Icon-192.png": "2980c599a895ada2ba94fe440af3e89f",
"icons/Icon-512.png": "f9f22f09aad2a63d12ec002273bbac74",
"icons/Icon-maskable-192.png": "2980c599a895ada2ba94fe440af3e89f",
"icons/Icon-maskable-512.png": "f9f22f09aad2a63d12ec002273bbac74",
"index.html": "aa59ee7d5f5f6ccb56d5e0b3edaac605",
"/": "aa59ee7d5f5f6ccb56d5e0b3edaac605",
"main.dart.js": "bae521d2737692ece51881b3a2747894",
"manifest.json": "9152126df1fa96ae8aa0fe155835f678",
"version.json": "787eb04bebad82a1802da5762a99fd8e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
