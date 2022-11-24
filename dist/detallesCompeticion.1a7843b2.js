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
})({"aGj5p":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "a829bb071a7843b2";
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

},{}],"6imdw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _dataCompetitionsJson = require("../json/data-competitions.json");
var _dataCompetitionsJsonDefault = parcelHelpers.interopDefault(_dataCompetitionsJson);
var _dataIntestingPlayersJson = require("../json/data-intesting-players.json");
var _dataIntestingPlayersJsonDefault = parcelHelpers.interopDefault(_dataIntestingPlayersJson);
var _lauraGlauserWikipediaCommonsJpg = require("../img/InterestingPlayers/Laura_Glauser_wikipediaCommons.jpg");
var _lauraGlauserWikipediaCommonsJpgDefault = parcelHelpers.interopDefault(_lauraGlauserWikipediaCommonsJpg);
var _noraMorkWikipediaCommonsJpg = require("../img/InterestingPlayers/Nora_Mork_wikipediaCommons.jpg");
var _noraMorkWikipediaCommonsJpgDefault = parcelHelpers.interopDefault(_noraMorkWikipediaCommonsJpg);
var _stineOftedalWikipediaCommonsJpg = require("../img/InterestingPlayers/Stine_Oftedal_wikipediaCommons.jpg");
var _stineOftedalWikipediaCommonsJpgDefault = parcelHelpers.interopDefault(_stineOftedalWikipediaCommonsJpg);
var _carmenMartinWikipediaCommonsJpg = require("../img/InterestingPlayers/Carmen_Martin_wikipediaCommons.jpg");
var _carmenMartinWikipediaCommonsJpgDefault = parcelHelpers.interopDefault(_carmenMartinWikipediaCommonsJpg);
var _nathalieHagmanWikipediaCommonsJpg = require("../img/InterestingPlayers/Nathalie_Hagman_wikipediaCommons.jpg");
var _nathalieHagmanWikipediaCommonsJpgDefault = parcelHelpers.interopDefault(_nathalieHagmanWikipediaCommonsJpg);
var _sandraToft2WikipediaCommonsJpg = require("../img/InterestingPlayers/Sandra_Toft_2_wikipediaCommons.jpg");
var _sandraToft2WikipediaCommonsJpgDefault = parcelHelpers.interopDefault(_sandraToft2WikipediaCommonsJpg);
var _jpSvg = require("../../node_modules/country-flag-icons/1x1/JP.svg");
var _jpSvgDefault = parcelHelpers.interopDefault(_jpSvg);
var _esSvg = require("../../node_modules/country-flag-icons/1x1/ES.svg");
var _esSvgDefault = parcelHelpers.interopDefault(_esSvg);
var _deSvg = require("../../node_modules/country-flag-icons/1x1/DE.svg");
var _deSvgDefault = parcelHelpers.interopDefault(_deSvg);
var _handballCourtPng = require("../img/handball_court.png");
var _handballCourtPngDefault = parcelHelpers.interopDefault(_handballCourtPng);
function createanElement(typeElement, classNameElement) {
    const element = document.createElement(typeElement);
    element.setAttribute("class", classNameElement);
    return element;
}
const images = [
    (0, _lauraGlauserWikipediaCommonsJpgDefault.default),
    (0, _noraMorkWikipediaCommonsJpgDefault.default),
    (0, _stineOftedalWikipediaCommonsJpgDefault.default),
    (0, _carmenMartinWikipediaCommonsJpgDefault.default),
    (0, _nathalieHagmanWikipediaCommonsJpgDefault.default),
    (0, _sandraToft2WikipediaCommonsJpgDefault.default)
];
const valores = window.location.search;
const params = new URLSearchParams(valores);
const idCompeticion = params.get("id");
console.log(idCompeticion);
const prinArticle = document.querySelector("#article-competition");
/*Parámetro mal escrito o nulo */ if (!idCompeticion) window.location.href = "./detallesCompeticion.html?id=1";
const resultado = (0, _dataCompetitionsJsonDefault.default).find((element)=>element.idCompetition === idCompeticion);
/*No lo encuentra */ if (!resultado) window.location.href = "./detallesCompeticion.html?id=1";
else buildFiel(resultado);
function buildFiel(resultado) {
    const headerArticle = createanElement("header", "article-competition-header");
    const divHeaderInformation = createanElement("div", "div-introduction-competition-info");
    const divHeaderFlagP = createanElement("div", "div-p-flag");
    const nameCompetition = createanElement("h1", "article-competition-name");
    nameCompetition.innerHTML = resultado.competition;
    const introductoryP = createanElement("p", "article-competition-introduction");
    introductoryP.innerHTML = resultado.title;
    const countryFlag = createanElement("img", "article-competition-flag-country");
    countryFlag.setAttribute("src", getCountryFlag(resultado.location));
    divHeaderFlagP.append(introductoryP, countryFlag);
    const duration = document.createElement("span");
    duration.innerHTML = `Started: ${resultado.startDate} - Finished: ${resultado.endingDate}`;
    divHeaderInformation.append(nameCompetition, divHeaderFlagP, duration);
    headerArticle.append(divHeaderInformation);
    prinArticle.append(headerArticle);
    const sectionField = createanElement("section", "handball-court");
    sectionField.innerHTML = `
        <div class="image-player-court-contain">
            <div class="row line-one" ></div>
            <div class="row line-two" ></div>
            <div class="row line-three" ></div>
            <div class="row line-four" ></div>
            <img src="${0, _handballCourtPngDefault.default}">
        </div>
    `;
    prinArticle.append(sectionField);
    const rowLineOne = document.getElementsByClassName("row line-one")[0];
    const rowLineTwo = document.getElementsByClassName("row line-two")[0];
    const rowLineThree = document.getElementsByClassName("row line-three")[0];
    const rowLineFour = document.getElementsByClassName("row line-four")[0];
    resultado.players.map((element, index)=>{
        const datosPlayer = (0, _dataIntestingPlayersJsonDefault.default).find((player)=>player.id == element);
        let divPlayer1 = "";
        /*Primera Linea */ if (index < 3) {
            if (index == 0) divPlayer1 = "player extreme-left";
            else if (index == 1) divPlayer1 = "player goalkeeper";
            else divPlayer1 = "player extreme-right";
            const divPlayer2 = createanElement("div", divPlayer1);
            divPlayer2.innerHTML = `
                <a href=./detallesJugadora.html?id=${datosPlayer.id}>
                    <img src= ${images[datosPlayer.idPhoto]}>
                </a>`;
            rowLineOne.append(divPlayer2);
        } else if (index == 3) {
            const divPlayer21 = createanElement("div", "player pivot");
            divPlayer21.innerHTML = `
                <a href=./detallesJugadora.html?id=${datosPlayer.id}>
                    <img src= ${images[datosPlayer.idPhoto]}>
                </a>`;
            rowLineTwo.append(divPlayer21);
        } else if (index < 6) {
            if (index == 4) divPlayer1 = "player left-court";
            else divPlayer1 = "player right-backcourt";
            const divPlayer22 = createanElement("div", divPlayer1);
            divPlayer22.innerHTML = `
                <a href=./detallesJugadora.html?id=${datosPlayer.id}>
                    <img src= ${images[datosPlayer.idPhoto]}>
                </a>`;
            rowLineThree.append(divPlayer22);
        } else {
            //buildPlayer("player pivot", datosPlayer.idPhoto, datosPlayer.id, divRow4);
            const divPlayer23 = createanElement("div", "player pivot2");
            divPlayer23.innerHTML = `
                <a href=./detallesJugadora.html?id=${datosPlayer.id}>
                    <img src= ${images[datosPlayer.idPhoto]}>
                </a>`;
            rowLineFour.append(divPlayer23);
        }
    });
    prinArticle.append(sectionField);
}
/*Build the circle player link */ function buildPlayer(classPlayer, idPhoto, idJugadora, divRow) {
    divPlayer = createanElement("div", classPlayer);
    const playerLink = createanElement("a", "player-link");
    const imagenPlayer = createanElement("img", "image-player-court");
    imagenPlayer.src = images[idPhoto];
    playerLink.href = "./detallesJugadora.html?id=" + idJugadora;
    playerLink.append(imagenPlayer);
    divPlayer.append(playerLink);
    divRow.append(divPlayer);
}
/*Devuelve las imágenes de cada país */ function getCountryFlag(country) {
    console.log(country);
    /*Possibles paisos de les jugadores */ if (country == "ES") return 0, _esSvgDefault.default;
    else if (country == "DE") return 0, _deSvgDefault.default;
    else if (country == "JP") return 0, _jpSvgDefault.default;
}
/*Header*/ const toggleButton = document.getElementById("button-menu");
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

},{"../json/data-competitions.json":"39Ovm","../json/data-intesting-players.json":"jIR5q","../img/InterestingPlayers/Laura_Glauser_wikipediaCommons.jpg":"81avA","../img/InterestingPlayers/Nora_Mork_wikipediaCommons.jpg":"40WJO","../img/InterestingPlayers/Stine_Oftedal_wikipediaCommons.jpg":"9NAyE","../img/InterestingPlayers/Carmen_Martin_wikipediaCommons.jpg":"dhmD1","../img/InterestingPlayers/Nathalie_Hagman_wikipediaCommons.jpg":"eJZCc","../img/InterestingPlayers/Sandra_Toft_2_wikipediaCommons.jpg":"2p4lN","../../node_modules/country-flag-icons/1x1/JP.svg":"kFZyk","../../node_modules/country-flag-icons/1x1/ES.svg":"eewNR","../../node_modules/country-flag-icons/1x1/DE.svg":"fOlVd","../img/handball_court.png":"chKed","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"39Ovm":[function(require,module,exports) {
module.exports = JSON.parse('[{"competition":"IHF World Women\'s Handball Championship 2021","title":"Best Woman players of IHF World Women\'s Handball Championship 2021","imageUrl":"/img/logo_web_cut.png","startDate":"2021-12-01","endingDate":"2021-12-19","location":"ES","informationtoShow":"","idCompetition":"1","players":["001","002","004","003","005","006","001"]},{"competition":"IHF World Women\'s Handball Championship 2017","title":"Best Woman players of IHF World Women\'s Handball Championship 2017","imageUrl":"../img/pista_handball.png","startDate":"2017-12-01","endingDate":"2017-12-17","location":"DE","informationtoShow":"No lamentaba si alrededor id perjuicio. Que eso rivas carta antes. Una asi pedirselos prematuras non ortografia. Paz mal exacta siendo arriba. El entender cualidad al si baterias espiritu despedir. Oir fue consagraba suspiraban asi ordinarios conciencia eso. Eterno ley luz sangre aun feo limpia. Baritono violento entregar dia ton dormirse mas cultivar mezquina las. Creencia doloroso ausentes ch te si rebeldia gritando. Entrego intento demasia yo se un serenos pellejo. Recibidos he sr da resultado derribado nuncasuna il. Hablandose doy oyo relaciones intensidad recordando. Renta el ya nuevo nuovo en otros. Convertia prestadas il no mostrarse le pecadoras fe. Pedantesca alpujarras aberracion entenderlo oro desencanto las gobernador.","idCompetition":"2","players":["001","002","003","004","005","006","004"]},{"competition":"IHF World Women\'s Handball Championship 2019","title":"Best Woman players of IHF World Women\'s Handball Championship 2019","imageUrl":"../img/pista_handball.png","startDate":"2019-11-30","endingDate":"2019-12-15","location":"JP","informationtoShow":"No lamentaba si alrededor id perjuicio. Que eso rivas carta antes. Una asi pedirselos prematuras non ortografia. Paz mal exacta siendo arriba. El entender cualidad al si baterias espiritu despedir. Oir fue consagraba suspiraban asi ordinarios conciencia eso. Eterno ley luz sangre aun feo limpia. Baritono violento entregar dia ton dormirse mas cultivar mezquina las. Creencia doloroso ausentes ch te si rebeldia gritando. Entrego intento demasia yo se un serenos pellejo. Recibidos he sr da resultado derribado nuncasuna il. Hablandose doy oyo relaciones intensidad recordando. Renta el ya nuevo nuovo en otros. Convertia prestadas il no mostrarse le pecadoras fe. Pedantesca alpujarras aberracion entenderlo oro desencanto las gobernador.","idCompetition":"3","players":["001","002","003","004","005","006","005"]}]');

},{}],"jIR5q":[function(require,module,exports) {
module.exports = JSON.parse('[{"id":"001","instagramLink":"https://www.instagram.com/lauraglauser/","facebookLink":"https://www.facebook.com/people/Laura-Glauser/100057727374453/","idPhoto":0,"name":"Laura Glausser","country":"FR","biography":["Laura Glauser (born 20 August 1993) is a French handballer for CSM București and the French national team.","Laura Glauser played in Győr since 2020,and she requested to leave the club before her contract expires in 2023. The reason is that she wants to have more playing time. She can leave on a transfer fee from her next club which is rumored to be CSM Bucuresti.","She has won different individual awards such as All-Star Goalkeeper from  EHF Champions League in 2022(more details in individual awards)","She has won different team awards with her national team such as silver medal in Olympic Games in 2006 in Brazil(more details in medals)."],"relatedPlayers":["005","004"],"position":"Goalkeeper","current team":"Bucuresti","medals":[{"medal":"Silver","year":2016,"event":"Olympic Games","location":"Brazil"},{"medal":"Silver","year":2021,"event":"World Championship","location":"Spain"},{"medal":"Gold","year":2018,"event":"European Championship","location":"France"},{"medal":"Silver","year":2020,"event":"European Championship","location":"Denmark"},{"medal":"Bronze","year":2016,"event":"European Championship","location":"Sweden"}],"born":"20/09/1993, France","individualAwards":[{"year":"2015","competition":"Best goalkeeper of the IHF Junior World Championship"},{"year":"2015","competition":"Best Young Goalkeeper at the 2015 World Championships"},{"year":"2016","competition":"French Championship Best Goalkeeper"},{"year":"2022","competition":"All-Star Goalkeeper of the EHF Champions League"}]},{"id":"002","instagramLink":"https://www.instagram.com/noramrk_9/","facebookLink":"https://www.facebook.com/people/Nora-M%C3%B8rk/100044528492484/","idPhoto":1,"name":"Nora Mork","country":"BV","relatedPlayers":["003","004"],"biography":["Nora M\xf8rk (born 5 April 1991) is a Norwegian handball player for Team Esbjerg and the Norwegian national team.","She made her debut on the Norwegian national team on 21 September 2010.","Before joining Team Esbjerg, she played for B\xe6kkelaget, Aalborg DH, Nj\xe5rd, Larvik, Győr, CSM București and Vipers Kristiansand.","She has won different individual awards such as Most Valuable Player of the Junior European Championship in 2009(more details in individual awards)","She has won different team awards with her national team such as Bronze medal in Olympic Games in 2006 in Brazil(more details in medals)."],"position":"Right back","current team":"Team Esbjerg","medals":[{"medal":"Bronze","year":2016,"event":"Olympic Games","location":"Brazil"},{"medal":"Bronze","year":2020,"event":"Olympic Games","location":"Tokyo"},{"medal":"Gold","year":2015,"event":"World Championship","location":"Denmark"},{"medal":"Gold","year":2021,"event":"World Championship","location":"Spain"},{"medal":"Gold","year":2020,"event":"European Championship","location":"Denmark"},{"medal":"Gold","year":2016,"event":"European Championship","location":"Sweden"},{"medal":"Gold","year":2014,"event":"European Championship","location":"Croatia/Hungary"},{"medal":"Gold","year":2010,"event":"European Championship","location":"Denamrk/Norway"},{"medal":"Gold","year":2010,"event":"Junior World Championship","location":"South Korea"},{"medal":"Gold","year":2010,"event":"Junior European Championship","location":"Hungary"}],"born":"20/09/1993, Norway","individualAwards":[{"year":"2009","competition":"Most Valuable Player of the Junior European Championship"},{"year":"2013/2014","competition":"Most Valuable Player of Postenligaen"},{"year":"2014/2015, 2015/2016","competition":"Most Valuable Player of Grundigligaen"},{"year":"2016 (62 goals), 2020 (52 goals)","competition":"Topscorer of the Summer Olympics"},{"year":"2016 (53 goals), 2020 (52 goals)","competition":"Topscorer of the European Championship"},{"year":"2017 (66 goals)","competition":"Topscorer of the World Championship"},{"year":"2007","competition":"All-Star Right Back of the European Youth Championship"},{"year":"2008/2009","competition":"All-Star Right Back of the European Open Championship"},{"year":"2009","competition":"All-Star Right Back of the Junior European Championship"},{"year":"2009/2010","competition":"All-Star Right Wing of Eliteserien"},{"year":"2010/2011","competition":"All-Star Right Wing of Postenligaen"},{"year":"2013/2014","competition":"All-Star Right Back of Postenligaen"},{"year":"2014, 2016, 2020","competition":"All-Star Right Back of the European Championship"},{"year":"2014/2015, 2015/2016","competition":"All-Star Right Back of Grundigligaen"},{"year":"2015, 2017, 2021","competition":"All-Star Right Back of the World Championship"},{"year":"2015, 2016, 2017, 2021, 2022","competition":"All-Star Right Back of the EHF Champions League"},{"year":"2015, 2017","competition":"All-Star Right Back of M\xf8belringen Cup"},{"year":"2008","competition":"NISO Best Young Player of the Year"},{"year":"2008/2009","competition":"Best Rookie of Eliteserien"},{"year":"2017","competition":"Foreign Handballer of the Year in Hungary"},{"year":"2015, 2016, 2020, 2021","competition":"Handball-Planet.com All-Star Right Back"},{"year":"2017, 2021","competition":"Handball-Planet.com Player of the Year:"}]},{"id":"003","idPhoto":2,"instagramLink":"https://www.instagram.com/stine.bredaloftedal/","facebookLink":"https://es-es.facebook.com/people/Stine-Bredal-Oftedal/100044176132556/","name":"Stine Oftedal","country":"BV","biography":["Stine Bredal Oftedal (born 25 September 1991) is a Norwegian handball player for Győri Audi ETO KC and the Norwegian national team, where she is the team captain.","She was voted World Handball Player of the Year 2019 by the International Handball Federation","She hails from Nittedal and started her career in Nit/Hak HK.[2] She then continued to Fjellhammer IL before continuing to Helset IF.Helset is a feeder team for Stab\xe6k H\xe5ndball, and so she has played for Stab\xe6k since the 2008–09 season while still being registered in Helset.","She studied at BI Norwegian Business School.Previously she competed for Nittedal IL in the javelin throw, throwing 32.08 m at the age 13","She has won different individual awards such as IHF World Player of the Year in 2019(more details in individual awards)","She has won different team awards with her national team such as Bronze medal in Olympic Games in 2006 in Brazil(more details in medals)."],"position":"Centre back","current team":"Győri Audi ETO KC","relatedPlayers":["001","002"],"medals":[{"medal":"Bronze","year":2016,"event":"Olympic Games","location":"Brazil"},{"medal":"Bronze","year":2020,"event":"Olympic Games","location":"Tokyo"},{"medal":"Gold","year":2011,"event":"World Championship","location":"Brazil"},{"medal":"Gold","year":2015,"event":"World Championship","location":"Denmark"},{"medal":"Gold","year":2021,"event":"World Championship","location":"Spain"},{"medal":"Silver","year":2017,"event":"World Championship","location":"Germany"},{"medal":"Gold","year":2020,"event":"European Championship","location":"Denmark"},{"medal":"Gold","year":2016,"event":"European Championship","location":"Sweden"},{"medal":"Gold","year":2014,"event":"European Championship","location":"Croatia/Hungary"},{"medal":"Gold","year":2010,"event":"European Championship","location":"Denamrk/Norway"},{"medal":"Silver","year":2012,"event":"European Championship","location":"Serbia"},{"medal":"Gold","year":2010,"event":"Junior World Championship","location":"South Korea"},{"medal":"Gold","year":2010,"event":"Junior European Championship","location":"Hungary"}],"born":"25/09/1991, Norway","individualAwards":[{"year":"2019","competition":"IHF World Player of the Year"},{"year":"2008","competition":"All-Star Left Wing of the U18 European Open"},{"year":"2010","competition":"All-Star Centre Back of the Junior World Championship"},{"year":"2010/2011","competition":"All-Star Centre Back of Postenligaen"},{"year":"2014","competition":"French Championship MVP"},{"year":"2015","competition":"All-Star Centre Back of the World Championship"},{"year":"2014, 2016","competition":"French Championship Best Playmaker"},{"year":"2017","competition":"Most Valuable Player of the World Championship"},{"year":"2018,2020","competition":"All-Star Centre Back of the European Championship"},{"year":"2019, 2020, 2021, 2022","competition":"All-Star Centre Back of the EHF Champions League"},{"year":"2019","competition":"Handball-Planet.com All-Star Centre Back of the Year"},{"year":"2019","competition":"Foreign Handballer of the Year in Hungary"}]},{"id":"004","instagramLink":"https://www.instagram.com/carmen_martin4/","facebookLink":"https://www.facebook.com/caramela88/","idPhoto":3,"name":"Carmen Mart\xedn","country":"ES","biography":["Carmen Dolores Mart\xedn Berenguer (born 29 May 1988) is a Spanish handballer who plays as a right wing for IK S\xe4vehof and the Spanish national team.","Mart\xedn has three All-European Championship first team selections, one All-World Championship first team selection and also one All-EHF Champions League first team selection. In 2016, she won the Champions League with CSM București.","In 2016, she was made \'honorary citizen\' of Bucharest.","She has won different individual awards such as All-Star Right Wing of the World Championship in 2011(more details in individual awards)","She has won different team awards with her national team such as Bronze medal in Olympic Games in 2012 in London(more details in medals)."],"position":"Right wing","current team":" IK S\xe4vehof","relatedPlayers":["002","003"],"medals":[{"medal":"Bronze","year":2012,"event":"Olympic Games","location":"London"},{"medal":"Bronze","year":2011,"event":"World Championship","location":"Brazil"},{"medal":"Silver","year":2008,"event":"European Championship","location":"Macedonia"},{"medal":"Silver","year":2014,"event":"European Championship","location":"Croatia/Hungary"}],"born":"29/05/1988, Spain","individualAwards":[{"year":"2011","competition":"All-Star Right Wing of the World Championship"},{"year":"2014, 2016, 2018","competition":"All-Star Right Wing of the European Championship"},{"year":"2016","competition":"Handball-Planet.com Best Right Wing"},{"year":"2017","competition":"All-Star Right Wing of the EHF Champions League"},{"year":"2017","competition":"Prosport All-Star Right Wing of the Romanian Liga Națională"}]},{"id":"005","instagramLink":"https://www.instagram.com/hagman/","facebookLink":"https://www.facebook.com/hagman24/","idPhoto":4,"name":"Nathalie Hagman","country":"CH","biography":["Nathalie Mari Hagman (born 19 July 1991) is a Swedish handball player for Neptunes de Nantes and the Swedish national handball team.","She played her first match for Sweden in 2009 at the age of 17. To date, Hagman is still the youngest ever debutant in the national team.","She has won different individual awards such as Junior World Championship Top Scorer in 2010(more details in individual awards)","She has won different team awards with her national team such as Silver medal in European Championship in 2010 in Denmark/Norway(more details in medals)."],"position":"Right wing","current team":"Neptunes de Nantes","relatedPlayers":["001","004"],"medals":[{"medal":"Silver","year":2010,"event":"European Championship","location":"Denmark/Norway"},{"medal":"Bronze","year":2014,"event":"European Championship","location":"Croatia/Hungary"}],"born":"29/05/1988, Swedeen","individualAwards":[{"year":"2010","competition":"Junior World Championship Top Scorer"},{"year":"2009","competition":"Swedish Elitserien Young Player of the Season"},{"year":"2011, 2012, 2014","competition":"Swedish Elitserien Top Scorer"},{"year":"2015","competition":"EHF Cup Top Scorer"},{"year":"2016","competition":"EHF Cup Winners\' Cup Top Scorer"},{"year":"2021","competition":"IHF World Women\'s Handball Championship Top scorer"},{"year":"2016","competition":"Danish League Player of the Season"},{"year":"2016","competition":"Danish League Best Right Wing"},{"year":"2017","competition":"Danish League Best Right Back"},{"year":"2016","competition":"Swedish Female Handballer of the Year"},{"year":"2016","competition":"All Star Right Wing of the Summer Olympics"},{"year":"2017","competition":"All Star Right Wing of the World Championship"}]},{"id":"006","instagramLink":"https://www.instagram.com/sandratoft89/","facebookLink":"https://www.facebook.com/people/Sandra-Toft/100041689639238/","idPhoto":5,"name":"Sandra Toft","country":"DK","biography":["Sandra Toft Galsgaard (born 18 October 1989) is a Danish handball goalkeeper for Győri Audi ETO KC and the Danish national team.","She made her debut on the Danish national team on 27 March 2008, against Czech Republic.","She participated for the first time at the 2011 World Women\'s Handball Championship in Brazil.","She has won different individual awards such as IHF World Player of the Year - Women in 2021(more details in individual awards)","She has won different team awards with her national team such as Bronze medal in World Championship in 2021 in Spain(more details in medals)."],"position":"Goalkeeper","current team":"Győri Audi ETO KC","relatedPlayers":["005","004"],"medals":[{"medal":"Bronze","year":2021,"event":"World Championship","location":"Spain"},{"medal":"Silver","year":2008,"event":"Junior World Championship","location":"Macedonia"},{"medal":"Golden","year":2006,"event":"Youth World Championship","location":"Canada"},{"medal":"Bronze","year":2007,"event":"European Junior Championship","location":"Turkey"}],"born":"18/09/1989, Denmark","individualAwards":[{"year":"2021","competition":"IHF World Player of the Year - Women"},{"year":"2021","competition":"All-Star Goalkeeper of the World Championship"},{"year":"2016, 2020","competition":"All-Star Goalkeeper of the European Championship"},{"year":"2015","competition":"All-Star Team Best Goalkeeper of the EHF Champions League"},{"year":"2019","competition":"Handball-Planet.com All-Star Goalkeeper of the Year"}]}]');

},{}],"81avA":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("er7V5") + "Laura_Glauser_wikipediaCommons.5c7c1700.jpg" + "?" + Date.now();

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

},{}],"40WJO":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("er7V5") + "Nora_Mork_wikipediaCommons.22c42955.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"9NAyE":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("er7V5") + "Stine_Oftedal_wikipediaCommons.15ad6b8b.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"dhmD1":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("er7V5") + "Carmen_Martin_wikipediaCommons.42a348f0.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"eJZCc":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("er7V5") + "Nathalie_Hagman_wikipediaCommons.724cd345.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"2p4lN":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("er7V5") + "Sandra_Toft_2_wikipediaCommons.832bcf66.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"kFZyk":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("er7V5") + "JP.abd40ae5.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"eewNR":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("er7V5") + "ES.45e60106.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"fOlVd":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("er7V5") + "DE.f5a73354.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"chKed":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("er7V5") + "handball_court.cec2b703.png" + "?" + Date.now();

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

},{}]},["aGj5p","6imdw"], "6imdw", "parcelRequire14aa")

//# sourceMappingURL=detallesCompeticion.1a7843b2.js.map
