"use strict";var precacheConfig=[["E:/网站搭建/myblog/public/about/index.html","8f4699cc41cc93fa8de79afb35549161"],["E:/网站搭建/myblog/public/archives/2020/10/index.html","acc08512b969a14ecc7410303920f25c"],["E:/网站搭建/myblog/public/archives/2020/11/index.html","8db19966754285a806a3ac781d11f1e3"],["E:/网站搭建/myblog/public/archives/2020/index.html","5a2e9948bca53c59c2af5588a219b523"],["E:/网站搭建/myblog/public/archives/index.html","48d38cf94b49c5ee1f581fbde27ae0af"],["E:/网站搭建/myblog/public/css/index.css","87d0d5be955a557ba40f7a2aec57fc1b"],["E:/网站搭建/myblog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/网站搭建/myblog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/网站搭建/myblog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/网站搭建/myblog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/网站搭建/myblog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/网站搭建/myblog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/网站搭建/myblog/public/index.html","ebe0910d9a0bb892358aaae438ef984a"],["E:/网站搭建/myblog/public/js/main.js","455fface5a0a3ff90766ca254affe502"],["E:/网站搭建/myblog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["E:/网站搭建/myblog/public/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["E:/网站搭建/myblog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["E:/网站搭建/myblog/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["E:/网站搭建/myblog/public/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["E:/网站搭建/myblog/public/messageboard/index.html","e84f3d4c3855d456c30e4b3d3da592e0"],["E:/网站搭建/myblog/public/posts/14571/index.html","56db86cc9a4429aa6557ad6fe3cea2ba"],["E:/网站搭建/myblog/public/posts/25992/index.html","7ce1c0b4996945ee8f36ff5dcbc8f6fc"],["E:/网站搭建/myblog/public/posts/33946/index.html","2321c95f1995165e061405b4d4c4beee"],["E:/网站搭建/myblog/public/posts/37998/index.html","bf4746352a5fa69fba656b2207457ea5"],["E:/网站搭建/myblog/public/posts/55334/index.html","200a76c960a1da11c8a6c1a2aafe0467"],["E:/网站搭建/myblog/public/tags/CTF/index.html","789b8124dd700aea025ac4b606bfbe36"],["E:/网站搭建/myblog/public/tags/curl/index.html","983cb43238732a4f04bcd62ae31d5735"],["E:/网站搭建/myblog/public/tags/index.html","c417555a779c458778161d38d3846f31"],["E:/网站搭建/myblog/public/tags/渗透/index.html","0580beeeb7c0df8572a69e4474d251bd"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){e=new URL(e);return"/"===e.pathname.slice(-1)&&(e.pathname+=a),e.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){e=new URL(e);return c&&e.pathname.match(c)||(e.search+=(e.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),e.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){e=new URL(e);return e.hash="",e.search=e.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],e=e[1],a=new URL(a,self.location),e=createCacheKey(a,hashParamName,e,!1);return[a.toString(),e]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){var t,e,c;"GET"===a.request.method&&(t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html",(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)})))});