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
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
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
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
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
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../src/scss/app.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\..\\public\\images\\github4.png":[["github4.141c7908.png","images/github4.png"],"images/github4.png"],"./..\\..\\public\\images\\black.webp":[["black.b2c68466.webp","images/black.webp"],"images/black.webp"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"../node_modules/core-js/library/modules/_global.js":[function(require,module,exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],"../node_modules/core-js/library/modules/_core.js":[function(require,module,exports) {
var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],"../node_modules/core-js/library/modules/_a-function.js":[function(require,module,exports) {
module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

},{}],"../node_modules/core-js/library/modules/_ctx.js":[function(require,module,exports) {
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"./_a-function":"../node_modules/core-js/library/modules/_a-function.js"}],"../node_modules/core-js/library/modules/_is-object.js":[function(require,module,exports) {
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],"../node_modules/core-js/library/modules/_an-object.js":[function(require,module,exports) {
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":"../node_modules/core-js/library/modules/_is-object.js"}],"../node_modules/core-js/library/modules/_fails.js":[function(require,module,exports) {
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],"../node_modules/core-js/library/modules/_descriptors.js":[function(require,module,exports) {
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":"../node_modules/core-js/library/modules/_fails.js"}],"../node_modules/core-js/library/modules/_dom-create.js":[function(require,module,exports) {
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_is-object":"../node_modules/core-js/library/modules/_is-object.js","./_global":"../node_modules/core-js/library/modules/_global.js"}],"../node_modules/core-js/library/modules/_ie8-dom-define.js":[function(require,module,exports) {
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":"../node_modules/core-js/library/modules/_descriptors.js","./_fails":"../node_modules/core-js/library/modules/_fails.js","./_dom-create":"../node_modules/core-js/library/modules/_dom-create.js"}],"../node_modules/core-js/library/modules/_to-primitive.js":[function(require,module,exports) {
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"./_is-object":"../node_modules/core-js/library/modules/_is-object.js"}],"../node_modules/core-js/library/modules/_object-dp.js":[function(require,module,exports) {
var anObject = require('./_an-object');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var toPrimitive = require('./_to-primitive');
var dP = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"./_an-object":"../node_modules/core-js/library/modules/_an-object.js","./_ie8-dom-define":"../node_modules/core-js/library/modules/_ie8-dom-define.js","./_to-primitive":"../node_modules/core-js/library/modules/_to-primitive.js","./_descriptors":"../node_modules/core-js/library/modules/_descriptors.js"}],"../node_modules/core-js/library/modules/_property-desc.js":[function(require,module,exports) {
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],"../node_modules/core-js/library/modules/_hide.js":[function(require,module,exports) {
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_object-dp":"../node_modules/core-js/library/modules/_object-dp.js","./_property-desc":"../node_modules/core-js/library/modules/_property-desc.js","./_descriptors":"../node_modules/core-js/library/modules/_descriptors.js"}],"../node_modules/core-js/library/modules/_has.js":[function(require,module,exports) {
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],"../node_modules/core-js/library/modules/_export.js":[function(require,module,exports) {

var global = require('./_global');
var core = require('./_core');
var ctx = require('./_ctx');
var hide = require('./_hide');
var has = require('./_has');
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

},{"./_global":"../node_modules/core-js/library/modules/_global.js","./_core":"../node_modules/core-js/library/modules/_core.js","./_ctx":"../node_modules/core-js/library/modules/_ctx.js","./_hide":"../node_modules/core-js/library/modules/_hide.js","./_has":"../node_modules/core-js/library/modules/_has.js"}],"../node_modules/core-js/library/modules/es6.object.define-property.js":[function(require,module,exports) {
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperty: require('./_object-dp').f });

},{"./_export":"../node_modules/core-js/library/modules/_export.js","./_descriptors":"../node_modules/core-js/library/modules/_descriptors.js","./_object-dp":"../node_modules/core-js/library/modules/_object-dp.js"}],"../node_modules/core-js/library/fn/object/define-property.js":[function(require,module,exports) {
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};

},{"../../modules/es6.object.define-property":"../node_modules/core-js/library/modules/es6.object.define-property.js","../../modules/_core":"../node_modules/core-js/library/modules/_core.js"}],"../node_modules/core-js/library/modules/_redefine.js":[function(require,module,exports) {
module.exports = require('./_hide');

},{"./_hide":"../node_modules/core-js/library/modules/_hide.js"}],"../node_modules/core-js/library/modules/_uid.js":[function(require,module,exports) {
var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

},{}],"../node_modules/core-js/library/modules/_meta.js":[function(require,module,exports) {
var META = require('./_uid')('meta');
var isObject = require('./_is-object');
var has = require('./_has');
var setDesc = require('./_object-dp').f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !require('./_fails')(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

},{"./_uid":"../node_modules/core-js/library/modules/_uid.js","./_is-object":"../node_modules/core-js/library/modules/_is-object.js","./_has":"../node_modules/core-js/library/modules/_has.js","./_object-dp":"../node_modules/core-js/library/modules/_object-dp.js","./_fails":"../node_modules/core-js/library/modules/_fails.js"}],"../node_modules/core-js/library/modules/_library.js":[function(require,module,exports) {
module.exports = true;

},{}],"../node_modules/core-js/library/modules/_shared.js":[function(require,module,exports) {

var core = require('./_core');
var global = require('./_global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: require('./_library') ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});

},{"./_core":"../node_modules/core-js/library/modules/_core.js","./_global":"../node_modules/core-js/library/modules/_global.js","./_library":"../node_modules/core-js/library/modules/_library.js"}],"../node_modules/core-js/library/modules/_wks.js":[function(require,module,exports) {
var store = require('./_shared')('wks');
var uid = require('./_uid');
var Symbol = require('./_global').Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

},{"./_shared":"../node_modules/core-js/library/modules/_shared.js","./_uid":"../node_modules/core-js/library/modules/_uid.js","./_global":"../node_modules/core-js/library/modules/_global.js"}],"../node_modules/core-js/library/modules/_set-to-string-tag.js":[function(require,module,exports) {
var def = require('./_object-dp').f;
var has = require('./_has');
var TAG = require('./_wks')('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

},{"./_object-dp":"../node_modules/core-js/library/modules/_object-dp.js","./_has":"../node_modules/core-js/library/modules/_has.js","./_wks":"../node_modules/core-js/library/modules/_wks.js"}],"../node_modules/core-js/library/modules/_wks-ext.js":[function(require,module,exports) {
exports.f = require('./_wks');

},{"./_wks":"../node_modules/core-js/library/modules/_wks.js"}],"../node_modules/core-js/library/modules/_wks-define.js":[function(require,module,exports) {

var global = require('./_global');
var core = require('./_core');
var LIBRARY = require('./_library');
var wksExt = require('./_wks-ext');
var defineProperty = require('./_object-dp').f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};

},{"./_global":"../node_modules/core-js/library/modules/_global.js","./_core":"../node_modules/core-js/library/modules/_core.js","./_library":"../node_modules/core-js/library/modules/_library.js","./_wks-ext":"../node_modules/core-js/library/modules/_wks-ext.js","./_object-dp":"../node_modules/core-js/library/modules/_object-dp.js"}],"../node_modules/core-js/library/modules/_cof.js":[function(require,module,exports) {
var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

},{}],"../node_modules/core-js/library/modules/_iobject.js":[function(require,module,exports) {
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

},{"./_cof":"../node_modules/core-js/library/modules/_cof.js"}],"../node_modules/core-js/library/modules/_defined.js":[function(require,module,exports) {
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],"../node_modules/core-js/library/modules/_to-iobject.js":[function(require,module,exports) {
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject');
var defined = require('./_defined');
module.exports = function (it) {
  return IObject(defined(it));
};

},{"./_iobject":"../node_modules/core-js/library/modules/_iobject.js","./_defined":"../node_modules/core-js/library/modules/_defined.js"}],"../node_modules/core-js/library/modules/_to-integer.js":[function(require,module,exports) {
// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

},{}],"../node_modules/core-js/library/modules/_to-length.js":[function(require,module,exports) {
// 7.1.15 ToLength
var toInteger = require('./_to-integer');
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

},{"./_to-integer":"../node_modules/core-js/library/modules/_to-integer.js"}],"../node_modules/core-js/library/modules/_to-absolute-index.js":[function(require,module,exports) {
var toInteger = require('./_to-integer');
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

},{"./_to-integer":"../node_modules/core-js/library/modules/_to-integer.js"}],"../node_modules/core-js/library/modules/_array-includes.js":[function(require,module,exports) {
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject');
var toLength = require('./_to-length');
var toAbsoluteIndex = require('./_to-absolute-index');
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

},{"./_to-iobject":"../node_modules/core-js/library/modules/_to-iobject.js","./_to-length":"../node_modules/core-js/library/modules/_to-length.js","./_to-absolute-index":"../node_modules/core-js/library/modules/_to-absolute-index.js"}],"../node_modules/core-js/library/modules/_shared-key.js":[function(require,module,exports) {
var shared = require('./_shared')('keys');
var uid = require('./_uid');
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

},{"./_shared":"../node_modules/core-js/library/modules/_shared.js","./_uid":"../node_modules/core-js/library/modules/_uid.js"}],"../node_modules/core-js/library/modules/_object-keys-internal.js":[function(require,module,exports) {
var has = require('./_has');
var toIObject = require('./_to-iobject');
var arrayIndexOf = require('./_array-includes')(false);
var IE_PROTO = require('./_shared-key')('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

},{"./_has":"../node_modules/core-js/library/modules/_has.js","./_to-iobject":"../node_modules/core-js/library/modules/_to-iobject.js","./_array-includes":"../node_modules/core-js/library/modules/_array-includes.js","./_shared-key":"../node_modules/core-js/library/modules/_shared-key.js"}],"../node_modules/core-js/library/modules/_enum-bug-keys.js":[function(require,module,exports) {
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

},{}],"../node_modules/core-js/library/modules/_object-keys.js":[function(require,module,exports) {
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = require('./_object-keys-internal');
var enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

},{"./_object-keys-internal":"../node_modules/core-js/library/modules/_object-keys-internal.js","./_enum-bug-keys":"../node_modules/core-js/library/modules/_enum-bug-keys.js"}],"../node_modules/core-js/library/modules/_object-gops.js":[function(require,module,exports) {
exports.f = Object.getOwnPropertySymbols;

},{}],"../node_modules/core-js/library/modules/_object-pie.js":[function(require,module,exports) {
exports.f = {}.propertyIsEnumerable;

},{}],"../node_modules/core-js/library/modules/_enum-keys.js":[function(require,module,exports) {
// all enumerable object keys, includes symbols
var getKeys = require('./_object-keys');
var gOPS = require('./_object-gops');
var pIE = require('./_object-pie');
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};

},{"./_object-keys":"../node_modules/core-js/library/modules/_object-keys.js","./_object-gops":"../node_modules/core-js/library/modules/_object-gops.js","./_object-pie":"../node_modules/core-js/library/modules/_object-pie.js"}],"../node_modules/core-js/library/modules/_is-array.js":[function(require,module,exports) {
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

},{"./_cof":"../node_modules/core-js/library/modules/_cof.js"}],"../node_modules/core-js/library/modules/_to-object.js":[function(require,module,exports) {
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function (it) {
  return Object(defined(it));
};

},{"./_defined":"../node_modules/core-js/library/modules/_defined.js"}],"../node_modules/core-js/library/modules/_object-dps.js":[function(require,module,exports) {
var dP = require('./_object-dp');
var anObject = require('./_an-object');
var getKeys = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

},{"./_object-dp":"../node_modules/core-js/library/modules/_object-dp.js","./_an-object":"../node_modules/core-js/library/modules/_an-object.js","./_object-keys":"../node_modules/core-js/library/modules/_object-keys.js","./_descriptors":"../node_modules/core-js/library/modules/_descriptors.js"}],"../node_modules/core-js/library/modules/_html.js":[function(require,module,exports) {
var document = require('./_global').document;
module.exports = document && document.documentElement;

},{"./_global":"../node_modules/core-js/library/modules/_global.js"}],"../node_modules/core-js/library/modules/_object-create.js":[function(require,module,exports) {
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = require('./_an-object');
var dPs = require('./_object-dps');
var enumBugKeys = require('./_enum-bug-keys');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":"../node_modules/core-js/library/modules/_an-object.js","./_object-dps":"../node_modules/core-js/library/modules/_object-dps.js","./_enum-bug-keys":"../node_modules/core-js/library/modules/_enum-bug-keys.js","./_shared-key":"../node_modules/core-js/library/modules/_shared-key.js","./_dom-create":"../node_modules/core-js/library/modules/_dom-create.js","./_html":"../node_modules/core-js/library/modules/_html.js"}],"../node_modules/core-js/library/modules/_object-gopn.js":[function(require,module,exports) {
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = require('./_object-keys-internal');
var hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

},{"./_object-keys-internal":"../node_modules/core-js/library/modules/_object-keys-internal.js","./_enum-bug-keys":"../node_modules/core-js/library/modules/_enum-bug-keys.js"}],"../node_modules/core-js/library/modules/_object-gopn-ext.js":[function(require,module,exports) {
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject');
var gOPN = require('./_object-gopn').f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"./_to-iobject":"../node_modules/core-js/library/modules/_to-iobject.js","./_object-gopn":"../node_modules/core-js/library/modules/_object-gopn.js"}],"../node_modules/core-js/library/modules/_object-gopd.js":[function(require,module,exports) {
var pIE = require('./_object-pie');
var createDesc = require('./_property-desc');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var has = require('./_has');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

},{"./_object-pie":"../node_modules/core-js/library/modules/_object-pie.js","./_property-desc":"../node_modules/core-js/library/modules/_property-desc.js","./_to-iobject":"../node_modules/core-js/library/modules/_to-iobject.js","./_to-primitive":"../node_modules/core-js/library/modules/_to-primitive.js","./_has":"../node_modules/core-js/library/modules/_has.js","./_ie8-dom-define":"../node_modules/core-js/library/modules/_ie8-dom-define.js","./_descriptors":"../node_modules/core-js/library/modules/_descriptors.js"}],"../node_modules/core-js/library/modules/es6.symbol.js":[function(require,module,exports) {

'use strict';
// ECMAScript 6 symbols shim
var global = require('./_global');
var has = require('./_has');
var DESCRIPTORS = require('./_descriptors');
var $export = require('./_export');
var redefine = require('./_redefine');
var META = require('./_meta').KEY;
var $fails = require('./_fails');
var shared = require('./_shared');
var setToStringTag = require('./_set-to-string-tag');
var uid = require('./_uid');
var wks = require('./_wks');
var wksExt = require('./_wks-ext');
var wksDefine = require('./_wks-define');
var enumKeys = require('./_enum-keys');
var isArray = require('./_is-array');
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var toObject = require('./_to-object');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var createDesc = require('./_property-desc');
var _create = require('./_object-create');
var gOPNExt = require('./_object-gopn-ext');
var $GOPD = require('./_object-gopd');
var $GOPS = require('./_object-gops');
var $DP = require('./_object-dp');
var $keys = require('./_object-keys');
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !require('./_library')) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

},{"./_global":"../node_modules/core-js/library/modules/_global.js","./_has":"../node_modules/core-js/library/modules/_has.js","./_descriptors":"../node_modules/core-js/library/modules/_descriptors.js","./_export":"../node_modules/core-js/library/modules/_export.js","./_redefine":"../node_modules/core-js/library/modules/_redefine.js","./_meta":"../node_modules/core-js/library/modules/_meta.js","./_fails":"../node_modules/core-js/library/modules/_fails.js","./_shared":"../node_modules/core-js/library/modules/_shared.js","./_set-to-string-tag":"../node_modules/core-js/library/modules/_set-to-string-tag.js","./_uid":"../node_modules/core-js/library/modules/_uid.js","./_wks":"../node_modules/core-js/library/modules/_wks.js","./_wks-ext":"../node_modules/core-js/library/modules/_wks-ext.js","./_wks-define":"../node_modules/core-js/library/modules/_wks-define.js","./_enum-keys":"../node_modules/core-js/library/modules/_enum-keys.js","./_is-array":"../node_modules/core-js/library/modules/_is-array.js","./_an-object":"../node_modules/core-js/library/modules/_an-object.js","./_is-object":"../node_modules/core-js/library/modules/_is-object.js","./_to-object":"../node_modules/core-js/library/modules/_to-object.js","./_to-iobject":"../node_modules/core-js/library/modules/_to-iobject.js","./_to-primitive":"../node_modules/core-js/library/modules/_to-primitive.js","./_property-desc":"../node_modules/core-js/library/modules/_property-desc.js","./_object-create":"../node_modules/core-js/library/modules/_object-create.js","./_object-gopn-ext":"../node_modules/core-js/library/modules/_object-gopn-ext.js","./_object-gopd":"../node_modules/core-js/library/modules/_object-gopd.js","./_object-gops":"../node_modules/core-js/library/modules/_object-gops.js","./_object-dp":"../node_modules/core-js/library/modules/_object-dp.js","./_object-keys":"../node_modules/core-js/library/modules/_object-keys.js","./_object-gopn":"../node_modules/core-js/library/modules/_object-gopn.js","./_object-pie":"../node_modules/core-js/library/modules/_object-pie.js","./_library":"../node_modules/core-js/library/modules/_library.js","./_hide":"../node_modules/core-js/library/modules/_hide.js"}],"../node_modules/core-js/library/modules/es6.object.to-string.js":[function(require,module,exports) {

},{}],"../node_modules/core-js/library/modules/es7.symbol.async-iterator.js":[function(require,module,exports) {
require('./_wks-define')('asyncIterator');

},{"./_wks-define":"../node_modules/core-js/library/modules/_wks-define.js"}],"../node_modules/core-js/library/modules/es7.symbol.observable.js":[function(require,module,exports) {
require('./_wks-define')('observable');

},{"./_wks-define":"../node_modules/core-js/library/modules/_wks-define.js"}],"../node_modules/core-js/library/fn/symbol/index.js":[function(require,module,exports) {
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
require('../../modules/es7.symbol.async-iterator');
require('../../modules/es7.symbol.observable');
module.exports = require('../../modules/_core').Symbol;

},{"../../modules/es6.symbol":"../node_modules/core-js/library/modules/es6.symbol.js","../../modules/es6.object.to-string":"../node_modules/core-js/library/modules/es6.object.to-string.js","../../modules/es7.symbol.async-iterator":"../node_modules/core-js/library/modules/es7.symbol.async-iterator.js","../../modules/es7.symbol.observable":"../node_modules/core-js/library/modules/es7.symbol.observable.js","../../modules/_core":"../node_modules/core-js/library/modules/_core.js"}],"../node_modules/core-js/library/modules/_string-at.js":[function(require,module,exports) {
var toInteger = require('./_to-integer');
var defined = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

},{"./_to-integer":"../node_modules/core-js/library/modules/_to-integer.js","./_defined":"../node_modules/core-js/library/modules/_defined.js"}],"../node_modules/core-js/library/modules/_iterators.js":[function(require,module,exports) {
module.exports = {};

},{}],"../node_modules/core-js/library/modules/_iter-create.js":[function(require,module,exports) {
'use strict';
var create = require('./_object-create');
var descriptor = require('./_property-desc');
var setToStringTag = require('./_set-to-string-tag');
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

},{"./_object-create":"../node_modules/core-js/library/modules/_object-create.js","./_property-desc":"../node_modules/core-js/library/modules/_property-desc.js","./_set-to-string-tag":"../node_modules/core-js/library/modules/_set-to-string-tag.js","./_hide":"../node_modules/core-js/library/modules/_hide.js","./_wks":"../node_modules/core-js/library/modules/_wks.js"}],"../node_modules/core-js/library/modules/_object-gpo.js":[function(require,module,exports) {
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = require('./_has');
var toObject = require('./_to-object');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

},{"./_has":"../node_modules/core-js/library/modules/_has.js","./_to-object":"../node_modules/core-js/library/modules/_to-object.js","./_shared-key":"../node_modules/core-js/library/modules/_shared-key.js"}],"../node_modules/core-js/library/modules/_iter-define.js":[function(require,module,exports) {
'use strict';
var LIBRARY = require('./_library');
var $export = require('./_export');
var redefine = require('./_redefine');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var $iterCreate = require('./_iter-create');
var setToStringTag = require('./_set-to-string-tag');
var getPrototypeOf = require('./_object-gpo');
var ITERATOR = require('./_wks')('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

},{"./_library":"../node_modules/core-js/library/modules/_library.js","./_export":"../node_modules/core-js/library/modules/_export.js","./_redefine":"../node_modules/core-js/library/modules/_redefine.js","./_hide":"../node_modules/core-js/library/modules/_hide.js","./_iterators":"../node_modules/core-js/library/modules/_iterators.js","./_iter-create":"../node_modules/core-js/library/modules/_iter-create.js","./_set-to-string-tag":"../node_modules/core-js/library/modules/_set-to-string-tag.js","./_object-gpo":"../node_modules/core-js/library/modules/_object-gpo.js","./_wks":"../node_modules/core-js/library/modules/_wks.js"}],"../node_modules/core-js/library/modules/es6.string.iterator.js":[function(require,module,exports) {
'use strict';
var $at = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

},{"./_string-at":"../node_modules/core-js/library/modules/_string-at.js","./_iter-define":"../node_modules/core-js/library/modules/_iter-define.js"}],"../node_modules/core-js/library/modules/_add-to-unscopables.js":[function(require,module,exports) {
module.exports = function () { /* empty */ };

},{}],"../node_modules/core-js/library/modules/_iter-step.js":[function(require,module,exports) {
module.exports = function (done, value) {
  return { value: value, done: !!done };
};

},{}],"../node_modules/core-js/library/modules/es6.array.iterator.js":[function(require,module,exports) {
'use strict';
var addToUnscopables = require('./_add-to-unscopables');
var step = require('./_iter-step');
var Iterators = require('./_iterators');
var toIObject = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

},{"./_add-to-unscopables":"../node_modules/core-js/library/modules/_add-to-unscopables.js","./_iter-step":"../node_modules/core-js/library/modules/_iter-step.js","./_iterators":"../node_modules/core-js/library/modules/_iterators.js","./_to-iobject":"../node_modules/core-js/library/modules/_to-iobject.js","./_iter-define":"../node_modules/core-js/library/modules/_iter-define.js"}],"../node_modules/core-js/library/modules/web.dom.iterable.js":[function(require,module,exports) {

require('./es6.array.iterator');
var global = require('./_global');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var TO_STRING_TAG = require('./_wks')('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

},{"./es6.array.iterator":"../node_modules/core-js/library/modules/es6.array.iterator.js","./_global":"../node_modules/core-js/library/modules/_global.js","./_hide":"../node_modules/core-js/library/modules/_hide.js","./_iterators":"../node_modules/core-js/library/modules/_iterators.js","./_wks":"../node_modules/core-js/library/modules/_wks.js"}],"../node_modules/core-js/library/fn/symbol/iterator.js":[function(require,module,exports) {
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks-ext').f('iterator');

},{"../../modules/es6.string.iterator":"../node_modules/core-js/library/modules/es6.string.iterator.js","../../modules/web.dom.iterable":"../node_modules/core-js/library/modules/web.dom.iterable.js","../../modules/_wks-ext":"../node_modules/core-js/library/modules/_wks-ext.js"}],"../node_modules/@babel/runtime-corejs2/helpers/typeof.js":[function(require,module,exports) {
var _Symbol = require("core-js/library/fn/symbol/index.js");
var _Symbol$iterator = require("core-js/library/fn/symbol/iterator.js");
function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof _Symbol && "symbol" == typeof _Symbol$iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof _Symbol && o.constructor === _Symbol && o !== _Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"core-js/library/fn/symbol/index.js":"../node_modules/core-js/library/fn/symbol/index.js","core-js/library/fn/symbol/iterator.js":"../node_modules/core-js/library/fn/symbol/iterator.js"}],"../node_modules/core-js/library/fn/symbol/to-primitive.js":[function(require,module,exports) {
module.exports = require('../../modules/_wks-ext').f('toPrimitive');

},{"../../modules/_wks-ext":"../node_modules/core-js/library/modules/_wks-ext.js"}],"../node_modules/@babel/runtime-corejs2/helpers/toPrimitive.js":[function(require,module,exports) {
var _Symbol$toPrimitive = require("core-js/library/fn/symbol/to-primitive.js");
var _typeof = require("./typeof.js")["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[_Symbol$toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"core-js/library/fn/symbol/to-primitive.js":"../node_modules/core-js/library/fn/symbol/to-primitive.js","./typeof.js":"../node_modules/@babel/runtime-corejs2/helpers/typeof.js"}],"../node_modules/@babel/runtime-corejs2/helpers/toPropertyKey.js":[function(require,module,exports) {
var _typeof = require("./typeof.js")["default"];
var toPrimitive = require("./toPrimitive.js");
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./typeof.js":"../node_modules/@babel/runtime-corejs2/helpers/typeof.js","./toPrimitive.js":"../node_modules/@babel/runtime-corejs2/helpers/toPrimitive.js"}],"../node_modules/@babel/runtime-corejs2/helpers/createClass.js":[function(require,module,exports) {
var _Object$defineProperty = require("core-js/library/fn/object/define-property.js");
var toPropertyKey = require("./toPropertyKey.js");
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    _Object$defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  _Object$defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"core-js/library/fn/object/define-property.js":"../node_modules/core-js/library/fn/object/define-property.js","./toPropertyKey.js":"../node_modules/@babel/runtime-corejs2/helpers/toPropertyKey.js"}],"../src/components/404.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var NotFound = /*#__PURE__*/function () {
  function NotFound() {
    (0, _classCallCheck2.default)(this, NotFound);
  }
  (0, _createClass2.default)(NotFound, [{
    key: "render",
    value: function render() {
      return "<h1>Not Found</h1>";
    }
  }]);
  return NotFound;
}();
var _default = exports.default = NotFound;
},{"@babel/runtime-corejs2/helpers/classCallCheck":"../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js","@babel/runtime-corejs2/helpers/createClass":"../node_modules/@babel/runtime-corejs2/helpers/createClass.js"}],"images/profile.jpg":[function(require,module,exports) {
module.exports = "/profile.84faa513.jpg";
},{}],"../src/components/About.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));
var _profile = _interopRequireDefault(require("../../public/images/profile.jpg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var About = /*#__PURE__*/function () {
  function About() {
    (0, _classCallCheck2.default)(this, About);
  }
  (0, _createClass2.default)(About, [{
    key: "render",
    value: function render() {
      return "\n    <div class='check'>\n    <div class=\"heroContainer\">\n      <section class=\"hero\">\n        <figure class=\"figure aboutFigure\">\n          <img src=\"".concat(_profile.default, "\" alt=\"my profile picture\" loading='lazzy'>\n          <figcaption class=\"offscreen\">Gal Parselani</figcaption>\n        </figure>\n      <h2 class='whiteText'>About Me</h2>\n      <p class='whiteText'>Hello! My name is Gal Parselani, a 33-year-old, Jewish, happily married, and a proud resident of Tel Aviv, Israel. Originally from Ra'anana, I cherish the strong bonds with my family, including my wife Hamutal, my brothers, and my adored nephews, who are central to my world.</p>\n      <p class='whiteText'>Passionate about gaming, I've been an avid player of Counter-Strike, GTA V, Destiny 2, and Football Manager for over two decades. Beyond the digital realm, I'm a culinary enthusiast, often crafting \"Mama Meals\" dinners for my wife and me.</p>\n      <p class='whiteText'>Staying active is crucial for me. I engage in football, Muay Thai, and functional training, and I'm an enthusiastic sports fan, enjoying everything from Footbal through UFC to tennis. My social life revolves around my close-knit group of friends from school, with whom I regularly catch up.</p>\n      <p class='whiteText'>Family time is sacred, particularly during Friday evenings and Saturdays. I believe in giving back and find volunteering deeply rewarding, as it resonates with my life's philosophy of helping others.</p>\n      <p class='whiteText'>In every aspect, whether it's through sports, gaming, cooking, or volunteering, I strive to bring joy and positivity to both my life and those around me.</p>\n  </section>\n  </div>\n  </div>\n      ");
    }
  }]);
  return About;
}();
var _default = exports.default = About;
},{"@babel/runtime-corejs2/helpers/classCallCheck":"../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js","@babel/runtime-corejs2/helpers/createClass":"../node_modules/@babel/runtime-corejs2/helpers/createClass.js","../../public/images/profile.jpg":"images/profile.jpg"}],"images/aqua3.png":[function(require,module,exports) {
module.exports = "/aqua3.f9f20aaf.png";
},{}],"../src/components/Home.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));
var _aqua = _interopRequireDefault(require("../../public/images/aqua3.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Home = /*#__PURE__*/function () {
  function Home() {
    (0, _classCallCheck2.default)(this, Home);
    this.cardsData = [{
      title: "Web Blog",
      description: "In this project, I focused primarily on enhancing my JavaScript skills. While I did work with CSS and HTML, the CSS portion remains incomplete as my main objective was to refine my JavaScript expertise. I utilized Vanilla JavaScript, CSS, HTML, MongoDB (via Mongoose), and the Express framework. This was my initial full-stack project, undertaken after a considerable period of self-study and practice.",
      url: "https://weblogal.com",
      href: "/weblogal"
    }, {
      title: "Courses List",
      description: "In this project, I focused primarily on enchancing my React skills. While i also did work with Bootstrap, again the CSS part wasnt the main part of the project, but the react. I utilized React, css-Bootstrap, Express framework, Sequelize, SQLite3. this was my initial React Full Stack Project, undertaken after a considerable period of self-study practice. ",
      url: "https://react2.online",
      href: "/courses"
    }, {
      title: "Employees API",
      description: "This project is a sophisticated web application meticulously crafted to manage and exhibit a comprehensive list of students. It is a quintessential example of dynamic and responsive design, employing the foundational trio of web development: HTML, CSS, and JavaScript, to create a seamless user experience.",
      url: "https://parselinho.github.io/employees/",
      href: "/employees"
    }, {
      title: "FSConference",
      description: "This project showcases a comprehensive registration form for a Full Stack Conference, where I honed my skills in creating dynamic and interactive web forms. The core of the project lies in JavaScript's interactivity and form validation logic, alongside building a responsive layout using CSS. Key technologies include HTML CSS and JavaScript.",
      url: "https://parselinho.github.io/FSConference/",
      href: "/fsconference"
    }, {
      title: "Phrase",
      description: "In this project, I developed an engaging and interactive web game titled 'Phrase Hunter'. I implemented the game logic using vanilla JavaScript, focusing on object-oriented programming principles.",
      url: "https://parselinho.github.io/Phrase-Hunter/",
      href: "/phrase-hunter"
    }, {
      title: "Circle",
      description: "In this project, titled 'Circles UI Kit', I explored and integrated Sass for the first time in my web development studies.",
      url: "https://parselinho.github.io/circleProject/",
      href: "/circle"
    }, {
      title: "Gallery",
      description: "A visually captivating and interactive photo gallery website. The heart of the gallery is a grid layout showcasing a collection of photographs, each accompanied by a descriptive caption.",
      url: "https://parselinho.github.io/galleryProject/",
      href: "/gallery"
    }, {
      title: "WebApp",
      description: "The dashboard includes interactive data visualizations such as a line graph, bar graph, and doughnut chart, created using Chart.js to display various data metrics. These interactive charts offer insights into traffic patterns, daily activity, and mobile user demographics.",
      url: "https://parselinho.github.io/webApp/",
      href: "/webapp"
    }];
  }
  (0, _createClass2.default)(Home, [{
    key: "createCard",
    value: function createCard(card) {
      return "\n      <li class=\"card\">\n        <img src=\"".concat(_aqua.default, "\" alt='description' width=\"928\" height=\"1312\" loading=\"lazy\"/>\n        <div class='cardContainer'>\n          <h2>").concat(card.title, "</h2>\n          <p>").concat(card.description, "</p>\n          <div class=\"cardLinks\">\n          <a href=\"").concat(card.href, "\" title=\"navigate to the project page\">More Info</a>\n          <a href='").concat(card.url, "' target='_blank' rel=\"noopener\" title=\"navigate to the project website\">Visit Website</a>\n          <div>\n        </div>\n      </li>\n    ");
    }
  }, {
    key: "setCardData",
    value: function setCardData() {
      return this.cardsData.map(this.createCard).join("");
    }
  }, {
    key: "render",
    value: function render() {
      return "\n    <div class=\"homeContainer\">\n    <h2>Home Page</h2>\n    <div class=\"homeDiv\">\n    <p>Hello! I'm an enthusiastic and self-driven junior developer, passionate about creating seamless web experiences. My journey in web development started with a deep curiosity and a do-it-yourself attitude, leading me to teach myself a diverse set of tools and technologies.</p>\n    <p>With a solid foundation in HTML, CSS, and JavaScript, I craft responsive and user-friendly websites. My skill set extends to powerful backend development with Node.js, creating dynamic and interactive web applications. In addition, I have a growing expertise in React.js, which enables me to build efficient and modern front-end interfaces.</p>\n    <p>I also possess a strong understanding of databases, both SQL and MongoDB, ensuring that the data driving my applications is well-structured and efficiently managed.</p>\n    <p>Each project I undertake is an opportunity for growth and learning. I'm constantly expanding my knowledge and skills, driven by a passion for technology and a commitment to delivering high-quality work.</p>\n    <p>Take a look around my portfolio to see a showcase of my development journey and the projects that fuel my growth as a developer.</p>\n    <aside>\n          <p>\n            <b>**</b> I'd like to extend my gratitude to\n            <a\n              href=\"https://www.youtube.com/@DaveGrayTeachesCode\"\n              target=\"_blank\"\n              rel=\"noopener\"\n              title=\"visit dave youtube channel\"\n              >Dave Gray</a\n            >\n            for his youtube video about css, that helped me style this project.\n          </p>\n        </aside>  \n      </div>\n\n    </div>\n\n      <ul class=\"ul\">".concat(this.setCardData(), "  </ul>\n\n      ");
    }
  }]);
  return Home;
}();
var _default = exports.default = Home;
},{"@babel/runtime-corejs2/helpers/classCallCheck":"../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js","@babel/runtime-corejs2/helpers/createClass":"../node_modules/@babel/runtime-corejs2/helpers/createClass.js","../../public/images/aqua3.png":"images/aqua3.png"}],"images/aqua2.png":[function(require,module,exports) {
module.exports = "/aqua2.6f530935.png";
},{}],"svg/treehouse.svg":[function(require,module,exports) {
module.exports = "/treehouse.e96d41d9.svg";
},{}],"../src/components/Resume.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));
var _aqua = _interopRequireDefault(require("../../public/images/aqua2.png"));
var _treehouse = _interopRequireDefault(require("../../public/svg/treehouse.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Resume = /*#__PURE__*/function () {
  function Resume() {
    (0, _classCallCheck2.default)(this, Resume);
  }
  (0, _createClass2.default)(Resume, [{
    key: "render",
    value: function render() {
      return "\n        <div class=\"resumeMainContainer\">\n            <div class=\"resumeAndExperience\">\n          <section class=\"resumeHeader\">\n\n          <figure class=\"figureResume\">\n            <img src=\"".concat(_aqua.default, "\" alt=\"Gals Picture\" loading=\"lazy\">\n            <figcaption class=\"offscreen\">Gal Parselani</figcaption>\n          </figure>\n\n            <h2>Gal Parselani Profile Summary</h2>\n            <p>Innovative and solutions-driven Full-Stack Developer with expertise in JavaScript, HTML, CSS, React, Node.js, Express, MongoDB, and SQL. Proven abillity to leverage advanced studies in front-end and full stack development to deliver impactful projects. Knows for exceptional problem-solving skills and a keen eye for technological advancements.</p>\n          </section>\n\n          <section class=\"resumeExperience\">\n            <h3>Professional Experience</h3>\n            <h5>360 Affiliate LTD, Tel-Aviv \u2014 System Manager and Team Leader</h5>\n            <p>November 2022 - Present</p>\n            <ul>\n                <li>    \n                    Orchestrated traffic navigation using statistical analysis, enhancing conversion rates.\n                </li>\n                <li>    \n                    Led a high-performance team to achieve ambitious goals based on data-driven insights.\n                </li>\n                <li>    \n                    Implemented efficient systems and workflows, resulting in a significant increase in leads.\n                </li>\n                <li>    \n                    Fostered an innovative technological culture, keeping the team abreast of industry advancements.\n                </li>\n            </ul>\n                <div class=\"border\"></div>\n            <h5>Tomer & Alon Marketing and Publicity, Ramat Gan - Data Analyst</h5>\n            <p>March 2019 - November 2022</p>\n            <ul>\n                <li>\n                    Conducted in-depth data analysis to guide strategic decisions.\n                </li>\n                <li>\n                    Developed executive dashboards and reports, improving visibility into performance metrics.\n                </li>\n                <li>\n                    Collaborated with teams to refine data collection and reporting practices.\n                </li>\n                <li>\n                    Ensured data quality and accuracy in decision-making processes.\n                </li>\n            </ul>\n          </section>\n          </div>\n          <div class=\"bordersolid\"></div>\n\n          <section class=\"resumeSide\">\n            <h3>Education</h3>\n  \n            <h4><a href=\"https://www.ariel.ac.il/university/minisite/\" target='_blank' rel=\"noopener\" title=\"visit ariel website\">Ariel University</a></h4>\n            <p>Bachelor's Degree in Criminology and Middle Eastern Studies (Specialization in Terrorism)\n            2016-2019</p>\n\n            <div class=\"nopadding\">\n            <div class='logoAndHeading'>\n            <img src=\"").concat(_treehouse.default, "\" alt=\"treehouse logo\" loading=\"lazy\">\n            <h4><a href=\"https://teamtreehouse.com\" target='_blank' rel=\"noopener\" title=\"visit treehouse website\">teamTreeHouse</a></h4>\n            </div>\n            <p>TechDegree in Full Stack JavaScript, and Front End Web Development. 2022-2023</p>\n            <div class=\"certDiv\">\n                <a href='https://www.credential.net/7a967360-dd18-4c50-ba1b-0bb865c6b2cc#gs.0q0eho' target='_blank' rel=\"noopener\" title=\"navigate to the full stack certification\">certification for FSJS</a>\n                <a href='https://www.credential.net/1c3e2d8f-a879-46c6-a466-4b1eb0c9fc72#gs.0q0i5i' target='_blank' rel=\"noopener\" title=\"navigate to the front end certification\">certification for FEWD</a>\n            </div>\n            </div>\n\n            <div class=\"border\"></div>\n\n            <div class='logoAndHeading'>\n            <h3>Skills</h3>\n            </div>\n            <ul>\n                <li>Proficient in Full-Stack Development, with a focus on JavaScript technologies.</li>\n                <li>Strong analytical and problem-solving capabilities.</li>\n                <li>Effective under pressure with a knack for efficient task execution.</li>\n                <li>Excellent team leadership and project management skills.</li>\n            </ul>\n            <div class=\"border\"></div>\n\n            <h3>Languages:</h3>\n            <ul>\n                <li>Hebrew (Native)</li>\n                <li>English (Highly Proficient)</li>\n            </ul>\n            <div class=\"border\"></div>\n\n\n            <h3>Millitary Service</h3>\n            <p>Combat Intelligence Support, IDF (2009-2012)</p>\n            <div class=\"border\"></div>\n\n            \n            <h3>Volunteering</h3>\n            <p>Active volunteer at Chabad House, Hatikva Neighborhood. Engaged in community services initiatives including meal preparation and distribution in Herzliya. also helped distribution in Rishon Leziyon at \"Lichiot Bekavod\"</p>\n            <div class=\"border\"></div>\n\n        </section>\n\n          <section class=\"resumeFinal\">\n            <h3>Seek Opportunities</h3>\n            <p>Eager to bring my technical expertise, innovative mindset, and leadership qualities to a challenging programming role. Open to exploring to collaborative and dynamic work environments, where I can contribute to and drive forward-thinking projects.</p>\n          <section>\n\n          </div>\n        ");
    }
  }]);
  return Resume;
}();
var _default = exports.default = Resume;
},{"@babel/runtime-corejs2/helpers/classCallCheck":"../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js","@babel/runtime-corejs2/helpers/createClass":"../node_modules/@babel/runtime-corejs2/helpers/createClass.js","../../public/images/aqua2.png":"images/aqua2.png","../../public/svg/treehouse.svg":"svg/treehouse.svg"}],"images/weblogal.png":[function(require,module,exports) {
module.exports = "/weblogal.59fd807e.png";
},{}],"images/courses.png":[function(require,module,exports) {
module.exports = "/courses.7c281497.png";
},{}],"images/2311.png":[function(require,module,exports) {
module.exports = "/2311.cb954c95.png";
},{}],"images/fsconf.png":[function(require,module,exports) {
module.exports = "/fsconf.3898d7c2.png";
},{}],"images/phrase.png":[function(require,module,exports) {
module.exports = "/phrase.ef6c4c51.png";
},{}],"images/circle.png":[function(require,module,exports) {
module.exports = "/circle.033f46e6.png";
},{}],"images/gallery.png":[function(require,module,exports) {
module.exports = "/gallery.d2c5b01d.png";
},{}],"images/webapp.png":[function(require,module,exports) {
module.exports = "/webapp.e2875f4e.png";
},{}],"../src/data/projects.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _weblogal = _interopRequireDefault(require("../../public/images/weblogal.png"));
var _courses = _interopRequireDefault(require("../../public/images/courses.png"));
var _ = _interopRequireDefault(require("../../public/images/2311.png"));
var _fsconf = _interopRequireDefault(require("../../public/images/fsconf.png"));
var _phrase = _interopRequireDefault(require("../../public/images/phrase.png"));
var _circle = _interopRequireDefault(require("../../public/images/circle.png"));
var _gallery = _interopRequireDefault(require("../../public/images/gallery.png"));
var _webapp = _interopRequireDefault(require("../../public/images/webapp.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var projects = [{
  title: "Web Blog",
  description: "my primary focus was to enhance and showcase my JavaScript development skills. This project represents a significant milestone in my journey as a developer, marking my first foray into full-stack development. It was a self-driven initiative, undertaken after an extensive period of self-study and practical experimentation.",
  url: "https://weblogal.com",
  github: "https://github.com/Parselinho/BlogWebsite",
  image: "".concat(_weblogal.default),
  backendList: [{
    listTitle: "Node.js and Express",
    listDescription: "At the core of the backend is Express, a minimalist web framework for Node.js, enabling me to create a robust server-side application with ease. Express's simplicity and flexibility were instrumental in implementing RESTful APIs and server logic."
  }, {
    listTitle: "mongoose with MongoDB",
    listDescription: "For data persistence, I used Mongoose, an elegant MongoDB object modeling tool. It provided a schema-based solution to model my application data, making data handling more structured and intuitive."
  }],
  frontendList: [{
    listTitle: "Webpack",
    listDescription: "Leveraged as the module bundler and task runner, it efficiently compiled and bundled JavaScript modules. Its configurations were enhanced with webpack-dev-server for a smoother development experience, enabling features like hot module replacement."
  }, {
    listTitle: "babel",
    listDescription: "Integrated with Webpack via babel-loader, Babel transpiled modern JavaScript code into a backward-compatible version for broader browser compatibility."
  }, {
    listTitle: "axios",
    listDescription: "Chosen for HTTP requests, Axios provided a simple yet powerful way to interact with the backend API, handling data fetching and submission seamlessly."
  }]
}, {
  title: "Course List",
  description: "In this comprehensive web project, my primary focus was on enhancing my React skills, leveraging a robust frontend and backend technology stack to create a dynamic and interactive web application.",
  url: "https://react2.online",
  github: "https://github.com/Parselinho/project-10",
  image: "".concat(_courses.default),
  backendList: [{
    listTitle: "Express",
    listDescription: "A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications."
  }, {
    listTitle: "Sequelize",
    listDescription: "A promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite, and Microsoft SQL Server, enabling a solid database integration."
  }, {
    listTitle: "SQLite3",
    listDescription: "A C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine."
  }, {
    listTitle: "Bootstrap",
    listDescription: "employed for styling, but the main emphasis was on React development rather than CSS."
  }],
  frontendList: [{
    listTitle: "React",
    listDescription: "A JavaScript library for building user interfaces, enabling the creation of fast, scalable, and simple web applications."
  }, {
    listTitle: "React Router",
    listDescription: "For declarative routing in React applications, enhancing navigation capabilities.\n        Axios: Employed for making HTTP requests to the backend server."
  }, {
    listTitle: "React Markdown",
    listDescription: "To render Markdown content."
  }, {
    listTitle: "React Hook Form",
    listDescription: "For efficient, easy-to-use form handling."
  }, {
    listTitle: "React Helmet",
    listDescription: "For managing the document head, useful for setting meta tags dynamically."
  }]
}, {
  title: "Employees API",
  description: "This project is a sophisticated web application meticulously crafted to manage and exhibit a comprehensive list of students, embodying the epitome of dynamic and responsive design. It masterfully employs the foundational trio of web development: HTML for structuring content, CSS for styling and visual appeal, and JavaScript for interactivity and functionality, thereby creating a seamless and intuitive user experience.",
  url: "https://parselinho.github.io/employees/",
  github: "https://github.com/Parselinho/employees",
  image: "".concat(_.default),
  frontendList: [{
    listTitle: "Dynamic Student Listing:",
    listDescription: "The application populates a grid with student profiles, including photos, names, email addresses, and registration dates. This data is dynamically inserted into the HTML using JavaScript, enhancing the interactivity of the page."
  }, {
    listTitle: "Pagination",
    listDescription: "The student list is paginated to improve usability, with the capability to display a specified number of student profiles per page. This is achieved through JavaScript, which dynamically creates and manages pagination buttons based on the total number of students."
  }, {
    listTitle: "Search Functionality",
    listDescription: "A search bar allows users to filter the student list in real-time. As users type a name, the list updates to display only those entries that match the search query, providing a seamless and efficient user experience."
  }, {
    listTitle: "Responsive Design",
    listDescription: "he CSS styling, aided by media queries, ensures that the application is fully responsive. It adapts to various screen sizes, making it accessible on both desktop and mobile devices."
  }, {
    listTitle: "Stylish Aesthetics",
    listDescription: "The application uses a modern color palette and fonts (imported from Google Fonts), along with CSS transitions for smooth visual effects, contributing to a professional and polished look."
  }]
}, {
  title: "FSConference",
  description: "This project presents a detailed registration form for a Full Stack Conference, a task that allowed me to focus primarily on enhancing my JavaScript skills. While the CSS styling was sourced from Team Treehouse, my contribution centered on the dynamic and interactive aspects of the web form. Using JavaScript, I implemented features such as real-time validation of form fields, conditional display of form elements, and the calculation of total costs for selected activities. This project was an invaluable opportunity for me to delve deeper into JavaScript, particularly in areas of event handling and DOM manipulation. It underscored my capability to create engaging, interactive web experiences, while the CSS provided by Team Treehouse ensured the form was also visually appealing and responsive.",
  url: "https://parselinho.github.io/FSConference/",
  github: "https://github.com/Parselinho/FSConference",
  image: "".concat(_fsconf.default),
  frontendList: [{
    listTitle: "Dynamic Elements",
    listDescription: "The form is designed to be interactive, with elements like job role selections, T-shirt design choices, and activity checkboxes, offering users a customized experience."
  }, {
    listTitle: "Accessibility and Semantics",
    listDescription: "Semantic HTML elements and attributes enhance the form's accessibility, making it usable for a diverse range of users, including those relying on screen readers."
  }, {
    listTitle: "Enhanced Interactivity",
    listDescription: "The JavaScript file adds dynamic behavior to the form. It includes scripts to focus on the first input field on load, dynamically show or hide the 'other job role' input, and manage T-shirt color options based on the selected design."
  }, {
    listTitle: "Real-Time Validation and Cost Calculation",
    listDescription: "JavaScript is used for real-time validation of form fields like name, email, and credit card information, and for calculating the total cost of selected activities."
  }]
}, {
  title: "Phrase Hunter",
  description: "In this project, I developed an engaging and interactive web game titled 'Phrase Hunter'. The game challenges players to guess a hidden phrase, similar to the classic Hangman game. I implemented the game logic using vanilla JavaScript, focusing on object-oriented programming principles.",
  url: "https://parselinho.github.io/Phrase-Hunter/",
  github: "https://github.com/Parselinho/Phrase-Hunter",
  image: "".concat(_phrase.default),
  frontendList: [{
    listTitle: "Dynamic Web Game Mechanics",
    listDescription: "In the 'Phrase Hunter' game, I designed and implemented dynamic game mechanics using JavaScript. This involved crafting a seamless user experience where game states change based on user interaction, managing game logic, and updating the UI in real-time to reflect the progress and outcomes of the game."
  }, {
    listTitle: "Object-Oriented JavaScript",
    listDescription: "I utilized Object-Oriented Programming (OOP) principles in JavaScript to structure the game's functionality. This approach involved creating classes for different game components - 'Phrase' for phrase management and 'Game' for overall game operation, ensuring a modular, maintainable, and scalable codebase."
  }, {
    listTitle: "Interactive UI Elements",
    listDescription: "The project highlights my skills in creating interactive UI elements. I developed an on-screen keyboard that responds to both mouse clicks and physical keyboard inputs, providing an immersive and accessible gaming experience for different user preferences."
  }, {
    listTitle: "Enhanced Accessibility",
    listDescription: "A key focus of the project was enhancing accessibility. I implemented features like focus states and keyboard navigation, making the game inclusive and user-friendly for a broad audience, including those relying on assistive technologies."
  }]
}, {
  title: "Circles",
  description: "In this project, titled 'Circles UI Kit', I explored and integrated Sass for the first time in my web development studies. The project features a comprehensive UI kit, designed to provide a solid foundation for web design projects. Emphasizing a clean and refreshing aesthetic, the UI kit includes a variety of elements such as typography, buttons, form elements, and a responsive grid system. By employing Sass, I was able to streamline the styling process, making the CSS more maintainable and scalable. This was crucial in handling the kit's diverse components, from basic typography to complex grid layouts.",
  url: "https://parselinho.github.io/circleProject/",
  github: "https://github.com/Parselinho/circleProject",
  image: "".concat(_circle.default),
  frontendList: [{
    listTitle: "Sass Integration and Styling",
    listDescription: "This project marked my initial foray into using Sass, a powerful CSS preprocessor. The focus was on leveraging Sass to create an efficient and manageable styling workflow. Through this experience, I enhanced my skills in organizing CSS architectures and utilizing Sass features like variables, mixins, and nested rules. This approach significantly improved the project's maintainability and scalability, especially in styling complex UI components and ensuring a consistent design theme across the 'Circles UI Kit'."
  }]
}, {
  title: "Gallery",
  description: " I created 'Gal Photo Gallery', a visually captivating and interactive photo gallery website. The heart of the gallery is a grid layout showcasing a collection of photographs, each accompanied by a descriptive caption. A key feature of this gallery is the custom search functionality implemented in JavaScript, allowing users to filter photos based on keywords found in their captions. The search enhances the user experience by dynamically displaying only those images that match the user's query. The layout was meticulously styled using CSS, with a focus on creating a responsive grid that adapts to different screen sizes. The integration of the 'baguetteBox' library provided a sleek and intuitive lightbox effect for viewing images, elevating the overall aesthetic and functionality of the gallery. ",
  url: "https://parselinho.github.io/galleryProject/",
  github: "https://github.com/Parselinho/galleryProject",
  image: "".concat(_gallery.default),
  frontendList: [{
    listTitle: "Interactive Photo Gallery Creation",
    listDescription: "In the 'Gal Photo Gallery' project, I focused on developing a user-friendly and visually engaging photo gallery. This involved creating an interactive search functionality using JavaScript, allowing users to filter images based on captions. I employed CSS to design a responsive grid layout, ensuring the gallery's adaptability across different devices. The integration of the 'baguetteBox' library for lightbox effects further enhanced the viewing experience. This project highlights my skills in combining JavaScript and CSS to deliver a seamless and dynamic user interface, showcasing my proficiency in front-end web development and design."
  }]
}, {
  title: "WebApp",
  description: "In this project, I developed an advanced web application dashboard, showcasing my skills in creating a rich user interface with diverse functionalities. Key features include an alert banner with dismissible alerts, implemented in JavaScript, enhancing the user experience through dynamic interaction. The dashboard includes interactive data visualizations such as a line graph, bar graph, and doughnut chart, created using Chart.js to display various data metrics. These interactive charts offer insights into traffic patterns, daily activity, and mobile user demographics. I also implemented an autocomplete search functionality for user messaging, enhancing the usability of the dashboard. The project demonstrates my proficiency in JavaScript for creating interactive elements and my ability to integrate third-party libraries for data visualization. The CSS, structured with grid and flexbox layouts, ensures a responsive and organized presentation of the dashboard components.",
  url: "https://parselinho.github.io/webApp/",
  github: "https://github.com/Parselinho/webApp",
  image: "".concat(_webapp.default),
  frontendList: [{
    listTitle: "Advanced Web Application Dashboard Development",
    listDescription: "This project showcases my ability to create a comprehensive web application dashboard with multiple interactive features. I implemented a JavaScript-based alert system for dynamic notifications and integrated Chart.js for diverse data visualizations, including line, bar, and doughnut charts. These elements provide valuable insights and enhance user interaction. The project also features an autocomplete functionality for efficient user messaging, demonstrating my skill in enhancing user experience through JavaScript. The responsive design was meticulously crafted using CSS grid and flexbox layouts, ensuring seamless adaptability across various devices. This dashboard project exemplifies my expertise in front-end development, emphasizing interactive design and data presentation."
  }]
}];
var _default = exports.default = projects;
},{"../../public/images/weblogal.png":"images/weblogal.png","../../public/images/courses.png":"images/courses.png","../../public/images/2311.png":"images/2311.png","../../public/images/fsconf.png":"images/fsconf.png","../../public/images/phrase.png":"images/phrase.png","../../public/images/circle.png":"images/circle.png","../../public/images/gallery.png":"images/gallery.png","../../public/images/webapp.png":"images/webapp.png"}],"../utils/renderProject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var renderProject = function renderProject(project) {
  // if (!project.backendList) {
  //   return `
  //     <li>
  //       <p>Used only frontend tech</p>
  //     </li>
  //   `;
  // }
  var isBackendList = project.backendList;
  var backendList;
  if (!isBackendList) {
    backendList = "<li>Used only frontEnd tech</li>";
  } else {
    backendList = project.backendList.map(function (item) {
      return "\n      <li>".concat(item.listTitle, "<p>").concat(item.listDescription, "</p></li>");
    }).join("");
  }
  var isfrontList = project.frontendList;
  var frontList;
  if (!isfrontList) {
    frontList = "<li>\n        Used only BackEnd tech<p></p>\n      </li>";
  }
  frontList = project.frontendList.map(function (item) {
    return "\n    <li>".concat(item.listTitle, "<p>").concat(item.listDescription, "</p></li>");
  }).join("");
  return "\n       <div class=\"heroContainer\">\n        <section class=\"hero\">\n            <div class=\"projectFlex\">\n                <figure class=\"figure\">\n                    <img src=\"".concat(project.image, "\" alt=\"").concat(project.title, " image\" loading=\"lazy\">\n                    <figcaption class=\"offscreen\">").concat(project.url, "</figcaption>\n                </figure>\n                <h2 class=\"texth2\">").concat(project.title, "</h2>\n                <nav class=\"projectNav\">\n                    <a href='").concat(project.github, "' target=\"_blank\" rel=\"noopener\" title=\"navigate to my github profile\">GitHub Code</a>\n                    <a href='").concat(project.url, "' target=\"_blank\" rel=\"noopener\" title=\"navigate to the project website\">Project Site</a>\n                </nav>\n            </div>\n            <p class=\"texth2\">").concat(project.description, "</p>\n            <div class=\"textBold\">\n                <h3>Technologies and Packages for the Backend:</h3>\n                    <ul>").concat(backendList, "</ul>\n                <h3>Technologies and Packages for the Frontend:</h3>\n                    <ul>").concat(frontList, "</ul>\n            </div>\n        </section>\n       </div> \n    ");
};
var _default = exports.default = renderProject;
},{}],"../src/components/projects/Weblogal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));
var _projects = _interopRequireDefault(require("../../data/projects.js"));
var _renderProject = _interopRequireDefault(require("../../../utils/renderProject.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Weblogal = /*#__PURE__*/function () {
  function Weblogal() {
    (0, _classCallCheck2.default)(this, Weblogal);
    this.data = _projects.default[0];
  }
  (0, _createClass2.default)(Weblogal, [{
    key: "render",
    value: function render() {
      return (0, _renderProject.default)(this.data);
    }
  }]);
  return Weblogal;
}();
var _default = exports.default = Weblogal;
},{"@babel/runtime-corejs2/helpers/classCallCheck":"../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js","@babel/runtime-corejs2/helpers/createClass":"../node_modules/@babel/runtime-corejs2/helpers/createClass.js","../../data/projects.js":"../src/data/projects.js","../../../utils/renderProject.js":"../utils/renderProject.js"}],"../src/components/projects/Courses.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));
var _projects = _interopRequireDefault(require("../../data/projects.js"));
var _renderProject = _interopRequireDefault(require("../../../utils/renderProject.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Courses = /*#__PURE__*/function () {
  function Courses() {
    (0, _classCallCheck2.default)(this, Courses);
    this.data = _projects.default[1];
  }
  (0, _createClass2.default)(Courses, [{
    key: "render",
    value: function render() {
      return (0, _renderProject.default)(this.data);
    }
  }]);
  return Courses;
}();
var _default = exports.default = Courses;
},{"@babel/runtime-corejs2/helpers/classCallCheck":"../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js","@babel/runtime-corejs2/helpers/createClass":"../node_modules/@babel/runtime-corejs2/helpers/createClass.js","../../data/projects.js":"../src/data/projects.js","../../../utils/renderProject.js":"../utils/renderProject.js"}],"../src/components/projects/Employees.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));
var _projects = _interopRequireDefault(require("../../data/projects.js"));
var _renderProject = _interopRequireDefault(require("../../../utils/renderProject.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Employees = /*#__PURE__*/function () {
  function Employees() {
    (0, _classCallCheck2.default)(this, Employees);
    this.data = _projects.default[2];
  }
  (0, _createClass2.default)(Employees, [{
    key: "render",
    value: function render() {
      return (0, _renderProject.default)(this.data);
    }
  }]);
  return Employees;
}();
var _default = exports.default = Employees;
},{"@babel/runtime-corejs2/helpers/classCallCheck":"../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js","@babel/runtime-corejs2/helpers/createClass":"../node_modules/@babel/runtime-corejs2/helpers/createClass.js","../../data/projects.js":"../src/data/projects.js","../../../utils/renderProject.js":"../utils/renderProject.js"}],"../src/components/projects/Fsconference.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));
var _projects = _interopRequireDefault(require("../../data/projects.js"));
var _renderProject = _interopRequireDefault(require("../../../utils/renderProject.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Fsconference = /*#__PURE__*/function () {
  function Fsconference() {
    (0, _classCallCheck2.default)(this, Fsconference);
    this.data = _projects.default[3];
  }
  (0, _createClass2.default)(Fsconference, [{
    key: "render",
    value: function render() {
      return (0, _renderProject.default)(this.data);
    }
  }]);
  return Fsconference;
}();
var _default = exports.default = Fsconference;
},{"@babel/runtime-corejs2/helpers/classCallCheck":"../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js","@babel/runtime-corejs2/helpers/createClass":"../node_modules/@babel/runtime-corejs2/helpers/createClass.js","../../data/projects.js":"../src/data/projects.js","../../../utils/renderProject.js":"../utils/renderProject.js"}],"../src/components/projects/Phrase.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));
var _projects = _interopRequireDefault(require("../../data/projects.js"));
var _renderProject = _interopRequireDefault(require("../../../utils/renderProject.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var PhraseHunter = /*#__PURE__*/function () {
  function PhraseHunter() {
    (0, _classCallCheck2.default)(this, PhraseHunter);
    this.data = _projects.default[4];
  }
  (0, _createClass2.default)(PhraseHunter, [{
    key: "render",
    value: function render() {
      return (0, _renderProject.default)(this.data);
    }
  }]);
  return PhraseHunter;
}();
var _default = exports.default = PhraseHunter;
},{"@babel/runtime-corejs2/helpers/classCallCheck":"../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js","@babel/runtime-corejs2/helpers/createClass":"../node_modules/@babel/runtime-corejs2/helpers/createClass.js","../../data/projects.js":"../src/data/projects.js","../../../utils/renderProject.js":"../utils/renderProject.js"}],"../src/components/projects/Circle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));
var _projects = _interopRequireDefault(require("../../data/projects.js"));
var _renderProject = _interopRequireDefault(require("../../../utils/renderProject.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Circle = /*#__PURE__*/function () {
  function Circle() {
    (0, _classCallCheck2.default)(this, Circle);
    this.data = _projects.default[5];
  }
  (0, _createClass2.default)(Circle, [{
    key: "render",
    value: function render() {
      return (0, _renderProject.default)(this.data);
    }
  }]);
  return Circle;
}();
var _default = exports.default = Circle;
},{"@babel/runtime-corejs2/helpers/classCallCheck":"../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js","@babel/runtime-corejs2/helpers/createClass":"../node_modules/@babel/runtime-corejs2/helpers/createClass.js","../../data/projects.js":"../src/data/projects.js","../../../utils/renderProject.js":"../utils/renderProject.js"}],"../src/components/projects/Gallery.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));
var _projects = _interopRequireDefault(require("../../data/projects.js"));
var _renderProject = _interopRequireDefault(require("../../../utils/renderProject.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Gallery = /*#__PURE__*/function () {
  function Gallery() {
    (0, _classCallCheck2.default)(this, Gallery);
    this.data = _projects.default[6];
  }
  (0, _createClass2.default)(Gallery, [{
    key: "render",
    value: function render() {
      return (0, _renderProject.default)(this.data);
    }
  }]);
  return Gallery;
}();
var _default = exports.default = Gallery;
},{"@babel/runtime-corejs2/helpers/classCallCheck":"../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js","@babel/runtime-corejs2/helpers/createClass":"../node_modules/@babel/runtime-corejs2/helpers/createClass.js","../../data/projects.js":"../src/data/projects.js","../../../utils/renderProject.js":"../utils/renderProject.js"}],"../src/components/projects/Webapp.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));
var _projects = _interopRequireDefault(require("../../data/projects.js"));
var _renderProject = _interopRequireDefault(require("../../../utils/renderProject.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var WebApp = /*#__PURE__*/function () {
  function WebApp() {
    (0, _classCallCheck2.default)(this, WebApp);
    this.data = _projects.default[7];
  }
  (0, _createClass2.default)(WebApp, [{
    key: "render",
    value: function render() {
      return (0, _renderProject.default)(this.data);
    }
  }]);
  return WebApp;
}();
var _default = exports.default = WebApp;
},{"@babel/runtime-corejs2/helpers/classCallCheck":"../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js","@babel/runtime-corejs2/helpers/createClass":"../node_modules/@babel/runtime-corejs2/helpers/createClass.js","../../data/projects.js":"../src/data/projects.js","../../../utils/renderProject.js":"../utils/renderProject.js"}],"../utils/urlRouter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ = _interopRequireDefault(require("../src/components/404.js"));
var _About = _interopRequireDefault(require("../src/components/About.js"));
var _Home = _interopRequireDefault(require("../src/components/Home.js"));
var _Resume = _interopRequireDefault(require("../src/components/Resume.js"));
var _Weblogal = _interopRequireDefault(require("../src/components/projects/Weblogal.js"));
var _Courses = _interopRequireDefault(require("../src/components/projects/Courses.js"));
var _Employees = _interopRequireDefault(require("../src/components/projects/Employees.js"));
var _Fsconference = _interopRequireDefault(require("../src/components/projects/Fsconference.js"));
var _Phrase = _interopRequireDefault(require("../src/components/projects/Phrase.js"));
var _Circle = _interopRequireDefault(require("../src/components/projects/Circle.js"));
var _Gallery = _interopRequireDefault(require("../src/components/projects/Gallery.js"));
var _Webapp = _interopRequireDefault(require("../src/components/projects/Webapp.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
document.addEventListener("DOMContentLoaded", initApp);
function initApp() {
  document.addEventListener("click", handleNavClick);
  window.onpopstate = handlePopState;
  routeLocation();
}
function handleNavClick(e) {
  var target = e.target;
  if (target.matches("nav a") && target.href.startsWith(window.location.origin)) {
    e.preventDefault();
    route(e);
  }
}
var pages = {
  404: _.default,
  "/": _Home.default,
  "/about": _About.default,
  "/resume": _Resume.default,
  "/weblogal": _Weblogal.default,
  "/courses": _Courses.default,
  "/employees": _Employees.default,
  "/fsconference": _Fsconference.default,
  "/phrase-hunter": _Phrase.default,
  "/circle": _Circle.default,
  "/gallery": _Gallery.default,
  "/webapp": _Webapp.default
};
function route(e) {
  e = e || window.event;
  e.preventDefault;
  window.history.pushState({}, "", e.target.href);
  routeLocation();
}
function routeLocation() {
  var location = window.location.pathname;
  if (location.length === 0) {
    location = "/";
  }
  var PageClass = pages[location] || pages[404];
  var pageInstance = new PageClass();
  document.getElementById("content").innerHTML = pageInstance.render();
}
function handlePopState() {
  routeLocation();
}
var _default = exports.default = {
  initApp: initApp,
  routeLocation: routeLocation,
  handleNavClick: handleNavClick,
  handlePopState: handlePopState
};
},{"../src/components/404.js":"../src/components/404.js","../src/components/About.js":"../src/components/About.js","../src/components/Home.js":"../src/components/Home.js","../src/components/Resume.js":"../src/components/Resume.js","../src/components/projects/Weblogal.js":"../src/components/projects/Weblogal.js","../src/components/projects/Courses.js":"../src/components/projects/Courses.js","../src/components/projects/Employees.js":"../src/components/projects/Employees.js","../src/components/projects/Fsconference.js":"../src/components/projects/Fsconference.js","../src/components/projects/Phrase.js":"../src/components/projects/Phrase.js","../src/components/projects/Circle.js":"../src/components/projects/Circle.js","../src/components/projects/Gallery.js":"../src/components/projects/Gallery.js","../src/components/projects/Webapp.js":"../src/components/projects/Webapp.js"}],"../src/components/dropdown.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
document.addEventListener("DOMContentLoaded", dropDown);
var dropdownDiv = document.querySelector(".dropdownContent");
function dropDown() {
  var dropdown = document.querySelector(".dropdown");
  var button = document.querySelector(".dropBtn");

  // Toggle dropdown on click
  button.addEventListener("click", function (event) {
    dropdownDiv.style.display = dropdownDiv.style.display === "block" ? "none" : "block";
    event.stopPropagation();
  });

  // Show dropdown on mouseover
  button.addEventListener("mouseover", function () {
    return showOrHide("block");
  });

  // Show dropdown on focus
  button.addEventListener("focus", function (event) {
    return showOrHide("block");
  });

  // Hide dropdown when leaving the dropdown area
  dropdown.addEventListener("mouseleave", function () {
    return showOrHide("none");
  });

  // Hide dropdown on focusout
  dropdown.addEventListener("focusout", function () {
    setTimeout(function () {
      if (!dropdown.contains(document.activeElement)) {
        showOrHide("none");
      }
    });
  });
}
function showOrHide(val) {
  dropdownDiv.style.display = val;
}
var _default = exports.default = dropDown;
},{}],"../src/app.js":[function(require,module,exports) {
"use strict";

require("./scss/app.scss");
require("../utils/urlRouter.js");
require("./components/dropdown.js");
},{"./scss/app.scss":"../src/scss/app.scss","../utils/urlRouter.js":"../utils/urlRouter.js","./components/dropdown.js":"../src/components/dropdown.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54394" + '/');
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
      });

      // Enable HMR for CSS by default.
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
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../src/app.js"], null)
//# sourceMappingURL=/app.581aa3f0.js.map