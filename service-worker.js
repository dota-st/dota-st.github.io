"use strict";var precacheConfig=[["D:/网站搭建/myblog/public/about/index.html","06f1b8550ad7c60d5e779fc15d8e2aa7"],["D:/网站搭建/myblog/public/archives/2020/10/index.html","487b847b18795090e447099770f08dfe"],["D:/网站搭建/myblog/public/archives/2020/index.html","c0eb82497a6c01cfb6c050608a4b0d57"],["D:/网站搭建/myblog/public/archives/index.html","3826f7fc191c1cc2c737cc27e21f4152"],["D:/网站搭建/myblog/public/css/index.css","cfd303a8c7a24dba107c4b836393c92e"],["D:/网站搭建/myblog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/网站搭建/myblog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/网站搭建/myblog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/网站搭建/myblog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/网站搭建/myblog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/网站搭建/myblog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/网站搭建/myblog/public/index.html","c66dd20c54e596a428033dc64286bf18"],["D:/网站搭建/myblog/public/js/main.js","455fface5a0a3ff90766ca254affe502"],["D:/网站搭建/myblog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/网站搭建/myblog/public/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["D:/网站搭建/myblog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["D:/网站搭建/myblog/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["D:/网站搭建/myblog/public/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["D:/网站搭建/myblog/public/messageboard/index.html","6e6258e90175234442cd08633aa9007f"],["D:/网站搭建/myblog/public/posts/14571/index.html","9b15d47915e0dfba6100679fba8ccc25"],["D:/网站搭建/myblog/public/posts/25992/index.html","041c2cb7bcab82519d15a090059456c1"],["D:/网站搭建/myblog/public/posts/33946/index.html","6c2f3206a8951e99b70b1feac99a41a0"],["D:/网站搭建/myblog/public/posts/55334/index.html","59b70284051a77ae79f5ccd2d8a28657"],["D:/网站搭建/myblog/public/tags/CTF/index.html","44e04e4827d5a067dfd4b45e8597d893"],["D:/网站搭建/myblog/public/tags/curl/index.html","2a68e42779bcec5e159c74e01ef63bad"],["D:/网站搭建/myblog/public/tags/index.html","09af1a7af6a88b0fe297b4739d4fc331"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){e=new URL(e);return"/"===e.pathname.slice(-1)&&(e.pathname+=t),e.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,c,n){e=new URL(e);return n&&e.pathname.match(n)||(e.search+=(e.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),e.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,c){e=new URL(e);return e.hash="",e.search=e.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return c.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],e=e[1],t=new URL(t,self.location),e=createCacheKey(t,hashParamName,e,!1);return[t.toString(),e]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!c.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){var c,e,n;"GET"===t.request.method&&(c=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html",(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,n),e=urlsToCacheKeys.has(c)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)})))});