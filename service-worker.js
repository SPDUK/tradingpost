"use strict";var precacheConfig=[["/tradingpost/index.html","aa1fec939e14995bac18a629f8606ce0"],["/tradingpost/static/css/main.43d62242.css","96da996eaa78e7eada7e077cc4e109f4"],["/tradingpost/static/js/main.c7e7d483.js","b0a21851d47aad7c630e3d72725a479b"],["/tradingpost/static/media/01.ea9e3b08.jpg","ea9e3b0858a7a19e7c6b4235a22e400e"],["/tradingpost/static/media/02.d509c8bd.jpg","d509c8bd21329cc7a437d1282f52e5c1"],["/tradingpost/static/media/03.9e5ce4d5.jpg","9e5ce4d57473e6a398366ada61a4edee"],["/tradingpost/static/media/04.48536663.jpg","48536663943bce6ad5a51b79f4d48ddc"],["/tradingpost/static/media/05.dded9f17.jpg","dded9f1728b8fa8236e2d5b505b3963c"],["/tradingpost/static/media/06.9fa80d37.jpg","9fa80d3791d9ba7c70a318941090b6f9"],["/tradingpost/static/media/07.d9cf620d.jpg","d9cf620d0f467ee0f39e073f1642fa0b"],["/tradingpost/static/media/08.5baa0aaa.jpg","5baa0aaae401b94ddf7906a7b02a25dc"],["/tradingpost/static/media/10.7ce597e1.jpg","7ce597e1ee55216b52c0824265e5125c"],["/tradingpost/static/media/11.02911523.jpg","029115236157f402a96d3d2218f9f398"],["/tradingpost/static/media/12.3a9101c9.jpg","3a9101c9ae7e7947c1690355a88c7b86"],["/tradingpost/static/media/13.f533385a.jpg","f533385ab94d2bb1e0cca8b67134a8e5"],["/tradingpost/static/media/14.71949b32.jpg","71949b328ff690cae99b80b1205e34d6"],["/tradingpost/static/media/slick.b7c9e1e4.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["/tradingpost/static/media/slick.ced611da.eot","ced611daf7709cc778da928fec876475"],["/tradingpost/static/media/slick.d41f55a7.ttf","d41f55a78e6f49a5512878df1737e58a"],["/tradingpost/static/media/slick.f97e3bbf.svg","f97e3bbf73254b0112091d0192f17aec"],["/tradingpost/static/media/tpcl orng.3c98dd5e.svg","3c98dd5e271af917edba370e62e73781"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/tradingpost/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});