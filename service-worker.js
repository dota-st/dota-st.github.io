"use strict";var precacheConfig=[["E:/网站搭建/myblog/public/about/index.html","49d7bbb02113ff613ae91c70c78795ca"],["E:/网站搭建/myblog/public/archives/2020/10/index.html","8a2c7d3a3ee1842d9f92f3ddeff63236"],["E:/网站搭建/myblog/public/archives/2020/11/index.html","6e5dce05851b5d82e88d1f2bee0a0ad7"],["E:/网站搭建/myblog/public/archives/2020/12/index.html","d891cb5ccfcde2f1761fe517a54a65d2"],["E:/网站搭建/myblog/public/archives/2020/index.html","959525d250a958ee26a66a5ba227cc3a"],["E:/网站搭建/myblog/public/archives/2021/01/index.html","c9e42f340f1982e66fc991f3cc576e9e"],["E:/网站搭建/myblog/public/archives/2021/02/index.html","391b4f02c4660312c8df86d317349029"],["E:/网站搭建/myblog/public/archives/2021/03/index.html","9b6a881e6cd2c1929d82db954b490cf2"],["E:/网站搭建/myblog/public/archives/2021/index.html","aa4acb24ef0e1f3a39bac2671b5578f3"],["E:/网站搭建/myblog/public/archives/index.html","66e48bad45ccfc2f88cfed87878aefb5"],["E:/网站搭建/myblog/public/archives/page/2/index.html","56ea2ce78e17db4095a211dc0624ac60"],["E:/网站搭建/myblog/public/css/index.css","4ba40f74967a5db2b303963823f39f7a"],["E:/网站搭建/myblog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/网站搭建/myblog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/网站搭建/myblog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/网站搭建/myblog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/网站搭建/myblog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/网站搭建/myblog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/网站搭建/myblog/public/index.html","219dad70a6fcd3cca0e43e1a43e9f91a"],["E:/网站搭建/myblog/public/js/main.js","455fface5a0a3ff90766ca254affe502"],["E:/网站搭建/myblog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["E:/网站搭建/myblog/public/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["E:/网站搭建/myblog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["E:/网站搭建/myblog/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["E:/网站搭建/myblog/public/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["E:/网站搭建/myblog/public/messageboard/index.html","510c7d352f083175fb06df18fb3bb08c"],["E:/网站搭建/myblog/public/page/2/index.html","122f00c915f265413c1b3ace62a26934"],["E:/网站搭建/myblog/public/posts/14571/index.html","e7c7873b06eddac0ae8b2eea15e456b7"],["E:/网站搭建/myblog/public/posts/14827/index.html","7479480e1a8f798bdc0c2bc1bcb2723b"],["E:/网站搭建/myblog/public/posts/16692/index.html","91efe233b3ff80ab08a849b744507371"],["E:/网站搭建/myblog/public/posts/16813/index.html","448ff7379715b7ab768078c6e72c926a"],["E:/网站搭建/myblog/public/posts/24632/index.html","fa4548a7752918b681b942e8a290ace6"],["E:/网站搭建/myblog/public/posts/25127/index.html","cfc983ec438881f8e9e39fcd6814f6a8"],["E:/网站搭建/myblog/public/posts/33946/index.html","6115b44a746df9d00dde2aba683ead26"],["E:/网站搭建/myblog/public/posts/37998/index.html","f361742b91de06301496fbafc4e1173b"],["E:/网站搭建/myblog/public/posts/46463/index.html","f25bd5b052ece730f322098e341c7d3d"],["E:/网站搭建/myblog/public/posts/49040/index.html","312396bcf938b6d33be9ad75cf79d36a"],["E:/网站搭建/myblog/public/posts/51649/index.html","45c192d7014b251cf69b5ea09091f9d4"],["E:/网站搭建/myblog/public/posts/55334/index.html","ed9b953a8d765969e562e63e8722e461"],["E:/网站搭建/myblog/public/tags/AWD/index.html","d86084ef490f568ce4b9841b320da6e0"],["E:/网站搭建/myblog/public/tags/ctf/index.html","22aeb0c930baa045533a296411cab2be"],["E:/网站搭建/myblog/public/tags/index.html","18842700ebabe1a3aaaa0c6f3552ec08"],["E:/网站搭建/myblog/public/tags/渗透/index.html","e03c64fa43682886db6b6295799c41bb"],["E:/网站搭建/myblog/public/tags/程序/index.html","4d94087f63d004b6d31f4ea9b538b7e0"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,c){e=new URL(e);return"/"===e.pathname.slice(-1)&&(e.pathname+=c),e.toString()},cleanResponse=function(c){return c.redirected?("body"in c?Promise.resolve(c.body):c.blob()).then(function(e){return new Response(e,{headers:c.headers,status:c.status,statusText:c.statusText})}):Promise.resolve(c)},createCacheKey=function(e,c,a,t){e=new URL(e);return t&&e.pathname.match(t)||(e.search+=(e.search?"&":"")+encodeURIComponent(c)+"="+encodeURIComponent(a)),e.toString()},isPathWhitelisted=function(e,c){if(0===e.length)return!0;var a=new URL(c).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){e=new URL(e);return e.hash="",e.search=e.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(c){return a.every(function(e){return!e.test(c[0])})}).map(function(e){return e.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var c=e[0],e=e[1],c=new URL(c,self.location),e=createCacheKey(c,hashParamName,e,!1);return[c.toString(),e]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var e=new Request(c,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+c+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(c,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(c){return c.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return c.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(c){var a,e,t;"GET"===c.request.method&&(a=stripIgnoredUrlParameters(c.request.url,ignoreUrlParametersMatching),t="index.html",(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,t),e=urlsToCacheKeys.has(a)),e&&c.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',c.request.url,e),fetch(c.request)})))});