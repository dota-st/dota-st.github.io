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

var precacheConfig = [["E:/网站搭建/myblog/public/about/index.html","b8a23fbdb3629881dbab9b12729e2d61"],["E:/网站搭建/myblog/public/archives/2020/10/index.html","e50f2b2188f7bd158a8a5685b6d97c0d"],["E:/网站搭建/myblog/public/archives/2020/11/index.html","a914610b442a105a0d8d7f97e6610391"],["E:/网站搭建/myblog/public/archives/2020/12/index.html","236d1a19443f293d0efe1f8627a2f5c3"],["E:/网站搭建/myblog/public/archives/2020/index.html","d5b424c01be5e84916ee2a48af24b3ec"],["E:/网站搭建/myblog/public/archives/2021/01/index.html","b63c5ca167a163f8d492624b5532e935"],["E:/网站搭建/myblog/public/archives/2021/02/index.html","bd8d79908af2af0b0ceb2e4eaa31f286"],["E:/网站搭建/myblog/public/archives/2021/03/index.html","56dd4e8892f1b851102ddda420da564b"],["E:/网站搭建/myblog/public/archives/2021/06/index.html","e0a520054c3b97b3ca278167f1c0978d"],["E:/网站搭建/myblog/public/archives/2021/07/index.html","7f1eb4e6a4b71448d9908f7059c99e7d"],["E:/网站搭建/myblog/public/archives/2021/08/index.html","aee418fc58f7e37444449ceeb3769cc0"],["E:/网站搭建/myblog/public/archives/2021/09/index.html","559df3107576e499d416f02b3066b760"],["E:/网站搭建/myblog/public/archives/2021/10/index.html","f16568a98cd529c923c5b17efb467d5f"],["E:/网站搭建/myblog/public/archives/2021/11/index.html","896c6923f98df4fd4e8c121d283ee61d"],["E:/网站搭建/myblog/public/archives/2021/index.html","87b002a40aee0a4c8a5eeb02af422797"],["E:/网站搭建/myblog/public/archives/2021/page/2/index.html","2744e95581d4dfd0a83e090fe9af6964"],["E:/网站搭建/myblog/public/archives/index.html","57283b9718990e69cae8d639df16b5af"],["E:/网站搭建/myblog/public/archives/page/2/index.html","f8bcd166d2063f158a86e580bf0c7c20"],["E:/网站搭建/myblog/public/baidu_verify_code-wBfODBq71t.html","9a89030a69e351731f9a84d7d64a7bfe"],["E:/网站搭建/myblog/public/css/index.css","8958d055ff388a62d22b3a2afa7fa0e7"],["E:/网站搭建/myblog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/网站搭建/myblog/public/google24506e84d8baf7d1.html","291e6f83c04632523587a339337c4eeb"],["E:/网站搭建/myblog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/网站搭建/myblog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/网站搭建/myblog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/网站搭建/myblog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/网站搭建/myblog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/网站搭建/myblog/public/index.html","ec7ae6a8a9c37943c1394f8e7614ac82"],["E:/网站搭建/myblog/public/js/main.js","8a668fa2705f6c6d88e66aa7c6e1133d"],["E:/网站搭建/myblog/public/js/search/algolia.js","fc3aa51b6e9d9ffd27f4d6958c70eee8"],["E:/网站搭建/myblog/public/js/search/local-search.js","0165554df297d6ca3be8d1fa0faf2591"],["E:/网站搭建/myblog/public/js/tw_cn.js","42c99754804dd9c3bfa2b62451c843b7"],["E:/网站搭建/myblog/public/js/utils.js","0fc7cec179399e20e287a037d85f575d"],["E:/网站搭建/myblog/public/link/index.html","02375a39b282e03c795ee8e548e30937"],["E:/网站搭建/myblog/public/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["E:/网站搭建/myblog/public/messageboard/index.html","583beb3588a1d59c5a2cafd321a3d98b"],["E:/网站搭建/myblog/public/page/2/index.html","7609f180ab5c55c1a6e0ae6cf1a369c3"],["E:/网站搭建/myblog/public/posts/14571/index.html","9bb6555537cd0afdeeb1102ebd7c42c8"],["E:/网站搭建/myblog/public/posts/14827/index.html","7a14cc68cd2205c26bd2822af13bad0e"],["E:/网站搭建/myblog/public/posts/16692/index.html","1b27acec02481a3e422f6cbb73ba7e1b"],["E:/网站搭建/myblog/public/posts/16813/index.html","3223b3341a50ff760833a0a014f9515f"],["E:/网站搭建/myblog/public/posts/17489/index.html","c88d655a0c30354c8b42358f74b01195"],["E:/网站搭建/myblog/public/posts/20107/index.html","24648624b9b23509c592423475da7878"],["E:/网站搭建/myblog/public/posts/24632/index.html","b3f78059a0142030e5d93788ed1ca0d6"],["E:/网站搭建/myblog/public/posts/25127/index.html","41b9765bd1b88ec85bbb13d0513be157"],["E:/网站搭建/myblog/public/posts/33757/index.html","0110b95f3033d1f0b4332a82e34e0c19"],["E:/网站搭建/myblog/public/posts/33946/index.html","ad1d7a2089bc089df9632a5bc6bbfae6"],["E:/网站搭建/myblog/public/posts/3501/index.html","6342b54e0fdf0a709ad36c5e1d556f81"],["E:/网站搭建/myblog/public/posts/37998/index.html","0da736755de58e32c4042f8635778d6b"],["E:/网站搭建/myblog/public/posts/46463/index.html","8f40c7b36d8fa66b54e772e9b135be84"],["E:/网站搭建/myblog/public/posts/49040/index.html","7d291c259313674e2079bf86310d45c1"],["E:/网站搭建/myblog/public/posts/51649/index.html","a50c291ce3e295ad82dc5703c5d60d87"],["E:/网站搭建/myblog/public/posts/54640/index.html","fe95ffc10157f7e867b1746de938c460"],["E:/网站搭建/myblog/public/posts/55334/index.html","123267d7dd75e4b9a5c031729fe24685"],["E:/网站搭建/myblog/public/posts/64939/index.html","82b48524108c47b9694eeee1e0a32134"],["E:/网站搭建/myblog/public/posts/6613/index.html","cc21829ac0c1be3d198aecd5bb3454d7"],["E:/网站搭建/myblog/public/posts/997/index.html","45e212c31e797a3acadb4a36b9ac754b"],["E:/网站搭建/myblog/public/tags/AWD/index.html","f6e9407f507bbef50d40f73c43fdb802"],["E:/网站搭建/myblog/public/tags/CTF/index.html","bafa89b19a9db599038230aa2b87f55c"],["E:/网站搭建/myblog/public/tags/CTF/page/2/index.html","0b51813bf4cbe62ea616d97f188f3896"],["E:/网站搭建/myblog/public/tags/PWN/index.html","bc7d904fe521afef6fce3b31f6894379"],["E:/网站搭建/myblog/public/tags/index.html","5765b1b0232f52240e9afb8eb9093883"],["E:/网站搭建/myblog/public/tags/渗透/index.html","986af8adb1c314d1e4c373104fd9c1c1"],["E:/网站搭建/myblog/public/tags/程序/index.html","2c121a9a5c71b5c8c2b2c37acc63614a"]];
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







