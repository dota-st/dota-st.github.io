"use strict";var precacheConfig=[["E:/网站搭建/myblog/public/about/index.html","c28f615c58e4ef1c55b7618199d0f573"],["E:/网站搭建/myblog/public/archives/2020/10/index.html","3a29559185332e45ee29deb807d6b5f5"],["E:/网站搭建/myblog/public/archives/2020/11/index.html","4fbdca1f7c06a55f34886011cc7f82a1"],["E:/网站搭建/myblog/public/archives/2020/12/index.html","25415028e0dbfecab43e0760df39eb3e"],["E:/网站搭建/myblog/public/archives/2020/index.html","862a7fe949f0c4d7fedfb87de9a38942"],["E:/网站搭建/myblog/public/archives/2021/01/index.html","0d2862a31e0f048629c9909f3d1a2dbb"],["E:/网站搭建/myblog/public/archives/2021/02/index.html","6341147520fba50c8d400bf83095fc35"],["E:/网站搭建/myblog/public/archives/2021/index.html","315ee8305799466dbff6f62e3cded1a0"],["E:/网站搭建/myblog/public/archives/index.html","43a02d72e2a07ccdb4b89d74085cd7eb"],["E:/网站搭建/myblog/public/archives/page/2/index.html","3fa78c42259005966374a0eb14bd7030"],["E:/网站搭建/myblog/public/css/index.css","4ba40f74967a5db2b303963823f39f7a"],["E:/网站搭建/myblog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/网站搭建/myblog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/网站搭建/myblog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/网站搭建/myblog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/网站搭建/myblog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/网站搭建/myblog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/网站搭建/myblog/public/index.html","ead24ea46069cc631671dfd45f7bd691"],["E:/网站搭建/myblog/public/js/main.js","455fface5a0a3ff90766ca254affe502"],["E:/网站搭建/myblog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["E:/网站搭建/myblog/public/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["E:/网站搭建/myblog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["E:/网站搭建/myblog/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["E:/网站搭建/myblog/public/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["E:/网站搭建/myblog/public/messageboard/index.html","57f772ab21eadb50903218f18507e637"],["E:/网站搭建/myblog/public/page/2/index.html","fc07e826de547baaf29c301a3eaacdd1"],["E:/网站搭建/myblog/public/posts/14571/index.html","2d80e26a89e64c67dbefd53f7e335885"],["E:/网站搭建/myblog/public/posts/14827/index.html","3b2aa68f5013a1b6017edd965feaf322"],["E:/网站搭建/myblog/public/posts/16692/index.html","5d665661e918c26121b91c8e0d143d48"],["E:/网站搭建/myblog/public/posts/16813/index.html","97301401aeb70481d2b17dcb78b17200"],["E:/网站搭建/myblog/public/posts/25127/index.html","61369fddaddfaef28321f1668841cd2b"],["E:/网站搭建/myblog/public/posts/33946/index.html","ba84fe18ce27aa8063a017a842a55f28"],["E:/网站搭建/myblog/public/posts/37998/index.html","5998ca370329be87d3605fc107eabb3e"],["E:/网站搭建/myblog/public/posts/46463/index.html","9d3f25b839f5f6529853feab47618afe"],["E:/网站搭建/myblog/public/posts/49040/index.html","cd065183436e2ca2244047684ee86fa2"],["E:/网站搭建/myblog/public/posts/51649/index.html","ab8c8aab8c4ffdf9f2a6ff767f22b169"],["E:/网站搭建/myblog/public/posts/55334/index.html","bd41e6a87e91f51a6cd709262b26388a"],["E:/网站搭建/myblog/public/tags/AWD/index.html","b6fda4adfac89a0fdd2202ed5089ac90"],["E:/网站搭建/myblog/public/tags/ctf/index.html","68ed51c183b7799df6e7ee9e8fa87405"],["E:/网站搭建/myblog/public/tags/index.html","bebf4cf55a3a930ccc515f24016bb1e4"],["E:/网站搭建/myblog/public/tags/渗透/index.html","4b2e4af717b60a27c6f1418acdec2083"],["E:/网站搭建/myblog/public/tags/程序/index.html","7d98c0af3170946482c982cddfdc20a4"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){e=new URL(e);return"/"===e.pathname.slice(-1)&&(e.pathname+=a),e.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,c,t){e=new URL(e);return t&&e.pathname.match(t)||(e.search+=(e.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),e.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,c){e=new URL(e);return e.hash="",e.search=e.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return c.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],e=e[1],a=new URL(a,self.location),e=createCacheKey(a,hashParamName,e,!1);return[a.toString(),e]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!c.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){var c,e,t;"GET"===a.request.method&&(c=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html",(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),e=urlsToCacheKeys.has(c)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)})))});