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
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
})({"lBB98":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "c9b2bbcd379dd93c";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
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
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
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

},{}],"hD4hw":[function(require,module,exports) {
var _root = require("./scripts/Utils/root");
var _sidebar = require("./scripts/Components/Sidebar/Sidebar");
var _mainPage = require("./scripts/Components/Main/MainPage");
var _toDo = require("./scripts/Components/ToDo/ToDo");
var _calculator = require("./scripts/Components/Calculator/Calculator");
var _dogs = require("./scripts/Components/Dogs/Dogs");
var _password = require("./scripts/Components/Password/Password");
var _randNumGraph = require("./scripts/Components/RandNumGraph/RandNumGraph");
var _ticTacToe = require("./scripts/Components/TicTacToe/TicTacToe");
const mainPage = new _mainPage.MainPage(_root.ROOTObj.main, 'main');
const todoPage = new _toDo.ToDo(_root.ROOTObj.main, 'todo');
const calculatorPage = new _calculator.Calculator(_root.ROOTObj.main, 'calculator');
const dogsPage = new _dogs.Dogs(_root.ROOTObj.main, 'dogs');
const password = new _password.Password(_root.ROOTObj.main, 'password');
const randNumGraphPage = new _randNumGraph.RandNumGraph(_root.ROOTObj.main, 'randnum');
const ticTacToePage = new _ticTacToe.TicTacToe(_root.ROOTObj.main, 'tictactoe');
const pagesName = [
    mainPage,
    todoPage,
    calculatorPage,
    dogsPage,
    password,
    randNumGraphPage,
    ticTacToePage
];
const sidebar = new _sidebar.Sidebar(_root.ROOTObj.sidebar, 'sidebar', pagesName);
sidebar.render();

},{"./scripts/Utils/root":"6QMmu","./scripts/Components/Sidebar/Sidebar":"d7fL1","./scripts/Components/Main/MainPage":"eS6Av","./scripts/Components/ToDo/ToDo":"bzwHm","./scripts/Components/Calculator/Calculator":"jQ5q3","./scripts/Components/Dogs/Dogs":"gaP28","./scripts/Components/Password/Password":"k4Tkb","./scripts/Components/RandNumGraph/RandNumGraph":"6CNKp","./scripts/Components/TicTacToe/TicTacToe":"2LQ5Y"}],"6QMmu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ROOTObj", ()=>ROOTObj
);
const ROOT_SIDEBAR = document.querySelector('#sidebar'), ROOT_MAIN = document.querySelector('#main');
const ROOTObj = {
    sidebar: ROOT_SIDEBAR,
    main: ROOT_MAIN
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
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

},{}],"d7fL1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Sidebar", ()=>Sidebar
);
var _root = require("../../Utils/root");
var _page = require("../Page/Page");
class Sidebar extends _page.Page {
    constructor(root, pageName, pagesName){
        super(root, pageName);
        this.storragePageName = 'page';
        this.pagesName = pagesName;
        this.sidebarSelector = '.sidebar';
        this.clockContainerSelector = '.sidebar__clock-container';
        this.dateContainerSelector = '.sidebar__date-container';
        this.buttonBlock = _root.ROOTObj.sidebar;
        this.btnActiveClass = 'sidebar__links-item_active';
        this.routeAttr = 'data-page-name';
        this.menuBtnSelector = '.menu-btn';
        this.menuBtnActiveClass = 'menu-btn_active';
        this.sidebarAdaptClass = 'sidebar_adaptive';
    }
    render() {
        const html = `
      <div class="sidebar">
        <div class="sidebar-title">Menu</div>

        <div class="sidebar__links-container">

          <a href="#" data-page-name="main" class="sidebar__links-item">Main</a>

          <a href="#" data-page-name="todo" class="sidebar__links-item">ToDo</a>

          <a href="#" data-page-name="calculator" class="sidebar__links-item">Calculator</a>

          <a href="#" data-page-name="dogs" class="sidebar__links-item">Dogs</a>

          <a href="#" data-page-name="password" class="sidebar__links-item">Password</a>

          <a href="#" data-page-name="randnum" class="sidebar__links-item">Random number</a>

          <a href="#" data-page-name="tictactoe" class="sidebar__links-item">Tic-Tac-Toe</a>

        </div>

        <div class="sidebar__clock-container">
          
        </div>

        <div class="sidebar__date-container">

        </div>
      </div>

      <div class="menu-btn">
        <span></span>
      </div>
    `;
        this.root.innerHTML = html;
        this.sidebarDate();
        this.openPage();
        this.routing();
        this.rememberPage();
        this.adaptiveMenuBtn();
    }
    routing() {
        const buttons = this.buttonBlock.querySelectorAll('.sidebar__links-item');
        let renderPage = ()=>{
            this.pagesName.forEach((i)=>{
                if (i.pageName === window.location.hash.slice(1)) i.render();
            });
        };
        renderPage();
        buttons.forEach((item)=>{
            item.addEventListener('click', (event)=>{
                event.preventDefault();
                if (item.getAttribute(this.routeAttr) !== window.location.hash.slice(1)) {
                    this.pagesName.forEach((a)=>a.pageClearHandler()
                    );
                    buttons.forEach((a)=>a.classList.remove(this.btnActiveClass)
                    );
                    window.location.hash = item.getAttribute(this.routeAttr);
                    renderPage();
                    item.classList.add(this.btnActiveClass);
                }
            });
        });
    }
    sidebarDate() {
        const clockContainer = document.querySelector(this.clockContainerSelector), dateContainer = document.querySelector(this.dateContainerSelector);
        function timer() {
            let date = new Date();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            clockContainer.innerHTML = `
        <div class="sidebar__clock-hours">${addZeroBeforeNum(hours)}</div>
        <div class="sidebar__clock-divider">:</div>
        <div class="sidebar__clock-hours">${addZeroBeforeNum(minutes)}</div>
        <div class="sidebar__clock-divider">:</div>
        <div class="sidebar__clock-hours">${addZeroBeforeNum(seconds)}</div>
      `;
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            dateContainer.innerHTML = `
        <div class="sidebar__date-day">${addZeroBeforeNum(day)}</div>
        <div class="sidebar__date-divider">.</div>
        <div class="sidebar__date-month">${addZeroBeforeNum(month)}</div>
        <div class="sidebar__date-divider">.</div>
        <div class="sidebar__date-year">${year}</div>
      `;
        }
        function addZeroBeforeNum(number) {
            if (number < 10) number = '0' + number;
            return number;
        }
        timer();
        setInterval(timer, 1000);
    }
    getPage() {
        let storragePage = localStorage.getItem(this.storragePageName);
        if (storragePage !== null) return JSON.parse(storragePage);
        return 'main';
    }
    openPage() {
        let page = this.getPage();
        window.location.hash = page;
        const buttons = this.buttonBlock.querySelectorAll('.sidebar__links-item');
        buttons.forEach((a)=>{
            if (a.getAttribute(this.routeAttr) === window.location.hash.slice(1)) a.classList.add(this.btnActiveClass);
        });
    }
    rememberPage() {
        window.addEventListener('hashchange', ()=>{
            localStorage.setItem(this.storragePageName, JSON.stringify(window.location.hash.slice(1)));
        });
    }
    adaptiveMenuBtn() {
        const menuBtn = document.querySelector(this.menuBtnSelector), sidebar = document.querySelector(this.sidebarSelector);
        menuBtn.addEventListener('click', ()=>{
            if (!menuBtn.classList.contains(this.menuBtnActiveClass)) {
                menuBtn.classList.add(this.menuBtnActiveClass);
                sidebar.style.left = '0';
                sidebar.style.opacity = '1';
            } else {
                menuBtn.classList.remove(this.menuBtnActiveClass);
                sidebar.style.left = '-100%';
                sidebar.style.opacity = '0';
            }
        });
        if (window.screen.width <= 768) window.addEventListener('hashchange', ()=>{
            menuBtn.classList.remove(this.menuBtnActiveClass);
            sidebar.style.left = '-100%';
            sidebar.style.opacity = '0';
        });
    }
}

},{"../../Utils/root":"6QMmu","../Page/Page":"bOYCM","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bOYCM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Page", ()=>Page
);
class Page {
    constructor(root, pageName){
        this.root = root;
        this.pageName = pageName;
    }
    pageClearHandler() {
        const html = ``;
        this.root.innerHTML = html;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"eS6Av":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MainPage", ()=>MainPage
);
var _page = require("../Page/Page");
class MainPage extends _page.Page {
    constructor(root, pageName){
        super(root, pageName);
    }
    render() {
        const html = `
      <div class="page promo">
        <div class="container">
          <h1 class="title promo-title">Tosik's pet projects</h1>
          <div class="subtitle promo-subtitle">Here you can check my pet projects!</div>
          <div class="descr promo-descr">Ther's my web application with different pet projects. Here I use my knowledge to create some cool things.</div>
          <img src="assets/img/javacript.png" alt="">
        </div>
      </div>
    `;
        this.root.innerHTML = html;
    }
}

},{"../Page/Page":"bOYCM","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bzwHm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ToDo", ()=>ToDo
);
var _page = require("../Page/Page");
class ToDo extends _page.Page {
    constructor(root, pageName){
        super(root, pageName);
        this.todoLocalStorageName = 'todo';
        this.todoContainerSelector = '.todo__list-container';
        this.importantBtnSelector = '.todo__list-star';
        this.importantBtnActiveClass = 'todo__list-star_active';
        this.canBtnSelector = '.todo__list-can';
    }
    render() {
        const html = `
      <div class="page todo">
        <div class="container container_cover-bg">
          <h2 class="title todo-title">ToDo List</h2>
          <div class="subtitle todo-subtitle">Make your ToDo List to make life easier</div>


          <form class="todo-wrapper">
            <input class="todo-input" name="text" type="text">
            <input class="todo-submit" name="button" type="submit" value="Add">
          </form>
          
          <div class="todo__list-container">

          </div>
        </div>
      </div>
    `;
        this.root.innerHTML = html;
        this.addToDo('.todo-input', '.todo-submit');
        this.renderToDos(this.getFromLocalStorage());
    }
    getFromLocalStorage() {
        let storrageArr = localStorage.getItem(this.todoLocalStorageName);
        if (storrageArr !== null) return JSON.parse(storrageArr);
        return [];
    }
    addToLocalStorage(inputVal1) {
        if (inputVal1 !== '') {
            let todos = this.getFromLocalStorage();
            let todo = {
                value: inputVal1,
                isImportant: false
            };
            todos.push(todo);
            localStorage.setItem(this.todoLocalStorageName, JSON.stringify(todos));
            this.renderToDos(todos);
        }
    }
    renderToDos(storrageArr) {
        const todoContainer = document.querySelector(this.todoContainerSelector);
        todoContainer.innerHTML = ``;
        storrageArr.forEach((item, index)=>{
            let html = `

      <div class="todo__list-wrapper">
        <div class="todo__list-text">${index + 1}. ${item.value}</div>
        <div class="todo__list-icons">
          <div class="todo__list-star">
          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          width="350.953px" height="350.953px" viewBox="0 0 350.953 350.953" style="enable-background:new 0 0 350.953 350.953;"
          xml:space="preserve"><g><g><path d="M276.199,342.977c-1.988,0-3.985-0.475-5.814-1.436l-94.908-49.896l-94.908,49.896c-4.212,2.213-9.315,1.845-13.164-0.952c-3.85-2.796-5.777-7.536-4.973-12.227l18.125-105.682L3.775,147.836c-3.407-3.321-4.633-8.289-3.163-12.813
             c1.47-4.525,5.382-7.823,10.091-8.508l106.111-15.418l47.454-96.153c2.105-4.267,6.451-6.968,11.209-6.968
             c4.757,0,9.104,2.701,11.208,6.968l47.454,96.153l106.11,15.418c4.709,0.685,8.62,3.982,10.091,8.508
             c1.471,4.524,0.245,9.492-3.163,12.813l-76.783,74.845l18.126,105.682c0.804,4.689-1.124,9.431-4.973,12.227
             C281.37,342.172,278.792,342.977,276.199,342.977z M39.362,147.615l63.352,61.752c2.946,2.871,4.291,7.01,3.594,11.063
             l-14.955,87.196l78.306-41.17c3.642-1.914,7.992-1.914,11.634,0l78.306,41.168l-14.956-87.194
             c-0.695-4.056,0.649-8.192,3.595-11.063l63.353-61.752l-87.549-12.722c-4.071-0.592-7.591-3.148-9.412-6.838l-39.152-79.334
             l-39.153,79.334c-1.82,3.689-5.341,6.246-9.412,6.838L39.362,147.615z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
          </div>
          <div class="todo__list-can">
            <svg enable-background="new 0 0 40 40" id="Слой_1" version="1.1" viewBox="0 0 40 40" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M28,40H11.8c-3.3,0-5.9-2.7-5.9-5.9V16c0-0.6,0.4-1,1-1s1,0.4,1,1v18.1c0,2.2,1.8,3.9,3.9,3.9H28c2.2,0,3.9-1.8,3.9-3.9V16   c0-0.6,0.4-1,1-1s1,0.4,1,1v18.1C33.9,37.3,31.2,40,28,40z"/></g><g><path d="M33.3,4.9h-7.6C25.2,2.1,22.8,0,19.9,0s-5.3,2.1-5.8,4.9H6.5c-2.3,0-4.1,1.8-4.1,4.1S4.2,13,6.5,13h26.9c2.3,0,4.1-1.8,4.1-4.1S35.6,4.9,33.3,4.9z M19.9,2c1.8,0,3.3,1.2,3.7,2.9h-7.5C16.6,3.2,18.1,2,19.9,2z M33.3,11H6.5   c-1.1,0-2.1-0.9-2.1-2.1c0-1.1,0.9-2.1,2.1-2.1h26.9c1.1,0,2.1,0.9,2.1,2.1C35.4,10.1,34.5,11,33.3,11z"/></g><g><path d="M12.9,35.1c-0.6,0-1-0.4-1-1V17.4c0-0.6,0.4-1,1-1s1,0.4,1,1v16.7C13.9,34.6,13.4,35.1,12.9,35.1z"/></g><g><path d="M26.9,35.1c-0.6,0-1-0.4-1-1V17.4c0-0.6,0.4-1,1-1s1,0.4,1,1v16.7C27.9,34.6,27.4,35.1,26.9,35.1z"/></g><g><path d="M19.9,35.1c-0.6,0-1-0.4-1-1V17.4c0-0.6,0.4-1,1-1s1,0.4,1,1v16.7C20.9,34.6,20.4,35.1,19.9,35.1z"/></g></svg>
          </div>
        </div>
      </div>
      `;
            todoContainer.insertAdjacentHTML('beforeend', html);
        });
        this.putToDoAsImportant(storrageArr);
        this.deleateToDo(storrageArr);
        this.markToDoAsImportant(storrageArr);
    }
    addToDo(inputSelector, buttonSelector) {
        const input = document.querySelector(inputSelector), button = document.querySelector(buttonSelector);
        button.addEventListener('click', (event)=>{
            event.preventDefault();
            let inputVal = input.value;
            this.addToLocalStorage(inputVal);
            input.value = '';
        });
    }
    markToDoAsImportant(storrageArr1) {
        const todoContainer = document.querySelector(this.todoContainerSelector);
        const importantBtns = todoContainer.querySelectorAll(this.importantBtnSelector);
        storrageArr1.forEach((item, index)=>{
            if (item.isImportant == true && importantBtns != []) importantBtns[index].classList.add(this.importantBtnActiveClass);
        });
    }
    putToDoAsImportant(storrageArr2) {
        const todoContainer = document.querySelector(this.todoContainerSelector);
        const importantBtns = todoContainer.querySelectorAll(this.importantBtnSelector);
        importantBtns.forEach((item, index)=>{
            item.addEventListener('click', ()=>{
                if (!item.classList.contains(this.importantBtnActiveClass)) {
                    item.classList.add(this.importantBtnActiveClass);
                    storrageArr2.forEach((a, i)=>{
                        if (index == i) {
                            a.isImportant = true;
                            localStorage.setItem(this.todoLocalStorageName, JSON.stringify(storrageArr2));
                        }
                    });
                } else if (item.classList.contains(this.importantBtnActiveClass)) {
                    item.classList.remove(this.importantBtnActiveClass);
                    storrageArr2.forEach((a, i)=>{
                        if (index == i) {
                            a.isImportant = false;
                            localStorage.setItem(this.todoLocalStorageName, JSON.stringify(storrageArr2));
                        }
                    });
                }
            });
        });
    }
    deleateToDo(storrageArr3) {
        const todoContainer = document.querySelector(this.todoContainerSelector);
        const canBtns = todoContainer.querySelectorAll(this.canBtnSelector);
        canBtns.forEach((item, index)=>{
            item.addEventListener('click', ()=>{
                let wantDeleate = confirm('Do you want to delete this todo?');
                if (wantDeleate) {
                    storrageArr3.splice(index, 1);
                    localStorage.setItem(this.todoLocalStorageName, JSON.stringify(storrageArr3));
                    this.render(this.getFromLocalStorage());
                }
            });
        });
    }
}

},{"../Page/Page":"bOYCM","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jQ5q3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Calculator", ()=>Calculator
);
var _page = require("../Page/Page");
class Calculator extends _page.Page {
    constructor(root, pageName){
        super(root, pageName);
        this.inputSelector = '.calculator__input-block';
        this.btnsSelector = '.calculator__item-block';
        this.actionClass = 'calculator__item-action';
        this.equalClass = 'calculator__item-equal';
        this.clearClass = 'calculator__item-clear';
        this.undoClass = 'calculator__item-undo';
        this.localStoragecalculatingName = 'calculating';
        this.errorMessage = "can't calculate this -_-";
    }
    render() {
        const html = `
      <div class="page calculator">
        <div class="container">
          <h2 class="title calculator-title">Calculator</h2>
          <div class="subtitle calculator-subtitle">You can calculate some numbers</div>


          <div class="calculator-wrapper">
            <div class="calculator__input-wrapper">
              <input disabled class="calculator__input-block" type="text" name="calculator-output">
            </div>

            <div class="calculator__item-wrapper">

              <div class="calculator__item-block calculator__item-undo">←</div>
              <div class="calculator__item-block calculator__item-action">%</div>
              <div class="calculator__item-block calculator__item-clear">C</div>

              <div class="calculator__item-block calculator__item-action calculator__item_bg-white">7</div>
              <div class="calculator__item-block calculator__item-action calculator__item_bg-white">8</div>
              <div class="calculator__item-block calculator__item-action calculator__item_bg-white">9</div>
              <div class="calculator__item-block calculator__item-action">/</div>

              <div class="calculator__item-block calculator__item-action calculator__item_bg-white">4</div>
              <div class="calculator__item-block calculator__item-action calculator__item_bg-white">5</div>
              <div class="calculator__item-block calculator__item-action calculator__item_bg-white">6</div>
              <div class="calculator__item-block calculator__item-action">*</div>

              <div class="calculator__item-block calculator__item-action calculator__item_bg-white">1</div>
              <div class="calculator__item-block calculator__item-action calculator__item_bg-white">2</div>
              <div class="calculator__item-block calculator__item-action calculator__item_bg-white">3</div>
              <div class="calculator__item-block calculator__item-action">-</div>

              <div class="calculator__item-block calculator__item-action calculator__item_bg-white">0</div>
              <div class="calculator__item-block calculator__item-action calculator__item_bg-white">.</div>
              <div class="calculator__item-block calculator__item-equal">=</div>
              <div class="calculator__item-block calculator__item-action">+</div>

            </div>

          </div>

        </div>
      </div>
    `;
        this.root.innerHTML = html;
        this.calculating();
    }
    calculating() {
        let input = document.querySelector(this.inputSelector), btns = document.querySelectorAll(this.btnsSelector), errorMessage = "try again";
        btns.forEach((item)=>{
            item.addEventListener('click', ()=>{
                if (input.value.includes(this.errorMessage)) input.value = '';
                if (item.classList.contains(this.actionClass)) this.addSymb(item, input);
                else if (item.classList.contains(this.equalClass)) this.equal(input, this.errorMessage);
                else if (item.classList.contains(this.undoClass)) this.undo(input);
                else if (item.classList.contains(this.clearClass)) this.clear(input);
                else item.classList.contains(this.historyClass);
            });
        });
    }
    addSymb(item, input) {
        input.value += item.textContent;
    }
    undo(input1) {
        let val = input1.value.split('');
        val.pop();
        input1.value = val.join('');
    }
    clear(input2) {
        input2.value = '';
    }
    equal(input3) {
        let val = input3.value;
        if (val.length !== 0) try {
            input3.value = eval(val);
        } catch (e) {
            input3.value = this.errorMessage;
        }
    }
}

},{"../Page/Page":"bOYCM","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gaP28":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Dogs", ()=>Dogs
);
var _page = require("../Page/Page");
class Dogs extends _page.Page {
    constructor(root, pageName){
        super(root, pageName);
        this.imgBlockSelector = '.dog__block-img';
        this.btnSelector = '.dog__block-btn';
        this.url = 'https://dog.ceo/api/breeds/image/random';
    }
    render() {
        const html = `
    
    <div class="page dogs">
      <div class="container">
        <h2 class="title dogs-title">Dog image</h2>
        <div class="subtitle dogs-subtitle">Random dog image works by Dog API (<a href="https://dog.ceo/">link</a>)</div>
        <div class="dog__block-wrapper">
          <div class="dog__block-img"></div>
          <a href="#" class="dog__block-btn">Dog image</a>
        </div>
      </div>
    </div>

    `;
        this.root.innerHTML = html;
        this.getDog();
        this.btnClickListener();
    }
    getDog() {
        fetch(this.url).then((responce)=>responce.json()
        ).then((result)=>{
            let imgBlock = document.querySelector(this.imgBlockSelector);
            imgBlock.innerHTML = `
          <img src="${result.message}" alt=""dog-img>
        `;
        });
    }
    btnClickListener() {
        let btn = document.querySelector(this.btnSelector);
        btn.addEventListener('click', (event)=>{
            event.preventDefault();
            this.getDog();
        });
    }
}

},{"../Page/Page":"bOYCM","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"k4Tkb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Password", ()=>Password
);
var _page = require("../Page/Page");
class Password extends _page.Page {
    constructor(root, pageName){
        super(root, pageName);
        this.passGenBtnSelector = '.password__generate-btn';
        this.passLengthSelSelector = '.password__select-length';
        this.passIutputSelector = '.password__output-input';
        this.passCopyBtnSelector = '.password__output-btn';
        this.passModalSelector = '.password__modal-copied';
        this.passModalActiveClass = 'password__modal-copied_active';
    }
    render() {
        const html = `
      <div class="page password">

        <div class="password__modal-copied">Password copied</div>

        <div class="container">
          <h2 class="title password-title">Password generator</h2>
          <div class="subtitle password-subtitle">Use password generator to create safe password</div>

          <div class="password-wrapper">
            <div class="password__select-wrapper">
              <div class="password__select-text">Choose password length:</div>
              <select class="password__select-length">
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10" selected>10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
              </select>
            </div>

            <div class="password__generate-wrapper">
              <a href="#" class="password__generate-btn">Generate password</a>
            </div>

            <div class="password__output-wrapper">
              <input class="password__output-input" name="password" name="text" readonly>
              <a href="#" class="password__output-btn">Copy</a> 
            </div>

          </div>

        </div>
      </div>
    `;
        this.root.innerHTML = html;
        this.generatePassword();
        this.copyPassword();
    }
    generatePassword() {
        const passGenBtn = document.querySelector(this.passGenBtnSelector), passLengthSel = document.querySelector(this.passLengthSelSelector), input = document.querySelector(this.passIutputSelector), symbArr = [
            'abcdefghijklmnopqrstuvwxyz',
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            '0123456789',
            '!@#$&*?|%+-_./:;=()[]{}'
        ];
        passGenBtn.addEventListener('click', (event)=>{
            event.preventDefault();
            let passLengthSelVal = passLengthSel.value;
            // let lowerCharacters = 'abcdefghijklmnopqrstuvwxyz',
            //     upperCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            //     numbers = '0123456789',
            //     symbols = '!@#$&*?|%+-_./:;=()[]{}';
            let passwordArr = [];
            for(let i = 0; i < passLengthSelVal; i++){
                let randSymbTypeNum = Math.floor(Math.random() * symbArr.length);
                let randSymbArr = symbArr[randSymbTypeNum].split('');
                let randSymb = Math.floor(Math.random() * randSymbArr.length);
                passwordArr.push(randSymbArr[randSymb]);
            }
            let password = passwordArr.join('');
            input.value = password;
        });
    }
    copyPassword() {
        const input = document.querySelector(this.passIutputSelector), passCopyBtn = document.querySelector(this.passCopyBtnSelector);
        passCopyBtn.addEventListener('click', (event)=>{
            if (input.value !== '') {
                event.preventDefault();
                input.select();
                document.execCommand("copy");
                this.copyModal();
            }
        });
    }
    copyModal() {
        const modal = document.querySelector(this.passModalSelector);
        modal.classList.add(this.passModalActiveClass);
        setTimeout(()=>{
            modal.classList.remove(this.passModalActiveClass);
        }, 2000);
    }
}

},{"../Page/Page":"bOYCM","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6CNKp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RandNumGraph", ()=>RandNumGraph
);
var _page = require("../Page/Page");
class RandNumGraph extends _page.Page {
    constructor(root, pageName){
        super(root, pageName);
        this.numGapSelSelector = '.randnum__choose-select_numgap';
        this.numIteratSelSelector = '.randnum__choose-select_numiteration';
        this.btnSelector = '.randnum__btn-item';
        this.graphWrapperSelector = '.randnum__graph-wrapper';
        this.graphItemSelector = '.randnum__graph-item';
        this.graphAmountSelector = '.randnum__graph-amount';
    }
    render() {
        const html = `
    <div class="page randnum">
      <div class="container">
      
        <h2 class="title randnum-title">Random number</h2>
        <div class="subtitle randnum-subtitle">Random number generation diagram</div>

        <div class="randnum__choose-wrapper">

          <div class="randnum__choose-block">
            <div class="randnum__choose-item">
              <div class="randnum__choose-text">Choose number gap:</div>
              <select class="randnum__choose-select randnum__choose-select_numgap">
                <option value="0-1">0-1</option>
                <option value="0-2">0-2</option>
                <option value="0-3">0-3</option>
                <option value="0-4" selected>0-4</option>
                <option value="0-5">0-5</option>
                <option value="0-6">0-6</option>
                <option value="0-7">0-7</option>
                <option value="0-8">0-8</option>
                <option value="0-9">0-9</option>
              </select>
            </div>

            <div class="randnum__choose-item">
              <div class="randnum__choose-text">Choose amount of iteration:</div>
              <select class="randnum__choose-select randnum__choose-select_numiteration">
                <option value="10">10</option>
                <option value="50">50</option>
                <option value="100" selected>100</option>
                <option value="250">250</option>
                <option value="500">500</option>
                <option value="1000">1000</option>
                <option value="2500">2500</option>
                <option value="5000">5000</option>
                <option value="10000">10000</option>
                <option value="20000">20000</option>
                <option value="30000">30000</option>
                <option value="50000">50000</option>
          
              </select>
            </div>
          </div>

          <div class="randnum__btn-wrapper">
            <a href="#" class="randnum__btn-item">Start</a>
          </div>

        </div>

        <div class="randnum__graph-wrapper">
          
        </div>
      
      </div>
    </div>
    `;
        this.root.innerHTML = html;
        this.createDiagram();
    }
    createDiagram() {
        const btn = document.querySelector(this.btnSelector), numGapSel = document.querySelector(this.numGapSelSelector), numIteratSel = document.querySelector(this.numIteratSelSelector), graphWrapper = document.querySelector(this.graphWrapperSelector);
        btn.addEventListener('click', (event)=>{
            event.preventDefault();
            let numGapVal = +numGapSel.value[2];
            let numIteratVal = numIteratSel.value;
            this.createDiagramStructure(graphWrapper, numGapVal);
            let numGapOnPageArr = graphWrapper.querySelectorAll(this.graphItemSelector);
            for(let i = 0; i < numIteratVal; i++){
                let randNum = Math.floor(Math.random() * (numGapVal + 1));
                numGapOnPageArr.forEach((item, index)=>{
                    if (randNum === index) {
                        let graphAmountItem = item.querySelector(this.graphAmountSelector);
                        let graphAmountTextCont = +graphAmountItem.textContent + 1;
                        graphAmountItem.textContent = graphAmountTextCont;
                    }
                });
            }
            this.animateGraph(graphWrapper, numGapOnPageArr);
        });
    }
    createDiagramStructure(graphWrapper, numGapVal) {
        graphWrapper.innerHTML = '';
        for(let i = 0; i <= numGapVal; i++){
            let html = `
        <div class="randnum__graph-item">
          <div class="randnum__graph-num">${i}</div>
          <div class="randnum__graph-amount">0</div>
        </div>
      `;
            graphWrapper.innerHTML += html;
        }
    }
    animateGraph(graphWrapper1, numGapOnPageArr) {
        let graphWrapperHeight = window.getComputedStyle(graphWrapper1).height.slice(0, 3);
        let maxAmount = +numGapOnPageArr[0].querySelector(this.graphAmountSelector).textContent;
        let maxItem = numGapOnPageArr[0].querySelector(this.graphAmountSelector);
        numGapOnPageArr.forEach((item)=>{
            let itemAmountTextCont = +item.querySelector(this.graphAmountSelector).textContent;
            if (maxAmount < itemAmountTextCont) {
                maxAmount = itemAmountTextCont;
                maxItem = item;
            }
        });
        numGapOnPageArr.forEach((item)=>{
            let itemAmountTextCont = +item.querySelector(this.graphAmountSelector).textContent;
            if (itemAmountTextCont === maxAmount) item.style.height = '100%';
            else item.style.height = `${graphWrapperHeight * itemAmountTextCont / maxAmount}px`;
            item.style.opacity = '1';
        });
    }
}

},{"../Page/Page":"bOYCM","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2LQ5Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TicTacToe", ()=>TicTacToe
);
var _page = require("../Page/Page");
class TicTacToe extends _page.Page {
    constructor(root, pageName){
        super(root, pageName);
        this.areaSelector = '.tictactoe-wrapper';
        this.boxClass = 'tictactoe-box';
        this.modalBacksideSelector = '.tictactoe__modal-backside';
        this.modalWrapperSelector = '.tictactoe__modal-wrapper';
        this.modalTitleSelector = '.tictactoe__modal-title';
        this.modalBtnSelector = '.tictactoe__modal-btn';
        this.move = 0;
    }
    render() {
        const html = `
      <div class="page tictactoe">
        <div class="container">
          <h2 class="title tictactoe-title">Tic-Tac-Toe</h2>
          <div class="subtitle tictactoe-subtitle">Enjoy playing Tic-Tac-Toe with your friend</div>

          <div class="tictactoe-wrapper">
            <div class="tictactoe-box"></div>
            <div class="tictactoe-box"></div>
            <div class="tictactoe-box"></div>
            <div class="tictactoe-box"></div>
            <div class="tictactoe-box"></div>
            <div class="tictactoe-box"></div>
            <div class="tictactoe-box"></div>
            <div class="tictactoe-box"></div>
            <div class="tictactoe-box"></div>
          </div>

          <div class="tictactoe__modal-backside">
            <div class="tictactoe__modal-wrapper">

              <div class="tictactoe__modal-title"></div>
              <div class="tictactoe__modal-text">For restart click the button</div>
              <div class="tictactoe__modal-block">
                <a href="#" class="tictactoe__modal-btn">Restart</a>
              </div>

            </div>
             
            
          </div>
          
        </div>
      </div>
    `;
        this.root.innerHTML = html;
        this.tictactoe();
    }
    tictactoe() {
        let modalBackside = document.querySelector(this.modalBacksideSelector);
        let area = document.querySelector(this.areaSelector);
        this.move = 0;
        let result = '';
        area.addEventListener('click', (event)=>{
            if (event.target.className == this.boxClass && event.target.innerHTML == '') {
                this.move % 2 === 0 ? event.target.innerHTML = 'X' : event.target.innerHTML = '0';
                this.move++;
                this.check(result);
                if (modalBackside.style.display == 'none') this.isFull();
            }
        });
    }
    check(result) {
        let boxes = document.querySelectorAll(`.${this.boxClass}`);
        const winComb = [
            [
                0,
                1,
                2
            ],
            [
                3,
                4,
                5
            ],
            [
                6,
                7,
                8
            ],
            [
                0,
                3,
                6
            ],
            [
                1,
                4,
                7
            ],
            [
                2,
                5,
                8
            ],
            [
                0,
                4,
                8
            ],
            [
                2,
                4,
                6
            ]
        ];
        winComb.forEach((item, index)=>{
            if (boxes[winComb[index][0]].innerHTML == 'X' && boxes[winComb[index][1]].innerHTML == 'X' && boxes[winComb[index][2]].innerHTML == 'X') {
                result = 'WINNER: X';
                this.prepareResult(result);
            } else if (boxes[winComb[index][0]].innerHTML == '0' && boxes[winComb[index][1]].innerHTML == '0' && boxes[winComb[index][2]].innerHTML == '0') {
                result = 'WINNER: 0';
                this.prepareResult(result);
            }
        });
    }
    isFull() {
        let boxes = document.querySelectorAll(`.${this.boxClass}`);
        if (boxes[0].innerHTML != '' && boxes[1].innerHTML != '' && boxes[2].innerHTML != '' && boxes[3].innerHTML != '' && boxes[4].innerHTML != '' && boxes[5].innerHTML != '' && boxes[6].innerHTML != '' && boxes[7].innerHTML != '' && boxes[8].innerHTML != '') this.prepareResult('Draw');
    }
    prepareResult(result1) {
        let modalBackside = document.querySelector(this.modalBacksideSelector), modalWrapper = document.querySelector(this.modalWrapperSelector), modalTitle = document.querySelector(this.modalTitleSelector);
        modalTitle.innerHTML = `${result1}`;
        modalBackside.style.display = 'block';
        modalWrapper.style.display = 'block';
        document.body.style.overflow = 'hidden';
        this.closeModal(modalBackside, modalWrapper);
    }
    closeModal(modalBackside, modalWrapper) {
        const modalBtn = document.querySelector(this.modalBtnSelector);
        let boxes = document.querySelectorAll(`.${this.boxClass}`);
        modalBtn.addEventListener('click', (event)=>{
            event.preventDefault();
            modalBackside.style.display = 'none';
            modalWrapper.style.display = 'none';
            boxes.forEach((item)=>{
                item.innerHTML = '';
            });
            this.move = 0;
        });
    }
}

},{"../Page/Page":"bOYCM","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["lBB98","hD4hw"], "hD4hw", "parcelRequirec7e1")

//# sourceMappingURL=index.379dd93c.js.map
