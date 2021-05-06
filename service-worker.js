/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["E:/网站搭建/myblog/public/about/index.html","c4c1764dde1a1ea47afe9b136bc6881a"],["E:/网站搭建/myblog/public/archives/2020/10/index.html","28325645230d40be23d401d4716838f3"],["E:/网站搭建/myblog/public/archives/2020/11/index.html","7b76f3c3433c588083572864fe7b50e4"],["E:/网站搭建/myblog/public/archives/2020/12/index.html","bdd648e65136b19e4c279bf727bea2b1"],["E:/网站搭建/myblog/public/archives/2020/index.html","58dceae64aa03fed6ba362847579f570"],["E:/网站搭建/myblog/public/archives/2021/01/index.html","049cd6429c20150b1f8a6a8ea4cb9330"],["E:/网站搭建/myblog/public/archives/2021/02/index.html","73fe27b21361f7b8c0a35cb29af190c5"],["E:/网站搭建/myblog/public/archives/2021/03/index.html","5748a12344df5a680543db79361882aa"],["E:/网站搭建/myblog/public/archives/2021/index.html","c10fd57cdd491c5fe476c18f9130a494"],["E:/网站搭建/myblog/public/archives/index.html","9cbfa06b55fddea0ece989a97a862d67"],["E:/网站搭建/myblog/public/archives/page/2/index.html","519bfa099e9891e4893d7380be2ee278"],["E:/网站搭建/myblog/public/baidu_verify_code-wBfODBq71t.html","9a89030a69e351731f9a84d7d64a7bfe"],["E:/网站搭建/myblog/public/css/index.css","5624c71969eb95759eda27caf33cd80b"],["E:/网站搭建/myblog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/网站搭建/myblog/public/google24506e84d8baf7d1.html","291e6f83c04632523587a339337c4eeb"],["E:/网站搭建/myblog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/网站搭建/myblog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/网站搭建/myblog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/网站搭建/myblog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/网站搭建/myblog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/网站搭建/myblog/public/index.html","8c8afa77c8d1a46d88b15cd5671034fb"],["E:/网站搭建/myblog/public/js/main.js","8a668fa2705f6c6d88e66aa7c6e1133d"],["E:/网站搭建/myblog/public/js/search/algolia.js","fc3aa51b6e9d9ffd27f4d6958c70eee8"],["E:/网站搭建/myblog/public/js/search/local-search.js","0165554df297d6ca3be8d1fa0faf2591"],["E:/网站搭建/myblog/public/js/tw_cn.js","42c99754804dd9c3bfa2b62451c843b7"],["E:/网站搭建/myblog/public/js/utils.js","0fc7cec179399e20e287a037d85f575d"],["E:/网站搭建/myblog/public/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["E:/网站搭建/myblog/public/messageboard/index.html","5775f4b8ee403539320388885fc1646f"],["E:/网站搭建/myblog/public/page/2/index.html","8f98f84710282bf07f3e5b695e01ecab"],["E:/网站搭建/myblog/public/posts/14571/index.html","e43c8e36ac32653099adb1b23121ec51"],["E:/网站搭建/myblog/public/posts/14827/index.html","ec2bde0ce217c5bbc31ae4f534c697a9"],["E:/网站搭建/myblog/public/posts/16692/index.html","62c900a3cf819b8097d16ecb587d5069"],["E:/网站搭建/myblog/public/posts/16813/index.html","b6bfb22b1b6d6c336d77cbdf09706ed0"],["E:/网站搭建/myblog/public/posts/24632/index.html","87ab0045c86d4215b029a1eb7cbe03d0"],["E:/网站搭建/myblog/public/posts/25127/index.html","24d46b9be6f3b01a052e55834c7c5c1c"],["E:/网站搭建/myblog/public/posts/33946/index.html","284d2da827d25f2c22c9b424ee86ffda"],["E:/网站搭建/myblog/public/posts/37998/index.html","8373e1ede81555966622cae5895315e1"],["E:/网站搭建/myblog/public/posts/46463/index.html","68e1ea61ea6fd378b249b312d5a02236"],["E:/网站搭建/myblog/public/posts/49040/index.html","f2c3e9a3c3ac0e596e619aac98f1ea05"],["E:/网站搭建/myblog/public/posts/51649/index.html","0a60c8c36e457bce7f844b6adb69603c"],["E:/网站搭建/myblog/public/posts/55334/index.html","b8b92a8f753f2e8c81b8ff654a1a6e56"],["E:/网站搭建/myblog/public/tags/AWD/index.html","b9d2d57212f0ae8cf92148407163f428"],["E:/网站搭建/myblog/public/tags/ctf/index.html","19e58a6b456435adf4fa89325d98921e"],["E:/网站搭建/myblog/public/tags/index.html","33a82fa1a7eeede442b97aa10af531e4"],["E:/网站搭建/myblog/public/tags/渗透/index.html","69b4a20e2956f84ecb39d9914be12b4f"],["E:/网站搭建/myblog/public/tags/程序/index.html","56b2fef53c6656077206f522279ee5c8"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







