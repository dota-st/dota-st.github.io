"use strict";var precacheConfig=[["E:/网站搭建/myblog/public/about/index.html","b37aabc9c273f46386ed4398b76363f6"],["E:/网站搭建/myblog/public/archives/2020/10/index.html","79b27e9838d7a0d5e4e84b7e2977dea7"],["E:/网站搭建/myblog/public/archives/2020/11/index.html","f756fd36e1b0928ddfd2f8d6c0c7ffe2"],["E:/网站搭建/myblog/public/archives/2020/12/index.html","2b15f8c65eff96370b9014f2c9838440"],["E:/网站搭建/myblog/public/archives/2020/index.html","c19b9726041f7527a6dc5e73fcd4b651"],["E:/网站搭建/myblog/public/archives/2021/01/index.html","fea8d7224665d78c158f8aaa2a83a7fe"],["E:/网站搭建/myblog/public/archives/2021/02/index.html","6d9cc655df6b9040c603873c39232b81"],["E:/网站搭建/myblog/public/archives/2021/index.html","637dd7540f2db9d47ccdf1e69a856a72"],["E:/网站搭建/myblog/public/archives/index.html","7cf9a25b19e5ea27e8e34789cd565b36"],["E:/网站搭建/myblog/public/archives/page/2/index.html","1f3c5b3bc562d0361342557ffa67649b"],["E:/网站搭建/myblog/public/css/index.css","4ba40f74967a5db2b303963823f39f7a"],["E:/网站搭建/myblog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/网站搭建/myblog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/网站搭建/myblog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/网站搭建/myblog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/网站搭建/myblog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/网站搭建/myblog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/网站搭建/myblog/public/index.html","7f2495636633f1046d2cdb70140c416c"],["E:/网站搭建/myblog/public/js/main.js","455fface5a0a3ff90766ca254affe502"],["E:/网站搭建/myblog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["E:/网站搭建/myblog/public/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["E:/网站搭建/myblog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["E:/网站搭建/myblog/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["E:/网站搭建/myblog/public/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["E:/网站搭建/myblog/public/messageboard/index.html","66c7ea054a1b3edecd3cd0a138a7996d"],["E:/网站搭建/myblog/public/page/2/index.html","264c61c6567688c8b5baf7f95f3893de"],["E:/网站搭建/myblog/public/posts/14571/index.html","2d80e26a89e64c67dbefd53f7e335885"],["E:/网站搭建/myblog/public/posts/14827/index.html","b8bee05c47b68c4319029a5e8ebeab38"],["E:/网站搭建/myblog/public/posts/16692/index.html","5d665661e918c26121b91c8e0d143d48"],["E:/网站搭建/myblog/public/posts/16813/index.html","97301401aeb70481d2b17dcb78b17200"],["E:/网站搭建/myblog/public/posts/25127/index.html","61369fddaddfaef28321f1668841cd2b"],["E:/网站搭建/myblog/public/posts/33946/index.html","ba84fe18ce27aa8063a017a842a55f28"],["E:/网站搭建/myblog/public/posts/37998/index.html","5998ca370329be87d3605fc107eabb3e"],["E:/网站搭建/myblog/public/posts/46463/index.html","9d3f25b839f5f6529853feab47618afe"],["E:/网站搭建/myblog/public/posts/49040/index.html","75ebe76d8fab1fc399911e28f4caf8b6"],["E:/网站搭建/myblog/public/posts/51649/index.html","ab8c8aab8c4ffdf9f2a6ff767f22b169"],["E:/网站搭建/myblog/public/posts/55334/index.html","bd41e6a87e91f51a6cd709262b26388a"],["E:/网站搭建/myblog/public/tags/AWD/index.html","49501e15d9968494ba83145ea7f44966"],["E:/网站搭建/myblog/public/tags/ctf/index.html","d4181e60d9109c3d63d27b181eced0cf"],["E:/网站搭建/myblog/public/tags/index.html","cdb3a2fce46c08beaa34315643b6e02a"],["E:/网站搭建/myblog/public/tags/渗透/index.html","75875025b4920f9fb8f2e58fa6682b28"],["E:/网站搭建/myblog/public/tags/程序/index.html","b400b55b5134948abc49f385731f8ec7"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,c){e=new URL(e);return"/"===e.pathname.slice(-1)&&(e.pathname+=c),e.toString()},cleanResponse=function(c){return c.redirected?("body"in c?Promise.resolve(c.body):c.blob()).then(function(e){return new Response(e,{headers:c.headers,status:c.status,statusText:c.statusText})}):Promise.resolve(c)},createCacheKey=function(e,c,t,a){e=new URL(e);return a&&e.pathname.match(a)||(e.search+=(e.search?"&":"")+encodeURIComponent(c)+"="+encodeURIComponent(t)),e.toString()},isPathWhitelisted=function(e,c){if(0===e.length)return!0;var t=new URL(c).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){e=new URL(e);return e.hash="",e.search=e.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(c){return t.every(function(e){return!e.test(c[0])})}).map(function(e){return e.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var c=e[0],e=e[1],c=new URL(c,self.location),e=createCacheKey(c,hashParamName,e,!1);return[c.toString(),e]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var e=new Request(c,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+c+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(c,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(c){return c.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return c.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(c){var t,e,a;"GET"===c.request.method&&(t=stripIgnoredUrlParameters(c.request.url,ignoreUrlParametersMatching),a="index.html",(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,a),e=urlsToCacheKeys.has(t)),e&&c.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',c.request.url,e),fetch(c.request)})))});