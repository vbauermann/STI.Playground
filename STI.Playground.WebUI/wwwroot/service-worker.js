/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/app/app.globals.js","e5044c488b29fb20efaeb5939bc3aae7"],["/app/app.module.js","2f2f686c89e9924df13bdf5c7e175ce6"],["/app/components/header/header.component.js","d01066f3aca617009c8db7bc070427d9"],["/app/components/header/header.html","c3fc396274dc92c9653f1d952190c35e"],["/app/components/inputs/login/login-139/login-139.component.js","35d0ea22e228d2ecbb9f547dd8c8cbd8"],["/app/components/inputs/login/login-139/login-139.html","ce099e30c3be926dd1d28fc39c536702"],["/app/components/inputs/login/login-default/login-default.component.js","6242c8f0807373473b07318bfd6d20eb"],["/app/components/inputs/login/login-default/login-default.html","1a3bc7e5925ccb44ee0ea67e28cce0b5"],["/app/components/inputs/login/login-x/login-x.component.js","e265f90c067c43a72fd3951d131b0419"],["/app/dashboard/dashboard.controller.js","3d0b0fe758a119868de989becc8e9bd1"],["/app/dashboard/dashboard.html","fa97a9d37246097b9affcf3819631634"],["/app/dashboard/dashboard.routes.js","63cf6b1073f96649b73d0435434647bb"],["/app/playground.controller.js","bcd2b09e53d28c1ee523f2f3ab3d3834"],["/app/playground.html","6102a1d6713d23c9e473d67f325c7c82"],["/app/playground.routes.js","df93c6a64f827d24a6e3a06b0ea47433"],["/app/tokenization-ntk/tokenization-ntk.controller.js","275ac2128a769eb33c683c2271b1373e"],["/app/tokenization-ntk/tokenization-ntk.html","a43efbddc53f6642cf46dfe0584c6a91"],["/app/tokenization-ntk/tokenization-ntk.routes.js","e2b43e8efbeb0a61f88f71fa7fcb2ae6"],["/assets/css/inline.css","0a08688b4fba436f3fd1021c248f5553"],["/assets/images/clear.png","e17de36d2c2ddf7b068892fa4678cd31"],["/assets/images/cloudy-scattered-showers.png","855f638a52b7fbc1ec2a3d596fedbd28"],["/assets/images/cloudy.png","6b2148e05e5fe4bf2a218438afcb6d3c"],["/assets/images/cloudy_s_sunny.png","827577d4371bd0c83789fac7a2fe1546"],["/assets/images/fog.png","44f56cff88530b5e3315890d6c209ac2"],["/assets/images/ic_add_white_24px.svg","c3379830302abe84f64db87b5bac9faa"],["/assets/images/ic_refresh_white_24px.svg","f73272d4efd233a85e8c649d26126f01"],["/assets/images/icons/icon-128x128.png","b1b0f7b8adb5bb5568c370b1c8af29e9"],["/assets/images/icons/icon-144x144.png","928538579a59f24888281462ce75ef7a"],["/assets/images/icons/icon-152x152.png","300cd90366750e4abbab2205d219624e"],["/assets/images/icons/icon-192x192.png","ac65b2a8d6e7ad80fdab29f76edd91c7"],["/assets/images/icons/icon-256x256.png","827577d4371bd0c83789fac7a2fe1546"],["/assets/images/icons/icon-32x32.png","940d8b2f15cc3bee9e6997f9408bbea7"],["/assets/images/partly-cloudy.png","a2e10546a6f7000e1b7d5846ba492f9b"],["/assets/images/rain.png","5a2600b1199d1c95da554a5f97861c04"],["/assets/images/scattered-showers.png","ec178dbbcd45abb9db4be616801df3b0"],["/assets/images/sleet.png","15ee1fe8d87a5b1ca604eb56729f3f08"],["/assets/images/snow.png","6f9fa355f32b353a18a1dd3f89ac3fd7"],["/assets/images/thunderstorm.png","c4df123a44c17a1b5d1e8b33b268ea5c"],["/assets/images/wind.png","c1136285b55a50c206f0a96f64080767"],["/lib/angular-ui-router/release/angular-ui-router.min.js","20e546b433c682148f1c6e3ad9b30055"],["/lib/angular/angular.min.js","591d496870ad67cc8ca024cc8c8d5e40"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







