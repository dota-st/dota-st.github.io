"use strict";var precacheConfig=[["E:/网站搭建/myblog/public/about/index.html","6e523ccfd8ee46e04c672dac37e5f495"],["E:/网站搭建/myblog/public/archives/2020/10/index.html","61eccdff74e81942ef8578d5c12613b0"],["E:/网站搭建/myblog/public/archives/2020/11/index.html","4dd25516869a81d5998af5e221a15bf2"],["E:/网站搭建/myblog/public/archives/2020/12/index.html","ed3067e3356454527a1bcedf1946a7bc"],["E:/网站搭建/myblog/public/archives/2020/index.html","282a1c7f7d0bc33bdffd2f20888a282f"],["E:/网站搭建/myblog/public/archives/2021/01/index.html","2605bbe3c6b2913f5b32e338dac9ce16"],["E:/网站搭建/myblog/public/archives/2021/02/index.html","3731cda6175b1749c89e872b4fd20301"],["E:/网站搭建/myblog/public/archives/2021/index.html","5550dbaff6cbdefd88929271169a6a7c"],["E:/网站搭建/myblog/public/archives/index.html","ed990e4e1994c49b1538d74b589b101d"],["E:/网站搭建/myblog/public/archives/page/2/index.html","670e5d6497bd7b28c52244dbb5f5c5fc"],["E:/网站搭建/myblog/public/css/index.css","4ba40f74967a5db2b303963823f39f7a"],["E:/网站搭建/myblog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/网站搭建/myblog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/网站搭建/myblog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/网站搭建/myblog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/网站搭建/myblog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/网站搭建/myblog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/网站搭建/myblog/public/index.html","968f82d81630272aba5e708fd92dab7f"],["E:/网站搭建/myblog/public/js/main.js","455fface5a0a3ff90766ca254affe502"],["E:/网站搭建/myblog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["E:/网站搭建/myblog/public/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["E:/网站搭建/myblog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["E:/网站搭建/myblog/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["E:/网站搭建/myblog/public/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["E:/网站搭建/myblog/public/messageboard/index.html","ca0180ee58ff9e9b7564706466e9f91f"],["E:/网站搭建/myblog/public/page/2/index.html","2c350a414b0a7f8f717de88a8a93354c"],["E:/网站搭建/myblog/public/posts/14571/index.html","51f4887cc202d14c391f0dcf6d45c685"],["E:/网站搭建/myblog/public/posts/14827/index.html","a0964b0da967b89cfe7026587349dc74"],["E:/网站搭建/myblog/public/posts/16692/index.html","7ae0f0a05ed6800d8563d2b557bc448f"],["E:/网站搭建/myblog/public/posts/16813/index.html","aadb32b96bfaf6d1c66d00a297abb25e"],["E:/网站搭建/myblog/public/posts/25127/index.html","8935b83665fbbaca19932caddb4b34b5"],["E:/网站搭建/myblog/public/posts/25992/index.html","a7c9a35375ed79f69fbb1050260d4b64"],["E:/网站搭建/myblog/public/posts/33946/index.html","00966b034ff6e50f0f75c89a2ab28c9c"],["E:/网站搭建/myblog/public/posts/37998/index.html","a78e2c148521b2f78ed1440a7da15498"],["E:/网站搭建/myblog/public/posts/46463/index.html","3788806de9cf2f0a225dd2e70e5d3b8d"],["E:/网站搭建/myblog/public/posts/49040/index.html","fe51d60b467b002af5a4fed66b04901c"],["E:/网站搭建/myblog/public/posts/51649/index.html","98be01ad8943ef9ef1f627d4701d195f"],["E:/网站搭建/myblog/public/posts/55334/index.html","e1361ec61a4f81b37cb2dc93e1ce5f2d"],["E:/网站搭建/myblog/public/tags/AWD/index.html","c0c11d82252ef3de03ffd8e151de85ec"],["E:/网站搭建/myblog/public/tags/ctf/index.html","db5b4401c4bada060ff1a0dd772e5227"],["E:/网站搭建/myblog/public/tags/curl/index.html","2bb71e3f151527fdce974480319eed12"],["E:/网站搭建/myblog/public/tags/index.html","94ab47273035facc1c070f3f1ecba237"],["E:/网站搭建/myblog/public/tags/渗透/index.html","61ad8b3e28ac84b075812a3efdd9814b"],["E:/网站搭建/myblog/public/tags/程序/index.html","f8bf8f4d648abad914d42f039df33248"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,c){e=new URL(e);return"/"===e.pathname.slice(-1)&&(e.pathname+=c),e.toString()},cleanResponse=function(c){return c.redirected?("body"in c?Promise.resolve(c.body):c.blob()).then(function(e){return new Response(e,{headers:c.headers,status:c.status,statusText:c.statusText})}):Promise.resolve(c)},createCacheKey=function(e,c,t,a){e=new URL(e);return a&&e.pathname.match(a)||(e.search+=(e.search?"&":"")+encodeURIComponent(c)+"="+encodeURIComponent(t)),e.toString()},isPathWhitelisted=function(e,c){if(0===e.length)return!0;var t=new URL(c).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){e=new URL(e);return e.hash="",e.search=e.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(c){return t.every(function(e){return!e.test(c[0])})}).map(function(e){return e.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var c=e[0],e=e[1],c=new URL(c,self.location),e=createCacheKey(c,hashParamName,e,!1);return[c.toString(),e]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var e=new Request(c,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+c+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(c,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(c){return c.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return c.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(c){var t,e,a;"GET"===c.request.method&&(t=stripIgnoredUrlParameters(c.request.url,ignoreUrlParametersMatching),a="index.html",(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,a),e=urlsToCacheKeys.has(t)),e&&c.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',c.request.url,e),fetch(c.request)})))});