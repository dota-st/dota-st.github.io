"use strict";var precacheConfig=[["E:/网站搭建/myblog/public/about/index.html","4a001f26c2b8d113d362b7d516af957a"],["E:/网站搭建/myblog/public/archives/2020/10/index.html","b73d7a4195e944656e464f6d5e314bd6"],["E:/网站搭建/myblog/public/archives/2020/11/index.html","208addb93a9731445a0c6b1c8a11bccc"],["E:/网站搭建/myblog/public/archives/2020/12/index.html","8e1667210e0ad61254ec5c692232f849"],["E:/网站搭建/myblog/public/archives/2020/index.html","727e43cde40a850a9e2af0a2aab2dae5"],["E:/网站搭建/myblog/public/archives/2021/01/index.html","ce163ba73f1702cceeb3a078843b8b50"],["E:/网站搭建/myblog/public/archives/2021/index.html","12c0382e56cd22b397683e482fd63357"],["E:/网站搭建/myblog/public/archives/index.html","680bcb3a97b313cc2a45e188298e21f5"],["E:/网站搭建/myblog/public/archives/page/2/index.html","3e14ba470397244944a9da316b4ce61c"],["E:/网站搭建/myblog/public/css/index.css","4ba40f74967a5db2b303963823f39f7a"],["E:/网站搭建/myblog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/网站搭建/myblog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/网站搭建/myblog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/网站搭建/myblog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/网站搭建/myblog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/网站搭建/myblog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/网站搭建/myblog/public/index.html","897b7e78751b5ea6fd0f90ed4b8c1500"],["E:/网站搭建/myblog/public/js/main.js","455fface5a0a3ff90766ca254affe502"],["E:/网站搭建/myblog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["E:/网站搭建/myblog/public/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["E:/网站搭建/myblog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["E:/网站搭建/myblog/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["E:/网站搭建/myblog/public/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["E:/网站搭建/myblog/public/messageboard/index.html","f81a73b599e79d8c6239ec226f9907b4"],["E:/网站搭建/myblog/public/page/2/index.html","a779e47c20e450146fdf5ceeddfff193"],["E:/网站搭建/myblog/public/posts/14571/index.html","a0eef18570333f6844792fd4575d176c"],["E:/网站搭建/myblog/public/posts/14827/index.html","d520bfa269baa6fad8ef8bf466820d9e"],["E:/网站搭建/myblog/public/posts/16692/index.html","78d9ce42de8992fba7401e5bc9a8a351"],["E:/网站搭建/myblog/public/posts/25127/index.html","e7f33547797edf12d55e71acdd5ac75d"],["E:/网站搭建/myblog/public/posts/25992/index.html","2ba1244e9d729af93a19702b7aeedf0d"],["E:/网站搭建/myblog/public/posts/33946/index.html","9eec929e3b7841e8e622258a61b56994"],["E:/网站搭建/myblog/public/posts/37998/index.html","75f15505618bd5f44e67e34ae01153ce"],["E:/网站搭建/myblog/public/posts/46463/index.html","616dad1bff80c56fffa4f081c0b58121"],["E:/网站搭建/myblog/public/posts/49040/index.html","295fcd36ae326b16f5513169df78e607"],["E:/网站搭建/myblog/public/posts/51649/index.html","3fa8d6e7061b0d4ab4816857521276a9"],["E:/网站搭建/myblog/public/posts/55334/index.html","a37c1031d99a92e75db91ff97bcbe1df"],["E:/网站搭建/myblog/public/tags/AWD/index.html","821d29dd43d4d4d4a0c0de818c97ce22"],["E:/网站搭建/myblog/public/tags/CTF/index.html","372f96fe09cdae255d638240c805f28d"],["E:/网站搭建/myblog/public/tags/curl/index.html","165a3efdbb7a76e10e32e5a90391b7f2"],["E:/网站搭建/myblog/public/tags/index.html","64befbde3500c816e60a0f23a98097ee"],["E:/网站搭建/myblog/public/tags/渗透/index.html","8df7853697303c99e5ac1587b339e212"],["E:/网站搭建/myblog/public/tags/程序/index.html","a4ea58bade97f98a339c363b4f4762c1"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){e=new URL(e);return"/"===e.pathname.slice(-1)&&(e.pathname+=a),e.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,c,t){e=new URL(e);return t&&e.pathname.match(t)||(e.search+=(e.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),e.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,c){e=new URL(e);return e.hash="",e.search=e.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return c.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],e=e[1],a=new URL(a,self.location),e=createCacheKey(a,hashParamName,e,!1);return[a.toString(),e]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!c.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){var c,e,t;"GET"===a.request.method&&(c=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html",(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),e=urlsToCacheKeys.has(c)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)})))});