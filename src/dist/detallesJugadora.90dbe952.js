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
})({"h1xod":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "407732c990dbe952";
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
console.log("holaaa");
const valores = window.location.search;
const idCompetition = valores.split("=")[1];
const resultado = (0, _dataIntestingPlayersJsonDefault.default).filter((element)=>element.idLink == idCompetition);
console.log("idCompetition");
if (resultado.length != 1) ;
else {
    const titlePage = createanElement("h1", "title-page");
    console.log(titlePage);
}

},{"../json/data-intesting-players.json":"jIR5q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jIR5q":[function(require,module,exports) {
module.exports = JSON.parse('[{"id":"001","instagramLink":"https://www.instagram.com/lauraglauser/","idPhoto":"Laura_Glauser_wikipediaCommons","name":"Laura Glausser","country":"France","biography":"Laura Glauser (nacida el 20 de agosto de 1993) es una jugadora de balonmano francesa del CSM București y de la selecci\xf3n francesa","position":"Goalkeeper","current team":"Bucuresti","medals":[{"medal":"Silver","year":2016,"event":"Olympic Games","location":"Brazil"},{"medal":"Silver","year":2021,"event":"World Championship","location":"Spain"},{"medal":"Gold","year":2018,"event":"European Championship","location":"France"},{"medal":"Silver","year":2020,"event":"European Championship","location":"Denmark"},{"medal":"Bronze","year":2016,"event":"European Championship","location":"Sweden"}],"born":"20/09/1993","individual awards":["Best goalkeeper of the IHF Junior World Championship: 2012","Best Young Goalkeeper at the 2015 World Championships[2]","French Championship Best Goalkeeper: 2016","All-Star Goalkeeper of the EHF Champions League: 2022"]},{"id":"002","instagramLink":"https://www.instagram.com/noramrk_9/","idPhoto":"Nora_Mork_wikipediaCommons","name":"Nora Mork","country":"Norway","biography":"Nora M\xf8rk (born 5 April 1991) is a Norwegian handball player for Team Esbjerg and the Norwegian national team.","position":"Right back","current team":"Team Esbjerg","medals":[{"medal":"Bronze","year":2016,"event":"Olympic Games","location":"Brazil"},{"medal":"Bronze","year":2020,"event":"Olympic Games","location":"Tokyo"},{"medal":"Gold","year":2015,"event":"World Championship","location":"Denmark"},{"medal":"Gold","year":2021,"event":"World Championship","location":"Spain"},{"medal":"Gold","year":2020,"event":"European Championship","location":"Denmark"},{"medal":"Gold","year":2016,"event":"European Championship","location":"Sweden"},{"medal":"Gold","year":2014,"event":"European Championship","location":"Croatia/Hungary"},{"medal":"Gold","year":2010,"event":"European Championship","location":"Denamrk/Norway"},{"medal":"Gold","year":2010,"event":"Junior World Championship","location":"South Korea"},{"medal":"Gold","year":2010,"event":"Junior European Championship","location":"Hungary"}],"born":"20/09/1993","individual awards":["Most Valuable Player of the Junior European Championship: 2009","Most Valuable Player of Postenligaen: 2013/2014","Most Valuable Player of Grundigligaen: 2014/2015, 2015/2016","Topscorer of the Summer Olympics: 2016 (62 goals), 2020 (52 goals)","Topscorer of the European Championship: 2016 (53 goals), 2020 (52 goals)","Topscorer of the World Championship: 2017 (66 goals)","All-Star Right Back of the European Youth Championship: 2007","All-Star Right Back of the European Open Championship: 2008","All-Star Right Back of Eliteserien: 2008/2009","All-Star Right Back of the Junior European Championship: 2009","All-Star Right Wing of Eliteserien: 2009/2010","All-Star Right Wing of Postenligaen: 2010/2011","All-Star Right Back of Postenligaen: 2013/2014","All-Star Right Back of the European Championship: 2014, 2016, 2020","All-Star Right Back of Grundigligaen: 2014/2015, 2015/2016","All-Star Right Back of the World Championship: 2015, 2017, 2021","All-Star Right Back of the EHF Champions League: 2015, 2016, 2017, 2021,[7] 2022[8]","All-Star Right Back of M\xf8belringen Cup: 2015, 2017","NISO Best Young Player of the Year: 2008","Best Rookie of Eliteserien: 2008/2009","Foreign Handballer of the Year in Hungary: 2017[9]","Handball-Planet.com All-Star Right Back: 2015, 2016,[10] 2020, 2021","Handball-Planet.com Player of the Year: 2017,[11] 2021[12]"]},{"id":"003","idPhoto":"Stine_Oftedal_wikipediaCommons","instagramLink":"https://www.instagram.com/stine.bredaloftedal/","name":"Stine Oftedal","country":"Norway","biography":"Stine Bredal Oftedal (born 25 September 1991) is a Norwegian handball player for Győri Audi ETO KC and the Norwegian national team, where she is the team captain.","position":"Centre back","current team":"Győri Audi ETO KC","medals":[{"medal":"Bronze","year":2016,"event":"Olympic Games","location":"Brazil"},{"medal":"Bronze","year":2020,"event":"Olympic Games","location":"Tokyo"},{"medal":"Gold","year":2011,"event":"World Championship","location":"Brazil"},{"medal":"Gold","year":2015,"event":"World Championship","location":"Denmark"},{"medal":"Gold","year":2021,"event":"World Championship","location":"Spain"},{"medal":"Silver","year":2017,"event":"World Championship","location":"Germany"},{"medal":"Gold","year":2020,"event":"European Championship","location":"Denmark"},{"medal":"Gold","year":2016,"event":"European Championship","location":"Sweden"},{"medal":"Gold","year":2014,"event":"European Championship","location":"Croatia/Hungary"},{"medal":"Gold","year":2010,"event":"European Championship","location":"Denamrk/Norway"},{"medal":"Silver","year":2012,"event":"European Championship","location":"Serbia"},{"medal":"Gold","year":2010,"event":"Junior World Championship","location":"South Korea"},{"medal":"Gold","year":2010,"event":"Junior European Championship","location":"Hungary"}],"born":"25/09/1991","individual awards":["IHF World Player of the Year: 2019","All-Star Left Wing of the U18 European Open: 2008","All-Star Centre Back of the Junior World Championship: 2010","All-Star Centre Back of Postenligaen: 2010/2011","French Championship MVP: 2014","All-Star Centre Back of the World Championship: 2015","French Championship Best Playmaker: 2014, 2016","Most Valuable Player of the World Championship: 2017","All-Star Centre Back of the European Championship: 2018,2020","All-Star Centre Back of the EHF Champions League: 2019, 2020, 2021, 2022","Handball-Planet.com All-Star Centre Back of the Year: 2019","Foreign Handballer of the Year in Hungary: 2019"]},{"id":"004","instagramLink":"https://www.instagram.com/carmen_martin4/","idPhoto":"Carmen_Martin_wikipediaCommons","name":"Carmen Mart\xedn","country":"Spain","biography":"Carmen Dolores Mart\xedn Berenguer (born 29 May 1988) is a Spanish handballer who plays as a right wing for IK S\xe4vehof and the Spanish national team.","position":"Right wing","current team":" IK S\xe4vehof","medals":[{"medal":"Bronze","year":2012,"event":"Olympic Games","location":"London"},{"medal":"Bronze","year":2011,"event":"World Championship","location":"Brazil"},{"medal":"Silver","year":2008,"event":"European Championship","location":"Macedonia"},{"medal":"Silver","year":2014,"event":"European Championship","location":"Croatia/Hungary"}],"born":"29/05/1988","individual awards":["All-Star Right Wing of the World Championship: 2011","All-Star Right Wing of the European Championship: 2014, 2016, 2018","Handball-Planet.com Best Right Wing: 2016","All-Star Right Wing of the EHF Champions League: 2017","Prosport All-Star Right Wing of the Romanian Liga Națională: 2017"]},{"id":"005","instagramLink":"https://www.instagram.com/hagman/","idPhoto":"Nathalie_Hagman_wikipediaCommons","name":"Nathalie Hagman","country":"Swedeen","biography":"Nathalie Mari Hagman (born 19 July 1991) is a Swedish handball player for Neptunes de Nantes and the Swedish national handball team.","position":"Right wing","current team":"Neptunes de Nantes","medals":[{"medal":"Silver","year":2010,"event":"European Championship","location":"Denamrk/Norway"},{"medal":"Bronze","year":2014,"event":"European Championship","location":"Croatia/Hungary"}],"born":"29/05/1988","individual awards":["Junior World Championship Top Scorer: 2010","Swedish Elitserien Young Player of the Season: 2009","Swedish Elitserien Top Scorer: 2011, 2012, 2014","EHF Cup Top Scorer: 2015","EHF Cup Winners\' Cup Top Scorer: 2016","IHF World Women\'s Handball Championship Top scorer: 2021","Danish League Player of the Season: 2016","Danish League Best Right Wing: 2016","Danish League Best Right Back: 2017","Swedish Female Handballer of the Year: 2016","All Star Right Wing of the Summer Olympics: 2016","All Star Right Wing of the World Championship: 2017"]},{"id":"006","instagramLink":"https://www.instagram.com/sandratoft89/","idPhoto":"Sandra_Toft_wikipediaCommons","name":"Sandra Toft","country":"Denmark","biography":"Sandra Toft Galsgaard (born 18 October 1989) is a Danish handball goalkeeper for Győri Audi ETO KC and the Danish national team.","position":"Goalkeeper","current team":"Győri Audi ETO KC","medals":[{"medal":"Bronze","year":2021,"event":"World Championship","location":"Spain"},{"medal":"Silver","year":2008,"event":"Junior World Championship","location":"Macedonia"},{"medal":"Golden","year":2006,"event":"Youth World Championship","location":"Canada"},{"medal":"Bronze","year":2007,"event":"European Junior Championship","location":"Turkey"}],"born":"18/09/1989","individual awards":["IHF World Player of the Year - Women: 2021","All-Star Goalkeeper of the World Championship: 2021","All-Star Goalkeeper of the European Championship: 2016, 2020","All-Star Team Best Goalkeeper of the EHF Champions League: 2015","Handball-Planet.com All-Star Goalkeeper of the Year: 2019"]}]');

},{}],"gkKU3":[function(require,module,exports) {
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

},{}]},["h1xod","5CRsP"], "5CRsP", "parcelRequire14aa")

//# sourceMappingURL=detallesJugadora.90dbe952.js.map