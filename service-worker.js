"use strict";var precacheConfig=[["E:/网站搭建/myblog/public/about/index.html","66ce1abfe0a7126ff0045d9c5aaa151b"],["E:/网站搭建/myblog/public/archives/2020/10/index.html","a8e79a79e654f15e0f9f06c6df9beee3"],["E:/网站搭建/myblog/public/archives/2020/11/index.html","af7f132cb081e45e17d017a46a5ab617"],["E:/网站搭建/myblog/public/archives/2020/index.html","fd9b524fe1670f7f9b3ee69d857077f0"],["E:/网站搭建/myblog/public/archives/index.html","8adfd08e19f13851828771a4a30bbbf0"],["E:/网站搭建/myblog/public/css/index.css","87d0d5be955a557ba40f7a2aec57fc1b"],["E:/网站搭建/myblog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/网站搭建/myblog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/网站搭建/myblog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/网站搭建/myblog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/网站搭建/myblog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/网站搭建/myblog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/网站搭建/myblog/public/index.html","76efcb41c3bd930b1cd2a11ec384900f"],["E:/网站搭建/myblog/public/js/main.js","455fface5a0a3ff90766ca254affe502"],["E:/网站搭建/myblog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["E:/网站搭建/myblog/public/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["E:/网站搭建/myblog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["E:/网站搭建/myblog/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["E:/网站搭建/myblog/public/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["E:/网站搭建/myblog/public/messageboard/index.html","261b195aeaaec94d45233671ab1c6145"],["E:/网站搭建/myblog/public/posts/14571/index.html","56db86cc9a4429aa6557ad6fe3cea2ba"],["E:/网站搭建/myblog/public/posts/25992/index.html","7ce1c0b4996945ee8f36ff5dcbc8f6fc"],["E:/网站搭建/myblog/public/posts/33946/index.html","2321c95f1995165e061405b4d4c4beee"],["E:/网站搭建/myblog/public/posts/37998/index.html","bf4746352a5fa69fba656b2207457ea5"],["E:/网站搭建/myblog/public/posts/55334/index.html","6f7f4249193e185fbe1c9f3b4cf9f5a4"],["E:/网站搭建/myblog/public/tags/CTF/index.html","c8eebfef1b53f84e8c4f576a7c405d36"],["E:/网站搭建/myblog/public/tags/curl/index.html","fd0e0c5e3313ed7d2a5ff1deff061091"],["E:/网站搭建/myblog/public/tags/index.html","9938686872e57732e872ca4cda7ed3d3"],["E:/网站搭建/myblog/public/tags/渗透/index.html","647230e7fcdc94972b4dcdac5ceb4897"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){e=new URL(e);return"/"===e.pathname.slice(-1)&&(e.pathname+=t),e.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){e=new URL(e);return c&&e.pathname.match(c)||(e.search+=(e.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),e.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){e=new URL(e);return e.hash="",e.search=e.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],e=e[1],t=new URL(t,self.location),e=createCacheKey(t,hashParamName,e,!1);return[t.toString(),e]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){var a,e,c;"GET"===t.request.method&&(a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html",(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)})))});