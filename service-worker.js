"use strict";var precacheConfig=[["E:/网站搭建/myblog/public/about/index.html","1019d283c1fde4fe6d40ac26b7cdd132"],["E:/网站搭建/myblog/public/archives/2020/10/index.html","5bb6c83b7f534ed911bb4e0886c98d51"],["E:/网站搭建/myblog/public/archives/2020/11/index.html","33d5b57df5042f7f362c3ca2b859dee6"],["E:/网站搭建/myblog/public/archives/2020/12/index.html","e0c861673abb303fa221a39a5108cbb4"],["E:/网站搭建/myblog/public/archives/2020/index.html","b755d03eecf07d33cd9f4bfb4398f41a"],["E:/网站搭建/myblog/public/archives/index.html","04db503dadb7d7c29d5c0a0d131c4637"],["E:/网站搭建/myblog/public/css/index.css","87d0d5be955a557ba40f7a2aec57fc1b"],["E:/网站搭建/myblog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/网站搭建/myblog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/网站搭建/myblog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/网站搭建/myblog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/网站搭建/myblog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/网站搭建/myblog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/网站搭建/myblog/public/index.html","d974323f1fe501acdac4c0670ec1fe3a"],["E:/网站搭建/myblog/public/js/main.js","455fface5a0a3ff90766ca254affe502"],["E:/网站搭建/myblog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["E:/网站搭建/myblog/public/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["E:/网站搭建/myblog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["E:/网站搭建/myblog/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["E:/网站搭建/myblog/public/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["E:/网站搭建/myblog/public/messageboard/index.html","24da503641707b6a1fcb392ca7917a75"],["E:/网站搭建/myblog/public/posts/14571/index.html","64e48a0e82ead3bd16be1e60135a192c"],["E:/网站搭建/myblog/public/posts/25992/index.html","22bbd6d6de973ecddc8e7af117755c27"],["E:/网站搭建/myblog/public/posts/33946/index.html","80bdb1c08d3ecb3399dbef21371a98c6"],["E:/网站搭建/myblog/public/posts/37998/index.html","21e28b1385dfe26c4b7979946ce9e5e4"],["E:/网站搭建/myblog/public/posts/46463/index.html","ffdf3d478d5f7f88fe92f7b2a3b11b75"],["E:/网站搭建/myblog/public/posts/49040/index.html","b8c3dfde9f735ed37a61ab4aed89f1ec"],["E:/网站搭建/myblog/public/posts/55334/index.html","6419945ce870e7d890156c72b6367e54"],["E:/网站搭建/myblog/public/tags/CTF/index.html","431253665c6421bfec69ad5edb466edc"],["E:/网站搭建/myblog/public/tags/curl/index.html","b8b0747efda3d7f66ec04d8216448a4a"],["E:/网站搭建/myblog/public/tags/index.html","5b831a24d5c84620761cdf5c48c5c1fa"],["E:/网站搭建/myblog/public/tags/渗透/index.html","205b19531539551474462dcfb0483ef1"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,c){e=new URL(e);return"/"===e.pathname.slice(-1)&&(e.pathname+=c),e.toString()},cleanResponse=function(c){return c.redirected?("body"in c?Promise.resolve(c.body):c.blob()).then(function(e){return new Response(e,{headers:c.headers,status:c.status,statusText:c.statusText})}):Promise.resolve(c)},createCacheKey=function(e,c,t,n){e=new URL(e);return n&&e.pathname.match(n)||(e.search+=(e.search?"&":"")+encodeURIComponent(c)+"="+encodeURIComponent(t)),e.toString()},isPathWhitelisted=function(e,c){if(0===e.length)return!0;var t=new URL(c).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){e=new URL(e);return e.hash="",e.search=e.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(c){return t.every(function(e){return!e.test(c[0])})}).map(function(e){return e.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var c=e[0],e=e[1],c=new URL(c,self.location),e=createCacheKey(c,hashParamName,e,!1);return[c.toString(),e]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var e=new Request(c,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+c+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(c,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(c){return c.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return c.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(c){var t,e,n;"GET"===c.request.method&&(t=stripIgnoredUrlParameters(c.request.url,ignoreUrlParametersMatching),n="index.html",(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t)),e&&c.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',c.request.url,e),fetch(c.request)})))});