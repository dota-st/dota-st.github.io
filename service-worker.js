"use strict";var precacheConfig=[["E:/网站搭建/myblog/public/about/index.html","40f53fd59a5b58def879729834223d0b"],["E:/网站搭建/myblog/public/archives/2020/10/index.html","afa2c2cfd4f5a0004542bdfdd8400405"],["E:/网站搭建/myblog/public/archives/2020/11/index.html","ee76a16d2acfcc716ca78fbbe667a11d"],["E:/网站搭建/myblog/public/archives/2020/12/index.html","6c02a1604f052e85a1b1b8c307acb63e"],["E:/网站搭建/myblog/public/archives/2020/index.html","ee4d576f633b83f3b8ebdb7711834106"],["E:/网站搭建/myblog/public/archives/2021/01/index.html","d02d7397db3cadd06e7712dcd6fad1cd"],["E:/网站搭建/myblog/public/archives/2021/index.html","402fb7395efbb4fbcb74ae8a4e13f782"],["E:/网站搭建/myblog/public/archives/index.html","92ba595031f65ac46f6701733f7e82b0"],["E:/网站搭建/myblog/public/css/index.css","87d0d5be955a557ba40f7a2aec57fc1b"],["E:/网站搭建/myblog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/网站搭建/myblog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/网站搭建/myblog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/网站搭建/myblog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/网站搭建/myblog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/网站搭建/myblog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/网站搭建/myblog/public/index.html","0fe1085d307c822045dbce5b8f5b196f"],["E:/网站搭建/myblog/public/js/main.js","455fface5a0a3ff90766ca254affe502"],["E:/网站搭建/myblog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["E:/网站搭建/myblog/public/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["E:/网站搭建/myblog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["E:/网站搭建/myblog/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["E:/网站搭建/myblog/public/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["E:/网站搭建/myblog/public/messageboard/index.html","f284cf821e65c5b6dd61bf05e56a5f13"],["E:/网站搭建/myblog/public/posts/14571/index.html","d022fd923aea460caf69dd7aae5d120b"],["E:/网站搭建/myblog/public/posts/25127/index.html","e5cb6edd30f6b28c5b14782405ed6629"],["E:/网站搭建/myblog/public/posts/25992/index.html","2e1b284295c244d76c2097a58b8ab0e2"],["E:/网站搭建/myblog/public/posts/33946/index.html","9c6c4747d8955f50208ce743e4508bb4"],["E:/网站搭建/myblog/public/posts/37998/index.html","7897dbf3ffe741c977ac6d33a778808f"],["E:/网站搭建/myblog/public/posts/46463/index.html","cae13d5baf5b11b52c1f77aec7f19615"],["E:/网站搭建/myblog/public/posts/49040/index.html","9b389558ec8457eecd89f2b06fd71064"],["E:/网站搭建/myblog/public/posts/55334/index.html","7b1eedb87e2df6b555749aee3c67a65b"],["E:/网站搭建/myblog/public/tags/CTF/index.html","b8762d771091235156cb225c5caa4f35"],["E:/网站搭建/myblog/public/tags/curl/index.html","1ef0687779fd905d146a5af768bdac62"],["E:/网站搭建/myblog/public/tags/index.html","6cc25ce0524bffebba2fa484883d67d9"],["E:/网站搭建/myblog/public/tags/渗透/index.html","1257478071c8087c344c87552f9d2d99"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,c){e=new URL(e);return"/"===e.pathname.slice(-1)&&(e.pathname+=c),e.toString()},cleanResponse=function(c){return c.redirected?("body"in c?Promise.resolve(c.body):c.blob()).then(function(e){return new Response(e,{headers:c.headers,status:c.status,statusText:c.statusText})}):Promise.resolve(c)},createCacheKey=function(e,c,t,a){e=new URL(e);return a&&e.pathname.match(a)||(e.search+=(e.search?"&":"")+encodeURIComponent(c)+"="+encodeURIComponent(t)),e.toString()},isPathWhitelisted=function(e,c){if(0===e.length)return!0;var t=new URL(c).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){e=new URL(e);return e.hash="",e.search=e.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(c){return t.every(function(e){return!e.test(c[0])})}).map(function(e){return e.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var c=e[0],e=e[1],c=new URL(c,self.location),e=createCacheKey(c,hashParamName,e,!1);return[c.toString(),e]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var e=new Request(c,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+c+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(c,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(c){return c.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return c.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(c){var t,e,a;"GET"===c.request.method&&(t=stripIgnoredUrlParameters(c.request.url,ignoreUrlParametersMatching),a="index.html",(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,a),e=urlsToCacheKeys.has(t)),e&&c.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',c.request.url,e),fetch(c.request)})))});