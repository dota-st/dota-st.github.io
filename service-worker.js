"use strict";var precacheConfig=[["E:/网站搭建/myblog/public/about/index.html","f142fe35ea9e9ab848de1d9a82a4cc07"],["E:/网站搭建/myblog/public/archives/2020/10/index.html","12b3a1988ffa0113778f6e7d8f6983ee"],["E:/网站搭建/myblog/public/archives/2020/11/index.html","391741a6d39513ab5c3a0de89ac613d1"],["E:/网站搭建/myblog/public/archives/2020/12/index.html","c006307a781e1683f0e5bfb054b92625"],["E:/网站搭建/myblog/public/archives/2020/index.html","297503897dc5ab697717a303295a33fe"],["E:/网站搭建/myblog/public/archives/2021/01/index.html","eefa655043e0a2fa42a90b5614ae888d"],["E:/网站搭建/myblog/public/archives/2021/index.html","0e958654fb5dcee468b3d8d1d7399b5a"],["E:/网站搭建/myblog/public/archives/index.html","e9582e356dc53afb1b0de6769b0ae74a"],["E:/网站搭建/myblog/public/css/index.css","4ba40f74967a5db2b303963823f39f7a"],["E:/网站搭建/myblog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/网站搭建/myblog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/网站搭建/myblog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/网站搭建/myblog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/网站搭建/myblog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/网站搭建/myblog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/网站搭建/myblog/public/index.html","0fe2f57c3aec1ecbfc416161b21d27ac"],["E:/网站搭建/myblog/public/js/main.js","455fface5a0a3ff90766ca254affe502"],["E:/网站搭建/myblog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["E:/网站搭建/myblog/public/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["E:/网站搭建/myblog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["E:/网站搭建/myblog/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["E:/网站搭建/myblog/public/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["E:/网站搭建/myblog/public/messageboard/index.html","7512ef2bdbb803e9c01e1304291c758d"],["E:/网站搭建/myblog/public/posts/14571/index.html","9e4b8283c455ff69e1b6d83c8ade52b1"],["E:/网站搭建/myblog/public/posts/25127/index.html","76a82fd992cf36b340f5b8daf4088fb0"],["E:/网站搭建/myblog/public/posts/25992/index.html","7ab8c0a1f0a42d978f61faf65c4a1ecc"],["E:/网站搭建/myblog/public/posts/33946/index.html","5c75fd78c8d3190fbba761bd648e83cb"],["E:/网站搭建/myblog/public/posts/37998/index.html","520be8d5f421b7fadbe44f71a797a5b2"],["E:/网站搭建/myblog/public/posts/46463/index.html","e4dc49058199ddfc856d045cf391e1df"],["E:/网站搭建/myblog/public/posts/49040/index.html","c1b4704b8f78491411120e0eb3f191f4"],["E:/网站搭建/myblog/public/posts/55334/index.html","396fe2318c916856b070a58943581198"],["E:/网站搭建/myblog/public/tags/CTF/index.html","24826a3ec472355a3bd522f12ab48db9"],["E:/网站搭建/myblog/public/tags/curl/index.html","29359785015db18c353d1b99ccc093d7"],["E:/网站搭建/myblog/public/tags/index.html","3014de4ec91211909654729bb506ac21"],["E:/网站搭建/myblog/public/tags/渗透/index.html","4d0c2748d4c9b9590ecbdea23d9d656f"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){e=new URL(e);return"/"===e.pathname.slice(-1)&&(e.pathname+=t),e.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,c,a){e=new URL(e);return a&&e.pathname.match(a)||(e.search+=(e.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),e.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,c){e=new URL(e);return e.hash="",e.search=e.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return c.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],e=e[1],t=new URL(t,self.location),e=createCacheKey(t,hashParamName,e,!1);return[t.toString(),e]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!c.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){var c,e,a;"GET"===t.request.method&&(c=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html",(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,a),e=urlsToCacheKeys.has(c)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)})))});