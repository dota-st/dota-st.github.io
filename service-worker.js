"use strict";var precacheConfig=[["E:/网站搭建/myblog/public/about/index.html","6c7763ae7a22fb0375eb8a8c75ea6a10"],["E:/网站搭建/myblog/public/archives/2020/10/index.html","092029c1f823770fae6114bd15e517a0"],["E:/网站搭建/myblog/public/archives/2020/11/index.html","f12d2f90bd843f3d928181df9de1c8f3"],["E:/网站搭建/myblog/public/archives/2020/12/index.html","5778fac8f2a909d8cc93c56b77ec1a79"],["E:/网站搭建/myblog/public/archives/2020/index.html","83d7ff78cfce781c68ec7e9473b68c5b"],["E:/网站搭建/myblog/public/archives/2021/01/index.html","4277309202c343a7103fad7b3c11c4db"],["E:/网站搭建/myblog/public/archives/2021/02/index.html","7c803728be5e4144b1258c064cb1ebc8"],["E:/网站搭建/myblog/public/archives/2021/index.html","5a67173c1ca8761d40869b8d35d525bd"],["E:/网站搭建/myblog/public/archives/index.html","2c0bc1e20f9c64690d23309798f536ef"],["E:/网站搭建/myblog/public/archives/page/2/index.html","886a4959e0391046ea5efe5b0626591b"],["E:/网站搭建/myblog/public/css/index.css","4ba40f74967a5db2b303963823f39f7a"],["E:/网站搭建/myblog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/网站搭建/myblog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/网站搭建/myblog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/网站搭建/myblog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/网站搭建/myblog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/网站搭建/myblog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/网站搭建/myblog/public/index.html","69672cc72cd2df6b34fc4427742426ab"],["E:/网站搭建/myblog/public/js/main.js","455fface5a0a3ff90766ca254affe502"],["E:/网站搭建/myblog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["E:/网站搭建/myblog/public/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["E:/网站搭建/myblog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["E:/网站搭建/myblog/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["E:/网站搭建/myblog/public/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["E:/网站搭建/myblog/public/messageboard/index.html","45732c34222478f99e924d0510310f84"],["E:/网站搭建/myblog/public/page/2/index.html","61cb6d34c088d3a57524feeae61a7007"],["E:/网站搭建/myblog/public/posts/14571/index.html","d0df586c4097966645d704576168e310"],["E:/网站搭建/myblog/public/posts/14827/index.html","3cee5198466de0961a216305a24656cf"],["E:/网站搭建/myblog/public/posts/16692/index.html","cc445e07c4a25895bdaffe3f68dc5da9"],["E:/网站搭建/myblog/public/posts/16813/index.html","5943c488616209ef04462df49dc4a4fe"],["E:/网站搭建/myblog/public/posts/25127/index.html","8eb2b537288c8af1ca9f6a4fc53d582b"],["E:/网站搭建/myblog/public/posts/33946/index.html","7abd1137322c64834fc36887d09a82dc"],["E:/网站搭建/myblog/public/posts/37998/index.html","14e30ed0ff26e5159fc7e58128cf3e7e"],["E:/网站搭建/myblog/public/posts/46463/index.html","6c9cb0d3d3428e822924bca5cb9d675e"],["E:/网站搭建/myblog/public/posts/49040/index.html","2a68f86d6521e435ed6b50d697afd390"],["E:/网站搭建/myblog/public/posts/51649/index.html","419b0177ce93b79b2b76a7e73035ba3a"],["E:/网站搭建/myblog/public/posts/55334/index.html","2defd28283bb833383bb9dd0a5b4f692"],["E:/网站搭建/myblog/public/tags/AWD/index.html","6cf1ed206e1211dede7bbc750356bc12"],["E:/网站搭建/myblog/public/tags/ctf/index.html","fca733e6f601a24f24ff48e66a9bed7b"],["E:/网站搭建/myblog/public/tags/index.html","afbda57e4df9ace16ecdae69c5b79a48"],["E:/网站搭建/myblog/public/tags/渗透/index.html","6c0ca9060b0924835cb22ff1f6be63c1"],["E:/网站搭建/myblog/public/tags/程序/index.html","fb32260b81f7b6393fd9aa05375686d6"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,c){e=new URL(e);return"/"===e.pathname.slice(-1)&&(e.pathname+=c),e.toString()},cleanResponse=function(c){return c.redirected?("body"in c?Promise.resolve(c.body):c.blob()).then(function(e){return new Response(e,{headers:c.headers,status:c.status,statusText:c.statusText})}):Promise.resolve(c)},createCacheKey=function(e,c,t,a){e=new URL(e);return a&&e.pathname.match(a)||(e.search+=(e.search?"&":"")+encodeURIComponent(c)+"="+encodeURIComponent(t)),e.toString()},isPathWhitelisted=function(e,c){if(0===e.length)return!0;var t=new URL(c).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){e=new URL(e);return e.hash="",e.search=e.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(c){return t.every(function(e){return!e.test(c[0])})}).map(function(e){return e.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var c=e[0],e=e[1],c=new URL(c,self.location),e=createCacheKey(c,hashParamName,e,!1);return[c.toString(),e]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var e=new Request(c,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+c+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(c,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(c){return c.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return c.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(c){var t,e,a;"GET"===c.request.method&&(t=stripIgnoredUrlParameters(c.request.url,ignoreUrlParametersMatching),a="index.html",(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,a),e=urlsToCacheKeys.has(t)),e&&c.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',c.request.url,e),fetch(c.request)})))});