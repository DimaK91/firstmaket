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
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"shrifts/gotham/stylesheet.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./Gotham-LightItalic.eot":[["Gotham-LightItalic.5308896b.eot","shrifts/gotham/Gotham-LightItalic.eot"],"shrifts/gotham/Gotham-LightItalic.eot"],"./Gotham-LightItalic.woff2":[["Gotham-LightItalic.9804cd60.woff2","shrifts/gotham/Gotham-LightItalic.woff2"],"shrifts/gotham/Gotham-LightItalic.woff2"],"./Gotham-LightItalic.woff":[["Gotham-LightItalic.1fb6b1d8.woff","shrifts/gotham/Gotham-LightItalic.woff"],"shrifts/gotham/Gotham-LightItalic.woff"],"./Gotham-LightItalic.ttf":[["Gotham-LightItalic.d8a32621.ttf","shrifts/gotham/Gotham-LightItalic.ttf"],"shrifts/gotham/Gotham-LightItalic.ttf"],"./Gotham-BoldItalic.eot":[["Gotham-BoldItalic.7a9755fb.eot","shrifts/gotham/Gotham-BoldItalic.eot"],"shrifts/gotham/Gotham-BoldItalic.eot"],"./Gotham-BoldItalic.woff2":[["Gotham-BoldItalic.25e51a74.woff2","shrifts/gotham/Gotham-BoldItalic.woff2"],"shrifts/gotham/Gotham-BoldItalic.woff2"],"./Gotham-BoldItalic.woff":[["Gotham-BoldItalic.2198e09e.woff","shrifts/gotham/Gotham-BoldItalic.woff"],"shrifts/gotham/Gotham-BoldItalic.woff"],"./Gotham-BoldItalic.ttf":[["Gotham-BoldItalic.a92caa73.ttf","shrifts/gotham/Gotham-BoldItalic.ttf"],"shrifts/gotham/Gotham-BoldItalic.ttf"],"./Gotham-XLight.eot":[["Gotham-XLight.53a07597.eot","shrifts/gotham/Gotham-XLight.eot"],"shrifts/gotham/Gotham-XLight.eot"],"./Gotham-XLight.woff2":[["Gotham-XLight.535e3b5a.woff2","shrifts/gotham/Gotham-XLight.woff2"],"shrifts/gotham/Gotham-XLight.woff2"],"./Gotham-XLight.woff":[["Gotham-XLight.63da5c67.woff","shrifts/gotham/Gotham-XLight.woff"],"shrifts/gotham/Gotham-XLight.woff"],"./Gotham-XLight.ttf":[["Gotham-XLight.0e14dac2.ttf","shrifts/gotham/Gotham-XLight.ttf"],"shrifts/gotham/Gotham-XLight.ttf"],"./Gotham-Thin.eot":[["Gotham-Thin.de4e2630.eot","shrifts/gotham/Gotham-Thin.eot"],"shrifts/gotham/Gotham-Thin.eot"],"./Gotham-Thin.woff2":[["Gotham-Thin.390010cf.woff2","shrifts/gotham/Gotham-Thin.woff2"],"shrifts/gotham/Gotham-Thin.woff2"],"./Gotham-Thin.woff":[["Gotham-Thin.a455cf82.woff","shrifts/gotham/Gotham-Thin.woff"],"shrifts/gotham/Gotham-Thin.woff"],"./Gotham-Thin.ttf":[["Gotham-Thin.ba5c1360.ttf","shrifts/gotham/Gotham-Thin.ttf"],"shrifts/gotham/Gotham-Thin.ttf"],"./Gotham-Book.eot":[["Gotham-Book.d4ef50e3.eot","shrifts/gotham/Gotham-Book.eot"],"shrifts/gotham/Gotham-Book.eot"],"./Gotham-Book.woff2":[["Gotham-Book.a10a3a5c.woff2","shrifts/gotham/Gotham-Book.woff2"],"shrifts/gotham/Gotham-Book.woff2"],"./Gotham-Book.woff":[["Gotham-Book.4deef813.woff","shrifts/gotham/Gotham-Book.woff"],"shrifts/gotham/Gotham-Book.woff"],"./Gotham-Book.ttf":[["Gotham-Book.065f682c.ttf","shrifts/gotham/Gotham-Book.ttf"],"shrifts/gotham/Gotham-Book.ttf"],"./Gotham-ThinItalic.eot":[["Gotham-ThinItalic.749a63fe.eot","shrifts/gotham/Gotham-ThinItalic.eot"],"shrifts/gotham/Gotham-ThinItalic.eot"],"./Gotham-ThinItalic.woff2":[["Gotham-ThinItalic.9f10c67a.woff2","shrifts/gotham/Gotham-ThinItalic.woff2"],"shrifts/gotham/Gotham-ThinItalic.woff2"],"./Gotham-ThinItalic.woff":[["Gotham-ThinItalic.77f9f64d.woff","shrifts/gotham/Gotham-ThinItalic.woff"],"shrifts/gotham/Gotham-ThinItalic.woff"],"./Gotham-ThinItalic.ttf":[["Gotham-ThinItalic.066fd2b4.ttf","shrifts/gotham/Gotham-ThinItalic.ttf"],"shrifts/gotham/Gotham-ThinItalic.ttf"],"./Gotham-MediumItalic.eot":[["Gotham-MediumItalic.642bda6b.eot","shrifts/gotham/Gotham-MediumItalic.eot"],"shrifts/gotham/Gotham-MediumItalic.eot"],"./Gotham-MediumItalic.woff2":[["Gotham-MediumItalic.5e1aabb8.woff2","shrifts/gotham/Gotham-MediumItalic.woff2"],"shrifts/gotham/Gotham-MediumItalic.woff2"],"./Gotham-MediumItalic.woff":[["Gotham-MediumItalic.3dda8be5.woff","shrifts/gotham/Gotham-MediumItalic.woff"],"shrifts/gotham/Gotham-MediumItalic.woff"],"./Gotham-MediumItalic.ttf":[["Gotham-MediumItalic.f588b95b.ttf","shrifts/gotham/Gotham-MediumItalic.ttf"],"shrifts/gotham/Gotham-MediumItalic.ttf"],"./Gotham-UltraItalic.eot":[["Gotham-UltraItalic.a4712f8f.eot","shrifts/gotham/Gotham-UltraItalic.eot"],"shrifts/gotham/Gotham-UltraItalic.eot"],"./Gotham-UltraItalic.woff2":[["Gotham-UltraItalic.60cb7777.woff2","shrifts/gotham/Gotham-UltraItalic.woff2"],"shrifts/gotham/Gotham-UltraItalic.woff2"],"./Gotham-UltraItalic.woff":[["Gotham-UltraItalic.645db763.woff","shrifts/gotham/Gotham-UltraItalic.woff"],"shrifts/gotham/Gotham-UltraItalic.woff"],"./Gotham-UltraItalic.ttf":[["Gotham-UltraItalic.4d34e6ff.ttf","shrifts/gotham/Gotham-UltraItalic.ttf"],"shrifts/gotham/Gotham-UltraItalic.ttf"],"./Gotham-BookItalic.eot":[["Gotham-BookItalic.13bc9f2c.eot","shrifts/gotham/Gotham-BookItalic.eot"],"shrifts/gotham/Gotham-BookItalic.eot"],"./Gotham-BookItalic.woff2":[["Gotham-BookItalic.67a01080.woff2","shrifts/gotham/Gotham-BookItalic.woff2"],"shrifts/gotham/Gotham-BookItalic.woff2"],"./Gotham-BookItalic.woff":[["Gotham-BookItalic.3586c72e.woff","shrifts/gotham/Gotham-BookItalic.woff"],"shrifts/gotham/Gotham-BookItalic.woff"],"./Gotham-BookItalic.ttf":[["Gotham-BookItalic.778d5dd0.ttf","shrifts/gotham/Gotham-BookItalic.ttf"],"shrifts/gotham/Gotham-BookItalic.ttf"],"./Gotham-BlackItalic.eot":[["Gotham-BlackItalic.96669daf.eot","shrifts/gotham/Gotham-BlackItalic.eot"],"shrifts/gotham/Gotham-BlackItalic.eot"],"./Gotham-BlackItalic.woff2":[["Gotham-BlackItalic.5b8b3793.woff2","shrifts/gotham/Gotham-BlackItalic.woff2"],"shrifts/gotham/Gotham-BlackItalic.woff2"],"./Gotham-BlackItalic.woff":[["Gotham-BlackItalic.6a196358.woff","shrifts/gotham/Gotham-BlackItalic.woff"],"shrifts/gotham/Gotham-BlackItalic.woff"],"./Gotham-BlackItalic.ttf":[["Gotham-BlackItalic.abb781b1.ttf","shrifts/gotham/Gotham-BlackItalic.ttf"],"shrifts/gotham/Gotham-BlackItalic.ttf"],"./Gotham-Light.eot":[["Gotham-Light.068f6987.eot","shrifts/gotham/Gotham-Light.eot"],"shrifts/gotham/Gotham-Light.eot"],"./Gotham-Light.woff2":[["Gotham-Light.2aff0c3f.woff2","shrifts/gotham/Gotham-Light.woff2"],"shrifts/gotham/Gotham-Light.woff2"],"./Gotham-Light.woff":[["Gotham-Light.5a68096c.woff","shrifts/gotham/Gotham-Light.woff"],"shrifts/gotham/Gotham-Light.woff"],"./Gotham-Light.ttf":[["Gotham-Light.08b7cc79.ttf","shrifts/gotham/Gotham-Light.ttf"],"shrifts/gotham/Gotham-Light.ttf"],"./Gotham-Bold.eot":[["Gotham-Bold.3cb0a565.eot","shrifts/gotham/Gotham-Bold.eot"],"shrifts/gotham/Gotham-Bold.eot"],"./Gotham-Bold.woff2":[["Gotham-Bold.1f061a6e.woff2","shrifts/gotham/Gotham-Bold.woff2"],"shrifts/gotham/Gotham-Bold.woff2"],"./Gotham-Bold.woff":[["Gotham-Bold.656cf034.woff","shrifts/gotham/Gotham-Bold.woff"],"shrifts/gotham/Gotham-Bold.woff"],"./Gotham-Bold.ttf":[["Gotham-Bold.5dff2451.ttf","shrifts/gotham/Gotham-Bold.ttf"],"shrifts/gotham/Gotham-Bold.ttf"],"./Gotham-Medium.eot":[["Gotham-Medium.026e83d4.eot","shrifts/gotham/Gotham-Medium.eot"],"shrifts/gotham/Gotham-Medium.eot"],"./Gotham-Medium.woff2":[["Gotham-Medium.b8ed3417.woff2","shrifts/gotham/Gotham-Medium.woff2"],"shrifts/gotham/Gotham-Medium.woff2"],"./Gotham-Medium.woff":[["Gotham-Medium.c86e80ff.woff","shrifts/gotham/Gotham-Medium.woff"],"shrifts/gotham/Gotham-Medium.woff"],"./Gotham-Medium.ttf":[["Gotham-Medium.68fc2eab.ttf","shrifts/gotham/Gotham-Medium.ttf"],"shrifts/gotham/Gotham-Medium.ttf"],"./Gotham-Ultra.eot":[["Gotham-Ultra.60e482b9.eot","shrifts/gotham/Gotham-Ultra.eot"],"shrifts/gotham/Gotham-Ultra.eot"],"./Gotham-Ultra.woff2":[["Gotham-Ultra.cfb67a85.woff2","shrifts/gotham/Gotham-Ultra.woff2"],"shrifts/gotham/Gotham-Ultra.woff2"],"./Gotham-Ultra.woff":[["Gotham-Ultra.94c28ddd.woff","shrifts/gotham/Gotham-Ultra.woff"],"shrifts/gotham/Gotham-Ultra.woff"],"./Gotham-Ultra.ttf":[["Gotham-Ultra.89dc264f.ttf","shrifts/gotham/Gotham-Ultra.ttf"],"shrifts/gotham/Gotham-Ultra.ttf"],"./Gotham-XLightItalic.eot":[["Gotham-XLightItalic.3ccaf933.eot","shrifts/gotham/Gotham-XLightItalic.eot"],"shrifts/gotham/Gotham-XLightItalic.eot"],"./Gotham-XLightItalic.woff2":[["Gotham-XLightItalic.f9ba42f3.woff2","shrifts/gotham/Gotham-XLightItalic.woff2"],"shrifts/gotham/Gotham-XLightItalic.woff2"],"./Gotham-XLightItalic.woff":[["Gotham-XLightItalic.a1dee7da.woff","shrifts/gotham/Gotham-XLightItalic.woff"],"shrifts/gotham/Gotham-XLightItalic.woff"],"./Gotham-XLightItalic.ttf":[["Gotham-XLightItalic.8fef86fa.ttf","shrifts/gotham/Gotham-XLightItalic.ttf"],"shrifts/gotham/Gotham-XLightItalic.ttf"],"./Gotham-Black.eot":[["Gotham-Black.7ebc8491.eot","shrifts/gotham/Gotham-Black.eot"],"shrifts/gotham/Gotham-Black.eot"],"./Gotham-Black.woff2":[["Gotham-Black.1fb2bb79.woff2","shrifts/gotham/Gotham-Black.woff2"],"shrifts/gotham/Gotham-Black.woff2"],"./Gotham-Black.woff":[["Gotham-Black.a4c4e105.woff","shrifts/gotham/Gotham-Black.woff"],"shrifts/gotham/Gotham-Black.woff"],"./Gotham-Black.ttf":[["Gotham-Black.1f78e1ec.ttf","shrifts/gotham/Gotham-Black.ttf"],"shrifts/gotham/Gotham-Black.ttf"],"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54596" + '/');

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
//# sourceMappingURL=/stylesheet.773ffd6f.js.map