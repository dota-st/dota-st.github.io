"use strict";var precacheConfig=[["E:/网站搭建/myblog/public/about/index.html","dbedda3c27b6a0af4c989b5956e0aa19"],["E:/网站搭建/myblog/public/archives/2020/10/index.html","0750ecb9f3a59cf81b797a5a9b64502b"],["E:/网站搭建/myblog/public/archives/2020/11/index.html","fb546e51db5c388a7cac2a3c30de2075"],["E:/网站搭建/myblog/public/archives/2020/12/index.html","128351ef854f1bcb537dccbd99a2bcc3"],["E:/网站搭建/myblog/public/archives/2020/index.html","41a184ee1c656b39094925311234c962"],["E:/网站搭建/myblog/public/archives/2021/01/index.html","939fc50e136b063c4dd12e4434aaefe6"],["E:/网站搭建/myblog/public/archives/2021/02/index.html","af1e1ee3b7726907fece90d303c1f24a"],["E:/网站搭建/myblog/public/archives/2021/index.html","343dc71b4cf7c1efd50e1b8363c893ed"],["E:/网站搭建/myblog/public/archives/index.html","d890ffbd681d9bf0eb7c42094e01ba69"],["E:/网站搭建/myblog/public/archives/page/2/index.html","7c334264d53c51d207884df9fc2f4977"],["E:/网站搭建/myblog/public/css/index.css","4ba40f74967a5db2b303963823f39f7a"],["E:/网站搭建/myblog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/网站搭建/myblog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/网站搭建/myblog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/网站搭建/myblog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/网站搭建/myblog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/网站搭建/myblog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/网站搭建/myblog/public/index.html","dda22af7124393c4420d2883b6788285"],["E:/网站搭建/myblog/public/js/main.js","455fface5a0a3ff90766ca254affe502"],["E:/网站搭建/myblog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["E:/网站搭建/myblog/public/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["E:/网站搭建/myblog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["E:/网站搭建/myblog/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["E:/网站搭建/myblog/public/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["E:/网站搭建/myblog/public/messageboard/index.html","f078875a57daecfe5d1ff5f482c7055e"],["E:/网站搭建/myblog/public/page/2/index.html","1f5bc7f15c4cad7a04aa2611e0676ee6"],["E:/网站搭建/myblog/public/posts/14571/index.html","2d80e26a89e64c67dbefd53f7e335885"],["E:/网站搭建/myblog/public/posts/14827/index.html","7ca8544a8d9409ffcee4e97f38eda60d"],["E:/网站搭建/myblog/public/posts/16692/index.html","5d665661e918c26121b91c8e0d143d48"],["E:/网站搭建/myblog/public/posts/16813/index.html","97301401aeb70481d2b17dcb78b17200"],["E:/网站搭建/myblog/public/posts/25127/index.html","61369fddaddfaef28321f1668841cd2b"],["E:/网站搭建/myblog/public/posts/33946/index.html","ba84fe18ce27aa8063a017a842a55f28"],["E:/网站搭建/myblog/public/posts/37998/index.html","5998ca370329be87d3605fc107eabb3e"],["E:/网站搭建/myblog/public/posts/46463/index.html","9d3f25b839f5f6529853feab47618afe"],["E:/网站搭建/myblog/public/posts/49040/index.html","75ebe76d8fab1fc399911e28f4caf8b6"],["E:/网站搭建/myblog/public/posts/51649/index.html","ab8c8aab8c4ffdf9f2a6ff767f22b169"],["E:/网站搭建/myblog/public/posts/55334/index.html","bd41e6a87e91f51a6cd709262b26388a"],["E:/网站搭建/myblog/public/tags/AWD/index.html","fd0e976271a5850932f52aff4a7f30c5"],["E:/网站搭建/myblog/public/tags/ctf/index.html","81fbc117d6e93b15726af420aa2e2606"],["E:/网站搭建/myblog/public/tags/index.html","83559c105c5b617f75039aa6e204d9ff"],["E:/网站搭建/myblog/public/tags/渗透/index.html","25bc1dea3d4805d811a9f5c3a6ff2fbd"],["E:/网站搭建/myblog/public/tags/程序/index.html","111735f58066c6e3c397f0dbab548575"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,c){e=new URL(e);return"/"===e.pathname.slice(-1)&&(e.pathname+=c),e.toString()},cleanResponse=function(c){return c.redirected?("body"in c?Promise.resolve(c.body):c.blob()).then(function(e){return new Response(e,{headers:c.headers,status:c.status,statusText:c.statusText})}):Promise.resolve(c)},createCacheKey=function(e,c,a,t){e=new URL(e);return t&&e.pathname.match(t)||(e.search+=(e.search?"&":"")+encodeURIComponent(c)+"="+encodeURIComponent(a)),e.toString()},isPathWhitelisted=function(e,c){if(0===e.length)return!0;var a=new URL(c).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){e=new URL(e);return e.hash="",e.search=e.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(c){return a.every(function(e){return!e.test(c[0])})}).map(function(e){return e.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var c=e[0],e=e[1],c=new URL(c,self.location),e=createCacheKey(c,hashParamName,e,!1);return[c.toString(),e]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var e=new Request(c,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+c+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(c,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(c){return c.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return c.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(c){var a,e,t;"GET"===c.request.method&&(a=stripIgnoredUrlParameters(c.request.url,ignoreUrlParametersMatching),t="index.html",(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,t),e=urlsToCacheKeys.has(a)),e&&c.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',c.request.url,e),fetch(c.request)})))});