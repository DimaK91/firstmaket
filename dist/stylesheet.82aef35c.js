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
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"shrifts/roboto/stylesheet.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./Roboto-BlackItalic.eot":[["Roboto-BlackItalic.3773a7c6.eot","shrifts/roboto/Roboto-BlackItalic.eot"],"shrifts/roboto/Roboto-BlackItalic.eot"],"./Roboto-BlackItalic.woff2":[["Roboto-BlackItalic.4aeecb9f.woff2","shrifts/roboto/Roboto-BlackItalic.woff2"],"shrifts/roboto/Roboto-BlackItalic.woff2"],"./Roboto-BlackItalic.woff":[["Roboto-BlackItalic.fd17b31d.woff","shrifts/roboto/Roboto-BlackItalic.woff"],"shrifts/roboto/Roboto-BlackItalic.woff"],"./Roboto-BlackItalic.ttf":[["Roboto-BlackItalic.cc6e6546.ttf","shrifts/roboto/Roboto-BlackItalic.ttf"],"shrifts/roboto/Roboto-BlackItalic.ttf"],"./Roboto-Bold.eot":[["Roboto-Bold.feb75ce3.eot","shrifts/roboto/Roboto-Bold.eot"],"shrifts/roboto/Roboto-Bold.eot"],"./Roboto-Bold.woff2":[["Roboto-Bold.253fe1db.woff2","shrifts/roboto/Roboto-Bold.woff2"],"shrifts/roboto/Roboto-Bold.woff2"],"./Roboto-Bold.woff":[["Roboto-Bold.83fd2204.woff","shrifts/roboto/Roboto-Bold.woff"],"shrifts/roboto/Roboto-Bold.woff"],"./Roboto-Bold.ttf":[["Roboto-Bold.67f3aa1f.ttf","shrifts/roboto/Roboto-Bold.ttf"],"shrifts/roboto/Roboto-Bold.ttf"],"./Roboto-BoldItalic.eot":[["Roboto-BoldItalic.bb4e6f62.eot","shrifts/roboto/Roboto-BoldItalic.eot"],"shrifts/roboto/Roboto-BoldItalic.eot"],"./Roboto-BoldItalic.woff2":[["Roboto-BoldItalic.30cce989.woff2","shrifts/roboto/Roboto-BoldItalic.woff2"],"shrifts/roboto/Roboto-BoldItalic.woff2"],"./Roboto-BoldItalic.woff":[["Roboto-BoldItalic.46de7d7d.woff","shrifts/roboto/Roboto-BoldItalic.woff"],"shrifts/roboto/Roboto-BoldItalic.woff"],"./Roboto-BoldItalic.ttf":[["Roboto-BoldItalic.6a73a36c.ttf","shrifts/roboto/Roboto-BoldItalic.ttf"],"shrifts/roboto/Roboto-BoldItalic.ttf"],"./Roboto-LightItalic.eot":[["Roboto-LightItalic.6685e717.eot","shrifts/roboto/Roboto-LightItalic.eot"],"shrifts/roboto/Roboto-LightItalic.eot"],"./Roboto-LightItalic.woff2":[["Roboto-LightItalic.c5aa1e55.woff2","shrifts/roboto/Roboto-LightItalic.woff2"],"shrifts/roboto/Roboto-LightItalic.woff2"],"./Roboto-LightItalic.woff":[["Roboto-LightItalic.5eee9f56.woff","shrifts/roboto/Roboto-LightItalic.woff"],"shrifts/roboto/Roboto-LightItalic.woff"],"./Roboto-LightItalic.ttf":[["Roboto-LightItalic.99c334bf.ttf","shrifts/roboto/Roboto-LightItalic.ttf"],"shrifts/roboto/Roboto-LightItalic.ttf"],"./Roboto-Regular.eot":[["Roboto-Regular.4aad6e02.eot","shrifts/roboto/Roboto-Regular.eot"],"shrifts/roboto/Roboto-Regular.eot"],"./Roboto-Regular.woff2":[["Roboto-Regular.c1ffd65b.woff2","shrifts/roboto/Roboto-Regular.woff2"],"shrifts/roboto/Roboto-Regular.woff2"],"./Roboto-Regular.woff":[["Roboto-Regular.e23f6c70.woff","shrifts/roboto/Roboto-Regular.woff"],"shrifts/roboto/Roboto-Regular.woff"],"./Roboto-Regular.ttf":[["Roboto-Regular.fe96656c.ttf","shrifts/roboto/Roboto-Regular.ttf"],"shrifts/roboto/Roboto-Regular.ttf"],"./Roboto-ThinItalic.eot":[["Roboto-ThinItalic.870720f7.eot","shrifts/roboto/Roboto-ThinItalic.eot"],"shrifts/roboto/Roboto-ThinItalic.eot"],"./Roboto-ThinItalic.woff2":[["Roboto-ThinItalic.ae281187.woff2","shrifts/roboto/Roboto-ThinItalic.woff2"],"shrifts/roboto/Roboto-ThinItalic.woff2"],"./Roboto-ThinItalic.woff":[["Roboto-ThinItalic.1ae29e6b.woff","shrifts/roboto/Roboto-ThinItalic.woff"],"shrifts/roboto/Roboto-ThinItalic.woff"],"./Roboto-ThinItalic.ttf":[["Roboto-ThinItalic.bae88dbd.ttf","shrifts/roboto/Roboto-ThinItalic.ttf"],"shrifts/roboto/Roboto-ThinItalic.ttf"],"./Roboto-Black.eot":[["Roboto-Black.bfe328e5.eot","shrifts/roboto/Roboto-Black.eot"],"shrifts/roboto/Roboto-Black.eot"],"./Roboto-Black.woff2":[["Roboto-Black.b93f0fce.woff2","shrifts/roboto/Roboto-Black.woff2"],"shrifts/roboto/Roboto-Black.woff2"],"./Roboto-Black.woff":[["Roboto-Black.c84bc01c.woff","shrifts/roboto/Roboto-Black.woff"],"shrifts/roboto/Roboto-Black.woff"],"./Roboto-Black.ttf":[["Roboto-Black.0a47a117.ttf","shrifts/roboto/Roboto-Black.ttf"],"shrifts/roboto/Roboto-Black.ttf"],"./Roboto-MediumItalic.eot":[["Roboto-MediumItalic.136a528c.eot","shrifts/roboto/Roboto-MediumItalic.eot"],"shrifts/roboto/Roboto-MediumItalic.eot"],"./Roboto-MediumItalic.woff2":[["Roboto-MediumItalic.c2b0ac34.woff2","shrifts/roboto/Roboto-MediumItalic.woff2"],"shrifts/roboto/Roboto-MediumItalic.woff2"],"./Roboto-MediumItalic.woff":[["Roboto-MediumItalic.757ff35e.woff","shrifts/roboto/Roboto-MediumItalic.woff"],"shrifts/roboto/Roboto-MediumItalic.woff"],"./Roboto-MediumItalic.ttf":[["Roboto-MediumItalic.99477984.ttf","shrifts/roboto/Roboto-MediumItalic.ttf"],"shrifts/roboto/Roboto-MediumItalic.ttf"],"./Roboto-Thin.eot":[["Roboto-Thin.57d8995e.eot","shrifts/roboto/Roboto-Thin.eot"],"shrifts/roboto/Roboto-Thin.eot"],"./Roboto-Thin.woff2":[["Roboto-Thin.21ea093e.woff2","shrifts/roboto/Roboto-Thin.woff2"],"shrifts/roboto/Roboto-Thin.woff2"],"./Roboto-Thin.woff":[["Roboto-Thin.a7375b49.woff","shrifts/roboto/Roboto-Thin.woff"],"shrifts/roboto/Roboto-Thin.woff"],"./Roboto-Thin.ttf":[["Roboto-Thin.f806131c.ttf","shrifts/roboto/Roboto-Thin.ttf"],"shrifts/roboto/Roboto-Thin.ttf"],"./Roboto-Light.eot":[["Roboto-Light.177df5ab.eot","shrifts/roboto/Roboto-Light.eot"],"shrifts/roboto/Roboto-Light.eot"],"./Roboto-Light.woff2":[["Roboto-Light.432b2876.woff2","shrifts/roboto/Roboto-Light.woff2"],"shrifts/roboto/Roboto-Light.woff2"],"./Roboto-Light.woff":[["Roboto-Light.2f5e87d2.woff","shrifts/roboto/Roboto-Light.woff"],"shrifts/roboto/Roboto-Light.woff"],"./Roboto-Light.ttf":[["Roboto-Light.f285dbd6.ttf","shrifts/roboto/Roboto-Light.ttf"],"shrifts/roboto/Roboto-Light.ttf"],"./Roboto-Italic.eot":[["Roboto-Italic.cf743d48.eot","shrifts/roboto/Roboto-Italic.eot"],"shrifts/roboto/Roboto-Italic.eot"],"./Roboto-Italic.woff2":[["Roboto-Italic.00c72cb2.woff2","shrifts/roboto/Roboto-Italic.woff2"],"shrifts/roboto/Roboto-Italic.woff2"],"./Roboto-Italic.woff":[["Roboto-Italic.3d69d1fd.woff","shrifts/roboto/Roboto-Italic.woff"],"shrifts/roboto/Roboto-Italic.woff"],"./Roboto-Italic.ttf":[["Roboto-Italic.f05f9d4d.ttf","shrifts/roboto/Roboto-Italic.ttf"],"shrifts/roboto/Roboto-Italic.ttf"],"./Roboto-Medium.eot":[["Roboto-Medium.5dfc7bb7.eot","shrifts/roboto/Roboto-Medium.eot"],"shrifts/roboto/Roboto-Medium.eot"],"./Roboto-Medium.woff2":[["Roboto-Medium.6a51d00d.woff2","shrifts/roboto/Roboto-Medium.woff2"],"shrifts/roboto/Roboto-Medium.woff2"],"./Roboto-Medium.woff":[["Roboto-Medium.bdcd92e2.woff","shrifts/roboto/Roboto-Medium.woff"],"shrifts/roboto/Roboto-Medium.woff"],"./Roboto-Medium.ttf":[["Roboto-Medium.dda2a76b.ttf","shrifts/roboto/Roboto-Medium.ttf"],"shrifts/roboto/Roboto-Medium.ttf"],"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
//# sourceMappingURL=/stylesheet.82aef35c.js.map