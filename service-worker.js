"use strict";var precacheConfig=[["E:/网站搭建/myblog/public/about/index.html","9af9da642faa4609c51c99294248a03f"],["E:/网站搭建/myblog/public/archives/2020/10/index.html","fcb294cf77d5e8c987a2177387e0484c"],["E:/网站搭建/myblog/public/archives/2020/11/index.html","fd99090b81ff890b51dbcc31cc792af1"],["E:/网站搭建/myblog/public/archives/2020/12/index.html","c4f59c8a0547f724334f69f26342fcf1"],["E:/网站搭建/myblog/public/archives/2020/index.html","b3870096e9f746d7320b974cc3880dc0"],["E:/网站搭建/myblog/public/archives/2021/01/index.html","223266d62b19237db161337b31aa8aae"],["E:/网站搭建/myblog/public/archives/2021/index.html","c5e316277e38232fa628ee74b3e9aa69"],["E:/网站搭建/myblog/public/archives/index.html","eef2a0f3fdd9cd9efa16707a20db0559"],["E:/网站搭建/myblog/public/css/index.css","4ba40f74967a5db2b303963823f39f7a"],["E:/网站搭建/myblog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/网站搭建/myblog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/网站搭建/myblog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/网站搭建/myblog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/网站搭建/myblog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/网站搭建/myblog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/网站搭建/myblog/public/index.html","7e6cd39d4f9ee5fd617dbe05c900d1df"],["E:/网站搭建/myblog/public/js/main.js","455fface5a0a3ff90766ca254affe502"],["E:/网站搭建/myblog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["E:/网站搭建/myblog/public/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["E:/网站搭建/myblog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["E:/网站搭建/myblog/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["E:/网站搭建/myblog/public/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["E:/网站搭建/myblog/public/messageboard/index.html","05ce7d8da8884378e187a251c2c06bae"],["E:/网站搭建/myblog/public/posts/14571/index.html","d36b74a57358f27e18a2cdd81a92cf8b"],["E:/网站搭建/myblog/public/posts/16692/index.html","319a627b799251c4c2144b1f4fe5f7ef"],["E:/网站搭建/myblog/public/posts/25127/index.html","feed924e5439eedbbf8607efc9ae906c"],["E:/网站搭建/myblog/public/posts/25992/index.html","5f43abce55cbe9d1b4281c9c24917990"],["E:/网站搭建/myblog/public/posts/33946/index.html","cda324df4cdf48d35acb49387ebfd3bd"],["E:/网站搭建/myblog/public/posts/37998/index.html","4368e54ea2b94ba3c322b94c137fb6df"],["E:/网站搭建/myblog/public/posts/46463/index.html","8568afa6adc7d4bfaa72ef540eb34818"],["E:/网站搭建/myblog/public/posts/49040/index.html","06f1a2b9dbff392ccf755380dc4c17e2"],["E:/网站搭建/myblog/public/posts/51649/index.html","30bc2b4f85b8c7edf3b9d325b4e36f5b"],["E:/网站搭建/myblog/public/posts/55334/index.html","d9a601d4c5cc54e5b933c5d461946c6c"],["E:/网站搭建/myblog/public/tags/AWD/index.html","248a1386af7292250cd467f3dd5d3a32"],["E:/网站搭建/myblog/public/tags/CTF/index.html","cf0200ecb08d19a1b78fae3ec912330b"],["E:/网站搭建/myblog/public/tags/curl/index.html","306ee8a1f706e43f8ad729a593ae6664"],["E:/网站搭建/myblog/public/tags/index.html","c0fa08c0ca48e0f786a2d492ddf9b24c"],["E:/网站搭建/myblog/public/tags/渗透/index.html","0c370f9b9c4581f023ccdb19e85987e4"],["E:/网站搭建/myblog/public/tags/程序/index.html","03c2a4516f9fd85f32049cbc0ed67f83"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,c){e=new URL(e);return"/"===e.pathname.slice(-1)&&(e.pathname+=c),e.toString()},cleanResponse=function(c){return c.redirected?("body"in c?Promise.resolve(c.body):c.blob()).then(function(e){return new Response(e,{headers:c.headers,status:c.status,statusText:c.statusText})}):Promise.resolve(c)},createCacheKey=function(e,c,t,a){e=new URL(e);return a&&e.pathname.match(a)||(e.search+=(e.search?"&":"")+encodeURIComponent(c)+"="+encodeURIComponent(t)),e.toString()},isPathWhitelisted=function(e,c){if(0===e.length)return!0;var t=new URL(c).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){e=new URL(e);return e.hash="",e.search=e.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(c){return t.every(function(e){return!e.test(c[0])})}).map(function(e){return e.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var c=e[0],e=e[1],c=new URL(c,self.location),e=createCacheKey(c,hashParamName,e,!1);return[c.toString(),e]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var e=new Request(c,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+c+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(c,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(c){return c.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return c.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(c){var t,e,a;"GET"===c.request.method&&(t=stripIgnoredUrlParameters(c.request.url,ignoreUrlParametersMatching),a="index.html",(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,a),e=urlsToCacheKeys.has(t)),e&&c.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',c.request.url,e),fetch(c.request)})))});