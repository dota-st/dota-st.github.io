"use strict";var precacheConfig=[["D:/网站搭建/myblog/public/about/index.html","16e7cd9495106695db088247f0fc1728"],["D:/网站搭建/myblog/public/archives/2020/10/index.html","7274152b86c57cd298bc8c1da973d687"],["D:/网站搭建/myblog/public/archives/2020/index.html","ce79493dfec24a258eebacf7987da8b7"],["D:/网站搭建/myblog/public/archives/index.html","e27e61a277d7e0805cbcdd7edc893019"],["D:/网站搭建/myblog/public/css/index.css","87d0d5be955a557ba40f7a2aec57fc1b"],["D:/网站搭建/myblog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/网站搭建/myblog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/网站搭建/myblog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/网站搭建/myblog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/网站搭建/myblog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/网站搭建/myblog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/网站搭建/myblog/public/index.html","a8aa1e94bc98ab950f552903024ed65c"],["D:/网站搭建/myblog/public/js/main.js","455fface5a0a3ff90766ca254affe502"],["D:/网站搭建/myblog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/网站搭建/myblog/public/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["D:/网站搭建/myblog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["D:/网站搭建/myblog/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["D:/网站搭建/myblog/public/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["D:/网站搭建/myblog/public/messageboard/index.html","924a8cb02e5477c6b844f4a16954ae6d"],["D:/网站搭建/myblog/public/posts/14571/index.html","86f7b0887a4845e516d2b9b4f9f1efe1"],["D:/网站搭建/myblog/public/posts/25992/index.html","f17202a99db987993e1a154f97b5bb37"],["D:/网站搭建/myblog/public/posts/33946/index.html","639b88d05b5326557ec2157c169ab6ea"],["D:/网站搭建/myblog/public/posts/55334/index.html","59b191849375de105b584ef5be96a082"],["D:/网站搭建/myblog/public/tags/CTF/index.html","e1e62dac9c0d3a43ff0e23d00cc1fd95"],["D:/网站搭建/myblog/public/tags/curl/index.html","9853e1372a8f0f4bf97a6f60cadd53c1"],["D:/网站搭建/myblog/public/tags/index.html","831b582ea43f6f997b78bc4bbe320ebf"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){e=new URL(e);return"/"===e.pathname.slice(-1)&&(e.pathname+=t),e.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){e=new URL(e);return a&&e.pathname.match(a)||(e.search+=(e.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),e.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){e=new URL(e);return e.hash="",e.search=e.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],e=e[1],t=new URL(t,self.location),e=createCacheKey(t,hashParamName,e,!1);return[t.toString(),e]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){var n,e,a;"GET"===t.request.method&&(n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html",(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)})))});