"use strict";var precacheConfig=[["E:/网站搭建/myblog/public/about/index.html","0244269bd3b08f565c2aac0112c2f8d5"],["E:/网站搭建/myblog/public/archives/2020/10/index.html","3cb170591b703be8838a88b072780c98"],["E:/网站搭建/myblog/public/archives/2020/11/index.html","4a0f00fe61447acdbd9025544d65b58c"],["E:/网站搭建/myblog/public/archives/2020/12/index.html","7495b941780bd53c983be5ec8ed88a6a"],["E:/网站搭建/myblog/public/archives/2020/index.html","6898590e81608d70b95a135d43289b6f"],["E:/网站搭建/myblog/public/archives/2021/01/index.html","d6425ca8ff58c92bf5225cda98507185"],["E:/网站搭建/myblog/public/archives/2021/02/index.html","f1f8b10cea2c3abe276f2ea644faad5e"],["E:/网站搭建/myblog/public/archives/2021/index.html","382864983e2f6ee51cacd9a0999839e6"],["E:/网站搭建/myblog/public/archives/index.html","58c5843c2dcdf2ce495227a7c21d3db2"],["E:/网站搭建/myblog/public/archives/page/2/index.html","4bd6e1a015161d201f80d482071ba5ce"],["E:/网站搭建/myblog/public/css/index.css","4ba40f74967a5db2b303963823f39f7a"],["E:/网站搭建/myblog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/网站搭建/myblog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/网站搭建/myblog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/网站搭建/myblog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/网站搭建/myblog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/网站搭建/myblog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/网站搭建/myblog/public/index.html","70177971162e91fef83674962b7440fc"],["E:/网站搭建/myblog/public/js/main.js","455fface5a0a3ff90766ca254affe502"],["E:/网站搭建/myblog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["E:/网站搭建/myblog/public/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["E:/网站搭建/myblog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["E:/网站搭建/myblog/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["E:/网站搭建/myblog/public/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["E:/网站搭建/myblog/public/messageboard/index.html","d47dbd255dcffe64c18314be7370ae8a"],["E:/网站搭建/myblog/public/page/2/index.html","463c9e9215d597c214969e0900d34144"],["E:/网站搭建/myblog/public/posts/14571/index.html","51f4887cc202d14c391f0dcf6d45c685"],["E:/网站搭建/myblog/public/posts/14827/index.html","d16a7d98bad2b755dfbb304dd6061294"],["E:/网站搭建/myblog/public/posts/16692/index.html","7ae0f0a05ed6800d8563d2b557bc448f"],["E:/网站搭建/myblog/public/posts/16813/index.html","aadb32b96bfaf6d1c66d00a297abb25e"],["E:/网站搭建/myblog/public/posts/25127/index.html","1cbf1be23a375d33e60baf1a56be3562"],["E:/网站搭建/myblog/public/posts/25992/index.html","a7c9a35375ed79f69fbb1050260d4b64"],["E:/网站搭建/myblog/public/posts/33946/index.html","00966b034ff6e50f0f75c89a2ab28c9c"],["E:/网站搭建/myblog/public/posts/37998/index.html","a78e2c148521b2f78ed1440a7da15498"],["E:/网站搭建/myblog/public/posts/46463/index.html","3788806de9cf2f0a225dd2e70e5d3b8d"],["E:/网站搭建/myblog/public/posts/49040/index.html","6f3ca6e742a07c776aaa0a14afa216b7"],["E:/网站搭建/myblog/public/posts/51649/index.html","98be01ad8943ef9ef1f627d4701d195f"],["E:/网站搭建/myblog/public/posts/55334/index.html","eaa57d13fc1de6808d70b517f3d242fa"],["E:/网站搭建/myblog/public/tags/AWD/index.html","97c4287afe4d2be73ae9a3da54d48d57"],["E:/网站搭建/myblog/public/tags/ctf/index.html","d367684e81e87cd8dce1205b8e500e62"],["E:/网站搭建/myblog/public/tags/curl/index.html","3d114d928f26cffe63c9471d27b86a75"],["E:/网站搭建/myblog/public/tags/index.html","097cbd13f9ab39e53ca3a5c3fa9fe4dc"],["E:/网站搭建/myblog/public/tags/渗透/index.html","d223be1660339c3798b23b8338e5fc38"],["E:/网站搭建/myblog/public/tags/程序/index.html","6f9564c8ac2206f4ff0912459b1d2ab1"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,c){e=new URL(e);return"/"===e.pathname.slice(-1)&&(e.pathname+=c),e.toString()},cleanResponse=function(c){return c.redirected?("body"in c?Promise.resolve(c.body):c.blob()).then(function(e){return new Response(e,{headers:c.headers,status:c.status,statusText:c.statusText})}):Promise.resolve(c)},createCacheKey=function(e,c,a,t){e=new URL(e);return t&&e.pathname.match(t)||(e.search+=(e.search?"&":"")+encodeURIComponent(c)+"="+encodeURIComponent(a)),e.toString()},isPathWhitelisted=function(e,c){if(0===e.length)return!0;var a=new URL(c).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){e=new URL(e);return e.hash="",e.search=e.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(c){return a.every(function(e){return!e.test(c[0])})}).map(function(e){return e.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var c=e[0],e=e[1],c=new URL(c,self.location),e=createCacheKey(c,hashParamName,e,!1);return[c.toString(),e]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var e=new Request(c,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+c+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(c,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(c){return c.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return c.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(c){var a,e,t;"GET"===c.request.method&&(a=stripIgnoredUrlParameters(c.request.url,ignoreUrlParametersMatching),t="index.html",(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,t),e=urlsToCacheKeys.has(a)),e&&c.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',c.request.url,e),fetch(c.request)})))});