"use strict";var precacheConfig=[["E:/网站搭建/myblog/public/about/index.html","62ac1a89926a221ed146dda2a4fb17da"],["E:/网站搭建/myblog/public/archives/2020/10/index.html","de39314c1a1c5b89632bd2be8a7ff395"],["E:/网站搭建/myblog/public/archives/2020/11/index.html","46ae83a31a5541416136598d561b47e4"],["E:/网站搭建/myblog/public/archives/2020/12/index.html","06acbc0b002c5b0116a3c13d9489a84c"],["E:/网站搭建/myblog/public/archives/2020/index.html","a8dae18af8c4fa69c68c50d59c1f1538"],["E:/网站搭建/myblog/public/archives/2021/01/index.html","110e746e0b1f2f279aac8a99acb3e818"],["E:/网站搭建/myblog/public/archives/2021/02/index.html","0bce2f25abbf38530726337c5139a4e2"],["E:/网站搭建/myblog/public/archives/2021/03/index.html","9350e68a15c46d489f7fc5fe30d4cc13"],["E:/网站搭建/myblog/public/archives/2021/index.html","63cbfecc5981157ec52fabf745c51ea5"],["E:/网站搭建/myblog/public/archives/index.html","b7d3ca3143e9cb3ef2bb7f87436a4bcf"],["E:/网站搭建/myblog/public/archives/page/2/index.html","61f6742f1208f4bf5eb0f6dfac447d1a"],["E:/网站搭建/myblog/public/css/index.css","4ba40f74967a5db2b303963823f39f7a"],["E:/网站搭建/myblog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/网站搭建/myblog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/网站搭建/myblog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/网站搭建/myblog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/网站搭建/myblog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/网站搭建/myblog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/网站搭建/myblog/public/index.html","ceb30bf3d123712c9a2dd6911a259884"],["E:/网站搭建/myblog/public/js/main.js","455fface5a0a3ff90766ca254affe502"],["E:/网站搭建/myblog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["E:/网站搭建/myblog/public/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["E:/网站搭建/myblog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["E:/网站搭建/myblog/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["E:/网站搭建/myblog/public/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["E:/网站搭建/myblog/public/messageboard/index.html","ccbac512cbab564fcc08503cf81410fa"],["E:/网站搭建/myblog/public/page/2/index.html","218b4fb5230675e8f58ffefc0044c87f"],["E:/网站搭建/myblog/public/posts/14571/index.html","c0b7f69f514522033fda8c505a9836eb"],["E:/网站搭建/myblog/public/posts/14827/index.html","a199ba24ce2343b0dbcf967a7fc828ce"],["E:/网站搭建/myblog/public/posts/16692/index.html","bd015110163f38c937411fcface2174c"],["E:/网站搭建/myblog/public/posts/16813/index.html","b4d20f773052716d4fcadbba0ee7b740"],["E:/网站搭建/myblog/public/posts/24632/index.html","30e8a272f1d4cbbe9abaee7aaeab1c11"],["E:/网站搭建/myblog/public/posts/25127/index.html","03e54b27eb67ee46a6a87a2589c149d5"],["E:/网站搭建/myblog/public/posts/33946/index.html","492fd6ffee6c9afda19679b02912a68f"],["E:/网站搭建/myblog/public/posts/37998/index.html","5061a6e8667b00d8014b3583694cb2d8"],["E:/网站搭建/myblog/public/posts/46463/index.html","af9c107216cd081dd3a17eb722672049"],["E:/网站搭建/myblog/public/posts/49040/index.html","a5b6f7961fa72b78ba0c5be5cc6b5519"],["E:/网站搭建/myblog/public/posts/51649/index.html","66f3fa7e8e576d28b64b54872836aa9c"],["E:/网站搭建/myblog/public/posts/55334/index.html","ea5feb8616b99952e3cc2df7ddbc6f48"],["E:/网站搭建/myblog/public/tags/AWD/index.html","ef6f92c9edd3680c479f98464da29588"],["E:/网站搭建/myblog/public/tags/ctf/index.html","0c4db73e24578a7f29f310583f9e8195"],["E:/网站搭建/myblog/public/tags/index.html","a639b726105a8a19aa092cc174ff8141"],["E:/网站搭建/myblog/public/tags/渗透/index.html","834ff17a983abe0e9c1ce4c95558568a"],["E:/网站搭建/myblog/public/tags/程序/index.html","49c5273d2d4f95094699c54a044182eb"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,c){e=new URL(e);return"/"===e.pathname.slice(-1)&&(e.pathname+=c),e.toString()},cleanResponse=function(c){return c.redirected?("body"in c?Promise.resolve(c.body):c.blob()).then(function(e){return new Response(e,{headers:c.headers,status:c.status,statusText:c.statusText})}):Promise.resolve(c)},createCacheKey=function(e,c,a,t){e=new URL(e);return t&&e.pathname.match(t)||(e.search+=(e.search?"&":"")+encodeURIComponent(c)+"="+encodeURIComponent(a)),e.toString()},isPathWhitelisted=function(e,c){if(0===e.length)return!0;var a=new URL(c).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){e=new URL(e);return e.hash="",e.search=e.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(c){return a.every(function(e){return!e.test(c[0])})}).map(function(e){return e.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var c=e[0],e=e[1],c=new URL(c,self.location),e=createCacheKey(c,hashParamName,e,!1);return[c.toString(),e]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var e=new Request(c,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+c+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(c,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(c){return c.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return c.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(c){var a,e,t;"GET"===c.request.method&&(a=stripIgnoredUrlParameters(c.request.url,ignoreUrlParametersMatching),t="index.html",(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,t),e=urlsToCacheKeys.has(a)),e&&c.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',c.request.url,e),fetch(c.request)})))});