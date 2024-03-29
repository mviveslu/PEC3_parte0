// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hHaBV":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "62aa90a93e8f727a";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"5CRsP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _dataIntestingPlayersJson = require("../json/data-intesting-players.json");
var _dataIntestingPlayersJsonDefault = parcelHelpers.interopDefault(_dataIntestingPlayersJson);
var _goldPng = require("../img/icons/Gold.png");
var _goldPngDefault = parcelHelpers.interopDefault(_goldPng);
var _silverPng = require("../img/icons/Silver.png");
var _silverPngDefault = parcelHelpers.interopDefault(_silverPng);
var _bronzePng = require("../img/icons/Bronze.png");
var _bronzePngDefault = parcelHelpers.interopDefault(_bronzePng);
var _frSvg = require("../../node_modules/country-flag-icons/1x1/FR.svg");
var _frSvgDefault = parcelHelpers.interopDefault(_frSvg);
var _esSvg = require("../../node_modules/country-flag-icons/1x1/ES.svg");
var _esSvgDefault = parcelHelpers.interopDefault(_esSvg);
var _chSvg = require("../../node_modules/country-flag-icons/1x1/CH.svg");
var _chSvgDefault = parcelHelpers.interopDefault(_chSvg);
var _dkSvg = require("../../node_modules/country-flag-icons/1x1/DK.svg");
var _dkSvgDefault = parcelHelpers.interopDefault(_dkSvg);
var _bvSvg = require("../../node_modules/country-flag-icons/1x1/BV.svg");
var _bvSvgDefault = parcelHelpers.interopDefault(_bvSvg);
var _lauraGlauserWikipediaCommonsWebp = require("../img/InterestingPlayers/Laura_Glauser_wikipediaCommons.webp");
var _lauraGlauserWikipediaCommonsWebpDefault = parcelHelpers.interopDefault(_lauraGlauserWikipediaCommonsWebp);
var _noraMorkWikipediaCommonsWebp = require("../img/InterestingPlayers/Nora_Mork_wikipediaCommons.webp");
var _noraMorkWikipediaCommonsWebpDefault = parcelHelpers.interopDefault(_noraMorkWikipediaCommonsWebp);
var _stineOftedalWikipediaCommonsWebp = require("../img/InterestingPlayers/Stine_Oftedal_wikipediaCommons.webp");
var _stineOftedalWikipediaCommonsWebpDefault = parcelHelpers.interopDefault(_stineOftedalWikipediaCommonsWebp);
var _carmenMartinWikipediaCommonsWebp = require("../img/InterestingPlayers/Carmen_Martin_wikipediaCommons.webp");
var _carmenMartinWikipediaCommonsWebpDefault = parcelHelpers.interopDefault(_carmenMartinWikipediaCommonsWebp);
var _nathalieHagmanWikipediaCommonsWebp = require("../img/InterestingPlayers/Nathalie_Hagman_wikipediaCommons.webp");
var _nathalieHagmanWikipediaCommonsWebpDefault = parcelHelpers.interopDefault(_nathalieHagmanWikipediaCommonsWebp);
var _sandraToft2WikipediaCommonsWebp = require("../img/InterestingPlayers/Sandra_Toft_2_wikipediaCommons.webp");
var _sandraToft2WikipediaCommonsWebpDefault = parcelHelpers.interopDefault(_sandraToft2WikipediaCommonsWebp);
var _coralieLassourceWikipediaCommonsWebp = require("../img/InterestingPlayers/Coralie_Lassource_wikipediaCommons.webp");
var _coralieLassourceWikipediaCommonsWebpDefault = parcelHelpers.interopDefault(_coralieLassourceWikipediaCommonsWebp);
var _lauraGlauser201601310300Jpg = require("../img/InterestingPlayers/Resized/Laura_Glauser_20160131_0_300.jpg");
var _lauraGlauser201601310300JpgDefault = parcelHelpers.interopDefault(_lauraGlauser201601310300Jpg);
var _noraMork20141115300Jpg = require("../img/InterestingPlayers/Resized/Nora_Mork_20141115_300.jpg");
var _noraMork20141115300JpgDefault = parcelHelpers.interopDefault(_noraMork20141115300Jpg);
var _carmenMartin420171108300Jpg = require("../img/InterestingPlayers/Resized/Carmen_Martin_4_20171108_300.jpg");
var _carmenMartin420171108300JpgDefault = parcelHelpers.interopDefault(_carmenMartin420171108300Jpg);
var _nathalieHagmanIPHTTH20160403300Jpg = require("../img/InterestingPlayers/Resized/Nathalie_Hagman_IPH_TTH_20160403_300.jpg");
var _nathalieHagmanIPHTTH20160403300JpgDefault = parcelHelpers.interopDefault(_nathalieHagmanIPHTTH20160403300Jpg);
var _sandraToft220181118300Jpg = require("../img/InterestingPlayers/Resized/Sandra_Toft_2_20181118_300.jpg");
var _sandraToft220181118300JpgDefault = parcelHelpers.interopDefault(_sandraToft220181118300Jpg);
var _coralieLassourceMeilleureDefenseuse201516300Jpg = require("../img/InterestingPlayers/Resized/Coralie_Lassource-Meilleure_defenseuse_2015-16_300.jpg");
var _coralieLassourceMeilleureDefenseuse201516300JpgDefault = parcelHelpers.interopDefault(_coralieLassourceMeilleureDefenseuse201516300Jpg);
var _lauraGlauser201601310500Jpg = require("../img/InterestingPlayers/Resized/Laura_Glauser_20160131_0_500.jpg");
var _lauraGlauser201601310500JpgDefault = parcelHelpers.interopDefault(_lauraGlauser201601310500Jpg);
var _noraMork20141115500Jpg = require("../img/InterestingPlayers/Resized/Nora_Mork_20141115_500.jpg");
var _noraMork20141115500JpgDefault = parcelHelpers.interopDefault(_noraMork20141115500Jpg);
var _carmenMartin420171108500Jpg = require("../img/InterestingPlayers/Resized/Carmen_Martin_4_20171108_500.jpg");
var _carmenMartin420171108500JpgDefault = parcelHelpers.interopDefault(_carmenMartin420171108500Jpg);
var _nathalieHagmanIPHTTH20160403500Jpg = require("../img/InterestingPlayers/Resized/Nathalie_Hagman_IPH_TTH_20160403_500.jpg");
var _nathalieHagmanIPHTTH20160403500JpgDefault = parcelHelpers.interopDefault(_nathalieHagmanIPHTTH20160403500Jpg);
var _sandraToft220181118500Jpg = require("../img/InterestingPlayers/Resized/Sandra_Toft_2_20181118_500.jpg");
var _sandraToft220181118500JpgDefault = parcelHelpers.interopDefault(_sandraToft220181118500Jpg);
var _coralieLassourceMeilleureDefenseuse201516500Jpg = require("../img/InterestingPlayers/Resized/Coralie_Lassource-Meilleure_defenseuse_2015-16_500.jpg");
var _coralieLassourceMeilleureDefenseuse201516500JpgDefault = parcelHelpers.interopDefault(_coralieLassourceMeilleureDefenseuse201516500Jpg);
var _lauraGlauser201601310700Jpg = require("../img/InterestingPlayers/Resized/Laura_Glauser_20160131_0_700.jpg");
var _lauraGlauser201601310700JpgDefault = parcelHelpers.interopDefault(_lauraGlauser201601310700Jpg);
var _noraMork20141115700Jpg = require("../img/InterestingPlayers/Resized/Nora_Mork_20141115_700.jpg");
var _noraMork20141115700JpgDefault = parcelHelpers.interopDefault(_noraMork20141115700Jpg);
var _carmenMartin420171108700Jpg = require("../img/InterestingPlayers/Resized/Carmen_Martin_4_20171108_700.jpg");
var _carmenMartin420171108700JpgDefault = parcelHelpers.interopDefault(_carmenMartin420171108700Jpg);
var _nathalieHagmanIPHTTH20160403700Jpg = require("../img/InterestingPlayers/Resized/Nathalie_Hagman_IPH_TTH_20160403_700.jpg");
var _nathalieHagmanIPHTTH20160403700JpgDefault = parcelHelpers.interopDefault(_nathalieHagmanIPHTTH20160403700Jpg);
var _sandraToft220181118700Jpg = require("../img/InterestingPlayers/Resized/Sandra_Toft_2_20181118_700.jpg");
var _sandraToft220181118700JpgDefault = parcelHelpers.interopDefault(_sandraToft220181118700Jpg);
var _coralieLassourceMeilleureDefenseuse201516700Jpg = require("../img/InterestingPlayers/Resized/Coralie_Lassource-Meilleure_defenseuse_2015-16_700.jpg");
var _coralieLassourceMeilleureDefenseuse201516700JpgDefault = parcelHelpers.interopDefault(_coralieLassourceMeilleureDefenseuse201516700Jpg);
var _lauraGlauser201601310900Jpg = require("../img/InterestingPlayers/Resized/Laura_Glauser_20160131_0_900.jpg");
var _lauraGlauser201601310900JpgDefault = parcelHelpers.interopDefault(_lauraGlauser201601310900Jpg);
var _noraMork20141115900Jpg = require("../img/InterestingPlayers/Resized/Nora_Mork_20141115_900.jpg");
var _noraMork20141115900JpgDefault = parcelHelpers.interopDefault(_noraMork20141115900Jpg);
var _carmenMartin420171108900Jpg = require("../img/InterestingPlayers/Resized/Carmen_Martin_4_20171108_900.jpg");
var _carmenMartin420171108900JpgDefault = parcelHelpers.interopDefault(_carmenMartin420171108900Jpg);
var _nathalieHagmanIPHTTH20160403900Jpg = require("../img/InterestingPlayers/Resized/Nathalie_Hagman_IPH_TTH_20160403_900.jpg");
var _nathalieHagmanIPHTTH20160403900JpgDefault = parcelHelpers.interopDefault(_nathalieHagmanIPHTTH20160403900Jpg);
var _sandraToft220181118900Jpg = require("../img/InterestingPlayers/Resized/Sandra_Toft_2_20181118_900.jpg");
var _sandraToft220181118900JpgDefault = parcelHelpers.interopDefault(_sandraToft220181118900Jpg);
var _coralieLassourceMeilleureDefenseuse201516900Jpg = require("../img/InterestingPlayers/Resized/Coralie_Lassource-Meilleure_defenseuse_2015-16_900.jpg");
var _coralieLassourceMeilleureDefenseuse201516900JpgDefault = parcelHelpers.interopDefault(_coralieLassourceMeilleureDefenseuse201516900Jpg);
var _stineOftedal20170519300Jpg = require("../img/InterestingPlayers/Resized/Stine_Oftedal_20170519_300.jpg");
var _stineOftedal20170519300JpgDefault = parcelHelpers.interopDefault(_stineOftedal20170519300Jpg);
var _stineOftedal20170519500Jpg = require("../img/InterestingPlayers/Resized/Stine_Oftedal_20170519_500.jpg");
var _stineOftedal20170519500JpgDefault = parcelHelpers.interopDefault(_stineOftedal20170519500Jpg);
var _stineOftedal20170519700Jpg = require("../img/InterestingPlayers/Resized/Stine_Oftedal_20170519_700.jpg");
var _stineOftedal20170519700JpgDefault = parcelHelpers.interopDefault(_stineOftedal20170519700Jpg);
var _stineOftedal20170519900Jpg = require("../img/InterestingPlayers/Resized/Stine_Oftedal_20170519_900.jpg");
var _stineOftedal20170519900JpgDefault = parcelHelpers.interopDefault(_stineOftedal20170519900Jpg);
const images = [
    (0, _lauraGlauserWikipediaCommonsWebpDefault.default),
    (0, _noraMorkWikipediaCommonsWebpDefault.default),
    (0, _stineOftedalWikipediaCommonsWebpDefault.default),
    (0, _carmenMartinWikipediaCommonsWebpDefault.default),
    (0, _nathalieHagmanWikipediaCommonsWebpDefault.default),
    (0, _sandraToft2WikipediaCommonsWebpDefault.default),
    (0, _coralieLassourceWikipediaCommonsWebpDefault.default)
];
const imagesSized300 = [
    (0, _lauraGlauser201601310300JpgDefault.default),
    (0, _noraMork20141115300JpgDefault.default),
    (0, _stineOftedal20170519300JpgDefault.default),
    (0, _carmenMartin420171108300JpgDefault.default),
    (0, _nathalieHagmanIPHTTH20160403300JpgDefault.default),
    (0, _sandraToft220181118300JpgDefault.default),
    (0, _coralieLassourceMeilleureDefenseuse201516300JpgDefault.default)
];
const imagesSized500 = [
    (0, _lauraGlauser201601310500JpgDefault.default),
    (0, _noraMork20141115500JpgDefault.default),
    (0, _stineOftedal20170519500JpgDefault.default),
    (0, _carmenMartin420171108500JpgDefault.default),
    (0, _nathalieHagmanIPHTTH20160403500JpgDefault.default),
    (0, _sandraToft220181118500JpgDefault.default),
    (0, _coralieLassourceMeilleureDefenseuse201516500JpgDefault.default)
];
const imagesSized700 = [
    (0, _lauraGlauser201601310700JpgDefault.default),
    (0, _noraMork20141115700JpgDefault.default),
    (0, _stineOftedal20170519700JpgDefault.default),
    (0, _carmenMartin420171108700JpgDefault.default),
    (0, _nathalieHagmanIPHTTH20160403700JpgDefault.default),
    (0, _sandraToft220181118700JpgDefault.default),
    (0, _coralieLassourceMeilleureDefenseuse201516700JpgDefault.default)
];
const imagesSized900 = [
    (0, _lauraGlauser201601310900JpgDefault.default),
    (0, _noraMork20141115900JpgDefault.default),
    (0, _stineOftedal20170519900JpgDefault.default),
    (0, _carmenMartin420171108900JpgDefault.default),
    (0, _nathalieHagmanIPHTTH20160403900JpgDefault.default),
    (0, _sandraToft220181118900JpgDefault.default),
    (0, _coralieLassourceMeilleureDefenseuse201516900JpgDefault.default)
];
function createanElement(typeElement, classNameElement) {
    const element = document.createElement(typeElement);
    element.setAttribute("class", classNameElement);
    return element;
}
function articleHeader(namePlayerComplete, positionPlayer, bornPlayer, nameFlag, instagramLink, facebookLink, positionPhoto) {
    const headerArticle = document.getElementsByClassName("article-player-header")[0];
    const photoid = imagesSized300[positionPhoto];
    const photoid2 = imagesSized500[positionPhoto];
    const photoid3 = imagesSized700[positionPhoto];
    const photoid4 = imagesSized900[positionPhoto];
    console.log(positionPhoto);
    headerArticle.innerHTML = `
  <picture>
    <source media="(max-width: 375px)"  srcset=${photoid}>
    <source media="(max-width: 950px)"  srcset=${photoid2}>
    <source media="(max-width: 1400px)" srcset=${photoid3}>
    <img src=${photoid4} alt="Player image">
  </picture>
          <div class="div-introduction-player-info">
            <h1 class="article-player-name">
                ${namePlayerComplete}
            </h1>
            <div class="p-with-flag">
                <p class="article-player-biography-introduction">
                    ${positionPlayer}, ${bornPlayer}
                </p>
                <div>
                    <img src = "${getCountryFlag(nameFlag)}" class="article-player-flag-country" alt="country flag" loading="lazy">
                </div>
            </div>
            <div class="social-media-player">
                <a href="${instagramLink}" aria-label="Access directly to the player's instagram">
                  <svg width="40px" height="40px" viewBox="0 0 48 48" version="1.1" id="Shopicons" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xml:space="preserve" fill="#265290">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                    <g id="SVGRepo_iconCarrier"> <style>.st1{fill:#fff}.st2,.st3{fill:none;stroke:#666;stroke-width:4;stroke-miterlimit:10}.st3{stroke-width:6}</style> <g id="instagram_00000127030415805702900630000013396224003006281109_"> <path d="M0-.019h48v48H0v-48z" fill="none"/> <path d="M36.019 8A3.986 3.986 0 0 1 40 11.981v24.038A3.986 3.986 0 0 1 36.019 40H11.981A3.986 3.986 0 0 1 8 36.019V11.981A3.986 3.986 0 0 1 11.981 8h24.038m0-4H11.981A7.98 7.98 0 0 0 4 11.981v24.038A7.98 7.98 0 0 0 11.981 44h24.038A7.98 7.98 0 0 0 44 36.019V11.981A7.98 7.98 0 0 0 36.019 4z"/> <path d="M24 34c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm0-16c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6z"/> <circle cx="35" cy="13" r="2"/> </g> </g>
                  </svg> 
                </a>
                <a href="${facebookLink}" aria-label="Access directly to the player's facebook">  
                  <svg fill="#265290" width="40px" height="40px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#265290">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                    <g id="SVGRepo_iconCarrier"> <title>facebook</title> <path d="M30.996 16.091c-0.001-8.281-6.714-14.994-14.996-14.994s-14.996 6.714-14.996 14.996c0 7.455 5.44 13.639 12.566 14.8l0.086 0.012v-10.478h-3.808v-4.336h3.808v-3.302c-0.019-0.167-0.029-0.361-0.029-0.557 0-2.923 2.37-5.293 5.293-5.293 0.141 0 0.281 0.006 0.42 0.016l-0.018-0.001c1.199 0.017 2.359 0.123 3.491 0.312l-0.134-0.019v3.69h-1.892c-0.086-0.012-0.185-0.019-0.285-0.019-1.197 0-2.168 0.97-2.168 2.168 0 0.068 0.003 0.135 0.009 0.202l-0.001-0.009v2.812h4.159l-0.665 4.336h-3.494v10.478c7.213-1.174 12.653-7.359 12.654-14.814v-0z"/> </g>
                  </svg>
                </a>
            </div>
        </div>
    `;
    prinArticle.append(headerArticle);
}
/*Returns the medal image */ function medalColor(medal) {
    if (medal === "Gold") return 0, _goldPngDefault.default;
    else if (medal == "Silver") return 0, _silverPngDefault.default;
    else return 0, _bronzePngDefault.default;
}
/*Devuelve las imágenes de cada país */ function getCountryFlag(country) {
    /*Possibles paisos de les jugadores */ if (country === "FR") return 0, _frSvgDefault.default;
    else if (country == "ES") return 0, _esSvgDefault.default;
    else if (country == "BV") return 0, _bvSvgDefault.default;
    else if (country == "CH") return 0, _chSvgDefault.default;
    else if (country == "DK") return 0, _dkSvgDefault.default;
}
/*Seccion de medallas */ function medals(array) {
    const section = createanElement("section", "section");
    const titleSection = document.createElement("h2");
    titleSection.innerHTML = "Medals";
    const container = createanElement("div", "container");
    const btable = createanElement("div", "b-table");
    const divWrapper = createanElement("div", "table-wrapper has-mobile-cards");
    const tableWidth = createanElement("table", "table is-fullwidth is-striped is-hoverable is-fullwidth");
    const head = document.createElement("thead");
    const rowFields = document.createElement("tr");
    const rowField1 = document.createElement("th");
    const rowField2 = document.createElement("th");
    rowField2.innerHTML = "Event";
    const rowField3 = document.createElement("th");
    rowField3.innerHTML = "Year";
    const rowField4 = document.createElement("th");
    rowField4.innerHTML = "Location";
    rowFields.append(rowField1, rowField2, rowField3, rowField4);
    head.append(rowFields);
    tableWidth.append(head);
    const bodyTable = document.createElement("tbody");
    array.map((element)=>{
        const fila = document.createElement("tr");
        const eventMedalImage = createanElement("td", "is-image-cell");
        const divImage = createanElement("div", "image");
        const medalImage = createanElement("img", "is-rounded");
        medalImage.setAttribute("src", medalColor(element.medal));
        medalImage.setAttribute("alt", "medal photo");
        medalImage.setAttribute("loading", "lazy");
        divImage.append(medalImage);
        eventMedalImage.append(divImage);
        const eventCompetition = createanElement("td", "data-label");
        eventCompetition.innerHTML = element.event;
        const eventYearCompetition = createanElement("td", "data-label");
        eventYearCompetition.innerHTML = element.year;
        const eventLocationCompetition = createanElement("td", "data-label");
        eventLocationCompetition.innerHTML = element.location;
        fila.append(eventMedalImage, eventCompetition, eventYearCompetition, eventLocationCompetition);
        bodyTable.append(fila);
        tableWidth.append(bodyTable);
    });
    divWrapper.append(tableWidth);
    btable.append(divWrapper);
    container.append(btable);
    section.append(titleSection, container);
    prinArticle.append(section);
}
/*Seccion de premios individuales */ function individualAwards(array) {
    const section = createanElement("section", "section");
    const titleSection = document.createElement("h2");
    titleSection.innerHTML = "Individual Awards";
    const container = createanElement("div", "container");
    const btable = createanElement("div", "b-table");
    const divWrapper = createanElement("div", "table-wrapper has-mobile-cards");
    const tableWidth = createanElement("table", "table is-fullwidth is-striped is-hoverable is-fullwidth");
    const head = document.createElement("thead");
    const rowFields = document.createElement("tr");
    const rowField1 = document.createElement("th");
    const rowField2 = document.createElement("th");
    rowField2.innerHTML = "Year";
    const rowField3 = document.createElement("th");
    rowField3.innerHTML = "Competition";
    rowFields.append(rowField1, rowField2, rowField3);
    head.append(rowFields);
    tableWidth.append(head);
    const bodyTable = document.createElement("tbody");
    array.map((element)=>{
        const fila = document.createElement("tr");
        const cellNotext = document.createElement("td");
        const eventCompetition = createanElement("td", "data-label");
        eventCompetition.innerHTML = element.year;
        const eventYearCompetition = createanElement("td", "data-label");
        eventYearCompetition.innerHTML = element.competition;
        fila.append(cellNotext, eventCompetition, eventYearCompetition);
        bodyTable.append(fila);
        tableWidth.append(bodyTable);
    });
    divWrapper.append(tableWidth);
    btable.append(divWrapper);
    container.append(btable);
    section.append(titleSection, container);
    prinArticle.append(section);
}
/*Seccion de biografía*/ function biography(array) {
    const section = createanElement("section", "section-biography");
    const titleSection = document.createElement("h2");
    titleSection.innerHTML = "Biography";
    section.append(titleSection);
    array.map((element)=>{
        const biographyP = createanElement("p", "biography-player-p");
        biographyP.innerHTML = element;
        section.append(biographyP);
    });
    prinArticle.append(section);
}
/*Construir listado de jugadoras relacionadas */ function relatedPlayers(array) {
    const section = createanElement("section", "section-relatedPlayers");
    const titleSection = document.createElement("h2");
    titleSection.innerHTML = "Related Players";
    section.append(titleSection);
    const listRelatedPlayers = createanElement("ul", "related-player-list");
    array.map((element)=>{
        const jugadora = (0, _dataIntestingPlayersJsonDefault.default).find((jugadora)=>jugadora.id == element);
        const liRelatedPlayer = createanElement("li", "related-player");
        liRelatedPlayer.innerHTML = `
        <a href="${"./detallesJugadora.html?id=" + jugadora.id}"class="link-to-related-player">
         <img class="image-related-player" loading="lazy" src="${images[jugadora.idPhoto]}" alt="related">
         <div>
         <span class="player-related-name">
                ${jugadora.name}
            </span>
            <span class="player-related-position">
                ${jugadora.position}
            </span>
         </div>
        </a>
        `;
        listRelatedPlayers.append(liRelatedPlayer);
    });
    section.append(listRelatedPlayers);
    prinArticle.append(section);
}
const valores = window.location.search;
const params = new URLSearchParams(valores);
const idJugadora = params.get("id");
const prinArticle = document.querySelector("#article-player");
/*Parámetro mal escrito o nulo */ if (!idJugadora) window.location.href = "./detallesJugadora.html?id=001";
const resultado = (0, _dataIntestingPlayersJsonDefault.default).find((element)=>element.id === idJugadora);
/*No lo encuentra */ if (!resultado) window.location.href = "./detallesJugadora.html?id=001";
else {
    articleHeader(resultado.name, resultado.position, resultado.born, resultado.country, resultado.instagramLink, resultado.facebookLink, resultado.idPhoto);
    biography(resultado.biography);
    relatedPlayers(resultado.relatedPlayers);
    individualAwards(resultado.individualAwards);
    medals(resultado.medals);
}
const toggleButton = document.getElementById("button-menu");
const navWrapper = document.getElementById("nav");
toggleButton.addEventListener("click", ()=>{
    toggleButton.classList.toggle("close");
    navWrapper.classList.toggle("show");
});
navWrapper.addEventListener("click", (e)=>{
    if (e.target.id === "nav") {
        navWrapper.classList.remove("show");
        toggleButton.classList.remove("close");
    }
});

},{"../json/data-intesting-players.json":"jIR5q","../img/icons/Gold.png":"GgRsl","../img/icons/Silver.png":"k8NF9","../img/icons/Bronze.png":"fHiBP","../../node_modules/country-flag-icons/1x1/FR.svg":"bnYIO","../../node_modules/country-flag-icons/1x1/ES.svg":"1DxH2","../../node_modules/country-flag-icons/1x1/CH.svg":"i7qSW","../../node_modules/country-flag-icons/1x1/DK.svg":"aDb03","../../node_modules/country-flag-icons/1x1/BV.svg":"7u1Wn","../img/InterestingPlayers/Laura_Glauser_wikipediaCommons.webp":"go6Jx","../img/InterestingPlayers/Nora_Mork_wikipediaCommons.webp":"bzVIo","../img/InterestingPlayers/Stine_Oftedal_wikipediaCommons.webp":"2Oi8c","../img/InterestingPlayers/Carmen_Martin_wikipediaCommons.webp":"iSrHa","../img/InterestingPlayers/Nathalie_Hagman_wikipediaCommons.webp":"fh4tY","../img/InterestingPlayers/Sandra_Toft_2_wikipediaCommons.webp":"aii5w","../img/InterestingPlayers/Coralie_Lassource_wikipediaCommons.webp":"g1U0D","../img/InterestingPlayers/Resized/Laura_Glauser_20160131_0_300.jpg":"6wKNw","../img/InterestingPlayers/Resized/Nora_Mork_20141115_300.jpg":"g3k4V","../img/InterestingPlayers/Resized/Carmen_Martin_4_20171108_300.jpg":"5JRRW","../img/InterestingPlayers/Resized/Nathalie_Hagman_IPH_TTH_20160403_300.jpg":"dERln","../img/InterestingPlayers/Resized/Sandra_Toft_2_20181118_300.jpg":"eW76S","../img/InterestingPlayers/Resized/Coralie_Lassource-Meilleure_defenseuse_2015-16_300.jpg":"5B03l","../img/InterestingPlayers/Resized/Laura_Glauser_20160131_0_500.jpg":"bGgLK","../img/InterestingPlayers/Resized/Nora_Mork_20141115_500.jpg":"2oeko","../img/InterestingPlayers/Resized/Carmen_Martin_4_20171108_500.jpg":"kgmzG","../img/InterestingPlayers/Resized/Nathalie_Hagman_IPH_TTH_20160403_500.jpg":"5Jaem","../img/InterestingPlayers/Resized/Sandra_Toft_2_20181118_500.jpg":"gJTQl","../img/InterestingPlayers/Resized/Coralie_Lassource-Meilleure_defenseuse_2015-16_500.jpg":"jyVoi","../img/InterestingPlayers/Resized/Laura_Glauser_20160131_0_700.jpg":"1OJvL","../img/InterestingPlayers/Resized/Nora_Mork_20141115_700.jpg":"dbXvN","../img/InterestingPlayers/Resized/Carmen_Martin_4_20171108_700.jpg":"1z8zn","../img/InterestingPlayers/Resized/Nathalie_Hagman_IPH_TTH_20160403_700.jpg":"l5DGB","../img/InterestingPlayers/Resized/Sandra_Toft_2_20181118_700.jpg":"9Dh0K","../img/InterestingPlayers/Resized/Coralie_Lassource-Meilleure_defenseuse_2015-16_700.jpg":"bcxnl","../img/InterestingPlayers/Resized/Laura_Glauser_20160131_0_900.jpg":"8w3zC","../img/InterestingPlayers/Resized/Nora_Mork_20141115_900.jpg":"jL8je","../img/InterestingPlayers/Resized/Carmen_Martin_4_20171108_900.jpg":"5ue7W","../img/InterestingPlayers/Resized/Nathalie_Hagman_IPH_TTH_20160403_900.jpg":"kjLEK","../img/InterestingPlayers/Resized/Sandra_Toft_2_20181118_900.jpg":"PMNrD","../img/InterestingPlayers/Resized/Coralie_Lassource-Meilleure_defenseuse_2015-16_900.jpg":"NJ0JS","../img/InterestingPlayers/Resized/Stine_Oftedal_20170519_300.jpg":"iKdQ5","../img/InterestingPlayers/Resized/Stine_Oftedal_20170519_500.jpg":"3C6Lo","../img/InterestingPlayers/Resized/Stine_Oftedal_20170519_700.jpg":"6vh1C","../img/InterestingPlayers/Resized/Stine_Oftedal_20170519_900.jpg":"hT6wj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jIR5q":[function(require,module,exports) {
module.exports = JSON.parse('[{"id":"001","instagramLink":"https://www.instagram.com/lauraglauser/","facebookLink":"https://www.facebook.com/people/Laura-Glauser/100057727374453/","idPhoto":0,"name":"Laura Glausser","country":"FR","biography":["Laura Glauser (born 20 August 1993) is a French handballer for CSM București and the French national team.","Laura Glauser played in Győr since 2020,and she requested to leave the club before her contract expires in 2023. The reason is that she wants to have more playing time. She can leave on a transfer fee from her next club which is rumored to be CSM Bucuresti.","She has won different individual awards such as All-Star Goalkeeper from  EHF Champions League in 2022(more details in individual awards)","She has won different team awards with her national team such as silver medal in Olympic Games in 2006 in Brazil(more details in medals).","She has won different individual awards such as All-Star Goalkeeper from  EHF Champions League in 2022(more details in individual awards)","She has won different team awards with her national team such as silver medal in Olympic Games in 2006 in Brazil(more details in medals).","She has won different individual awards such as All-Star Goalkeeper from  EHF Champions League in 2022(more details in individual awards)","She has won different team awards with her national team such as silver medal in Olympic Games in 2006 in Brazil(more details in medals)."],"relatedPlayers":["005","004"],"position":"Goalkeeper","current team":"Bucuresti","medals":[{"medal":"Silver","year":2016,"event":"Olympic Games","location":"Brazil"},{"medal":"Silver","year":2021,"event":"World Championship","location":"Spain"},{"medal":"Gold","year":2018,"event":"European Championship","location":"France"},{"medal":"Silver","year":2020,"event":"European Championship","location":"Denmark"},{"medal":"Bronze","year":2016,"event":"European Championship","location":"Sweden"}],"born":"20/09/1993, France","individualAwards":[{"year":"2015","competition":"Best goalkeeper of the IHF Junior World Championship"},{"year":"2015","competition":"Best Young Goalkeeper at the 2015 World Championships"},{"year":"2016","competition":"French Championship Best Goalkeeper"},{"year":"2022","competition":"All-Star Goalkeeper of the EHF Champions League"}]},{"id":"002","instagramLink":"https://www.instagram.com/noramrk_9/","facebookLink":"https://www.facebook.com/people/Nora-M%C3%B8rk/100044528492484/","idPhoto":1,"name":"Nora Mork","country":"BV","relatedPlayers":["003","004"],"biography":["Nora M\xf8rk (born 5 April 1991) is a Norwegian handball player for Team Esbjerg and the Norwegian national team.","She made her debut on the Norwegian national team on 21 September 2010.","Before joining Team Esbjerg, she played for B\xe6kkelaget, Aalborg DH, Nj\xe5rd, Larvik, Győr, CSM București and Vipers Kristiansand.","She has won different individual awards such as Most Valuable Player of the Junior European Championship in 2009(more details in individual awards)","She has won different team awards with her national team such as Bronze medal in Olympic Games in 2006 in Brazil(more details in medals)."],"position":"Right back","current team":"Team Esbjerg","medals":[{"medal":"Bronze","year":2016,"event":"Olympic Games","location":"Brazil"},{"medal":"Bronze","year":2020,"event":"Olympic Games","location":"Tokyo"},{"medal":"Gold","year":2015,"event":"World Championship","location":"Denmark"},{"medal":"Gold","year":2021,"event":"World Championship","location":"Spain"},{"medal":"Gold","year":2020,"event":"European Championship","location":"Denmark"},{"medal":"Gold","year":2016,"event":"European Championship","location":"Sweden"},{"medal":"Gold","year":2014,"event":"European Championship","location":"Croatia/Hungary"},{"medal":"Gold","year":2010,"event":"European Championship","location":"Denamrk/Norway"},{"medal":"Gold","year":2010,"event":"Junior World Championship","location":"South Korea"},{"medal":"Gold","year":2010,"event":"Junior European Championship","location":"Hungary"}],"born":"20/09/1993, Norway","individualAwards":[{"year":"2009","competition":"Most Valuable Player of the Junior European Championship"},{"year":"2013/2014","competition":"Most Valuable Player of Postenligaen"},{"year":"2014/2015, 2015/2016","competition":"Most Valuable Player of Grundigligaen"},{"year":"2016 (62 goals), 2020 (52 goals)","competition":"Topscorer of the Summer Olympics"},{"year":"2016 (53 goals), 2020 (52 goals)","competition":"Topscorer of the European Championship"},{"year":"2017 (66 goals)","competition":"Topscorer of the World Championship"},{"year":"2007","competition":"All-Star Right Back of the European Youth Championship"},{"year":"2008/2009","competition":"All-Star Right Back of the European Open Championship"},{"year":"2009","competition":"All-Star Right Back of the Junior European Championship"},{"year":"2009/2010","competition":"All-Star Right Wing of Eliteserien"},{"year":"2010/2011","competition":"All-Star Right Wing of Postenligaen"},{"year":"2013/2014","competition":"All-Star Right Back of Postenligaen"},{"year":"2014, 2016, 2020","competition":"All-Star Right Back of the European Championship"},{"year":"2014/2015, 2015/2016","competition":"All-Star Right Back of Grundigligaen"},{"year":"2015, 2017, 2021","competition":"All-Star Right Back of the World Championship"},{"year":"2015, 2016, 2017, 2021, 2022","competition":"All-Star Right Back of the EHF Champions League"},{"year":"2015, 2017","competition":"All-Star Right Back of M\xf8belringen Cup"},{"year":"2008","competition":"NISO Best Young Player of the Year"},{"year":"2008/2009","competition":"Best Rookie of Eliteserien"},{"year":"2017","competition":"Foreign Handballer of the Year in Hungary"},{"year":"2015, 2016, 2020, 2021","competition":"Handball-Planet.com All-Star Right Back"},{"year":"2017, 2021","competition":"Handball-Planet.com Player of the Year:"}]},{"id":"003","idPhoto":2,"instagramLink":"https://www.instagram.com/stine.bredaloftedal/","facebookLink":"https://es-es.facebook.com/people/Stine-Bredal-Oftedal/100044176132556/","name":"Stine Oftedal","country":"BV","biography":["Stine Bredal Oftedal (born 25 September 1991) is a Norwegian handball player for Győri Audi ETO KC and the Norwegian national team, where she is the team captain.","She was voted World Handball Player of the Year 2019 by the International Handball Federation","She hails from Nittedal and started her career in Nit/Hak HK.[2] She then continued to Fjellhammer IL before continuing to Helset IF.Helset is a feeder team for Stab\xe6k H\xe5ndball, and so she has played for Stab\xe6k since the 2008–09 season while still being registered in Helset.","She studied at BI Norwegian Business School.Previously she competed for Nittedal IL in the javelin throw, throwing 32.08 m at the age 13","She has won different individual awards such as IHF World Player of the Year in 2019(more details in individual awards)","She has won different team awards with her national team such as Bronze medal in Olympic Games in 2006 in Brazil(more details in medals)."],"position":"Centre back","current team":"Győri Audi ETO KC","relatedPlayers":["001","002"],"medals":[{"medal":"Bronze","year":2016,"event":"Olympic Games","location":"Brazil"},{"medal":"Bronze","year":2020,"event":"Olympic Games","location":"Tokyo"},{"medal":"Gold","year":2011,"event":"World Championship","location":"Brazil"},{"medal":"Gold","year":2015,"event":"World Championship","location":"Denmark"},{"medal":"Gold","year":2021,"event":"World Championship","location":"Spain"},{"medal":"Silver","year":2017,"event":"World Championship","location":"Germany"},{"medal":"Gold","year":2020,"event":"European Championship","location":"Denmark"},{"medal":"Gold","year":2016,"event":"European Championship","location":"Sweden"},{"medal":"Gold","year":2014,"event":"European Championship","location":"Croatia/Hungary"},{"medal":"Gold","year":2010,"event":"European Championship","location":"Denamrk/Norway"},{"medal":"Silver","year":2012,"event":"European Championship","location":"Serbia"},{"medal":"Gold","year":2010,"event":"Junior World Championship","location":"South Korea"},{"medal":"Gold","year":2010,"event":"Junior European Championship","location":"Hungary"}],"born":"25/09/1991, Norway","individualAwards":[{"year":"2019","competition":"IHF World Player of the Year"},{"year":"2008","competition":"All-Star Left Wing of the U18 European Open"},{"year":"2010","competition":"All-Star Centre Back of the Junior World Championship"},{"year":"2010/2011","competition":"All-Star Centre Back of Postenligaen"},{"year":"2014","competition":"French Championship MVP"},{"year":"2015","competition":"All-Star Centre Back of the World Championship"},{"year":"2014, 2016","competition":"French Championship Best Playmaker"},{"year":"2017","competition":"Most Valuable Player of the World Championship"},{"year":"2018,2020","competition":"All-Star Centre Back of the European Championship"},{"year":"2019, 2020, 2021, 2022","competition":"All-Star Centre Back of the EHF Champions League"},{"year":"2019","competition":"Handball-Planet.com All-Star Centre Back of the Year"},{"year":"2019","competition":"Foreign Handballer of the Year in Hungary"}]},{"id":"004","instagramLink":"https://www.instagram.com/carmen_martin4/","facebookLink":"https://www.facebook.com/caramela88/","idPhoto":3,"name":"Carmen Mart\xedn","country":"ES","biography":["Carmen Dolores Mart\xedn Berenguer (born 29 May 1988) is a Spanish handballer who plays as a right wing for IK S\xe4vehof and the Spanish national team.","Mart\xedn has three All-European Championship first team selections, one All-World Championship first team selection and also one All-EHF Champions League first team selection. In 2016, she won the Champions League with CSM București.","In 2016, she was made \'honorary citizen\' of Bucharest.","She has won different individual awards such as All-Star Right Wing of the World Championship in 2011(more details in individual awards)","She has won different team awards with her national team such as Bronze medal in Olympic Games in 2012 in London(more details in medals)."],"position":"Right wing","current team":" IK S\xe4vehof","relatedPlayers":["002","003"],"medals":[{"medal":"Bronze","year":2012,"event":"Olympic Games","location":"London"},{"medal":"Bronze","year":2011,"event":"World Championship","location":"Brazil"},{"medal":"Silver","year":2008,"event":"European Championship","location":"Macedonia"},{"medal":"Silver","year":2014,"event":"European Championship","location":"Croatia/Hungary"}],"born":"29/05/1988, Spain","individualAwards":[{"year":"2011","competition":"All-Star Right Wing of the World Championship"},{"year":"2014, 2016, 2018","competition":"All-Star Right Wing of the European Championship"},{"year":"2016","competition":"Handball-Planet.com Best Right Wing"},{"year":"2017","competition":"All-Star Right Wing of the EHF Champions League"},{"year":"2017","competition":"Prosport All-Star Right Wing of the Romanian Liga Națională"}]},{"id":"005","instagramLink":"https://www.instagram.com/hagman/","facebookLink":"https://www.facebook.com/hagman24/","idPhoto":4,"name":"Nathalie Hagman","country":"CH","biography":["Nathalie Mari Hagman (born 19 July 1991) is a Swedish handball player for Neptunes de Nantes and the Swedish national handball team.","She played her first match for Sweden in 2009 at the age of 17. To date, Hagman is still the youngest ever debutant in the national team.","She has won different individual awards such as Junior World Championship Top Scorer in 2010(more details in individual awards)","She has won different team awards with her national team such as Silver medal in European Championship in 2010 in Denmark/Norway(more details in medals)."],"position":"Right wing","current team":"Neptunes de Nantes","relatedPlayers":["001","004"],"medals":[{"medal":"Silver","year":2010,"event":"European Championship","location":"Denmark/Norway"},{"medal":"Bronze","year":2014,"event":"European Championship","location":"Croatia/Hungary"}],"born":"29/05/1988, Swedeen","individualAwards":[{"year":"2010","competition":"Junior World Championship Top Scorer"},{"year":"2009","competition":"Swedish Elitserien Young Player of the Season"},{"year":"2011, 2012, 2014","competition":"Swedish Elitserien Top Scorer"},{"year":"2015","competition":"EHF Cup Top Scorer"},{"year":"2016","competition":"EHF Cup Winners\' Cup Top Scorer"},{"year":"2021","competition":"IHF World Women\'s Handball Championship Top scorer"},{"year":"2016","competition":"Danish League Player of the Season"},{"year":"2016","competition":"Danish League Best Right Wing"},{"year":"2017","competition":"Danish League Best Right Back"},{"year":"2016","competition":"Swedish Female Handballer of the Year"},{"year":"2016","competition":"All Star Right Wing of the Summer Olympics"},{"year":"2017","competition":"All Star Right Wing of the World Championship"}]},{"id":"006","instagramLink":"https://www.instagram.com/sandratoft89/","facebookLink":"https://www.facebook.com/people/Sandra-Toft/100041689639238/","idPhoto":5,"name":"Sandra Toft","country":"DK","biography":["Sandra Toft Galsgaard (born 18 October 1989) is a Danish handball goalkeeper for Győri Audi ETO KC and the Danish national team.","She made her debut on the Danish national team on 27 March 2008, against Czech Republic.","She participated for the first time at the 2011 World Women\'s Handball Championship in Brazil.","She has won different individual awards such as IHF World Player of the Year - Women in 2021(more details in individual awards)","She has won different team awards with her national team such as Bronze medal in World Championship in 2021 in Spain(more details in medals)."],"position":"Goalkeeper","current team":"Győri Audi ETO KC","relatedPlayers":["005","004"],"medals":[{"medal":"Bronze","year":2021,"event":"World Championship","location":"Spain"},{"medal":"Silver","year":2008,"event":"Junior World Championship","location":"Macedonia"},{"medal":"Golden","year":2006,"event":"Youth World Championship","location":"Canada"},{"medal":"Bronze","year":2007,"event":"European Junior Championship","location":"Turkey"}],"born":"18/09/1989, Denmark","individualAwards":[{"year":"2021","competition":"IHF World Player of the Year - Women"},{"year":"2021","competition":"All-Star Goalkeeper of the World Championship"},{"year":"2016, 2020","competition":"All-Star Goalkeeper of the European Championship"},{"year":"2015","competition":"All-Star Team Best Goalkeeper of the EHF Champions League"},{"year":"2019","competition":"Handball-Planet.com All-Star Goalkeeper of the Year"}]},{"id":"007","instagramLink":"https://www.instagram.com/lassourcecoralie/?hl=es","facebookLink":"https://es-es.facebook.com/people/Coralie-Lassource-Officiel/100063608319405/?comment_id=Y29tbWVudDozMzg0OTEzNTUxNzMyOTI1XzMzODUwNDAwNjUwNTM2MDc%3D","idPhoto":6,"name":"Coralie Lassource","country":"FR","biography":["SCoralie Gladys Lassource (born 1 September 1992) is a French handball player for Brest Bretagne HB and the French national team.","She competed at the 2015 World Women\'s Handball Championship in Denmark.","She has won different team awards with her national team such as Gold medal in Olympic Games in 2020 in Tokyo(more details in medals)."],"position":"Left Wing","current team":"Brest Bretagne HB","relatedPlayers":["001","003"],"medals":[{"medal":"Silver","year":2021,"event":"World Championship","location":"Spain"},{"medal":"Gold","year":2020,"event":"Olympic Games","location":"Tokyo"},{"medal":"Silver","year":2020,"event":"European Championship","location":"Denmark"}],"born":"01/09/1992, France","individualAwards":[]}]');

},{}],"GgRsl":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("8tci1") + "Gold.23f2ef65.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"k8NF9":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("8tci1") + "Silver.3080acae.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"fHiBP":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("8tci1") + "Bronze.eca40c54.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"bnYIO":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("8tci1") + "FR.31f80071.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"1DxH2":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("8tci1") + "ES.45e60106.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"i7qSW":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("8tci1") + "CH.b4c5de65.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"aDb03":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("8tci1") + "DK.72389b98.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"7u1Wn":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("8tci1") + "BV.bd5055d0.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"go6Jx":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("8tci1") + "Laura_Glauser_wikipediaCommons.620c8ecb.webp" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"bzVIo":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("8tci1") + "Nora_Mork_wikipediaCommons.7db7254b.webp" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"2Oi8c":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("8tci1") + "Stine_Oftedal_wikipediaCommons.d6b70b52.webp" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"iSrHa":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("8tci1") + "Carmen_Martin_wikipediaCommons.c4f9bdad.webp" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"fh4tY":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("8tci1") + "Nathalie_Hagman_wikipediaCommons.b8cbedbc.webp" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"aii5w":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("8tci1") + "Sandra_Toft_2_wikipediaCommons.cdb74e49.webp" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"g1U0D":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("8tci1") + "Coralie_Lassource_wikipediaCommons.e8b03540.webp" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"6wKNw":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("8tci1") + "Laura_Glauser_20160131_0_300.db2adddf.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"g3k4V":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("8tci1") + "Nora_Mork_20141115_300.989853b3.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"5JRRW":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("8tci1") + "Carmen_Martin_4_20171108_300.7ee09084.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"dERln":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("8tci1") + "Nathalie_Hagman_IPH_TTH_20160403_300.34f44298.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"eW76S":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("8tci1") + "Sandra_Toft_2_20181118_300.f2a47165.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"5B03l":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("8tci1") + "Coralie_Lassource-Meilleure_defenseuse_2015-16_300.bbf75dd4.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"bGgLK":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("8tci1") + "Laura_Glauser_20160131_0_500.d1e2be62.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"2oeko":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("8tci1") + "Nora_Mork_20141115_500.8161ee63.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"kgmzG":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("8tci1") + "Carmen_Martin_4_20171108_500.d0035594.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"5Jaem":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("8tci1") + "Nathalie_Hagman_IPH_TTH_20160403_500.d4371a99.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"gJTQl":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("8tci1") + "Sandra_Toft_2_20181118_500.1db537c8.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"jyVoi":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("8tci1") + "Coralie_Lassource-Meilleure_defenseuse_2015-16_500.fd1ed519.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"1OJvL":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("8tci1") + "Laura_Glauser_20160131_0_700.3ab13ef6.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"dbXvN":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("8tci1") + "Nora_Mork_20141115_700.b369c295.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"1z8zn":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("8tci1") + "Carmen_Martin_4_20171108_700.ba244cfc.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"l5DGB":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("8tci1") + "Nathalie_Hagman_IPH_TTH_20160403_700.4f87cca8.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"9Dh0K":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("8tci1") + "Sandra_Toft_2_20181118_700.d131e8f7.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"bcxnl":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("8tci1") + "Coralie_Lassource-Meilleure_defenseuse_2015-16_700.153ad34e.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"8w3zC":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("8tci1") + "Laura_Glauser_20160131_0_900.d0652ac9.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"jL8je":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("8tci1") + "Nora_Mork_20141115_900.11b0c937.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"5ue7W":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("8tci1") + "Carmen_Martin_4_20171108_900.f681a0fd.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"kjLEK":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("8tci1") + "Nathalie_Hagman_IPH_TTH_20160403_900.82829762.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"PMNrD":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("8tci1") + "Sandra_Toft_2_20181118_900.7c23b6cb.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"NJ0JS":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("8tci1") + "Coralie_Lassource-Meilleure_defenseuse_2015-16_900.3062eab7.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"iKdQ5":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("8tci1") + "Stine_Oftedal_20170519_300.646007cf.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"3C6Lo":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("8tci1") + "Stine_Oftedal_20170519_500.53d9e11d.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"6vh1C":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("8tci1") + "Stine_Oftedal_20170519_700.c5c898a8.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"hT6wj":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("8tci1") + "Stine_Oftedal_20170519_900.c1b2e56b.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["hHaBV","5CRsP"], "5CRsP", "parcelRequire14aa")

//# sourceMappingURL=detallesJugadora.3e8f727a.js.map
