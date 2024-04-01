self.addEventListener("install", function(event) {
  event.waitUntil(preLoad());
});

var preLoad = function() {
  console.log("Installing web app");
  return caches.open("offline").then(function(cache) {
    console.log("caching index and important routes");
    return cache.addAll([
      "/",
      "/DRUM_MACHINE/",
      "/offline.html",
      "/CLICKER/",
      "/news.xml",
      "/styling/",
      "/scripts/",
      "/images/",
      "/audio/",
      "/DRUM_MACHINE/",
      "/CLICKER/",
      "/SONG_KITS/"
    ]).catch(function(error) {
      console.error("Failed to cache some resources:", error);
    });
  });
};

self.addEventListener("fetch", function(event) {
  event.respondWith(checkResponse(event.request).catch(function() {
    return returnFromCache(event.request);
  }));
  event.waitUntil(addToCache(event.request));
});

var checkResponse = async function(request) {
  return new Promise(function(fulfill, reject) {
    fetch(request).then(function(response){
      if(response.status !== 404) {
        fulfill(response);
      } else {
        reject();
      }
    }, reject);
  });
};

var addToCache = async function(request) {
  return caches.open("offline").then(function (cache) {
    return fetch(request)
      .then(function (response) {
        console.log(response.url + " was cached");
        return cache.put(request, response);
      })
      .catch(function (error) {
        console.error("Failed to fetch request:", error);
      });
  });
};

var returnFromCache = async function(request) {
  return caches.open("offline").then(async function (cache) {
    return cache.match(request).then(function (matching) {
      if(!matching || matching.status === 404) {
        return cache.match("offline.html");
      } else {
        return matching;
      }
    });
  });
};