"use strict";var precacheConfig=[["E:/网站搭建/myblog/public/about/index.html","41a9c4f9114f0db0015e9b01fc76f8ec"],["E:/网站搭建/myblog/public/archives/2020/10/index.html","de2ca9e4506fd47c5f1186fc25693021"],["E:/网站搭建/myblog/public/archives/2020/11/index.html","0661b0abe6743c0220e6cc9113e843aa"],["E:/网站搭建/myblog/public/archives/2020/12/index.html","fbcf66a761658dd18287522ad433b765"],["E:/网站搭建/myblog/public/archives/2020/index.html","acde717cdab1c076234d5079d3df59f0"],["E:/网站搭建/myblog/public/archives/index.html","cd8cab53b0611eb6b8a741e8ec71f583"],["E:/网站搭建/myblog/public/css/index.css","87d0d5be955a557ba40f7a2aec57fc1b"],["E:/网站搭建/myblog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/网站搭建/myblog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/网站搭建/myblog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/网站搭建/myblog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/网站搭建/myblog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/网站搭建/myblog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/网站搭建/myblog/public/index.html","c93bd1db4a1dd9bc6eb1ad5bacf33d26"],["E:/网站搭建/myblog/public/js/main.js","455fface5a0a3ff90766ca254affe502"],["E:/网站搭建/myblog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["E:/网站搭建/myblog/public/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["E:/网站搭建/myblog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["E:/网站搭建/myblog/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["E:/网站搭建/myblog/public/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["E:/网站搭建/myblog/public/messageboard/index.html","7a70e42ab9eaa41f198ec9c96990a9a2"],["E:/网站搭建/myblog/public/posts/14571/index.html","64e48a0e82ead3bd16be1e60135a192c"],["E:/网站搭建/myblog/public/posts/25992/index.html","22bbd6d6de973ecddc8e7af117755c27"],["E:/网站搭建/myblog/public/posts/33946/index.html","80bdb1c08d3ecb3399dbef21371a98c6"],["E:/网站搭建/myblog/public/posts/37998/index.html","21e28b1385dfe26c4b7979946ce9e5e4"],["E:/网站搭建/myblog/public/posts/46463/index.html","ffdf3d478d5f7f88fe92f7b2a3b11b75"],["E:/网站搭建/myblog/public/posts/49040/index.html","f7c86747db7ae8427c5e91b22ed14ce6"],["E:/网站搭建/myblog/public/posts/55334/index.html","6419945ce870e7d890156c72b6367e54"],["E:/网站搭建/myblog/public/tags/CTF/index.html","10e250acdf607b5f051c24ad1cec9e93"],["E:/网站搭建/myblog/public/tags/curl/index.html","e676649d24760f9ba05e77f8c9d48da2"],["E:/网站搭建/myblog/public/tags/index.html","2defa23e8da1746a55c73e639cb2bb93"],["E:/网站搭建/myblog/public/tags/渗透/index.html","311539e42df5eb8b350d8059544a221c"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,c){e=new URL(e);return"/"===e.pathname.slice(-1)&&(e.pathname+=c),e.toString()},cleanResponse=function(c){return c.redirected?("body"in c?Promise.resolve(c.body):c.blob()).then(function(e){return new Response(e,{headers:c.headers,status:c.status,statusText:c.statusText})}):Promise.resolve(c)},createCacheKey=function(e,c,t,a){e=new URL(e);return a&&e.pathname.match(a)||(e.search+=(e.search?"&":"")+encodeURIComponent(c)+"="+encodeURIComponent(t)),e.toString()},isPathWhitelisted=function(e,c){if(0===e.length)return!0;var t=new URL(c).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){e=new URL(e);return e.hash="",e.search=e.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(c){return t.every(function(e){return!e.test(c[0])})}).map(function(e){return e.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var c=e[0],e=e[1],c=new URL(c,self.location),e=createCacheKey(c,hashParamName,e,!1);return[c.toString(),e]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var e=new Request(c,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+c+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(c,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(c){return c.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return c.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(c){var t,e,a;"GET"===c.request.method&&(t=stripIgnoredUrlParameters(c.request.url,ignoreUrlParametersMatching),a="index.html",(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,a),e=urlsToCacheKeys.has(t)),e&&c.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',c.request.url,e),fetch(c.request)})))});