"use strict";var precacheConfig=[["E:/网站搭建/myblog/public/about/index.html","b7563a5f9aab8e10e69239150ff9d8c7"],["E:/网站搭建/myblog/public/archives/2020/10/index.html","2aa4694ab22d02014159023a911b16c8"],["E:/网站搭建/myblog/public/archives/2020/11/index.html","9276cdebc22ea19751a9eb40ffb1247f"],["E:/网站搭建/myblog/public/archives/2020/12/index.html","88eab565c5337440a9e85ab576a5e2e0"],["E:/网站搭建/myblog/public/archives/2020/index.html","07c88621d7c5b1d6d3ce09151d70da76"],["E:/网站搭建/myblog/public/archives/2021/01/index.html","f2b9ebfcc1bfb983af34758d01138d6a"],["E:/网站搭建/myblog/public/archives/2021/index.html","2c10001add70dc0eb01f5717be6985a6"],["E:/网站搭建/myblog/public/archives/index.html","a5c9071e80abd58e27929f24458e5920"],["E:/网站搭建/myblog/public/css/index.css","4ba40f74967a5db2b303963823f39f7a"],["E:/网站搭建/myblog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/网站搭建/myblog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/网站搭建/myblog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/网站搭建/myblog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/网站搭建/myblog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/网站搭建/myblog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/网站搭建/myblog/public/index.html","0f86c4782ae0433c62faa75284261583"],["E:/网站搭建/myblog/public/js/main.js","455fface5a0a3ff90766ca254affe502"],["E:/网站搭建/myblog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["E:/网站搭建/myblog/public/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["E:/网站搭建/myblog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["E:/网站搭建/myblog/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["E:/网站搭建/myblog/public/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["E:/网站搭建/myblog/public/messageboard/index.html","5912f52dca38a63d7494ad74bdcfaab0"],["E:/网站搭建/myblog/public/posts/14571/index.html","cc9a2d369debc1a5c4d04e66465aecd6"],["E:/网站搭建/myblog/public/posts/25127/index.html","76772a3d3ebf85d92a646be9fbde2dc6"],["E:/网站搭建/myblog/public/posts/25992/index.html","f6259f852c20cbadbfb099fc42b1123e"],["E:/网站搭建/myblog/public/posts/33946/index.html","91ab41e26d07c7ce7dc8b423b3f428eb"],["E:/网站搭建/myblog/public/posts/37998/index.html","2db4c9253c83eb1c146b067ee2d946ba"],["E:/网站搭建/myblog/public/posts/46463/index.html","2031042935611207f12a5d29afa56dc3"],["E:/网站搭建/myblog/public/posts/49040/index.html","ecc7eab8befa794b4dfea2bf6777dc2f"],["E:/网站搭建/myblog/public/posts/51649/index.html","527f81588c36006d40989aef5a262635"],["E:/网站搭建/myblog/public/posts/55334/index.html","c43d5435cf83eb46acc90a2f60db5182"],["E:/网站搭建/myblog/public/tags/CTF/index.html","e5746cd57b98f73e7d583d0d0860a1bb"],["E:/网站搭建/myblog/public/tags/curl/index.html","497fe61bb9dcbe6f92d760d7bc3f9fa3"],["E:/网站搭建/myblog/public/tags/index.html","06cf0d2699dc4bc28fdbaa977bd27cb0"],["E:/网站搭建/myblog/public/tags/渗透/index.html","0ce5833b4c0bb1316fb0dc0cba56e65d"],["E:/网站搭建/myblog/public/tags/程序/index.html","f229241e0d1466fb47d63434d2bd4f0b"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,c){e=new URL(e);return"/"===e.pathname.slice(-1)&&(e.pathname+=c),e.toString()},cleanResponse=function(c){return c.redirected?("body"in c?Promise.resolve(c.body):c.blob()).then(function(e){return new Response(e,{headers:c.headers,status:c.status,statusText:c.statusText})}):Promise.resolve(c)},createCacheKey=function(e,c,a,t){e=new URL(e);return t&&e.pathname.match(t)||(e.search+=(e.search?"&":"")+encodeURIComponent(c)+"="+encodeURIComponent(a)),e.toString()},isPathWhitelisted=function(e,c){if(0===e.length)return!0;var a=new URL(c).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){e=new URL(e);return e.hash="",e.search=e.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(c){return a.every(function(e){return!e.test(c[0])})}).map(function(e){return e.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var c=e[0],e=e[1],c=new URL(c,self.location),e=createCacheKey(c,hashParamName,e,!1);return[c.toString(),e]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var e=new Request(c,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+c+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(c,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(c){return c.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return c.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(c){var a,e,t;"GET"===c.request.method&&(a=stripIgnoredUrlParameters(c.request.url,ignoreUrlParametersMatching),t="index.html",(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,t),e=urlsToCacheKeys.has(a)),e&&c.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',c.request.url,e),fetch(c.request)})))});