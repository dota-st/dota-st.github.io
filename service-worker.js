"use strict";var precacheConfig=[["E:/网站搭建/myblog/public/about/index.html","4952023de88c482bcec082e31996b5c0"],["E:/网站搭建/myblog/public/archives/2020/10/index.html","b6c5df7b4e8455eea0b875c8aa3458fe"],["E:/网站搭建/myblog/public/archives/2020/11/index.html","32d926ad898adc57917d341a073cd568"],["E:/网站搭建/myblog/public/archives/2020/12/index.html","9f9751719df691890a52257850c27fc0"],["E:/网站搭建/myblog/public/archives/2020/index.html","8d5f65268843bff3d49ef227f2244a5a"],["E:/网站搭建/myblog/public/archives/2021/01/index.html","dc5fa7e589a7f87baefb81b78a89d574"],["E:/网站搭建/myblog/public/archives/2021/02/index.html","dc55db17b9f3f20272887df0e33cd0be"],["E:/网站搭建/myblog/public/archives/2021/index.html","9a7dac84f2d52ced041955bb2da82515"],["E:/网站搭建/myblog/public/archives/index.html","581329be8f9bbd968d5d446e132cecbb"],["E:/网站搭建/myblog/public/archives/page/2/index.html","f6f2e2e9bff6b3a3fe7f59d04a231586"],["E:/网站搭建/myblog/public/css/index.css","4ba40f74967a5db2b303963823f39f7a"],["E:/网站搭建/myblog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/网站搭建/myblog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/网站搭建/myblog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/网站搭建/myblog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/网站搭建/myblog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/网站搭建/myblog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/网站搭建/myblog/public/index.html","0f1d6e5e602d798762327cd0db82f709"],["E:/网站搭建/myblog/public/js/main.js","455fface5a0a3ff90766ca254affe502"],["E:/网站搭建/myblog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["E:/网站搭建/myblog/public/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["E:/网站搭建/myblog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["E:/网站搭建/myblog/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["E:/网站搭建/myblog/public/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["E:/网站搭建/myblog/public/messageboard/index.html","89a837bac107a94706d89a3eab58b7ec"],["E:/网站搭建/myblog/public/page/2/index.html","0d10a9ddc67c8d9a6df0fb3ec94b689b"],["E:/网站搭建/myblog/public/posts/14571/index.html","f5923358a3b7cbb96c1e24ab7d023ffe"],["E:/网站搭建/myblog/public/posts/14827/index.html","ca5b6cb68e62a73743812b0656135ed9"],["E:/网站搭建/myblog/public/posts/16692/index.html","cc445e07c4a25895bdaffe3f68dc5da9"],["E:/网站搭建/myblog/public/posts/16813/index.html","5943c488616209ef04462df49dc4a4fe"],["E:/网站搭建/myblog/public/posts/25127/index.html","0d642a8852b208da2160899a1ee9217f"],["E:/网站搭建/myblog/public/posts/33946/index.html","7abd1137322c64834fc36887d09a82dc"],["E:/网站搭建/myblog/public/posts/37998/index.html","89e762212746634f1e1ea93b6c4016b5"],["E:/网站搭建/myblog/public/posts/46463/index.html","06a3c7d34f041ead49591c52d2ed0ac0"],["E:/网站搭建/myblog/public/posts/49040/index.html","5e76352f5deff2ca646d4848d13f3e3a"],["E:/网站搭建/myblog/public/posts/51649/index.html","419b0177ce93b79b2b76a7e73035ba3a"],["E:/网站搭建/myblog/public/posts/55334/index.html","09073b75de1f47eb096bd95b36a86d29"],["E:/网站搭建/myblog/public/tags/AWD/index.html","f89e877efca8d96fee1e3a95eacf009b"],["E:/网站搭建/myblog/public/tags/ctf/index.html","f3f5c8451c286f579938fc22e26f99a3"],["E:/网站搭建/myblog/public/tags/index.html","fc25aa03627744ebfd3061ff9b98f776"],["E:/网站搭建/myblog/public/tags/渗透/index.html","e43b03c0948944883db3beb7bb23acbe"],["E:/网站搭建/myblog/public/tags/程序/index.html","11b871bda1121ed8a3da5cfe90190421"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,c){e=new URL(e);return"/"===e.pathname.slice(-1)&&(e.pathname+=c),e.toString()},cleanResponse=function(c){return c.redirected?("body"in c?Promise.resolve(c.body):c.blob()).then(function(e){return new Response(e,{headers:c.headers,status:c.status,statusText:c.statusText})}):Promise.resolve(c)},createCacheKey=function(e,c,a,t){e=new URL(e);return t&&e.pathname.match(t)||(e.search+=(e.search?"&":"")+encodeURIComponent(c)+"="+encodeURIComponent(a)),e.toString()},isPathWhitelisted=function(e,c){if(0===e.length)return!0;var a=new URL(c).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){e=new URL(e);return e.hash="",e.search=e.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(c){return a.every(function(e){return!e.test(c[0])})}).map(function(e){return e.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var c=e[0],e=e[1],c=new URL(c,self.location),e=createCacheKey(c,hashParamName,e,!1);return[c.toString(),e]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var e=new Request(c,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+c+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(c,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(c){return c.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return c.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(c){var a,e,t;"GET"===c.request.method&&(a=stripIgnoredUrlParameters(c.request.url,ignoreUrlParametersMatching),t="index.html",(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,t),e=urlsToCacheKeys.has(a)),e&&c.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',c.request.url,e),fetch(c.request)})))});