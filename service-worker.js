"use strict";var precacheConfig=[["E:/网站搭建/myblog/public/about/index.html","24a8dc80ec7882773cdff1597b6068fb"],["E:/网站搭建/myblog/public/archives/2020/10/index.html","267de600565321fd4cb72102f04b6e36"],["E:/网站搭建/myblog/public/archives/2020/11/index.html","acc10093e3a92a2c77be1068e055e303"],["E:/网站搭建/myblog/public/archives/2020/12/index.html","bf4c0cd8c0491b9625ce9faa411f7f37"],["E:/网站搭建/myblog/public/archives/2020/index.html","fb13baed9b5e78c2a2294a2d22dff5fb"],["E:/网站搭建/myblog/public/archives/2021/01/index.html","315ee6a5dbb94f3ce39194abcab65d9a"],["E:/网站搭建/myblog/public/archives/2021/02/index.html","db766097cd9724eb71ba9b728a41ebec"],["E:/网站搭建/myblog/public/archives/2021/index.html","600e08b8dc7186b339c00bf406f830a0"],["E:/网站搭建/myblog/public/archives/index.html","e43019e097797650e91561cb87874c23"],["E:/网站搭建/myblog/public/archives/page/2/index.html","bd58847a7f4bb6be0e1ca8ad5db06231"],["E:/网站搭建/myblog/public/css/index.css","4ba40f74967a5db2b303963823f39f7a"],["E:/网站搭建/myblog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/网站搭建/myblog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/网站搭建/myblog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/网站搭建/myblog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/网站搭建/myblog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/网站搭建/myblog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/网站搭建/myblog/public/index.html","bba6deb416083c99a1d79cb4f720d13f"],["E:/网站搭建/myblog/public/js/main.js","455fface5a0a3ff90766ca254affe502"],["E:/网站搭建/myblog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["E:/网站搭建/myblog/public/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["E:/网站搭建/myblog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["E:/网站搭建/myblog/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["E:/网站搭建/myblog/public/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["E:/网站搭建/myblog/public/messageboard/index.html","fbed9a5bdf428f8cd623c8694972d8ec"],["E:/网站搭建/myblog/public/page/2/index.html","2418260e14f34701077d9af13798eea3"],["E:/网站搭建/myblog/public/posts/14571/index.html","e60074194f2e3afd550d137f20578bb4"],["E:/网站搭建/myblog/public/posts/14827/index.html","472261762b0ff04385271e510779c73c"],["E:/网站搭建/myblog/public/posts/16692/index.html","4a300d61433419cd6a161d8b7ef58b7f"],["E:/网站搭建/myblog/public/posts/16813/index.html","eb14564b645d7a6816a1f01fd1104c9d"],["E:/网站搭建/myblog/public/posts/25127/index.html","0c726d9984429712456274f4a7d4c4a9"],["E:/网站搭建/myblog/public/posts/33946/index.html","ba84fe18ce27aa8063a017a842a55f28"],["E:/网站搭建/myblog/public/posts/37998/index.html","5998ca370329be87d3605fc107eabb3e"],["E:/网站搭建/myblog/public/posts/46463/index.html","9d3f25b839f5f6529853feab47618afe"],["E:/网站搭建/myblog/public/posts/49040/index.html","7d1d9e6c6affe22c3e2773ecea06103e"],["E:/网站搭建/myblog/public/posts/51649/index.html","ab8c8aab8c4ffdf9f2a6ff767f22b169"],["E:/网站搭建/myblog/public/posts/55334/index.html","80be6ea89406275da8f7b1fb6adeeb03"],["E:/网站搭建/myblog/public/tags/AWD/index.html","7a2b7fcc030d866cf0a2b0083f15cadf"],["E:/网站搭建/myblog/public/tags/ctf/index.html","03d3758ba6cc81e3510313c1e0089948"],["E:/网站搭建/myblog/public/tags/index.html","ce7d3da42ece0c309b3daeb391fc9352"],["E:/网站搭建/myblog/public/tags/渗透/index.html","25e03056c2434383bb48d15b68728f47"],["E:/网站搭建/myblog/public/tags/程序/index.html","b31f73a073189b670e610c0378838e4f"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,c){e=new URL(e);return"/"===e.pathname.slice(-1)&&(e.pathname+=c),e.toString()},cleanResponse=function(c){return c.redirected?("body"in c?Promise.resolve(c.body):c.blob()).then(function(e){return new Response(e,{headers:c.headers,status:c.status,statusText:c.statusText})}):Promise.resolve(c)},createCacheKey=function(e,c,a,t){e=new URL(e);return t&&e.pathname.match(t)||(e.search+=(e.search?"&":"")+encodeURIComponent(c)+"="+encodeURIComponent(a)),e.toString()},isPathWhitelisted=function(e,c){if(0===e.length)return!0;var a=new URL(c).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){e=new URL(e);return e.hash="",e.search=e.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(c){return a.every(function(e){return!e.test(c[0])})}).map(function(e){return e.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var c=e[0],e=e[1],c=new URL(c,self.location),e=createCacheKey(c,hashParamName,e,!1);return[c.toString(),e]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var e=new Request(c,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+c+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(c,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(c){return c.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return c.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(c){var a,e,t;"GET"===c.request.method&&(a=stripIgnoredUrlParameters(c.request.url,ignoreUrlParametersMatching),t="index.html",(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,t),e=urlsToCacheKeys.has(a)),e&&c.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',c.request.url,e),fetch(c.request)})))});