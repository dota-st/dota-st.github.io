"use strict";var precacheConfig=[["E:/网站搭建/myblog/public/about/index.html","f4eeb5811de72fa07891de8bf370dfa3"],["E:/网站搭建/myblog/public/archives/2020/10/index.html","9d005ab6980e3f503228fa98e470de35"],["E:/网站搭建/myblog/public/archives/2020/11/index.html","8cc25a46400dec3d346138ff7e0d11d7"],["E:/网站搭建/myblog/public/archives/2020/12/index.html","2ca39864be37a74c4110ae19659123b7"],["E:/网站搭建/myblog/public/archives/2020/index.html","89cca8633dde3078360be0406b650397"],["E:/网站搭建/myblog/public/archives/2021/01/index.html","9be6b7660c268665d1c3e02cc4ed0931"],["E:/网站搭建/myblog/public/archives/2021/02/index.html","aec3ff380588aa09e4a47413493effdc"],["E:/网站搭建/myblog/public/archives/2021/index.html","a3c1c66e4c09651f8dc8129ca3b4a65d"],["E:/网站搭建/myblog/public/archives/index.html","f013be3e1e92b97aa1c52132308df5e2"],["E:/网站搭建/myblog/public/archives/page/2/index.html","63d5550386f81c3fb40114a1ac197c3b"],["E:/网站搭建/myblog/public/css/index.css","4ba40f74967a5db2b303963823f39f7a"],["E:/网站搭建/myblog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/网站搭建/myblog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/网站搭建/myblog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/网站搭建/myblog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/网站搭建/myblog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/网站搭建/myblog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/网站搭建/myblog/public/index.html","5300f599a2467b778fd8bc903a5a44ba"],["E:/网站搭建/myblog/public/js/main.js","455fface5a0a3ff90766ca254affe502"],["E:/网站搭建/myblog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["E:/网站搭建/myblog/public/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["E:/网站搭建/myblog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["E:/网站搭建/myblog/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["E:/网站搭建/myblog/public/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["E:/网站搭建/myblog/public/messageboard/index.html","26679ee5e09ce4db03126fe06d505fb3"],["E:/网站搭建/myblog/public/page/2/index.html","791044634374efe547be03068270f9a9"],["E:/网站搭建/myblog/public/posts/14571/index.html","d6ce3cb8ab124082001d3883118aa87d"],["E:/网站搭建/myblog/public/posts/14827/index.html","fcbf6e972ab7f2ac9d465542c3fa6b6b"],["E:/网站搭建/myblog/public/posts/16692/index.html","788df8910a84858b1dfdc8ab7f7528c1"],["E:/网站搭建/myblog/public/posts/16813/index.html","812a1b679147f6ef0589981439b56d0e"],["E:/网站搭建/myblog/public/posts/25127/index.html","749880ebc8111f43bddb7c6d9f440a08"],["E:/网站搭建/myblog/public/posts/33946/index.html","cb1c24dbc4d357d8ae5482623fdaec45"],["E:/网站搭建/myblog/public/posts/37998/index.html","244aa6410f7d6204a6a2c29a6db2990d"],["E:/网站搭建/myblog/public/posts/46463/index.html","5e578941369c1ee8563b1f5ceea0f47e"],["E:/网站搭建/myblog/public/posts/49040/index.html","5cf1835c683189bf7aed46b1f61e45d2"],["E:/网站搭建/myblog/public/posts/51649/index.html","66fe1ac300530f3e07c2ab6106265151"],["E:/网站搭建/myblog/public/posts/55334/index.html","6b882d4d750fed731acab489c8c6f51e"],["E:/网站搭建/myblog/public/tags/AWD/index.html","fff5f2f5b21adc6df42b200fc840725d"],["E:/网站搭建/myblog/public/tags/ctf/index.html","f1bb214f5bf415e0559d9bfd11304cec"],["E:/网站搭建/myblog/public/tags/index.html","7015f661f5a3de67c4c6f2ba620da7db"],["E:/网站搭建/myblog/public/tags/渗透/index.html","849065ccb07a1133035f2c40e0f57dfc"],["E:/网站搭建/myblog/public/tags/程序/index.html","515e1d64eb8073cbd7811b9923eebdbc"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,c){e=new URL(e);return"/"===e.pathname.slice(-1)&&(e.pathname+=c),e.toString()},cleanResponse=function(c){return c.redirected?("body"in c?Promise.resolve(c.body):c.blob()).then(function(e){return new Response(e,{headers:c.headers,status:c.status,statusText:c.statusText})}):Promise.resolve(c)},createCacheKey=function(e,c,t,a){e=new URL(e);return a&&e.pathname.match(a)||(e.search+=(e.search?"&":"")+encodeURIComponent(c)+"="+encodeURIComponent(t)),e.toString()},isPathWhitelisted=function(e,c){if(0===e.length)return!0;var t=new URL(c).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){e=new URL(e);return e.hash="",e.search=e.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(c){return t.every(function(e){return!e.test(c[0])})}).map(function(e){return e.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var c=e[0],e=e[1],c=new URL(c,self.location),e=createCacheKey(c,hashParamName,e,!1);return[c.toString(),e]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var e=new Request(c,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+c+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(c,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(c){return c.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return c.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(c){var t,e,a;"GET"===c.request.method&&(t=stripIgnoredUrlParameters(c.request.url,ignoreUrlParametersMatching),a="index.html",(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,a),e=urlsToCacheKeys.has(t)),e&&c.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',c.request.url,e),fetch(c.request)})))});