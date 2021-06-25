// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"shrifts/myriadpro/stylesheet.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./MyriadPro-SemiboldIt.eot":[["MyriadPro-SemiboldIt.ad491fca.eot","shrifts/myriadpro/MyriadPro-SemiboldIt.eot"],"shrifts/myriadpro/MyriadPro-SemiboldIt.eot"],"./MyriadPro-SemiboldIt.woff2":[["MyriadPro-SemiboldIt.841a7749.woff2","shrifts/myriadpro/MyriadPro-SemiboldIt.woff2"],"shrifts/myriadpro/MyriadPro-SemiboldIt.woff2"],"./MyriadPro-SemiboldIt.woff":[["MyriadPro-SemiboldIt.7fb0778f.woff","shrifts/myriadpro/MyriadPro-SemiboldIt.woff"],"shrifts/myriadpro/MyriadPro-SemiboldIt.woff"],"./MyriadPro-SemiboldIt.ttf":[["MyriadPro-SemiboldIt.6da352fa.ttf","shrifts/myriadpro/MyriadPro-SemiboldIt.ttf"],"shrifts/myriadpro/MyriadPro-SemiboldIt.ttf"],"./MyriadPro-Black.eot":[["MyriadPro-Black.4b7ae778.eot","shrifts/myriadpro/MyriadPro-Black.eot"],"shrifts/myriadpro/MyriadPro-Black.eot"],"./MyriadPro-Black.woff2":[["MyriadPro-Black.555e09c6.woff2","shrifts/myriadpro/MyriadPro-Black.woff2"],"shrifts/myriadpro/MyriadPro-Black.woff2"],"./MyriadPro-Black.woff":[["MyriadPro-Black.3943d3ed.woff","shrifts/myriadpro/MyriadPro-Black.woff"],"shrifts/myriadpro/MyriadPro-Black.woff"],"./MyriadPro-Black.ttf":[["MyriadPro-Black.70c234f5.ttf","shrifts/myriadpro/MyriadPro-Black.ttf"],"shrifts/myriadpro/MyriadPro-Black.ttf"],"./MyriadPro-Semibold.eot":[["MyriadPro-Semibold.4f314b8a.eot","shrifts/myriadpro/MyriadPro-Semibold.eot"],"shrifts/myriadpro/MyriadPro-Semibold.eot"],"./MyriadPro-Semibold.woff2":[["MyriadPro-Semibold.cc76d9fe.woff2","shrifts/myriadpro/MyriadPro-Semibold.woff2"],"shrifts/myriadpro/MyriadPro-Semibold.woff2"],"./MyriadPro-Semibold.woff":[["MyriadPro-Semibold.2e93cb44.woff","shrifts/myriadpro/MyriadPro-Semibold.woff"],"shrifts/myriadpro/MyriadPro-Semibold.woff"],"./MyriadPro-Semibold.ttf":[["MyriadPro-Semibold.1730ba34.ttf","shrifts/myriadpro/MyriadPro-Semibold.ttf"],"shrifts/myriadpro/MyriadPro-Semibold.ttf"],"./MyriadPro-BlackIt.eot":[["MyriadPro-BlackIt.0b45c211.eot","shrifts/myriadpro/MyriadPro-BlackIt.eot"],"shrifts/myriadpro/MyriadPro-BlackIt.eot"],"./MyriadPro-BlackIt.woff2":[["MyriadPro-BlackIt.2b699ea3.woff2","shrifts/myriadpro/MyriadPro-BlackIt.woff2"],"shrifts/myriadpro/MyriadPro-BlackIt.woff2"],"./MyriadPro-BlackIt.woff":[["MyriadPro-BlackIt.9aff744f.woff","shrifts/myriadpro/MyriadPro-BlackIt.woff"],"shrifts/myriadpro/MyriadPro-BlackIt.woff"],"./MyriadPro-BlackIt.ttf":[["MyriadPro-BlackIt.09a27775.ttf","shrifts/myriadpro/MyriadPro-BlackIt.ttf"],"shrifts/myriadpro/MyriadPro-BlackIt.ttf"],"./MyriadPro-Regular.eot":[["MyriadPro-Regular.74060689.eot","shrifts/myriadpro/MyriadPro-Regular.eot"],"shrifts/myriadpro/MyriadPro-Regular.eot"],"./MyriadPro-Regular.woff2":[["MyriadPro-Regular.2470a10d.woff2","shrifts/myriadpro/MyriadPro-Regular.woff2"],"shrifts/myriadpro/MyriadPro-Regular.woff2"],"./MyriadPro-Regular.woff":[["MyriadPro-Regular.e8e8a2a0.woff","shrifts/myriadpro/MyriadPro-Regular.woff"],"shrifts/myriadpro/MyriadPro-Regular.woff"],"./MyriadPro-Regular.ttf":[["MyriadPro-Regular.bf71c5c9.ttf","shrifts/myriadpro/MyriadPro-Regular.ttf"],"shrifts/myriadpro/MyriadPro-Regular.ttf"],"./MyriadPro-Bold.eot":[["MyriadPro-Bold.83217f73.eot","shrifts/myriadpro/MyriadPro-Bold.eot"],"shrifts/myriadpro/MyriadPro-Bold.eot"],"./MyriadPro-Bold.woff2":[["MyriadPro-Bold.aa884717.woff2","shrifts/myriadpro/MyriadPro-Bold.woff2"],"shrifts/myriadpro/MyriadPro-Bold.woff2"],"./MyriadPro-Bold.woff":[["MyriadPro-Bold.3d6e1d9a.woff","shrifts/myriadpro/MyriadPro-Bold.woff"],"shrifts/myriadpro/MyriadPro-Bold.woff"],"./MyriadPro-Bold.ttf":[["MyriadPro-Bold.666a53a1.ttf","shrifts/myriadpro/MyriadPro-Bold.ttf"],"shrifts/myriadpro/MyriadPro-Bold.ttf"],"./MyriadPro-BoldIt.eot":[["MyriadPro-BoldIt.ea378456.eot","shrifts/myriadpro/MyriadPro-BoldIt.eot"],"shrifts/myriadpro/MyriadPro-BoldIt.eot"],"./MyriadPro-BoldIt.woff2":[["MyriadPro-BoldIt.e400d0bb.woff2","shrifts/myriadpro/MyriadPro-BoldIt.woff2"],"shrifts/myriadpro/MyriadPro-BoldIt.woff2"],"./MyriadPro-BoldIt.woff":[["MyriadPro-BoldIt.f26423ef.woff","shrifts/myriadpro/MyriadPro-BoldIt.woff"],"shrifts/myriadpro/MyriadPro-BoldIt.woff"],"./MyriadPro-BoldIt.ttf":[["MyriadPro-BoldIt.a5d15027.ttf","shrifts/myriadpro/MyriadPro-BoldIt.ttf"],"shrifts/myriadpro/MyriadPro-BoldIt.ttf"],"./MyriadPro-LightIt.eot":[["MyriadPro-LightIt.a2d98d35.eot","shrifts/myriadpro/MyriadPro-LightIt.eot"],"shrifts/myriadpro/MyriadPro-LightIt.eot"],"./MyriadPro-LightIt.woff2":[["MyriadPro-LightIt.326741a1.woff2","shrifts/myriadpro/MyriadPro-LightIt.woff2"],"shrifts/myriadpro/MyriadPro-LightIt.woff2"],"./MyriadPro-LightIt.woff":[["MyriadPro-LightIt.2ccebf22.woff","shrifts/myriadpro/MyriadPro-LightIt.woff"],"shrifts/myriadpro/MyriadPro-LightIt.woff"],"./MyriadPro-LightIt.ttf":[["MyriadPro-LightIt.a9ef6d6b.ttf","shrifts/myriadpro/MyriadPro-LightIt.ttf"],"shrifts/myriadpro/MyriadPro-LightIt.ttf"],"./MyriadPro-It.eot":[["MyriadPro-It.3ed368ca.eot","shrifts/myriadpro/MyriadPro-It.eot"],"shrifts/myriadpro/MyriadPro-It.eot"],"./MyriadPro-It.woff2":[["MyriadPro-It.f01c0f33.woff2","shrifts/myriadpro/MyriadPro-It.woff2"],"shrifts/myriadpro/MyriadPro-It.woff2"],"./MyriadPro-It.woff":[["MyriadPro-It.c1360748.woff","shrifts/myriadpro/MyriadPro-It.woff"],"shrifts/myriadpro/MyriadPro-It.woff"],"./MyriadPro-It.ttf":[["MyriadPro-It.838ba961.ttf","shrifts/myriadpro/MyriadPro-It.ttf"],"shrifts/myriadpro/MyriadPro-It.ttf"],"./MyriadPro-Light.eot":[["MyriadPro-Light.21cbd87d.eot","shrifts/myriadpro/MyriadPro-Light.eot"],"shrifts/myriadpro/MyriadPro-Light.eot"],"./MyriadPro-Light.woff2":[["MyriadPro-Light.9634bea0.woff2","shrifts/myriadpro/MyriadPro-Light.woff2"],"shrifts/myriadpro/MyriadPro-Light.woff2"],"./MyriadPro-Light.woff":[["MyriadPro-Light.fdc1837c.woff","shrifts/myriadpro/MyriadPro-Light.woff"],"shrifts/myriadpro/MyriadPro-Light.woff"],"./MyriadPro-Light.ttf":[["MyriadPro-Light.b92a6339.ttf","shrifts/myriadpro/MyriadPro-Light.ttf"],"shrifts/myriadpro/MyriadPro-Light.ttf"],"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63473" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/stylesheet.77955dc9.js.map