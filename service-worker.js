"use strict";var precacheConfig=[["E:/网站搭建/myblog/public/about/index.html","732dffb186dae77184c1782ff416ebf0"],["E:/网站搭建/myblog/public/archives/2020/10/index.html","7288741230e17a3701dc8cfcabaad3be"],["E:/网站搭建/myblog/public/archives/2020/11/index.html","e00ab0558d17cd47299439c932bfbd97"],["E:/网站搭建/myblog/public/archives/2020/12/index.html","27b61bbeb48a7633021f7d4b010a5dee"],["E:/网站搭建/myblog/public/archives/2020/index.html","c3a44c13f38b35aebb23d6fdaba5ac9d"],["E:/网站搭建/myblog/public/archives/2021/01/index.html","4766bad096ca5a3b062ee6ebf5edd990"],["E:/网站搭建/myblog/public/archives/2021/02/index.html","49820a4a5a80728d55ad848108e4858c"],["E:/网站搭建/myblog/public/archives/2021/03/index.html","a0ad11ea27a7ed936fed24291ddd04dc"],["E:/网站搭建/myblog/public/archives/2021/index.html","9d3b9182ba011469722a135f291e7b9f"],["E:/网站搭建/myblog/public/archives/index.html","fe5a2e2e1af83321624742b704ad8a42"],["E:/网站搭建/myblog/public/archives/page/2/index.html","9a3b60ce2513233902fffae0222c8837"],["E:/网站搭建/myblog/public/css/index.css","4ba40f74967a5db2b303963823f39f7a"],["E:/网站搭建/myblog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/网站搭建/myblog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/网站搭建/myblog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/网站搭建/myblog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/网站搭建/myblog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/网站搭建/myblog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/网站搭建/myblog/public/index.html","6aa64d4e8043da9c02e86a7ab0744f41"],["E:/网站搭建/myblog/public/js/main.js","455fface5a0a3ff90766ca254affe502"],["E:/网站搭建/myblog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["E:/网站搭建/myblog/public/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["E:/网站搭建/myblog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["E:/网站搭建/myblog/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["E:/网站搭建/myblog/public/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["E:/网站搭建/myblog/public/messageboard/index.html","c2d963b02428711c4c77bf9a5985b443"],["E:/网站搭建/myblog/public/page/2/index.html","98b4fd40ab460d0b4c541ef5bc3da223"],["E:/网站搭建/myblog/public/posts/14571/index.html","c0b7f69f514522033fda8c505a9836eb"],["E:/网站搭建/myblog/public/posts/14827/index.html","b98fc73f22a274e0de3fece3c56d62ad"],["E:/网站搭建/myblog/public/posts/16692/index.html","bd015110163f38c937411fcface2174c"],["E:/网站搭建/myblog/public/posts/16813/index.html","b4d20f773052716d4fcadbba0ee7b740"],["E:/网站搭建/myblog/public/posts/24632/index.html","30e8a272f1d4cbbe9abaee7aaeab1c11"],["E:/网站搭建/myblog/public/posts/25127/index.html","03e54b27eb67ee46a6a87a2589c149d5"],["E:/网站搭建/myblog/public/posts/33946/index.html","492fd6ffee6c9afda19679b02912a68f"],["E:/网站搭建/myblog/public/posts/37998/index.html","5061a6e8667b00d8014b3583694cb2d8"],["E:/网站搭建/myblog/public/posts/46463/index.html","af9c107216cd081dd3a17eb722672049"],["E:/网站搭建/myblog/public/posts/49040/index.html","a5b6f7961fa72b78ba0c5be5cc6b5519"],["E:/网站搭建/myblog/public/posts/51649/index.html","66f3fa7e8e576d28b64b54872836aa9c"],["E:/网站搭建/myblog/public/posts/55334/index.html","ea5feb8616b99952e3cc2df7ddbc6f48"],["E:/网站搭建/myblog/public/tags/AWD/index.html","0b6629d0b61e1a787cdc9a438981d51a"],["E:/网站搭建/myblog/public/tags/ctf/index.html","45df9bcd7f94743cb894fd4578d99f0e"],["E:/网站搭建/myblog/public/tags/index.html","9e1ef565bd8f636e3a5662ab48c0c2cb"],["E:/网站搭建/myblog/public/tags/渗透/index.html","847245e1467533399323141fe4f74be9"],["E:/网站搭建/myblog/public/tags/程序/index.html","e1231f3466806450e8c21ec75bc49fb9"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){e=new URL(e);return"/"===e.pathname.slice(-1)&&(e.pathname+=a),e.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,c,t){e=new URL(e);return t&&e.pathname.match(t)||(e.search+=(e.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),e.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,c){e=new URL(e);return e.hash="",e.search=e.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return c.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],e=e[1],a=new URL(a,self.location),e=createCacheKey(a,hashParamName,e,!1);return[a.toString(),e]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!c.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){var c,e,t;"GET"===a.request.method&&(c=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html",(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),e=urlsToCacheKeys.has(c)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)})))});