"use strict";var precacheConfig=[["E:/网站搭建/myblog/public/about/index.html","51fab6f3895cc69ebd6d9371d7fc3541"],["E:/网站搭建/myblog/public/archives/2020/10/index.html","da6e4077b7f9923c60516bc90e579be4"],["E:/网站搭建/myblog/public/archives/2020/11/index.html","eccfd449af3b23e9683ad82d96cb994c"],["E:/网站搭建/myblog/public/archives/2020/12/index.html","29c6c6187712991b4baf0a596a582443"],["E:/网站搭建/myblog/public/archives/2020/index.html","76c96093c56d3526d7a7992815ab94ce"],["E:/网站搭建/myblog/public/archives/index.html","79f0e6b71f132f47a4ad0b39bd727d4b"],["E:/网站搭建/myblog/public/css/index.css","87d0d5be955a557ba40f7a2aec57fc1b"],["E:/网站搭建/myblog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/网站搭建/myblog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/网站搭建/myblog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/网站搭建/myblog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/网站搭建/myblog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/网站搭建/myblog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/网站搭建/myblog/public/index.html","5a9897ba98f6687517be544ca15930e4"],["E:/网站搭建/myblog/public/js/main.js","455fface5a0a3ff90766ca254affe502"],["E:/网站搭建/myblog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["E:/网站搭建/myblog/public/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["E:/网站搭建/myblog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["E:/网站搭建/myblog/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["E:/网站搭建/myblog/public/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["E:/网站搭建/myblog/public/messageboard/index.html","62217b7ad9fd00a75ae0882bacd02b88"],["E:/网站搭建/myblog/public/posts/14571/index.html","71095c0713216f638744ce26b94343c7"],["E:/网站搭建/myblog/public/posts/25992/index.html","bc2ccd95f5b1846f0d3f73f6450506da"],["E:/网站搭建/myblog/public/posts/33946/index.html","ed5973794e3d880bd1129f46cab06267"],["E:/网站搭建/myblog/public/posts/37998/index.html","935fffb10b55208b562548a3ade1b984"],["E:/网站搭建/myblog/public/posts/46463/index.html","3b0f66d933751b2ef490a6e5c9454906"],["E:/网站搭建/myblog/public/posts/49040/index.html","e8a30bc5f78b85417f696e1976862505"],["E:/网站搭建/myblog/public/posts/55334/index.html","e68612a59533aed908f8360b86e5fe99"],["E:/网站搭建/myblog/public/tags/CTF/index.html","6794d094a7e81cdd345d2cbc59052625"],["E:/网站搭建/myblog/public/tags/curl/index.html","e43fc0235cf5b2fa56c66f592ad3e247"],["E:/网站搭建/myblog/public/tags/index.html","312e72c390cca6bf9cd8c77c51bbe611"],["E:/网站搭建/myblog/public/tags/渗透/index.html","02a038915952d8b8734785d7300bfe5e"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){e=new URL(e);return"/"===e.pathname.slice(-1)&&(e.pathname+=t),e.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,c,n){e=new URL(e);return n&&e.pathname.match(n)||(e.search+=(e.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),e.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,c){e=new URL(e);return e.hash="",e.search=e.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return c.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],e=e[1],t=new URL(t,self.location),e=createCacheKey(t,hashParamName,e,!1);return[t.toString(),e]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!c.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){var c,e,n;"GET"===t.request.method&&(c=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html",(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,n),e=urlsToCacheKeys.has(c)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)})))});