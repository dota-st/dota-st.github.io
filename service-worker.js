"use strict";var precacheConfig=[["E:/网站搭建/myblog/public/about/index.html","28ad71c9ae15d992228532ff356ee088"],["E:/网站搭建/myblog/public/archives/2020/10/index.html","070226b06154414509ccf14819d4b76b"],["E:/网站搭建/myblog/public/archives/2020/11/index.html","2120966513576d48617ce1bb7ded7f5a"],["E:/网站搭建/myblog/public/archives/2020/12/index.html","13c5d20536114c3b9cf524209771dece"],["E:/网站搭建/myblog/public/archives/2020/index.html","fbeda24bde4d3d12f1c2db34f43f46d2"],["E:/网站搭建/myblog/public/archives/2021/01/index.html","e0ea3c3eca246393fd0c1391f0746e9f"],["E:/网站搭建/myblog/public/archives/2021/02/index.html","025dabe1c07802a5d68e14f3a984f87a"],["E:/网站搭建/myblog/public/archives/2021/index.html","8cf22d8101faf47a2f0f2a82d51e73c5"],["E:/网站搭建/myblog/public/archives/index.html","de27f516c7a4bc49a3073c9d9d1ef352"],["E:/网站搭建/myblog/public/archives/page/2/index.html","89a6e1b915c12bc66e6ca3d409bf8866"],["E:/网站搭建/myblog/public/css/index.css","4ba40f74967a5db2b303963823f39f7a"],["E:/网站搭建/myblog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/网站搭建/myblog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/网站搭建/myblog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/网站搭建/myblog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/网站搭建/myblog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/网站搭建/myblog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/网站搭建/myblog/public/index.html","6a71e98df96775c3323db397fda43a75"],["E:/网站搭建/myblog/public/js/main.js","455fface5a0a3ff90766ca254affe502"],["E:/网站搭建/myblog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["E:/网站搭建/myblog/public/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["E:/网站搭建/myblog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["E:/网站搭建/myblog/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["E:/网站搭建/myblog/public/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["E:/网站搭建/myblog/public/messageboard/index.html","6eb175123eb4f64aad1b47ee788eedf1"],["E:/网站搭建/myblog/public/page/2/index.html","1cc504ee38c14e132e1b98f0de052148"],["E:/网站搭建/myblog/public/posts/14571/index.html","51f4887cc202d14c391f0dcf6d45c685"],["E:/网站搭建/myblog/public/posts/14827/index.html","aca486ba9f765bb6d466a722e733dfd5"],["E:/网站搭建/myblog/public/posts/16692/index.html","7ae0f0a05ed6800d8563d2b557bc448f"],["E:/网站搭建/myblog/public/posts/16813/index.html","aadb32b96bfaf6d1c66d00a297abb25e"],["E:/网站搭建/myblog/public/posts/25127/index.html","1cbf1be23a375d33e60baf1a56be3562"],["E:/网站搭建/myblog/public/posts/25992/index.html","a7c9a35375ed79f69fbb1050260d4b64"],["E:/网站搭建/myblog/public/posts/33946/index.html","00966b034ff6e50f0f75c89a2ab28c9c"],["E:/网站搭建/myblog/public/posts/37998/index.html","a78e2c148521b2f78ed1440a7da15498"],["E:/网站搭建/myblog/public/posts/46463/index.html","3788806de9cf2f0a225dd2e70e5d3b8d"],["E:/网站搭建/myblog/public/posts/49040/index.html","6f3ca6e742a07c776aaa0a14afa216b7"],["E:/网站搭建/myblog/public/posts/51649/index.html","98be01ad8943ef9ef1f627d4701d195f"],["E:/网站搭建/myblog/public/posts/55334/index.html","eaa57d13fc1de6808d70b517f3d242fa"],["E:/网站搭建/myblog/public/tags/AWD/index.html","c12f7dae753b54bd6e254c1e2ca2c1f4"],["E:/网站搭建/myblog/public/tags/ctf/index.html","91a66c8adc15e61f150b74c2d37eef41"],["E:/网站搭建/myblog/public/tags/curl/index.html","2cde8bb9af08984d3cd49975fd336ecf"],["E:/网站搭建/myblog/public/tags/index.html","75e1b3f611b087a21194267391cfe0c5"],["E:/网站搭建/myblog/public/tags/渗透/index.html","602b8e8eefffb74a25a7f55929725d3e"],["E:/网站搭建/myblog/public/tags/程序/index.html","632bf759269161e1679d89a9aa61738a"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){e=new URL(e);return"/"===e.pathname.slice(-1)&&(e.pathname+=a),e.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,c,t){e=new URL(e);return t&&e.pathname.match(t)||(e.search+=(e.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),e.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,c){e=new URL(e);return e.hash="",e.search=e.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return c.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],e=e[1],a=new URL(a,self.location),e=createCacheKey(a,hashParamName,e,!1);return[a.toString(),e]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!c.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){var c,e,t;"GET"===a.request.method&&(c=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html",(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),e=urlsToCacheKeys.has(c)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)})))});