"use strict";var precacheConfig=[["E:/网站搭建/myblog/public/about/index.html","5cb2f1114e018b393d22bc386479f405"],["E:/网站搭建/myblog/public/archives/2020/10/index.html","6232893267e341dffa8c350432277e06"],["E:/网站搭建/myblog/public/archives/2020/11/index.html","df38ab9a820bbb1dff1fe1ef9731f1c4"],["E:/网站搭建/myblog/public/archives/2020/12/index.html","d3036abbb0a2a62f60d2070b511364ab"],["E:/网站搭建/myblog/public/archives/2020/index.html","cb0b7548bf69e3c997be7f3a69bd1f55"],["E:/网站搭建/myblog/public/archives/2021/01/index.html","2057b374a1c2e811c292f70c15b3e139"],["E:/网站搭建/myblog/public/archives/2021/index.html","9dc724fe3d059cc9fde51561ce877c3b"],["E:/网站搭建/myblog/public/archives/index.html","60a619004c19afbc2725136040260210"],["E:/网站搭建/myblog/public/css/index.css","87d0d5be955a557ba40f7a2aec57fc1b"],["E:/网站搭建/myblog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/网站搭建/myblog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/网站搭建/myblog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/网站搭建/myblog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/网站搭建/myblog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/网站搭建/myblog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/网站搭建/myblog/public/index.html","f77c22aee20d1ca90883a70bb8bc8aa5"],["E:/网站搭建/myblog/public/js/main.js","455fface5a0a3ff90766ca254affe502"],["E:/网站搭建/myblog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["E:/网站搭建/myblog/public/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["E:/网站搭建/myblog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["E:/网站搭建/myblog/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["E:/网站搭建/myblog/public/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["E:/网站搭建/myblog/public/messageboard/index.html","2bb8047362b080d69d736fbb9da745ec"],["E:/网站搭建/myblog/public/posts/14571/index.html","d022fd923aea460caf69dd7aae5d120b"],["E:/网站搭建/myblog/public/posts/25127/index.html","2c283113603147d7c4831f8540d8d4a7"],["E:/网站搭建/myblog/public/posts/25992/index.html","2e1b284295c244d76c2097a58b8ab0e2"],["E:/网站搭建/myblog/public/posts/33946/index.html","9c6c4747d8955f50208ce743e4508bb4"],["E:/网站搭建/myblog/public/posts/37998/index.html","7897dbf3ffe741c977ac6d33a778808f"],["E:/网站搭建/myblog/public/posts/46463/index.html","cae13d5baf5b11b52c1f77aec7f19615"],["E:/网站搭建/myblog/public/posts/49040/index.html","301a7aeb480a09c59c93d61671bd29fc"],["E:/网站搭建/myblog/public/posts/55334/index.html","7b1eedb87e2df6b555749aee3c67a65b"],["E:/网站搭建/myblog/public/tags/CTF/index.html","8cde22c8a5f006cded32fbf88e2e002b"],["E:/网站搭建/myblog/public/tags/curl/index.html","dea091e5909e64d52a7b4517e74b63e1"],["E:/网站搭建/myblog/public/tags/index.html","c4425251d1cb5b2249a64041d58693c4"],["E:/网站搭建/myblog/public/tags/渗透/index.html","689b93693fcdd7c1cbd5cf2d8ec53ea7"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,c){e=new URL(e);return"/"===e.pathname.slice(-1)&&(e.pathname+=c),e.toString()},cleanResponse=function(c){return c.redirected?("body"in c?Promise.resolve(c.body):c.blob()).then(function(e){return new Response(e,{headers:c.headers,status:c.status,statusText:c.statusText})}):Promise.resolve(c)},createCacheKey=function(e,c,t,a){e=new URL(e);return a&&e.pathname.match(a)||(e.search+=(e.search?"&":"")+encodeURIComponent(c)+"="+encodeURIComponent(t)),e.toString()},isPathWhitelisted=function(e,c){if(0===e.length)return!0;var t=new URL(c).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){e=new URL(e);return e.hash="",e.search=e.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(c){return t.every(function(e){return!e.test(c[0])})}).map(function(e){return e.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var c=e[0],e=e[1],c=new URL(c,self.location),e=createCacheKey(c,hashParamName,e,!1);return[c.toString(),e]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var e=new Request(c,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+c+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(c,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(c){return c.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return c.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(c){var t,e,a;"GET"===c.request.method&&(t=stripIgnoredUrlParameters(c.request.url,ignoreUrlParametersMatching),a="index.html",(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,a),e=urlsToCacheKeys.has(t)),e&&c.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',c.request.url,e),fetch(c.request)})))});