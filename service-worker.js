"use strict";var precacheConfig=[["E:/网站搭建/myblog/public/about/index.html","be434f1b77218393027eceb76c286493"],["E:/网站搭建/myblog/public/archives/2020/10/index.html","85cd50df60fcfc270eeaf93ebf88ccef"],["E:/网站搭建/myblog/public/archives/2020/11/index.html","a62540c9ce61c056ebcaa4f3faaadb58"],["E:/网站搭建/myblog/public/archives/2020/12/index.html","0e9218cd4313d0bab7f8dc6bfdbd3d30"],["E:/网站搭建/myblog/public/archives/2020/index.html","aa1d820a270d09bdb6ddf1ff2bb39a26"],["E:/网站搭建/myblog/public/archives/2021/01/index.html","f13087d2984ad64746f090f91e25d65e"],["E:/网站搭建/myblog/public/archives/2021/index.html","1144fb638bb019d4434850492d76e843"],["E:/网站搭建/myblog/public/archives/index.html","87f06d2607078486b5766f8e826733d1"],["E:/网站搭建/myblog/public/archives/page/2/index.html","69254f578efc422bdc682e658a1fbc82"],["E:/网站搭建/myblog/public/css/index.css","4ba40f74967a5db2b303963823f39f7a"],["E:/网站搭建/myblog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/网站搭建/myblog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/网站搭建/myblog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/网站搭建/myblog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/网站搭建/myblog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/网站搭建/myblog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/网站搭建/myblog/public/index.html","5416ccf033d34eb6d56c3d997b2fbbb3"],["E:/网站搭建/myblog/public/js/main.js","455fface5a0a3ff90766ca254affe502"],["E:/网站搭建/myblog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["E:/网站搭建/myblog/public/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["E:/网站搭建/myblog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["E:/网站搭建/myblog/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["E:/网站搭建/myblog/public/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["E:/网站搭建/myblog/public/messageboard/index.html","6a86889596e7def55d3484abcef7511a"],["E:/网站搭建/myblog/public/page/2/index.html","07cf8708bb44666199b9fe4bdd37cae3"],["E:/网站搭建/myblog/public/posts/14571/index.html","eb79b40bb8ebcbf483c2fa35c445c84f"],["E:/网站搭建/myblog/public/posts/14827/index.html","b3f3c5d9c772ebcf9cd6bde1033ec336"],["E:/网站搭建/myblog/public/posts/16692/index.html","78d9ce42de8992fba7401e5bc9a8a351"],["E:/网站搭建/myblog/public/posts/25127/index.html","e7f33547797edf12d55e71acdd5ac75d"],["E:/网站搭建/myblog/public/posts/25992/index.html","2ba1244e9d729af93a19702b7aeedf0d"],["E:/网站搭建/myblog/public/posts/33946/index.html","9eec929e3b7841e8e622258a61b56994"],["E:/网站搭建/myblog/public/posts/37998/index.html","75f15505618bd5f44e67e34ae01153ce"],["E:/网站搭建/myblog/public/posts/46463/index.html","616dad1bff80c56fffa4f081c0b58121"],["E:/网站搭建/myblog/public/posts/49040/index.html","b71f708041ced1ec2d0f1d1d1f2899a2"],["E:/网站搭建/myblog/public/posts/51649/index.html","3fa8d6e7061b0d4ab4816857521276a9"],["E:/网站搭建/myblog/public/posts/55334/index.html","79613edea47e00db3ca73b1ddea47903"],["E:/网站搭建/myblog/public/tags/AWD/index.html","b29145f0b061fa4bc58288be22d29b0e"],["E:/网站搭建/myblog/public/tags/CTF/index.html","1c7bba39beb6378e8cd48b7782ba0160"],["E:/网站搭建/myblog/public/tags/curl/index.html","feddf606bb2848c7f6d1433a9dbb158a"],["E:/网站搭建/myblog/public/tags/index.html","5820a4f378aa6727a8dddafd164ef0a2"],["E:/网站搭建/myblog/public/tags/渗透/index.html","e27d66b4355c1a4bdfca57d3fe64e828"],["E:/网站搭建/myblog/public/tags/程序/index.html","f6c1ff3a2ab3e094b99cf9e397630402"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,c){e=new URL(e);return"/"===e.pathname.slice(-1)&&(e.pathname+=c),e.toString()},cleanResponse=function(c){return c.redirected?("body"in c?Promise.resolve(c.body):c.blob()).then(function(e){return new Response(e,{headers:c.headers,status:c.status,statusText:c.statusText})}):Promise.resolve(c)},createCacheKey=function(e,c,t,a){e=new URL(e);return a&&e.pathname.match(a)||(e.search+=(e.search?"&":"")+encodeURIComponent(c)+"="+encodeURIComponent(t)),e.toString()},isPathWhitelisted=function(e,c){if(0===e.length)return!0;var t=new URL(c).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){e=new URL(e);return e.hash="",e.search=e.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(c){return t.every(function(e){return!e.test(c[0])})}).map(function(e){return e.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var c=e[0],e=e[1],c=new URL(c,self.location),e=createCacheKey(c,hashParamName,e,!1);return[c.toString(),e]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var e=new Request(c,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+c+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(c,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(c){return c.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return c.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(c){var t,e,a;"GET"===c.request.method&&(t=stripIgnoredUrlParameters(c.request.url,ignoreUrlParametersMatching),a="index.html",(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,a),e=urlsToCacheKeys.has(t)),e&&c.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',c.request.url,e),fetch(c.request)})))});