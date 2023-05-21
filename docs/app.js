var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/querystring/decode.js
var require_decode = __commonJS({
  "node_modules/querystring/decode.js"(exports, module) {
    "use strict";
    function hasOwnProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }
    module.exports = function(qs, sep, eq, options) {
      sep = sep || "&";
      eq = eq || "=";
      var obj = {};
      if (typeof qs !== "string" || qs.length === 0) {
        return obj;
      }
      var regexp = /\+/g;
      qs = qs.split(sep);
      var maxKeys = 1e3;
      if (options && typeof options.maxKeys === "number") {
        maxKeys = options.maxKeys;
      }
      var len = qs.length;
      if (maxKeys > 0 && len > maxKeys) {
        len = maxKeys;
      }
      for (var i = 0; i < len; ++i) {
        var x = qs[i].replace(regexp, "%20"), idx = x.indexOf(eq), kstr, vstr, k, v;
        if (idx >= 0) {
          kstr = x.substr(0, idx);
          vstr = x.substr(idx + 1);
        } else {
          kstr = x;
          vstr = "";
        }
        k = decodeURIComponent(kstr);
        v = decodeURIComponent(vstr);
        if (!hasOwnProperty(obj, k)) {
          obj[k] = v;
        } else if (Array.isArray(obj[k])) {
          obj[k].push(v);
        } else {
          obj[k] = [obj[k], v];
        }
      }
      return obj;
    };
  }
});

// node_modules/querystring/encode.js
var require_encode = __commonJS({
  "node_modules/querystring/encode.js"(exports, module) {
    "use strict";
    var stringifyPrimitive = function(v) {
      switch (typeof v) {
        case "string":
          return v;
        case "boolean":
          return v ? "true" : "false";
        case "number":
          return isFinite(v) ? v : "";
        default:
          return "";
      }
    };
    module.exports = function(obj, sep, eq, name) {
      sep = sep || "&";
      eq = eq || "=";
      if (obj === null) {
        obj = void 0;
      }
      if (typeof obj === "object") {
        return Object.keys(obj).map(function(k) {
          var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
          if (Array.isArray(obj[k])) {
            return obj[k].map(function(v) {
              return ks + encodeURIComponent(stringifyPrimitive(v));
            }).join(sep);
          } else {
            return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
          }
        }).filter(Boolean).join(sep);
      }
      if (!name)
        return "";
      return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
    };
  }
});

// node_modules/querystring/index.js
var require_querystring = __commonJS({
  "node_modules/querystring/index.js"(exports) {
    "use strict";
    exports.decode = exports.parse = require_decode();
    exports.encode = exports.stringify = require_encode();
  }
});

// node_modules/lodash/lodash.js
var require_lodash = __commonJS({
  "node_modules/lodash/lodash.js"(exports, module) {
    (function() {
      var undefined2;
      var VERSION = "4.17.21";
      var LARGE_ARRAY_SIZE = 200;
      var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var MAX_MEMOIZE_SIZE = 500;
      var PLACEHOLDER = "__lodash_placeholder__";
      var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
      var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
      var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
      var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
      var HOT_COUNT = 800, HOT_SPAN = 16;
      var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
      var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
      var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
      var wrapFlags = [
        ["ary", WRAP_ARY_FLAG],
        ["bind", WRAP_BIND_FLAG],
        ["bindKey", WRAP_BIND_KEY_FLAG],
        ["curry", WRAP_CURRY_FLAG],
        ["curryRight", WRAP_CURRY_RIGHT_FLAG],
        ["flip", WRAP_FLIP_FLAG],
        ["partial", WRAP_PARTIAL_FLAG],
        ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
        ["rearg", WRAP_REARG_FLAG]
      ];
      var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
      var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
      var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
      var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
      var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
      var reTrimStart = /^\s+/;
      var reWhitespace = /\s/;
      var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
      var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
      var reEscapeChar = /\\(\\)?/g;
      var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
      var reFlags = /\w*$/;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var reIsOctal = /^0o[0-7]+$/i;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
      var reNoMatch = /($^)/;
      var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
      var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
      var rsApos = "['\u2019]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
      var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
      var reApos = RegExp(rsApos, "g");
      var reComboMark = RegExp(rsCombo, "g");
      var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
      var reUnicodeWord = RegExp([
        rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
        rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
        rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
        rsUpper + "+" + rsOptContrUpper,
        rsOrdUpper,
        rsOrdLower,
        rsDigits,
        rsEmoji
      ].join("|"), "g");
      var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
      var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      var contextProps = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ];
      var templateCounter = -1;
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      var cloneableTags = {};
      cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
      cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
      var deburredLetters = {
        // Latin-1 Supplement block.
        "\xC0": "A",
        "\xC1": "A",
        "\xC2": "A",
        "\xC3": "A",
        "\xC4": "A",
        "\xC5": "A",
        "\xE0": "a",
        "\xE1": "a",
        "\xE2": "a",
        "\xE3": "a",
        "\xE4": "a",
        "\xE5": "a",
        "\xC7": "C",
        "\xE7": "c",
        "\xD0": "D",
        "\xF0": "d",
        "\xC8": "E",
        "\xC9": "E",
        "\xCA": "E",
        "\xCB": "E",
        "\xE8": "e",
        "\xE9": "e",
        "\xEA": "e",
        "\xEB": "e",
        "\xCC": "I",
        "\xCD": "I",
        "\xCE": "I",
        "\xCF": "I",
        "\xEC": "i",
        "\xED": "i",
        "\xEE": "i",
        "\xEF": "i",
        "\xD1": "N",
        "\xF1": "n",
        "\xD2": "O",
        "\xD3": "O",
        "\xD4": "O",
        "\xD5": "O",
        "\xD6": "O",
        "\xD8": "O",
        "\xF2": "o",
        "\xF3": "o",
        "\xF4": "o",
        "\xF5": "o",
        "\xF6": "o",
        "\xF8": "o",
        "\xD9": "U",
        "\xDA": "U",
        "\xDB": "U",
        "\xDC": "U",
        "\xF9": "u",
        "\xFA": "u",
        "\xFB": "u",
        "\xFC": "u",
        "\xDD": "Y",
        "\xFD": "y",
        "\xFF": "y",
        "\xC6": "Ae",
        "\xE6": "ae",
        "\xDE": "Th",
        "\xFE": "th",
        "\xDF": "ss",
        // Latin Extended-A block.
        "\u0100": "A",
        "\u0102": "A",
        "\u0104": "A",
        "\u0101": "a",
        "\u0103": "a",
        "\u0105": "a",
        "\u0106": "C",
        "\u0108": "C",
        "\u010A": "C",
        "\u010C": "C",
        "\u0107": "c",
        "\u0109": "c",
        "\u010B": "c",
        "\u010D": "c",
        "\u010E": "D",
        "\u0110": "D",
        "\u010F": "d",
        "\u0111": "d",
        "\u0112": "E",
        "\u0114": "E",
        "\u0116": "E",
        "\u0118": "E",
        "\u011A": "E",
        "\u0113": "e",
        "\u0115": "e",
        "\u0117": "e",
        "\u0119": "e",
        "\u011B": "e",
        "\u011C": "G",
        "\u011E": "G",
        "\u0120": "G",
        "\u0122": "G",
        "\u011D": "g",
        "\u011F": "g",
        "\u0121": "g",
        "\u0123": "g",
        "\u0124": "H",
        "\u0126": "H",
        "\u0125": "h",
        "\u0127": "h",
        "\u0128": "I",
        "\u012A": "I",
        "\u012C": "I",
        "\u012E": "I",
        "\u0130": "I",
        "\u0129": "i",
        "\u012B": "i",
        "\u012D": "i",
        "\u012F": "i",
        "\u0131": "i",
        "\u0134": "J",
        "\u0135": "j",
        "\u0136": "K",
        "\u0137": "k",
        "\u0138": "k",
        "\u0139": "L",
        "\u013B": "L",
        "\u013D": "L",
        "\u013F": "L",
        "\u0141": "L",
        "\u013A": "l",
        "\u013C": "l",
        "\u013E": "l",
        "\u0140": "l",
        "\u0142": "l",
        "\u0143": "N",
        "\u0145": "N",
        "\u0147": "N",
        "\u014A": "N",
        "\u0144": "n",
        "\u0146": "n",
        "\u0148": "n",
        "\u014B": "n",
        "\u014C": "O",
        "\u014E": "O",
        "\u0150": "O",
        "\u014D": "o",
        "\u014F": "o",
        "\u0151": "o",
        "\u0154": "R",
        "\u0156": "R",
        "\u0158": "R",
        "\u0155": "r",
        "\u0157": "r",
        "\u0159": "r",
        "\u015A": "S",
        "\u015C": "S",
        "\u015E": "S",
        "\u0160": "S",
        "\u015B": "s",
        "\u015D": "s",
        "\u015F": "s",
        "\u0161": "s",
        "\u0162": "T",
        "\u0164": "T",
        "\u0166": "T",
        "\u0163": "t",
        "\u0165": "t",
        "\u0167": "t",
        "\u0168": "U",
        "\u016A": "U",
        "\u016C": "U",
        "\u016E": "U",
        "\u0170": "U",
        "\u0172": "U",
        "\u0169": "u",
        "\u016B": "u",
        "\u016D": "u",
        "\u016F": "u",
        "\u0171": "u",
        "\u0173": "u",
        "\u0174": "W",
        "\u0175": "w",
        "\u0176": "Y",
        "\u0177": "y",
        "\u0178": "Y",
        "\u0179": "Z",
        "\u017B": "Z",
        "\u017D": "Z",
        "\u017A": "z",
        "\u017C": "z",
        "\u017E": "z",
        "\u0132": "IJ",
        "\u0133": "ij",
        "\u0152": "Oe",
        "\u0153": "oe",
        "\u0149": "'n",
        "\u017F": "s"
      };
      var htmlEscapes = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      };
      var htmlUnescapes = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      };
      var stringEscapes = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      };
      var freeParseFloat = parseFloat, freeParseInt = parseInt;
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = function() {
        try {
          var types2 = freeModule && freeModule.require && freeModule.require("util").types;
          if (types2) {
            return types2;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {
        }
      }();
      var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      function arrayAggregator(array, setter, iteratee, accumulator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          var value = array[index];
          setter(accumulator, value, iteratee(value), array);
        }
        return accumulator;
      }
      function arrayEach(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEachRight(array, iteratee) {
        var length = array == null ? 0 : array.length;
        while (length--) {
          if (iteratee(array[length], length, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEvery(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (!predicate(array[index], index, array)) {
            return false;
          }
        }
        return true;
      }
      function arrayFilter(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      function arrayIncludes(array, value) {
        var length = array == null ? 0 : array.length;
        return !!length && baseIndexOf(array, value, 0) > -1;
      }
      function arrayIncludesWith(array, value, comparator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (comparator(value, array[index])) {
            return true;
          }
        }
        return false;
      }
      function arrayMap(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      function arrayPush(array, values) {
        var index = -1, length = values.length, offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1, length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[++index];
        }
        while (++index < length) {
          accumulator = iteratee(accumulator, array[index], index, array);
        }
        return accumulator;
      }
      function arrayReduceRight(array, iteratee, accumulator, initAccum) {
        var length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[--length];
        }
        while (length--) {
          accumulator = iteratee(accumulator, array[length], length, array);
        }
        return accumulator;
      }
      function arraySome(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      var asciiSize = baseProperty("length");
      function asciiToArray(string) {
        return string.split("");
      }
      function asciiWords(string) {
        return string.match(reAsciiWord) || [];
      }
      function baseFindKey(collection, predicate, eachFunc) {
        var result;
        eachFunc(collection, function(value, key, collection2) {
          if (predicate(value, key, collection2)) {
            result = key;
            return false;
          }
        });
        return result;
      }
      function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index-- : ++index < length) {
          if (predicate(array[index], index, array)) {
            return index;
          }
        }
        return -1;
      }
      function baseIndexOf(array, value, fromIndex) {
        return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
      }
      function baseIndexOfWith(array, value, fromIndex, comparator) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (comparator(array[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function baseIsNaN(value) {
        return value !== value;
      }
      function baseMean(array, iteratee) {
        var length = array == null ? 0 : array.length;
        return length ? baseSum(array, iteratee) / length : NAN;
      }
      function baseProperty(key) {
        return function(object) {
          return object == null ? undefined2 : object[key];
        };
      }
      function basePropertyOf(object) {
        return function(key) {
          return object == null ? undefined2 : object[key];
        };
      }
      function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function(value, index, collection2) {
          accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
        });
        return accumulator;
      }
      function baseSortBy(array, comparer) {
        var length = array.length;
        array.sort(comparer);
        while (length--) {
          array[length] = array[length].value;
        }
        return array;
      }
      function baseSum(array, iteratee) {
        var result, index = -1, length = array.length;
        while (++index < length) {
          var current = iteratee(array[index]);
          if (current !== undefined2) {
            result = result === undefined2 ? current : result + current;
          }
        }
        return result;
      }
      function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      function baseToPairs(object, props) {
        return arrayMap(props, function(key) {
          return [key, object[key]];
        });
      }
      function baseTrim(string) {
        return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
      }
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      function baseValues(object, props) {
        return arrayMap(props, function(key) {
          return object[key];
        });
      }
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      function charsStartIndex(strSymbols, chrSymbols) {
        var index = -1, length = strSymbols.length;
        while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function charsEndIndex(strSymbols, chrSymbols) {
        var index = strSymbols.length;
        while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function countHolders(array, placeholder) {
        var length = array.length, result = 0;
        while (length--) {
          if (array[length] === placeholder) {
            ++result;
          }
        }
        return result;
      }
      var deburrLetter = basePropertyOf(deburredLetters);
      var escapeHtmlChar = basePropertyOf(htmlEscapes);
      function escapeStringChar(chr) {
        return "\\" + stringEscapes[chr];
      }
      function getValue(object, key) {
        return object == null ? undefined2 : object[key];
      }
      function hasUnicode(string) {
        return reHasUnicode.test(string);
      }
      function hasUnicodeWord(string) {
        return reHasUnicodeWord.test(string);
      }
      function iteratorToArray(iterator) {
        var data, result = [];
        while (!(data = iterator.next()).done) {
          result.push(data.value);
        }
        return result;
      }
      function mapToArray(map2) {
        var index = -1, result = Array(map2.size);
        map2.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      function overArg(func, transform3) {
        return function(arg) {
          return func(transform3(arg));
        };
      }
      function replaceHolders(array, placeholder) {
        var index = -1, length = array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (value === placeholder || value === PLACEHOLDER) {
            array[index] = PLACEHOLDER;
            result[resIndex++] = index;
          }
        }
        return result;
      }
      function setToArray(set8) {
        var index = -1, result = Array(set8.size);
        set8.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      function setToPairs(set8) {
        var index = -1, result = Array(set8.size);
        set8.forEach(function(value) {
          result[++index] = [value, value];
        });
        return result;
      }
      function strictIndexOf(array, value, fromIndex) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (array[index] === value) {
            return index;
          }
        }
        return -1;
      }
      function strictLastIndexOf(array, value, fromIndex) {
        var index = fromIndex + 1;
        while (index--) {
          if (array[index] === value) {
            return index;
          }
        }
        return index;
      }
      function stringSize(string) {
        return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
      }
      function stringToArray(string) {
        return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
      }
      function trimmedEndIndex(string) {
        var index = string.length;
        while (index-- && reWhitespace.test(string.charAt(index))) {
        }
        return index;
      }
      var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
      function unicodeSize(string) {
        var result = reUnicode.lastIndex = 0;
        while (reUnicode.test(string)) {
          ++result;
        }
        return result;
      }
      function unicodeToArray(string) {
        return string.match(reUnicode) || [];
      }
      function unicodeWords(string) {
        return string.match(reUnicodeWord) || [];
      }
      var runInContext = function runInContext2(context) {
        context = context == null ? root : _3.defaults(root.Object(), context, _3.pick(root, contextProps));
        var Array2 = context.Array, Date2 = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String2 = context.String, TypeError2 = context.TypeError;
        var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
        var coreJsData = context["__core-js_shared__"];
        var funcToString = funcProto.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var idCounter = 0;
        var maskSrcKey = function() {
          var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
          return uid ? "Symbol(src)_1." + uid : "";
        }();
        var nativeObjectToString = objectProto.toString;
        var objectCtorString = funcToString.call(Object2);
        var oldDash = root._;
        var reIsNative = RegExp2(
          "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        );
        var Buffer2 = moduleExports ? context.Buffer : undefined2, Symbol2 = context.Symbol, Uint8Array2 = context.Uint8Array, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : undefined2, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined2, symIterator = Symbol2 ? Symbol2.iterator : undefined2, symToStringTag = Symbol2 ? Symbol2.toStringTag : undefined2;
        var defineProperty = function() {
          try {
            var func = getNative(Object2, "defineProperty");
            func({}, "", {});
            return func;
          } catch (e) {
          }
        }();
        var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date2 && Date2.now !== root.Date.now && Date2.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
        var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : undefined2, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date2.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
        var DataView2 = getNative(context, "DataView"), Map2 = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set = getNative(context, "Set"), WeakMap = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
        var metaMap = WeakMap && new WeakMap();
        var realNames = {};
        var dataViewCtorString = toSource(DataView2), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap);
        var symbolProto = Symbol2 ? Symbol2.prototype : undefined2, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined2, symbolToString = symbolProto ? symbolProto.toString : undefined2;
        function lodash(value) {
          if (isObjectLike(value) && !isArray5(value) && !(value instanceof LazyWrapper)) {
            if (value instanceof LodashWrapper) {
              return value;
            }
            if (hasOwnProperty.call(value, "__wrapped__")) {
              return wrapperClone(value);
            }
          }
          return new LodashWrapper(value);
        }
        var baseCreate = function() {
          function object() {
          }
          return function(proto) {
            if (!isObject2(proto)) {
              return {};
            }
            if (objectCreate) {
              return objectCreate(proto);
            }
            object.prototype = proto;
            var result2 = new object();
            object.prototype = undefined2;
            return result2;
          };
        }();
        function baseLodash() {
        }
        function LodashWrapper(value, chainAll) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__chain__ = !!chainAll;
          this.__index__ = 0;
          this.__values__ = undefined2;
        }
        lodash.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "escape": reEscape,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "evaluate": reEvaluate,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "interpolate": reInterpolate,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          "variable": "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          "imports": {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            "_": lodash
          }
        };
        lodash.prototype = baseLodash.prototype;
        lodash.prototype.constructor = lodash;
        LodashWrapper.prototype = baseCreate(baseLodash.prototype);
        LodashWrapper.prototype.constructor = LodashWrapper;
        function LazyWrapper(value) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__dir__ = 1;
          this.__filtered__ = false;
          this.__iteratees__ = [];
          this.__takeCount__ = MAX_ARRAY_LENGTH;
          this.__views__ = [];
        }
        function lazyClone() {
          var result2 = new LazyWrapper(this.__wrapped__);
          result2.__actions__ = copyArray(this.__actions__);
          result2.__dir__ = this.__dir__;
          result2.__filtered__ = this.__filtered__;
          result2.__iteratees__ = copyArray(this.__iteratees__);
          result2.__takeCount__ = this.__takeCount__;
          result2.__views__ = copyArray(this.__views__);
          return result2;
        }
        function lazyReverse() {
          if (this.__filtered__) {
            var result2 = new LazyWrapper(this);
            result2.__dir__ = -1;
            result2.__filtered__ = true;
          } else {
            result2 = this.clone();
            result2.__dir__ *= -1;
          }
          return result2;
        }
        function lazyValue() {
          var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray5(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start4 = view.start, end = view.end, length = end - start4, index = isRight ? end : start4 - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
          if (!isArr || !isRight && arrLength == length && takeCount == length) {
            return baseWrapperValue(array, this.__actions__);
          }
          var result2 = [];
          outer:
            while (length-- && resIndex < takeCount) {
              index += dir;
              var iterIndex = -1, value = array[index];
              while (++iterIndex < iterLength) {
                var data = iteratees[iterIndex], iteratee2 = data.iteratee, type2 = data.type, computed = iteratee2(value);
                if (type2 == LAZY_MAP_FLAG) {
                  value = computed;
                } else if (!computed) {
                  if (type2 == LAZY_FILTER_FLAG) {
                    continue outer;
                  } else {
                    break outer;
                  }
                }
              }
              result2[resIndex++] = value;
            }
          return result2;
        }
        LazyWrapper.prototype = baseCreate(baseLodash.prototype);
        LazyWrapper.prototype.constructor = LazyWrapper;
        function Hash(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function hashClear() {
          this.__data__ = nativeCreate ? nativeCreate(null) : {};
          this.size = 0;
        }
        function hashDelete(key) {
          var result2 = this.has(key) && delete this.__data__[key];
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function hashGet(key) {
          var data = this.__data__;
          if (nativeCreate) {
            var result2 = data[key];
            return result2 === HASH_UNDEFINED ? undefined2 : result2;
          }
          return hasOwnProperty.call(data, key) ? data[key] : undefined2;
        }
        function hashHas(key) {
          var data = this.__data__;
          return nativeCreate ? data[key] !== undefined2 : hasOwnProperty.call(data, key);
        }
        function hashSet(key, value) {
          var data = this.__data__;
          this.size += this.has(key) ? 0 : 1;
          data[key] = nativeCreate && value === undefined2 ? HASH_UNDEFINED : value;
          return this;
        }
        Hash.prototype.clear = hashClear;
        Hash.prototype["delete"] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;
        function ListCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function listCacheClear() {
          this.__data__ = [];
          this.size = 0;
        }
        function listCacheDelete(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            return false;
          }
          var lastIndex = data.length - 1;
          if (index == lastIndex) {
            data.pop();
          } else {
            splice.call(data, index, 1);
          }
          --this.size;
          return true;
        }
        function listCacheGet(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          return index < 0 ? undefined2 : data[index][1];
        }
        function listCacheHas(key) {
          return assocIndexOf(this.__data__, key) > -1;
        }
        function listCacheSet(key, value) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            ++this.size;
            data.push([key, value]);
          } else {
            data[index][1] = value;
          }
          return this;
        }
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype["delete"] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;
        function MapCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function mapCacheClear() {
          this.size = 0;
          this.__data__ = {
            "hash": new Hash(),
            "map": new (Map2 || ListCache)(),
            "string": new Hash()
          };
        }
        function mapCacheDelete(key) {
          var result2 = getMapData(this, key)["delete"](key);
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function mapCacheGet(key) {
          return getMapData(this, key).get(key);
        }
        function mapCacheHas(key) {
          return getMapData(this, key).has(key);
        }
        function mapCacheSet(key, value) {
          var data = getMapData(this, key), size2 = data.size;
          data.set(key, value);
          this.size += data.size == size2 ? 0 : 1;
          return this;
        }
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype["delete"] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;
        function SetCache(values2) {
          var index = -1, length = values2 == null ? 0 : values2.length;
          this.__data__ = new MapCache();
          while (++index < length) {
            this.add(values2[index]);
          }
        }
        function setCacheAdd(value) {
          this.__data__.set(value, HASH_UNDEFINED);
          return this;
        }
        function setCacheHas(value) {
          return this.__data__.has(value);
        }
        SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
        SetCache.prototype.has = setCacheHas;
        function Stack(entries) {
          var data = this.__data__ = new ListCache(entries);
          this.size = data.size;
        }
        function stackClear() {
          this.__data__ = new ListCache();
          this.size = 0;
        }
        function stackDelete(key) {
          var data = this.__data__, result2 = data["delete"](key);
          this.size = data.size;
          return result2;
        }
        function stackGet(key) {
          return this.__data__.get(key);
        }
        function stackHas(key) {
          return this.__data__.has(key);
        }
        function stackSet(key, value) {
          var data = this.__data__;
          if (data instanceof ListCache) {
            var pairs2 = data.__data__;
            if (!Map2 || pairs2.length < LARGE_ARRAY_SIZE - 1) {
              pairs2.push([key, value]);
              this.size = ++data.size;
              return this;
            }
            data = this.__data__ = new MapCache(pairs2);
          }
          data.set(key, value);
          this.size = data.size;
          return this;
        }
        Stack.prototype.clear = stackClear;
        Stack.prototype["delete"] = stackDelete;
        Stack.prototype.get = stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;
        function arrayLikeKeys(value, inherited) {
          var isArr = isArray5(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String2) : [], length = result2.length;
          for (var key in value) {
            if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
            (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
            isIndex(key, length)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function arraySample(array) {
          var length = array.length;
          return length ? array[baseRandom(0, length - 1)] : undefined2;
        }
        function arraySampleSize(array, n) {
          return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
        }
        function arrayShuffle(array) {
          return shuffleSelf(copyArray(array));
        }
        function assignMergeValue(object, key, value) {
          if (value !== undefined2 && !eq(object[key], value) || value === undefined2 && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assignValue(object, key, value) {
          var objValue = object[key];
          if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined2 && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assocIndexOf(array, key) {
          var length = array.length;
          while (length--) {
            if (eq(array[length][0], key)) {
              return length;
            }
          }
          return -1;
        }
        function baseAggregator(collection, setter, iteratee2, accumulator) {
          baseEach(collection, function(value, key, collection2) {
            setter(accumulator, value, iteratee2(value), collection2);
          });
          return accumulator;
        }
        function baseAssign(object, source) {
          return object && copyObject(source, keys(source), object);
        }
        function baseAssignIn(object, source) {
          return object && copyObject(source, keysIn(source), object);
        }
        function baseAssignValue(object, key, value) {
          if (key == "__proto__" && defineProperty) {
            defineProperty(object, key, {
              "configurable": true,
              "enumerable": true,
              "value": value,
              "writable": true
            });
          } else {
            object[key] = value;
          }
        }
        function baseAt(object, paths) {
          var index = -1, length = paths.length, result2 = Array2(length), skip = object == null;
          while (++index < length) {
            result2[index] = skip ? undefined2 : get5(object, paths[index]);
          }
          return result2;
        }
        function baseClamp(number, lower, upper) {
          if (number === number) {
            if (upper !== undefined2) {
              number = number <= upper ? number : upper;
            }
            if (lower !== undefined2) {
              number = number >= lower ? number : lower;
            }
          }
          return number;
        }
        function baseClone(value, bitmask, customizer, key, object, stack) {
          var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
          if (customizer) {
            result2 = object ? customizer(value, key, object, stack) : customizer(value);
          }
          if (result2 !== undefined2) {
            return result2;
          }
          if (!isObject2(value)) {
            return value;
          }
          var isArr = isArray5(value);
          if (isArr) {
            result2 = initCloneArray(value);
            if (!isDeep) {
              return copyArray(value, result2);
            }
          } else {
            var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
            if (isBuffer(value)) {
              return cloneBuffer(value, isDeep);
            }
            if (tag == objectTag || tag == argsTag || isFunc && !object) {
              result2 = isFlat || isFunc ? {} : initCloneObject(value);
              if (!isDeep) {
                return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
              }
            } else {
              if (!cloneableTags[tag]) {
                return object ? value : {};
              }
              result2 = initCloneByTag(value, tag, isDeep);
            }
          }
          stack || (stack = new Stack());
          var stacked = stack.get(value);
          if (stacked) {
            return stacked;
          }
          stack.set(value, result2);
          if (isSet(value)) {
            value.forEach(function(subValue) {
              result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
            });
          } else if (isMap(value)) {
            value.forEach(function(subValue, key2) {
              result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
            });
          }
          var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
          var props = isArr ? undefined2 : keysFunc(value);
          arrayEach(props || value, function(subValue, key2) {
            if (props) {
              key2 = subValue;
              subValue = value[key2];
            }
            assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
          });
          return result2;
        }
        function baseConforms(source) {
          var props = keys(source);
          return function(object) {
            return baseConformsTo(object, source, props);
          };
        }
        function baseConformsTo(object, source, props) {
          var length = props.length;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (length--) {
            var key = props[length], predicate = source[key], value = object[key];
            if (value === undefined2 && !(key in object) || !predicate(value)) {
              return false;
            }
          }
          return true;
        }
        function baseDelay(func, wait, args) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return setTimeout2(function() {
            func.apply(undefined2, args);
          }, wait);
        }
        function baseDifference(array, values2, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, isCommon = true, length = array.length, result2 = [], valuesLength = values2.length;
          if (!length) {
            return result2;
          }
          if (iteratee2) {
            values2 = arrayMap(values2, baseUnary(iteratee2));
          }
          if (comparator) {
            includes2 = arrayIncludesWith;
            isCommon = false;
          } else if (values2.length >= LARGE_ARRAY_SIZE) {
            includes2 = cacheHas;
            isCommon = false;
            values2 = new SetCache(values2);
          }
          outer:
            while (++index < length) {
              var value = array[index], computed = iteratee2 == null ? value : iteratee2(value);
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed === computed) {
                var valuesIndex = valuesLength;
                while (valuesIndex--) {
                  if (values2[valuesIndex] === computed) {
                    continue outer;
                  }
                }
                result2.push(value);
              } else if (!includes2(values2, computed, comparator)) {
                result2.push(value);
              }
            }
          return result2;
        }
        var baseEach = createBaseEach(baseForOwn);
        var baseEachRight = createBaseEach(baseForOwnRight, true);
        function baseEvery(collection, predicate) {
          var result2 = true;
          baseEach(collection, function(value, index, collection2) {
            result2 = !!predicate(value, index, collection2);
            return result2;
          });
          return result2;
        }
        function baseExtremum(array, iteratee2, comparator) {
          var index = -1, length = array.length;
          while (++index < length) {
            var value = array[index], current = iteratee2(value);
            if (current != null && (computed === undefined2 ? current === current && !isSymbol(current) : comparator(current, computed))) {
              var computed = current, result2 = value;
            }
          }
          return result2;
        }
        function baseFill(array, value, start4, end) {
          var length = array.length;
          start4 = toInteger(start4);
          if (start4 < 0) {
            start4 = -start4 > length ? 0 : length + start4;
          }
          end = end === undefined2 || end > length ? length : toInteger(end);
          if (end < 0) {
            end += length;
          }
          end = start4 > end ? 0 : toLength(end);
          while (start4 < end) {
            array[start4++] = value;
          }
          return array;
        }
        function baseFilter(collection, predicate) {
          var result2 = [];
          baseEach(collection, function(value, index, collection2) {
            if (predicate(value, index, collection2)) {
              result2.push(value);
            }
          });
          return result2;
        }
        function baseFlatten(array, depth, predicate, isStrict, result2) {
          var index = -1, length = array.length;
          predicate || (predicate = isFlattenable);
          result2 || (result2 = []);
          while (++index < length) {
            var value = array[index];
            if (depth > 0 && predicate(value)) {
              if (depth > 1) {
                baseFlatten(value, depth - 1, predicate, isStrict, result2);
              } else {
                arrayPush(result2, value);
              }
            } else if (!isStrict) {
              result2[result2.length] = value;
            }
          }
          return result2;
        }
        var baseFor = createBaseFor();
        var baseForRight = createBaseFor(true);
        function baseForOwn(object, iteratee2) {
          return object && baseFor(object, iteratee2, keys);
        }
        function baseForOwnRight(object, iteratee2) {
          return object && baseForRight(object, iteratee2, keys);
        }
        function baseFunctions(object, props) {
          return arrayFilter(props, function(key) {
            return isFunction2(object[key]);
          });
        }
        function baseGet(object, path) {
          path = castPath(path, object);
          var index = 0, length = path.length;
          while (object != null && index < length) {
            object = object[toKey(path[index++])];
          }
          return index && index == length ? object : undefined2;
        }
        function baseGetAllKeys(object, keysFunc, symbolsFunc) {
          var result2 = keysFunc(object);
          return isArray5(object) ? result2 : arrayPush(result2, symbolsFunc(object));
        }
        function baseGetTag(value) {
          if (value == null) {
            return value === undefined2 ? undefinedTag : nullTag;
          }
          return symToStringTag && symToStringTag in Object2(value) ? getRawTag(value) : objectToString(value);
        }
        function baseGt(value, other) {
          return value > other;
        }
        function baseHas(object, key) {
          return object != null && hasOwnProperty.call(object, key);
        }
        function baseHasIn(object, key) {
          return object != null && key in Object2(object);
        }
        function baseInRange(number, start4, end) {
          return number >= nativeMin(start4, end) && number < nativeMax(start4, end);
        }
        function baseIntersection(arrays, iteratee2, comparator) {
          var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
          while (othIndex--) {
            var array = arrays[othIndex];
            if (othIndex && iteratee2) {
              array = arrayMap(array, baseUnary(iteratee2));
            }
            maxLength = nativeMin(array.length, maxLength);
            caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined2;
          }
          array = arrays[0];
          var index = -1, seen = caches[0];
          outer:
            while (++index < length && result2.length < maxLength) {
              var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (!(seen ? cacheHas(seen, computed) : includes2(result2, computed, comparator))) {
                othIndex = othLength;
                while (--othIndex) {
                  var cache = caches[othIndex];
                  if (!(cache ? cacheHas(cache, computed) : includes2(arrays[othIndex], computed, comparator))) {
                    continue outer;
                  }
                }
                if (seen) {
                  seen.push(computed);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseInverter(object, setter, iteratee2, accumulator) {
          baseForOwn(object, function(value, key, object2) {
            setter(accumulator, iteratee2(value), key, object2);
          });
          return accumulator;
        }
        function baseInvoke(object, path, args) {
          path = castPath(path, object);
          object = parent(object, path);
          var func = object == null ? object : object[toKey(last(path))];
          return func == null ? undefined2 : apply(func, object, args);
        }
        function baseIsArguments(value) {
          return isObjectLike(value) && baseGetTag(value) == argsTag;
        }
        function baseIsArrayBuffer(value) {
          return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
        }
        function baseIsDate(value) {
          return isObjectLike(value) && baseGetTag(value) == dateTag;
        }
        function baseIsEqual(value, other, bitmask, customizer, stack) {
          if (value === other) {
            return true;
          }
          if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
            return value !== value && other !== other;
          }
          return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
        }
        function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
          var objIsArr = isArray5(object), othIsArr = isArray5(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
          objTag = objTag == argsTag ? objectTag : objTag;
          othTag = othTag == argsTag ? objectTag : othTag;
          var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
          if (isSameTag && isBuffer(object)) {
            if (!isBuffer(other)) {
              return false;
            }
            objIsArr = true;
            objIsObj = false;
          }
          if (isSameTag && !objIsObj) {
            stack || (stack = new Stack());
            return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
          }
          if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
            var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
            if (objIsWrapped || othIsWrapped) {
              var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
              stack || (stack = new Stack());
              return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
            }
          }
          if (!isSameTag) {
            return false;
          }
          stack || (stack = new Stack());
          return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
        }
        function baseIsMap(value) {
          return isObjectLike(value) && getTag(value) == mapTag;
        }
        function baseIsMatch(object, source, matchData, customizer) {
          var index = matchData.length, length = index, noCustomizer = !customizer;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (index--) {
            var data = matchData[index];
            if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
              return false;
            }
          }
          while (++index < length) {
            data = matchData[index];
            var key = data[0], objValue = object[key], srcValue = data[1];
            if (noCustomizer && data[2]) {
              if (objValue === undefined2 && !(key in object)) {
                return false;
              }
            } else {
              var stack = new Stack();
              if (customizer) {
                var result2 = customizer(objValue, srcValue, key, object, source, stack);
              }
              if (!(result2 === undefined2 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
                return false;
              }
            }
          }
          return true;
        }
        function baseIsNative(value) {
          if (!isObject2(value) || isMasked(value)) {
            return false;
          }
          var pattern = isFunction2(value) ? reIsNative : reIsHostCtor;
          return pattern.test(toSource(value));
        }
        function baseIsRegExp(value) {
          return isObjectLike(value) && baseGetTag(value) == regexpTag;
        }
        function baseIsSet(value) {
          return isObjectLike(value) && getTag(value) == setTag;
        }
        function baseIsTypedArray(value) {
          return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
        }
        function baseIteratee(value) {
          if (typeof value == "function") {
            return value;
          }
          if (value == null) {
            return identity;
          }
          if (typeof value == "object") {
            return isArray5(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
          }
          return property(value);
        }
        function baseKeys(object) {
          if (!isPrototype(object)) {
            return nativeKeys(object);
          }
          var result2 = [];
          for (var key in Object2(object)) {
            if (hasOwnProperty.call(object, key) && key != "constructor") {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseKeysIn(object) {
          if (!isObject2(object)) {
            return nativeKeysIn(object);
          }
          var isProto = isPrototype(object), result2 = [];
          for (var key in object) {
            if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseLt(value, other) {
          return value < other;
        }
        function baseMap(collection, iteratee2) {
          var index = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value, key, collection2) {
            result2[++index] = iteratee2(value, key, collection2);
          });
          return result2;
        }
        function baseMatches(source) {
          var matchData = getMatchData(source);
          if (matchData.length == 1 && matchData[0][2]) {
            return matchesStrictComparable(matchData[0][0], matchData[0][1]);
          }
          return function(object) {
            return object === source || baseIsMatch(object, source, matchData);
          };
        }
        function baseMatchesProperty(path, srcValue) {
          if (isKey(path) && isStrictComparable(srcValue)) {
            return matchesStrictComparable(toKey(path), srcValue);
          }
          return function(object) {
            var objValue = get5(object, path);
            return objValue === undefined2 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
          };
        }
        function baseMerge(object, source, srcIndex, customizer, stack) {
          if (object === source) {
            return;
          }
          baseFor(source, function(srcValue, key) {
            stack || (stack = new Stack());
            if (isObject2(srcValue)) {
              baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
            } else {
              var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined2;
              if (newValue === undefined2) {
                newValue = srcValue;
              }
              assignMergeValue(object, key, newValue);
            }
          }, keysIn);
        }
        function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
          var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
          if (stacked) {
            assignMergeValue(object, key, stacked);
            return;
          }
          var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined2;
          var isCommon = newValue === undefined2;
          if (isCommon) {
            var isArr = isArray5(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
            newValue = srcValue;
            if (isArr || isBuff || isTyped) {
              if (isArray5(objValue)) {
                newValue = objValue;
              } else if (isArrayLikeObject(objValue)) {
                newValue = copyArray(objValue);
              } else if (isBuff) {
                isCommon = false;
                newValue = cloneBuffer(srcValue, true);
              } else if (isTyped) {
                isCommon = false;
                newValue = cloneTypedArray(srcValue, true);
              } else {
                newValue = [];
              }
            } else if (isPlainObject5(srcValue) || isArguments(srcValue)) {
              newValue = objValue;
              if (isArguments(objValue)) {
                newValue = toPlainObject(objValue);
              } else if (!isObject2(objValue) || isFunction2(objValue)) {
                newValue = initCloneObject(srcValue);
              }
            } else {
              isCommon = false;
            }
          }
          if (isCommon) {
            stack.set(srcValue, newValue);
            mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
            stack["delete"](srcValue);
          }
          assignMergeValue(object, key, newValue);
        }
        function baseNth(array, n) {
          var length = array.length;
          if (!length) {
            return;
          }
          n += n < 0 ? length : 0;
          return isIndex(n, length) ? array[n] : undefined2;
        }
        function baseOrderBy(collection, iteratees, orders) {
          if (iteratees.length) {
            iteratees = arrayMap(iteratees, function(iteratee2) {
              if (isArray5(iteratee2)) {
                return function(value) {
                  return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
                };
              }
              return iteratee2;
            });
          } else {
            iteratees = [identity];
          }
          var index = -1;
          iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
          var result2 = baseMap(collection, function(value, key, collection2) {
            var criteria = arrayMap(iteratees, function(iteratee2) {
              return iteratee2(value);
            });
            return { "criteria": criteria, "index": ++index, "value": value };
          });
          return baseSortBy(result2, function(object, other) {
            return compareMultiple(object, other, orders);
          });
        }
        function basePick(object, paths) {
          return basePickBy(object, paths, function(value, path) {
            return hasIn(object, path);
          });
        }
        function basePickBy(object, paths, predicate) {
          var index = -1, length = paths.length, result2 = {};
          while (++index < length) {
            var path = paths[index], value = baseGet(object, path);
            if (predicate(value, path)) {
              baseSet(result2, castPath(path, object), value);
            }
          }
          return result2;
        }
        function basePropertyDeep(path) {
          return function(object) {
            return baseGet(object, path);
          };
        }
        function basePullAll(array, values2, iteratee2, comparator) {
          var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values2.length, seen = array;
          if (array === values2) {
            values2 = copyArray(values2);
          }
          if (iteratee2) {
            seen = arrayMap(array, baseUnary(iteratee2));
          }
          while (++index < length) {
            var fromIndex = 0, value = values2[index], computed = iteratee2 ? iteratee2(value) : value;
            while ((fromIndex = indexOf2(seen, computed, fromIndex, comparator)) > -1) {
              if (seen !== array) {
                splice.call(seen, fromIndex, 1);
              }
              splice.call(array, fromIndex, 1);
            }
          }
          return array;
        }
        function basePullAt(array, indexes) {
          var length = array ? indexes.length : 0, lastIndex = length - 1;
          while (length--) {
            var index = indexes[length];
            if (length == lastIndex || index !== previous) {
              var previous = index;
              if (isIndex(index)) {
                splice.call(array, index, 1);
              } else {
                baseUnset(array, index);
              }
            }
          }
          return array;
        }
        function baseRandom(lower, upper) {
          return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
        }
        function baseRange(start4, end, step, fromRight) {
          var index = -1, length = nativeMax(nativeCeil((end - start4) / (step || 1)), 0), result2 = Array2(length);
          while (length--) {
            result2[fromRight ? length : ++index] = start4;
            start4 += step;
          }
          return result2;
        }
        function baseRepeat(string, n) {
          var result2 = "";
          if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
            return result2;
          }
          do {
            if (n % 2) {
              result2 += string;
            }
            n = nativeFloor(n / 2);
            if (n) {
              string += string;
            }
          } while (n);
          return result2;
        }
        function baseRest(func, start4) {
          return setToString(overRest(func, start4, identity), func + "");
        }
        function baseSample(collection) {
          return arraySample(values(collection));
        }
        function baseSampleSize(collection, n) {
          var array = values(collection);
          return shuffleSelf(array, baseClamp(n, 0, array.length));
        }
        function baseSet(object, path, value, customizer) {
          if (!isObject2(object)) {
            return object;
          }
          path = castPath(path, object);
          var index = -1, length = path.length, lastIndex = length - 1, nested = object;
          while (nested != null && ++index < length) {
            var key = toKey(path[index]), newValue = value;
            if (key === "__proto__" || key === "constructor" || key === "prototype") {
              return object;
            }
            if (index != lastIndex) {
              var objValue = nested[key];
              newValue = customizer ? customizer(objValue, key, nested) : undefined2;
              if (newValue === undefined2) {
                newValue = isObject2(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
              }
            }
            assignValue(nested, key, newValue);
            nested = nested[key];
          }
          return object;
        }
        var baseSetData = !metaMap ? identity : function(func, data) {
          metaMap.set(func, data);
          return func;
        };
        var baseSetToString = !defineProperty ? identity : function(func, string) {
          return defineProperty(func, "toString", {
            "configurable": true,
            "enumerable": false,
            "value": constant(string),
            "writable": true
          });
        };
        function baseShuffle(collection) {
          return shuffleSelf(values(collection));
        }
        function baseSlice(array, start4, end) {
          var index = -1, length = array.length;
          if (start4 < 0) {
            start4 = -start4 > length ? 0 : length + start4;
          }
          end = end > length ? length : end;
          if (end < 0) {
            end += length;
          }
          length = start4 > end ? 0 : end - start4 >>> 0;
          start4 >>>= 0;
          var result2 = Array2(length);
          while (++index < length) {
            result2[index] = array[index + start4];
          }
          return result2;
        }
        function baseSome(collection, predicate) {
          var result2;
          baseEach(collection, function(value, index, collection2) {
            result2 = predicate(value, index, collection2);
            return !result2;
          });
          return !!result2;
        }
        function baseSortedIndex(array, value, retHighest) {
          var low = 0, high = array == null ? low : array.length;
          if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
            while (low < high) {
              var mid = low + high >>> 1, computed = array[mid];
              if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) {
                low = mid + 1;
              } else {
                high = mid;
              }
            }
            return high;
          }
          return baseSortedIndexBy(array, value, identity, retHighest);
        }
        function baseSortedIndexBy(array, value, iteratee2, retHighest) {
          var low = 0, high = array == null ? 0 : array.length;
          if (high === 0) {
            return 0;
          }
          value = iteratee2(value);
          var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined2;
          while (low < high) {
            var mid = nativeFloor((low + high) / 2), computed = iteratee2(array[mid]), othIsDefined = computed !== undefined2, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
            if (valIsNaN) {
              var setLow = retHighest || othIsReflexive;
            } else if (valIsUndefined) {
              setLow = othIsReflexive && (retHighest || othIsDefined);
            } else if (valIsNull) {
              setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
            } else if (valIsSymbol) {
              setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
            } else if (othIsNull || othIsSymbol) {
              setLow = false;
            } else {
              setLow = retHighest ? computed <= value : computed < value;
            }
            if (setLow) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return nativeMin(high, MAX_ARRAY_INDEX);
        }
        function baseSortedUniq(array, iteratee2) {
          var index = -1, length = array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
            if (!index || !eq(computed, seen)) {
              var seen = computed;
              result2[resIndex++] = value === 0 ? 0 : value;
            }
          }
          return result2;
        }
        function baseToNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          return +value;
        }
        function baseToString(value) {
          if (typeof value == "string") {
            return value;
          }
          if (isArray5(value)) {
            return arrayMap(value, baseToString) + "";
          }
          if (isSymbol(value)) {
            return symbolToString ? symbolToString.call(value) : "";
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function baseUniq(array, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result2 = [], seen = result2;
          if (comparator) {
            isCommon = false;
            includes2 = arrayIncludesWith;
          } else if (length >= LARGE_ARRAY_SIZE) {
            var set9 = iteratee2 ? null : createSet(array);
            if (set9) {
              return setToArray(set9);
            }
            isCommon = false;
            includes2 = cacheHas;
            seen = new SetCache();
          } else {
            seen = iteratee2 ? [] : result2;
          }
          outer:
            while (++index < length) {
              var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed === computed) {
                var seenIndex = seen.length;
                while (seenIndex--) {
                  if (seen[seenIndex] === computed) {
                    continue outer;
                  }
                }
                if (iteratee2) {
                  seen.push(computed);
                }
                result2.push(value);
              } else if (!includes2(seen, computed, comparator)) {
                if (seen !== result2) {
                  seen.push(computed);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseUnset(object, path) {
          path = castPath(path, object);
          object = parent(object, path);
          return object == null || delete object[toKey(last(path))];
        }
        function baseUpdate(object, path, updater, customizer) {
          return baseSet(object, path, updater(baseGet(object, path)), customizer);
        }
        function baseWhile(array, predicate, isDrop, fromRight) {
          var length = array.length, index = fromRight ? length : -1;
          while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {
          }
          return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
        }
        function baseWrapperValue(value, actions) {
          var result2 = value;
          if (result2 instanceof LazyWrapper) {
            result2 = result2.value();
          }
          return arrayReduce(actions, function(result3, action) {
            return action.func.apply(action.thisArg, arrayPush([result3], action.args));
          }, result2);
        }
        function baseXor(arrays, iteratee2, comparator) {
          var length = arrays.length;
          if (length < 2) {
            return length ? baseUniq(arrays[0]) : [];
          }
          var index = -1, result2 = Array2(length);
          while (++index < length) {
            var array = arrays[index], othIndex = -1;
            while (++othIndex < length) {
              if (othIndex != index) {
                result2[index] = baseDifference(result2[index] || array, arrays[othIndex], iteratee2, comparator);
              }
            }
          }
          return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
        }
        function baseZipObject(props, values2, assignFunc) {
          var index = -1, length = props.length, valsLength = values2.length, result2 = {};
          while (++index < length) {
            var value = index < valsLength ? values2[index] : undefined2;
            assignFunc(result2, props[index], value);
          }
          return result2;
        }
        function castArrayLikeObject(value) {
          return isArrayLikeObject(value) ? value : [];
        }
        function castFunction(value) {
          return typeof value == "function" ? value : identity;
        }
        function castPath(value, object) {
          if (isArray5(value)) {
            return value;
          }
          return isKey(value, object) ? [value] : stringToPath(toString2(value));
        }
        var castRest = baseRest;
        function castSlice(array, start4, end) {
          var length = array.length;
          end = end === undefined2 ? length : end;
          return !start4 && end >= length ? array : baseSlice(array, start4, end);
        }
        var clearTimeout2 = ctxClearTimeout || function(id) {
          return root.clearTimeout(id);
        };
        function cloneBuffer(buffer, isDeep) {
          if (isDeep) {
            return buffer.slice();
          }
          var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
          buffer.copy(result2);
          return result2;
        }
        function cloneArrayBuffer(arrayBuffer) {
          var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
          new Uint8Array2(result2).set(new Uint8Array2(arrayBuffer));
          return result2;
        }
        function cloneDataView(dataView, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
          return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
        }
        function cloneRegExp(regexp) {
          var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
          result2.lastIndex = regexp.lastIndex;
          return result2;
        }
        function cloneSymbol(symbol) {
          return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
        }
        function cloneTypedArray(typedArray, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
          return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
        }
        function compareAscending(value, other) {
          if (value !== other) {
            var valIsDefined = value !== undefined2, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
            var othIsDefined = other !== undefined2, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
            if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
              return 1;
            }
            if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
              return -1;
            }
          }
          return 0;
        }
        function compareMultiple(object, other, orders) {
          var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
          while (++index < length) {
            var result2 = compareAscending(objCriteria[index], othCriteria[index]);
            if (result2) {
              if (index >= ordersLength) {
                return result2;
              }
              var order = orders[index];
              return result2 * (order == "desc" ? -1 : 1);
            }
          }
          return object.index - other.index;
        }
        function composeArgs(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
          while (++leftIndex < leftLength) {
            result2[leftIndex] = partials[leftIndex];
          }
          while (++argsIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[holders[argsIndex]] = args[argsIndex];
            }
          }
          while (rangeLength--) {
            result2[leftIndex++] = args[argsIndex++];
          }
          return result2;
        }
        function composeArgsRight(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
          while (++argsIndex < rangeLength) {
            result2[argsIndex] = args[argsIndex];
          }
          var offset = argsIndex;
          while (++rightIndex < rightLength) {
            result2[offset + rightIndex] = partials[rightIndex];
          }
          while (++holdersIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[offset + holders[holdersIndex]] = args[argsIndex++];
            }
          }
          return result2;
        }
        function copyArray(source, array) {
          var index = -1, length = source.length;
          array || (array = Array2(length));
          while (++index < length) {
            array[index] = source[index];
          }
          return array;
        }
        function copyObject(source, props, object, customizer) {
          var isNew = !object;
          object || (object = {});
          var index = -1, length = props.length;
          while (++index < length) {
            var key = props[index];
            var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined2;
            if (newValue === undefined2) {
              newValue = source[key];
            }
            if (isNew) {
              baseAssignValue(object, key, newValue);
            } else {
              assignValue(object, key, newValue);
            }
          }
          return object;
        }
        function copySymbols(source, object) {
          return copyObject(source, getSymbols(source), object);
        }
        function copySymbolsIn(source, object) {
          return copyObject(source, getSymbolsIn(source), object);
        }
        function createAggregator(setter, initializer) {
          return function(collection, iteratee2) {
            var func = isArray5(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
            return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
          };
        }
        function createAssigner(assigner) {
          return baseRest(function(object, sources) {
            var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined2, guard = length > 2 ? sources[2] : undefined2;
            customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined2;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
              customizer = length < 3 ? undefined2 : customizer;
              length = 1;
            }
            object = Object2(object);
            while (++index < length) {
              var source = sources[index];
              if (source) {
                assigner(object, source, index, customizer);
              }
            }
            return object;
          });
        }
        function createBaseEach(eachFunc, fromRight) {
          return function(collection, iteratee2) {
            if (collection == null) {
              return collection;
            }
            if (!isArrayLike(collection)) {
              return eachFunc(collection, iteratee2);
            }
            var length = collection.length, index = fromRight ? length : -1, iterable = Object2(collection);
            while (fromRight ? index-- : ++index < length) {
              if (iteratee2(iterable[index], index, iterable) === false) {
                break;
              }
            }
            return collection;
          };
        }
        function createBaseFor(fromRight) {
          return function(object, iteratee2, keysFunc) {
            var index = -1, iterable = Object2(object), props = keysFunc(object), length = props.length;
            while (length--) {
              var key = props[fromRight ? length : ++index];
              if (iteratee2(iterable[key], key, iterable) === false) {
                break;
              }
            }
            return object;
          };
        }
        function createBind(func, bitmask, thisArg) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return fn.apply(isBind ? thisArg : this, arguments);
          }
          return wrapper;
        }
        function createCaseFirst(methodName) {
          return function(string) {
            string = toString2(string);
            var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined2;
            var chr = strSymbols ? strSymbols[0] : string.charAt(0);
            var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
            return chr[methodName]() + trailing;
          };
        }
        function createCompounder(callback) {
          return function(string) {
            return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
          };
        }
        function createCtor(Ctor) {
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return new Ctor();
              case 1:
                return new Ctor(args[0]);
              case 2:
                return new Ctor(args[0], args[1]);
              case 3:
                return new Ctor(args[0], args[1], args[2]);
              case 4:
                return new Ctor(args[0], args[1], args[2], args[3]);
              case 5:
                return new Ctor(args[0], args[1], args[2], args[3], args[4]);
              case 6:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
              case 7:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
            }
            var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
            return isObject2(result2) ? result2 : thisBinding;
          };
        }
        function createCurry(func, bitmask, arity) {
          var Ctor = createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length, placeholder = getHolder(wrapper);
            while (index--) {
              args[index] = arguments[index];
            }
            var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
            length -= holders.length;
            if (length < arity) {
              return createRecurry(
                func,
                bitmask,
                createHybrid,
                wrapper.placeholder,
                undefined2,
                args,
                holders,
                undefined2,
                undefined2,
                arity - length
              );
            }
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return apply(fn, this, args);
          }
          return wrapper;
        }
        function createFind(findIndexFunc) {
          return function(collection, predicate, fromIndex) {
            var iterable = Object2(collection);
            if (!isArrayLike(collection)) {
              var iteratee2 = getIteratee(predicate, 3);
              collection = keys(collection);
              predicate = function(key) {
                return iteratee2(iterable[key], key, iterable);
              };
            }
            var index = findIndexFunc(collection, predicate, fromIndex);
            return index > -1 ? iterable[iteratee2 ? collection[index] : index] : undefined2;
          };
        }
        function createFlow(fromRight) {
          return flatRest(function(funcs) {
            var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
            if (fromRight) {
              funcs.reverse();
            }
            while (index--) {
              var func = funcs[index];
              if (typeof func != "function") {
                throw new TypeError2(FUNC_ERROR_TEXT);
              }
              if (prereq && !wrapper && getFuncName(func) == "wrapper") {
                var wrapper = new LodashWrapper([], true);
              }
            }
            index = wrapper ? index : length;
            while (++index < length) {
              func = funcs[index];
              var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined2;
              if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
                wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
              } else {
                wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
              }
            }
            return function() {
              var args = arguments, value = args[0];
              if (wrapper && args.length == 1 && isArray5(value)) {
                return wrapper.plant(value).value();
              }
              var index2 = 0, result2 = length ? funcs[index2].apply(this, args) : value;
              while (++index2 < length) {
                result2 = funcs[index2].call(this, result2);
              }
              return result2;
            };
          });
        }
        function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
          var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined2 : createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length;
            while (index--) {
              args[index] = arguments[index];
            }
            if (isCurried) {
              var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
            }
            if (partials) {
              args = composeArgs(args, partials, holders, isCurried);
            }
            if (partialsRight) {
              args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
            }
            length -= holdersCount;
            if (isCurried && length < arity) {
              var newHolders = replaceHolders(args, placeholder);
              return createRecurry(
                func,
                bitmask,
                createHybrid,
                wrapper.placeholder,
                thisArg,
                args,
                newHolders,
                argPos,
                ary2,
                arity - length
              );
            }
            var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
            length = args.length;
            if (argPos) {
              args = reorder(args, argPos);
            } else if (isFlip && length > 1) {
              args.reverse();
            }
            if (isAry && ary2 < length) {
              args.length = ary2;
            }
            if (this && this !== root && this instanceof wrapper) {
              fn = Ctor || createCtor(fn);
            }
            return fn.apply(thisBinding, args);
          }
          return wrapper;
        }
        function createInverter(setter, toIteratee) {
          return function(object, iteratee2) {
            return baseInverter(object, setter, toIteratee(iteratee2), {});
          };
        }
        function createMathOperation(operator, defaultValue) {
          return function(value, other) {
            var result2;
            if (value === undefined2 && other === undefined2) {
              return defaultValue;
            }
            if (value !== undefined2) {
              result2 = value;
            }
            if (other !== undefined2) {
              if (result2 === undefined2) {
                return other;
              }
              if (typeof value == "string" || typeof other == "string") {
                value = baseToString(value);
                other = baseToString(other);
              } else {
                value = baseToNumber(value);
                other = baseToNumber(other);
              }
              result2 = operator(value, other);
            }
            return result2;
          };
        }
        function createOver(arrayFunc) {
          return flatRest(function(iteratees) {
            iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
            return baseRest(function(args) {
              var thisArg = this;
              return arrayFunc(iteratees, function(iteratee2) {
                return apply(iteratee2, thisArg, args);
              });
            });
          });
        }
        function createPadding(length, chars) {
          chars = chars === undefined2 ? " " : baseToString(chars);
          var charsLength = chars.length;
          if (charsLength < 2) {
            return charsLength ? baseRepeat(chars, length) : chars;
          }
          var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
          return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
        }
        function createPartial(func, bitmask, thisArg, partials) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            while (++leftIndex < leftLength) {
              args[leftIndex] = partials[leftIndex];
            }
            while (argsLength--) {
              args[leftIndex++] = arguments[++argsIndex];
            }
            return apply(fn, isBind ? thisArg : this, args);
          }
          return wrapper;
        }
        function createRange(fromRight) {
          return function(start4, end, step) {
            if (step && typeof step != "number" && isIterateeCall(start4, end, step)) {
              end = step = undefined2;
            }
            start4 = toFinite(start4);
            if (end === undefined2) {
              end = start4;
              start4 = 0;
            } else {
              end = toFinite(end);
            }
            step = step === undefined2 ? start4 < end ? 1 : -1 : toFinite(step);
            return baseRange(start4, end, step, fromRight);
          };
        }
        function createRelationalOperation(operator) {
          return function(value, other) {
            if (!(typeof value == "string" && typeof other == "string")) {
              value = toNumber(value);
              other = toNumber(other);
            }
            return operator(value, other);
          };
        }
        function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
          var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined2, newHoldersRight = isCurry ? undefined2 : holders, newPartials = isCurry ? partials : undefined2, newPartialsRight = isCurry ? undefined2 : partials;
          bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
          bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
          if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
            bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
          }
          var newData = [
            func,
            bitmask,
            thisArg,
            newPartials,
            newHolders,
            newPartialsRight,
            newHoldersRight,
            argPos,
            ary2,
            arity
          ];
          var result2 = wrapFunc.apply(undefined2, newData);
          if (isLaziable(func)) {
            setData(result2, newData);
          }
          result2.placeholder = placeholder;
          return setWrapToString(result2, func, bitmask);
        }
        function createRound(methodName) {
          var func = Math2[methodName];
          return function(number, precision) {
            number = toNumber(number);
            precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
            if (precision && nativeIsFinite(number)) {
              var pair = (toString2(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
              pair = (toString2(value) + "e").split("e");
              return +(pair[0] + "e" + (+pair[1] - precision));
            }
            return func(number);
          };
        }
        var createSet = !(Set && 1 / setToArray(new Set([, -0]))[1] == INFINITY) ? noop : function(values2) {
          return new Set(values2);
        };
        function createToPairs(keysFunc) {
          return function(object) {
            var tag = getTag(object);
            if (tag == mapTag) {
              return mapToArray(object);
            }
            if (tag == setTag) {
              return setToPairs(object);
            }
            return baseToPairs(object, keysFunc(object));
          };
        }
        function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
          var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
          if (!isBindKey && typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          var length = partials ? partials.length : 0;
          if (!length) {
            bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
            partials = holders = undefined2;
          }
          ary2 = ary2 === undefined2 ? ary2 : nativeMax(toInteger(ary2), 0);
          arity = arity === undefined2 ? arity : toInteger(arity);
          length -= holders ? holders.length : 0;
          if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
            var partialsRight = partials, holdersRight = holders;
            partials = holders = undefined2;
          }
          var data = isBindKey ? undefined2 : getData(func);
          var newData = [
            func,
            bitmask,
            thisArg,
            partials,
            holders,
            partialsRight,
            holdersRight,
            argPos,
            ary2,
            arity
          ];
          if (data) {
            mergeData(newData, data);
          }
          func = newData[0];
          bitmask = newData[1];
          thisArg = newData[2];
          partials = newData[3];
          holders = newData[4];
          arity = newData[9] = newData[9] === undefined2 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
          if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
            bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
          }
          if (!bitmask || bitmask == WRAP_BIND_FLAG) {
            var result2 = createBind(func, bitmask, thisArg);
          } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
            result2 = createCurry(func, bitmask, arity);
          } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
            result2 = createPartial(func, bitmask, thisArg, partials);
          } else {
            result2 = createHybrid.apply(undefined2, newData);
          }
          var setter = data ? baseSetData : setData;
          return setWrapToString(setter(result2, newData), func, bitmask);
        }
        function customDefaultsAssignIn(objValue, srcValue, key, object) {
          if (objValue === undefined2 || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
            return srcValue;
          }
          return objValue;
        }
        function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
          if (isObject2(objValue) && isObject2(srcValue)) {
            stack.set(srcValue, objValue);
            baseMerge(objValue, srcValue, undefined2, customDefaultsMerge, stack);
            stack["delete"](srcValue);
          }
          return objValue;
        }
        function customOmitClone(value) {
          return isPlainObject5(value) ? undefined2 : value;
        }
        function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
          if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
            return false;
          }
          var arrStacked = stack.get(array);
          var othStacked = stack.get(other);
          if (arrStacked && othStacked) {
            return arrStacked == other && othStacked == array;
          }
          var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined2;
          stack.set(array, other);
          stack.set(other, array);
          while (++index < arrLength) {
            var arrValue = array[index], othValue = other[index];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
            }
            if (compared !== undefined2) {
              if (compared) {
                continue;
              }
              result2 = false;
              break;
            }
            if (seen) {
              if (!arraySome(other, function(othValue2, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
                result2 = false;
                break;
              }
            } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              result2 = false;
              break;
            }
          }
          stack["delete"](array);
          stack["delete"](other);
          return result2;
        }
        function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
          switch (tag) {
            case dataViewTag:
              if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                return false;
              }
              object = object.buffer;
              other = other.buffer;
            case arrayBufferTag:
              if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
                return false;
              }
              return true;
            case boolTag:
            case dateTag:
            case numberTag:
              return eq(+object, +other);
            case errorTag:
              return object.name == other.name && object.message == other.message;
            case regexpTag:
            case stringTag:
              return object == other + "";
            case mapTag:
              var convert = mapToArray;
            case setTag:
              var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
              convert || (convert = setToArray);
              if (object.size != other.size && !isPartial) {
                return false;
              }
              var stacked = stack.get(object);
              if (stacked) {
                return stacked == other;
              }
              bitmask |= COMPARE_UNORDERED_FLAG;
              stack.set(object, other);
              var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
              stack["delete"](object);
              return result2;
            case symbolTag:
              if (symbolValueOf) {
                return symbolValueOf.call(object) == symbolValueOf.call(other);
              }
          }
          return false;
        }
        function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
          if (objLength != othLength && !isPartial) {
            return false;
          }
          var index = objLength;
          while (index--) {
            var key = objProps[index];
            if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
              return false;
            }
          }
          var objStacked = stack.get(object);
          var othStacked = stack.get(other);
          if (objStacked && othStacked) {
            return objStacked == other && othStacked == object;
          }
          var result2 = true;
          stack.set(object, other);
          stack.set(other, object);
          var skipCtor = isPartial;
          while (++index < objLength) {
            key = objProps[index];
            var objValue = object[key], othValue = other[key];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
            }
            if (!(compared === undefined2 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
              result2 = false;
              break;
            }
            skipCtor || (skipCtor = key == "constructor");
          }
          if (result2 && !skipCtor) {
            var objCtor = object.constructor, othCtor = other.constructor;
            if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
              result2 = false;
            }
          }
          stack["delete"](object);
          stack["delete"](other);
          return result2;
        }
        function flatRest(func) {
          return setToString(overRest(func, undefined2, flatten), func + "");
        }
        function getAllKeys(object) {
          return baseGetAllKeys(object, keys, getSymbols);
        }
        function getAllKeysIn(object) {
          return baseGetAllKeys(object, keysIn, getSymbolsIn);
        }
        var getData = !metaMap ? noop : function(func) {
          return metaMap.get(func);
        };
        function getFuncName(func) {
          var result2 = func.name + "", array = realNames[result2], length = hasOwnProperty.call(realNames, result2) ? array.length : 0;
          while (length--) {
            var data = array[length], otherFunc = data.func;
            if (otherFunc == null || otherFunc == func) {
              return data.name;
            }
          }
          return result2;
        }
        function getHolder(func) {
          var object = hasOwnProperty.call(lodash, "placeholder") ? lodash : func;
          return object.placeholder;
        }
        function getIteratee() {
          var result2 = lodash.iteratee || iteratee;
          result2 = result2 === iteratee ? baseIteratee : result2;
          return arguments.length ? result2(arguments[0], arguments[1]) : result2;
        }
        function getMapData(map3, key) {
          var data = map3.__data__;
          return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
        }
        function getMatchData(object) {
          var result2 = keys(object), length = result2.length;
          while (length--) {
            var key = result2[length], value = object[key];
            result2[length] = [key, value, isStrictComparable(value)];
          }
          return result2;
        }
        function getNative(object, key) {
          var value = getValue(object, key);
          return baseIsNative(value) ? value : undefined2;
        }
        function getRawTag(value) {
          var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
          try {
            value[symToStringTag] = undefined2;
            var unmasked = true;
          } catch (e) {
          }
          var result2 = nativeObjectToString.call(value);
          if (unmasked) {
            if (isOwn) {
              value[symToStringTag] = tag;
            } else {
              delete value[symToStringTag];
            }
          }
          return result2;
        }
        var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
          if (object == null) {
            return [];
          }
          object = Object2(object);
          return arrayFilter(nativeGetSymbols(object), function(symbol) {
            return propertyIsEnumerable.call(object, symbol);
          });
        };
        var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
          var result2 = [];
          while (object) {
            arrayPush(result2, getSymbols(object));
            object = getPrototype(object);
          }
          return result2;
        };
        var getTag = baseGetTag;
        if (DataView2 && getTag(new DataView2(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
          getTag = function(value) {
            var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : undefined2, ctorString = Ctor ? toSource(Ctor) : "";
            if (ctorString) {
              switch (ctorString) {
                case dataViewCtorString:
                  return dataViewTag;
                case mapCtorString:
                  return mapTag;
                case promiseCtorString:
                  return promiseTag;
                case setCtorString:
                  return setTag;
                case weakMapCtorString:
                  return weakMapTag;
              }
            }
            return result2;
          };
        }
        function getView(start4, end, transforms) {
          var index = -1, length = transforms.length;
          while (++index < length) {
            var data = transforms[index], size2 = data.size;
            switch (data.type) {
              case "drop":
                start4 += size2;
                break;
              case "dropRight":
                end -= size2;
                break;
              case "take":
                end = nativeMin(end, start4 + size2);
                break;
              case "takeRight":
                start4 = nativeMax(start4, end - size2);
                break;
            }
          }
          return { "start": start4, "end": end };
        }
        function getWrapDetails(source) {
          var match = source.match(reWrapDetails);
          return match ? match[1].split(reSplitDetails) : [];
        }
        function hasPath(object, path, hasFunc) {
          path = castPath(path, object);
          var index = -1, length = path.length, result2 = false;
          while (++index < length) {
            var key = toKey(path[index]);
            if (!(result2 = object != null && hasFunc(object, key))) {
              break;
            }
            object = object[key];
          }
          if (result2 || ++index != length) {
            return result2;
          }
          length = object == null ? 0 : object.length;
          return !!length && isLength(length) && isIndex(key, length) && (isArray5(object) || isArguments(object));
        }
        function initCloneArray(array) {
          var length = array.length, result2 = new array.constructor(length);
          if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
            result2.index = array.index;
            result2.input = array.input;
          }
          return result2;
        }
        function initCloneObject(object) {
          return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
        }
        function initCloneByTag(object, tag, isDeep) {
          var Ctor = object.constructor;
          switch (tag) {
            case arrayBufferTag:
              return cloneArrayBuffer(object);
            case boolTag:
            case dateTag:
              return new Ctor(+object);
            case dataViewTag:
              return cloneDataView(object, isDeep);
            case float32Tag:
            case float64Tag:
            case int8Tag:
            case int16Tag:
            case int32Tag:
            case uint8Tag:
            case uint8ClampedTag:
            case uint16Tag:
            case uint32Tag:
              return cloneTypedArray(object, isDeep);
            case mapTag:
              return new Ctor();
            case numberTag:
            case stringTag:
              return new Ctor(object);
            case regexpTag:
              return cloneRegExp(object);
            case setTag:
              return new Ctor();
            case symbolTag:
              return cloneSymbol(object);
          }
        }
        function insertWrapDetails(source, details) {
          var length = details.length;
          if (!length) {
            return source;
          }
          var lastIndex = length - 1;
          details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
          details = details.join(length > 2 ? ", " : " ");
          return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
        }
        function isFlattenable(value) {
          return isArray5(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
        }
        function isIndex(value, length) {
          var type2 = typeof value;
          length = length == null ? MAX_SAFE_INTEGER : length;
          return !!length && (type2 == "number" || type2 != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
        }
        function isIterateeCall(value, index, object) {
          if (!isObject2(object)) {
            return false;
          }
          var type2 = typeof index;
          if (type2 == "number" ? isArrayLike(object) && isIndex(index, object.length) : type2 == "string" && index in object) {
            return eq(object[index], value);
          }
          return false;
        }
        function isKey(value, object) {
          if (isArray5(value)) {
            return false;
          }
          var type2 = typeof value;
          if (type2 == "number" || type2 == "symbol" || type2 == "boolean" || value == null || isSymbol(value)) {
            return true;
          }
          return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object2(object);
        }
        function isKeyable(value) {
          var type2 = typeof value;
          return type2 == "string" || type2 == "number" || type2 == "symbol" || type2 == "boolean" ? value !== "__proto__" : value === null;
        }
        function isLaziable(func) {
          var funcName = getFuncName(func), other = lodash[funcName];
          if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
            return false;
          }
          if (func === other) {
            return true;
          }
          var data = getData(other);
          return !!data && func === data[0];
        }
        function isMasked(func) {
          return !!maskSrcKey && maskSrcKey in func;
        }
        var isMaskable = coreJsData ? isFunction2 : stubFalse;
        function isPrototype(value) {
          var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
          return value === proto;
        }
        function isStrictComparable(value) {
          return value === value && !isObject2(value);
        }
        function matchesStrictComparable(key, srcValue) {
          return function(object) {
            if (object == null) {
              return false;
            }
            return object[key] === srcValue && (srcValue !== undefined2 || key in Object2(object));
          };
        }
        function memoizeCapped(func) {
          var result2 = memoize(func, function(key) {
            if (cache.size === MAX_MEMOIZE_SIZE) {
              cache.clear();
            }
            return key;
          });
          var cache = result2.cache;
          return result2;
        }
        function mergeData(data, source) {
          var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
          var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
          if (!(isCommon || isCombo)) {
            return data;
          }
          if (srcBitmask & WRAP_BIND_FLAG) {
            data[2] = source[2];
            newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
          }
          var value = source[3];
          if (value) {
            var partials = data[3];
            data[3] = partials ? composeArgs(partials, value, source[4]) : value;
            data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
          }
          value = source[5];
          if (value) {
            partials = data[5];
            data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
            data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
          }
          value = source[7];
          if (value) {
            data[7] = value;
          }
          if (srcBitmask & WRAP_ARY_FLAG) {
            data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
          }
          if (data[9] == null) {
            data[9] = source[9];
          }
          data[0] = source[0];
          data[1] = newBitmask;
          return data;
        }
        function nativeKeysIn(object) {
          var result2 = [];
          if (object != null) {
            for (var key in Object2(object)) {
              result2.push(key);
            }
          }
          return result2;
        }
        function objectToString(value) {
          return nativeObjectToString.call(value);
        }
        function overRest(func, start4, transform4) {
          start4 = nativeMax(start4 === undefined2 ? func.length - 1 : start4, 0);
          return function() {
            var args = arguments, index = -1, length = nativeMax(args.length - start4, 0), array = Array2(length);
            while (++index < length) {
              array[index] = args[start4 + index];
            }
            index = -1;
            var otherArgs = Array2(start4 + 1);
            while (++index < start4) {
              otherArgs[index] = args[index];
            }
            otherArgs[start4] = transform4(array);
            return apply(func, this, otherArgs);
          };
        }
        function parent(object, path) {
          return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
        }
        function reorder(array, indexes) {
          var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
          while (length--) {
            var index = indexes[length];
            array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined2;
          }
          return array;
        }
        function safeGet(object, key) {
          if (key === "constructor" && typeof object[key] === "function") {
            return;
          }
          if (key == "__proto__") {
            return;
          }
          return object[key];
        }
        var setData = shortOut(baseSetData);
        var setTimeout2 = ctxSetTimeout || function(func, wait) {
          return root.setTimeout(func, wait);
        };
        var setToString = shortOut(baseSetToString);
        function setWrapToString(wrapper, reference, bitmask) {
          var source = reference + "";
          return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
        }
        function shortOut(func) {
          var count = 0, lastCalled = 0;
          return function() {
            var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
            lastCalled = stamp;
            if (remaining > 0) {
              if (++count >= HOT_COUNT) {
                return arguments[0];
              }
            } else {
              count = 0;
            }
            return func.apply(undefined2, arguments);
          };
        }
        function shuffleSelf(array, size2) {
          var index = -1, length = array.length, lastIndex = length - 1;
          size2 = size2 === undefined2 ? length : size2;
          while (++index < size2) {
            var rand = baseRandom(index, lastIndex), value = array[rand];
            array[rand] = array[index];
            array[index] = value;
          }
          array.length = size2;
          return array;
        }
        var stringToPath = memoizeCapped(function(string) {
          var result2 = [];
          if (string.charCodeAt(0) === 46) {
            result2.push("");
          }
          string.replace(rePropName, function(match, number, quote, subString) {
            result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
          });
          return result2;
        });
        function toKey(value) {
          if (typeof value == "string" || isSymbol(value)) {
            return value;
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function toSource(func) {
          if (func != null) {
            try {
              return funcToString.call(func);
            } catch (e) {
            }
            try {
              return func + "";
            } catch (e) {
            }
          }
          return "";
        }
        function updateWrapDetails(details, bitmask) {
          arrayEach(wrapFlags, function(pair) {
            var value = "_." + pair[0];
            if (bitmask & pair[1] && !arrayIncludes(details, value)) {
              details.push(value);
            }
          });
          return details.sort();
        }
        function wrapperClone(wrapper) {
          if (wrapper instanceof LazyWrapper) {
            return wrapper.clone();
          }
          var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
          result2.__actions__ = copyArray(wrapper.__actions__);
          result2.__index__ = wrapper.__index__;
          result2.__values__ = wrapper.__values__;
          return result2;
        }
        function chunk(array, size2, guard) {
          if (guard ? isIterateeCall(array, size2, guard) : size2 === undefined2) {
            size2 = 1;
          } else {
            size2 = nativeMax(toInteger(size2), 0);
          }
          var length = array == null ? 0 : array.length;
          if (!length || size2 < 1) {
            return [];
          }
          var index = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
          while (index < length) {
            result2[resIndex++] = baseSlice(array, index, index += size2);
          }
          return result2;
        }
        function compact(array) {
          var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index];
            if (value) {
              result2[resIndex++] = value;
            }
          }
          return result2;
        }
        function concat() {
          var length = arguments.length;
          if (!length) {
            return [];
          }
          var args = Array2(length - 1), array = arguments[0], index = length;
          while (index--) {
            args[index - 1] = arguments[index];
          }
          return arrayPush(isArray5(array) ? copyArray(array) : [array], baseFlatten(args, 1));
        }
        var difference = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
        });
        var differenceBy = baseRest(function(array, values2) {
          var iteratee2 = last(values2);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
        });
        var differenceWith = baseRest(function(array, values2) {
          var comparator = last(values2);
          if (isArrayLikeObject(comparator)) {
            comparator = undefined2;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), undefined2, comparator) : [];
        });
        function drop(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function dropRight(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function dropRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
        }
        function dropWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
        }
        function fill(array, value, start4, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (start4 && typeof start4 != "number" && isIterateeCall(array, value, start4)) {
            start4 = 0;
            end = length;
          }
          return baseFill(array, value, start4, end);
        }
        function findIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index);
        }
        function findLastIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length - 1;
          if (fromIndex !== undefined2) {
            index = toInteger(fromIndex);
            index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index, true);
        }
        function flatten(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, 1) : [];
        }
        function flattenDeep(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, INFINITY) : [];
        }
        function flattenDepth(array, depth) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          depth = depth === undefined2 ? 1 : toInteger(depth);
          return baseFlatten(array, depth);
        }
        function fromPairs(pairs2) {
          var index = -1, length = pairs2 == null ? 0 : pairs2.length, result2 = {};
          while (++index < length) {
            var pair = pairs2[index];
            result2[pair[0]] = pair[1];
          }
          return result2;
        }
        function head(array) {
          return array && array.length ? array[0] : undefined2;
        }
        function indexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseIndexOf(array, value, index);
        }
        function initial2(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 0, -1) : [];
        }
        var intersection = baseRest(function(arrays) {
          var mapped = arrayMap(arrays, castArrayLikeObject);
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
        });
        var intersectionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          if (iteratee2 === last(mapped)) {
            iteratee2 = undefined2;
          } else {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
        });
        var intersectionWith = baseRest(function(arrays) {
          var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          if (comparator) {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined2, comparator) : [];
        });
        function join(array, separator) {
          return array == null ? "" : nativeJoin.call(array, separator);
        }
        function last(array) {
          var length = array == null ? 0 : array.length;
          return length ? array[length - 1] : undefined2;
        }
        function lastIndexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length;
          if (fromIndex !== undefined2) {
            index = toInteger(fromIndex);
            index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
        }
        function nth(array, n) {
          return array && array.length ? baseNth(array, toInteger(n)) : undefined2;
        }
        var pull = baseRest(pullAll);
        function pullAll(array, values2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
        }
        function pullAllBy(array, values2, iteratee2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
        }
        function pullAllWith(array, values2, comparator) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined2, comparator) : array;
        }
        var pullAt = flatRest(function(array, indexes) {
          var length = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
          basePullAt(array, arrayMap(indexes, function(index) {
            return isIndex(index, length) ? +index : index;
          }).sort(compareAscending));
          return result2;
        });
        function remove(array, predicate) {
          var result2 = [];
          if (!(array && array.length)) {
            return result2;
          }
          var index = -1, indexes = [], length = array.length;
          predicate = getIteratee(predicate, 3);
          while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
              result2.push(value);
              indexes.push(index);
            }
          }
          basePullAt(array, indexes);
          return result2;
        }
        function reverse(array) {
          return array == null ? array : nativeReverse.call(array);
        }
        function slice(array, start4, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (end && typeof end != "number" && isIterateeCall(array, start4, end)) {
            start4 = 0;
            end = length;
          } else {
            start4 = start4 == null ? 0 : toInteger(start4);
            end = end === undefined2 ? length : toInteger(end);
          }
          return baseSlice(array, start4, end);
        }
        function sortedIndex(array, value) {
          return baseSortedIndex(array, value);
        }
        function sortedIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2));
        }
        function sortedIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value);
            if (index < length && eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedLastIndex(array, value) {
          return baseSortedIndex(array, value, true);
        }
        function sortedLastIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2), true);
        }
        function sortedLastIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value, true) - 1;
            if (eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedUniq(array) {
          return array && array.length ? baseSortedUniq(array) : [];
        }
        function sortedUniqBy(array, iteratee2) {
          return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function tail(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 1, length) : [];
        }
        function take(array, n, guard) {
          if (!(array && array.length)) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function takeRight(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function takeRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
        }
        function takeWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
        }
        var union = baseRest(function(arrays) {
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
        });
        var unionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
        });
        var unionWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined2, comparator);
        });
        function uniq(array) {
          return array && array.length ? baseUniq(array) : [];
        }
        function uniqBy(array, iteratee2) {
          return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function uniqWith(array, comparator) {
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return array && array.length ? baseUniq(array, undefined2, comparator) : [];
        }
        function unzip(array) {
          if (!(array && array.length)) {
            return [];
          }
          var length = 0;
          array = arrayFilter(array, function(group) {
            if (isArrayLikeObject(group)) {
              length = nativeMax(group.length, length);
              return true;
            }
          });
          return baseTimes(length, function(index) {
            return arrayMap(array, baseProperty(index));
          });
        }
        function unzipWith(array, iteratee2) {
          if (!(array && array.length)) {
            return [];
          }
          var result2 = unzip(array);
          if (iteratee2 == null) {
            return result2;
          }
          return arrayMap(result2, function(group) {
            return apply(iteratee2, undefined2, group);
          });
        }
        var without = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
        });
        var xor = baseRest(function(arrays) {
          return baseXor(arrayFilter(arrays, isArrayLikeObject));
        });
        var xorBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
        });
        var xorWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined2, comparator);
        });
        var zip = baseRest(unzip);
        function zipObject(props, values2) {
          return baseZipObject(props || [], values2 || [], assignValue);
        }
        function zipObjectDeep(props, values2) {
          return baseZipObject(props || [], values2 || [], baseSet);
        }
        var zipWith = baseRest(function(arrays) {
          var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined2;
          iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined2;
          return unzipWith(arrays, iteratee2);
        });
        function chain2(value) {
          var result2 = lodash(value);
          result2.__chain__ = true;
          return result2;
        }
        function tap(value, interceptor) {
          interceptor(value);
          return value;
        }
        function thru(value, interceptor) {
          return interceptor(value);
        }
        var wrapperAt = flatRest(function(paths) {
          var length = paths.length, start4 = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
            return baseAt(object, paths);
          };
          if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start4)) {
            return this.thru(interceptor);
          }
          value = value.slice(start4, +start4 + (length ? 1 : 0));
          value.__actions__.push({
            "func": thru,
            "args": [interceptor],
            "thisArg": undefined2
          });
          return new LodashWrapper(value, this.__chain__).thru(function(array) {
            if (length && !array.length) {
              array.push(undefined2);
            }
            return array;
          });
        });
        function wrapperChain() {
          return chain2(this);
        }
        function wrapperCommit() {
          return new LodashWrapper(this.value(), this.__chain__);
        }
        function wrapperNext() {
          if (this.__values__ === undefined2) {
            this.__values__ = toArray2(this.value());
          }
          var done = this.__index__ >= this.__values__.length, value = done ? undefined2 : this.__values__[this.__index__++];
          return { "done": done, "value": value };
        }
        function wrapperToIterator() {
          return this;
        }
        function wrapperPlant(value) {
          var result2, parent2 = this;
          while (parent2 instanceof baseLodash) {
            var clone3 = wrapperClone(parent2);
            clone3.__index__ = 0;
            clone3.__values__ = undefined2;
            if (result2) {
              previous.__wrapped__ = clone3;
            } else {
              result2 = clone3;
            }
            var previous = clone3;
            parent2 = parent2.__wrapped__;
          }
          previous.__wrapped__ = value;
          return result2;
        }
        function wrapperReverse() {
          var value = this.__wrapped__;
          if (value instanceof LazyWrapper) {
            var wrapped = value;
            if (this.__actions__.length) {
              wrapped = new LazyWrapper(this);
            }
            wrapped = wrapped.reverse();
            wrapped.__actions__.push({
              "func": thru,
              "args": [reverse],
              "thisArg": undefined2
            });
            return new LodashWrapper(wrapped, this.__chain__);
          }
          return this.thru(reverse);
        }
        function wrapperValue() {
          return baseWrapperValue(this.__wrapped__, this.__actions__);
        }
        var countBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            ++result2[key];
          } else {
            baseAssignValue(result2, key, 1);
          }
        });
        function every(collection, predicate, guard) {
          var func = isArray5(collection) ? arrayEvery : baseEvery;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined2;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        function filter(collection, predicate) {
          var func = isArray5(collection) ? arrayFilter : baseFilter;
          return func(collection, getIteratee(predicate, 3));
        }
        var find = createFind(findIndex);
        var findLast = createFind(findLastIndex);
        function flatMap(collection, iteratee2) {
          return baseFlatten(map2(collection, iteratee2), 1);
        }
        function flatMapDeep(collection, iteratee2) {
          return baseFlatten(map2(collection, iteratee2), INFINITY);
        }
        function flatMapDepth(collection, iteratee2, depth) {
          depth = depth === undefined2 ? 1 : toInteger(depth);
          return baseFlatten(map2(collection, iteratee2), depth);
        }
        function forEach2(collection, iteratee2) {
          var func = isArray5(collection) ? arrayEach : baseEach;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function forEachRight(collection, iteratee2) {
          var func = isArray5(collection) ? arrayEachRight : baseEachRight;
          return func(collection, getIteratee(iteratee2, 3));
        }
        var groupBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            result2[key].push(value);
          } else {
            baseAssignValue(result2, key, [value]);
          }
        });
        function includes(collection, value, fromIndex, guard) {
          collection = isArrayLike(collection) ? collection : values(collection);
          fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
          var length = collection.length;
          if (fromIndex < 0) {
            fromIndex = nativeMax(length + fromIndex, 0);
          }
          return isString5(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
        }
        var invokeMap = baseRest(function(collection, path, args) {
          var index = -1, isFunc = typeof path == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value) {
            result2[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
          });
          return result2;
        });
        var keyBy = createAggregator(function(result2, value, key) {
          baseAssignValue(result2, key, value);
        });
        function map2(collection, iteratee2) {
          var func = isArray5(collection) ? arrayMap : baseMap;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function orderBy(collection, iteratees, orders, guard) {
          if (collection == null) {
            return [];
          }
          if (!isArray5(iteratees)) {
            iteratees = iteratees == null ? [] : [iteratees];
          }
          orders = guard ? undefined2 : orders;
          if (!isArray5(orders)) {
            orders = orders == null ? [] : [orders];
          }
          return baseOrderBy(collection, iteratees, orders);
        }
        var partition = createAggregator(function(result2, value, key) {
          result2[key ? 0 : 1].push(value);
        }, function() {
          return [[], []];
        });
        function reduce(collection, iteratee2, accumulator) {
          var func = isArray5(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
        }
        function reduceRight(collection, iteratee2, accumulator) {
          var func = isArray5(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
        }
        function reject(collection, predicate) {
          var func = isArray5(collection) ? arrayFilter : baseFilter;
          return func(collection, negate(getIteratee(predicate, 3)));
        }
        function sample(collection) {
          var func = isArray5(collection) ? arraySample : baseSample;
          return func(collection);
        }
        function sampleSize(collection, n, guard) {
          if (guard ? isIterateeCall(collection, n, guard) : n === undefined2) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          var func = isArray5(collection) ? arraySampleSize : baseSampleSize;
          return func(collection, n);
        }
        function shuffle(collection) {
          var func = isArray5(collection) ? arrayShuffle : baseShuffle;
          return func(collection);
        }
        function size(collection) {
          if (collection == null) {
            return 0;
          }
          if (isArrayLike(collection)) {
            return isString5(collection) ? stringSize(collection) : collection.length;
          }
          var tag = getTag(collection);
          if (tag == mapTag || tag == setTag) {
            return collection.size;
          }
          return baseKeys(collection).length;
        }
        function some3(collection, predicate, guard) {
          var func = isArray5(collection) ? arraySome : baseSome;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined2;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        var sortBy = baseRest(function(collection, iteratees) {
          if (collection == null) {
            return [];
          }
          var length = iteratees.length;
          if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
            iteratees = [];
          } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
            iteratees = [iteratees[0]];
          }
          return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
        });
        var now = ctxNow || function() {
          return root.Date.now();
        };
        function after(n, func) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n < 1) {
              return func.apply(this, arguments);
            }
          };
        }
        function ary(func, n, guard) {
          n = guard ? undefined2 : n;
          n = func && n == null ? func.length : n;
          return createWrap(func, WRAP_ARY_FLAG, undefined2, undefined2, undefined2, undefined2, n);
        }
        function before(n, func) {
          var result2;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n > 0) {
              result2 = func.apply(this, arguments);
            }
            if (n <= 1) {
              func = undefined2;
            }
            return result2;
          };
        }
        var bind = baseRest(function(func, thisArg, partials) {
          var bitmask = WRAP_BIND_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bind));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(func, bitmask, thisArg, partials, holders);
        });
        var bindKey = baseRest(function(object, key, partials) {
          var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bindKey));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(key, bitmask, object, partials, holders);
        });
        function curry(func, arity, guard) {
          arity = guard ? undefined2 : arity;
          var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
          result2.placeholder = curry.placeholder;
          return result2;
        }
        function curryRight(func, arity, guard) {
          arity = guard ? undefined2 : arity;
          var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
          result2.placeholder = curryRight.placeholder;
          return result2;
        }
        function debounce(func, wait, options) {
          var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          wait = toNumber(wait) || 0;
          if (isObject2(options)) {
            leading = !!options.leading;
            maxing = "maxWait" in options;
            maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          function invokeFunc(time) {
            var args = lastArgs, thisArg = lastThis;
            lastArgs = lastThis = undefined2;
            lastInvokeTime = time;
            result2 = func.apply(thisArg, args);
            return result2;
          }
          function leadingEdge(time) {
            lastInvokeTime = time;
            timerId = setTimeout2(timerExpired, wait);
            return leading ? invokeFunc(time) : result2;
          }
          function remainingWait(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
            return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
          }
          function shouldInvoke(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
            return lastCallTime === undefined2 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
          }
          function timerExpired() {
            var time = now();
            if (shouldInvoke(time)) {
              return trailingEdge(time);
            }
            timerId = setTimeout2(timerExpired, remainingWait(time));
          }
          function trailingEdge(time) {
            timerId = undefined2;
            if (trailing && lastArgs) {
              return invokeFunc(time);
            }
            lastArgs = lastThis = undefined2;
            return result2;
          }
          function cancel() {
            if (timerId !== undefined2) {
              clearTimeout2(timerId);
            }
            lastInvokeTime = 0;
            lastArgs = lastCallTime = lastThis = timerId = undefined2;
          }
          function flush() {
            return timerId === undefined2 ? result2 : trailingEdge(now());
          }
          function debounced() {
            var time = now(), isInvoking = shouldInvoke(time);
            lastArgs = arguments;
            lastThis = this;
            lastCallTime = time;
            if (isInvoking) {
              if (timerId === undefined2) {
                return leadingEdge(lastCallTime);
              }
              if (maxing) {
                clearTimeout2(timerId);
                timerId = setTimeout2(timerExpired, wait);
                return invokeFunc(lastCallTime);
              }
            }
            if (timerId === undefined2) {
              timerId = setTimeout2(timerExpired, wait);
            }
            return result2;
          }
          debounced.cancel = cancel;
          debounced.flush = flush;
          return debounced;
        }
        var defer = baseRest(function(func, args) {
          return baseDelay(func, 1, args);
        });
        var delay = baseRest(function(func, wait, args) {
          return baseDelay(func, toNumber(wait) || 0, args);
        });
        function flip(func) {
          return createWrap(func, WRAP_FLIP_FLAG);
        }
        function memoize(func, resolver) {
          if (typeof func != "function" || resolver != null && typeof resolver != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          var memoized = function() {
            var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
            if (cache.has(key)) {
              return cache.get(key);
            }
            var result2 = func.apply(this, args);
            memoized.cache = cache.set(key, result2) || cache;
            return result2;
          };
          memoized.cache = new (memoize.Cache || MapCache)();
          return memoized;
        }
        memoize.Cache = MapCache;
        function negate(predicate) {
          if (typeof predicate != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return !predicate.call(this);
              case 1:
                return !predicate.call(this, args[0]);
              case 2:
                return !predicate.call(this, args[0], args[1]);
              case 3:
                return !predicate.call(this, args[0], args[1], args[2]);
            }
            return !predicate.apply(this, args);
          };
        }
        function once(func) {
          return before(2, func);
        }
        var overArgs = castRest(function(func, transforms) {
          transforms = transforms.length == 1 && isArray5(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
          var funcsLength = transforms.length;
          return baseRest(function(args) {
            var index = -1, length = nativeMin(args.length, funcsLength);
            while (++index < length) {
              args[index] = transforms[index].call(this, args[index]);
            }
            return apply(func, this, args);
          });
        });
        var partial = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partial));
          return createWrap(func, WRAP_PARTIAL_FLAG, undefined2, partials, holders);
        });
        var partialRight = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partialRight));
          return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined2, partials, holders);
        });
        var rearg = flatRest(function(func, indexes) {
          return createWrap(func, WRAP_REARG_FLAG, undefined2, undefined2, undefined2, indexes);
        });
        function rest(func, start4) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          start4 = start4 === undefined2 ? start4 : toInteger(start4);
          return baseRest(func, start4);
        }
        function spread(func, start4) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          start4 = start4 == null ? 0 : nativeMax(toInteger(start4), 0);
          return baseRest(function(args) {
            var array = args[start4], otherArgs = castSlice(args, 0, start4);
            if (array) {
              arrayPush(otherArgs, array);
            }
            return apply(func, this, otherArgs);
          });
        }
        function throttle(func, wait, options) {
          var leading = true, trailing = true;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          if (isObject2(options)) {
            leading = "leading" in options ? !!options.leading : leading;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          return debounce(func, wait, {
            "leading": leading,
            "maxWait": wait,
            "trailing": trailing
          });
        }
        function unary(func) {
          return ary(func, 1);
        }
        function wrap2(value, wrapper) {
          return partial(castFunction(wrapper), value);
        }
        function castArray() {
          if (!arguments.length) {
            return [];
          }
          var value = arguments[0];
          return isArray5(value) ? value : [value];
        }
        function clone2(value) {
          return baseClone(value, CLONE_SYMBOLS_FLAG);
        }
        function cloneWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
        }
        function cloneDeep2(value) {
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
        }
        function cloneDeepWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
        }
        function conformsTo(object, source) {
          return source == null || baseConformsTo(object, source, keys(source));
        }
        function eq(value, other) {
          return value === other || value !== value && other !== other;
        }
        var gt = createRelationalOperation(baseGt);
        var gte = createRelationalOperation(function(value, other) {
          return value >= other;
        });
        var isArguments = baseIsArguments(function() {
          return arguments;
        }()) ? baseIsArguments : function(value) {
          return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
        };
        var isArray5 = Array2.isArray;
        var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
        function isArrayLike(value) {
          return value != null && isLength(value.length) && !isFunction2(value);
        }
        function isArrayLikeObject(value) {
          return isObjectLike(value) && isArrayLike(value);
        }
        function isBoolean2(value) {
          return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
        }
        var isBuffer = nativeIsBuffer || stubFalse;
        var isDate2 = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
        function isElement(value) {
          return isObjectLike(value) && value.nodeType === 1 && !isPlainObject5(value);
        }
        function isEmpty(value) {
          if (value == null) {
            return true;
          }
          if (isArrayLike(value) && (isArray5(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
            return !value.length;
          }
          var tag = getTag(value);
          if (tag == mapTag || tag == setTag) {
            return !value.size;
          }
          if (isPrototype(value)) {
            return !baseKeys(value).length;
          }
          for (var key in value) {
            if (hasOwnProperty.call(value, key)) {
              return false;
            }
          }
          return true;
        }
        function isEqual3(value, other) {
          return baseIsEqual(value, other);
        }
        function isEqualWith(value, other, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          var result2 = customizer ? customizer(value, other) : undefined2;
          return result2 === undefined2 ? baseIsEqual(value, other, undefined2, customizer) : !!result2;
        }
        function isError2(value) {
          if (!isObjectLike(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject5(value);
        }
        function isFinite2(value) {
          return typeof value == "number" && nativeIsFinite(value);
        }
        function isFunction2(value) {
          if (!isObject2(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
        }
        function isInteger2(value) {
          return typeof value == "number" && value == toInteger(value);
        }
        function isLength(value) {
          return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }
        function isObject2(value) {
          var type2 = typeof value;
          return value != null && (type2 == "object" || type2 == "function");
        }
        function isObjectLike(value) {
          return value != null && typeof value == "object";
        }
        var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
        function isMatch(object, source) {
          return object === source || baseIsMatch(object, source, getMatchData(source));
        }
        function isMatchWith(object, source, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseIsMatch(object, source, getMatchData(source), customizer);
        }
        function isNaN2(value) {
          return isNumber2(value) && value != +value;
        }
        function isNative(value) {
          if (isMaskable(value)) {
            throw new Error2(CORE_ERROR_TEXT);
          }
          return baseIsNative(value);
        }
        function isNull2(value) {
          return value === null;
        }
        function isNil2(value) {
          return value == null;
        }
        function isNumber2(value) {
          return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
        }
        function isPlainObject5(value) {
          if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
            return false;
          }
          var proto = getPrototype(value);
          if (proto === null) {
            return true;
          }
          var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
          return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
        }
        var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
        function isSafeInteger(value) {
          return isInteger2(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
        }
        var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
        function isString5(value) {
          return typeof value == "string" || !isArray5(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
        }
        function isSymbol(value) {
          return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
        }
        var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
        function isUndefined4(value) {
          return value === undefined2;
        }
        function isWeakMap(value) {
          return isObjectLike(value) && getTag(value) == weakMapTag;
        }
        function isWeakSet(value) {
          return isObjectLike(value) && baseGetTag(value) == weakSetTag;
        }
        var lt = createRelationalOperation(baseLt);
        var lte = createRelationalOperation(function(value, other) {
          return value <= other;
        });
        function toArray2(value) {
          if (!value) {
            return [];
          }
          if (isArrayLike(value)) {
            return isString5(value) ? stringToArray(value) : copyArray(value);
          }
          if (symIterator && value[symIterator]) {
            return iteratorToArray(value[symIterator]());
          }
          var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
          return func(value);
        }
        function toFinite(value) {
          if (!value) {
            return value === 0 ? value : 0;
          }
          value = toNumber(value);
          if (value === INFINITY || value === -INFINITY) {
            var sign = value < 0 ? -1 : 1;
            return sign * MAX_INTEGER;
          }
          return value === value ? value : 0;
        }
        function toInteger(value) {
          var result2 = toFinite(value), remainder = result2 % 1;
          return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
        }
        function toLength(value) {
          return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
        }
        function toNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          if (isObject2(value)) {
            var other = typeof value.valueOf == "function" ? value.valueOf() : value;
            value = isObject2(other) ? other + "" : other;
          }
          if (typeof value != "string") {
            return value === 0 ? value : +value;
          }
          value = baseTrim(value);
          var isBinary2 = reIsBinary.test(value);
          return isBinary2 || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary2 ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
        }
        function toPlainObject(value) {
          return copyObject(value, keysIn(value));
        }
        function toSafeInteger(value) {
          return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
        }
        function toString2(value) {
          return value == null ? "" : baseToString(value);
        }
        var assign = createAssigner(function(object, source) {
          if (isPrototype(source) || isArrayLike(source)) {
            copyObject(source, keys(source), object);
            return;
          }
          for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
              assignValue(object, key, source[key]);
            }
          }
        });
        var assignIn = createAssigner(function(object, source) {
          copyObject(source, keysIn(source), object);
        });
        var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keysIn(source), object, customizer);
        });
        var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keys(source), object, customizer);
        });
        var at = flatRest(baseAt);
        function create(prototype, properties) {
          var result2 = baseCreate(prototype);
          return properties == null ? result2 : baseAssign(result2, properties);
        }
        var defaults = baseRest(function(object, sources) {
          object = Object2(object);
          var index = -1;
          var length = sources.length;
          var guard = length > 2 ? sources[2] : undefined2;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            length = 1;
          }
          while (++index < length) {
            var source = sources[index];
            var props = keysIn(source);
            var propsIndex = -1;
            var propsLength = props.length;
            while (++propsIndex < propsLength) {
              var key = props[propsIndex];
              var value = object[key];
              if (value === undefined2 || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
                object[key] = source[key];
              }
            }
          }
          return object;
        });
        var defaultsDeep = baseRest(function(args) {
          args.push(undefined2, customDefaultsMerge);
          return apply(mergeWith, undefined2, args);
        });
        function findKey2(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
        }
        function findLastKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
        }
        function forIn(object, iteratee2) {
          return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn);
        }
        function forInRight(object, iteratee2) {
          return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn);
        }
        function forOwn2(object, iteratee2) {
          return object && baseForOwn(object, getIteratee(iteratee2, 3));
        }
        function forOwnRight(object, iteratee2) {
          return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
        }
        function functions(object) {
          return object == null ? [] : baseFunctions(object, keys(object));
        }
        function functionsIn(object) {
          return object == null ? [] : baseFunctions(object, keysIn(object));
        }
        function get5(object, path, defaultValue) {
          var result2 = object == null ? undefined2 : baseGet(object, path);
          return result2 === undefined2 ? defaultValue : result2;
        }
        function has3(object, path) {
          return object != null && hasPath(object, path, baseHas);
        }
        function hasIn(object, path) {
          return object != null && hasPath(object, path, baseHasIn);
        }
        var invert2 = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          result2[value] = key;
        }, constant(identity));
        var invertBy = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          if (hasOwnProperty.call(result2, value)) {
            result2[value].push(key);
          } else {
            result2[value] = [key];
          }
        }, getIteratee);
        var invoke = baseRest(baseInvoke);
        function keys(object) {
          return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
        }
        function keysIn(object) {
          return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
        }
        function mapKeys2(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result2, iteratee2(value, key, object2), value);
          });
          return result2;
        }
        function mapValues(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result2, key, iteratee2(value, key, object2));
          });
          return result2;
        }
        var merge4 = createAssigner(function(object, source, srcIndex) {
          baseMerge(object, source, srcIndex);
        });
        var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
          baseMerge(object, source, srcIndex, customizer);
        });
        var omit2 = flatRest(function(object, paths) {
          var result2 = {};
          if (object == null) {
            return result2;
          }
          var isDeep = false;
          paths = arrayMap(paths, function(path) {
            path = castPath(path, object);
            isDeep || (isDeep = path.length > 1);
            return path;
          });
          copyObject(object, getAllKeysIn(object), result2);
          if (isDeep) {
            result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
          }
          var length = paths.length;
          while (length--) {
            baseUnset(result2, paths[length]);
          }
          return result2;
        });
        function omitBy4(object, predicate) {
          return pickBy2(object, negate(getIteratee(predicate)));
        }
        var pick3 = flatRest(function(object, paths) {
          return object == null ? {} : basePick(object, paths);
        });
        function pickBy2(object, predicate) {
          if (object == null) {
            return {};
          }
          var props = arrayMap(getAllKeysIn(object), function(prop) {
            return [prop];
          });
          predicate = getIteratee(predicate);
          return basePickBy(object, props, function(value, path) {
            return predicate(value, path[0]);
          });
        }
        function result(object, path, defaultValue) {
          path = castPath(path, object);
          var index = -1, length = path.length;
          if (!length) {
            length = 1;
            object = undefined2;
          }
          while (++index < length) {
            var value = object == null ? undefined2 : object[toKey(path[index])];
            if (value === undefined2) {
              index = length;
              value = defaultValue;
            }
            object = isFunction2(value) ? value.call(object) : value;
          }
          return object;
        }
        function set8(object, path, value) {
          return object == null ? object : baseSet(object, path, value);
        }
        function setWith(object, path, value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return object == null ? object : baseSet(object, path, value, customizer);
        }
        var toPairs = createToPairs(keys);
        var toPairsIn = createToPairs(keysIn);
        function transform3(object, iteratee2, accumulator) {
          var isArr = isArray5(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
          iteratee2 = getIteratee(iteratee2, 4);
          if (accumulator == null) {
            var Ctor = object && object.constructor;
            if (isArrLike) {
              accumulator = isArr ? new Ctor() : [];
            } else if (isObject2(object)) {
              accumulator = isFunction2(Ctor) ? baseCreate(getPrototype(object)) : {};
            } else {
              accumulator = {};
            }
          }
          (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object2) {
            return iteratee2(accumulator, value, index, object2);
          });
          return accumulator;
        }
        function unset(object, path) {
          return object == null ? true : baseUnset(object, path);
        }
        function update(object, path, updater) {
          return object == null ? object : baseUpdate(object, path, castFunction(updater));
        }
        function updateWith(object, path, updater, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
        }
        function values(object) {
          return object == null ? [] : baseValues(object, keys(object));
        }
        function valuesIn(object) {
          return object == null ? [] : baseValues(object, keysIn(object));
        }
        function clamp(number, lower, upper) {
          if (upper === undefined2) {
            upper = lower;
            lower = undefined2;
          }
          if (upper !== undefined2) {
            upper = toNumber(upper);
            upper = upper === upper ? upper : 0;
          }
          if (lower !== undefined2) {
            lower = toNumber(lower);
            lower = lower === lower ? lower : 0;
          }
          return baseClamp(toNumber(number), lower, upper);
        }
        function inRange(number, start4, end) {
          start4 = toFinite(start4);
          if (end === undefined2) {
            end = start4;
            start4 = 0;
          } else {
            end = toFinite(end);
          }
          number = toNumber(number);
          return baseInRange(number, start4, end);
        }
        function random(lower, upper, floating) {
          if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
            upper = floating = undefined2;
          }
          if (floating === undefined2) {
            if (typeof upper == "boolean") {
              floating = upper;
              upper = undefined2;
            } else if (typeof lower == "boolean") {
              floating = lower;
              lower = undefined2;
            }
          }
          if (lower === undefined2 && upper === undefined2) {
            lower = 0;
            upper = 1;
          } else {
            lower = toFinite(lower);
            if (upper === undefined2) {
              upper = lower;
              lower = 0;
            } else {
              upper = toFinite(upper);
            }
          }
          if (lower > upper) {
            var temp = lower;
            lower = upper;
            upper = temp;
          }
          if (floating || lower % 1 || upper % 1) {
            var rand = nativeRandom();
            return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
          }
          return baseRandom(lower, upper);
        }
        var camelCase = createCompounder(function(result2, word, index) {
          word = word.toLowerCase();
          return result2 + (index ? capitalize(word) : word);
        });
        function capitalize(string) {
          return upperFirst(toString2(string).toLowerCase());
        }
        function deburr(string) {
          string = toString2(string);
          return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
        }
        function endsWith(string, target, position) {
          string = toString2(string);
          target = baseToString(target);
          var length = string.length;
          position = position === undefined2 ? length : baseClamp(toInteger(position), 0, length);
          var end = position;
          position -= target.length;
          return position >= 0 && string.slice(position, end) == target;
        }
        function escape2(string) {
          string = toString2(string);
          return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
        }
        function escapeRegExp(string) {
          string = toString2(string);
          return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
        }
        var kebabCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "-" : "") + word.toLowerCase();
        });
        var lowerCase2 = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toLowerCase();
        });
        var lowerFirst = createCaseFirst("toLowerCase");
        function pad(string, length, chars) {
          string = toString2(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          if (!length || strLength >= length) {
            return string;
          }
          var mid = (length - strLength) / 2;
          return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
        }
        function padEnd(string, length, chars) {
          string = toString2(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
        }
        function padStart2(string, length, chars) {
          string = toString2(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
        }
        function parseInt2(string, radix, guard) {
          if (guard || radix == null) {
            radix = 0;
          } else if (radix) {
            radix = +radix;
          }
          return nativeParseInt(toString2(string).replace(reTrimStart, ""), radix || 0);
        }
        function repeat2(string, n, guard) {
          if (guard ? isIterateeCall(string, n, guard) : n === undefined2) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          return baseRepeat(toString2(string), n);
        }
        function replace2() {
          var args = arguments, string = toString2(args[0]);
          return args.length < 3 ? string : string.replace(args[1], args[2]);
        }
        var snakeCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "_" : "") + word.toLowerCase();
        });
        function split(string, separator, limit) {
          if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {
            separator = limit = undefined2;
          }
          limit = limit === undefined2 ? MAX_ARRAY_LENGTH : limit >>> 0;
          if (!limit) {
            return [];
          }
          string = toString2(string);
          if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
            separator = baseToString(separator);
            if (!separator && hasUnicode(string)) {
              return castSlice(stringToArray(string), 0, limit);
            }
          }
          return string.split(separator, limit);
        }
        var startCase2 = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + upperFirst(word);
        });
        function startsWith(string, target, position) {
          string = toString2(string);
          position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
          target = baseToString(target);
          return string.slice(position, position + target.length) == target;
        }
        function template(string, options, guard) {
          var settings = lodash.templateSettings;
          if (guard && isIterateeCall(string, options, guard)) {
            options = undefined2;
          }
          string = toString2(string);
          options = assignInWith({}, options, settings, customDefaultsAssignIn);
          var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
          var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
          var reDelimiters = RegExp2(
            (options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$",
            "g"
          );
          var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
          string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
            interpolateValue || (interpolateValue = esTemplateValue);
            source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
            if (escapeValue) {
              isEscaping = true;
              source += "' +\n__e(" + escapeValue + ") +\n'";
            }
            if (evaluateValue) {
              isEvaluating = true;
              source += "';\n" + evaluateValue + ";\n__p += '";
            }
            if (interpolateValue) {
              source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
            }
            index = offset + match.length;
            return match;
          });
          source += "';\n";
          var variable = hasOwnProperty.call(options, "variable") && options.variable;
          if (!variable) {
            source = "with (obj) {\n" + source + "\n}\n";
          } else if (reForbiddenIdentifierChars.test(variable)) {
            throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
          }
          source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
          source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
          var result2 = attempt2(function() {
            return Function2(importsKeys, sourceURL + "return " + source).apply(undefined2, importsValues);
          });
          result2.source = source;
          if (isError2(result2)) {
            throw result2;
          }
          return result2;
        }
        function toLower(value) {
          return toString2(value).toLowerCase();
        }
        function toUpper(value) {
          return toString2(value).toUpperCase();
        }
        function trim2(string, chars, guard) {
          string = toString2(string);
          if (string && (guard || chars === undefined2)) {
            return baseTrim(string);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start4 = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
          return castSlice(strSymbols, start4, end).join("");
        }
        function trimEnd(string, chars, guard) {
          string = toString2(string);
          if (string && (guard || chars === undefined2)) {
            return string.slice(0, trimmedEndIndex(string) + 1);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
          return castSlice(strSymbols, 0, end).join("");
        }
        function trimStart(string, chars, guard) {
          string = toString2(string);
          if (string && (guard || chars === undefined2)) {
            return string.replace(reTrimStart, "");
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), start4 = charsStartIndex(strSymbols, stringToArray(chars));
          return castSlice(strSymbols, start4).join("");
        }
        function truncate(string, options) {
          var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
          if (isObject2(options)) {
            var separator = "separator" in options ? options.separator : separator;
            length = "length" in options ? toInteger(options.length) : length;
            omission = "omission" in options ? baseToString(options.omission) : omission;
          }
          string = toString2(string);
          var strLength = string.length;
          if (hasUnicode(string)) {
            var strSymbols = stringToArray(string);
            strLength = strSymbols.length;
          }
          if (length >= strLength) {
            return string;
          }
          var end = length - stringSize(omission);
          if (end < 1) {
            return omission;
          }
          var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
          if (separator === undefined2) {
            return result2 + omission;
          }
          if (strSymbols) {
            end += result2.length - end;
          }
          if (isRegExp(separator)) {
            if (string.slice(end).search(separator)) {
              var match, substring = result2;
              if (!separator.global) {
                separator = RegExp2(separator.source, toString2(reFlags.exec(separator)) + "g");
              }
              separator.lastIndex = 0;
              while (match = separator.exec(substring)) {
                var newEnd = match.index;
              }
              result2 = result2.slice(0, newEnd === undefined2 ? end : newEnd);
            }
          } else if (string.indexOf(baseToString(separator), end) != end) {
            var index = result2.lastIndexOf(separator);
            if (index > -1) {
              result2 = result2.slice(0, index);
            }
          }
          return result2 + omission;
        }
        function unescape2(string) {
          string = toString2(string);
          return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
        }
        var upperCase2 = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toUpperCase();
        });
        var upperFirst = createCaseFirst("toUpperCase");
        function words(string, pattern, guard) {
          string = toString2(string);
          pattern = guard ? undefined2 : pattern;
          if (pattern === undefined2) {
            return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
          }
          return string.match(pattern) || [];
        }
        var attempt2 = baseRest(function(func, args) {
          try {
            return apply(func, undefined2, args);
          } catch (e) {
            return isError2(e) ? e : new Error2(e);
          }
        });
        var bindAll = flatRest(function(object, methodNames) {
          arrayEach(methodNames, function(key) {
            key = toKey(key);
            baseAssignValue(object, key, bind(object[key], object));
          });
          return object;
        });
        function cond(pairs2) {
          var length = pairs2 == null ? 0 : pairs2.length, toIteratee = getIteratee();
          pairs2 = !length ? [] : arrayMap(pairs2, function(pair) {
            if (typeof pair[1] != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            return [toIteratee(pair[0]), pair[1]];
          });
          return baseRest(function(args) {
            var index = -1;
            while (++index < length) {
              var pair = pairs2[index];
              if (apply(pair[0], this, args)) {
                return apply(pair[1], this, args);
              }
            }
          });
        }
        function conforms(source) {
          return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
        }
        function constant(value) {
          return function() {
            return value;
          };
        }
        function defaultTo(value, defaultValue) {
          return value == null || value !== value ? defaultValue : value;
        }
        var flow = createFlow();
        var flowRight = createFlow(true);
        function identity(value) {
          return value;
        }
        function iteratee(func) {
          return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
        }
        function matches(source) {
          return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
        }
        function matchesProperty(path, srcValue) {
          return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
        }
        var method = baseRest(function(path, args) {
          return function(object) {
            return baseInvoke(object, path, args);
          };
        });
        var methodOf = baseRest(function(object, args) {
          return function(path) {
            return baseInvoke(object, path, args);
          };
        });
        function mixin(object, source, options) {
          var props = keys(source), methodNames = baseFunctions(source, props);
          if (options == null && !(isObject2(source) && (methodNames.length || !props.length))) {
            options = source;
            source = object;
            object = this;
            methodNames = baseFunctions(source, keys(source));
          }
          var chain3 = !(isObject2(options) && "chain" in options) || !!options.chain, isFunc = isFunction2(object);
          arrayEach(methodNames, function(methodName) {
            var func = source[methodName];
            object[methodName] = func;
            if (isFunc) {
              object.prototype[methodName] = function() {
                var chainAll = this.__chain__;
                if (chain3 || chainAll) {
                  var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                  actions.push({ "func": func, "args": arguments, "thisArg": object });
                  result2.__chain__ = chainAll;
                  return result2;
                }
                return func.apply(object, arrayPush([this.value()], arguments));
              };
            }
          });
          return object;
        }
        function noConflict() {
          if (root._ === this) {
            root._ = oldDash;
          }
          return this;
        }
        function noop() {
        }
        function nthArg(n) {
          n = toInteger(n);
          return baseRest(function(args) {
            return baseNth(args, n);
          });
        }
        var over = createOver(arrayMap);
        var overEvery = createOver(arrayEvery);
        var overSome = createOver(arraySome);
        function property(path) {
          return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
        }
        function propertyOf(object) {
          return function(path) {
            return object == null ? undefined2 : baseGet(object, path);
          };
        }
        var range = createRange();
        var rangeRight = createRange(true);
        function stubArray() {
          return [];
        }
        function stubFalse() {
          return false;
        }
        function stubObject() {
          return {};
        }
        function stubString() {
          return "";
        }
        function stubTrue() {
          return true;
        }
        function times(n, iteratee2) {
          n = toInteger(n);
          if (n < 1 || n > MAX_SAFE_INTEGER) {
            return [];
          }
          var index = MAX_ARRAY_LENGTH, length = nativeMin(n, MAX_ARRAY_LENGTH);
          iteratee2 = getIteratee(iteratee2);
          n -= MAX_ARRAY_LENGTH;
          var result2 = baseTimes(length, iteratee2);
          while (++index < n) {
            iteratee2(index);
          }
          return result2;
        }
        function toPath(value) {
          if (isArray5(value)) {
            return arrayMap(value, toKey);
          }
          return isSymbol(value) ? [value] : copyArray(stringToPath(toString2(value)));
        }
        function uniqueId(prefix) {
          var id = ++idCounter;
          return toString2(prefix) + id;
        }
        var add = createMathOperation(function(augend, addend) {
          return augend + addend;
        }, 0);
        var ceil = createRound("ceil");
        var divide = createMathOperation(function(dividend, divisor) {
          return dividend / divisor;
        }, 1);
        var floor = createRound("floor");
        function max(array) {
          return array && array.length ? baseExtremum(array, identity, baseGt) : undefined2;
        }
        function maxBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined2;
        }
        function mean(array) {
          return baseMean(array, identity);
        }
        function meanBy(array, iteratee2) {
          return baseMean(array, getIteratee(iteratee2, 2));
        }
        function min(array) {
          return array && array.length ? baseExtremum(array, identity, baseLt) : undefined2;
        }
        function minBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined2;
        }
        var multiply = createMathOperation(function(multiplier, multiplicand) {
          return multiplier * multiplicand;
        }, 1);
        var round = createRound("round");
        var subtract = createMathOperation(function(minuend, subtrahend) {
          return minuend - subtrahend;
        }, 0);
        function sum(array) {
          return array && array.length ? baseSum(array, identity) : 0;
        }
        function sumBy(array, iteratee2) {
          return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
        }
        lodash.after = after;
        lodash.ary = ary;
        lodash.assign = assign;
        lodash.assignIn = assignIn;
        lodash.assignInWith = assignInWith;
        lodash.assignWith = assignWith;
        lodash.at = at;
        lodash.before = before;
        lodash.bind = bind;
        lodash.bindAll = bindAll;
        lodash.bindKey = bindKey;
        lodash.castArray = castArray;
        lodash.chain = chain2;
        lodash.chunk = chunk;
        lodash.compact = compact;
        lodash.concat = concat;
        lodash.cond = cond;
        lodash.conforms = conforms;
        lodash.constant = constant;
        lodash.countBy = countBy;
        lodash.create = create;
        lodash.curry = curry;
        lodash.curryRight = curryRight;
        lodash.debounce = debounce;
        lodash.defaults = defaults;
        lodash.defaultsDeep = defaultsDeep;
        lodash.defer = defer;
        lodash.delay = delay;
        lodash.difference = difference;
        lodash.differenceBy = differenceBy;
        lodash.differenceWith = differenceWith;
        lodash.drop = drop;
        lodash.dropRight = dropRight;
        lodash.dropRightWhile = dropRightWhile;
        lodash.dropWhile = dropWhile;
        lodash.fill = fill;
        lodash.filter = filter;
        lodash.flatMap = flatMap;
        lodash.flatMapDeep = flatMapDeep;
        lodash.flatMapDepth = flatMapDepth;
        lodash.flatten = flatten;
        lodash.flattenDeep = flattenDeep;
        lodash.flattenDepth = flattenDepth;
        lodash.flip = flip;
        lodash.flow = flow;
        lodash.flowRight = flowRight;
        lodash.fromPairs = fromPairs;
        lodash.functions = functions;
        lodash.functionsIn = functionsIn;
        lodash.groupBy = groupBy;
        lodash.initial = initial2;
        lodash.intersection = intersection;
        lodash.intersectionBy = intersectionBy;
        lodash.intersectionWith = intersectionWith;
        lodash.invert = invert2;
        lodash.invertBy = invertBy;
        lodash.invokeMap = invokeMap;
        lodash.iteratee = iteratee;
        lodash.keyBy = keyBy;
        lodash.keys = keys;
        lodash.keysIn = keysIn;
        lodash.map = map2;
        lodash.mapKeys = mapKeys2;
        lodash.mapValues = mapValues;
        lodash.matches = matches;
        lodash.matchesProperty = matchesProperty;
        lodash.memoize = memoize;
        lodash.merge = merge4;
        lodash.mergeWith = mergeWith;
        lodash.method = method;
        lodash.methodOf = methodOf;
        lodash.mixin = mixin;
        lodash.negate = negate;
        lodash.nthArg = nthArg;
        lodash.omit = omit2;
        lodash.omitBy = omitBy4;
        lodash.once = once;
        lodash.orderBy = orderBy;
        lodash.over = over;
        lodash.overArgs = overArgs;
        lodash.overEvery = overEvery;
        lodash.overSome = overSome;
        lodash.partial = partial;
        lodash.partialRight = partialRight;
        lodash.partition = partition;
        lodash.pick = pick3;
        lodash.pickBy = pickBy2;
        lodash.property = property;
        lodash.propertyOf = propertyOf;
        lodash.pull = pull;
        lodash.pullAll = pullAll;
        lodash.pullAllBy = pullAllBy;
        lodash.pullAllWith = pullAllWith;
        lodash.pullAt = pullAt;
        lodash.range = range;
        lodash.rangeRight = rangeRight;
        lodash.rearg = rearg;
        lodash.reject = reject;
        lodash.remove = remove;
        lodash.rest = rest;
        lodash.reverse = reverse;
        lodash.sampleSize = sampleSize;
        lodash.set = set8;
        lodash.setWith = setWith;
        lodash.shuffle = shuffle;
        lodash.slice = slice;
        lodash.sortBy = sortBy;
        lodash.sortedUniq = sortedUniq;
        lodash.sortedUniqBy = sortedUniqBy;
        lodash.split = split;
        lodash.spread = spread;
        lodash.tail = tail;
        lodash.take = take;
        lodash.takeRight = takeRight;
        lodash.takeRightWhile = takeRightWhile;
        lodash.takeWhile = takeWhile;
        lodash.tap = tap;
        lodash.throttle = throttle;
        lodash.thru = thru;
        lodash.toArray = toArray2;
        lodash.toPairs = toPairs;
        lodash.toPairsIn = toPairsIn;
        lodash.toPath = toPath;
        lodash.toPlainObject = toPlainObject;
        lodash.transform = transform3;
        lodash.unary = unary;
        lodash.union = union;
        lodash.unionBy = unionBy;
        lodash.unionWith = unionWith;
        lodash.uniq = uniq;
        lodash.uniqBy = uniqBy;
        lodash.uniqWith = uniqWith;
        lodash.unset = unset;
        lodash.unzip = unzip;
        lodash.unzipWith = unzipWith;
        lodash.update = update;
        lodash.updateWith = updateWith;
        lodash.values = values;
        lodash.valuesIn = valuesIn;
        lodash.without = without;
        lodash.words = words;
        lodash.wrap = wrap2;
        lodash.xor = xor;
        lodash.xorBy = xorBy;
        lodash.xorWith = xorWith;
        lodash.zip = zip;
        lodash.zipObject = zipObject;
        lodash.zipObjectDeep = zipObjectDeep;
        lodash.zipWith = zipWith;
        lodash.entries = toPairs;
        lodash.entriesIn = toPairsIn;
        lodash.extend = assignIn;
        lodash.extendWith = assignInWith;
        mixin(lodash, lodash);
        lodash.add = add;
        lodash.attempt = attempt2;
        lodash.camelCase = camelCase;
        lodash.capitalize = capitalize;
        lodash.ceil = ceil;
        lodash.clamp = clamp;
        lodash.clone = clone2;
        lodash.cloneDeep = cloneDeep2;
        lodash.cloneDeepWith = cloneDeepWith;
        lodash.cloneWith = cloneWith;
        lodash.conformsTo = conformsTo;
        lodash.deburr = deburr;
        lodash.defaultTo = defaultTo;
        lodash.divide = divide;
        lodash.endsWith = endsWith;
        lodash.eq = eq;
        lodash.escape = escape2;
        lodash.escapeRegExp = escapeRegExp;
        lodash.every = every;
        lodash.find = find;
        lodash.findIndex = findIndex;
        lodash.findKey = findKey2;
        lodash.findLast = findLast;
        lodash.findLastIndex = findLastIndex;
        lodash.findLastKey = findLastKey;
        lodash.floor = floor;
        lodash.forEach = forEach2;
        lodash.forEachRight = forEachRight;
        lodash.forIn = forIn;
        lodash.forInRight = forInRight;
        lodash.forOwn = forOwn2;
        lodash.forOwnRight = forOwnRight;
        lodash.get = get5;
        lodash.gt = gt;
        lodash.gte = gte;
        lodash.has = has3;
        lodash.hasIn = hasIn;
        lodash.head = head;
        lodash.identity = identity;
        lodash.includes = includes;
        lodash.indexOf = indexOf;
        lodash.inRange = inRange;
        lodash.invoke = invoke;
        lodash.isArguments = isArguments;
        lodash.isArray = isArray5;
        lodash.isArrayBuffer = isArrayBuffer;
        lodash.isArrayLike = isArrayLike;
        lodash.isArrayLikeObject = isArrayLikeObject;
        lodash.isBoolean = isBoolean2;
        lodash.isBuffer = isBuffer;
        lodash.isDate = isDate2;
        lodash.isElement = isElement;
        lodash.isEmpty = isEmpty;
        lodash.isEqual = isEqual3;
        lodash.isEqualWith = isEqualWith;
        lodash.isError = isError2;
        lodash.isFinite = isFinite2;
        lodash.isFunction = isFunction2;
        lodash.isInteger = isInteger2;
        lodash.isLength = isLength;
        lodash.isMap = isMap;
        lodash.isMatch = isMatch;
        lodash.isMatchWith = isMatchWith;
        lodash.isNaN = isNaN2;
        lodash.isNative = isNative;
        lodash.isNil = isNil2;
        lodash.isNull = isNull2;
        lodash.isNumber = isNumber2;
        lodash.isObject = isObject2;
        lodash.isObjectLike = isObjectLike;
        lodash.isPlainObject = isPlainObject5;
        lodash.isRegExp = isRegExp;
        lodash.isSafeInteger = isSafeInteger;
        lodash.isSet = isSet;
        lodash.isString = isString5;
        lodash.isSymbol = isSymbol;
        lodash.isTypedArray = isTypedArray;
        lodash.isUndefined = isUndefined4;
        lodash.isWeakMap = isWeakMap;
        lodash.isWeakSet = isWeakSet;
        lodash.join = join;
        lodash.kebabCase = kebabCase;
        lodash.last = last;
        lodash.lastIndexOf = lastIndexOf;
        lodash.lowerCase = lowerCase2;
        lodash.lowerFirst = lowerFirst;
        lodash.lt = lt;
        lodash.lte = lte;
        lodash.max = max;
        lodash.maxBy = maxBy;
        lodash.mean = mean;
        lodash.meanBy = meanBy;
        lodash.min = min;
        lodash.minBy = minBy;
        lodash.stubArray = stubArray;
        lodash.stubFalse = stubFalse;
        lodash.stubObject = stubObject;
        lodash.stubString = stubString;
        lodash.stubTrue = stubTrue;
        lodash.multiply = multiply;
        lodash.nth = nth;
        lodash.noConflict = noConflict;
        lodash.noop = noop;
        lodash.now = now;
        lodash.pad = pad;
        lodash.padEnd = padEnd;
        lodash.padStart = padStart2;
        lodash.parseInt = parseInt2;
        lodash.random = random;
        lodash.reduce = reduce;
        lodash.reduceRight = reduceRight;
        lodash.repeat = repeat2;
        lodash.replace = replace2;
        lodash.result = result;
        lodash.round = round;
        lodash.runInContext = runInContext2;
        lodash.sample = sample;
        lodash.size = size;
        lodash.snakeCase = snakeCase;
        lodash.some = some3;
        lodash.sortedIndex = sortedIndex;
        lodash.sortedIndexBy = sortedIndexBy;
        lodash.sortedIndexOf = sortedIndexOf;
        lodash.sortedLastIndex = sortedLastIndex;
        lodash.sortedLastIndexBy = sortedLastIndexBy;
        lodash.sortedLastIndexOf = sortedLastIndexOf;
        lodash.startCase = startCase2;
        lodash.startsWith = startsWith;
        lodash.subtract = subtract;
        lodash.sum = sum;
        lodash.sumBy = sumBy;
        lodash.template = template;
        lodash.times = times;
        lodash.toFinite = toFinite;
        lodash.toInteger = toInteger;
        lodash.toLength = toLength;
        lodash.toLower = toLower;
        lodash.toNumber = toNumber;
        lodash.toSafeInteger = toSafeInteger;
        lodash.toString = toString2;
        lodash.toUpper = toUpper;
        lodash.trim = trim2;
        lodash.trimEnd = trimEnd;
        lodash.trimStart = trimStart;
        lodash.truncate = truncate;
        lodash.unescape = unescape2;
        lodash.uniqueId = uniqueId;
        lodash.upperCase = upperCase2;
        lodash.upperFirst = upperFirst;
        lodash.each = forEach2;
        lodash.eachRight = forEachRight;
        lodash.first = head;
        mixin(lodash, function() {
          var source = {};
          baseForOwn(lodash, function(func, methodName) {
            if (!hasOwnProperty.call(lodash.prototype, methodName)) {
              source[methodName] = func;
            }
          });
          return source;
        }(), { "chain": false });
        lodash.VERSION = VERSION;
        arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
          lodash[methodName].placeholder = lodash;
        });
        arrayEach(["drop", "take"], function(methodName, index) {
          LazyWrapper.prototype[methodName] = function(n) {
            n = n === undefined2 ? 1 : nativeMax(toInteger(n), 0);
            var result2 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
            if (result2.__filtered__) {
              result2.__takeCount__ = nativeMin(n, result2.__takeCount__);
            } else {
              result2.__views__.push({
                "size": nativeMin(n, MAX_ARRAY_LENGTH),
                "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
              });
            }
            return result2;
          };
          LazyWrapper.prototype[methodName + "Right"] = function(n) {
            return this.reverse()[methodName](n).reverse();
          };
        });
        arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
          var type2 = index + 1, isFilter = type2 == LAZY_FILTER_FLAG || type2 == LAZY_WHILE_FLAG;
          LazyWrapper.prototype[methodName] = function(iteratee2) {
            var result2 = this.clone();
            result2.__iteratees__.push({
              "iteratee": getIteratee(iteratee2, 3),
              "type": type2
            });
            result2.__filtered__ = result2.__filtered__ || isFilter;
            return result2;
          };
        });
        arrayEach(["head", "last"], function(methodName, index) {
          var takeName = "take" + (index ? "Right" : "");
          LazyWrapper.prototype[methodName] = function() {
            return this[takeName](1).value()[0];
          };
        });
        arrayEach(["initial", "tail"], function(methodName, index) {
          var dropName = "drop" + (index ? "" : "Right");
          LazyWrapper.prototype[methodName] = function() {
            return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
          };
        });
        LazyWrapper.prototype.compact = function() {
          return this.filter(identity);
        };
        LazyWrapper.prototype.find = function(predicate) {
          return this.filter(predicate).head();
        };
        LazyWrapper.prototype.findLast = function(predicate) {
          return this.reverse().find(predicate);
        };
        LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
          if (typeof path == "function") {
            return new LazyWrapper(this);
          }
          return this.map(function(value) {
            return baseInvoke(value, path, args);
          });
        });
        LazyWrapper.prototype.reject = function(predicate) {
          return this.filter(negate(getIteratee(predicate)));
        };
        LazyWrapper.prototype.slice = function(start4, end) {
          start4 = toInteger(start4);
          var result2 = this;
          if (result2.__filtered__ && (start4 > 0 || end < 0)) {
            return new LazyWrapper(result2);
          }
          if (start4 < 0) {
            result2 = result2.takeRight(-start4);
          } else if (start4) {
            result2 = result2.drop(start4);
          }
          if (end !== undefined2) {
            end = toInteger(end);
            result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start4);
          }
          return result2;
        };
        LazyWrapper.prototype.takeRightWhile = function(predicate) {
          return this.reverse().takeWhile(predicate).reverse();
        };
        LazyWrapper.prototype.toArray = function() {
          return this.take(MAX_ARRAY_LENGTH);
        };
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
          if (!lodashFunc) {
            return;
          }
          lodash.prototype[methodName] = function() {
            var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray5(value);
            var interceptor = function(value2) {
              var result3 = lodashFunc.apply(lodash, arrayPush([value2], args));
              return isTaker && chainAll ? result3[0] : result3;
            };
            if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
              isLazy = useLazy = false;
            }
            var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
            if (!retUnwrapped && useLazy) {
              value = onlyLazy ? value : new LazyWrapper(this);
              var result2 = func.apply(value, args);
              result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined2 });
              return new LodashWrapper(result2, chainAll);
            }
            if (isUnwrapped && onlyLazy) {
              return func.apply(this, args);
            }
            result2 = this.thru(interceptor);
            return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
          };
        });
        arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
          var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
          lodash.prototype[methodName] = function() {
            var args = arguments;
            if (retUnwrapped && !this.__chain__) {
              var value = this.value();
              return func.apply(isArray5(value) ? value : [], args);
            }
            return this[chainName](function(value2) {
              return func.apply(isArray5(value2) ? value2 : [], args);
            });
          };
        });
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var lodashFunc = lodash[methodName];
          if (lodashFunc) {
            var key = lodashFunc.name + "";
            if (!hasOwnProperty.call(realNames, key)) {
              realNames[key] = [];
            }
            realNames[key].push({ "name": methodName, "func": lodashFunc });
          }
        });
        realNames[createHybrid(undefined2, WRAP_BIND_KEY_FLAG).name] = [{
          "name": "wrapper",
          "func": undefined2
        }];
        LazyWrapper.prototype.clone = lazyClone;
        LazyWrapper.prototype.reverse = lazyReverse;
        LazyWrapper.prototype.value = lazyValue;
        lodash.prototype.at = wrapperAt;
        lodash.prototype.chain = wrapperChain;
        lodash.prototype.commit = wrapperCommit;
        lodash.prototype.next = wrapperNext;
        lodash.prototype.plant = wrapperPlant;
        lodash.prototype.reverse = wrapperReverse;
        lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
        lodash.prototype.first = lodash.prototype.head;
        if (symIterator) {
          lodash.prototype[symIterator] = wrapperToIterator;
        }
        return lodash;
      };
      var _3 = runInContext();
      if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
        root._ = _3;
        define(function() {
          return _3;
        });
      } else if (freeModule) {
        (freeModule.exports = _3)._ = _3;
        freeExports._ = _3;
      } else {
        root._ = _3;
      }
    }).call(exports);
  }
});

// node_modules/lodash.isplainobject/index.js
var require_lodash2 = __commonJS({
  "node_modules/lodash.isplainobject/index.js"(exports, module) {
    var objectTag = "[object Object]";
    function isHostObject(value) {
      var result = false;
      if (value != null && typeof value.toString != "function") {
        try {
          result = !!(value + "");
        } catch (e) {
        }
      }
      return result;
    }
    function overArg(func, transform3) {
      return function(arg) {
        return func(transform3(arg));
      };
    }
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectCtorString = funcToString.call(Object);
    var objectToString = objectProto.toString;
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isPlainObject5(value) {
      if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
      return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
    }
    module.exports = isPlainObject5;
  }
});

// (disabled):crypto
var require_crypto = __commonJS({
  "(disabled):crypto"() {
  }
});

// node_modules/crypto-js/core.js
var require_core = __commonJS({
  "node_modules/crypto-js/core.js"(exports, module) {
    (function(root, factory) {
      if (typeof exports === "object") {
        module.exports = exports = factory();
      } else if (typeof define === "function" && define.amd) {
        define([], factory);
      } else {
        root.CryptoJS = factory();
      }
    })(exports, function() {
      var CryptoJS = CryptoJS || function(Math2, undefined2) {
        var crypto;
        if (typeof window !== "undefined" && window.crypto) {
          crypto = window.crypto;
        }
        if (typeof self !== "undefined" && self.crypto) {
          crypto = self.crypto;
        }
        if (typeof globalThis !== "undefined" && globalThis.crypto) {
          crypto = globalThis.crypto;
        }
        if (!crypto && typeof window !== "undefined" && window.msCrypto) {
          crypto = window.msCrypto;
        }
        if (!crypto && typeof global !== "undefined" && global.crypto) {
          crypto = global.crypto;
        }
        if (!crypto && typeof __require === "function") {
          try {
            crypto = require_crypto();
          } catch (err) {
          }
        }
        var cryptoSecureRandomInt = function() {
          if (crypto) {
            if (typeof crypto.getRandomValues === "function") {
              try {
                return crypto.getRandomValues(new Uint32Array(1))[0];
              } catch (err) {
              }
            }
            if (typeof crypto.randomBytes === "function") {
              try {
                return crypto.randomBytes(4).readInt32LE();
              } catch (err) {
              }
            }
          }
          throw new Error("Native crypto module could not be used to get secure random number.");
        };
        var create = Object.create || function() {
          function F() {
          }
          return function(obj) {
            var subtype;
            F.prototype = obj;
            subtype = new F();
            F.prototype = null;
            return subtype;
          };
        }();
        var C = {};
        var C_lib = C.lib = {};
        var Base = C_lib.Base = function() {
          return {
            /**
             * Creates a new object that inherits from this object.
             *
             * @param {Object} overrides Properties to copy into the new object.
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         field: 'value',
             *
             *         method: function () {
             *         }
             *     });
             */
            extend: function(overrides) {
              var subtype = create(this);
              if (overrides) {
                subtype.mixIn(overrides);
              }
              if (!subtype.hasOwnProperty("init") || this.init === subtype.init) {
                subtype.init = function() {
                  subtype.$super.init.apply(this, arguments);
                };
              }
              subtype.init.prototype = subtype;
              subtype.$super = this;
              return subtype;
            },
            /**
             * Extends this object and runs the init method.
             * Arguments to create() will be passed to init().
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var instance = MyType.create();
             */
            create: function() {
              var instance = this.extend();
              instance.init.apply(instance, arguments);
              return instance;
            },
            /**
             * Initializes a newly created object.
             * Override this method to add some logic when your objects are created.
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         init: function () {
             *             // ...
             *         }
             *     });
             */
            init: function() {
            },
            /**
             * Copies properties into this object.
             *
             * @param {Object} properties The properties to mix in.
             *
             * @example
             *
             *     MyType.mixIn({
             *         field: 'value'
             *     });
             */
            mixIn: function(properties) {
              for (var propertyName in properties) {
                if (properties.hasOwnProperty(propertyName)) {
                  this[propertyName] = properties[propertyName];
                }
              }
              if (properties.hasOwnProperty("toString")) {
                this.toString = properties.toString;
              }
            },
            /**
             * Creates a copy of this object.
             *
             * @return {Object} The clone.
             *
             * @example
             *
             *     var clone = instance.clone();
             */
            clone: function() {
              return this.init.prototype.extend(this);
            }
          };
        }();
        var WordArray = C_lib.WordArray = Base.extend({
          /**
           * Initializes a newly created word array.
           *
           * @param {Array} words (Optional) An array of 32-bit words.
           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.create();
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
           */
          init: function(words, sigBytes) {
            words = this.words = words || [];
            if (sigBytes != undefined2) {
              this.sigBytes = sigBytes;
            } else {
              this.sigBytes = words.length * 4;
            }
          },
          /**
           * Converts this word array to a string.
           *
           * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
           *
           * @return {string} The stringified word array.
           *
           * @example
           *
           *     var string = wordArray + '';
           *     var string = wordArray.toString();
           *     var string = wordArray.toString(CryptoJS.enc.Utf8);
           */
          toString: function(encoder) {
            return (encoder || Hex).stringify(this);
          },
          /**
           * Concatenates a word array to this word array.
           *
           * @param {WordArray} wordArray The word array to append.
           *
           * @return {WordArray} This word array.
           *
           * @example
           *
           *     wordArray1.concat(wordArray2);
           */
          concat: function(wordArray) {
            var thisWords = this.words;
            var thatWords = wordArray.words;
            var thisSigBytes = this.sigBytes;
            var thatSigBytes = wordArray.sigBytes;
            this.clamp();
            if (thisSigBytes % 4) {
              for (var i = 0; i < thatSigBytes; i++) {
                var thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                thisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;
              }
            } else {
              for (var j = 0; j < thatSigBytes; j += 4) {
                thisWords[thisSigBytes + j >>> 2] = thatWords[j >>> 2];
              }
            }
            this.sigBytes += thatSigBytes;
            return this;
          },
          /**
           * Removes insignificant bits.
           *
           * @example
           *
           *     wordArray.clamp();
           */
          clamp: function() {
            var words = this.words;
            var sigBytes = this.sigBytes;
            words[sigBytes >>> 2] &= 4294967295 << 32 - sigBytes % 4 * 8;
            words.length = Math2.ceil(sigBytes / 4);
          },
          /**
           * Creates a copy of this word array.
           *
           * @return {WordArray} The clone.
           *
           * @example
           *
           *     var clone = wordArray.clone();
           */
          clone: function() {
            var clone2 = Base.clone.call(this);
            clone2.words = this.words.slice(0);
            return clone2;
          },
          /**
           * Creates a word array filled with random bytes.
           *
           * @param {number} nBytes The number of random bytes to generate.
           *
           * @return {WordArray} The random word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.random(16);
           */
          random: function(nBytes) {
            var words = [];
            for (var i = 0; i < nBytes; i += 4) {
              words.push(cryptoSecureRandomInt());
            }
            return new WordArray.init(words, nBytes);
          }
        });
        var C_enc = C.enc = {};
        var Hex = C_enc.Hex = {
          /**
           * Converts a word array to a hex string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The hex string.
           *
           * @static
           *
           * @example
           *
           *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
           */
          stringify: function(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var hexChars = [];
            for (var i = 0; i < sigBytes; i++) {
              var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              hexChars.push((bite >>> 4).toString(16));
              hexChars.push((bite & 15).toString(16));
            }
            return hexChars.join("");
          },
          /**
           * Converts a hex string to a word array.
           *
           * @param {string} hexStr The hex string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
           */
          parse: function(hexStr) {
            var hexStrLength = hexStr.length;
            var words = [];
            for (var i = 0; i < hexStrLength; i += 2) {
              words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;
            }
            return new WordArray.init(words, hexStrLength / 2);
          }
        };
        var Latin1 = C_enc.Latin1 = {
          /**
           * Converts a word array to a Latin1 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Latin1 string.
           *
           * @static
           *
           * @example
           *
           *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
           */
          stringify: function(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var latin1Chars = [];
            for (var i = 0; i < sigBytes; i++) {
              var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              latin1Chars.push(String.fromCharCode(bite));
            }
            return latin1Chars.join("");
          },
          /**
           * Converts a Latin1 string to a word array.
           *
           * @param {string} latin1Str The Latin1 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
           */
          parse: function(latin1Str) {
            var latin1StrLength = latin1Str.length;
            var words = [];
            for (var i = 0; i < latin1StrLength; i++) {
              words[i >>> 2] |= (latin1Str.charCodeAt(i) & 255) << 24 - i % 4 * 8;
            }
            return new WordArray.init(words, latin1StrLength);
          }
        };
        var Utf8 = C_enc.Utf8 = {
          /**
           * Converts a word array to a UTF-8 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-8 string.
           *
           * @static
           *
           * @example
           *
           *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
           */
          stringify: function(wordArray) {
            try {
              return decodeURIComponent(escape(Latin1.stringify(wordArray)));
            } catch (e) {
              throw new Error("Malformed UTF-8 data");
            }
          },
          /**
           * Converts a UTF-8 string to a word array.
           *
           * @param {string} utf8Str The UTF-8 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
           */
          parse: function(utf8Str) {
            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
          }
        };
        var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
          /**
           * Resets this block algorithm's data buffer to its initial state.
           *
           * @example
           *
           *     bufferedBlockAlgorithm.reset();
           */
          reset: function() {
            this._data = new WordArray.init();
            this._nDataBytes = 0;
          },
          /**
           * Adds new data to this block algorithm's buffer.
           *
           * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
           *
           * @example
           *
           *     bufferedBlockAlgorithm._append('data');
           *     bufferedBlockAlgorithm._append(wordArray);
           */
          _append: function(data) {
            if (typeof data == "string") {
              data = Utf8.parse(data);
            }
            this._data.concat(data);
            this._nDataBytes += data.sigBytes;
          },
          /**
           * Processes available data blocks.
           *
           * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
           *
           * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
           *
           * @return {WordArray} The processed data.
           *
           * @example
           *
           *     var processedData = bufferedBlockAlgorithm._process();
           *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
           */
          _process: function(doFlush) {
            var processedWords;
            var data = this._data;
            var dataWords = data.words;
            var dataSigBytes = data.sigBytes;
            var blockSize = this.blockSize;
            var blockSizeBytes = blockSize * 4;
            var nBlocksReady = dataSigBytes / blockSizeBytes;
            if (doFlush) {
              nBlocksReady = Math2.ceil(nBlocksReady);
            } else {
              nBlocksReady = Math2.max((nBlocksReady | 0) - this._minBufferSize, 0);
            }
            var nWordsReady = nBlocksReady * blockSize;
            var nBytesReady = Math2.min(nWordsReady * 4, dataSigBytes);
            if (nWordsReady) {
              for (var offset = 0; offset < nWordsReady; offset += blockSize) {
                this._doProcessBlock(dataWords, offset);
              }
              processedWords = dataWords.splice(0, nWordsReady);
              data.sigBytes -= nBytesReady;
            }
            return new WordArray.init(processedWords, nBytesReady);
          },
          /**
           * Creates a copy of this object.
           *
           * @return {Object} The clone.
           *
           * @example
           *
           *     var clone = bufferedBlockAlgorithm.clone();
           */
          clone: function() {
            var clone2 = Base.clone.call(this);
            clone2._data = this._data.clone();
            return clone2;
          },
          _minBufferSize: 0
        });
        var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
          /**
           * Configuration options.
           */
          cfg: Base.extend(),
          /**
           * Initializes a newly created hasher.
           *
           * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
           *
           * @example
           *
           *     var hasher = CryptoJS.algo.SHA256.create();
           */
          init: function(cfg) {
            this.cfg = this.cfg.extend(cfg);
            this.reset();
          },
          /**
           * Resets this hasher to its initial state.
           *
           * @example
           *
           *     hasher.reset();
           */
          reset: function() {
            BufferedBlockAlgorithm.reset.call(this);
            this._doReset();
          },
          /**
           * Updates this hasher with a message.
           *
           * @param {WordArray|string} messageUpdate The message to append.
           *
           * @return {Hasher} This hasher.
           *
           * @example
           *
           *     hasher.update('message');
           *     hasher.update(wordArray);
           */
          update: function(messageUpdate) {
            this._append(messageUpdate);
            this._process();
            return this;
          },
          /**
           * Finalizes the hash computation.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} messageUpdate (Optional) A final message update.
           *
           * @return {WordArray} The hash.
           *
           * @example
           *
           *     var hash = hasher.finalize();
           *     var hash = hasher.finalize('message');
           *     var hash = hasher.finalize(wordArray);
           */
          finalize: function(messageUpdate) {
            if (messageUpdate) {
              this._append(messageUpdate);
            }
            var hash = this._doFinalize();
            return hash;
          },
          blockSize: 512 / 32,
          /**
           * Creates a shortcut function to a hasher's object interface.
           *
           * @param {Hasher} hasher The hasher to create a helper for.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
           */
          _createHelper: function(hasher) {
            return function(message, cfg) {
              return new hasher.init(cfg).finalize(message);
            };
          },
          /**
           * Creates a shortcut function to the HMAC's object interface.
           *
           * @param {Hasher} hasher The hasher to use in this HMAC helper.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
           */
          _createHmacHelper: function(hasher) {
            return function(message, key) {
              return new C_algo.HMAC.init(hasher, key).finalize(message);
            };
          }
        });
        var C_algo = C.algo = {};
        return C;
      }(Math);
      return CryptoJS;
    });
  }
});

// node_modules/crypto-js/lib-typedarrays.js
var require_lib_typedarrays = __commonJS({
  "node_modules/crypto-js/lib-typedarrays.js"(exports, module) {
    (function(root, factory) {
      if (typeof exports === "object") {
        module.exports = exports = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS) {
      (function() {
        if (typeof ArrayBuffer != "function") {
          return;
        }
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var superInit = WordArray.init;
        var subInit = WordArray.init = function(typedArray) {
          if (typedArray instanceof ArrayBuffer) {
            typedArray = new Uint8Array(typedArray);
          }
          if (typedArray instanceof Int8Array || typeof Uint8ClampedArray !== "undefined" && typedArray instanceof Uint8ClampedArray || typedArray instanceof Int16Array || typedArray instanceof Uint16Array || typedArray instanceof Int32Array || typedArray instanceof Uint32Array || typedArray instanceof Float32Array || typedArray instanceof Float64Array) {
            typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
          }
          if (typedArray instanceof Uint8Array) {
            var typedArrayByteLength = typedArray.byteLength;
            var words = [];
            for (var i = 0; i < typedArrayByteLength; i++) {
              words[i >>> 2] |= typedArray[i] << 24 - i % 4 * 8;
            }
            superInit.call(this, words, typedArrayByteLength);
          } else {
            superInit.apply(this, arguments);
          }
        };
        subInit.prototype = WordArray;
      })();
      return CryptoJS.lib.WordArray;
    });
  }
});

// node_modules/crypto-js/sha256.js
var require_sha256 = __commonJS({
  "node_modules/crypto-js/sha256.js"(exports, module) {
    (function(root, factory) {
      if (typeof exports === "object") {
        module.exports = exports = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS) {
      (function(Math2) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo;
        var H = [];
        var K = [];
        (function() {
          function isPrime(n2) {
            var sqrtN = Math2.sqrt(n2);
            for (var factor = 2; factor <= sqrtN; factor++) {
              if (!(n2 % factor)) {
                return false;
              }
            }
            return true;
          }
          function getFractionalBits(n2) {
            return (n2 - (n2 | 0)) * 4294967296 | 0;
          }
          var n = 2;
          var nPrime = 0;
          while (nPrime < 64) {
            if (isPrime(n)) {
              if (nPrime < 8) {
                H[nPrime] = getFractionalBits(Math2.pow(n, 1 / 2));
              }
              K[nPrime] = getFractionalBits(Math2.pow(n, 1 / 3));
              nPrime++;
            }
            n++;
          }
        })();
        var W = [];
        var SHA256 = C_algo.SHA256 = Hasher.extend({
          _doReset: function() {
            this._hash = new WordArray.init(H.slice(0));
          },
          _doProcessBlock: function(M, offset) {
            var H2 = this._hash.words;
            var a = H2[0];
            var b = H2[1];
            var c = H2[2];
            var d = H2[3];
            var e = H2[4];
            var f = H2[5];
            var g = H2[6];
            var h = H2[7];
            for (var i = 0; i < 64; i++) {
              if (i < 16) {
                W[i] = M[offset + i] | 0;
              } else {
                var gamma0x = W[i - 15];
                var gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
                var gamma1x = W[i - 2];
                var gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
                W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
              }
              var ch = e & f ^ ~e & g;
              var maj = a & b ^ a & c ^ b & c;
              var sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
              var sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
              var t1 = h + sigma1 + ch + K[i] + W[i];
              var t2 = sigma0 + maj;
              h = g;
              g = f;
              f = e;
              e = d + t1 | 0;
              d = c;
              c = b;
              b = a;
              a = t1 + t2 | 0;
            }
            H2[0] = H2[0] + a | 0;
            H2[1] = H2[1] + b | 0;
            H2[2] = H2[2] + c | 0;
            H2[3] = H2[3] + d | 0;
            H2[4] = H2[4] + e | 0;
            H2[5] = H2[5] + f | 0;
            H2[6] = H2[6] + g | 0;
            H2[7] = H2[7] + h | 0;
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;
            dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math2.floor(nBitsTotal / 4294967296);
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
            data.sigBytes = dataWords.length * 4;
            this._process();
            return this._hash;
          },
          clone: function() {
            var clone2 = Hasher.clone.call(this);
            clone2._hash = this._hash.clone();
            return clone2;
          }
        });
        C.SHA256 = Hasher._createHelper(SHA256);
        C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
      })(Math);
      return CryptoJS.SHA256;
    });
  }
});

// node_modules/crypto-js/enc-base64url.js
var require_enc_base64url = __commonJS({
  "node_modules/crypto-js/enc-base64url.js"(exports, module) {
    (function(root, factory) {
      if (typeof exports === "object") {
        module.exports = exports = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var C_enc = C.enc;
        var Base64url = C_enc.Base64url = {
          /**
           * Converts a word array to a Base64url string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @param {boolean} urlSafe Whether to use url safe
           *
           * @return {string} The Base64url string.
           *
           * @static
           *
           * @example
           *
           *     var base64String = CryptoJS.enc.Base64url.stringify(wordArray);
           */
          stringify: function(wordArray, urlSafe = true) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var map2 = urlSafe ? this._safe_map : this._map;
            wordArray.clamp();
            var base64Chars = [];
            for (var i = 0; i < sigBytes; i += 3) {
              var byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              var byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
              var byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
              var triplet = byte1 << 16 | byte2 << 8 | byte3;
              for (var j = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {
                base64Chars.push(map2.charAt(triplet >>> 6 * (3 - j) & 63));
              }
            }
            var paddingChar = map2.charAt(64);
            if (paddingChar) {
              while (base64Chars.length % 4) {
                base64Chars.push(paddingChar);
              }
            }
            return base64Chars.join("");
          },
          /**
           * Converts a Base64url string to a word array.
           *
           * @param {string} base64Str The Base64url string.
           *
           * @param {boolean} urlSafe Whether to use url safe
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Base64url.parse(base64String);
           */
          parse: function(base64Str, urlSafe = true) {
            var base64StrLength = base64Str.length;
            var map2 = urlSafe ? this._safe_map : this._map;
            var reverseMap = this._reverseMap;
            if (!reverseMap) {
              reverseMap = this._reverseMap = [];
              for (var j = 0; j < map2.length; j++) {
                reverseMap[map2.charCodeAt(j)] = j;
              }
            }
            var paddingChar = map2.charAt(64);
            if (paddingChar) {
              var paddingIndex = base64Str.indexOf(paddingChar);
              if (paddingIndex !== -1) {
                base64StrLength = paddingIndex;
              }
            }
            return parseLoop(base64Str, base64StrLength, reverseMap);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
        function parseLoop(base64Str, base64StrLength, reverseMap) {
          var words = [];
          var nBytes = 0;
          for (var i = 0; i < base64StrLength; i++) {
            if (i % 4) {
              var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;
              var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;
              var bitsCombined = bits1 | bits2;
              words[nBytes >>> 2] |= bitsCombined << 24 - nBytes % 4 * 8;
              nBytes++;
            }
          }
          return WordArray.create(words, nBytes);
        }
      })();
      return CryptoJS.enc.Base64url;
    });
  }
});

// node_modules/kind-of/index.js
var require_kind_of = __commonJS({
  "node_modules/kind-of/index.js"(exports, module) {
    var toString2 = Object.prototype.toString;
    module.exports = function kindOf(val) {
      var type2 = typeof val;
      if (type2 === "undefined") {
        return "undefined";
      }
      if (val === null) {
        return "null";
      }
      if (val === true || val === false || val instanceof Boolean) {
        return "boolean";
      }
      if (type2 === "string" || val instanceof String) {
        return "string";
      }
      if (type2 === "number" || val instanceof Number) {
        return "number";
      }
      if (type2 === "function" || val instanceof Function) {
        if (typeof val.constructor.name !== "undefined" && val.constructor.name.slice(0, 9) === "Generator") {
          return "generatorfunction";
        }
        return "function";
      }
      if (typeof Array.isArray !== "undefined" && Array.isArray(val)) {
        return "array";
      }
      if (val instanceof RegExp) {
        return "regexp";
      }
      if (val instanceof Date) {
        return "date";
      }
      type2 = toString2.call(val);
      if (type2 === "[object RegExp]") {
        return "regexp";
      }
      if (type2 === "[object Date]") {
        return "date";
      }
      if (type2 === "[object Arguments]") {
        return "arguments";
      }
      if (type2 === "[object Error]") {
        return "error";
      }
      if (type2 === "[object Promise]") {
        return "promise";
      }
      if (isBuffer(val)) {
        return "buffer";
      }
      if (type2 === "[object Set]") {
        return "set";
      }
      if (type2 === "[object WeakSet]") {
        return "weakset";
      }
      if (type2 === "[object Map]") {
        return "map";
      }
      if (type2 === "[object WeakMap]") {
        return "weakmap";
      }
      if (type2 === "[object Symbol]") {
        return "symbol";
      }
      if (type2 === "[object Map Iterator]") {
        return "mapiterator";
      }
      if (type2 === "[object Set Iterator]") {
        return "setiterator";
      }
      if (type2 === "[object String Iterator]") {
        return "stringiterator";
      }
      if (type2 === "[object Array Iterator]") {
        return "arrayiterator";
      }
      if (type2 === "[object Int8Array]") {
        return "int8array";
      }
      if (type2 === "[object Uint8Array]") {
        return "uint8array";
      }
      if (type2 === "[object Uint8ClampedArray]") {
        return "uint8clampedarray";
      }
      if (type2 === "[object Int16Array]") {
        return "int16array";
      }
      if (type2 === "[object Uint16Array]") {
        return "uint16array";
      }
      if (type2 === "[object Int32Array]") {
        return "int32array";
      }
      if (type2 === "[object Uint32Array]") {
        return "uint32array";
      }
      if (type2 === "[object Float32Array]") {
        return "float32array";
      }
      if (type2 === "[object Float64Array]") {
        return "float64array";
      }
      return "object";
    };
    function isBuffer(val) {
      return val.constructor && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
    }
  }
});

// node_modules/@wix/api-client/dist/esm/bi/biHeaderGenerator.js
var WixBIHeaderName = "x-wix-bi-gateway";
function biHeaderGenerator(requestOptions, publicMetadata) {
  return {
    [WixBIHeaderName]: objectToKeyValue({
      environment: "js-sdk",
      "package-name": publicMetadata == null ? void 0 : publicMetadata.PACKAGE_NAME,
      "method-fqn": requestOptions == null ? void 0 : requestOptions.methodFqn,
      entity: requestOptions == null ? void 0 : requestOptions.entityFqdn
    })
  };
}
function objectToKeyValue(input) {
  return Object.entries(input).filter((_ref) => {
    let [_3, value] = _ref;
    return Boolean(value);
  }).map((_ref2) => {
    let [key, value] = _ref2;
    return key + "=" + value;
  }).join(",");
}

// node_modules/@wix/api-client/dist/esm/common.js
var PUBLIC_METADATA_KEY = "__metadata";
var API_URL = "www.wixapis.com";

// node_modules/@wix/api-client/dist/esm/wixClient.js
var wrapperBuilder = (origFunc, publicMetadata, boundFetch) => {
  return origFunc({
    request: async (factory) => {
      const requestOptions = factory({
        host: API_URL
      });
      let url = "https://" + API_URL + requestOptions.url;
      if (requestOptions.params && requestOptions.params.toString()) {
        url += "?" + requestOptions.params.toString();
      }
      try {
        const biHeader = biHeaderGenerator(requestOptions, publicMetadata);
        const res = await boundFetch(url, {
          method: requestOptions.method,
          ...requestOptions.data && {
            body: JSON.stringify(requestOptions.data)
          },
          headers: {
            ...biHeader
          }
        });
        if (res.status !== 200) {
          var _dataError, _dataError2;
          let dataError = null;
          try {
            dataError = await res.json();
          } catch (e) {
          }
          throw errorBuilder(res.status, (_dataError = dataError) == null ? void 0 : _dataError.message, (_dataError2 = dataError) == null ? void 0 : _dataError2.details, {
            requestId: res.headers.get("X-Wix-Request-Id"),
            details: dataError
          });
        }
        const data = await res.json();
        return {
          data
        };
      } catch (e) {
        var _e$message;
        if ((_e$message = e.message) != null && _e$message.includes("fetch is not defined")) {
          console.error("Node.js v18+ is required");
        }
        throw e;
      }
    }
  });
};
var errorBuilder = (code, description, details, data) => {
  return {
    response: {
      data: {
        details: {
          ...!(details != null && details.validationError) && {
            applicationError: {
              description,
              code,
              data
            }
          },
          ...details
        },
        message: description
      },
      status: code
    }
  };
};
function createClient(config) {
  const _headers = config.headers || {
    Authorization: ""
  };
  const authStrategy = config.auth || {
    getAuthHeaders: () => Promise.resolve({
      headers: {}
    })
  };
  const boundFetch = async (url, options) => {
    const authHeaders = await authStrategy.getAuthHeaders();
    return fetch(url, {
      ...options,
      headers: {
        ..._headers,
        ...authHeaders == null ? void 0 : authHeaders.headers,
        ...options == null ? void 0 : options.headers
      }
    });
  };
  const isObject2 = (val) => val && typeof val === "object" && !Array.isArray(val);
  const traverse = (obj) => {
    return Object.entries(obj).reduce((prev, _ref) => {
      let [key, value] = _ref;
      if (isObject2(value)) {
        prev[key] = traverse(value);
      } else if (typeof obj[key] === "function") {
        var _obj$PUBLIC_METADATA_;
        prev[key] = wrapperBuilder(value, (_obj$PUBLIC_METADATA_ = obj[PUBLIC_METADATA_KEY]) != null ? _obj$PUBLIC_METADATA_ : {}, boundFetch);
      } else {
        prev[key] = value;
      }
      return prev;
    }, {});
  };
  const setHeaders = (headers) => {
    for (const k in headers) {
      _headers[k] = headers[k];
    }
  };
  const wrappedModules = config.modules ? traverse(config.modules) : {};
  return {
    ...wrappedModules,
    auth: authStrategy,
    setHeaders,
    fetch: (relativeUrl, options) => {
      const finalUrl = new URL(relativeUrl, "https://" + API_URL);
      finalUrl.host = API_URL;
      finalUrl.protocol = "https";
      return boundFetch(finalUrl, options);
    }
  };
}

// node_modules/@wix/redirects/build/es/src/headless-v1-redirect-session.public.js
var headless_v1_redirect_session_public_exports = {};
__export(headless_v1_redirect_session_public_exports, {
  CallbackType: () => CallbackType,
  LocationType: () => LocationType,
  MembersAccountSection: () => MembersAccountSection,
  __metadata: () => __metadata,
  createRedirectSession: () => createRedirectSession3
});

// node_modules/tslib/tslib.es6.js
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2)
      if (Object.prototype.hasOwnProperty.call(b2, p))
        d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign6(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _3 = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_3 = 0)), _3)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _3.label++;
            return { value: op[1], done: false };
          case 5:
            _3.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _3.ops.pop();
            _3.trys.pop();
            continue;
          default:
            if (!(t = _3.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _3 = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _3.label = op[1];
              break;
            }
            if (op[0] === 6 && _3.label < t[1]) {
              _3.label = t[1];
              t = op;
              break;
            }
            if (t && _3.label < t[2]) {
              _3.label = t[2];
              _3.ops.push(op);
              break;
            }
            if (t[2])
              _3.ops.pop();
            _3.trys.pop();
            continue;
        }
        op = body.call(thisArg, _3);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}

// node_modules/@wix/motion-edm-autogen-p13n/dist/esm/address/index.js
var import_lodash = __toESM(require_lodash());
var sharedFieldNames = ["city", "subdivision", "country", "postalCode"];
var sharedStreetAddressFieldNames = ["name", "number", "apt"];
var p13nToCorvid = function(p13nAddress) {
  return p13nAddress ? (0, import_lodash.omitBy)(__assign(__assign({ formatted: p13nAddress.formattedAddress, location: p13nAddress.geocode }, (0, import_lodash.pick)(p13nAddress, sharedFieldNames)), { streetAddress: p13nAddress.streetAddress && (0, import_lodash.pick)(p13nAddress.streetAddress, sharedStreetAddressFieldNames), addressLine1: p13nAddress.addressLine, addressLine2: p13nAddress.addressLine_2 }), import_lodash.isUndefined) : void 0;
};
var corvidToP13n = function(corvidAddress) {
  return corvidAddress ? (0, import_lodash.omitBy)(__assign(__assign({ formattedAddress: corvidAddress.formatted, geocode: corvidAddress.location }, (0, import_lodash.pick)(corvidAddress, sharedFieldNames)), { streetAddress: corvidAddress.streetAddress && (0, import_lodash.pick)(corvidAddress.streetAddress, sharedStreetAddressFieldNames), addressLine: corvidAddress.addressLine1, addressLine_2: corvidAddress.addressLine2 }), import_lodash.isUndefined) : void 0;
};

// node_modules/@wix/motion-edm-autogen-p13n/dist/esm/coalesce.js
var coalesce = function() {
  var values = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    values[_i] = arguments[_i];
  }
  return values.find(function(v) {
    return v !== void 0;
  });
};

// node_modules/@wix/motion-edm-autogen-p13n/dist/esm/image/index.js
var import_querystring = __toESM(require_querystring());

// node_modules/@wix/motion-edm-autogen-p13n/dist/esm/image/toAltText.js
var import_lodash2 = __toESM(require_lodash());
var removeExtension = function(s) {
  return s.replace(/\.\S*$/, "");
};
var trimConsequentSpaces = function(s) {
  return s.replace(/\s+/g, " ");
};
var removeSpecialChars = function(s) {
  return s.replace(/[^a-zA-Z0-9]/g, " ");
};
var lowercaseAllButFirst = function(s) {
  var _a14 = s.split(" "), first = _a14[0], rest = _a14.slice(1);
  return __spreadArray([first], rest.map(function(w) {
    return w.toLowerCase();
  }), true).join(" ");
};
var toAltText = function(s) {
  var reducers = [
    decodeURIComponent,
    removeExtension,
    removeSpecialChars,
    trimConsequentSpaces,
    import_lodash2.startCase,
    lowercaseAllButFirst
  ];
  return reducers.reduce(function(acc, fn) {
    return fn(acc);
  }, s);
};

// node_modules/@wix/motion-edm-autogen-p13n/dist/esm/image/index.js
var WIX_IMAGE_PROTOCOL = "wix:";
var WIX_LEGACY_IMAGE_PROTOCOL = "image:";
var WIX_IMAGE_PROTOCOL_SUFFIX = "image://v1/";
var URL_HASH_PREFIX = "#";
var DEFAULT_IMAGE_FILE_NAME = "file";
var alignIfLegacyImage = function(image2) {
  var protocol = new URL(image2).protocol;
  return protocol === WIX_LEGACY_IMAGE_PROTOCOL ? "wix:".concat(image2) : image2;
};
var corvidToP13n2 = function(image2) {
  if (!image2) {
    return void 0;
  }
  var alignedImage = alignIfLegacyImage(image2);
  var _a14 = new URL(alignedImage), protocol = _a14.protocol, hash = _a14.hash, pathname = _a14.pathname;
  var _b = import_querystring.default.parse(hash.replace(URL_HASH_PREFIX, "")), height = _b.originHeight, width = _b.originWidth;
  var _c = pathname.replace(WIX_IMAGE_PROTOCOL_SUFFIX, "").split("/"), id = _c[0], filename = _c[1];
  if (protocol === WIX_IMAGE_PROTOCOL) {
    return {
      id,
      height: Number(height),
      width: Number(width),
      altText: toAltText(filename)
    };
  }
  return { url: image2 };
};
var computeImageFileName = function(image2) {
  var _a14;
  var filename = (_a14 = image2.altText) !== null && _a14 !== void 0 ? _a14 : DEFAULT_IMAGE_FILE_NAME;
  return encodeURIComponent(filename);
};
var p13nToCorvid2 = function(image2) {
  if (!image2) {
    return void 0;
  }
  return image2.id ? "wix:image://v1/".concat(image2.id, "/").concat(computeImageFileName(image2), "#originWidth=").concat(image2.width, "&originHeight=").concat(image2.height) : image2 === null || image2 === void 0 ? void 0 : image2.url;
};

// node_modules/@wix/motion-edm-autogen-p13n/dist/esm/wrap.js
var import_lodash3 = __toESM(require_lodash());
var wrap = function(value, wrapperPropertyName) {
  var _a14;
  return (0, import_lodash3.isNil)(value) ? void 0 : (_a14 = {}, _a14[wrapperPropertyName] = value, _a14);
};

// node_modules/@wix/motion-edm-autogen-p13n/dist/esm/index.js
var builtinCustomFunctions = {
  image: { corvidToP13n: corvidToP13n2, p13nToCorvid: p13nToCorvid2 },
  address: {
    p13nToCorvid,
    corvidToP13n
  },
  wrap,
  coalesce
};

// node_modules/@wix/motion-edm-autogen-transformations-core/dist/esm/lib/corvid-entity/index.js
var import_lodash4 = __toESM(require_lodash());
var TO_CORVID_ENTITY_RENAMED_KEYS = {
  id: "_id",
  createdDate: "_createdDate",
  updatedDate: "_updatedDate"
};
var FROM_CORVID_ENTITY_RENAMED_KEYS = (0, import_lodash4.invert)(TO_CORVID_ENTITY_RENAMED_KEYS);
var toCorvidName = function(name) {
  return TO_CORVID_ENTITY_RENAMED_KEYS[name] || name;
};
var fromCorvidName = function(name) {
  return FROM_CORVID_ENTITY_RENAMED_KEYS[name] || name;
};

// node_modules/jsonpath-plus/dist/index-browser-esm.js
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct2(Parent2, args2, Class2) {
      var a = [null];
      a.push.apply(a, args2);
      var Constructor = Function.bind.apply(Parent2, a);
      var instance = new Constructor();
      if (Class2)
        _setPrototypeOf(instance, Class2.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
  _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
    if (Class2 === null || !_isNativeFunction(Class2))
      return Class2;
    if (typeof Class2 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class2))
        return _cache.get(Class2);
      _cache.set(Class2, Wrapper);
    }
    function Wrapper() {
      return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class2.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class2);
  };
  return _wrapNativeSuper(Class);
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _possibleConstructorReturn(self2, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self2);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function() {
      };
      return {
        s: F,
        n: function() {
          if (i >= o.length)
            return {
              done: true
            };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function(e) {
          throw e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return {
    s: function() {
      it = it.call(o);
    },
    n: function() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function(e) {
      didErr = true;
      err = e;
    },
    f: function() {
      try {
        if (!normalCompletion && it.return != null)
          it.return();
      } finally {
        if (didErr)
          throw err;
      }
    }
  };
}
var hasOwnProp = Object.prototype.hasOwnProperty;
function push(arr, item) {
  arr = arr.slice();
  arr.push(item);
  return arr;
}
function unshift(item, arr) {
  arr = arr.slice();
  arr.unshift(item);
  return arr;
}
var NewError = /* @__PURE__ */ function(_Error) {
  _inherits(NewError2, _Error);
  var _super = _createSuper(NewError2);
  function NewError2(value) {
    var _this;
    _classCallCheck(this, NewError2);
    _this = _super.call(this, 'JSONPath should not be called with "new" (it prevents return of (unwrapped) scalar values)');
    _this.avoidNew = true;
    _this.value = value;
    _this.name = "NewError";
    return _this;
  }
  return NewError2;
}(/* @__PURE__ */ _wrapNativeSuper(Error));
function JSONPath(opts, expr, obj, callback, otherTypeCallback) {
  if (!(this instanceof JSONPath)) {
    try {
      return new JSONPath(opts, expr, obj, callback, otherTypeCallback);
    } catch (e) {
      if (!e.avoidNew) {
        throw e;
      }
      return e.value;
    }
  }
  if (typeof opts === "string") {
    otherTypeCallback = callback;
    callback = obj;
    obj = expr;
    expr = opts;
    opts = null;
  }
  var optObj = opts && _typeof(opts) === "object";
  opts = opts || {};
  this.json = opts.json || obj;
  this.path = opts.path || expr;
  this.resultType = opts.resultType || "value";
  this.flatten = opts.flatten || false;
  this.wrap = hasOwnProp.call(opts, "wrap") ? opts.wrap : true;
  this.sandbox = opts.sandbox || {};
  this.preventEval = opts.preventEval || false;
  this.parent = opts.parent || null;
  this.parentProperty = opts.parentProperty || null;
  this.callback = opts.callback || callback || null;
  this.otherTypeCallback = opts.otherTypeCallback || otherTypeCallback || function() {
    throw new TypeError("You must supply an otherTypeCallback callback option with the @other() operator.");
  };
  if (opts.autostart !== false) {
    var args = {
      path: optObj ? opts.path : expr
    };
    if (!optObj) {
      args.json = obj;
    } else if ("json" in opts) {
      args.json = opts.json;
    }
    var ret = this.evaluate(args);
    if (!ret || _typeof(ret) !== "object") {
      throw new NewError(ret);
    }
    return ret;
  }
}
JSONPath.prototype.evaluate = function(expr, json2, callback, otherTypeCallback) {
  var _this2 = this;
  var currParent = this.parent, currParentProperty = this.parentProperty;
  var flatten = this.flatten, wrap2 = this.wrap;
  this.currResultType = this.resultType;
  this.currPreventEval = this.preventEval;
  this.currSandbox = this.sandbox;
  callback = callback || this.callback;
  this.currOtherTypeCallback = otherTypeCallback || this.otherTypeCallback;
  json2 = json2 || this.json;
  expr = expr || this.path;
  if (expr && _typeof(expr) === "object" && !Array.isArray(expr)) {
    if (!expr.path && expr.path !== "") {
      throw new TypeError('You must supply a "path" property when providing an object argument to JSONPath.evaluate().');
    }
    if (!hasOwnProp.call(expr, "json")) {
      throw new TypeError('You must supply a "json" property when providing an object argument to JSONPath.evaluate().');
    }
    var _expr = expr;
    json2 = _expr.json;
    flatten = hasOwnProp.call(expr, "flatten") ? expr.flatten : flatten;
    this.currResultType = hasOwnProp.call(expr, "resultType") ? expr.resultType : this.currResultType;
    this.currSandbox = hasOwnProp.call(expr, "sandbox") ? expr.sandbox : this.currSandbox;
    wrap2 = hasOwnProp.call(expr, "wrap") ? expr.wrap : wrap2;
    this.currPreventEval = hasOwnProp.call(expr, "preventEval") ? expr.preventEval : this.currPreventEval;
    callback = hasOwnProp.call(expr, "callback") ? expr.callback : callback;
    this.currOtherTypeCallback = hasOwnProp.call(expr, "otherTypeCallback") ? expr.otherTypeCallback : this.currOtherTypeCallback;
    currParent = hasOwnProp.call(expr, "parent") ? expr.parent : currParent;
    currParentProperty = hasOwnProp.call(expr, "parentProperty") ? expr.parentProperty : currParentProperty;
    expr = expr.path;
  }
  currParent = currParent || null;
  currParentProperty = currParentProperty || null;
  if (Array.isArray(expr)) {
    expr = JSONPath.toPathString(expr);
  }
  if (!expr && expr !== "" || !json2) {
    return void 0;
  }
  var exprList = JSONPath.toPathArray(expr);
  if (exprList[0] === "$" && exprList.length > 1) {
    exprList.shift();
  }
  this._hasParentSelector = null;
  var result = this._trace(exprList, json2, ["$"], currParent, currParentProperty, callback).filter(function(ea) {
    return ea && !ea.isParentSelector;
  });
  if (!result.length) {
    return wrap2 ? [] : void 0;
  }
  if (!wrap2 && result.length === 1 && !result[0].hasArrExpr) {
    return this._getPreferredOutput(result[0]);
  }
  return result.reduce(function(rslt, ea) {
    var valOrPath = _this2._getPreferredOutput(ea);
    if (flatten && Array.isArray(valOrPath)) {
      rslt = rslt.concat(valOrPath);
    } else {
      rslt.push(valOrPath);
    }
    return rslt;
  }, []);
};
JSONPath.prototype._getPreferredOutput = function(ea) {
  var resultType = this.currResultType;
  switch (resultType) {
    case "all": {
      var path = Array.isArray(ea.path) ? ea.path : JSONPath.toPathArray(ea.path);
      ea.pointer = JSONPath.toPointer(path);
      ea.path = typeof ea.path === "string" ? ea.path : JSONPath.toPathString(ea.path);
      return ea;
    }
    case "value":
    case "parent":
    case "parentProperty":
      return ea[resultType];
    case "path":
      return JSONPath.toPathString(ea[resultType]);
    case "pointer":
      return JSONPath.toPointer(ea.path);
    default:
      throw new TypeError("Unknown result type");
  }
};
JSONPath.prototype._handleCallback = function(fullRetObj, callback, type2) {
  if (callback) {
    var preferredOutput = this._getPreferredOutput(fullRetObj);
    fullRetObj.path = typeof fullRetObj.path === "string" ? fullRetObj.path : JSONPath.toPathString(fullRetObj.path);
    callback(preferredOutput, type2, fullRetObj);
  }
};
JSONPath.prototype._trace = function(expr, val, path, parent, parentPropName, callback, hasArrExpr, literalPriority) {
  var _this3 = this;
  var retObj;
  if (!expr.length) {
    retObj = {
      path,
      value: val,
      parent,
      parentProperty: parentPropName,
      hasArrExpr
    };
    this._handleCallback(retObj, callback, "value");
    return retObj;
  }
  var loc = expr[0], x = expr.slice(1);
  var ret = [];
  function addRet(elems) {
    if (Array.isArray(elems)) {
      elems.forEach(function(t2) {
        ret.push(t2);
      });
    } else {
      ret.push(elems);
    }
  }
  if ((typeof loc !== "string" || literalPriority) && val && hasOwnProp.call(val, loc)) {
    addRet(this._trace(x, val[loc], push(path, loc), val, loc, callback, hasArrExpr));
  } else if (loc === "*") {
    this._walk(loc, x, val, path, parent, parentPropName, callback, function(m, l, _x, v, p, par, pr, cb) {
      addRet(_this3._trace(unshift(m, _x), v, p, par, pr, cb, true, true));
    });
  } else if (loc === "..") {
    addRet(this._trace(x, val, path, parent, parentPropName, callback, hasArrExpr));
    this._walk(loc, x, val, path, parent, parentPropName, callback, function(m, l, _x, v, p, par, pr, cb) {
      if (_typeof(v[m]) === "object") {
        addRet(_this3._trace(unshift(l, _x), v[m], push(p, m), v, m, cb, true));
      }
    });
  } else if (loc === "^") {
    this._hasParentSelector = true;
    return {
      path: path.slice(0, -1),
      expr: x,
      isParentSelector: true
    };
  } else if (loc === "~") {
    retObj = {
      path: push(path, loc),
      value: parentPropName,
      parent,
      parentProperty: null
    };
    this._handleCallback(retObj, callback, "property");
    return retObj;
  } else if (loc === "$") {
    addRet(this._trace(x, val, path, null, null, callback, hasArrExpr));
  } else if (/^(\x2D?[0-9]*):(\x2D?[0-9]*):?([0-9]*)$/.test(loc)) {
    addRet(this._slice(loc, x, val, path, parent, parentPropName, callback));
  } else if (loc.indexOf("?(") === 0) {
    if (this.currPreventEval) {
      throw new Error("Eval [?(expr)] prevented in JSONPath expression.");
    }
    this._walk(loc, x, val, path, parent, parentPropName, callback, function(m, l, _x, v, p, par, pr, cb) {
      if (_this3._eval(l.replace(/^\?\(((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?)\)$/, "$1"), v[m], m, p, par, pr)) {
        addRet(_this3._trace(unshift(m, _x), v, p, par, pr, cb, true));
      }
    });
  } else if (loc[0] === "(") {
    if (this.currPreventEval) {
      throw new Error("Eval [(expr)] prevented in JSONPath expression.");
    }
    addRet(this._trace(unshift(this._eval(loc, val, path[path.length - 1], path.slice(0, -1), parent, parentPropName), x), val, path, parent, parentPropName, callback, hasArrExpr));
  } else if (loc[0] === "@") {
    var addType = false;
    var valueType = loc.slice(1, -2);
    switch (valueType) {
      case "scalar":
        if (!val || !["object", "function"].includes(_typeof(val))) {
          addType = true;
        }
        break;
      case "boolean":
      case "string":
      case "undefined":
      case "function":
        if (_typeof(val) === valueType) {
          addType = true;
        }
        break;
      case "integer":
        if (Number.isFinite(val) && !(val % 1)) {
          addType = true;
        }
        break;
      case "number":
        if (Number.isFinite(val)) {
          addType = true;
        }
        break;
      case "nonFinite":
        if (typeof val === "number" && !Number.isFinite(val)) {
          addType = true;
        }
        break;
      case "object":
        if (val && _typeof(val) === valueType) {
          addType = true;
        }
        break;
      case "array":
        if (Array.isArray(val)) {
          addType = true;
        }
        break;
      case "other":
        addType = this.currOtherTypeCallback(val, path, parent, parentPropName);
        break;
      case "null":
        if (val === null) {
          addType = true;
        }
        break;
      default:
        throw new TypeError("Unknown value type " + valueType);
    }
    if (addType) {
      retObj = {
        path,
        value: val,
        parent,
        parentProperty: parentPropName
      };
      this._handleCallback(retObj, callback, "value");
      return retObj;
    }
  } else if (loc[0] === "`" && val && hasOwnProp.call(val, loc.slice(1))) {
    var locProp = loc.slice(1);
    addRet(this._trace(x, val[locProp], push(path, locProp), val, locProp, callback, hasArrExpr, true));
  } else if (loc.includes(",")) {
    var parts = loc.split(",");
    var _iterator = _createForOfIteratorHelper(parts), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var part = _step.value;
        addRet(this._trace(unshift(part, x), val, path, parent, parentPropName, callback, true));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else if (!literalPriority && val && hasOwnProp.call(val, loc)) {
    addRet(this._trace(x, val[loc], push(path, loc), val, loc, callback, hasArrExpr, true));
  }
  if (this._hasParentSelector) {
    for (var t = 0; t < ret.length; t++) {
      var rett = ret[t];
      if (rett && rett.isParentSelector) {
        var tmp = this._trace(rett.expr, val, rett.path, parent, parentPropName, callback, hasArrExpr);
        if (Array.isArray(tmp)) {
          ret[t] = tmp[0];
          var tl = tmp.length;
          for (var tt = 1; tt < tl; tt++) {
            t++;
            ret.splice(t, 0, tmp[tt]);
          }
        } else {
          ret[t] = tmp;
        }
      }
    }
  }
  return ret;
};
JSONPath.prototype._walk = function(loc, expr, val, path, parent, parentPropName, callback, f) {
  if (Array.isArray(val)) {
    var n = val.length;
    for (var i = 0; i < n; i++) {
      f(i, loc, expr, val, path, parent, parentPropName, callback);
    }
  } else if (val && _typeof(val) === "object") {
    Object.keys(val).forEach(function(m) {
      f(m, loc, expr, val, path, parent, parentPropName, callback);
    });
  }
};
JSONPath.prototype._slice = function(loc, expr, val, path, parent, parentPropName, callback) {
  if (!Array.isArray(val)) {
    return void 0;
  }
  var len = val.length, parts = loc.split(":"), step = parts[2] && Number.parseInt(parts[2]) || 1;
  var start4 = parts[0] && Number.parseInt(parts[0]) || 0, end = parts[1] && Number.parseInt(parts[1]) || len;
  start4 = start4 < 0 ? Math.max(0, start4 + len) : Math.min(len, start4);
  end = end < 0 ? Math.max(0, end + len) : Math.min(len, end);
  var ret = [];
  for (var i = start4; i < end; i += step) {
    var tmp = this._trace(unshift(i, expr), val, path, parent, parentPropName, callback, true);
    tmp.forEach(function(t) {
      ret.push(t);
    });
  }
  return ret;
};
JSONPath.prototype._eval = function(code, _v, _vname, path, parent, parentPropName) {
  if (code.includes("@parentProperty")) {
    this.currSandbox._$_parentProperty = parentPropName;
    code = code.replace(/@parentProperty/g, "_$_parentProperty");
  }
  if (code.includes("@parent")) {
    this.currSandbox._$_parent = parent;
    code = code.replace(/@parent/g, "_$_parent");
  }
  if (code.includes("@property")) {
    this.currSandbox._$_property = _vname;
    code = code.replace(/@property/g, "_$_property");
  }
  if (code.includes("@path")) {
    this.currSandbox._$_path = JSONPath.toPathString(path.concat([_vname]));
    code = code.replace(/@path/g, "_$_path");
  }
  if (code.includes("@root")) {
    this.currSandbox._$_root = this.json;
    code = code.replace(/@root/g, "_$_root");
  }
  if (/@([\t-\r \)\.\[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])/.test(code)) {
    this.currSandbox._$_v = _v;
    code = code.replace(/@([\t-\r \)\.\[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])/g, "_$_v$1");
  }
  try {
    return this.vm.runInNewContext(code, this.currSandbox);
  } catch (e) {
    console.log(e);
    throw new Error("jsonPath: " + e.message + ": " + code);
  }
};
JSONPath.cache = {};
JSONPath.toPathString = function(pathArr) {
  var x = pathArr, n = x.length;
  var p = "$";
  for (var i = 1; i < n; i++) {
    if (!/^(~|\^|@(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\(\))$/.test(x[i])) {
      p += /^[\*0-9]+$/.test(x[i]) ? "[" + x[i] + "]" : "['" + x[i] + "']";
    }
  }
  return p;
};
JSONPath.toPointer = function(pointer) {
  var x = pointer, n = x.length;
  var p = "";
  for (var i = 1; i < n; i++) {
    if (!/^(~|\^|@(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\(\))$/.test(x[i])) {
      p += "/" + x[i].toString().replace(/~/g, "~0").replace(/\//g, "~1");
    }
  }
  return p;
};
JSONPath.toPathArray = function(expr) {
  var cache = JSONPath.cache;
  if (cache[expr]) {
    return cache[expr].concat();
  }
  var subx = [];
  var normalized = expr.replace(/@(?:null|boolean|number|string|integer|undefined|nonFinite|scalar|array|object|function|other)\(\)/g, ";$&;").replace(/['\[](\??\((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\))['\]]/g, function($0, $1) {
    return "[#" + (subx.push($1) - 1) + "]";
  }).replace(/\[["']((?:(?!['\]])[\s\S])*)["']\]/g, function($0, prop) {
    return "['" + prop.replace(/\./g, "%@%").replace(/~/g, "%%@@%%") + "']";
  }).replace(/~/g, ";~;").replace(/["']?\.["']?(?!(?:(?!\[)[\s\S])*\])|\[["']?/g, ";").replace(/%@%/g, ".").replace(/%%@@%%/g, "~").replace(/(?:;)?(\^+)(?:;)?/g, function($0, ups) {
    return ";" + ups.split("").join(";") + ";";
  }).replace(/;;;|;;/g, ";..;").replace(/;$|'?\]|'$/g, "");
  var exprList = normalized.split(";").map(function(exp) {
    var match = exp.match(/#([0-9]+)/);
    return !match || !match[1] ? exp : subx[match[1]];
  });
  cache[expr] = exprList;
  return cache[expr].concat();
};
var moveToAnotherArray = function moveToAnotherArray2(source, target, conditionCb) {
  var il = source.length;
  for (var i = 0; i < il; i++) {
    var item = source[i];
    if (conditionCb(item)) {
      target.push(source.splice(i--, 1)[0]);
    }
  }
};
JSONPath.prototype.vm = {
  /**
   * @param {string} expr Expression to evaluate
   * @param {PlainObject} context Object whose items will be added
   *   to evaluation
   * @returns {any} Result of evaluated code
   */
  runInNewContext: function runInNewContext(expr, context) {
    var keys = Object.keys(context);
    var funcs = [];
    moveToAnotherArray(keys, funcs, function(key) {
      return typeof context[key] === "function";
    });
    var values = keys.map(function(vr, i) {
      return context[vr];
    });
    var funcString = funcs.reduce(function(s, func) {
      var fString = context[func].toString();
      if (!/function/.test(fString)) {
        fString = "function " + fString;
      }
      return "var " + func + "=" + fString + ";" + s;
    }, "");
    expr = funcString + expr;
    if (!/(["'])use strict\1/.test(expr) && !keys.includes("arguments")) {
      expr = "var arguments = undefined;" + expr;
    }
    expr = expr.replace(/;[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*$/, "");
    var lastStatementEnd = expr.lastIndexOf(";");
    var code = lastStatementEnd > -1 ? expr.slice(0, lastStatementEnd + 1) + " return " + expr.slice(lastStatementEnd + 1) : " return " + expr;
    return _construct(Function, _toConsumableArray(keys).concat([code])).apply(void 0, _toConsumableArray(values));
  }
};

// node_modules/@wix/motion-edm-autogen-transformations-core/dist/esm/lib/helpers.js
var import_lodash5 = __toESM(require_lodash());

// node_modules/@wix/motion-edm-autogen-transformations-core/dist/esm/lib/transformations/constants.js
var visitorTypes = {
  TOP_LEVEL_SIMPLE_TRANSFORMATION: "TopLevelSimpleTransformationExpression",
  TOP_LEVEL_CUSTOM_FUNCTION: "TopLevelCustomFunctionExpression",
  NESTED_UNSUPPORTED_TRANSFORMATION: "NestedUnsupportedTransformationExpression",
  TOP_LEVEL_UNSUPPORTED_TRANSFORMATION: "TopLevelUnsupportedTransformationExpression",
  NESTED_SPREAD: "NestedSpreadExpression",
  TOP_LEVEL_SPREAD: "TopLevelSpreadExpression",
  CUSTOM_FUNCTION: "CustomFunctionExpression",
  NESTED_SIMPLE_TRANSFORMATION: "NestedSimpleTransformationExpression",
  MAP_ARRAY_ITEMS: "MapArrayItems",
  TOP_LEVEL_MAP_ARRAY_ITEMS: "TopLevelMapArrayItems",
  TOP_LEVEL_OMIT_TRANSFORMATION: "TopLevelOmit",
  NESTED_OMIT_TRANSFORMATION: "NestedOmit",
  NESTED_CONSTANT_VALUE: "NestedConstantValue"
};
var JSON_PATH_ROOT = "$";

// node_modules/@wix/motion-edm-autogen-transformations-core/dist/esm/lib/transformations/common.js
var unwrap = function(_a14) {
  var responseMessageResultPath = _a14.responseMessageResultPath;
  return "$.".concat(responseMessageResultPath);
};
var transformations = {
  JS_SINGLE_ARG_UNCHANGED: "$[0]",
  RESPONSE_OBJECT_UNCHANGED: JSON_PATH_ROOT,
  ARRAY_ITEMS_PATH_PROPERTY_NAME: "@path",
  ARRAY_ITEM_TRANSFORMATION_PROPERTY_NAME: "@itemTransformation",
  OMIT_SOURCE_PROPERTY_NAME: "@source",
  FIELDS_TO_OMIT_PROPERTY_NAME: "@omit",
  SPREAD_OPERATOR: "*",
  CONSTANT_VALUE_PROPERTY_NAME: "@constant"
};

// node_modules/@wix/motion-edm-autogen-transformations-core/dist/esm/lib/helpers.js
var RESPONSE_OBJECT_UNCHANGED = transformations.RESPONSE_OBJECT_UNCHANGED;
var ARRAY_ITEMS_PATH_PROPERTY_NAME = transformations.ARRAY_ITEMS_PATH_PROPERTY_NAME;
var ARRAY_ITEM_TRANSFORMATION_PROPERTY_NAME = transformations.ARRAY_ITEM_TRANSFORMATION_PROPERTY_NAME;
var OMIT_SOURCE_PROPERTY_NAME = transformations.OMIT_SOURCE_PROPERTY_NAME;
var FIELDS_TO_OMIT_PROPERTY_NAME = transformations.FIELDS_TO_OMIT_PROPERTY_NAME;
var SPREAD_OPERATOR = transformations.SPREAD_OPERATOR;
var CONSTANT_VALUE_PROPERTY_NAME = transformations.CONSTANT_VALUE_PROPERTY_NAME;
var isSimpleTransformation = function(transformation) {
  return typeof transformation === "string";
};
var isSpreadOperator = function(key) {
  return key === SPREAD_OPERATOR;
};
var getArgumentIndex = function(s) {
  var match = s.match(/\$\[(?<argIndex>\d+)\]/);
  return match && match.groups && Number(match.groups.argIndex);
};
var isJsonPathExpression = function(exp) {
  return exp && exp.startsWith(JSON_PATH_ROOT);
};
var stripJsonPathRootPrefix = function(jsonPath) {
  return jsonPath.replace("".concat(JSON_PATH_ROOT, "."), "");
};
var isMapArrayItemsTransformation = function(transformationValue) {
  return (0, import_lodash5.has)(transformationValue, ARRAY_ITEMS_PATH_PROPERTY_NAME) && (0, import_lodash5.has)(transformationValue, ARRAY_ITEM_TRANSFORMATION_PROPERTY_NAME);
};
var parseMapArrayItemsTransformation = function(transformationValue) {
  return {
    sourceArrayExpression: transformationValue[ARRAY_ITEMS_PATH_PROPERTY_NAME],
    itemTransformation: transformationValue[ARRAY_ITEM_TRANSFORMATION_PROPERTY_NAME]
  };
};
var isOmitTransformation = function(transformationValue) {
  return (0, import_lodash5.has)(transformationValue, OMIT_SOURCE_PROPERTY_NAME) && (0, import_lodash5.has)(transformationValue, FIELDS_TO_OMIT_PROPERTY_NAME);
};
var parseOmitTransformation = function(transformationValue) {
  return {
    sourceExpression: transformationValue[OMIT_SOURCE_PROPERTY_NAME],
    fieldsToOmit: transformationValue[FIELDS_TO_OMIT_PROPERTY_NAME]
  };
};
var isConstantExpression = function(value) {
  return (0, import_lodash5.has)(value, CONSTANT_VALUE_PROPERTY_NAME);
};

// node_modules/@wix/motion-edm-autogen-transformations-core/dist/esm/lib/transformations/custom-functions.js
var import_lodash6 = __toESM(require_lodash());
var FUNCTION_CALL_EXPRESSION_REGEX = /^#(?<functionName>[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*)\((?<argumentExpressions>[\S ]*)\)$/;
var parseCustomFunctionCall = function(functionCallExpression) {
  var match = functionCallExpression.match(FUNCTION_CALL_EXPRESSION_REGEX);
  var argumentExpressions = (0, import_lodash6.get)(match, "groups.argumentExpressions", null);
  return {
    functionName: (0, import_lodash6.get)(match, "groups.functionName", null),
    argumentExpressions: argumentExpressions === null ? argumentExpressions : argumentExpressions.split(",").filter(function(s) {
      return s;
    }).map(import_lodash6.trim)
  };
};
var isFunctionCallExpression = function(expression) {
  return (0, import_lodash6.isString)(expression) && expression.startsWith("#");
};
var runCustomFunctionCallExpression = function(_a14) {
  var customFunctions = _a14.customFunctions, functionName = _a14.functionName, _b = _a14.argumentValues, argumentValues = _b === void 0 ? [] : _b, transformationParentPath = _a14.transformationParentPath;
  var customFunction = (0, import_lodash6.get)(customFunctions, functionName);
  if (!customFunction) {
    throw new Error('unrecognized custom function "'.concat(functionName, '"'));
  }
  try {
    return customFunction.apply(void 0, argumentValues);
  } catch (error) {
    throw new Error("Transforming ".concat(transformationParentPath, " failed, #").concat(functionName, ' threw: "').concat(error.message, '" for arguments: ').concat(JSON.stringify(argumentValues)));
  }
};

// node_modules/@wix/motion-edm-autogen-transformations-core/dist/esm/lib/transformations/preset/create.js
var import_lodash7 = __toESM(require_lodash());
var buildRequestTransformation = function(_a14) {
  var requestMessageEntityPath = _a14.requestMessageEntityPath;
  return (0, import_lodash7.set)({}, requestMessageEntityPath, "$[0]");
};

// node_modules/@wix/motion-edm-autogen-common/dist/esm/index.js
var import_lodash8 = __toESM(require_lodash());

// node_modules/@wix/motion-edm-autogen-common/dist/esm/lib/constants.js
var ARTIFACT_GROUP_ID = "com.wixpress.cloud.auto-generated-edms";
var AS_ADMIN_NAMESPACE_NAME = "withPermissions";

// node_modules/@wix/motion-edm-autogen-common/dist/esm/lib/Elevations.js
var Elevations;
(function(Elevations2) {
  Elevations2["UserIdentity"] = "USER_IDENTITY";
  Elevations2["UserBackendCodeIdentity"] = "USER_BACKEND_CODE_IDENTITY";
  Elevations2["Dynamic"] = "DYNAMIC";
})(Elevations || (Elevations = {}));

// node_modules/@wix/motion-edm-autogen-common/dist/esm/lib/PagingMethods.js
var PagingMethods;
(function(PagingMethods3) {
  PagingMethods3["Cursor"] = "CURSOR";
  PagingMethods3["Offset"] = "OFFSET";
})(PagingMethods || (PagingMethods = {}));

// node_modules/@wix/motion-edm-autogen-common/dist/esm/index.js
var constants = {
  ARTIFACT_GROUP_ID,
  AS_ADMIN_NAMESPACE_NAME,
  DEFAULT_REQUEST_QUERY_OBJECT_PROPERTY_NAME: "query",
  PagingMethods,
  Elevations
};
var segmentCount = function(path) {
  return path.split(".").length;
};

// node_modules/@wix/motion-edm-autogen-transformations-core/dist/esm/lib/transformations/preset/delete.js
var import_lodash9 = __toESM(require_lodash());
var RESPONSE_OBJECT_UNCHANGED2 = transformations.RESPONSE_OBJECT_UNCHANGED;
var contains = function(longerPath, shorterPath) {
  return longerPath.startsWith(shorterPath) && segmentCount(longerPath) === segmentCount(shorterPath) + 1;
};
var buildRequestTransformation2 = function(_a14) {
  var _b;
  var requestMessageIdentifierPath = _a14.requestMessageIdentifierPath, requestMessageOptionsPath = _a14.requestMessageOptionsPath;
  var transformed = (0, import_lodash9.set)({}, requestMessageIdentifierPath, "$[0]");
  if (requestMessageOptionsPath) {
    if (contains(requestMessageIdentifierPath, requestMessageOptionsPath)) {
      return (0, import_lodash9.merge)(transformed, (_b = {}, _b[requestMessageOptionsPath] = { "*": "$[1]" }, _b));
    }
    return (0, import_lodash9.set)(transformed, requestMessageOptionsPath, "$[1]");
  }
  return transformed;
};
var buildResponseTransformation = function() {
  return RESPONSE_OBJECT_UNCHANGED2;
};

// node_modules/@wix/motion-edm-autogen-transformations-core/dist/esm/lib/transformations/preset/get.js
var import_lodash10 = __toESM(require_lodash());
var buildRequestTransformation3 = function(_a14) {
  var requestMessageIdentifierPath = _a14.requestMessageIdentifierPath;
  return (0, import_lodash10.set)({}, requestMessageIdentifierPath, "$[0]");
};

// node_modules/@wix/motion-edm-autogen-transformations-core/dist/esm/lib/transformations/preset/list.js
var buildRequestTransformation4 = function() {
  return transformations.JS_SINGLE_ARG_UNCHANGED;
};

// node_modules/@wix/motion-edm-autogen-transformations-core/dist/esm/lib/transformations/preset/query.js
var ARRAY_ITEMS_PATH_PROPERTY_NAME2 = transformations.ARRAY_ITEMS_PATH_PROPERTY_NAME;
var ARRAY_ITEM_TRANSFORMATION_PROPERTY_NAME2 = transformations.ARRAY_ITEM_TRANSFORMATION_PROPERTY_NAME;
var DEFAULT_REQUEST_QUERY_OBJECT_PROPERTY_NAME = constants.DEFAULT_REQUEST_QUERY_OBJECT_PROPERTY_NAME;
var ITEMS_RESULT_PROPERTY_NAME = "items";
var PAGING_METADATA_RESULT_PROPERTY_NAME = "pagingMetadata";
var buildRequestTransformation5 = function(_a14) {
  var _b;
  var _c = _a14 === void 0 ? {} : _a14, _d = _c.requestQueryObjectPropertyName, requestQueryObjectPropertyName = _d === void 0 ? DEFAULT_REQUEST_QUERY_OBJECT_PROPERTY_NAME : _d;
  return _b = {}, _b[requestQueryObjectPropertyName] = "$[0]", _b["*"] = "$[1]", _b;
};
var buildResponseTransformation2 = function(_a14) {
  var _b, _c;
  var responseMessageResultPath = _a14.responseMessageResultPath, responseMessagePagingMetadataPath = _a14.responseMessagePagingMetadataPath, itemTransformation = _a14.itemTransformation;
  return _b = {}, _b[ITEMS_RESULT_PROPERTY_NAME] = itemTransformation ? (_c = {}, _c[ARRAY_ITEMS_PATH_PROPERTY_NAME2] = "$.".concat(responseMessageResultPath), _c[ARRAY_ITEM_TRANSFORMATION_PROPERTY_NAME2] = itemTransformation, _c) : "$.".concat(responseMessageResultPath), _b[PAGING_METADATA_RESULT_PROPERTY_NAME] = "$.".concat(responseMessagePagingMetadataPath), _b;
};

// node_modules/@wix/motion-edm-autogen-transformations-core/dist/esm/lib/transformations/preset/update.js
var import_lodash11 = __toESM(require_lodash());
var objectWithNestedPath = function(path, value) {
  return (0, import_lodash11.set)({}, path, value);
};
var buildRequestTransformation6 = function(_a14) {
  var requestMessageEntityIdentifierField = _a14.requestMessageEntityIdentifierField, requestMessageEntityPath = _a14.requestMessageEntityPath, requestMessageOptionsPath = _a14.requestMessageOptionsPath;
  var transformation = objectWithNestedPath("".concat(requestMessageEntityPath, ".").concat(requestMessageEntityIdentifierField), "$[0]");
  if (requestMessageOptionsPath) {
    if (requestMessageOptionsPath === requestMessageEntityPath) {
      return (0, import_lodash11.merge)(transformation, objectWithNestedPath(requestMessageOptionsPath, {
        "*": ["$[1]", "$[2]"]
      }));
    }
    (0, import_lodash11.set)(transformation, requestMessageOptionsPath, "$[2]");
  }
  return (0, import_lodash11.merge)({}, transformation, objectWithNestedPath(requestMessageEntityPath, { "*": "$[1]" }));
};

// node_modules/deep-for-each/es/index.js
var import_lodash12 = __toESM(require_lodash2());
function forEachObject(obj, fn, path) {
  for (const key in obj) {
    const deepPath = path ? `${path}.${key}` : key;
    fn.call(obj, obj[key], key, obj, deepPath);
    forEach(obj[key], fn, deepPath);
  }
}
function forEachArray(array, fn, path) {
  array.forEach((value, index, arr) => {
    const deepPath = `${path}[${index}]`;
    fn.call(arr, value, index, arr, deepPath);
    forEach(arr[index], fn, deepPath);
  });
}
function forEach(value, fn, path) {
  path = path || "";
  if (Array.isArray(value)) {
    forEachArray(value, fn, path);
  } else if ((0, import_lodash12.default)(value)) {
    forEachObject(value, fn, path);
  }
}
var es_default = forEach;

// node_modules/@wix/motion-edm-autogen-transformations-core/dist/esm/lib/transformations/reduceTransformation.js
var import_lodash13 = __toESM(require_lodash());
var ARRAY_ITEMS_PATH_PROPERTY_NAME3 = transformations.ARRAY_ITEMS_PATH_PROPERTY_NAME;
var ARRAY_ITEM_TRANSFORMATION_PROPERTY_NAME3 = transformations.ARRAY_ITEM_TRANSFORMATION_PROPERTY_NAME;
var OMIT_SOURCE_PROPERTY_NAME2 = transformations.OMIT_SOURCE_PROPERTY_NAME;
var FIELDS_TO_OMIT_PROPERTY_NAME2 = transformations.FIELDS_TO_OMIT_PROPERTY_NAME;
var CONSTANT_VALUE_PROPERTY_NAME2 = transformations.CONSTANT_VALUE_PROPERTY_NAME;
var TOP_LEVEL_SIMPLE_TRANSFORMATION = visitorTypes.TOP_LEVEL_SIMPLE_TRANSFORMATION;
var TOP_LEVEL_CUSTOM_FUNCTION = visitorTypes.TOP_LEVEL_CUSTOM_FUNCTION;
var TOP_LEVEL_SPREAD = visitorTypes.TOP_LEVEL_SPREAD;
var NESTED_SPREAD = visitorTypes.NESTED_SPREAD;
var NESTED_UNSUPPORTED_TRANSFORMATION = visitorTypes.NESTED_UNSUPPORTED_TRANSFORMATION;
var TOP_LEVEL_UNSUPPORTED_TRANSFORMATION = visitorTypes.TOP_LEVEL_UNSUPPORTED_TRANSFORMATION;
var CUSTOM_FUNCTION = visitorTypes.CUSTOM_FUNCTION;
var NESTED_SIMPLE_TRANSFORMATION = visitorTypes.NESTED_SIMPLE_TRANSFORMATION;
var MAP_ARRAY_ITEMS = visitorTypes.MAP_ARRAY_ITEMS;
var TOP_LEVEL_MAP_ARRAY_ITEMS = visitorTypes.TOP_LEVEL_MAP_ARRAY_ITEMS;
var TOP_LEVEL_OMIT_TRANSFORMATION = visitorTypes.TOP_LEVEL_OMIT_TRANSFORMATION;
var NESTED_OMIT_TRANSFORMATION = visitorTypes.NESTED_OMIT_TRANSFORMATION;
var NESTED_CONSTANT_VALUE = visitorTypes.NESTED_CONSTANT_VALUE;
var safeResolveDefaultExport = function(module) {
  var isEsModule = module && module.__esModule && module.default;
  return isEsModule ? module.default : module;
};
var deepForEach = safeResolveDefaultExport(es_default);
var withoutSpreadOperatorKeys = function(obj) {
  return Object.keys(obj).filter(function(k) {
    return !isSpreadOperator(k);
  });
};
var safeInvokeVisitor = function(visitors, name) {
  var args = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    args[_i - 2] = arguments[_i];
  }
  var visitor = (0, import_lodash13.get)(visitors, name);
  return visitor && visitor.apply(void 0, args);
};
var reduceComplexTransformation = function(transformation, _a14) {
  var visitors = _a14.visitors, accumulator = _a14.accumulator;
  var terminalPaths = [];
  var addTerminals = function(path, leaves) {
    if (leaves === void 0) {
      leaves = [];
    }
    return leaves.length > 0 ? leaves.forEach(function(leaf) {
      return terminalPaths.push([path, leaf].join("."));
    }) : terminalPaths.push(path);
  };
  deepForEach(transformation, function(value, key, _3, path) {
    if ((0, import_lodash13.some)(terminalPaths, function(tp) {
      return path.startsWith(tp);
    })) {
      return;
    }
    if (isSpreadOperator(key)) {
      addTerminals(path);
      var spreadOperatorParentPath_1 = path.replace(/\.?\*/, "");
      var values = !(0, import_lodash13.isArray)(value) ? [value] : value;
      values.forEach(function(item) {
        if (spreadOperatorParentPath_1 === "") {
          var siblingKeys = withoutSpreadOperatorKeys(transformation);
          safeInvokeVisitor(visitors, TOP_LEVEL_SPREAD, accumulator, item, siblingKeys);
        } else {
          var siblingKeys = withoutSpreadOperatorKeys((0, import_lodash13.get)(transformation, spreadOperatorParentPath_1));
          safeInvokeVisitor(visitors, NESTED_SPREAD, accumulator, spreadOperatorParentPath_1, item, siblingKeys);
        }
      });
      return;
    }
    if (isOmitTransformation(value)) {
      addTerminals(path, [
        OMIT_SOURCE_PROPERTY_NAME2,
        FIELDS_TO_OMIT_PROPERTY_NAME2
      ]);
      var _a15 = parseOmitTransformation(value), sourceExpression = _a15.sourceExpression, fieldsToOmit = _a15.fieldsToOmit;
      safeInvokeVisitor(visitors, NESTED_OMIT_TRANSFORMATION, accumulator, path, sourceExpression, fieldsToOmit);
      return;
    }
    if (isMapArrayItemsTransformation(value)) {
      addTerminals(path, [
        ARRAY_ITEMS_PATH_PROPERTY_NAME3,
        ARRAY_ITEM_TRANSFORMATION_PROPERTY_NAME3
      ]);
      var _b = parseMapArrayItemsTransformation(value), sourceArrayExpression = _b.sourceArrayExpression, itemTransformation = _b.itemTransformation;
      safeInvokeVisitor(visitors, MAP_ARRAY_ITEMS, accumulator, path, sourceArrayExpression, itemTransformation);
      return;
    }
    if (isFunctionCallExpression(value)) {
      var _c = parseCustomFunctionCall(value), functionName = _c.functionName, argumentExpressions = _c.argumentExpressions;
      safeInvokeVisitor(visitors, CUSTOM_FUNCTION, accumulator, path, functionName, argumentExpressions, value);
      return;
    }
    if (isConstantExpression(value)) {
      addTerminals(path, [CONSTANT_VALUE_PROPERTY_NAME2]);
      safeInvokeVisitor(visitors, NESTED_CONSTANT_VALUE, {
        accumulator,
        path,
        value: value[CONSTANT_VALUE_PROPERTY_NAME2]
      });
      return;
    }
    if ((0, import_lodash13.isString)(value)) {
      if (isJsonPathExpression(value)) {
        safeInvokeVisitor(visitors, NESTED_SIMPLE_TRANSFORMATION, accumulator, path, value);
      } else {
        safeInvokeVisitor(visitors, NESTED_UNSUPPORTED_TRANSFORMATION, accumulator, path, value);
      }
    }
  });
  return accumulator;
};
var reduceTransformation = function(transformation, _a14) {
  var visitors = _a14.visitors, accumulator = _a14.accumulator;
  if (isSimpleTransformation(transformation)) {
    switch (true) {
      case isJsonPathExpression(transformation):
        return safeInvokeVisitor(visitors, TOP_LEVEL_SIMPLE_TRANSFORMATION, transformation);
      case isFunctionCallExpression(transformation): {
        var _b = parseCustomFunctionCall(transformation), functionName = _b.functionName, argumentExpressions = _b.argumentExpressions;
        return safeInvokeVisitor(visitors, TOP_LEVEL_CUSTOM_FUNCTION, functionName, argumentExpressions, transformation);
      }
      default:
        return safeInvokeVisitor(visitors, TOP_LEVEL_UNSUPPORTED_TRANSFORMATION, transformation);
    }
  }
  if (isOmitTransformation(transformation)) {
    var _c = parseOmitTransformation(transformation), sourceExpression = _c.sourceExpression, fieldsToOmit = _c.fieldsToOmit;
    return safeInvokeVisitor(visitors, TOP_LEVEL_OMIT_TRANSFORMATION, sourceExpression, fieldsToOmit);
  }
  if (isMapArrayItemsTransformation(transformation)) {
    var _d = parseMapArrayItemsTransformation(transformation), sourceArrayExpression = _d.sourceArrayExpression, itemTransformation = _d.itemTransformation;
    return safeInvokeVisitor(visitors, TOP_LEVEL_MAP_ARRAY_ITEMS, sourceArrayExpression, itemTransformation);
  }
  return reduceComplexTransformation(transformation, { visitors, accumulator });
};

// node_modules/@wix/motion-edm-autogen-transformations-core/dist/esm/index.js
var JS_SINGLE_ARG_UNCHANGED = transformations.JS_SINGLE_ARG_UNCHANGED;
var RESPONSE_OBJECT_UNCHANGED3 = transformations.RESPONSE_OBJECT_UNCHANGED;
var ARRAY_ITEMS_PATH_PROPERTY_NAME4 = transformations.ARRAY_ITEMS_PATH_PROPERTY_NAME;
var ARRAY_ITEM_TRANSFORMATION_PROPERTY_NAME4 = transformations.ARRAY_ITEM_TRANSFORMATION_PROPERTY_NAME;
var OMIT_SOURCE_PROPERTY_NAME3 = transformations.OMIT_SOURCE_PROPERTY_NAME;
var FIELDS_TO_OMIT_PROPERTY_NAME3 = transformations.FIELDS_TO_OMIT_PROPERTY_NAME;
var transformations2 = {
  JS_SINGLE_ARG_UNCHANGED,
  RESPONSE_OBJECT_UNCHANGED: RESPONSE_OBJECT_UNCHANGED3,
  ARRAY_ITEMS_PATH_PROPERTY_NAME: ARRAY_ITEMS_PATH_PROPERTY_NAME4,
  ARRAY_ITEM_TRANSFORMATION_PROPERTY_NAME: ARRAY_ITEM_TRANSFORMATION_PROPERTY_NAME4,
  OMIT_SOURCE_PROPERTY_NAME: OMIT_SOURCE_PROPERTY_NAME3,
  FIELDS_TO_OMIT_PROPERTY_NAME: FIELDS_TO_OMIT_PROPERTY_NAME3
};
var transformationBuilder = function(buildRequestTransformation7, buildResponseTransformation3) {
  return {
    buildRequestTransformation: buildRequestTransformation7,
    buildResponseTransformation: buildResponseTransformation3
  };
};
var preset = {
  create: transformationBuilder(buildRequestTransformation, unwrap),
  update: transformationBuilder(buildRequestTransformation6, unwrap),
  delete: transformationBuilder(buildRequestTransformation2, buildResponseTransformation),
  get: transformationBuilder(buildRequestTransformation3, unwrap),
  list: transformationBuilder(buildRequestTransformation4, unwrap),
  query: __assign(__assign({}, transformationBuilder(buildRequestTransformation5, buildResponseTransformation2)), { ITEMS_RESULT_PROPERTY_NAME, PAGING_METADATA_RESULT_PROPERTY_NAME })
};
var corvidEntities = {
  toCorvidName,
  fromCorvidName
};

// node_modules/@wix/motion-edm-autogen-transformations/dist/esm/lib/converters.js
var import_lodash14 = __toESM(require_lodash());
var fromCorvidName2 = corvidEntities.fromCorvidName;
var toCorvidName2 = corvidEntities.toCorvidName;
var renameUsing = function(renameKey) {
  return function(object) {
    return (0, import_lodash14.mapKeys)(object, function(_3, k) {
      return renameKey(k);
    });
  };
};
var mapObjectDeep = function(object, renameObjectKeys) {
  return renameObjectKeys((0, import_lodash14.transform)(object, function(acc, value, key) {
    acc[key] = mapDeep(value, renameObjectKeys);
  }));
};
var mapDeep = function(payload, renameObjectKeys) {
  if ((0, import_lodash14.isPlainObject)(payload)) {
    return mapObjectDeep(payload, renameObjectKeys);
  }
  if ((0, import_lodash14.isArray)(payload)) {
    return payload.map(function(item) {
      return mapDeep(item, renameObjectKeys);
    });
  }
  return payload;
};
var fromCorvidEntity = function(payload) {
  return mapDeep(payload, renameUsing(fromCorvidName2));
};
var toCorvidEntity = function(payload) {
  return mapDeep(payload, renameUsing(toCorvidName2));
};

// node_modules/@wix/motion-edm-autogen-transformations/dist/esm/lib/transformations/custom-transformations.js
var import_lodash15 = __toESM(require_lodash());
var getValueAtPath = function(json2, path) {
  return JSONPath({ path, json: json2, wrap: false });
};
var getValueToSpread = function(_a14) {
  var sourceObject = _a14.sourceObject, expressionOfValueToSpread = _a14.expressionOfValueToSpread, spreadOperatorSiblingKeys = _a14.spreadOperatorSiblingKeys;
  var valueToSpread = transform2(sourceObject, expressionOfValueToSpread);
  return (0, import_lodash15.isPlainObject)(valueToSpread) ? (0, import_lodash15.pickBy)(valueToSpread, function(_3, k) {
    return !spreadOperatorSiblingKeys.includes(k);
  }) : {};
};
var resolveArgumentValues = function(argumentExpressions, sourceObject) {
  return argumentExpressions.map(function(expression) {
    return isJsonPathExpression(expression) ? getValueAtPath(sourceObject, expression) : expression;
  });
};
var transform2 = function(sourceObject, transformation, customFunctions) {
  if (customFunctions === void 0) {
    customFunctions = void 0;
  }
  return reduceTransformation(transformation, {
    visitors: {
      TopLevelSimpleTransformationExpression: function(expression) {
        return getValueAtPath(sourceObject, expression);
      },
      TopLevelCustomFunctionExpression: function(functionName, argumentExpressions) {
        return runCustomFunctionCallExpression({
          customFunctions,
          functionName,
          argumentValues: resolveArgumentValues(argumentExpressions, sourceObject),
          transformationParentPath: ""
        });
      },
      NestedSpreadExpression: function(acc, path, expressionOfValueToSpread, spreadOperatorSiblingKeys) {
        var valueToSpread = getValueToSpread({
          sourceObject,
          expressionOfValueToSpread,
          spreadOperatorSiblingKeys
        });
        var existing = (0, import_lodash15.get)(acc, path, {});
        (0, import_lodash15.set)(acc, path, __assign(__assign({}, existing), valueToSpread));
      },
      TopLevelSpreadExpression: function(acc, expressionOfValueToSpread, spreadOperatorSiblingKeys) {
        var valueToSpread = getValueToSpread({
          sourceObject,
          expressionOfValueToSpread,
          spreadOperatorSiblingKeys
        });
        Object.keys(valueToSpread).forEach(function(key) {
          acc[key] = valueToSpread[key];
        });
      },
      CustomFunctionExpression: function(acc, path, functionName, argumentExpressions) {
        var customFunctionResult = runCustomFunctionCallExpression({
          customFunctions,
          functionName,
          argumentValues: resolveArgumentValues(argumentExpressions, sourceObject),
          transformationParentPath: path
        });
        (0, import_lodash15.set)(acc, path, customFunctionResult);
      },
      NestedSimpleTransformationExpression: function(acc, path, simpleTransformationExpression) {
        (0, import_lodash15.set)(acc, path, getValueAtPath(sourceObject, simpleTransformationExpression));
      },
      TopLevelMapArrayItems: function(sourceArrayExpression, itemTransformation) {
        var source = transform2(sourceObject, sourceArrayExpression);
        return Array.isArray(source) ? source.map(function(item) {
          return transform2(item, itemTransformation, customFunctions);
        }) : source;
      },
      MapArrayItems: function(acc, path, sourceArrayExpression, itemTransformation) {
        var source = transform2(sourceObject, sourceArrayExpression);
        var transformedValue = Array.isArray(source) ? source.map(function(item) {
          return transform2(item, itemTransformation, customFunctions);
        }) : source;
        (0, import_lodash15.set)(acc, path, transformedValue);
      },
      TopLevelOmit: function(sourcePathExpression, fieldsToOmit) {
        var source = transform2(sourceObject, sourcePathExpression);
        if (source === void 0) {
          return void 0;
        }
        return (0, import_lodash15.isPlainObject)(source) ? (0, import_lodash15.omit)(source, fieldsToOmit) : sourceObject;
      },
      NestedOmit: function(accumulator, path, sourcePathExpression, fieldsToOmit) {
        var source = transform2(sourceObject, sourcePathExpression);
        if (source === void 0) {
          (0, import_lodash15.set)(accumulator, path, void 0);
          return;
        }
        var value = (0, import_lodash15.isPlainObject)(source) ? (0, import_lodash15.omit)(source, fieldsToOmit) : source;
        (0, import_lodash15.set)(accumulator, path, value);
      },
      NestedConstantValue: function(_a14) {
        var accumulator = _a14.accumulator, path = _a14.path, value = _a14.value;
        (0, import_lodash15.set)(accumulator, path, value);
      }
    },
    accumulator: {}
  });
};
var transformToRequestMessage = function(sourceObject, transformation, customFunctions) {
  if (customFunctions === void 0) {
    customFunctions = void 0;
  }
  return transform2(sourceObject, transformation, customFunctions) || {};
};
var transformResponseMessage = function(sourceObject, transformation, customFunctions) {
  if (customFunctions === void 0) {
    customFunctions = void 0;
  }
  return transform2(sourceObject, transformation, customFunctions);
};

// node_modules/lower-case/dist.es2015/index.js
function lowerCase(str2) {
  return str2.toLowerCase();
}

// node_modules/no-case/dist.es2015/index.js
var DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g];
var DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;
function noCase(input, options) {
  if (options === void 0) {
    options = {};
  }
  var _a14 = options.splitRegexp, splitRegexp = _a14 === void 0 ? DEFAULT_SPLIT_REGEXP : _a14, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b, _c = options.transform, transform3 = _c === void 0 ? lowerCase : _c, _d = options.delimiter, delimiter = _d === void 0 ? " " : _d;
  var result = replace(replace(input, splitRegexp, "$1\0$2"), stripRegexp, "\0");
  var start4 = 0;
  var end = result.length;
  while (result.charAt(start4) === "\0")
    start4++;
  while (result.charAt(end - 1) === "\0")
    end--;
  return result.slice(start4, end).split("\0").map(transform3).join(delimiter);
}
function replace(input, re, value) {
  if (re instanceof RegExp)
    return input.replace(re, value);
  return re.reduce(function(input2, re2) {
    return input2.replace(re2, value);
  }, input);
}

// node_modules/upper-case/dist.es2015/index.js
function upperCase(str2) {
  return str2.toUpperCase();
}

// node_modules/constant-case/dist.es2015/index.js
function constantCase(input, options) {
  if (options === void 0) {
    options = {};
  }
  return noCase(input, __assign({ delimiter: "_", transform: upperCase }, options));
}

// node_modules/js-yaml/dist/js-yaml.mjs
function isNothing(subject) {
  return typeof subject === "undefined" || subject === null;
}
function isObject(subject) {
  return typeof subject === "object" && subject !== null;
}
function toArray(sequence) {
  if (Array.isArray(sequence))
    return sequence;
  else if (isNothing(sequence))
    return [];
  return [sequence];
}
function extend(target, source) {
  var index, length, key, sourceKeys;
  if (source) {
    sourceKeys = Object.keys(source);
    for (index = 0, length = sourceKeys.length; index < length; index += 1) {
      key = sourceKeys[index];
      target[key] = source[key];
    }
  }
  return target;
}
function repeat(string, count) {
  var result = "", cycle;
  for (cycle = 0; cycle < count; cycle += 1) {
    result += string;
  }
  return result;
}
function isNegativeZero(number) {
  return number === 0 && Number.NEGATIVE_INFINITY === 1 / number;
}
var isNothing_1 = isNothing;
var isObject_1 = isObject;
var toArray_1 = toArray;
var repeat_1 = repeat;
var isNegativeZero_1 = isNegativeZero;
var extend_1 = extend;
var common = {
  isNothing: isNothing_1,
  isObject: isObject_1,
  toArray: toArray_1,
  repeat: repeat_1,
  isNegativeZero: isNegativeZero_1,
  extend: extend_1
};
function formatError(exception2, compact) {
  var where = "", message = exception2.reason || "(unknown reason)";
  if (!exception2.mark)
    return message;
  if (exception2.mark.name) {
    where += 'in "' + exception2.mark.name + '" ';
  }
  where += "(" + (exception2.mark.line + 1) + ":" + (exception2.mark.column + 1) + ")";
  if (!compact && exception2.mark.snippet) {
    where += "\n\n" + exception2.mark.snippet;
  }
  return message + " " + where;
}
function YAMLException$1(reason, mark) {
  Error.call(this);
  this.name = "YAMLException";
  this.reason = reason;
  this.mark = mark;
  this.message = formatError(this, false);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = new Error().stack || "";
  }
}
YAMLException$1.prototype = Object.create(Error.prototype);
YAMLException$1.prototype.constructor = YAMLException$1;
YAMLException$1.prototype.toString = function toString(compact) {
  return this.name + ": " + formatError(this, compact);
};
var exception = YAMLException$1;
function getLine(buffer, lineStart, lineEnd, position, maxLineLength) {
  var head = "";
  var tail = "";
  var maxHalfLength = Math.floor(maxLineLength / 2) - 1;
  if (position - lineStart > maxHalfLength) {
    head = " ... ";
    lineStart = position - maxHalfLength + head.length;
  }
  if (lineEnd - position > maxHalfLength) {
    tail = " ...";
    lineEnd = position + maxHalfLength - tail.length;
  }
  return {
    str: head + buffer.slice(lineStart, lineEnd).replace(/\t/g, "\u2192") + tail,
    pos: position - lineStart + head.length
    // relative position
  };
}
function padStart(string, max) {
  return common.repeat(" ", max - string.length) + string;
}
function makeSnippet(mark, options) {
  options = Object.create(options || null);
  if (!mark.buffer)
    return null;
  if (!options.maxLength)
    options.maxLength = 79;
  if (typeof options.indent !== "number")
    options.indent = 1;
  if (typeof options.linesBefore !== "number")
    options.linesBefore = 3;
  if (typeof options.linesAfter !== "number")
    options.linesAfter = 2;
  var re = /\r?\n|\r|\0/g;
  var lineStarts = [0];
  var lineEnds = [];
  var match;
  var foundLineNo = -1;
  while (match = re.exec(mark.buffer)) {
    lineEnds.push(match.index);
    lineStarts.push(match.index + match[0].length);
    if (mark.position <= match.index && foundLineNo < 0) {
      foundLineNo = lineStarts.length - 2;
    }
  }
  if (foundLineNo < 0)
    foundLineNo = lineStarts.length - 1;
  var result = "", i, line;
  var lineNoLength = Math.min(mark.line + options.linesAfter, lineEnds.length).toString().length;
  var maxLineLength = options.maxLength - (options.indent + lineNoLength + 3);
  for (i = 1; i <= options.linesBefore; i++) {
    if (foundLineNo - i < 0)
      break;
    line = getLine(
      mark.buffer,
      lineStarts[foundLineNo - i],
      lineEnds[foundLineNo - i],
      mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo - i]),
      maxLineLength
    );
    result = common.repeat(" ", options.indent) + padStart((mark.line - i + 1).toString(), lineNoLength) + " | " + line.str + "\n" + result;
  }
  line = getLine(mark.buffer, lineStarts[foundLineNo], lineEnds[foundLineNo], mark.position, maxLineLength);
  result += common.repeat(" ", options.indent) + padStart((mark.line + 1).toString(), lineNoLength) + " | " + line.str + "\n";
  result += common.repeat("-", options.indent + lineNoLength + 3 + line.pos) + "^\n";
  for (i = 1; i <= options.linesAfter; i++) {
    if (foundLineNo + i >= lineEnds.length)
      break;
    line = getLine(
      mark.buffer,
      lineStarts[foundLineNo + i],
      lineEnds[foundLineNo + i],
      mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo + i]),
      maxLineLength
    );
    result += common.repeat(" ", options.indent) + padStart((mark.line + i + 1).toString(), lineNoLength) + " | " + line.str + "\n";
  }
  return result.replace(/\n$/, "");
}
var snippet = makeSnippet;
var TYPE_CONSTRUCTOR_OPTIONS = [
  "kind",
  "multi",
  "resolve",
  "construct",
  "instanceOf",
  "predicate",
  "represent",
  "representName",
  "defaultStyle",
  "styleAliases"
];
var YAML_NODE_KINDS = [
  "scalar",
  "sequence",
  "mapping"
];
function compileStyleAliases(map2) {
  var result = {};
  if (map2 !== null) {
    Object.keys(map2).forEach(function(style) {
      map2[style].forEach(function(alias) {
        result[String(alias)] = style;
      });
    });
  }
  return result;
}
function Type$1(tag, options) {
  options = options || {};
  Object.keys(options).forEach(function(name) {
    if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
      throw new exception('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
    }
  });
  this.options = options;
  this.tag = tag;
  this.kind = options["kind"] || null;
  this.resolve = options["resolve"] || function() {
    return true;
  };
  this.construct = options["construct"] || function(data) {
    return data;
  };
  this.instanceOf = options["instanceOf"] || null;
  this.predicate = options["predicate"] || null;
  this.represent = options["represent"] || null;
  this.representName = options["representName"] || null;
  this.defaultStyle = options["defaultStyle"] || null;
  this.multi = options["multi"] || false;
  this.styleAliases = compileStyleAliases(options["styleAliases"] || null);
  if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
    throw new exception('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
  }
}
var type = Type$1;
function compileList(schema2, name) {
  var result = [];
  schema2[name].forEach(function(currentType) {
    var newIndex = result.length;
    result.forEach(function(previousType, previousIndex) {
      if (previousType.tag === currentType.tag && previousType.kind === currentType.kind && previousType.multi === currentType.multi) {
        newIndex = previousIndex;
      }
    });
    result[newIndex] = currentType;
  });
  return result;
}
function compileMap() {
  var result = {
    scalar: {},
    sequence: {},
    mapping: {},
    fallback: {},
    multi: {
      scalar: [],
      sequence: [],
      mapping: [],
      fallback: []
    }
  }, index, length;
  function collectType(type2) {
    if (type2.multi) {
      result.multi[type2.kind].push(type2);
      result.multi["fallback"].push(type2);
    } else {
      result[type2.kind][type2.tag] = result["fallback"][type2.tag] = type2;
    }
  }
  for (index = 0, length = arguments.length; index < length; index += 1) {
    arguments[index].forEach(collectType);
  }
  return result;
}
function Schema$1(definition) {
  return this.extend(definition);
}
Schema$1.prototype.extend = function extend2(definition) {
  var implicit = [];
  var explicit = [];
  if (definition instanceof type) {
    explicit.push(definition);
  } else if (Array.isArray(definition)) {
    explicit = explicit.concat(definition);
  } else if (definition && (Array.isArray(definition.implicit) || Array.isArray(definition.explicit))) {
    if (definition.implicit)
      implicit = implicit.concat(definition.implicit);
    if (definition.explicit)
      explicit = explicit.concat(definition.explicit);
  } else {
    throw new exception("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  }
  implicit.forEach(function(type$1) {
    if (!(type$1 instanceof type)) {
      throw new exception("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    }
    if (type$1.loadKind && type$1.loadKind !== "scalar") {
      throw new exception("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    }
    if (type$1.multi) {
      throw new exception("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
    }
  });
  explicit.forEach(function(type$1) {
    if (!(type$1 instanceof type)) {
      throw new exception("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    }
  });
  var result = Object.create(Schema$1.prototype);
  result.implicit = (this.implicit || []).concat(implicit);
  result.explicit = (this.explicit || []).concat(explicit);
  result.compiledImplicit = compileList(result, "implicit");
  result.compiledExplicit = compileList(result, "explicit");
  result.compiledTypeMap = compileMap(result.compiledImplicit, result.compiledExplicit);
  return result;
};
var schema = Schema$1;
var str = new type("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(data) {
    return data !== null ? data : "";
  }
});
var seq = new type("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(data) {
    return data !== null ? data : [];
  }
});
var map = new type("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(data) {
    return data !== null ? data : {};
  }
});
var failsafe = new schema({
  explicit: [
    str,
    seq,
    map
  ]
});
function resolveYamlNull(data) {
  if (data === null)
    return true;
  var max = data.length;
  return max === 1 && data === "~" || max === 4 && (data === "null" || data === "Null" || data === "NULL");
}
function constructYamlNull() {
  return null;
}
function isNull(object) {
  return object === null;
}
var _null = new type("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: resolveYamlNull,
  construct: constructYamlNull,
  predicate: isNull,
  represent: {
    canonical: function() {
      return "~";
    },
    lowercase: function() {
      return "null";
    },
    uppercase: function() {
      return "NULL";
    },
    camelcase: function() {
      return "Null";
    },
    empty: function() {
      return "";
    }
  },
  defaultStyle: "lowercase"
});
function resolveYamlBoolean(data) {
  if (data === null)
    return false;
  var max = data.length;
  return max === 4 && (data === "true" || data === "True" || data === "TRUE") || max === 5 && (data === "false" || data === "False" || data === "FALSE");
}
function constructYamlBoolean(data) {
  return data === "true" || data === "True" || data === "TRUE";
}
function isBoolean(object) {
  return Object.prototype.toString.call(object) === "[object Boolean]";
}
var bool = new type("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: resolveYamlBoolean,
  construct: constructYamlBoolean,
  predicate: isBoolean,
  represent: {
    lowercase: function(object) {
      return object ? "true" : "false";
    },
    uppercase: function(object) {
      return object ? "TRUE" : "FALSE";
    },
    camelcase: function(object) {
      return object ? "True" : "False";
    }
  },
  defaultStyle: "lowercase"
});
function isHexCode(c) {
  return 48 <= c && c <= 57 || 65 <= c && c <= 70 || 97 <= c && c <= 102;
}
function isOctCode(c) {
  return 48 <= c && c <= 55;
}
function isDecCode(c) {
  return 48 <= c && c <= 57;
}
function resolveYamlInteger(data) {
  if (data === null)
    return false;
  var max = data.length, index = 0, hasDigits = false, ch;
  if (!max)
    return false;
  ch = data[index];
  if (ch === "-" || ch === "+") {
    ch = data[++index];
  }
  if (ch === "0") {
    if (index + 1 === max)
      return true;
    ch = data[++index];
    if (ch === "b") {
      index++;
      for (; index < max; index++) {
        ch = data[index];
        if (ch === "_")
          continue;
        if (ch !== "0" && ch !== "1")
          return false;
        hasDigits = true;
      }
      return hasDigits && ch !== "_";
    }
    if (ch === "x") {
      index++;
      for (; index < max; index++) {
        ch = data[index];
        if (ch === "_")
          continue;
        if (!isHexCode(data.charCodeAt(index)))
          return false;
        hasDigits = true;
      }
      return hasDigits && ch !== "_";
    }
    if (ch === "o") {
      index++;
      for (; index < max; index++) {
        ch = data[index];
        if (ch === "_")
          continue;
        if (!isOctCode(data.charCodeAt(index)))
          return false;
        hasDigits = true;
      }
      return hasDigits && ch !== "_";
    }
  }
  if (ch === "_")
    return false;
  for (; index < max; index++) {
    ch = data[index];
    if (ch === "_")
      continue;
    if (!isDecCode(data.charCodeAt(index))) {
      return false;
    }
    hasDigits = true;
  }
  if (!hasDigits || ch === "_")
    return false;
  return true;
}
function constructYamlInteger(data) {
  var value = data, sign = 1, ch;
  if (value.indexOf("_") !== -1) {
    value = value.replace(/_/g, "");
  }
  ch = value[0];
  if (ch === "-" || ch === "+") {
    if (ch === "-")
      sign = -1;
    value = value.slice(1);
    ch = value[0];
  }
  if (value === "0")
    return 0;
  if (ch === "0") {
    if (value[1] === "b")
      return sign * parseInt(value.slice(2), 2);
    if (value[1] === "x")
      return sign * parseInt(value.slice(2), 16);
    if (value[1] === "o")
      return sign * parseInt(value.slice(2), 8);
  }
  return sign * parseInt(value, 10);
}
function isInteger(object) {
  return Object.prototype.toString.call(object) === "[object Number]" && (object % 1 === 0 && !common.isNegativeZero(object));
}
var int = new type("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: resolveYamlInteger,
  construct: constructYamlInteger,
  predicate: isInteger,
  represent: {
    binary: function(obj) {
      return obj >= 0 ? "0b" + obj.toString(2) : "-0b" + obj.toString(2).slice(1);
    },
    octal: function(obj) {
      return obj >= 0 ? "0o" + obj.toString(8) : "-0o" + obj.toString(8).slice(1);
    },
    decimal: function(obj) {
      return obj.toString(10);
    },
    /* eslint-disable max-len */
    hexadecimal: function(obj) {
      return obj >= 0 ? "0x" + obj.toString(16).toUpperCase() : "-0x" + obj.toString(16).toUpperCase().slice(1);
    }
  },
  defaultStyle: "decimal",
  styleAliases: {
    binary: [2, "bin"],
    octal: [8, "oct"],
    decimal: [10, "dec"],
    hexadecimal: [16, "hex"]
  }
});
var YAML_FLOAT_PATTERN = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function resolveYamlFloat(data) {
  if (data === null)
    return false;
  if (!YAML_FLOAT_PATTERN.test(data) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  data[data.length - 1] === "_") {
    return false;
  }
  return true;
}
function constructYamlFloat(data) {
  var value, sign;
  value = data.replace(/_/g, "").toLowerCase();
  sign = value[0] === "-" ? -1 : 1;
  if ("+-".indexOf(value[0]) >= 0) {
    value = value.slice(1);
  }
  if (value === ".inf") {
    return sign === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
  } else if (value === ".nan") {
    return NaN;
  }
  return sign * parseFloat(value, 10);
}
var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;
function representYamlFloat(object, style) {
  var res;
  if (isNaN(object)) {
    switch (style) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  } else if (Number.POSITIVE_INFINITY === object) {
    switch (style) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  } else if (Number.NEGATIVE_INFINITY === object) {
    switch (style) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  } else if (common.isNegativeZero(object)) {
    return "-0.0";
  }
  res = object.toString(10);
  return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace("e", ".e") : res;
}
function isFloat(object) {
  return Object.prototype.toString.call(object) === "[object Number]" && (object % 1 !== 0 || common.isNegativeZero(object));
}
var float = new type("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: resolveYamlFloat,
  construct: constructYamlFloat,
  predicate: isFloat,
  represent: representYamlFloat,
  defaultStyle: "lowercase"
});
var json = failsafe.extend({
  implicit: [
    _null,
    bool,
    int,
    float
  ]
});
var core = json;
var YAML_DATE_REGEXP = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
);
var YAML_TIMESTAMP_REGEXP = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function resolveYamlTimestamp(data) {
  if (data === null)
    return false;
  if (YAML_DATE_REGEXP.exec(data) !== null)
    return true;
  if (YAML_TIMESTAMP_REGEXP.exec(data) !== null)
    return true;
  return false;
}
function constructYamlTimestamp(data) {
  var match, year, month, day, hour, minute, second, fraction = 0, delta = null, tz_hour, tz_minute, date;
  match = YAML_DATE_REGEXP.exec(data);
  if (match === null)
    match = YAML_TIMESTAMP_REGEXP.exec(data);
  if (match === null)
    throw new Error("Date resolve error");
  year = +match[1];
  month = +match[2] - 1;
  day = +match[3];
  if (!match[4]) {
    return new Date(Date.UTC(year, month, day));
  }
  hour = +match[4];
  minute = +match[5];
  second = +match[6];
  if (match[7]) {
    fraction = match[7].slice(0, 3);
    while (fraction.length < 3) {
      fraction += "0";
    }
    fraction = +fraction;
  }
  if (match[9]) {
    tz_hour = +match[10];
    tz_minute = +(match[11] || 0);
    delta = (tz_hour * 60 + tz_minute) * 6e4;
    if (match[9] === "-")
      delta = -delta;
  }
  date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));
  if (delta)
    date.setTime(date.getTime() - delta);
  return date;
}
function representYamlTimestamp(object) {
  return object.toISOString();
}
var timestamp = new type("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: resolveYamlTimestamp,
  construct: constructYamlTimestamp,
  instanceOf: Date,
  represent: representYamlTimestamp
});
function resolveYamlMerge(data) {
  return data === "<<" || data === null;
}
var merge3 = new type("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: resolveYamlMerge
});
var BASE64_MAP = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
function resolveYamlBinary(data) {
  if (data === null)
    return false;
  var code, idx, bitlen = 0, max = data.length, map2 = BASE64_MAP;
  for (idx = 0; idx < max; idx++) {
    code = map2.indexOf(data.charAt(idx));
    if (code > 64)
      continue;
    if (code < 0)
      return false;
    bitlen += 6;
  }
  return bitlen % 8 === 0;
}
function constructYamlBinary(data) {
  var idx, tailbits, input = data.replace(/[\r\n=]/g, ""), max = input.length, map2 = BASE64_MAP, bits = 0, result = [];
  for (idx = 0; idx < max; idx++) {
    if (idx % 4 === 0 && idx) {
      result.push(bits >> 16 & 255);
      result.push(bits >> 8 & 255);
      result.push(bits & 255);
    }
    bits = bits << 6 | map2.indexOf(input.charAt(idx));
  }
  tailbits = max % 4 * 6;
  if (tailbits === 0) {
    result.push(bits >> 16 & 255);
    result.push(bits >> 8 & 255);
    result.push(bits & 255);
  } else if (tailbits === 18) {
    result.push(bits >> 10 & 255);
    result.push(bits >> 2 & 255);
  } else if (tailbits === 12) {
    result.push(bits >> 4 & 255);
  }
  return new Uint8Array(result);
}
function representYamlBinary(object) {
  var result = "", bits = 0, idx, tail, max = object.length, map2 = BASE64_MAP;
  for (idx = 0; idx < max; idx++) {
    if (idx % 3 === 0 && idx) {
      result += map2[bits >> 18 & 63];
      result += map2[bits >> 12 & 63];
      result += map2[bits >> 6 & 63];
      result += map2[bits & 63];
    }
    bits = (bits << 8) + object[idx];
  }
  tail = max % 3;
  if (tail === 0) {
    result += map2[bits >> 18 & 63];
    result += map2[bits >> 12 & 63];
    result += map2[bits >> 6 & 63];
    result += map2[bits & 63];
  } else if (tail === 2) {
    result += map2[bits >> 10 & 63];
    result += map2[bits >> 4 & 63];
    result += map2[bits << 2 & 63];
    result += map2[64];
  } else if (tail === 1) {
    result += map2[bits >> 2 & 63];
    result += map2[bits << 4 & 63];
    result += map2[64];
    result += map2[64];
  }
  return result;
}
function isBinary(obj) {
  return Object.prototype.toString.call(obj) === "[object Uint8Array]";
}
var binary = new type("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: resolveYamlBinary,
  construct: constructYamlBinary,
  predicate: isBinary,
  represent: representYamlBinary
});
var _hasOwnProperty$3 = Object.prototype.hasOwnProperty;
var _toString$2 = Object.prototype.toString;
function resolveYamlOmap(data) {
  if (data === null)
    return true;
  var objectKeys = [], index, length, pair, pairKey, pairHasKey, object = data;
  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];
    pairHasKey = false;
    if (_toString$2.call(pair) !== "[object Object]")
      return false;
    for (pairKey in pair) {
      if (_hasOwnProperty$3.call(pair, pairKey)) {
        if (!pairHasKey)
          pairHasKey = true;
        else
          return false;
      }
    }
    if (!pairHasKey)
      return false;
    if (objectKeys.indexOf(pairKey) === -1)
      objectKeys.push(pairKey);
    else
      return false;
  }
  return true;
}
function constructYamlOmap(data) {
  return data !== null ? data : [];
}
var omap = new type("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: resolveYamlOmap,
  construct: constructYamlOmap
});
var _toString$1 = Object.prototype.toString;
function resolveYamlPairs(data) {
  if (data === null)
    return true;
  var index, length, pair, keys, result, object = data;
  result = new Array(object.length);
  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];
    if (_toString$1.call(pair) !== "[object Object]")
      return false;
    keys = Object.keys(pair);
    if (keys.length !== 1)
      return false;
    result[index] = [keys[0], pair[keys[0]]];
  }
  return true;
}
function constructYamlPairs(data) {
  if (data === null)
    return [];
  var index, length, pair, keys, result, object = data;
  result = new Array(object.length);
  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];
    keys = Object.keys(pair);
    result[index] = [keys[0], pair[keys[0]]];
  }
  return result;
}
var pairs = new type("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: resolveYamlPairs,
  construct: constructYamlPairs
});
var _hasOwnProperty$2 = Object.prototype.hasOwnProperty;
function resolveYamlSet(data) {
  if (data === null)
    return true;
  var key, object = data;
  for (key in object) {
    if (_hasOwnProperty$2.call(object, key)) {
      if (object[key] !== null)
        return false;
    }
  }
  return true;
}
function constructYamlSet(data) {
  return data !== null ? data : {};
}
var set6 = new type("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: resolveYamlSet,
  construct: constructYamlSet
});
var _default = core.extend({
  implicit: [
    timestamp,
    merge3
  ],
  explicit: [
    binary,
    omap,
    pairs,
    set6
  ]
});
var _hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var CONTEXT_FLOW_IN = 1;
var CONTEXT_FLOW_OUT = 2;
var CONTEXT_BLOCK_IN = 3;
var CONTEXT_BLOCK_OUT = 4;
var CHOMPING_CLIP = 1;
var CHOMPING_STRIP = 2;
var CHOMPING_KEEP = 3;
var PATTERN_NON_PRINTABLE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
var PATTERN_FLOW_INDICATORS = /[,\[\]\{\}]/;
var PATTERN_TAG_HANDLE = /^(?:!|!!|![a-z\-]+!)$/i;
var PATTERN_TAG_URI = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function _class(obj) {
  return Object.prototype.toString.call(obj);
}
function is_EOL(c) {
  return c === 10 || c === 13;
}
function is_WHITE_SPACE(c) {
  return c === 9 || c === 32;
}
function is_WS_OR_EOL(c) {
  return c === 9 || c === 32 || c === 10 || c === 13;
}
function is_FLOW_INDICATOR(c) {
  return c === 44 || c === 91 || c === 93 || c === 123 || c === 125;
}
function fromHexCode(c) {
  var lc;
  if (48 <= c && c <= 57) {
    return c - 48;
  }
  lc = c | 32;
  if (97 <= lc && lc <= 102) {
    return lc - 97 + 10;
  }
  return -1;
}
function escapedHexLen(c) {
  if (c === 120) {
    return 2;
  }
  if (c === 117) {
    return 4;
  }
  if (c === 85) {
    return 8;
  }
  return 0;
}
function fromDecimalCode(c) {
  if (48 <= c && c <= 57) {
    return c - 48;
  }
  return -1;
}
function simpleEscapeSequence(c) {
  return c === 48 ? "\0" : c === 97 ? "\x07" : c === 98 ? "\b" : c === 116 ? "	" : c === 9 ? "	" : c === 110 ? "\n" : c === 118 ? "\v" : c === 102 ? "\f" : c === 114 ? "\r" : c === 101 ? "\x1B" : c === 32 ? " " : c === 34 ? '"' : c === 47 ? "/" : c === 92 ? "\\" : c === 78 ? "\x85" : c === 95 ? "\xA0" : c === 76 ? "\u2028" : c === 80 ? "\u2029" : "";
}
function charFromCodepoint(c) {
  if (c <= 65535) {
    return String.fromCharCode(c);
  }
  return String.fromCharCode(
    (c - 65536 >> 10) + 55296,
    (c - 65536 & 1023) + 56320
  );
}
var simpleEscapeCheck = new Array(256);
var simpleEscapeMap = new Array(256);
for (i = 0; i < 256; i++) {
  simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
  simpleEscapeMap[i] = simpleEscapeSequence(i);
}
var i;
function State$1(input, options) {
  this.input = input;
  this.filename = options["filename"] || null;
  this.schema = options["schema"] || _default;
  this.onWarning = options["onWarning"] || null;
  this.legacy = options["legacy"] || false;
  this.json = options["json"] || false;
  this.listener = options["listener"] || null;
  this.implicitTypes = this.schema.compiledImplicit;
  this.typeMap = this.schema.compiledTypeMap;
  this.length = input.length;
  this.position = 0;
  this.line = 0;
  this.lineStart = 0;
  this.lineIndent = 0;
  this.firstTabInLine = -1;
  this.documents = [];
}
function generateError(state, message) {
  var mark = {
    name: state.filename,
    buffer: state.input.slice(0, -1),
    // omit trailing \0
    position: state.position,
    line: state.line,
    column: state.position - state.lineStart
  };
  mark.snippet = snippet(mark);
  return new exception(message, mark);
}
function throwError(state, message) {
  throw generateError(state, message);
}
function throwWarning(state, message) {
  if (state.onWarning) {
    state.onWarning.call(null, generateError(state, message));
  }
}
var directiveHandlers = {
  YAML: function handleYamlDirective(state, name, args) {
    var match, major, minor;
    if (state.version !== null) {
      throwError(state, "duplication of %YAML directive");
    }
    if (args.length !== 1) {
      throwError(state, "YAML directive accepts exactly one argument");
    }
    match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);
    if (match === null) {
      throwError(state, "ill-formed argument of the YAML directive");
    }
    major = parseInt(match[1], 10);
    minor = parseInt(match[2], 10);
    if (major !== 1) {
      throwError(state, "unacceptable YAML version of the document");
    }
    state.version = args[0];
    state.checkLineBreaks = minor < 2;
    if (minor !== 1 && minor !== 2) {
      throwWarning(state, "unsupported YAML version of the document");
    }
  },
  TAG: function handleTagDirective(state, name, args) {
    var handle, prefix;
    if (args.length !== 2) {
      throwError(state, "TAG directive accepts exactly two arguments");
    }
    handle = args[0];
    prefix = args[1];
    if (!PATTERN_TAG_HANDLE.test(handle)) {
      throwError(state, "ill-formed tag handle (first argument) of the TAG directive");
    }
    if (_hasOwnProperty$1.call(state.tagMap, handle)) {
      throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
    }
    if (!PATTERN_TAG_URI.test(prefix)) {
      throwError(state, "ill-formed tag prefix (second argument) of the TAG directive");
    }
    try {
      prefix = decodeURIComponent(prefix);
    } catch (err) {
      throwError(state, "tag prefix is malformed: " + prefix);
    }
    state.tagMap[handle] = prefix;
  }
};
function captureSegment(state, start4, end, checkJson) {
  var _position, _length, _character, _result;
  if (start4 < end) {
    _result = state.input.slice(start4, end);
    if (checkJson) {
      for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
        _character = _result.charCodeAt(_position);
        if (!(_character === 9 || 32 <= _character && _character <= 1114111)) {
          throwError(state, "expected valid JSON character");
        }
      }
    } else if (PATTERN_NON_PRINTABLE.test(_result)) {
      throwError(state, "the stream contains non-printable characters");
    }
    state.result += _result;
  }
}
function mergeMappings(state, destination, source, overridableKeys) {
  var sourceKeys, key, index, quantity;
  if (!common.isObject(source)) {
    throwError(state, "cannot merge mappings; the provided source object is unacceptable");
  }
  sourceKeys = Object.keys(source);
  for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
    key = sourceKeys[index];
    if (!_hasOwnProperty$1.call(destination, key)) {
      destination[key] = source[key];
      overridableKeys[key] = true;
    }
  }
}
function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, startLine, startLineStart, startPos) {
  var index, quantity;
  if (Array.isArray(keyNode)) {
    keyNode = Array.prototype.slice.call(keyNode);
    for (index = 0, quantity = keyNode.length; index < quantity; index += 1) {
      if (Array.isArray(keyNode[index])) {
        throwError(state, "nested arrays are not supported inside keys");
      }
      if (typeof keyNode === "object" && _class(keyNode[index]) === "[object Object]") {
        keyNode[index] = "[object Object]";
      }
    }
  }
  if (typeof keyNode === "object" && _class(keyNode) === "[object Object]") {
    keyNode = "[object Object]";
  }
  keyNode = String(keyNode);
  if (_result === null) {
    _result = {};
  }
  if (keyTag === "tag:yaml.org,2002:merge") {
    if (Array.isArray(valueNode)) {
      for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
        mergeMappings(state, _result, valueNode[index], overridableKeys);
      }
    } else {
      mergeMappings(state, _result, valueNode, overridableKeys);
    }
  } else {
    if (!state.json && !_hasOwnProperty$1.call(overridableKeys, keyNode) && _hasOwnProperty$1.call(_result, keyNode)) {
      state.line = startLine || state.line;
      state.lineStart = startLineStart || state.lineStart;
      state.position = startPos || state.position;
      throwError(state, "duplicated mapping key");
    }
    if (keyNode === "__proto__") {
      Object.defineProperty(_result, keyNode, {
        configurable: true,
        enumerable: true,
        writable: true,
        value: valueNode
      });
    } else {
      _result[keyNode] = valueNode;
    }
    delete overridableKeys[keyNode];
  }
  return _result;
}
function readLineBreak(state) {
  var ch;
  ch = state.input.charCodeAt(state.position);
  if (ch === 10) {
    state.position++;
  } else if (ch === 13) {
    state.position++;
    if (state.input.charCodeAt(state.position) === 10) {
      state.position++;
    }
  } else {
    throwError(state, "a line break is expected");
  }
  state.line += 1;
  state.lineStart = state.position;
  state.firstTabInLine = -1;
}
function skipSeparationSpace(state, allowComments, checkIndent) {
  var lineBreaks = 0, ch = state.input.charCodeAt(state.position);
  while (ch !== 0) {
    while (is_WHITE_SPACE(ch)) {
      if (ch === 9 && state.firstTabInLine === -1) {
        state.firstTabInLine = state.position;
      }
      ch = state.input.charCodeAt(++state.position);
    }
    if (allowComments && ch === 35) {
      do {
        ch = state.input.charCodeAt(++state.position);
      } while (ch !== 10 && ch !== 13 && ch !== 0);
    }
    if (is_EOL(ch)) {
      readLineBreak(state);
      ch = state.input.charCodeAt(state.position);
      lineBreaks++;
      state.lineIndent = 0;
      while (ch === 32) {
        state.lineIndent++;
        ch = state.input.charCodeAt(++state.position);
      }
    } else {
      break;
    }
  }
  if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
    throwWarning(state, "deficient indentation");
  }
  return lineBreaks;
}
function testDocumentSeparator(state) {
  var _position = state.position, ch;
  ch = state.input.charCodeAt(_position);
  if ((ch === 45 || ch === 46) && ch === state.input.charCodeAt(_position + 1) && ch === state.input.charCodeAt(_position + 2)) {
    _position += 3;
    ch = state.input.charCodeAt(_position);
    if (ch === 0 || is_WS_OR_EOL(ch)) {
      return true;
    }
  }
  return false;
}
function writeFoldedLines(state, count) {
  if (count === 1) {
    state.result += " ";
  } else if (count > 1) {
    state.result += common.repeat("\n", count - 1);
  }
}
function readPlainScalar(state, nodeIndent, withinFlowCollection) {
  var preceding, following, captureStart, captureEnd, hasPendingContent, _line, _lineStart, _lineIndent, _kind = state.kind, _result = state.result, ch;
  ch = state.input.charCodeAt(state.position);
  if (is_WS_OR_EOL(ch) || is_FLOW_INDICATOR(ch) || ch === 35 || ch === 38 || ch === 42 || ch === 33 || ch === 124 || ch === 62 || ch === 39 || ch === 34 || ch === 37 || ch === 64 || ch === 96) {
    return false;
  }
  if (ch === 63 || ch === 45) {
    following = state.input.charCodeAt(state.position + 1);
    if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
      return false;
    }
  }
  state.kind = "scalar";
  state.result = "";
  captureStart = captureEnd = state.position;
  hasPendingContent = false;
  while (ch !== 0) {
    if (ch === 58) {
      following = state.input.charCodeAt(state.position + 1);
      if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
        break;
      }
    } else if (ch === 35) {
      preceding = state.input.charCodeAt(state.position - 1);
      if (is_WS_OR_EOL(preceding)) {
        break;
      }
    } else if (state.position === state.lineStart && testDocumentSeparator(state) || withinFlowCollection && is_FLOW_INDICATOR(ch)) {
      break;
    } else if (is_EOL(ch)) {
      _line = state.line;
      _lineStart = state.lineStart;
      _lineIndent = state.lineIndent;
      skipSeparationSpace(state, false, -1);
      if (state.lineIndent >= nodeIndent) {
        hasPendingContent = true;
        ch = state.input.charCodeAt(state.position);
        continue;
      } else {
        state.position = captureEnd;
        state.line = _line;
        state.lineStart = _lineStart;
        state.lineIndent = _lineIndent;
        break;
      }
    }
    if (hasPendingContent) {
      captureSegment(state, captureStart, captureEnd, false);
      writeFoldedLines(state, state.line - _line);
      captureStart = captureEnd = state.position;
      hasPendingContent = false;
    }
    if (!is_WHITE_SPACE(ch)) {
      captureEnd = state.position + 1;
    }
    ch = state.input.charCodeAt(++state.position);
  }
  captureSegment(state, captureStart, captureEnd, false);
  if (state.result) {
    return true;
  }
  state.kind = _kind;
  state.result = _result;
  return false;
}
function readSingleQuotedScalar(state, nodeIndent) {
  var ch, captureStart, captureEnd;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 39) {
    return false;
  }
  state.kind = "scalar";
  state.result = "";
  state.position++;
  captureStart = captureEnd = state.position;
  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 39) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);
      if (ch === 39) {
        captureStart = state.position;
        state.position++;
        captureEnd = state.position;
      } else {
        return true;
      }
    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;
    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, "unexpected end of the document within a single quoted scalar");
    } else {
      state.position++;
      captureEnd = state.position;
    }
  }
  throwError(state, "unexpected end of the stream within a single quoted scalar");
}
function readDoubleQuotedScalar(state, nodeIndent) {
  var captureStart, captureEnd, hexLength, hexResult, tmp, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 34) {
    return false;
  }
  state.kind = "scalar";
  state.result = "";
  state.position++;
  captureStart = captureEnd = state.position;
  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 34) {
      captureSegment(state, captureStart, state.position, true);
      state.position++;
      return true;
    } else if (ch === 92) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);
      if (is_EOL(ch)) {
        skipSeparationSpace(state, false, nodeIndent);
      } else if (ch < 256 && simpleEscapeCheck[ch]) {
        state.result += simpleEscapeMap[ch];
        state.position++;
      } else if ((tmp = escapedHexLen(ch)) > 0) {
        hexLength = tmp;
        hexResult = 0;
        for (; hexLength > 0; hexLength--) {
          ch = state.input.charCodeAt(++state.position);
          if ((tmp = fromHexCode(ch)) >= 0) {
            hexResult = (hexResult << 4) + tmp;
          } else {
            throwError(state, "expected hexadecimal character");
          }
        }
        state.result += charFromCodepoint(hexResult);
        state.position++;
      } else {
        throwError(state, "unknown escape sequence");
      }
      captureStart = captureEnd = state.position;
    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;
    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, "unexpected end of the document within a double quoted scalar");
    } else {
      state.position++;
      captureEnd = state.position;
    }
  }
  throwError(state, "unexpected end of the stream within a double quoted scalar");
}
function readFlowCollection(state, nodeIndent) {
  var readNext = true, _line, _lineStart, _pos, _tag = state.tag, _result, _anchor = state.anchor, following, terminator, isPair, isExplicitPair, isMapping, overridableKeys = /* @__PURE__ */ Object.create(null), keyNode, keyTag, valueNode, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch === 91) {
    terminator = 93;
    isMapping = false;
    _result = [];
  } else if (ch === 123) {
    terminator = 125;
    isMapping = true;
    _result = {};
  } else {
    return false;
  }
  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }
  ch = state.input.charCodeAt(++state.position);
  while (ch !== 0) {
    skipSeparationSpace(state, true, nodeIndent);
    ch = state.input.charCodeAt(state.position);
    if (ch === terminator) {
      state.position++;
      state.tag = _tag;
      state.anchor = _anchor;
      state.kind = isMapping ? "mapping" : "sequence";
      state.result = _result;
      return true;
    } else if (!readNext) {
      throwError(state, "missed comma between flow collection entries");
    } else if (ch === 44) {
      throwError(state, "expected the node content, but found ','");
    }
    keyTag = keyNode = valueNode = null;
    isPair = isExplicitPair = false;
    if (ch === 63) {
      following = state.input.charCodeAt(state.position + 1);
      if (is_WS_OR_EOL(following)) {
        isPair = isExplicitPair = true;
        state.position++;
        skipSeparationSpace(state, true, nodeIndent);
      }
    }
    _line = state.line;
    _lineStart = state.lineStart;
    _pos = state.position;
    composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
    keyTag = state.tag;
    keyNode = state.result;
    skipSeparationSpace(state, true, nodeIndent);
    ch = state.input.charCodeAt(state.position);
    if ((isExplicitPair || state.line === _line) && ch === 58) {
      isPair = true;
      ch = state.input.charCodeAt(++state.position);
      skipSeparationSpace(state, true, nodeIndent);
      composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
      valueNode = state.result;
    }
    if (isMapping) {
      storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos);
    } else if (isPair) {
      _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos));
    } else {
      _result.push(keyNode);
    }
    skipSeparationSpace(state, true, nodeIndent);
    ch = state.input.charCodeAt(state.position);
    if (ch === 44) {
      readNext = true;
      ch = state.input.charCodeAt(++state.position);
    } else {
      readNext = false;
    }
  }
  throwError(state, "unexpected end of the stream within a flow collection");
}
function readBlockScalar(state, nodeIndent) {
  var captureStart, folding, chomping = CHOMPING_CLIP, didReadContent = false, detectedIndent = false, textIndent = nodeIndent, emptyLines = 0, atMoreIndented = false, tmp, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch === 124) {
    folding = false;
  } else if (ch === 62) {
    folding = true;
  } else {
    return false;
  }
  state.kind = "scalar";
  state.result = "";
  while (ch !== 0) {
    ch = state.input.charCodeAt(++state.position);
    if (ch === 43 || ch === 45) {
      if (CHOMPING_CLIP === chomping) {
        chomping = ch === 43 ? CHOMPING_KEEP : CHOMPING_STRIP;
      } else {
        throwError(state, "repeat of a chomping mode identifier");
      }
    } else if ((tmp = fromDecimalCode(ch)) >= 0) {
      if (tmp === 0) {
        throwError(state, "bad explicit indentation width of a block scalar; it cannot be less than one");
      } else if (!detectedIndent) {
        textIndent = nodeIndent + tmp - 1;
        detectedIndent = true;
      } else {
        throwError(state, "repeat of an indentation width identifier");
      }
    } else {
      break;
    }
  }
  if (is_WHITE_SPACE(ch)) {
    do {
      ch = state.input.charCodeAt(++state.position);
    } while (is_WHITE_SPACE(ch));
    if (ch === 35) {
      do {
        ch = state.input.charCodeAt(++state.position);
      } while (!is_EOL(ch) && ch !== 0);
    }
  }
  while (ch !== 0) {
    readLineBreak(state);
    state.lineIndent = 0;
    ch = state.input.charCodeAt(state.position);
    while ((!detectedIndent || state.lineIndent < textIndent) && ch === 32) {
      state.lineIndent++;
      ch = state.input.charCodeAt(++state.position);
    }
    if (!detectedIndent && state.lineIndent > textIndent) {
      textIndent = state.lineIndent;
    }
    if (is_EOL(ch)) {
      emptyLines++;
      continue;
    }
    if (state.lineIndent < textIndent) {
      if (chomping === CHOMPING_KEEP) {
        state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
      } else if (chomping === CHOMPING_CLIP) {
        if (didReadContent) {
          state.result += "\n";
        }
      }
      break;
    }
    if (folding) {
      if (is_WHITE_SPACE(ch)) {
        atMoreIndented = true;
        state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
      } else if (atMoreIndented) {
        atMoreIndented = false;
        state.result += common.repeat("\n", emptyLines + 1);
      } else if (emptyLines === 0) {
        if (didReadContent) {
          state.result += " ";
        }
      } else {
        state.result += common.repeat("\n", emptyLines);
      }
    } else {
      state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
    }
    didReadContent = true;
    detectedIndent = true;
    emptyLines = 0;
    captureStart = state.position;
    while (!is_EOL(ch) && ch !== 0) {
      ch = state.input.charCodeAt(++state.position);
    }
    captureSegment(state, captureStart, state.position, false);
  }
  return true;
}
function readBlockSequence(state, nodeIndent) {
  var _line, _tag = state.tag, _anchor = state.anchor, _result = [], following, detected = false, ch;
  if (state.firstTabInLine !== -1)
    return false;
  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }
  ch = state.input.charCodeAt(state.position);
  while (ch !== 0) {
    if (state.firstTabInLine !== -1) {
      state.position = state.firstTabInLine;
      throwError(state, "tab characters must not be used in indentation");
    }
    if (ch !== 45) {
      break;
    }
    following = state.input.charCodeAt(state.position + 1);
    if (!is_WS_OR_EOL(following)) {
      break;
    }
    detected = true;
    state.position++;
    if (skipSeparationSpace(state, true, -1)) {
      if (state.lineIndent <= nodeIndent) {
        _result.push(null);
        ch = state.input.charCodeAt(state.position);
        continue;
      }
    }
    _line = state.line;
    composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
    _result.push(state.result);
    skipSeparationSpace(state, true, -1);
    ch = state.input.charCodeAt(state.position);
    if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
      throwError(state, "bad indentation of a sequence entry");
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }
  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = "sequence";
    state.result = _result;
    return true;
  }
  return false;
}
function readBlockMapping(state, nodeIndent, flowIndent) {
  var following, allowCompact, _line, _keyLine, _keyLineStart, _keyPos, _tag = state.tag, _anchor = state.anchor, _result = {}, overridableKeys = /* @__PURE__ */ Object.create(null), keyTag = null, keyNode = null, valueNode = null, atExplicitKey = false, detected = false, ch;
  if (state.firstTabInLine !== -1)
    return false;
  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }
  ch = state.input.charCodeAt(state.position);
  while (ch !== 0) {
    if (!atExplicitKey && state.firstTabInLine !== -1) {
      state.position = state.firstTabInLine;
      throwError(state, "tab characters must not be used in indentation");
    }
    following = state.input.charCodeAt(state.position + 1);
    _line = state.line;
    if ((ch === 63 || ch === 58) && is_WS_OR_EOL(following)) {
      if (ch === 63) {
        if (atExplicitKey) {
          storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
          keyTag = keyNode = valueNode = null;
        }
        detected = true;
        atExplicitKey = true;
        allowCompact = true;
      } else if (atExplicitKey) {
        atExplicitKey = false;
        allowCompact = true;
      } else {
        throwError(state, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line");
      }
      state.position += 1;
      ch = following;
    } else {
      _keyLine = state.line;
      _keyLineStart = state.lineStart;
      _keyPos = state.position;
      if (!composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
        break;
      }
      if (state.line === _line) {
        ch = state.input.charCodeAt(state.position);
        while (is_WHITE_SPACE(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }
        if (ch === 58) {
          ch = state.input.charCodeAt(++state.position);
          if (!is_WS_OR_EOL(ch)) {
            throwError(state, "a whitespace character is expected after the key-value separator within a block mapping");
          }
          if (atExplicitKey) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
            keyTag = keyNode = valueNode = null;
          }
          detected = true;
          atExplicitKey = false;
          allowCompact = false;
          keyTag = state.tag;
          keyNode = state.result;
        } else if (detected) {
          throwError(state, "can not read an implicit mapping pair; a colon is missed");
        } else {
          state.tag = _tag;
          state.anchor = _anchor;
          return true;
        }
      } else if (detected) {
        throwError(state, "can not read a block mapping entry; a multiline key may not be an implicit key");
      } else {
        state.tag = _tag;
        state.anchor = _anchor;
        return true;
      }
    }
    if (state.line === _line || state.lineIndent > nodeIndent) {
      if (atExplicitKey) {
        _keyLine = state.line;
        _keyLineStart = state.lineStart;
        _keyPos = state.position;
      }
      if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
        if (atExplicitKey) {
          keyNode = state.result;
        } else {
          valueNode = state.result;
        }
      }
      if (!atExplicitKey) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _keyLine, _keyLineStart, _keyPos);
        keyTag = keyNode = valueNode = null;
      }
      skipSeparationSpace(state, true, -1);
      ch = state.input.charCodeAt(state.position);
    }
    if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
      throwError(state, "bad indentation of a mapping entry");
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }
  if (atExplicitKey) {
    storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
  }
  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = "mapping";
    state.result = _result;
  }
  return detected;
}
function readTagProperty(state) {
  var _position, isVerbatim = false, isNamed = false, tagHandle, tagName, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 33)
    return false;
  if (state.tag !== null) {
    throwError(state, "duplication of a tag property");
  }
  ch = state.input.charCodeAt(++state.position);
  if (ch === 60) {
    isVerbatim = true;
    ch = state.input.charCodeAt(++state.position);
  } else if (ch === 33) {
    isNamed = true;
    tagHandle = "!!";
    ch = state.input.charCodeAt(++state.position);
  } else {
    tagHandle = "!";
  }
  _position = state.position;
  if (isVerbatim) {
    do {
      ch = state.input.charCodeAt(++state.position);
    } while (ch !== 0 && ch !== 62);
    if (state.position < state.length) {
      tagName = state.input.slice(_position, state.position);
      ch = state.input.charCodeAt(++state.position);
    } else {
      throwError(state, "unexpected end of the stream within a verbatim tag");
    }
  } else {
    while (ch !== 0 && !is_WS_OR_EOL(ch)) {
      if (ch === 33) {
        if (!isNamed) {
          tagHandle = state.input.slice(_position - 1, state.position + 1);
          if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
            throwError(state, "named tag handle cannot contain such characters");
          }
          isNamed = true;
          _position = state.position + 1;
        } else {
          throwError(state, "tag suffix cannot contain exclamation marks");
        }
      }
      ch = state.input.charCodeAt(++state.position);
    }
    tagName = state.input.slice(_position, state.position);
    if (PATTERN_FLOW_INDICATORS.test(tagName)) {
      throwError(state, "tag suffix cannot contain flow indicator characters");
    }
  }
  if (tagName && !PATTERN_TAG_URI.test(tagName)) {
    throwError(state, "tag name cannot contain such characters: " + tagName);
  }
  try {
    tagName = decodeURIComponent(tagName);
  } catch (err) {
    throwError(state, "tag name is malformed: " + tagName);
  }
  if (isVerbatim) {
    state.tag = tagName;
  } else if (_hasOwnProperty$1.call(state.tagMap, tagHandle)) {
    state.tag = state.tagMap[tagHandle] + tagName;
  } else if (tagHandle === "!") {
    state.tag = "!" + tagName;
  } else if (tagHandle === "!!") {
    state.tag = "tag:yaml.org,2002:" + tagName;
  } else {
    throwError(state, 'undeclared tag handle "' + tagHandle + '"');
  }
  return true;
}
function readAnchorProperty(state) {
  var _position, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 38)
    return false;
  if (state.anchor !== null) {
    throwError(state, "duplication of an anchor property");
  }
  ch = state.input.charCodeAt(++state.position);
  _position = state.position;
  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }
  if (state.position === _position) {
    throwError(state, "name of an anchor node must contain at least one character");
  }
  state.anchor = state.input.slice(_position, state.position);
  return true;
}
function readAlias(state) {
  var _position, alias, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 42)
    return false;
  ch = state.input.charCodeAt(++state.position);
  _position = state.position;
  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }
  if (state.position === _position) {
    throwError(state, "name of an alias node must contain at least one character");
  }
  alias = state.input.slice(_position, state.position);
  if (!_hasOwnProperty$1.call(state.anchorMap, alias)) {
    throwError(state, 'unidentified alias "' + alias + '"');
  }
  state.result = state.anchorMap[alias];
  skipSeparationSpace(state, true, -1);
  return true;
}
function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
  var allowBlockStyles, allowBlockScalars, allowBlockCollections, indentStatus = 1, atNewLine = false, hasContent = false, typeIndex, typeQuantity, typeList, type2, flowIndent, blockIndent;
  if (state.listener !== null) {
    state.listener("open", state);
  }
  state.tag = null;
  state.anchor = null;
  state.kind = null;
  state.result = null;
  allowBlockStyles = allowBlockScalars = allowBlockCollections = CONTEXT_BLOCK_OUT === nodeContext || CONTEXT_BLOCK_IN === nodeContext;
  if (allowToSeek) {
    if (skipSeparationSpace(state, true, -1)) {
      atNewLine = true;
      if (state.lineIndent > parentIndent) {
        indentStatus = 1;
      } else if (state.lineIndent === parentIndent) {
        indentStatus = 0;
      } else if (state.lineIndent < parentIndent) {
        indentStatus = -1;
      }
    }
  }
  if (indentStatus === 1) {
    while (readTagProperty(state) || readAnchorProperty(state)) {
      if (skipSeparationSpace(state, true, -1)) {
        atNewLine = true;
        allowBlockCollections = allowBlockStyles;
        if (state.lineIndent > parentIndent) {
          indentStatus = 1;
        } else if (state.lineIndent === parentIndent) {
          indentStatus = 0;
        } else if (state.lineIndent < parentIndent) {
          indentStatus = -1;
        }
      } else {
        allowBlockCollections = false;
      }
    }
  }
  if (allowBlockCollections) {
    allowBlockCollections = atNewLine || allowCompact;
  }
  if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
    if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
      flowIndent = parentIndent;
    } else {
      flowIndent = parentIndent + 1;
    }
    blockIndent = state.position - state.lineStart;
    if (indentStatus === 1) {
      if (allowBlockCollections && (readBlockSequence(state, blockIndent) || readBlockMapping(state, blockIndent, flowIndent)) || readFlowCollection(state, flowIndent)) {
        hasContent = true;
      } else {
        if (allowBlockScalars && readBlockScalar(state, flowIndent) || readSingleQuotedScalar(state, flowIndent) || readDoubleQuotedScalar(state, flowIndent)) {
          hasContent = true;
        } else if (readAlias(state)) {
          hasContent = true;
          if (state.tag !== null || state.anchor !== null) {
            throwError(state, "alias node should not have any properties");
          }
        } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
          hasContent = true;
          if (state.tag === null) {
            state.tag = "?";
          }
        }
        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
      }
    } else if (indentStatus === 0) {
      hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
    }
  }
  if (state.tag === null) {
    if (state.anchor !== null) {
      state.anchorMap[state.anchor] = state.result;
    }
  } else if (state.tag === "?") {
    if (state.result !== null && state.kind !== "scalar") {
      throwError(state, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + state.kind + '"');
    }
    for (typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
      type2 = state.implicitTypes[typeIndex];
      if (type2.resolve(state.result)) {
        state.result = type2.construct(state.result);
        state.tag = type2.tag;
        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
        break;
      }
    }
  } else if (state.tag !== "!") {
    if (_hasOwnProperty$1.call(state.typeMap[state.kind || "fallback"], state.tag)) {
      type2 = state.typeMap[state.kind || "fallback"][state.tag];
    } else {
      type2 = null;
      typeList = state.typeMap.multi[state.kind || "fallback"];
      for (typeIndex = 0, typeQuantity = typeList.length; typeIndex < typeQuantity; typeIndex += 1) {
        if (state.tag.slice(0, typeList[typeIndex].tag.length) === typeList[typeIndex].tag) {
          type2 = typeList[typeIndex];
          break;
        }
      }
    }
    if (!type2) {
      throwError(state, "unknown tag !<" + state.tag + ">");
    }
    if (state.result !== null && type2.kind !== state.kind) {
      throwError(state, "unacceptable node kind for !<" + state.tag + '> tag; it should be "' + type2.kind + '", not "' + state.kind + '"');
    }
    if (!type2.resolve(state.result, state.tag)) {
      throwError(state, "cannot resolve a node with !<" + state.tag + "> explicit tag");
    } else {
      state.result = type2.construct(state.result, state.tag);
      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = state.result;
      }
    }
  }
  if (state.listener !== null) {
    state.listener("close", state);
  }
  return state.tag !== null || state.anchor !== null || hasContent;
}
function readDocument(state) {
  var documentStart = state.position, _position, directiveName, directiveArgs, hasDirectives = false, ch;
  state.version = null;
  state.checkLineBreaks = state.legacy;
  state.tagMap = /* @__PURE__ */ Object.create(null);
  state.anchorMap = /* @__PURE__ */ Object.create(null);
  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    skipSeparationSpace(state, true, -1);
    ch = state.input.charCodeAt(state.position);
    if (state.lineIndent > 0 || ch !== 37) {
      break;
    }
    hasDirectives = true;
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;
    while (ch !== 0 && !is_WS_OR_EOL(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }
    directiveName = state.input.slice(_position, state.position);
    directiveArgs = [];
    if (directiveName.length < 1) {
      throwError(state, "directive name must not be less than one character in length");
    }
    while (ch !== 0) {
      while (is_WHITE_SPACE(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }
      if (ch === 35) {
        do {
          ch = state.input.charCodeAt(++state.position);
        } while (ch !== 0 && !is_EOL(ch));
        break;
      }
      if (is_EOL(ch))
        break;
      _position = state.position;
      while (ch !== 0 && !is_WS_OR_EOL(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }
      directiveArgs.push(state.input.slice(_position, state.position));
    }
    if (ch !== 0)
      readLineBreak(state);
    if (_hasOwnProperty$1.call(directiveHandlers, directiveName)) {
      directiveHandlers[directiveName](state, directiveName, directiveArgs);
    } else {
      throwWarning(state, 'unknown document directive "' + directiveName + '"');
    }
  }
  skipSeparationSpace(state, true, -1);
  if (state.lineIndent === 0 && state.input.charCodeAt(state.position) === 45 && state.input.charCodeAt(state.position + 1) === 45 && state.input.charCodeAt(state.position + 2) === 45) {
    state.position += 3;
    skipSeparationSpace(state, true, -1);
  } else if (hasDirectives) {
    throwError(state, "directives end mark is expected");
  }
  composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
  skipSeparationSpace(state, true, -1);
  if (state.checkLineBreaks && PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
    throwWarning(state, "non-ASCII line breaks are interpreted as content");
  }
  state.documents.push(state.result);
  if (state.position === state.lineStart && testDocumentSeparator(state)) {
    if (state.input.charCodeAt(state.position) === 46) {
      state.position += 3;
      skipSeparationSpace(state, true, -1);
    }
    return;
  }
  if (state.position < state.length - 1) {
    throwError(state, "end of the stream or a document separator is expected");
  } else {
    return;
  }
}
function loadDocuments(input, options) {
  input = String(input);
  options = options || {};
  if (input.length !== 0) {
    if (input.charCodeAt(input.length - 1) !== 10 && input.charCodeAt(input.length - 1) !== 13) {
      input += "\n";
    }
    if (input.charCodeAt(0) === 65279) {
      input = input.slice(1);
    }
  }
  var state = new State$1(input, options);
  var nullpos = input.indexOf("\0");
  if (nullpos !== -1) {
    state.position = nullpos;
    throwError(state, "null byte is not allowed in input");
  }
  state.input += "\0";
  while (state.input.charCodeAt(state.position) === 32) {
    state.lineIndent += 1;
    state.position += 1;
  }
  while (state.position < state.length - 1) {
    readDocument(state);
  }
  return state.documents;
}
function loadAll$1(input, iterator, options) {
  if (iterator !== null && typeof iterator === "object" && typeof options === "undefined") {
    options = iterator;
    iterator = null;
  }
  var documents = loadDocuments(input, options);
  if (typeof iterator !== "function") {
    return documents;
  }
  for (var index = 0, length = documents.length; index < length; index += 1) {
    iterator(documents[index]);
  }
}
function load$1(input, options) {
  var documents = loadDocuments(input, options);
  if (documents.length === 0) {
    return void 0;
  } else if (documents.length === 1) {
    return documents[0];
  }
  throw new exception("expected a single document in the stream, but found more");
}
var loadAll_1 = loadAll$1;
var load_1 = load$1;
var loader = {
  loadAll: loadAll_1,
  load: load_1
};
var _toString = Object.prototype.toString;
var _hasOwnProperty = Object.prototype.hasOwnProperty;
var CHAR_BOM = 65279;
var CHAR_TAB = 9;
var CHAR_LINE_FEED = 10;
var CHAR_CARRIAGE_RETURN = 13;
var CHAR_SPACE = 32;
var CHAR_EXCLAMATION = 33;
var CHAR_DOUBLE_QUOTE = 34;
var CHAR_SHARP = 35;
var CHAR_PERCENT = 37;
var CHAR_AMPERSAND = 38;
var CHAR_SINGLE_QUOTE = 39;
var CHAR_ASTERISK = 42;
var CHAR_COMMA = 44;
var CHAR_MINUS = 45;
var CHAR_COLON = 58;
var CHAR_EQUALS = 61;
var CHAR_GREATER_THAN = 62;
var CHAR_QUESTION = 63;
var CHAR_COMMERCIAL_AT = 64;
var CHAR_LEFT_SQUARE_BRACKET = 91;
var CHAR_RIGHT_SQUARE_BRACKET = 93;
var CHAR_GRAVE_ACCENT = 96;
var CHAR_LEFT_CURLY_BRACKET = 123;
var CHAR_VERTICAL_LINE = 124;
var CHAR_RIGHT_CURLY_BRACKET = 125;
var ESCAPE_SEQUENCES = {};
ESCAPE_SEQUENCES[0] = "\\0";
ESCAPE_SEQUENCES[7] = "\\a";
ESCAPE_SEQUENCES[8] = "\\b";
ESCAPE_SEQUENCES[9] = "\\t";
ESCAPE_SEQUENCES[10] = "\\n";
ESCAPE_SEQUENCES[11] = "\\v";
ESCAPE_SEQUENCES[12] = "\\f";
ESCAPE_SEQUENCES[13] = "\\r";
ESCAPE_SEQUENCES[27] = "\\e";
ESCAPE_SEQUENCES[34] = '\\"';
ESCAPE_SEQUENCES[92] = "\\\\";
ESCAPE_SEQUENCES[133] = "\\N";
ESCAPE_SEQUENCES[160] = "\\_";
ESCAPE_SEQUENCES[8232] = "\\L";
ESCAPE_SEQUENCES[8233] = "\\P";
var DEPRECATED_BOOLEANS_SYNTAX = [
  "y",
  "Y",
  "yes",
  "Yes",
  "YES",
  "on",
  "On",
  "ON",
  "n",
  "N",
  "no",
  "No",
  "NO",
  "off",
  "Off",
  "OFF"
];
var DEPRECATED_BASE60_SYNTAX = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function compileStyleMap(schema2, map2) {
  var result, keys, index, length, tag, style, type2;
  if (map2 === null)
    return {};
  result = {};
  keys = Object.keys(map2);
  for (index = 0, length = keys.length; index < length; index += 1) {
    tag = keys[index];
    style = String(map2[tag]);
    if (tag.slice(0, 2) === "!!") {
      tag = "tag:yaml.org,2002:" + tag.slice(2);
    }
    type2 = schema2.compiledTypeMap["fallback"][tag];
    if (type2 && _hasOwnProperty.call(type2.styleAliases, style)) {
      style = type2.styleAliases[style];
    }
    result[tag] = style;
  }
  return result;
}
function encodeHex(character) {
  var string, handle, length;
  string = character.toString(16).toUpperCase();
  if (character <= 255) {
    handle = "x";
    length = 2;
  } else if (character <= 65535) {
    handle = "u";
    length = 4;
  } else if (character <= 4294967295) {
    handle = "U";
    length = 8;
  } else {
    throw new exception("code point within a string may not be greater than 0xFFFFFFFF");
  }
  return "\\" + handle + common.repeat("0", length - string.length) + string;
}
var QUOTING_TYPE_SINGLE = 1;
var QUOTING_TYPE_DOUBLE = 2;
function State(options) {
  this.schema = options["schema"] || _default;
  this.indent = Math.max(1, options["indent"] || 2);
  this.noArrayIndent = options["noArrayIndent"] || false;
  this.skipInvalid = options["skipInvalid"] || false;
  this.flowLevel = common.isNothing(options["flowLevel"]) ? -1 : options["flowLevel"];
  this.styleMap = compileStyleMap(this.schema, options["styles"] || null);
  this.sortKeys = options["sortKeys"] || false;
  this.lineWidth = options["lineWidth"] || 80;
  this.noRefs = options["noRefs"] || false;
  this.noCompatMode = options["noCompatMode"] || false;
  this.condenseFlow = options["condenseFlow"] || false;
  this.quotingType = options["quotingType"] === '"' ? QUOTING_TYPE_DOUBLE : QUOTING_TYPE_SINGLE;
  this.forceQuotes = options["forceQuotes"] || false;
  this.replacer = typeof options["replacer"] === "function" ? options["replacer"] : null;
  this.implicitTypes = this.schema.compiledImplicit;
  this.explicitTypes = this.schema.compiledExplicit;
  this.tag = null;
  this.result = "";
  this.duplicates = [];
  this.usedDuplicates = null;
}
function indentString(string, spaces) {
  var ind = common.repeat(" ", spaces), position = 0, next = -1, result = "", line, length = string.length;
  while (position < length) {
    next = string.indexOf("\n", position);
    if (next === -1) {
      line = string.slice(position);
      position = length;
    } else {
      line = string.slice(position, next + 1);
      position = next + 1;
    }
    if (line.length && line !== "\n")
      result += ind;
    result += line;
  }
  return result;
}
function generateNextLine(state, level) {
  return "\n" + common.repeat(" ", state.indent * level);
}
function testImplicitResolving(state, str2) {
  var index, length, type2;
  for (index = 0, length = state.implicitTypes.length; index < length; index += 1) {
    type2 = state.implicitTypes[index];
    if (type2.resolve(str2)) {
      return true;
    }
  }
  return false;
}
function isWhitespace(c) {
  return c === CHAR_SPACE || c === CHAR_TAB;
}
function isPrintable(c) {
  return 32 <= c && c <= 126 || 161 <= c && c <= 55295 && c !== 8232 && c !== 8233 || 57344 <= c && c <= 65533 && c !== CHAR_BOM || 65536 <= c && c <= 1114111;
}
function isNsCharOrWhitespace(c) {
  return isPrintable(c) && c !== CHAR_BOM && c !== CHAR_CARRIAGE_RETURN && c !== CHAR_LINE_FEED;
}
function isPlainSafe(c, prev, inblock) {
  var cIsNsCharOrWhitespace = isNsCharOrWhitespace(c);
  var cIsNsChar = cIsNsCharOrWhitespace && !isWhitespace(c);
  return (
    // ns-plain-safe
    (inblock ? (
      // c = flow-in
      cIsNsCharOrWhitespace
    ) : cIsNsCharOrWhitespace && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET) && c !== CHAR_SHARP && !(prev === CHAR_COLON && !cIsNsChar) || isNsCharOrWhitespace(prev) && !isWhitespace(prev) && c === CHAR_SHARP || prev === CHAR_COLON && cIsNsChar
  );
}
function isPlainSafeFirst(c) {
  return isPrintable(c) && c !== CHAR_BOM && !isWhitespace(c) && c !== CHAR_MINUS && c !== CHAR_QUESTION && c !== CHAR_COLON && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET && c !== CHAR_SHARP && c !== CHAR_AMPERSAND && c !== CHAR_ASTERISK && c !== CHAR_EXCLAMATION && c !== CHAR_VERTICAL_LINE && c !== CHAR_EQUALS && c !== CHAR_GREATER_THAN && c !== CHAR_SINGLE_QUOTE && c !== CHAR_DOUBLE_QUOTE && c !== CHAR_PERCENT && c !== CHAR_COMMERCIAL_AT && c !== CHAR_GRAVE_ACCENT;
}
function isPlainSafeLast(c) {
  return !isWhitespace(c) && c !== CHAR_COLON;
}
function codePointAt(string, pos) {
  var first = string.charCodeAt(pos), second;
  if (first >= 55296 && first <= 56319 && pos + 1 < string.length) {
    second = string.charCodeAt(pos + 1);
    if (second >= 56320 && second <= 57343) {
      return (first - 55296) * 1024 + second - 56320 + 65536;
    }
  }
  return first;
}
function needIndentIndicator(string) {
  var leadingSpaceRe = /^\n* /;
  return leadingSpaceRe.test(string);
}
var STYLE_PLAIN = 1;
var STYLE_SINGLE = 2;
var STYLE_LITERAL = 3;
var STYLE_FOLDED = 4;
var STYLE_DOUBLE = 5;
function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth, testAmbiguousType, quotingType, forceQuotes, inblock) {
  var i;
  var char = 0;
  var prevChar = null;
  var hasLineBreak = false;
  var hasFoldableLine = false;
  var shouldTrackWidth = lineWidth !== -1;
  var previousLineBreak = -1;
  var plain = isPlainSafeFirst(codePointAt(string, 0)) && isPlainSafeLast(codePointAt(string, string.length - 1));
  if (singleLineOnly || forceQuotes) {
    for (i = 0; i < string.length; char >= 65536 ? i += 2 : i++) {
      char = codePointAt(string, i);
      if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char, prevChar, inblock);
      prevChar = char;
    }
  } else {
    for (i = 0; i < string.length; char >= 65536 ? i += 2 : i++) {
      char = codePointAt(string, i);
      if (char === CHAR_LINE_FEED) {
        hasLineBreak = true;
        if (shouldTrackWidth) {
          hasFoldableLine = hasFoldableLine || // Foldable line = too long, and not more-indented.
          i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== " ";
          previousLineBreak = i;
        }
      } else if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char, prevChar, inblock);
      prevChar = char;
    }
    hasFoldableLine = hasFoldableLine || shouldTrackWidth && (i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== " ");
  }
  if (!hasLineBreak && !hasFoldableLine) {
    if (plain && !forceQuotes && !testAmbiguousType(string)) {
      return STYLE_PLAIN;
    }
    return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
  }
  if (indentPerLevel > 9 && needIndentIndicator(string)) {
    return STYLE_DOUBLE;
  }
  if (!forceQuotes) {
    return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
  }
  return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
}
function writeScalar(state, string, level, iskey, inblock) {
  state.dump = function() {
    if (string.length === 0) {
      return state.quotingType === QUOTING_TYPE_DOUBLE ? '""' : "''";
    }
    if (!state.noCompatMode) {
      if (DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1 || DEPRECATED_BASE60_SYNTAX.test(string)) {
        return state.quotingType === QUOTING_TYPE_DOUBLE ? '"' + string + '"' : "'" + string + "'";
      }
    }
    var indent = state.indent * Math.max(1, level);
    var lineWidth = state.lineWidth === -1 ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);
    var singleLineOnly = iskey || state.flowLevel > -1 && level >= state.flowLevel;
    function testAmbiguity(string2) {
      return testImplicitResolving(state, string2);
    }
    switch (chooseScalarStyle(
      string,
      singleLineOnly,
      state.indent,
      lineWidth,
      testAmbiguity,
      state.quotingType,
      state.forceQuotes && !iskey,
      inblock
    )) {
      case STYLE_PLAIN:
        return string;
      case STYLE_SINGLE:
        return "'" + string.replace(/'/g, "''") + "'";
      case STYLE_LITERAL:
        return "|" + blockHeader(string, state.indent) + dropEndingNewline(indentString(string, indent));
      case STYLE_FOLDED:
        return ">" + blockHeader(string, state.indent) + dropEndingNewline(indentString(foldString(string, lineWidth), indent));
      case STYLE_DOUBLE:
        return '"' + escapeString(string) + '"';
      default:
        throw new exception("impossible error: invalid scalar style");
    }
  }();
}
function blockHeader(string, indentPerLevel) {
  var indentIndicator = needIndentIndicator(string) ? String(indentPerLevel) : "";
  var clip = string[string.length - 1] === "\n";
  var keep = clip && (string[string.length - 2] === "\n" || string === "\n");
  var chomp = keep ? "+" : clip ? "" : "-";
  return indentIndicator + chomp + "\n";
}
function dropEndingNewline(string) {
  return string[string.length - 1] === "\n" ? string.slice(0, -1) : string;
}
function foldString(string, width) {
  var lineRe = /(\n+)([^\n]*)/g;
  var result = function() {
    var nextLF = string.indexOf("\n");
    nextLF = nextLF !== -1 ? nextLF : string.length;
    lineRe.lastIndex = nextLF;
    return foldLine(string.slice(0, nextLF), width);
  }();
  var prevMoreIndented = string[0] === "\n" || string[0] === " ";
  var moreIndented;
  var match;
  while (match = lineRe.exec(string)) {
    var prefix = match[1], line = match[2];
    moreIndented = line[0] === " ";
    result += prefix + (!prevMoreIndented && !moreIndented && line !== "" ? "\n" : "") + foldLine(line, width);
    prevMoreIndented = moreIndented;
  }
  return result;
}
function foldLine(line, width) {
  if (line === "" || line[0] === " ")
    return line;
  var breakRe = / [^ ]/g;
  var match;
  var start4 = 0, end, curr = 0, next = 0;
  var result = "";
  while (match = breakRe.exec(line)) {
    next = match.index;
    if (next - start4 > width) {
      end = curr > start4 ? curr : next;
      result += "\n" + line.slice(start4, end);
      start4 = end + 1;
    }
    curr = next;
  }
  result += "\n";
  if (line.length - start4 > width && curr > start4) {
    result += line.slice(start4, curr) + "\n" + line.slice(curr + 1);
  } else {
    result += line.slice(start4);
  }
  return result.slice(1);
}
function escapeString(string) {
  var result = "";
  var char = 0;
  var escapeSeq;
  for (var i = 0; i < string.length; char >= 65536 ? i += 2 : i++) {
    char = codePointAt(string, i);
    escapeSeq = ESCAPE_SEQUENCES[char];
    if (!escapeSeq && isPrintable(char)) {
      result += string[i];
      if (char >= 65536)
        result += string[i + 1];
    } else {
      result += escapeSeq || encodeHex(char);
    }
  }
  return result;
}
function writeFlowSequence(state, level, object) {
  var _result = "", _tag = state.tag, index, length, value;
  for (index = 0, length = object.length; index < length; index += 1) {
    value = object[index];
    if (state.replacer) {
      value = state.replacer.call(object, String(index), value);
    }
    if (writeNode(state, level, value, false, false) || typeof value === "undefined" && writeNode(state, level, null, false, false)) {
      if (_result !== "")
        _result += "," + (!state.condenseFlow ? " " : "");
      _result += state.dump;
    }
  }
  state.tag = _tag;
  state.dump = "[" + _result + "]";
}
function writeBlockSequence(state, level, object, compact) {
  var _result = "", _tag = state.tag, index, length, value;
  for (index = 0, length = object.length; index < length; index += 1) {
    value = object[index];
    if (state.replacer) {
      value = state.replacer.call(object, String(index), value);
    }
    if (writeNode(state, level + 1, value, true, true, false, true) || typeof value === "undefined" && writeNode(state, level + 1, null, true, true, false, true)) {
      if (!compact || _result !== "") {
        _result += generateNextLine(state, level);
      }
      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        _result += "-";
      } else {
        _result += "- ";
      }
      _result += state.dump;
    }
  }
  state.tag = _tag;
  state.dump = _result || "[]";
}
function writeFlowMapping(state, level, object) {
  var _result = "", _tag = state.tag, objectKeyList = Object.keys(object), index, length, objectKey, objectValue, pairBuffer;
  for (index = 0, length = objectKeyList.length; index < length; index += 1) {
    pairBuffer = "";
    if (_result !== "")
      pairBuffer += ", ";
    if (state.condenseFlow)
      pairBuffer += '"';
    objectKey = objectKeyList[index];
    objectValue = object[objectKey];
    if (state.replacer) {
      objectValue = state.replacer.call(object, objectKey, objectValue);
    }
    if (!writeNode(state, level, objectKey, false, false)) {
      continue;
    }
    if (state.dump.length > 1024)
      pairBuffer += "? ";
    pairBuffer += state.dump + (state.condenseFlow ? '"' : "") + ":" + (state.condenseFlow ? "" : " ");
    if (!writeNode(state, level, objectValue, false, false)) {
      continue;
    }
    pairBuffer += state.dump;
    _result += pairBuffer;
  }
  state.tag = _tag;
  state.dump = "{" + _result + "}";
}
function writeBlockMapping(state, level, object, compact) {
  var _result = "", _tag = state.tag, objectKeyList = Object.keys(object), index, length, objectKey, objectValue, explicitPair, pairBuffer;
  if (state.sortKeys === true) {
    objectKeyList.sort();
  } else if (typeof state.sortKeys === "function") {
    objectKeyList.sort(state.sortKeys);
  } else if (state.sortKeys) {
    throw new exception("sortKeys must be a boolean or a function");
  }
  for (index = 0, length = objectKeyList.length; index < length; index += 1) {
    pairBuffer = "";
    if (!compact || _result !== "") {
      pairBuffer += generateNextLine(state, level);
    }
    objectKey = objectKeyList[index];
    objectValue = object[objectKey];
    if (state.replacer) {
      objectValue = state.replacer.call(object, objectKey, objectValue);
    }
    if (!writeNode(state, level + 1, objectKey, true, true, true)) {
      continue;
    }
    explicitPair = state.tag !== null && state.tag !== "?" || state.dump && state.dump.length > 1024;
    if (explicitPair) {
      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        pairBuffer += "?";
      } else {
        pairBuffer += "? ";
      }
    }
    pairBuffer += state.dump;
    if (explicitPair) {
      pairBuffer += generateNextLine(state, level);
    }
    if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
      continue;
    }
    if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
      pairBuffer += ":";
    } else {
      pairBuffer += ": ";
    }
    pairBuffer += state.dump;
    _result += pairBuffer;
  }
  state.tag = _tag;
  state.dump = _result || "{}";
}
function detectType(state, object, explicit) {
  var _result, typeList, index, length, type2, style;
  typeList = explicit ? state.explicitTypes : state.implicitTypes;
  for (index = 0, length = typeList.length; index < length; index += 1) {
    type2 = typeList[index];
    if ((type2.instanceOf || type2.predicate) && (!type2.instanceOf || typeof object === "object" && object instanceof type2.instanceOf) && (!type2.predicate || type2.predicate(object))) {
      if (explicit) {
        if (type2.multi && type2.representName) {
          state.tag = type2.representName(object);
        } else {
          state.tag = type2.tag;
        }
      } else {
        state.tag = "?";
      }
      if (type2.represent) {
        style = state.styleMap[type2.tag] || type2.defaultStyle;
        if (_toString.call(type2.represent) === "[object Function]") {
          _result = type2.represent(object, style);
        } else if (_hasOwnProperty.call(type2.represent, style)) {
          _result = type2.represent[style](object, style);
        } else {
          throw new exception("!<" + type2.tag + '> tag resolver accepts not "' + style + '" style');
        }
        state.dump = _result;
      }
      return true;
    }
  }
  return false;
}
function writeNode(state, level, object, block, compact, iskey, isblockseq) {
  state.tag = null;
  state.dump = object;
  if (!detectType(state, object, false)) {
    detectType(state, object, true);
  }
  var type2 = _toString.call(state.dump);
  var inblock = block;
  var tagStr;
  if (block) {
    block = state.flowLevel < 0 || state.flowLevel > level;
  }
  var objectOrArray = type2 === "[object Object]" || type2 === "[object Array]", duplicateIndex, duplicate;
  if (objectOrArray) {
    duplicateIndex = state.duplicates.indexOf(object);
    duplicate = duplicateIndex !== -1;
  }
  if (state.tag !== null && state.tag !== "?" || duplicate || state.indent !== 2 && level > 0) {
    compact = false;
  }
  if (duplicate && state.usedDuplicates[duplicateIndex]) {
    state.dump = "*ref_" + duplicateIndex;
  } else {
    if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
      state.usedDuplicates[duplicateIndex] = true;
    }
    if (type2 === "[object Object]") {
      if (block && Object.keys(state.dump).length !== 0) {
        writeBlockMapping(state, level, state.dump, compact);
        if (duplicate) {
          state.dump = "&ref_" + duplicateIndex + state.dump;
        }
      } else {
        writeFlowMapping(state, level, state.dump);
        if (duplicate) {
          state.dump = "&ref_" + duplicateIndex + " " + state.dump;
        }
      }
    } else if (type2 === "[object Array]") {
      if (block && state.dump.length !== 0) {
        if (state.noArrayIndent && !isblockseq && level > 0) {
          writeBlockSequence(state, level - 1, state.dump, compact);
        } else {
          writeBlockSequence(state, level, state.dump, compact);
        }
        if (duplicate) {
          state.dump = "&ref_" + duplicateIndex + state.dump;
        }
      } else {
        writeFlowSequence(state, level, state.dump);
        if (duplicate) {
          state.dump = "&ref_" + duplicateIndex + " " + state.dump;
        }
      }
    } else if (type2 === "[object String]") {
      if (state.tag !== "?") {
        writeScalar(state, state.dump, level, iskey, inblock);
      }
    } else if (type2 === "[object Undefined]") {
      return false;
    } else {
      if (state.skipInvalid)
        return false;
      throw new exception("unacceptable kind of an object to dump " + type2);
    }
    if (state.tag !== null && state.tag !== "?") {
      tagStr = encodeURI(
        state.tag[0] === "!" ? state.tag.slice(1) : state.tag
      ).replace(/!/g, "%21");
      if (state.tag[0] === "!") {
        tagStr = "!" + tagStr;
      } else if (tagStr.slice(0, 18) === "tag:yaml.org,2002:") {
        tagStr = "!!" + tagStr.slice(18);
      } else {
        tagStr = "!<" + tagStr + ">";
      }
      state.dump = tagStr + " " + state.dump;
    }
  }
  return true;
}
function getDuplicateReferences(object, state) {
  var objects = [], duplicatesIndexes = [], index, length;
  inspectNode(object, objects, duplicatesIndexes);
  for (index = 0, length = duplicatesIndexes.length; index < length; index += 1) {
    state.duplicates.push(objects[duplicatesIndexes[index]]);
  }
  state.usedDuplicates = new Array(length);
}
function inspectNode(object, objects, duplicatesIndexes) {
  var objectKeyList, index, length;
  if (object !== null && typeof object === "object") {
    index = objects.indexOf(object);
    if (index !== -1) {
      if (duplicatesIndexes.indexOf(index) === -1) {
        duplicatesIndexes.push(index);
      }
    } else {
      objects.push(object);
      if (Array.isArray(object)) {
        for (index = 0, length = object.length; index < length; index += 1) {
          inspectNode(object[index], objects, duplicatesIndexes);
        }
      } else {
        objectKeyList = Object.keys(object);
        for (index = 0, length = objectKeyList.length; index < length; index += 1) {
          inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);
        }
      }
    }
  }
}
function dump$1(input, options) {
  options = options || {};
  var state = new State(options);
  if (!state.noRefs)
    getDuplicateReferences(input, state);
  var value = input;
  if (state.replacer) {
    value = state.replacer.call({ "": value }, "", value);
  }
  if (writeNode(state, 0, value, true, true))
    return state.dump + "\n";
  return "";
}
var dump_1 = dump$1;
var dumper = {
  dump: dump_1
};
function renamed(from, to) {
  return function() {
    throw new Error("Function yaml." + from + " is removed in js-yaml 4. Use yaml." + to + " instead, which is now safe by default.");
  };
}
var Type = type;
var Schema = schema;
var FAILSAFE_SCHEMA = failsafe;
var JSON_SCHEMA = json;
var CORE_SCHEMA = core;
var DEFAULT_SCHEMA = _default;
var load = loader.load;
var loadAll = loader.loadAll;
var dump = dumper.dump;
var YAMLException = exception;
var types = {
  binary,
  float,
  map,
  null: _null,
  pairs,
  set: set6,
  timestamp,
  bool,
  int,
  merge: merge3,
  omap,
  seq,
  str
};
var safeLoad = renamed("safeLoad", "load");
var safeLoadAll = renamed("safeLoadAll", "loadAll");
var safeDump = renamed("safeDump", "dump");
var jsYaml = {
  Type,
  Schema,
  FAILSAFE_SCHEMA,
  JSON_SCHEMA,
  CORE_SCHEMA,
  DEFAULT_SCHEMA,
  load,
  loadAll,
  dump,
  YAMLException,
  types,
  safeLoad,
  safeLoadAll,
  safeDump
};
var js_yaml_default = jsYaml;

// node_modules/@wix/motion-edm-autogen-transformations/dist/esm/lib/transformations/transformError/index.js
var import_lodash17 = __toESM(require_lodash());

// node_modules/@wix/motion-edm-autogen-transformations/dist/esm/lib/transformations/transformError/violationsWithRenamedFields.js
var import_lodash16 = __toESM(require_lodash());

// node_modules/@wix/motion-edm-autogen-transformations/dist/esm/lib/transformations/transformError/withRenamedArgument.js
var withRenamedArgument = function(fieldValue, argumentNames) {
  var argIndex = getArgumentIndex(fieldValue);
  if (argIndex !== null) {
    return fieldValue.replace("$[".concat(argIndex, "]"), argumentNames[argIndex]);
  }
  return fieldValue;
};

// node_modules/@wix/motion-edm-autogen-transformations/dist/esm/lib/transformations/transformError/violationsWithRenamedFields.js
var JS_SINGLE_ARG_UNCHANGED2 = transformations2.JS_SINGLE_ARG_UNCHANGED;
var chain = import_lodash16.default.chain;
var some2 = import_lodash16.default.some;
var collectArgumentExpressions = function(transformation) {
  var accumulator = {
    spreadPathsToArguments: {},
    explicitPathsToArguments: {}
  };
  reduceTransformation(transformation, {
    visitors: {
      NestedSpreadExpression: function(acc, spreadOperatorParentPath, argumentExpressionToSpread) {
        acc.spreadPathsToArguments[spreadOperatorParentPath] = argumentExpressionToSpread;
      },
      NestedSimpleTransformationExpression: function(acc, path, simpleTransformationExpression) {
        acc.explicitPathsToArguments[path] = simpleTransformationExpression;
      },
      CustomFunctionExpression: function(acc, path, functionName, _a14) {
        var transformationPath = _a14[0], wrappingName = _a14[1];
        switch (functionName) {
          case "wrap":
            acc.explicitPathsToArguments["".concat(path, ".").concat(wrappingName)] = transformationPath;
            break;
          default:
        }
      }
    },
    accumulator
  });
  return accumulator;
};
var violationsWithRenamedFields = function(_a14) {
  var transformation = _a14.transformation, fieldViolations = _a14.fieldViolations, argumentNames = _a14.argumentNames;
  var _b = collectArgumentExpressions(transformation), spreadPathsToArguments = _b.spreadPathsToArguments, explicitPathsToArguments = _b.explicitPathsToArguments;
  var allPathsToArguments = __assign(__assign({}, spreadPathsToArguments), explicitPathsToArguments);
  var allPathsToArgumentsKeys = Object.keys(allPathsToArguments);
  return (0, import_lodash16.default)(fieldViolations).map(function(fieldViolation) {
    var containedInAMoreSpecificViolationField = some2(fieldViolations, function(anotherViolation) {
      return anotherViolation.field.length > fieldViolation.field.length && anotherViolation.field.startsWith(fieldViolation.field) && allPathsToArgumentsKeys.includes(anotherViolation.field);
    });
    if (containedInAMoreSpecificViolationField) {
      return null;
    }
    var exactMatchArgumentExpression = explicitPathsToArguments[fieldViolation.field];
    if (exactMatchArgumentExpression) {
      return __assign(__assign({}, fieldViolation), { field: withRenamedArgument(exactMatchArgumentExpression, argumentNames) });
    }
    var longestPartialPathMatch = chain(allPathsToArgumentsKeys).sortBy("length").reverse().find(function(path) {
      return fieldViolation.field.startsWith(path);
    }).value();
    var partialMatchArgumentExpression = allPathsToArguments[longestPartialPathMatch];
    if (partialMatchArgumentExpression) {
      return __assign(__assign({}, fieldViolation), { field: fieldViolation.field.replace(longestPartialPathMatch, withRenamedArgument(partialMatchArgumentExpression, argumentNames)) });
    }
    if (transformation === JS_SINGLE_ARG_UNCHANGED2) {
      return __assign(__assign({}, fieldViolation), { field: "".concat(argumentNames[0], ".").concat(fieldViolation.field) });
    }
    return fieldViolation;
  }).compact().value();
};

// node_modules/@wix/motion-edm-autogen-transformations/dist/esm/lib/transformations/transformError/index.js
var get4 = import_lodash17.default.get;
var has2 = import_lodash17.default.has;
var forOwn = import_lodash17.default.forOwn;
var isEqual = import_lodash17.default.isEqual;
var UNKNOWN_STATUS_CODE_TEST = "Unknown";
var MAX_YAML_LINE_WIDTH = 1e3;
var toYamlString = function(object) {
  return js_yaml_default.dump(object, { lineWidth: MAX_YAML_LINE_WIDTH }).replace(/\n$/, "");
};
var ambassadorSafeStatusText = function(_maybeHttpStatus) {
  return UNKNOWN_STATUS_CODE_TEST;
};
var buildError = function(_a14) {
  var message = _a14.message, _b = _a14.extraProperties, extraProperties = _b === void 0 ? {} : _b;
  var error = new Error(message);
  forOwn(extraProperties, function(value, key) {
    if (value !== void 0) {
      error[key] = value;
    }
  });
  return error;
};
var isClientError = function(code) {
  return code >= 400 && code < 500;
};
var isValidationError = function(ambassadorHTTPError) {
  return has2(ambassadorHTTPError, "response.details.validationError");
};
var isApplicationError = function(ambassadorHTTPError) {
  return has2(ambassadorHTTPError, "response.details.applicationError") || isClientError(ambassadorHTTPError.httpStatus);
};
var buildValidationError = function(ambassadorHTTPError, transformation, argumentNames) {
  var fieldViolations = ambassadorHTTPError.response.details.validationError.fieldViolations;
  var transformedFieldViolations = (0, import_lodash17.default)(violationsWithRenamedFields({
    transformation,
    fieldViolations,
    argumentNames
  })).sortBy("field").value();
  var message = "INVALID_ARGUMENT: ".concat(transformedFieldViolations.map(function(_a14) {
    var field = _a14.field, description = _a14.description;
    return '"'.concat(field, '" ').concat(description);
  }).join(", "));
  var details = {
    validationError: { fieldViolations: transformedFieldViolations }
  };
  return buildError({
    message: toYamlString({ message, details }),
    extraProperties: { details }
  });
};
var buildApplicationError = function(ambassadorHTTPError) {
  var statusText = ambassadorSafeStatusText(ambassadorHTTPError.httpStatus);
  var hasEmptyDetails = isEqual(get4(ambassadorHTTPError, "response.details", {}), {});
  if (hasEmptyDetails) {
    var details_1 = {
      applicationError: {
        description: statusText,
        code: constantCase(statusText),
        data: {}
      }
    };
    return buildError({
      message: toYamlString({
        message: get4(ambassadorHTTPError, "response.message", statusText),
        details: details_1
      }),
      extraProperties: { details: details_1 }
    });
  }
  var message = get4(ambassadorHTTPError, "response.message", statusText);
  var description = get4(ambassadorHTTPError, "response.details.applicationError.description", statusText);
  var code = get4(ambassadorHTTPError, "response.details.applicationError.code", constantCase(statusText));
  var data = get4(ambassadorHTTPError, "response.details.applicationError.data", {});
  var combinedMessage = message === description ? message : "".concat(message, ": ").concat(description);
  var details = {
    applicationError: {
      description,
      code,
      data
    }
  };
  return buildError({
    message: toYamlString({ message: combinedMessage, details }),
    extraProperties: { details }
  });
};
var buildSystemError = function(ambassadorHTTPError) {
  var code = constantCase(ambassadorSafeStatusText(ambassadorHTTPError.httpStatus));
  var message = ambassadorHTTPError.requestId ? "System error occurred, request-id: ".concat(ambassadorHTTPError.requestId) : "System error occurred";
  return buildError({
    message,
    extraProperties: {
      requestId: ambassadorHTTPError.requestId,
      code
    }
  });
};
var transformError = function(ambassadorHTTPError, transformation, argumentNames) {
  if (transformation === void 0) {
    transformation = void 0;
  }
  if (argumentNames === void 0) {
    argumentNames = void 0;
  }
  switch (true) {
    case isValidationError(ambassadorHTTPError):
      return buildValidationError(ambassadorHTTPError, transformation, argumentNames);
    case isApplicationError(ambassadorHTTPError):
      return buildApplicationError(ambassadorHTTPError);
    default:
      return buildSystemError(ambassadorHTTPError);
  }
};

// node_modules/@wix/metro-runtime/dist/esm/serializer/domain.js
var ConverterType;
(function(ConverterType2) {
  ConverterType2[ConverterType2["TO_JSON"] = 0] = "TO_JSON";
  ConverterType2[ConverterType2["FROM_JSON"] = 1] = "FROM_JSON";
})(ConverterType || (ConverterType = {}));

// node_modules/@wix/metro-runtime/dist/esm/serializer/protobuf-converters/timestamp.js
var _a;
var timestamp2 = (_a = {
  types: ["google.protobuf.Timestamp"]
}, _a[ConverterType.TO_JSON] = {
  transform: function(val) {
    return val.toISOString();
  }
}, _a[ConverterType.FROM_JSON] = {
  transform: function(val) {
    return new Date(val);
  }
}, _a);

// node_modules/@wix/metro-runtime/dist/esm/serializer/protobuf-converters/field-mask.js
var _a2;
var fieldMask = (_a2 = {
  types: ["google.protobuf.FieldMask"]
}, _a2[ConverterType.TO_JSON] = {
  transform: function(val) {
    return val.join(",");
  },
  /**
   * This one handles cases where we have a repeated google.protobuf.FieldMask type,
   * so it will look like: [['foo', 'bar'], ['qux']].
   *
   * The problem is that the serializer detects it as an array with actual fields (strings),
   * while in practice it is an array of multiple google.protobuf.FieldMask.
   *
   * We should determine if the items are actual fields (so each item is a string),
   * or arrays of google.protobuf.FieldMask (so each item is array that has items with fields).
   *
   * Another approach could be marking on the schama itseld each field if it's a repeatable or not,
   * it's not a good appraoch, but as long as google.protobuf.FieldMask is our only issue, it's
   * not _that_ bad solution.
   */
  checkRepetable: function(val) {
    return val.some(function(v) {
      return Array.isArray(v);
    });
  }
}, _a2[ConverterType.FROM_JSON] = {
  transform: function(val) {
    if (typeof val === "object") {
      return val.paths;
    }
    return val.split(",");
  }
}, _a2);

// node_modules/@wix/metro-runtime/dist/esm/serializer/protobuf-converters/bytes.js
var _a3;
var bytes = (_a3 = {
  types: ["google.protobuf.BytesValue", "BYTES"]
}, _a3[ConverterType.TO_JSON] = {
  transform: function(val) {
    var chars = val.reduce(function(res, c) {
      return res + String.fromCharCode(c);
    }, "");
    return btoa(chars);
  }
}, _a3[ConverterType.FROM_JSON] = {
  transform: function(val) {
    return Uint8Array.from(atob(val), function(c) {
      return c.charCodeAt(0);
    });
  }
}, _a3);

// node_modules/@wix/metro-runtime/dist/esm/serializer/protobuf-converters/duration.js
var _a4;
var duration = (_a4 = {
  types: ["google.protobuf.Duration"]
}, _a4[ConverterType.TO_JSON] = {
  transform: function(_a14) {
    var _b = _a14.seconds, seconds = _b === void 0 ? "0" : _b, _c = _a14.nanos, nanos = _c === void 0 ? 0 : _c;
    var nanosPortion = "";
    if (nanos !== 0) {
      nanosPortion = ".".concat(nanos.toString().padStart(9, "0"));
    }
    return "".concat(seconds).concat(nanosPortion, "s");
  }
}, _a4[ConverterType.FROM_JSON] = {
  transform: function(val) {
    var _a14 = val.substring(0, val.length - 1).split("."), seconds = _a14[0], nanos = _a14[1];
    return {
      seconds,
      nanos: nanosForString(nanos)
    };
  }
}, _a4);
function nanosForString(nanos) {
  var res = 0;
  if (nanos !== void 0) {
    var precision = 3 - nanos.length / 3;
    res = parseInt(nanos, 10) * Math.pow(1e3, precision);
  }
  return res;
}

// node_modules/@wix/metro-runtime/dist/esm/serializer/protobuf-converters/float.js
var _a5;
var float2 = (_a5 = {
  types: [
    "FLOAT",
    "DOUBLE",
    "google.protobuf.FloatValue",
    "google.protobuf.DoubleValue"
  ]
}, _a5[ConverterType.TO_JSON] = {
  transform: function(val) {
    return isFinite(val) ? val : val.toString();
  }
}, _a5[ConverterType.FROM_JSON] = {
  transform: function(val) {
    if (val === "NaN") {
      return NaN;
    }
    if (val === "Infinity") {
      return Infinity;
    }
    if (val === "-Infinity") {
      return -Infinity;
    }
    return val;
  }
}, _a5);

// node_modules/@wix/metro-runtime/dist/esm/serializer/protobuf-converters/converters.js
var protobufConverters = [
  timestamp2,
  fieldMask,
  bytes,
  duration,
  float2
];

// node_modules/@wix/metro-runtime/dist/esm/serialization/utils.js
function parseLeanSchemaRef(renderedSchemaName) {
  if (renderedSchemaName === void 0) {
    renderedSchemaName = "";
  }
  var _a14 = getSchemaNameAndType(renderedSchemaName), typeOrName = _a14[0], schemaName = _a14[1];
  if (schemaName) {
    return {
      schemaName,
      schemaType: typeOrName
    };
  }
  return {
    schemaName: typeOrName
  };
}
var getSchemaNameAndType = function(leanSchema) {
  return leanSchema.split("#");
};

// node_modules/@wix/metro-runtime/dist/esm/utils.js
function findByPath(obj, path, defaultValue, suffix) {
  var result = obj;
  for (var _i = 0, _a14 = path.split("."); _i < _a14.length; _i++) {
    var field = _a14[_i];
    if (!result) {
      return defaultValue;
    }
    result = result[field];
  }
  return "".concat(result).concat(suffix);
}

// node_modules/@wix/metro-runtime/dist/esm/url-resolver.js
var USER_DOMAIN = "_";
var DOMAINS = ["wix.com", "editorx.com"];
var WIX_API_DOMAINS = ["42.wixprod.net", "uw2-edt-1.wixprod.net"];
var REGEX_CAPTURE_PROTO_FIELD = /{(.*)}/;
var REGEX_CAPTURE_DOMAINS = new RegExp("\\.(".concat(DOMAINS.join("|"), ")$"));
var REGEX_CAPTURE_API_DOMAINS = new RegExp("\\.(".concat(WIX_API_DOMAINS.join("|"), ")$"));
function resolveUrl(opts) {
  var domain = resolveDomain(opts.host);
  var mappings = resolveMappingsByDomain(domain, opts.domainToMappings);
  var path = injectDataIntoProtoPath(opts.protoPath, opts.data || {});
  return resolvePath(path, mappings);
}
function injectDataIntoProtoPath(protoPath, data) {
  return protoPath.split("/").map(function(path) {
    return maybeProtoPathToData(path, data);
  }).join("/");
}
function maybeProtoPathToData(protoPath, data) {
  var protoRegExpMatch = protoPath.match(REGEX_CAPTURE_PROTO_FIELD) || [];
  var field = protoRegExpMatch[1];
  if (field) {
    var suffix = protoPath.replace(protoRegExpMatch[0], "");
    return findByPath(data, field, protoPath, suffix);
  }
  return protoPath;
}
function resolveDomain(host) {
  var resolvedHost = fixHostExceptions(host);
  return resolvedHost.replace(REGEX_CAPTURE_DOMAINS, "._base_domain_").replace(REGEX_CAPTURE_API_DOMAINS, "._api_base_domain_");
}
function fixHostExceptions(host) {
  return host.replace("create.editorx.com", "editor.editorx.com");
}
function resolveMappingsByDomain(domain, domainToMappings) {
  var mappings = domainToMappings[domain] || domainToMappings[USER_DOMAIN];
  if (!mappings) {
    if (isBaseDomain(domain)) {
      return domainToMappings[wwwBaseDomain];
    }
  }
  return mappings;
}
function resolvePath(protoPath, mappings) {
  var mapping = mappings === null || mappings === void 0 ? void 0 : mappings.find(function(m) {
    return protoPath.startsWith(m.destPath);
  });
  if (!mapping) {
    return protoPath;
  }
  return mapping.srcPath + protoPath.slice(mapping.destPath.length);
}
function isBaseDomain(domain) {
  return !!domain.match(/\._base_domain_$/);
}
var wwwBaseDomain = "www._base_domain_";

// node_modules/@wix/metro-runtime/dist/esm/flatten-params.js
function flattenParams(data, path) {
  if (path === void 0) {
    path = "";
  }
  var params = {};
  Object.entries(data).forEach(function(_a14) {
    var key = _a14[0], value = _a14[1];
    var isObject2 = value !== null && typeof value === "object" && !Array.isArray(value);
    var fieldPath = resolvePath2(path, key);
    if (isObject2) {
      var serializedObject = flattenParams(value, fieldPath);
      Object.assign(params, serializedObject);
    } else {
      params[fieldPath] = value;
    }
  });
  return params;
}
function resolvePath2(path, key) {
  return "".concat(path).concat(path ? "." : "").concat(key);
}
function toURLSearchParams(params) {
  var flatten = flattenParams(params);
  return Object.entries(flatten).reduce(function(urlSearchParams, _a14) {
    var key = _a14[0], value = _a14[1];
    var keyParams = Array.isArray(value) ? value : [value];
    keyParams.forEach(function(param) {
      if (param === void 0 || param === null) {
        return;
      }
      urlSearchParams.append(key, param);
    });
    return urlSearchParams;
  }, new URLSearchParams());
}

// node_modules/@wix/metro-runtime/dist/esm/serializer/serializer.js
function schemaSerializer(rootSchema, depSchemas, converterSets) {
  if (depSchemas === void 0) {
    depSchemas = {};
  }
  return function serialize(json2, converterType) {
    if (json2 === void 0) {
      json2 = {};
    }
    return typeof json2 === "string" ? json2 : transformSchema(rootSchema, json2);
    function transformSchema(schema2, payload) {
      var result = {};
      if ([null, void 0].includes(payload)) {
        return payload;
      }
      Object.entries(payload).forEach(function(_a14) {
        var _b, _c, _d;
        var key = _a14[0], val = _a14[1];
        var renderedSchemaName = schema2[key];
        var _e = parseLeanSchemaRef(renderedSchemaName), schemaName = _e.schemaName, schemaType = _e.schemaType;
        var isMap = schemaType === "Map";
        var isRepeatable = (_d = (_c = (_b = getConverter(schemaName)) === null || _b === void 0 ? void 0 : _b.checkRepetable) === null || _c === void 0 ? void 0 : _c.call(_b, val)) !== null && _d !== void 0 ? _d : Array.isArray(val);
        var parsedValue;
        if (isRepeatable) {
          parsedValue = val.map(function(v) {
            return applyField(v, schemaName);
          });
        } else if (isMap) {
          parsedValue = applyFieldOnMap(val, schemaName);
        } else {
          parsedValue = applyField(val, schemaName);
        }
        result[key] = parsedValue;
      });
      return result;
    }
    function applyField(val, schemaOrSerializer) {
      if (!schemaOrSerializer) {
        return val;
      }
      var maybeSchema = depSchemas[schemaOrSerializer];
      var maybeConverter = getConverter(schemaOrSerializer);
      if (maybeConverter) {
        return getConverter(schemaOrSerializer).transform(val);
      } else if (maybeSchema) {
        return transformSchema(maybeSchema, val);
      }
      throw new Error("".concat(schemaOrSerializer, " is neither schema nor serializable type"));
    }
    function getConverter(name) {
      var _a14;
      return (_a14 = converterSets[name]) === null || _a14 === void 0 ? void 0 : _a14[converterType];
    }
    function applyFieldOnMap(val, sanitizedSchemaOrSerializer) {
      return Object.entries(val).reduce(function(acc, _a14) {
        var propertyName = _a14[0], value = _a14[1];
        acc[propertyName] = applyField(value, sanitizedSchemaOrSerializer);
        return acc;
      }, {});
    }
  };
}

// node_modules/@wix/metro-runtime/dist/esm/serializer/utils.js
var __assign2 = function() {
  __assign2 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign2.apply(this, arguments);
};
function typeToConverterSet(converterSets) {
  return converterSets.reduce(function(result, converterSet) {
    var types2 = converterSet.types.reduce(function(typeResult, type2) {
      var _a14;
      return __assign2(__assign2({}, typeResult), (_a14 = {}, _a14[type2] = converterSet, _a14));
    }, {});
    return __assign2(__assign2({}, result), types2);
  }, {});
}

// node_modules/@wix/metro-runtime/dist/esm/velo-index.js
var import_lodash21 = __toESM(require_lodash());

// node_modules/@wix/metro-runtime/dist/esm/serializer/velo-converters/address.js
var import_lodash18 = __toESM(require_lodash());
var __assign3 = function() {
  __assign3 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign3.apply(this, arguments);
};
var _a6;
var sharedFieldNames2 = ["city", "subdivision", "country", "postalCode"];
var sharedStreetAddressFieldNames2 = ["name", "number", "apt"];
var address = (_a6 = {
  types: ["wix.common.Address"]
}, _a6[ConverterType.FROM_JSON] = {
  /**
   * currently wix.common.Address represents the deserialized object, so we're good.
   * in case it contains some serializable stuff (e.g. int64), we'll have to make some
   * modifications in the type.
   */
  transform: function(val) {
    return val && (0, import_lodash18.omitBy)(__assign3({ formatted: val.formattedAddress, location: val.geocode, addressLine1: val.addressLine, addressLine2: val.addressLine2, streetAddress: val.streetAddress && (0, import_lodash18.pick)(val.streetAddress, sharedStreetAddressFieldNames2) }, (0, import_lodash18.pick)(val, sharedFieldNames2)), import_lodash18.isUndefined);
  }
}, _a6[ConverterType.TO_JSON] = {
  transform: function(val) {
    return val && (0, import_lodash18.omitBy)(__assign3(__assign3({}, (0, import_lodash18.pick)(val, sharedFieldNames2)), { formattedAddress: val.formatted, geocode: val.location, addressLine: val.addressLine1, addressLine2: val.addressLine2, streetAddress: val.streetAddress && (0, import_lodash18.pick)(val.streetAddress, sharedStreetAddressFieldNames2) }), import_lodash18.isUndefined);
  }
}, _a6);

// node_modules/@wix/metro-runtime/dist/esm/serializer/velo-converters/image.js
var import_querystring2 = __toESM(require_querystring());

// node_modules/@wix/metro-runtime/dist/esm/serializer/velo-converters/converters-utils.js
var URL_HASH_PREFIX2 = "#";
var WIX_PROTOCOL = "wix:";
function encodeText(text) {
  return encodeURIComponent(text);
}
function alignIfLegacy(url, type2) {
  var protocol = new URL(url).protocol;
  return protocol === "".concat(type2, ":") ? "".concat(WIX_PROTOCOL).concat(url) : url;
}
function decodeText(s) {
  if (!s) {
    return s;
  }
  return decodeURIComponent(s);
}

// node_modules/@wix/metro-runtime/dist/esm/serializer/velo-converters/image.js
var __assign4 = function() {
  __assign4 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign4.apply(this, arguments);
};
var _a7;
var WIX_IMAGE = "image";
var image = (_a7 = {
  types: ["wix.common.Image"]
}, _a7[ConverterType.FROM_JSON] = {
  /**
   * currently wix.common.Image represents the deserialized object, so we're good.
   * in case it contains some serializable stuff (e.g. int64), we'll have to make some
   * modifications in the type.
   */
  transform: function(val) {
    if (!val) {
      return;
    }
    var fileNameOrAltText = "";
    if (val.filename || val.altText) {
      fileNameOrAltText = "/".concat(encodeText(val.filename || val.altText));
    }
    return val.id ? "wix:image://v1/".concat(val.id).concat(fileNameOrAltText).concat(URL_HASH_PREFIX2, "originWidth=").concat(val.width, "&originHeight=").concat(val.height) : val.url;
  }
}, _a7[ConverterType.TO_JSON] = {
  transform: function(val) {
    if (!val) {
      return;
    }
    var alignedImage = alignIfLegacy(val, WIX_IMAGE);
    var _a14 = new URL(alignedImage), protocol = _a14.protocol, hash = _a14.hash, pathname = _a14.pathname;
    var _b = import_querystring2.default.parse(hash.replace(URL_HASH_PREFIX2, "")), height = _b.originHeight, width = _b.originWidth;
    var _c = pathname.replace("".concat(WIX_IMAGE, "://v1/"), "").split("/"), id = _c[0], filenameOrAltText = _c[1];
    var decodedFilenameOrAltText = decodeText(filenameOrAltText);
    if (protocol === WIX_PROTOCOL) {
      var res = { id, height: Number(height), width: Number(width) };
      if (!decodedFilenameOrAltText) {
        return res;
      }
      return __assign4(__assign4({}, res), { altText: decodedFilenameOrAltText, filename: decodedFilenameOrAltText });
    }
    return { url: val };
  }
}, _a7);

// node_modules/@wix/metro-runtime/dist/esm/serializer/velo-converters/base-media.js
function createMediaConverter(fieldType, commonType) {
  var _a14;
  return _a14 = {
    types: [commonType]
  }, _a14[ConverterType.FROM_JSON] = {
    transform: function(val) {
      if (!val) {
        return;
      }
      var fileName = "";
      if (val === null || val === void 0 ? void 0 : val.filename) {
        fileName = "/".concat(encodeText(val.filename));
      }
      return val.id ? "wix:".concat(fieldType, "://v1/").concat(val.id).concat(fileName) : val.url;
    }
  }, _a14[ConverterType.TO_JSON] = {
    transform: function(val) {
      if (!val) {
        return;
      }
      var alignedUrl = alignIfLegacy(val, fieldType);
      var _a15 = new URL(alignedUrl), protocol = _a15.protocol, pathname = _a15.pathname;
      var _b = pathname.replace("".concat(fieldType, "://v1/"), "").split("/"), id = _b[0], filename = _b[1];
      if (protocol === WIX_PROTOCOL) {
        if (!filename) {
          return { id };
        }
        return {
          id,
          filename: decodeText(filename)
        };
      }
      return { url: val };
    }
  }, _a14;
}

// node_modules/@wix/metro-runtime/dist/esm/serializer/velo-converters/page-url.js
var _a8;
var pageUrl = (_a8 = {
  types: ["wix.common.PageUrl"]
}, _a8[ConverterType.FROM_JSON] = {
  transform: function(val) {
    if (!val) {
      return;
    }
    return "http://".concat(val.base).concat(val.path);
  }
}, _a8[ConverterType.TO_JSON] = {
  transform: function(val) {
    if (!val) {
      return;
    }
    var _a14 = new URL(val), host = _a14.host, pathname = _a14.pathname;
    return {
      base: host,
      path: pathname
      // (e.g /product-page/a-product)
    };
  }
}, _a8);

// node_modules/@wix/metro-runtime/dist/esm/serializer/velo-converters/video-v2.js
var import_querystring3 = __toESM(require_querystring());
var __assign5 = function() {
  __assign5 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign5.apply(this, arguments);
};
var _a9;
var WIX_VIDEO = "video";
var videoV2 = (_a9 = {
  types: ["wix.common.VideoV2"]
}, _a9[ConverterType.FROM_JSON] = {
  transform: function(val) {
    var _a14;
    if (!val) {
      return;
    }
    var fileName = "";
    if (val === null || val === void 0 ? void 0 : val.filename) {
      fileName = "/".concat(encodeText(val.filename));
    }
    var posterData = "";
    if ((_a14 = val.posters) === null || _a14 === void 0 ? void 0 : _a14.length) {
      var _b = val.posters, poster1 = _b[0], poster2 = _b[1];
      var poster = poster2 || poster1;
      var posterId = poster.id || "";
      if (!posterId && poster.url) {
        var idx = poster.url.lastIndexOf("/");
        if (idx !== -1) {
          posterId = poster.url.substring(idx + 1);
        }
      }
      if (posterId) {
        posterData = "".concat(URL_HASH_PREFIX2, "posterUri=").concat(posterId, "&posterWidth=").concat(poster.width, "&posterHeight=").concat(poster.height);
      }
    }
    return val.id ? "wix:video://v1/".concat(val.id).concat(fileName).concat(posterData) : val.url;
  }
}, _a9[ConverterType.TO_JSON] = {
  transform: function(val) {
    if (!val) {
      return;
    }
    var alignedVideo = alignIfLegacy(val, WIX_VIDEO);
    var _a14 = new URL(alignedVideo), protocol = _a14.protocol, hash = _a14.hash, pathname = _a14.pathname;
    var _b = import_querystring3.default.parse(hash.replace(URL_HASH_PREFIX2, "")), height = _b.posterHeight, width = _b.posterWidth, posterUri = _b.posterUri;
    var _c = pathname.replace("".concat(WIX_VIDEO, "://v1/"), "").split("/"), id = _c[0], fileName = _c[1];
    if (protocol === WIX_PROTOCOL) {
      var res = { id };
      if (fileName) {
        res = __assign5(__assign5({}, res), { filename: decodeText(fileName) });
      }
      if (!posterUri) {
        return res;
      }
      return __assign5(__assign5({}, res), { posters: [
        {
          id: posterUri.toString(),
          height: Number(height),
          width: Number(width)
        }
      ] });
    }
    return { url: val };
  }
}, _a9);

// node_modules/@wix/metro-runtime/dist/esm/serializer/velo-converters/page-url-v2.js
var _a10;
var pageUrlV2 = (_a10 = {
  types: ["wix.common.PageUrlV2"]
}, _a10[ConverterType.FROM_JSON] = {
  transform: function(val) {
    if (!val) {
      return;
    }
    return val.url;
  }
}, _a10[ConverterType.TO_JSON] = {
  transform: function(val) {
    if (!val) {
      return;
    }
    var pathname = new URL(val).pathname;
    return {
      relativePath: pathname,
      url: val
      // (e.g https://mysite.com/product-page/a-product)
    };
  }
}, _a10);

// node_modules/@wix/metro-runtime/dist/esm/serializer/velo-converters/video.js
var import_querystring4 = __toESM(require_querystring());
var _a11;
var WIX_VIDEO2 = "video";
var video = (_a11 = {
  types: ["wix.common.Video"]
}, _a11[ConverterType.FROM_JSON] = {
  transform: function(val) {
    var _a14;
    if (!val) {
      return;
    }
    var posterData = "";
    if ((_a14 = val.thumbnail) === null || _a14 === void 0 ? void 0 : _a14.id) {
      posterData = "".concat(URL_HASH_PREFIX2, "posterUri=").concat(val.thumbnail.id, "&posterWidth=").concat(val.thumbnail.width, "&posterHeight=").concat(val.thumbnail.height);
    }
    return val.id ? "wix:video://v1/".concat(val.id).concat(posterData) : val.url;
  }
}, _a11[ConverterType.TO_JSON] = {
  transform: function(val) {
    if (!val) {
      return;
    }
    var alignedVideo = alignIfLegacy(val, WIX_VIDEO2);
    var _a14 = new URL(alignedVideo), protocol = _a14.protocol, hash = _a14.hash, pathname = _a14.pathname;
    var _b = import_querystring4.default.parse(hash.replace(URL_HASH_PREFIX2, "")), height = _b.posterHeight, width = _b.posterWidth, posterUri = _b.posterUri;
    var id = pathname.replace("".concat(WIX_VIDEO2, "://v1/"), "").split("/")[0];
    if (protocol === WIX_PROTOCOL) {
      if (!posterUri) {
        return { id };
      }
      return {
        id,
        thumbnail: {
          height: Number(height),
          width: Number(width),
          id: posterUri.toString()
        }
      };
    }
    return { url: val };
  }
}, _a11);

// node_modules/@wix/metro-runtime/dist/esm/serializer/velo-converters/audio.js
var _a12;
var WIX_AUDIO = "audio";
var WIX_AUDIO_COMMON_TYPE = "wix.common.Audio";
var baseMediaConverter = createMediaConverter(WIX_AUDIO, WIX_AUDIO_COMMON_TYPE);
var audio = (_a12 = {
  types: [WIX_AUDIO_COMMON_TYPE]
}, _a12[ConverterType.FROM_JSON] = {
  transform: function(val) {
    var _a14;
    var duration2 = (_a14 = val === null || val === void 0 ? void 0 : val.duration) !== null && _a14 !== void 0 ? _a14 : 0;
    var url = baseMediaConverter[ConverterType.FROM_JSON].transform(val);
    return "".concat(url).concat((val === null || val === void 0 ? void 0 : val.id) ? "#duration=".concat(duration2) : "");
  }
}, _a12[ConverterType.TO_JSON] = {
  transform: function(val) {
    return baseMediaConverter[ConverterType.TO_JSON].transform(val);
  }
}, _a12);

// node_modules/@wix/metro-runtime/dist/esm/serializer/velo-converters/converters.js
var veloConverters = [
  audio,
  address,
  createMediaConverter("document", "wix.common.Document"),
  image,
  pageUrl,
  pageUrlV2,
  videoV2,
  video
];

// node_modules/@wix/metro-runtime/dist/esm/transformation-handler.js
var import_lodash19 = __toESM(require_lodash());
var RootPath = Symbol("RootPath");
var FqdnDirection;
(function(FqdnDirection2) {
  FqdnDirection2[FqdnDirection2["TO_VELO"] = 0] = "TO_VELO";
  FqdnDirection2[FqdnDirection2["FROM_VELO"] = 1] = "FROM_VELO";
})(FqdnDirection || (FqdnDirection = {}));
function transformFqdn(payload, fqdnTransformation) {
  var transformation = fqdnTransformation.transformation;
  return fqdnTransformation.paths.reduce(function(payload2, path) {
    var pathToFqdn = typeof path === "string" ? path : "";
    return new FqdnTransformationHandler({
      entity: payload2,
      transformation,
      pathToFqdn
    }).transformEntity();
  }, payload);
}
var FqdnTransformationHandler = (
  /** @class */
  function() {
    function FqdnTransformationHandler2(_a14) {
      var _this = this;
      var entity = _a14.entity, pathToFqdn = _a14.pathToFqdn, transformation = _a14.transformation;
      this.transformArray = function(entitiesArray, index) {
        return entitiesArray.map(function(entity2) {
          return _this.transformEntity(entity2, index);
        });
      };
      this.transformMap = function(entitiesMap, index) {
        return Object.entries(entitiesMap).reduce(function(acc, _a15) {
          var key = _a15[0], entity2 = _a15[1];
          acc[key] = _this.transformEntity(entity2, index);
          return acc;
        }, {});
      };
      this.path = pathToFqdn.split(".");
      this.entity = (0, import_lodash19.cloneDeep)(entity);
      this.transformation = transformation;
    }
    FqdnTransformationHandler2.prototype.transformEntity = function(entity, index) {
      if (entity === void 0) {
        entity = this.entity;
      }
      if (index === void 0) {
        index = 0;
      }
      var currentPath = this.path[index];
      if (!currentPath) {
        return transformResponseMessage(entity, this.transformation, builtinCustomFunctions);
      }
      var _a14 = parseLeanSchemaRef(currentPath), schemaName = _a14.schemaName, schemaType = _a14.schemaType;
      var currentEntity = entity[schemaName];
      if (!currentEntity) {
        return entity;
      }
      var transformedEntity;
      if (schemaType === "Array") {
        transformedEntity = this.transformArray(currentEntity, index + 1);
      } else if (schemaType === "Map") {
        transformedEntity = this.transformMap(currentEntity, index + 1);
      } else {
        transformedEntity = this.transformEntity(currentEntity, index + 1);
      }
      (0, import_lodash19.set)(entity, schemaName, transformedEntity);
      return entity;
    };
    return FqdnTransformationHandler2;
  }()
);
function transformError2(httpClientError, transformation, argumentNames) {
  var _a14, _b;
  var expectedErrorStructure = {
    requestId: httpClientError.requestId,
    response: (_a14 = httpClientError.response) === null || _a14 === void 0 ? void 0 : _a14.data,
    httpStatus: (_b = httpClientError.response) === null || _b === void 0 ? void 0 : _b.status
  };
  return transformError(expectedErrorStructure, transformation, argumentNames);
}

// node_modules/@wix/metro-runtime/dist/esm/query-transformation.js
var import_lodash20 = __toESM(require_lodash());
var QUERY_OPERATOR_PREFIX = "$";
var QuerySections;
(function(QuerySections2) {
  QuerySections2["FILTER"] = "filter";
  QuerySections2["SORT"] = "sort";
  QuerySections2["FIELDS"] = "fields";
})(QuerySections || (QuerySections = {}));
var CommonTransformations = {
  _id: "".concat(QUERY_OPERATOR_PREFIX, ".id"),
  _createdDate: "".concat(QUERY_OPERATOR_PREFIX, ".createdDate"),
  _updatedDate: "".concat(QUERY_OPERATOR_PREFIX, ".updatedDate")
};
function resolveQueryFieldsTransformationPaths(transformation) {
  return reduceTransformation(transformation, {
    visitors: {
      NestedSimpleTransformationExpression: function(acc, path, value) {
        acc[path] = stripJsonPathRootPrefix(value);
      },
      MapArrayItems: function(acc, path, sourceArrayExpression) {
        acc[path] = stripJsonPathRootPrefix(sourceArrayExpression);
      }
    },
    accumulator: {}
  }) || {};
}

// node_modules/@wix/metro-runtime/dist/esm/velo-index.js
var __spreadArray2 = function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var converters = typeToConverterSet(__spreadArray2(__spreadArray2([], protobufConverters, true), veloConverters, true));
function serializer(_a14) {
  var rootSchema = _a14.rootSchema, depSchemas = _a14.depSchemas, _b = _a14.fqdnTransformation, fqdnTransformation = _b === void 0 ? { paths: [], transformation: "$" } : _b, _c = _a14.customTransformation, customTransformation = _c === void 0 ? "$" : _c;
  var serialize = schemaSerializer(rootSchema, depSchemas, converters);
  return {
    toAmbassadorRequest: function(userInputArgs) {
      return (0, import_lodash21.omitBy)(serialize(fromCorvidEntity(transformToRequestMessage(userInputArgs, customTransformation, builtinCustomFunctions)), ConverterType.TO_JSON), import_lodash21.isUndefined);
    },
    fromJSON: function(json2) {
      var deserialized = serialize(json2, ConverterType.FROM_JSON);
      var fqdnTransformed = transformFqdn(deserialized, fqdnTransformation);
      return toCorvidEntity(transformResponseMessage(fqdnTransformed, customTransformation, builtinCustomFunctions));
    },
    toJSON: function(veloPayload) {
      var deserialized = serialize(veloPayload, ConverterType.TO_JSON);
      return fromCorvidEntity(transformToRequestMessage(deserialized, customTransformation, builtinCustomFunctions));
    }
  };
}

// node_modules/@wix/metro-runtime/dist/esm/ambassador-index.js
var __spreadArray3 = function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var ambassadorConverters = typeToConverterSet(__spreadArray3([], protobufConverters, true));
function serializer2(rootSchema, depSchemas) {
  if (depSchemas === void 0) {
    depSchemas = {};
  }
  var transform3 = schemaSerializer(rootSchema, depSchemas, ambassadorConverters);
  return {
    fromJSON: function(jsonOrString) {
      var jsonOrText = safeJsonParse(jsonOrString) || jsonOrString;
      return transform3(jsonOrText, ConverterType.FROM_JSON);
    },
    toJSON: function(json2) {
      return transform3(json2, ConverterType.TO_JSON);
    }
  };
}
function safeJsonParse(someString) {
  try {
    return JSON.parse(someString);
  } catch (error) {
  }
}

// node_modules/@wix/redirects/build/es/src/headless-v1-redirect-session.http.js
var _createRedirectSessionRequest = {};
var _createRedirectSessionResponse = {};
function resolveWixHeadlessV1RedirectSessionServiceUrl(opts) {
  const domainToMappings = {
    "www._base_domain_": [
      {
        srcPath: "/_api/redirects-api",
        destPath: ""
      }
    ],
    "www.wixapis.com": [
      {
        srcPath: "/_api/redirects-api",
        destPath: ""
      },
      {
        srcPath: "/redirect-session",
        destPath: ""
      }
    ]
  };
  return resolveUrl(Object.assign(opts, { domainToMappings }));
}
function createRedirectSession(payload) {
  const { toJSON: toReq, fromJSON: fromReq } = serializer2(_createRedirectSessionRequest, {});
  const { fromJSON: fromRes } = serializer2(_createRedirectSessionResponse, {});
  function __createRedirectSession({ host }) {
    const serializedData = toReq(payload);
    const metadata = {
      entityFqdn: "wix.headless.v1.redirect_session",
      method: "POST",
      methodFqn: "wix.headless.v1.RedirectSessionService.CreateRedirectSession",
      url: resolveWixHeadlessV1RedirectSessionServiceUrl({
        protoPath: "/v1/redirect-session",
        data: serializedData,
        host
      }),
      data: serializedData,
      transformResponse: fromRes
    };
    return metadata;
  }
  __createRedirectSession.fromReq = fromReq;
  return __createRedirectSession;
}

// node_modules/@wix/redirects/build/es/src/headless-v1-redirect-session.universal.js
var __awaiter2 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __verbose = false;
function __log(...args) {
  __verbose && console.log(...args);
}
function __inspect(obj) {
  return obj;
}
var _toVeloEntity = "$";
var _fromVeloEntity = "$";
var LocationType;
(function(LocationType2) {
  LocationType2["UNDEFINED"] = "UNDEFINED";
  LocationType2["OWNER_BUSINESS"] = "OWNER_BUSINESS";
  LocationType2["OWNER_CUSTOM"] = "OWNER_CUSTOM";
  LocationType2["CUSTOM"] = "CUSTOM";
})(LocationType || (LocationType = {}));
var MembersAccountSection;
(function(MembersAccountSection2) {
  MembersAccountSection2["ACCOUNT_INFO"] = "ACCOUNT_INFO";
  MembersAccountSection2["BOOKINGS"] = "BOOKINGS";
  MembersAccountSection2["ORDERS"] = "ORDERS";
  MembersAccountSection2["SUBSCRIPTIONS"] = "SUBSCRIPTIONS";
  MembersAccountSection2["EVENTS"] = "EVENTS";
})(MembersAccountSection || (MembersAccountSection = {}));
var CallbackType;
(function(CallbackType2) {
  CallbackType2["UNKNOWN"] = "UNKNOWN";
  CallbackType2["LOGOUT"] = "LOGOUT";
  CallbackType2["CHECKOUT"] = "CHECKOUT";
  CallbackType2["AUTHORIZE"] = "AUTHORIZE";
})(CallbackType || (CallbackType = {}));
var _createRedirectSessionRequest2 = {};
var _createRedirectSessionResponse2 = {};
function createRedirectSession2(options) {
  var _a14, _b, _c;
  return __awaiter2(this, arguments, void 0, function* () {
    const requestTransformation = {
      bookingsCheckout: "$[0].bookingsCheckout",
      ecomCheckout: "$[0].ecomCheckout",
      eventsCheckout: "$[0].eventsCheckout",
      paidPlansCheckout: "$[0].paidPlansCheckout",
      login: "$[0].login",
      logout: "$[0].logout",
      auth: "$[0].auth",
      callbacks: "$[0].callbacks",
      preferences: "$[0].preferences"
    };
    const responseTransformation = "$";
    const { httpClient, sideEffects } = arguments[1];
    const { toAmbassadorRequest } = serializer({
      rootSchema: _createRedirectSessionRequest2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [],
        transformation: _fromVeloEntity
      },
      customTransformation: requestTransformation
    });
    const { fromJSON } = serializer({
      rootSchema: _createRedirectSessionResponse2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [...["redirectSession"]],
        transformation: _toVeloEntity
      },
      customTransformation: responseTransformation
    });
    const payload = toAmbassadorRequest([options]);
    const reqOpts = createRedirectSession(payload);
    __log(`"CreateRedirectSession" sending request with: ${__inspect(reqOpts)}`);
    (_a14 = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSiteCall) === null || _a14 === void 0 ? void 0 : _a14.call(sideEffects);
    try {
      const result = yield httpClient.request(reqOpts);
      (_b = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSuccess) === null || _b === void 0 ? void 0 : _b.call(sideEffects, result);
      return fromJSON(result.data);
    } catch (err) {
      const transformedError = transformError2(err, requestTransformation, [
        "options"
      ]);
      (_c = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onError) === null || _c === void 0 ? void 0 : _c.call(sideEffects, err);
      throw transformedError;
    }
  });
}

// node_modules/@wix/redirects/build/es/src/headless-v1-redirect-session.public.js
var __metadata = { PACKAGE_NAME: "@wix/redirects" };
function createRedirectSession3(httpClient) {
  return (options) => createRedirectSession2(
    options,
    // @ts-ignore
    { httpClient }
  );
}

// node_modules/@wix/api-client/dist/esm/tokenHelpers.js
function getCurrentDate() {
  return Math.floor(Date.now() / 1e3);
}
function isTokenExpired(token) {
  const currentDate = getCurrentDate();
  return token.expiresAt < currentDate;
}
function createAccessToken(accessToken, expiresIn) {
  const now = getCurrentDate();
  return {
    value: accessToken,
    expiresAt: Number(expiresIn) + now
  };
}

// node_modules/pkce-challenge/dist/module.js
var import_lib_typedarrays = __toESM(require_lib_typedarrays());
var import_sha256 = __toESM(require_sha256());
var import_enc_base64url = __toESM(require_enc_base64url());
function $d415641d0cfd8c85$var$toBytesInt32(num) {
  const arr = new ArrayBuffer(4);
  const view = new DataView(arr);
  view.setUint32(0, num, false);
  return arr;
}
function $d415641d0cfd8c85$var$getRandomValues(size) {
  const randoms = import_lib_typedarrays.default.random(size);
  const randoms1byte = [];
  randoms.words.forEach((word) => {
    const arr = $d415641d0cfd8c85$var$toBytesInt32(word);
    const fourByteWord = new Uint8Array(arr);
    for (let i = 0; i < 4; i++)
      randoms1byte.push(fourByteWord[i]);
  });
  return randoms1byte;
}
function $d415641d0cfd8c85$var$random(size) {
  const mask = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~";
  let result = "";
  const randomUints = $d415641d0cfd8c85$var$getRandomValues(size);
  for (let i = 0; i < size; i++) {
    const randomIndex = randomUints[i] % mask.length;
    result += mask[randomIndex];
  }
  return result;
}
function $d415641d0cfd8c85$var$generateVerifier(length) {
  return $d415641d0cfd8c85$var$random(length);
}
function $d415641d0cfd8c85$export$6a61b14641fe7480(code_verifier) {
  return (0, import_sha256.default)(code_verifier).toString(import_enc_base64url.default);
}
function $d415641d0cfd8c85$export$2e2bcd8739ae039(length) {
  if (!length)
    length = 43;
  if (length < 43 || length > 128)
    throw `Expected a length between 43 and 128. Received ${length}.`;
  const verifier = $d415641d0cfd8c85$var$generateVerifier(length);
  const challenge = $d415641d0cfd8c85$export$6a61b14641fe7480(verifier);
  return {
    code_verifier: verifier,
    code_challenge: challenge
  };
}

// node_modules/@wix/identity/build/es/src/iam-authentication-v1-authentication.public.js
var iam_authentication_v1_authentication_public_exports = {};
__export(iam_authentication_v1_authentication_public_exports, {
  PrivacyStatus: () => PrivacyStatus,
  Reason: () => Reason,
  StateStatus: () => StateStatus,
  StateType: () => StateType,
  StatusName: () => StatusName,
  TenantType: () => TenantType,
  __metadata: () => __metadata2,
  login: () => login3,
  loginV2: () => loginV23,
  logout: () => logout3,
  proceedToNextState: () => proceedToNextState3,
  register: () => register3,
  registerV2: () => registerV23
});

// node_modules/@wix/identity/build/es/src/iam-authentication-v1-authentication.http.js
var _customField = { value: "_customValue" };
var _customValue = {
  numValue: "DOUBLE",
  dateValue: "google.protobuf.Timestamp",
  listValue: "_listValue",
  mapValue: "_mapValue"
};
var _identity = {
  createdDate: "google.protobuf.Timestamp",
  updatedDate: "google.protobuf.Timestamp",
  identityProfile: "_identityProfile"
};
var _identityProfile = { customFields: "_customField" };
var _listValue = { value: "_customValue" };
var _loginRequest = {};
var _loginResponse = {
  identity: "_identity",
  additionalData: "Map#_customValue"
};
var _loginV2Request = {};
var _logoutRequest = {};
var _mapValue = { value: "Map#_customValue" };
var _proceedToNextStateRequest = {};
var _rawHttpResponse = { body: "BYTES" };
var _registerRequest = { identity: "_identity" };
var _registerV2Request = { profile: "_identityProfile" };
var _stateMachineResponse = { identity: "_identity" };
function resolveWixIamAuthenticationV1AuthenticationServiceUrl(opts) {
  const domainToMappings = {
    _: [
      {
        srcPath: "/_api/iam/authentication",
        destPath: ""
      }
    ],
    "manage._base_domain_": [
      {
        srcPath: "/_api/authentication",
        destPath: ""
      }
    ],
    "users._base_domain_": [
      {
        srcPath: "/authentication",
        destPath: ""
      },
      {
        srcPath: "/iam/wix/google",
        destPath: "/v1/sso/callback/root/0e6a50f5-b523-4e29-990d-f37fa2ffdd69"
      }
    ],
    "dev._base_domain_": [
      {
        srcPath: "/_api/iam/authentication",
        destPath: ""
      }
    ],
    "bo._base_domain_": [
      {
        srcPath: "/_api/iam/authentication",
        destPath: ""
      }
    ],
    "www.wixapis.com": [
      {
        srcPath: "/_api/iam/authentication",
        destPath: ""
      }
    ],
    _base_domain_: [
      {
        srcPath: "/_api/iam/authentication",
        destPath: ""
      }
    ],
    "www._base_domain_": [
      {
        srcPath: "/_api/iam/authentication",
        destPath: ""
      }
    ]
  };
  return resolveUrl(Object.assign(opts, { domainToMappings }));
}
function register(payload) {
  const { toJSON: toReq, fromJSON: fromReq } = serializer2(_registerRequest, {
    _customField,
    _customValue,
    _identity,
    _identityProfile,
    _listValue,
    _mapValue
  });
  const { fromJSON: fromRes } = serializer2(_loginResponse, {
    _customField,
    _customValue,
    _identity,
    _identityProfile,
    _listValue,
    _mapValue
  });
  function __register({ host }) {
    const serializedData = toReq(payload);
    const metadata = {
      entityFqdn: "wix.iam.authentication.v1.authentication",
      method: "POST",
      methodFqn: "wix.iam.authentication.v1.AuthenticationService.Register",
      url: resolveWixIamAuthenticationV1AuthenticationServiceUrl({
        protoPath: "/v1/register",
        data: serializedData,
        host
      }),
      data: serializedData,
      transformResponse: fromRes
    };
    return metadata;
  }
  __register.fromReq = fromReq;
  return __register;
}
function login(payload) {
  const { toJSON: toReq, fromJSON: fromReq } = serializer2(_loginRequest, {});
  const { fromJSON: fromRes } = serializer2(_loginResponse, {
    _customField,
    _customValue,
    _identity,
    _identityProfile,
    _listValue,
    _mapValue
  });
  function __login({ host }) {
    const serializedData = toReq(payload);
    const metadata = {
      entityFqdn: "wix.iam.authentication.v1.authentication",
      method: "POST",
      methodFqn: "wix.iam.authentication.v1.AuthenticationService.Login",
      url: resolveWixIamAuthenticationV1AuthenticationServiceUrl({
        protoPath: "/v1/login",
        data: serializedData,
        host
      }),
      data: serializedData,
      transformResponse: fromRes
    };
    return metadata;
  }
  __login.fromReq = fromReq;
  return __login;
}
function registerV2(payload) {
  const { toJSON: toReq, fromJSON: fromReq } = serializer2(_registerV2Request, {
    _customField,
    _customValue,
    _identityProfile,
    _listValue,
    _mapValue
  });
  const { fromJSON: fromRes } = serializer2(_stateMachineResponse, {
    _customField,
    _customValue,
    _identity,
    _identityProfile,
    _listValue,
    _mapValue
  });
  function __registerV2({ host }) {
    const serializedData = toReq(payload);
    const metadata = {
      entityFqdn: "wix.iam.authentication.v1.authentication",
      method: "POST",
      methodFqn: "wix.iam.authentication.v1.AuthenticationService.RegisterV2",
      url: resolveWixIamAuthenticationV1AuthenticationServiceUrl({
        protoPath: "/v2/register",
        data: serializedData,
        host
      }),
      data: serializedData,
      transformResponse: fromRes
    };
    return metadata;
  }
  __registerV2.fromReq = fromReq;
  return __registerV2;
}
function loginV2(payload) {
  const { toJSON: toReq, fromJSON: fromReq } = serializer2(_loginV2Request, {});
  const { fromJSON: fromRes } = serializer2(_stateMachineResponse, {
    _customField,
    _customValue,
    _identity,
    _identityProfile,
    _listValue,
    _mapValue
  });
  function __loginV2({ host }) {
    const serializedData = toReq(payload);
    const metadata = {
      entityFqdn: "wix.iam.authentication.v1.authentication",
      method: "POST",
      methodFqn: "wix.iam.authentication.v1.AuthenticationService.LoginV2",
      url: resolveWixIamAuthenticationV1AuthenticationServiceUrl({
        protoPath: "/v2/login",
        data: serializedData,
        host
      }),
      data: serializedData,
      transformResponse: fromRes
    };
    return metadata;
  }
  __loginV2.fromReq = fromReq;
  return __loginV2;
}
function proceedToNextState(payload) {
  const { toJSON: toReq, fromJSON: fromReq } = serializer2(_proceedToNextStateRequest, {});
  const { fromJSON: fromRes } = serializer2(_loginResponse, {
    _customField,
    _customValue,
    _identity,
    _identityProfile,
    _listValue,
    _mapValue
  });
  function __proceedToNextState({ host }) {
    const serializedData = toReq(payload);
    const metadata = {
      entityFqdn: "wix.iam.authentication.v1.authentication",
      method: "POST",
      methodFqn: "wix.iam.authentication.v1.AuthenticationService.ProceedToNextState",
      url: resolveWixIamAuthenticationV1AuthenticationServiceUrl({
        protoPath: "/v1/state/proceed",
        data: serializedData,
        host
      }),
      data: serializedData,
      transformResponse: fromRes
    };
    return metadata;
  }
  __proceedToNextState.fromReq = fromReq;
  return __proceedToNextState;
}
function logout(payload) {
  const { toJSON: toReq, fromJSON: fromReq } = serializer2(_logoutRequest, {});
  const { fromJSON: fromRes } = serializer2(_rawHttpResponse, {});
  function __logout({ host }) {
    const serializedData = toReq(payload);
    const metadata = {
      entityFqdn: "wix.iam.authentication.v1.authentication",
      method: "GET",
      methodFqn: "wix.iam.authentication.v1.AuthenticationService.Logout",
      url: resolveWixIamAuthenticationV1AuthenticationServiceUrl({
        protoPath: "/v1/logout",
        data: serializedData,
        host
      }),
      params: toURLSearchParams(serializedData),
      transformResponse: fromRes
    };
    return metadata;
  }
  __logout.fromReq = fromReq;
  return __logout;
}

// node_modules/@wix/identity/build/es/src/iam-authentication-v1-authentication.universal.js
var __awaiter3 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __verbose2 = false;
function __log2(...args) {
  __verbose2 && console.log(...args);
}
function __inspect2(obj) {
  return obj;
}
var _toVeloEntity2 = "$";
var _fromVeloEntity2 = "$";
var PrivacyStatus;
(function(PrivacyStatus4) {
  PrivacyStatus4["UNDEFINED"] = "UNDEFINED";
  PrivacyStatus4["PUBLIC"] = "PUBLIC";
  PrivacyStatus4["PRIVATE"] = "PRIVATE";
})(PrivacyStatus || (PrivacyStatus = {}));
var StatusName;
(function(StatusName4) {
  StatusName4["UNKNOWN_STATUS"] = "UNKNOWN_STATUS";
  StatusName4["PENDING"] = "PENDING";
  StatusName4["ACTIVE"] = "ACTIVE";
  StatusName4["DELETED"] = "DELETED";
  StatusName4["BLOCKED"] = "BLOCKED";
})(StatusName || (StatusName = {}));
var Reason;
(function(Reason4) {
  Reason4["UNKNOWN_REASON"] = "UNKNOWN_REASON";
  Reason4["PENDING_ADMIN_APPROVAL_REQUIRED"] = "PENDING_ADMIN_APPROVAL_REQUIRED";
  Reason4["PENDING_EMAIL_VERIFICATION_REQUIRED"] = "PENDING_EMAIL_VERIFICATION_REQUIRED";
})(Reason || (Reason = {}));
var StateStatus;
(function(StateStatus2) {
  StateStatus2["DONE"] = "DONE";
  StateStatus2["REQUIRE_OWNER_APPROVAL"] = "REQUIRE_OWNER_APPROVAL";
  StateStatus2["STATUS_CHECK"] = "STATUS_CHECK";
})(StateStatus || (StateStatus = {}));
var StateType;
(function(StateType4) {
  StateType4["UNKNOWN_STATE"] = "UNKNOWN_STATE";
  StateType4["SUCCESS"] = "SUCCESS";
  StateType4["REQUIRE_OWNER_APPROVAL"] = "REQUIRE_OWNER_APPROVAL";
  StateType4["REQUIRE_EMAIL_VERIFICATION"] = "REQUIRE_EMAIL_VERIFICATION";
  StateType4["STATUS_CHECK"] = "STATUS_CHECK";
})(StateType || (StateType = {}));
var TenantType;
(function(TenantType3) {
  TenantType3["UNKNOWN_TENANT_TYPE"] = "UNKNOWN_TENANT_TYPE";
  TenantType3["ACCOUNT"] = "ACCOUNT";
  TenantType3["SITE"] = "SITE";
  TenantType3["ROOT"] = "ROOT";
})(TenantType || (TenantType = {}));
var _customField2 = { value: "_customValue" };
var _customValue2 = { listValue: "_listValue", mapValue: "_mapValue" };
var _identity2 = { identityProfile: "_identityProfile" };
var _identityProfile2 = { customFields: "_customField" };
var _listValue2 = { value: "_customValue" };
var _loginRequest2 = {};
var _loginResponse2 = {
  identity: "_identity",
  additionalData: "Map#_customValue"
};
var _loginV2Request2 = {};
var _logoutRequest2 = {};
var _mapValue2 = { value: "Map#_customValue" };
var _proceedToNextStateRequest2 = {};
var _rawHttpResponse2 = {};
var _registerRequest2 = { identity: "_identity" };
var _registerV2Request2 = { profile: "_identityProfile" };
var _stateMachineResponse2 = { identity: "_identity" };
function register2(identity, options) {
  var _a14, _b, _c;
  return __awaiter3(this, arguments, void 0, function* () {
    const requestTransformation = {
      identity: "$[0]",
      authenticatorId: "$[1].authenticatorId",
      inputs: "$[1].inputs",
      captchaTokens: "$[1].captchaTokens"
    };
    const responseTransformation = "$";
    const { httpClient, sideEffects } = arguments[2];
    const { toAmbassadorRequest } = serializer({
      rootSchema: _registerRequest2,
      depSchemas: {
        _customField: _customField2,
        _customValue: _customValue2,
        _identity: _identity2,
        _identityProfile: _identityProfile2,
        _listValue: _listValue2,
        _mapValue: _mapValue2
      },
      fqdnTransformation: {
        paths: [],
        transformation: _fromVeloEntity2
      },
      customTransformation: requestTransformation
    });
    const { fromJSON } = serializer({
      rootSchema: _loginResponse2,
      depSchemas: {
        _customField: _customField2,
        _customValue: _customValue2,
        _identity: _identity2,
        _identityProfile: _identityProfile2,
        _listValue: _listValue2,
        _mapValue: _mapValue2
      },
      fqdnTransformation: {
        paths: [],
        transformation: _toVeloEntity2
      },
      customTransformation: responseTransformation
    });
    const payload = toAmbassadorRequest([identity, options]);
    const reqOpts = register(payload);
    __log2(`"Register" sending request with: ${__inspect2(reqOpts)}`);
    (_a14 = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSiteCall) === null || _a14 === void 0 ? void 0 : _a14.call(sideEffects);
    try {
      const result = yield httpClient.request(reqOpts);
      (_b = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSuccess) === null || _b === void 0 ? void 0 : _b.call(sideEffects, result);
      return fromJSON(result.data);
    } catch (err) {
      const transformedError = transformError2(err, requestTransformation, [
        "identity",
        "options"
      ]);
      (_c = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onError) === null || _c === void 0 ? void 0 : _c.call(sideEffects, err);
      throw transformedError;
    }
  });
}
function login2(identifier, options) {
  var _a14, _b, _c;
  return __awaiter3(this, arguments, void 0, function* () {
    const requestTransformation = {
      identifier: "$[0]",
      authenticatorId: "$[1].authenticatorId",
      inputs: "$[1].inputs",
      captchaTokens: "$[1].captchaTokens"
    };
    const responseTransformation = "$";
    const { httpClient, sideEffects } = arguments[2];
    const { toAmbassadorRequest } = serializer({
      rootSchema: _loginRequest2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [],
        transformation: _fromVeloEntity2
      },
      customTransformation: requestTransformation
    });
    const { fromJSON } = serializer({
      rootSchema: _loginResponse2,
      depSchemas: {
        _customField: _customField2,
        _customValue: _customValue2,
        _identity: _identity2,
        _identityProfile: _identityProfile2,
        _listValue: _listValue2,
        _mapValue: _mapValue2
      },
      fqdnTransformation: {
        paths: [],
        transformation: _toVeloEntity2
      },
      customTransformation: responseTransformation
    });
    const payload = toAmbassadorRequest([identifier, options]);
    const reqOpts = login(payload);
    __log2(`"Login" sending request with: ${__inspect2(reqOpts)}`);
    (_a14 = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSiteCall) === null || _a14 === void 0 ? void 0 : _a14.call(sideEffects);
    try {
      const result = yield httpClient.request(reqOpts);
      (_b = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSuccess) === null || _b === void 0 ? void 0 : _b.call(sideEffects, result);
      return fromJSON(result.data);
    } catch (err) {
      const transformedError = transformError2(err, requestTransformation, [
        "identifier",
        "options"
      ]);
      (_c = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onError) === null || _c === void 0 ? void 0 : _c.call(sideEffects, err);
      throw transformedError;
    }
  });
}
function registerV22(loginId, options) {
  var _a14, _b, _c;
  return __awaiter3(this, arguments, void 0, function* () {
    const requestTransformation = {
      loginId: "$[0]",
      password: "$[1].password",
      profile: "$[1].profile",
      captchaTokens: "$[1].captchaTokens"
    };
    const responseTransformation = "$";
    const { httpClient, sideEffects } = arguments[2];
    const { toAmbassadorRequest } = serializer({
      rootSchema: _registerV2Request2,
      depSchemas: {
        _customField: _customField2,
        _customValue: _customValue2,
        _identityProfile: _identityProfile2,
        _listValue: _listValue2,
        _mapValue: _mapValue2
      },
      fqdnTransformation: {
        paths: [],
        transformation: _fromVeloEntity2
      },
      customTransformation: requestTransformation
    });
    const { fromJSON } = serializer({
      rootSchema: _stateMachineResponse2,
      depSchemas: {
        _customField: _customField2,
        _customValue: _customValue2,
        _identity: _identity2,
        _identityProfile: _identityProfile2,
        _listValue: _listValue2,
        _mapValue: _mapValue2
      },
      fqdnTransformation: {
        paths: [],
        transformation: _toVeloEntity2
      },
      customTransformation: responseTransformation
    });
    const payload = toAmbassadorRequest([loginId, options]);
    const reqOpts = registerV2(payload);
    __log2(`"RegisterV2" sending request with: ${__inspect2(reqOpts)}`);
    (_a14 = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSiteCall) === null || _a14 === void 0 ? void 0 : _a14.call(sideEffects);
    try {
      const result = yield httpClient.request(reqOpts);
      (_b = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSuccess) === null || _b === void 0 ? void 0 : _b.call(sideEffects, result);
      return fromJSON(result.data);
    } catch (err) {
      const transformedError = transformError2(err, requestTransformation, [
        "loginId",
        "options"
      ]);
      (_c = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onError) === null || _c === void 0 ? void 0 : _c.call(sideEffects, err);
      throw transformedError;
    }
  });
}
function loginV22(loginId, options) {
  var _a14, _b, _c;
  return __awaiter3(this, arguments, void 0, function* () {
    const requestTransformation = {
      loginId: "$[0]",
      password: "$[1].password",
      captchaTokens: "$[1].captchaTokens"
    };
    const responseTransformation = "$";
    const { httpClient, sideEffects } = arguments[2];
    const { toAmbassadorRequest } = serializer({
      rootSchema: _loginV2Request2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [],
        transformation: _fromVeloEntity2
      },
      customTransformation: requestTransformation
    });
    const { fromJSON } = serializer({
      rootSchema: _stateMachineResponse2,
      depSchemas: {
        _customField: _customField2,
        _customValue: _customValue2,
        _identity: _identity2,
        _identityProfile: _identityProfile2,
        _listValue: _listValue2,
        _mapValue: _mapValue2
      },
      fqdnTransformation: {
        paths: [],
        transformation: _toVeloEntity2
      },
      customTransformation: responseTransformation
    });
    const payload = toAmbassadorRequest([loginId, options]);
    const reqOpts = loginV2(payload);
    __log2(`"LoginV2" sending request with: ${__inspect2(reqOpts)}`);
    (_a14 = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSiteCall) === null || _a14 === void 0 ? void 0 : _a14.call(sideEffects);
    try {
      const result = yield httpClient.request(reqOpts);
      (_b = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSuccess) === null || _b === void 0 ? void 0 : _b.call(sideEffects, result);
      return fromJSON(result.data);
    } catch (err) {
      const transformedError = transformError2(err, requestTransformation, [
        "loginId",
        "options"
      ]);
      (_c = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onError) === null || _c === void 0 ? void 0 : _c.call(sideEffects, err);
      throw transformedError;
    }
  });
}
function proceedToNextState2(options) {
  var _a14, _b, _c;
  return __awaiter3(this, arguments, void 0, function* () {
    const requestTransformation = { stateToken: "$[0].stateToken" };
    const responseTransformation = "$";
    const { httpClient, sideEffects } = arguments[1];
    const { toAmbassadorRequest } = serializer({
      rootSchema: _proceedToNextStateRequest2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [],
        transformation: _fromVeloEntity2
      },
      customTransformation: requestTransformation
    });
    const { fromJSON } = serializer({
      rootSchema: _loginResponse2,
      depSchemas: {
        _customField: _customField2,
        _customValue: _customValue2,
        _identity: _identity2,
        _identityProfile: _identityProfile2,
        _listValue: _listValue2,
        _mapValue: _mapValue2
      },
      fqdnTransformation: {
        paths: [],
        transformation: _toVeloEntity2
      },
      customTransformation: responseTransformation
    });
    const payload = toAmbassadorRequest([options]);
    const reqOpts = proceedToNextState(payload);
    __log2(`"ProceedToNextState" sending request with: ${__inspect2(reqOpts)}`);
    (_a14 = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSiteCall) === null || _a14 === void 0 ? void 0 : _a14.call(sideEffects);
    try {
      const result = yield httpClient.request(reqOpts);
      (_b = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSuccess) === null || _b === void 0 ? void 0 : _b.call(sideEffects, result);
      return fromJSON(result.data);
    } catch (err) {
      const transformedError = transformError2(err, requestTransformation, [
        "options"
      ]);
      (_c = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onError) === null || _c === void 0 ? void 0 : _c.call(sideEffects, err);
      throw transformedError;
    }
  });
}
function logout2(options) {
  var _a14, _b, _c;
  return __awaiter3(this, arguments, void 0, function* () {
    const requestTransformation = {
      postLogoutRedirectUri: "$[0].postLogoutRedirectUri",
      clientId: "$[0].clientId"
    };
    const responseTransformation = "$";
    const { httpClient, sideEffects } = arguments[1];
    const { toAmbassadorRequest } = serializer({
      rootSchema: _logoutRequest2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [],
        transformation: _fromVeloEntity2
      },
      customTransformation: requestTransformation
    });
    const { fromJSON } = serializer({
      rootSchema: _rawHttpResponse2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [],
        transformation: _toVeloEntity2
      },
      customTransformation: responseTransformation
    });
    const payload = toAmbassadorRequest([options]);
    const reqOpts = logout(payload);
    __log2(`"Logout" sending request with: ${__inspect2(reqOpts)}`);
    (_a14 = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSiteCall) === null || _a14 === void 0 ? void 0 : _a14.call(sideEffects);
    try {
      const result = yield httpClient.request(reqOpts);
      (_b = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSuccess) === null || _b === void 0 ? void 0 : _b.call(sideEffects, result);
      return fromJSON(result.data);
    } catch (err) {
      const transformedError = transformError2(err, requestTransformation, [
        "options"
      ]);
      (_c = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onError) === null || _c === void 0 ? void 0 : _c.call(sideEffects, err);
      throw transformedError;
    }
  });
}

// node_modules/@wix/identity/build/es/src/iam-authentication-v1-authentication.public.js
var __metadata2 = { PACKAGE_NAME: "@wix/identity" };
function register3(httpClient) {
  return (identity, options) => register2(
    identity,
    options,
    // @ts-ignore
    { httpClient }
  );
}
function login3(httpClient) {
  return (identifier, options) => login2(
    identifier,
    options,
    // @ts-ignore
    { httpClient }
  );
}
function registerV23(httpClient) {
  return (loginId, options) => registerV22(
    loginId,
    options,
    // @ts-ignore
    { httpClient }
  );
}
function loginV23(httpClient) {
  return (loginId, options) => loginV22(
    loginId,
    options,
    // @ts-ignore
    { httpClient }
  );
}
function proceedToNextState3(httpClient) {
  return (options) => proceedToNextState2(
    options,
    // @ts-ignore
    { httpClient }
  );
}
function logout3(httpClient) {
  return (options) => logout2(
    options,
    // @ts-ignore
    { httpClient }
  );
}

// node_modules/@wix/identity/build/es/src/iam-recovery-v1-recovery.public.js
var iam_recovery_v1_recovery_public_exports = {};
__export(iam_recovery_v1_recovery_public_exports, {
  PrivacyStatus: () => PrivacyStatus2,
  Reason: () => Reason2,
  StateType: () => StateType2,
  StatusName: () => StatusName2,
  TenantType: () => TenantType2,
  __metadata: () => __metadata3,
  recover: () => recover3,
  sendRecoveryEmail: () => sendRecoveryEmail3
});

// node_modules/@wix/identity/build/es/src/iam-recovery-v1-recovery.http.js
var _customField3 = { value: "_customValue" };
var _customValue3 = {
  numValue: "DOUBLE",
  dateValue: "google.protobuf.Timestamp",
  listValue: "_listValue",
  mapValue: "_mapValue"
};
var _identity3 = {
  createdDate: "google.protobuf.Timestamp",
  updatedDate: "google.protobuf.Timestamp",
  identityProfile: "_identityProfile"
};
var _identityProfile3 = { customFields: "_customField" };
var _listValue3 = { value: "_customValue" };
var _mapValue3 = { value: "Map#_customValue" };
var _recoverRequest = {};
var _sendRecoveryEmailRequest = {};
var _sendRecoveryEmailResponse = {};
var _stateMachineResponse3 = { identity: "_identity" };
function resolveWixIamRecoveryV1RecoveryServiceUrl(opts) {
  const domainToMappings = {
    _: [
      {
        srcPath: "/_iam/recovery",
        destPath: ""
      },
      {
        srcPath: "/_api/iam/recovery",
        destPath: ""
      }
    ],
    "www.wixapis.com": [
      {
        srcPath: "/_api/iam/recovery",
        destPath: ""
      }
    ]
  };
  return resolveUrl(Object.assign(opts, { domainToMappings }));
}
function sendRecoveryEmail(payload) {
  const { toJSON: toReq, fromJSON: fromReq } = serializer2(_sendRecoveryEmailRequest, {});
  const { fromJSON: fromRes } = serializer2(_sendRecoveryEmailResponse, {});
  function __sendRecoveryEmail({ host }) {
    const serializedData = toReq(payload);
    const metadata = {
      entityFqdn: "wix.iam.recovery.v1.recovery",
      method: "POST",
      methodFqn: "wix.iam.recovery.v1.RecoveryService.SendRecoveryEmail",
      url: resolveWixIamRecoveryV1RecoveryServiceUrl({
        protoPath: "/v1/send-email",
        data: serializedData,
        host
      }),
      data: serializedData,
      transformResponse: fromRes
    };
    return metadata;
  }
  __sendRecoveryEmail.fromReq = fromReq;
  return __sendRecoveryEmail;
}
function recover(payload) {
  const { toJSON: toReq, fromJSON: fromReq } = serializer2(_recoverRequest, {});
  const { fromJSON: fromRes } = serializer2(_stateMachineResponse3, {
    _customField: _customField3,
    _customValue: _customValue3,
    _identity: _identity3,
    _identityProfile: _identityProfile3,
    _listValue: _listValue3,
    _mapValue: _mapValue3
  });
  function __recover({ host }) {
    const serializedData = toReq(payload);
    const metadata = {
      entityFqdn: "wix.iam.recovery.v1.recovery",
      method: "POST",
      methodFqn: "wix.iam.recovery.v1.RecoveryService.Recover",
      url: resolveWixIamRecoveryV1RecoveryServiceUrl({
        protoPath: "/v1/recover",
        data: serializedData,
        host
      }),
      data: serializedData,
      transformResponse: fromRes
    };
    return metadata;
  }
  __recover.fromReq = fromReq;
  return __recover;
}

// node_modules/@wix/identity/build/es/src/iam-recovery-v1-recovery.universal.js
var __awaiter4 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __verbose3 = false;
function __log3(...args) {
  __verbose3 && console.log(...args);
}
function __inspect3(obj) {
  return obj;
}
var _toVeloEntity3 = "$";
var _fromVeloEntity3 = "$";
var TenantType2;
(function(TenantType3) {
  TenantType3["UNKNOWN_TENANT_TYPE"] = "UNKNOWN_TENANT_TYPE";
  TenantType3["ACCOUNT"] = "ACCOUNT";
  TenantType3["SITE"] = "SITE";
  TenantType3["ROOT"] = "ROOT";
})(TenantType2 || (TenantType2 = {}));
var StateType2;
(function(StateType4) {
  StateType4["UNKNOWN_STATE"] = "UNKNOWN_STATE";
  StateType4["SUCCESS"] = "SUCCESS";
  StateType4["REQUIRE_OWNER_APPROVAL"] = "REQUIRE_OWNER_APPROVAL";
  StateType4["REQUIRE_EMAIL_VERIFICATION"] = "REQUIRE_EMAIL_VERIFICATION";
  StateType4["STATUS_CHECK"] = "STATUS_CHECK";
})(StateType2 || (StateType2 = {}));
var PrivacyStatus2;
(function(PrivacyStatus4) {
  PrivacyStatus4["UNDEFINED"] = "UNDEFINED";
  PrivacyStatus4["PUBLIC"] = "PUBLIC";
  PrivacyStatus4["PRIVATE"] = "PRIVATE";
})(PrivacyStatus2 || (PrivacyStatus2 = {}));
var StatusName2;
(function(StatusName4) {
  StatusName4["UNKNOWN_STATUS"] = "UNKNOWN_STATUS";
  StatusName4["PENDING"] = "PENDING";
  StatusName4["ACTIVE"] = "ACTIVE";
  StatusName4["DELETED"] = "DELETED";
  StatusName4["BLOCKED"] = "BLOCKED";
})(StatusName2 || (StatusName2 = {}));
var Reason2;
(function(Reason4) {
  Reason4["UNKNOWN_REASON"] = "UNKNOWN_REASON";
  Reason4["PENDING_ADMIN_APPROVAL_REQUIRED"] = "PENDING_ADMIN_APPROVAL_REQUIRED";
  Reason4["PENDING_EMAIL_VERIFICATION_REQUIRED"] = "PENDING_EMAIL_VERIFICATION_REQUIRED";
})(Reason2 || (Reason2 = {}));
var _customField4 = { value: "_customValue" };
var _customValue4 = { listValue: "_listValue", mapValue: "_mapValue" };
var _identity4 = { identityProfile: "_identityProfile" };
var _identityProfile4 = { customFields: "_customField" };
var _listValue4 = { value: "_customValue" };
var _mapValue4 = { value: "Map#_customValue" };
var _recoverRequest2 = {};
var _sendRecoveryEmailRequest2 = {};
var _sendRecoveryEmailResponse2 = {};
var _stateMachineResponse4 = { identity: "_identity" };
function sendRecoveryEmail2(email, options) {
  var _a14, _b, _c;
  return __awaiter4(this, arguments, void 0, function* () {
    const requestTransformation = {
      email: "$[0]",
      language: "$[1].language",
      redirect: "$[1].redirect"
    };
    const responseTransformation = "$";
    const { httpClient, sideEffects } = arguments[2];
    const { toAmbassadorRequest } = serializer({
      rootSchema: _sendRecoveryEmailRequest2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [],
        transformation: _fromVeloEntity3
      },
      customTransformation: requestTransformation
    });
    const { fromJSON } = serializer({
      rootSchema: _sendRecoveryEmailResponse2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [],
        transformation: _toVeloEntity3
      },
      customTransformation: responseTransformation
    });
    const payload = toAmbassadorRequest([email, options]);
    const reqOpts = sendRecoveryEmail(payload);
    __log3(`"SendRecoveryEmail" sending request with: ${__inspect3(reqOpts)}`);
    (_a14 = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSiteCall) === null || _a14 === void 0 ? void 0 : _a14.call(sideEffects);
    try {
      const result = yield httpClient.request(reqOpts);
      (_b = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSuccess) === null || _b === void 0 ? void 0 : _b.call(sideEffects, result);
      return fromJSON(result.data);
    } catch (err) {
      const transformedError = transformError2(err, requestTransformation, [
        "email",
        "options"
      ]);
      (_c = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onError) === null || _c === void 0 ? void 0 : _c.call(sideEffects, err);
      throw transformedError;
    }
  });
}
function recover2(recoveryToken, options) {
  var _a14, _b, _c;
  return __awaiter4(this, arguments, void 0, function* () {
    const requestTransformation = {
      recoveryToken: "$[0]",
      password: "$[1].password"
    };
    const responseTransformation = "$";
    const { httpClient, sideEffects } = arguments[2];
    const { toAmbassadorRequest } = serializer({
      rootSchema: _recoverRequest2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [],
        transformation: _fromVeloEntity3
      },
      customTransformation: requestTransformation
    });
    const { fromJSON } = serializer({
      rootSchema: _stateMachineResponse4,
      depSchemas: {
        _customField: _customField4,
        _customValue: _customValue4,
        _identity: _identity4,
        _identityProfile: _identityProfile4,
        _listValue: _listValue4,
        _mapValue: _mapValue4
      },
      fqdnTransformation: {
        paths: [],
        transformation: _toVeloEntity3
      },
      customTransformation: responseTransformation
    });
    const payload = toAmbassadorRequest([recoveryToken, options]);
    const reqOpts = recover(payload);
    __log3(`"Recover" sending request with: ${__inspect3(reqOpts)}`);
    (_a14 = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSiteCall) === null || _a14 === void 0 ? void 0 : _a14.call(sideEffects);
    try {
      const result = yield httpClient.request(reqOpts);
      (_b = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSuccess) === null || _b === void 0 ? void 0 : _b.call(sideEffects, result);
      return fromJSON(result.data);
    } catch (err) {
      const transformedError = transformError2(err, requestTransformation, [
        "recoveryToken",
        "options"
      ]);
      (_c = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onError) === null || _c === void 0 ? void 0 : _c.call(sideEffects, err);
      throw transformedError;
    }
  });
}

// node_modules/@wix/identity/build/es/src/iam-recovery-v1-recovery.public.js
var __metadata3 = { PACKAGE_NAME: "@wix/identity" };
function sendRecoveryEmail3(httpClient) {
  return (email, options) => sendRecoveryEmail2(
    email,
    options,
    // @ts-ignore
    { httpClient }
  );
}
function recover3(httpClient) {
  return (recoveryToken, options) => recover2(
    recoveryToken,
    options,
    // @ts-ignore
    { httpClient }
  );
}

// node_modules/@wix/identity/build/es/src/iam-verification-v1-start-response.public.js
var iam_verification_v1_start_response_public_exports = {};
__export(iam_verification_v1_start_response_public_exports, {
  PrivacyStatus: () => PrivacyStatus3,
  Reason: () => Reason3,
  StateType: () => StateType3,
  StatusName: () => StatusName3,
  Target: () => Target,
  __metadata: () => __metadata4,
  start: () => start3,
  verifyDuringAuthentication: () => verifyDuringAuthentication3
});

// node_modules/@wix/identity/build/es/src/iam-verification-v1-start-response.http.js
var _customField5 = { value: "_customValue" };
var _customValue5 = {
  numValue: "DOUBLE",
  dateValue: "google.protobuf.Timestamp",
  listValue: "_listValue",
  mapValue: "_mapValue"
};
var _identity5 = {
  createdDate: "google.protobuf.Timestamp",
  updatedDate: "google.protobuf.Timestamp",
  identityProfile: "_identityProfile"
};
var _identityProfile5 = { customFields: "_customField" };
var _listValue5 = { value: "_customValue" };
var _mapValue5 = { value: "Map#_customValue" };
var _startRequest = {};
var _startResponse = {};
var _stateMachineResponse5 = { identity: "_identity" };
var _verifyDuringAuthenticationRequest = {};
function resolveWixIamVerificationV1VerificationServiceUrl(opts) {
  const domainToMappings = {
    "www.wixapis.com": [
      {
        srcPath: "/_api/iam/verification",
        destPath: ""
      }
    ],
    _: [
      {
        srcPath: "/_api/iam/verification",
        destPath: ""
      }
    ]
  };
  return resolveUrl(Object.assign(opts, { domainToMappings }));
}
function start(payload) {
  const { toJSON: toReq, fromJSON: fromReq } = serializer2(_startRequest, {});
  const { fromJSON: fromRes } = serializer2(_startResponse, {});
  function __start({ host }) {
    const serializedData = toReq(payload);
    const metadata = {
      entityFqdn: "wix.iam.verification.v1.start_response",
      method: "POST",
      methodFqn: "wix.iam.verification.v1.VerificationService.Start",
      url: resolveWixIamVerificationV1VerificationServiceUrl({
        protoPath: "/v1/Start",
        data: serializedData,
        host
      }),
      data: serializedData,
      transformResponse: fromRes
    };
    return metadata;
  }
  __start.fromReq = fromReq;
  return __start;
}
function verifyDuringAuthentication(payload) {
  const { toJSON: toReq, fromJSON: fromReq } = serializer2(_verifyDuringAuthenticationRequest, {});
  const { fromJSON: fromRes } = serializer2(_stateMachineResponse5, {
    _customField: _customField5,
    _customValue: _customValue5,
    _identity: _identity5,
    _identityProfile: _identityProfile5,
    _listValue: _listValue5,
    _mapValue: _mapValue5
  });
  function __verifyDuringAuthentication({ host }) {
    const serializedData = toReq(payload);
    const metadata = {
      entityFqdn: "wix.iam.verification.v1.start_response",
      method: "POST",
      methodFqn: "wix.iam.verification.v1.VerificationService.VerifyDuringAuthentication",
      url: resolveWixIamVerificationV1VerificationServiceUrl({
        protoPath: "/v1/auth/verify",
        data: serializedData,
        host
      }),
      data: serializedData,
      transformResponse: fromRes
    };
    return metadata;
  }
  __verifyDuringAuthentication.fromReq = fromReq;
  return __verifyDuringAuthentication;
}

// node_modules/@wix/identity/build/es/src/iam-verification-v1-start-response.universal.js
var __awaiter5 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __verbose4 = false;
function __log4(...args) {
  __verbose4 && console.log(...args);
}
function __inspect4(obj) {
  return obj;
}
var _toVeloEntity4 = "$";
var _fromVeloEntity4 = "$";
var Target;
(function(Target2) {
  Target2["UNKNOWN_TARGET"] = "UNKNOWN_TARGET";
  Target2["EMAIL"] = "EMAIL";
})(Target || (Target = {}));
var StateType3;
(function(StateType4) {
  StateType4["UNKNOWN_STATE"] = "UNKNOWN_STATE";
  StateType4["SUCCESS"] = "SUCCESS";
  StateType4["REQUIRE_OWNER_APPROVAL"] = "REQUIRE_OWNER_APPROVAL";
  StateType4["REQUIRE_EMAIL_VERIFICATION"] = "REQUIRE_EMAIL_VERIFICATION";
  StateType4["STATUS_CHECK"] = "STATUS_CHECK";
})(StateType3 || (StateType3 = {}));
var PrivacyStatus3;
(function(PrivacyStatus4) {
  PrivacyStatus4["UNDEFINED"] = "UNDEFINED";
  PrivacyStatus4["PUBLIC"] = "PUBLIC";
  PrivacyStatus4["PRIVATE"] = "PRIVATE";
})(PrivacyStatus3 || (PrivacyStatus3 = {}));
var StatusName3;
(function(StatusName4) {
  StatusName4["UNKNOWN_STATUS"] = "UNKNOWN_STATUS";
  StatusName4["PENDING"] = "PENDING";
  StatusName4["ACTIVE"] = "ACTIVE";
  StatusName4["DELETED"] = "DELETED";
  StatusName4["BLOCKED"] = "BLOCKED";
})(StatusName3 || (StatusName3 = {}));
var Reason3;
(function(Reason4) {
  Reason4["UNKNOWN_REASON"] = "UNKNOWN_REASON";
  Reason4["PENDING_ADMIN_APPROVAL_REQUIRED"] = "PENDING_ADMIN_APPROVAL_REQUIRED";
  Reason4["PENDING_EMAIL_VERIFICATION_REQUIRED"] = "PENDING_EMAIL_VERIFICATION_REQUIRED";
})(Reason3 || (Reason3 = {}));
var _customField6 = { value: "_customValue" };
var _customValue6 = { listValue: "_listValue", mapValue: "_mapValue" };
var _identity6 = { identityProfile: "_identityProfile" };
var _identityProfile6 = { customFields: "_customField" };
var _listValue6 = { value: "_customValue" };
var _mapValue6 = { value: "Map#_customValue" };
var _startRequest2 = {};
var _startResponse2 = {};
var _stateMachineResponse6 = { identity: "_identity" };
var _verifyDuringAuthenticationRequest2 = {};
function start2(options) {
  var _a14, _b, _c;
  return __awaiter5(this, arguments, void 0, function* () {
    const requestTransformation = {
      identityId: "$[0].identityId",
      target: "$[0].target"
    };
    const responseTransformation = "$";
    const { httpClient, sideEffects } = arguments[1];
    const { toAmbassadorRequest } = serializer({
      rootSchema: _startRequest2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [],
        transformation: _fromVeloEntity4
      },
      customTransformation: requestTransformation
    });
    const { fromJSON } = serializer({
      rootSchema: _startResponse2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [RootPath],
        transformation: _toVeloEntity4
      },
      customTransformation: responseTransformation
    });
    const payload = toAmbassadorRequest([options]);
    const reqOpts = start(payload);
    __log4(`"Start" sending request with: ${__inspect4(reqOpts)}`);
    (_a14 = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSiteCall) === null || _a14 === void 0 ? void 0 : _a14.call(sideEffects);
    try {
      const result = yield httpClient.request(reqOpts);
      (_b = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSuccess) === null || _b === void 0 ? void 0 : _b.call(sideEffects, result);
      return fromJSON(result.data);
    } catch (err) {
      const transformedError = transformError2(err, requestTransformation, [
        "options"
      ]);
      (_c = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onError) === null || _c === void 0 ? void 0 : _c.call(sideEffects, err);
      throw transformedError;
    }
  });
}
function verifyDuringAuthentication2(code, options) {
  var _a14, _b, _c;
  return __awaiter5(this, arguments, void 0, function* () {
    const requestTransformation = { code: "$[0]", stateToken: "$[1].stateToken" };
    const responseTransformation = "$";
    const { httpClient, sideEffects } = arguments[2];
    const { toAmbassadorRequest } = serializer({
      rootSchema: _verifyDuringAuthenticationRequest2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [],
        transformation: _fromVeloEntity4
      },
      customTransformation: requestTransformation
    });
    const { fromJSON } = serializer({
      rootSchema: _stateMachineResponse6,
      depSchemas: {
        _customField: _customField6,
        _customValue: _customValue6,
        _identity: _identity6,
        _identityProfile: _identityProfile6,
        _listValue: _listValue6,
        _mapValue: _mapValue6
      },
      fqdnTransformation: {
        paths: [],
        transformation: _toVeloEntity4
      },
      customTransformation: responseTransformation
    });
    const payload = toAmbassadorRequest([code, options]);
    const reqOpts = verifyDuringAuthentication(payload);
    __log4(`"VerifyDuringAuthentication" sending request with: ${__inspect4(reqOpts)}`);
    (_a14 = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSiteCall) === null || _a14 === void 0 ? void 0 : _a14.call(sideEffects);
    try {
      const result = yield httpClient.request(reqOpts);
      (_b = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSuccess) === null || _b === void 0 ? void 0 : _b.call(sideEffects, result);
      return fromJSON(result.data);
    } catch (err) {
      const transformedError = transformError2(err, requestTransformation, [
        "code",
        "options"
      ]);
      (_c = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onError) === null || _c === void 0 ? void 0 : _c.call(sideEffects, err);
      throw transformedError;
    }
  });
}

// node_modules/@wix/identity/build/es/src/iam-verification-v1-start-response.public.js
var __metadata4 = { PACKAGE_NAME: "@wix/identity" };
function start3(httpClient) {
  return (options) => start2(
    options,
    // @ts-ignore
    { httpClient }
  );
}
function verifyDuringAuthentication3(httpClient) {
  return (code, options) => verifyDuringAuthentication2(
    code,
    options,
    // @ts-ignore
    { httpClient }
  );
}

// node_modules/@wix/api-client/dist/esm/auth/oauth2/types.js
var TokenRole = /* @__PURE__ */ function(TokenRole2) {
  TokenRole2["NONE"] = "none";
  TokenRole2["VISITOR"] = "visitor";
  TokenRole2["MEMBER"] = "member";
  return TokenRole2;
}({});

// node_modules/@wix/api-client/dist/esm/iframeUtils.js
function addListener(eventTarget, name, fn) {
  if (eventTarget.addEventListener) {
    eventTarget.addEventListener(name, fn);
  } else {
    eventTarget.attachEvent("on" + name, fn);
  }
}
function removeListener(eventTarget, name, fn) {
  if (eventTarget.removeEventListener) {
    eventTarget.removeEventListener(name, fn);
  } else {
    eventTarget.detachEvent("on" + name, fn);
  }
}
function loadFrame(src) {
  const iframe = document.createElement("iframe");
  iframe.style.display = "none";
  iframe.src = src;
  return document.body.appendChild(iframe);
}
function addPostMessageListener(state) {
  let responseHandler;
  let timeoutId;
  const msgReceivedOrTimeout = new Promise((resolve, reject) => {
    responseHandler = (e) => {
      if (!e.data || e.data.state !== state) {
        return;
      }
      resolve(e.data);
    };
    addListener(window, "message", responseHandler);
    timeoutId = setTimeout(() => {
      reject(new Error("OAuth flow timed out"));
    }, 12e4);
  });
  return msgReceivedOrTimeout.finally(() => {
    clearTimeout(timeoutId);
    removeListener(window, "message", responseHandler);
  });
}

// node_modules/@wix/api-client/dist/esm/auth/oauth2/constants.js
var MISSING_CAPTCHA = "-19971";
var INVALID_CAPTCHA = "-19970";
var EMAIL_EXISTS = "-19995";
var INVALID_PASSWORD = "-19976";
var RESET_PASSWORD = "-19973";

// node_modules/@wix/api-client/dist/esm/auth/oauth2/OAuthStrategy.js
var moduleWithTokens = {
  redirects: headless_v1_redirect_session_public_exports,
  authentication: iam_authentication_v1_authentication_public_exports,
  recovery: iam_recovery_v1_recovery_public_exports,
  verification: iam_verification_v1_start_response_public_exports
};
var WIX_RECAPTCHA_ID = "6LdoPaUfAAAAAJphvHoUoOob7mx0KDlXyXlgrx5v";
function OAuthStrategy(config) {
  const _tokens = config.tokens || {
    accessToken: {
      value: "",
      expiresAt: 0
    },
    refreshToken: {
      value: "",
      role: TokenRole.NONE
    }
  };
  const setTokens = (tokens) => {
    _tokens.accessToken = tokens.accessToken;
    _tokens.refreshToken = tokens.refreshToken;
  };
  let _state = {
    stateKind: "initial"
  };
  const getAuthHeaders = async () => {
    var _tokens$accessToken;
    if (!((_tokens$accessToken = _tokens.accessToken) != null && _tokens$accessToken.value) || isTokenExpired(_tokens.accessToken)) {
      const tokens = await generateVisitorTokens({
        refreshToken: _tokens.refreshToken
      });
      setTokens(tokens);
    }
    return Promise.resolve({
      headers: {
        Authorization: _tokens.accessToken.value
      }
    });
  };
  const wixClientWithTokens = createClient({
    modules: moduleWithTokens,
    auth: {
      getAuthHeaders
    }
  });
  const generateVisitorTokens = async (tokens) => {
    var _tokens$accessToken2, _tokens$refreshToken, _tokens$refreshToken2;
    if (tokens != null && (_tokens$accessToken2 = tokens.accessToken) != null && _tokens$accessToken2.value && tokens != null && (_tokens$refreshToken = tokens.refreshToken) != null && _tokens$refreshToken.value && !isTokenExpired(tokens.accessToken)) {
      return tokens;
    }
    if (tokens != null && (_tokens$refreshToken2 = tokens.refreshToken) != null && _tokens$refreshToken2.value) {
      try {
        const newTokens = await renewToken(tokens.refreshToken);
        return newTokens;
      } catch (e) {
      }
    }
    const tokensResponse = await fetchTokens({
      clientId: config.clientId,
      grantType: "anonymous"
    });
    return {
      accessToken: createAccessToken(tokensResponse.access_token, tokensResponse.expires_in),
      refreshToken: {
        value: tokensResponse.refresh_token,
        role: TokenRole.VISITOR
      }
    };
  };
  const renewToken = async (refreshToken) => {
    const tokensResponse = await fetchTokens({
      refreshToken: refreshToken.value,
      grantType: "refresh_token"
    });
    const accessToken = createAccessToken(tokensResponse.access_token, tokensResponse.expires_in);
    return {
      accessToken,
      refreshToken
    };
  };
  const generatePKCE = () => {
    const pkceState = $d415641d0cfd8c85$export$2e2bcd8739ae039();
    return {
      codeChallenge: pkceState.code_challenge,
      codeVerifier: pkceState.code_verifier,
      state: $d415641d0cfd8c85$export$2e2bcd8739ae039().code_challenge
    };
  };
  const generateOAuthData = (redirectUri, originalUri) => {
    const state = {
      redirectUri
    };
    const pkceState = generatePKCE();
    return {
      ...state,
      originalUri: originalUri != null ? originalUri : "",
      codeChallenge: pkceState.codeChallenge,
      codeVerifier: pkceState.codeVerifier,
      state: $d415641d0cfd8c85$export$2e2bcd8739ae039().code_challenge
    };
  };
  const getAuthorizationUrlWithOptions = async (oauthData, responseMode, sessionToken) => {
    const {
      redirectSession
    } = await wixClientWithTokens.redirects.createRedirectSession({
      auth: {
        authRequest: {
          redirectUri: oauthData.redirectUri,
          ...oauthData.redirectUri && {
            redirectUri: oauthData.redirectUri
          },
          clientId: config.clientId,
          codeChallenge: oauthData.codeChallenge,
          codeChallengeMethod: "S256",
          responseMode,
          responseType: "code",
          scope: "offline_access",
          state: oauthData.state,
          ...sessionToken && {
            sessionToken
          }
        }
      }
    });
    return {
      authUrl: redirectSession.fullUrl
    };
  };
  const getAuthUrl = async (oauthData) => {
    return getAuthorizationUrlWithOptions(oauthData, "fragment");
  };
  const parseFromUrl = () => {
    const params = new URLSearchParams(window.location.hash.substring(1));
    const code = params.get("code");
    const state = params.get("state");
    const error = params.get("error");
    const errorDescription = params.get("error_description");
    return {
      code,
      state,
      ...error && {
        error,
        errorDescription
      }
    };
  };
  const getMemberTokens = async (code, state, oauthData) => {
    if (!code || !state) {
      throw new Error("Missing code or _state");
    } else if (state !== oauthData.state) {
      throw new Error("Invalid _state");
    }
    try {
      const tokensResponse = await fetchTokens({
        clientId: config.clientId,
        grantType: "authorization_code",
        ...oauthData.redirectUri && {
          redirectUri: oauthData.redirectUri
        },
        code,
        codeVerifier: oauthData.codeVerifier
      });
      return {
        accessToken: createAccessToken(tokensResponse.access_token, tokensResponse.expires_in),
        refreshToken: {
          value: tokensResponse.refresh_token,
          role: TokenRole.MEMBER
        }
      };
    } catch (e) {
      throw new Error("Failed to get member tokens");
    }
  };
  const logout4 = async (originalUrl) => {
    const {
      redirectSession
    } = await wixClientWithTokens.redirects.createRedirectSession({
      logout: {
        clientId: config.clientId
      },
      callbacks: {
        postFlowUrl: originalUrl
      }
    });
    _tokens.accessToken = {
      value: "",
      expiresAt: 0
    };
    _tokens.refreshToken = {
      value: "",
      role: TokenRole.NONE
    };
    return {
      logoutUrl: redirectSession.fullUrl
    };
  };
  const handleState = (response) => {
    if (response.state === iam_authentication_v1_authentication_public_exports.StateType.SUCCESS) {
      return {
        stateKind: "success",
        data: {
          sessionToken: response.sessionToken
        }
      };
    } else if (response.state === iam_authentication_v1_authentication_public_exports.StateType.REQUIRE_OWNER_APPROVAL) {
      return {
        stateKind: "ownerApprovalRequired"
      };
    } else if (response.state === iam_authentication_v1_authentication_public_exports.StateType.REQUIRE_EMAIL_VERIFICATION) {
      _state = {
        stateKind: "emailVerificationRequired",
        data: {
          stateToken: response.stateToken
        }
      };
      return _state;
    }
    return {
      stateKind: "failure",
      error: "Unknown _state"
    };
  };
  const register4 = async (params) => {
    try {
      var _params$captchaTokens, _params$captchaTokens2;
      const res = await wixClientWithTokens.authentication.registerV2({
        email: params.email
      }, {
        password: params.password,
        profile: params.profile,
        ...params.captchaTokens && {
          captchaTokens: [{
            Recaptcha: (_params$captchaTokens = params.captchaTokens) == null ? void 0 : _params$captchaTokens.recaptcha,
            InvisibleRecaptcha: (_params$captchaTokens2 = params.captchaTokens) == null ? void 0 : _params$captchaTokens2.invisibleRecaptcha
          }]
        }
      });
      return handleState(res);
    } catch (e) {
      var _e$details$validation, _e$details$validation2, _e$details$applicatio, _e$details$applicatio2, _e$details$applicatio3;
      const emailValidation = (_e$details$validation = e.details.validationError) == null ? void 0 : (_e$details$validation2 = _e$details$validation.fieldViolations) == null ? void 0 : _e$details$validation2.find((v) => v.data.type === "EMAIL");
      if (emailValidation) {
        return {
          stateKind: "failure",
          error: emailValidation.description,
          errorCode: "invalidEmail"
        };
      }
      if (((_e$details$applicatio = e.details.applicationError) == null ? void 0 : _e$details$applicatio.code) === MISSING_CAPTCHA) {
        return {
          stateKind: "failure",
          error: e.message,
          errorCode: "missingCaptchaToken"
        };
      }
      if (((_e$details$applicatio2 = e.details.applicationError) == null ? void 0 : _e$details$applicatio2.code) === EMAIL_EXISTS) {
        return {
          stateKind: "failure",
          error: e.message,
          errorCode: "emailAlreadyExists"
        };
      }
      if (((_e$details$applicatio3 = e.details.applicationError) == null ? void 0 : _e$details$applicatio3.code) === INVALID_CAPTCHA) {
        return {
          stateKind: "failure",
          error: e.message,
          errorCode: "invalidCaptchaToken"
        };
      }
      return {
        stateKind: "failure",
        error: e.message
      };
    }
  };
  const login4 = async (params) => {
    try {
      const res = await wixClientWithTokens.authentication.loginV2({
        email: params.email
      }, {
        password: params.password
      });
      return handleState(res);
    } catch (e) {
      return {
        stateKind: "failure",
        error: e.message,
        errorCode: e.details.applicationError.code === INVALID_PASSWORD ? "invalidPassword" : e.details.applicationError.code === RESET_PASSWORD ? "resetPassword" : "invalidEmail"
      };
    }
  };
  const proceed = async (nextInputs) => {
    if (_state.stateKind === "emailVerificationRequired") {
      const res = await wixClientWithTokens.verification.verifyDuringAuthentication(nextInputs.code, {
        stateToken: _state.data.stateToken
      });
      return handleState(res);
    }
    return {
      stateKind: "failure",
      error: "Unknown _state"
    };
  };
  const complete = async (sessionToken) => {
    const oauthPKCE = generatePKCE();
    const {
      authUrl
    } = await getAuthorizationUrlWithOptions(oauthPKCE, "web_message", sessionToken);
    const iframePromise = addPostMessageListener(oauthPKCE.state);
    const iframeEl = loadFrame(authUrl);
    return iframePromise.then((res) => {
      return getMemberTokens(res.code, res.state, oauthPKCE);
    }).finally(() => {
      if (document.body.contains(iframeEl)) {
        var _iframeEl$parentEleme;
        (_iframeEl$parentEleme = iframeEl.parentElement) == null ? void 0 : _iframeEl$parentEleme.removeChild(iframeEl);
      }
    });
  };
  const sendResetPasswordMail = async (email, redirectUri) => {
    await wixClientWithTokens.recovery.sendRecoveryEmail(email, {
      redirect: {
        url: redirectUri,
        clientId: config.clientId
      }
    });
  };
  const getRecaptchaScriptUrl = () => {
    return "https://www.google.com/recaptcha/enterprise.js?render=" + WIX_RECAPTCHA_ID;
  };
  const getRecaptchaToken = async () => {
    return new Promise((resolve) => {
      grecaptcha.enterprise.ready(() => {
        grecaptcha.enterprise.execute(WIX_RECAPTCHA_ID, {
          action: "submit"
        }).then((token) => {
          resolve(token);
        });
      });
    });
  };
  const loggedIn = () => {
    return _tokens.refreshToken.role === TokenRole.MEMBER;
  };
  return {
    generateVisitorTokens,
    renewToken,
    parseFromUrl,
    getAuthUrl,
    getMemberTokens,
    generateOAuthData,
    getAuthHeaders,
    setTokens,
    getTokens: () => _tokens,
    loggedIn,
    logout: logout4,
    register: register4,
    proceed,
    login: login4,
    complete,
    sendResetPasswordMail,
    getRecaptchaScriptUrl,
    getRecaptchaToken
  };
}
var fetchTokens = async (payload) => {
  const res = await fetch("https://" + API_URL + "/oauth2/token", {
    method: "POST",
    body: JSON.stringify(payload)
  });
  if (res.status !== 200) {
    throw new Error("something went wrong");
  }
  const json2 = await res.json();
  return json2;
};

// node_modules/@wix/data/build/es/src/data-v2-data-item.public.js
var data_v2_data_item_public_exports = {};
__export(data_v2_data_item_public_exports, {
  Action: () => Action,
  BulkActionType: () => BulkActionType,
  Environment: () => Environment,
  SortOrder: () => SortOrder2,
  __metadata: () => __metadata5,
  aggregateDataItems: () => aggregateDataItems3,
  bulkInsertDataItemReferences: () => bulkInsertDataItemReferences3,
  bulkInsertDataItems: () => bulkInsertDataItems3,
  bulkRemoveDataItemReferences: () => bulkRemoveDataItemReferences3,
  bulkRemoveDataItems: () => bulkRemoveDataItems3,
  bulkSaveDataItems: () => bulkSaveDataItems3,
  bulkUpdateDataItems: () => bulkUpdateDataItems3,
  countDataItems: () => countDataItems3,
  getDataItem: () => getDataItem3,
  insertDataItem: () => insertDataItem3,
  insertDataItemReference: () => insertDataItemReference3,
  isReferencedDataItem: () => isReferencedDataItem3,
  queryDataItems: () => queryDataItems3,
  queryDistinctValues: () => queryDistinctValues3,
  queryReferencedDataItems: () => queryReferencedDataItems3,
  removeDataItem: () => removeDataItem3,
  removeDataItemReference: () => removeDataItemReference3,
  replaceDataItemReferences: () => replaceDataItemReferences3,
  saveDataItem: () => saveDataItem3,
  truncateDataItems: () => truncateDataItems3,
  updateDataItem: () => updateDataItem3
});

// node_modules/@wix/data/build/es/src/data-v2-data-item.http.js
var _aggregateDataItemsRequest = {};
var _aggregateDataItemsResponse = {};
var _bulkInsertDataItemReferencesRequest = {};
var _bulkInsertDataItemReferencesResponse = {};
var _bulkInsertDataItemsRequest = {};
var _bulkInsertDataItemsResponse = {};
var _bulkRemoveDataItemReferencesRequest = {};
var _bulkRemoveDataItemReferencesResponse = {};
var _bulkRemoveDataItemsRequest = {};
var _bulkRemoveDataItemsResponse = {};
var _bulkSaveDataItemsRequest = {};
var _bulkSaveDataItemsResponse = {};
var _bulkUpdateDataItemsRequest = {};
var _bulkUpdateDataItemsResponse = {};
var _countDataItemsRequest = {};
var _countDataItemsResponse = {};
var _getDataItemRequest = {};
var _getDataItemResponse = {};
var _insertDataItemReferenceRequest = {};
var _insertDataItemReferenceResponse = {};
var _insertDataItemRequest = {};
var _insertDataItemResponse = {};
var _isReferencedDataItemRequest = {};
var _isReferencedDataItemResponse = {};
var _queryDataItemsRequest = {};
var _queryDataItemsResponse = {};
var _queryDistinctValuesRequest = {};
var _queryDistinctValuesResponse = {};
var _queryReferencedDataItemsRequest = {};
var _queryReferencedDataItemsResponse = {};
var _removeDataItemReferenceRequest = {};
var _removeDataItemReferenceResponse = {};
var _removeDataItemRequest = {};
var _removeDataItemResponse = {};
var _replaceDataItemReferencesRequest = {};
var _replaceDataItemReferencesResponse = {};
var _saveDataItemRequest = {};
var _saveDataItemResponse = {};
var _truncateDataItemsRequest = {};
var _truncateDataItemsResponse = {};
var _updateDataItemRequest = {};
var _updateDataItemResponse = {};
function resolveComWixpressCloudDataApiDataDataItemServiceUrl(opts) {
  const domainToMappings = {
    "api._api_base_domain_": [
      {
        srcPath: "/cloud-data",
        destPath: ""
      }
    ],
    "code._base_domain_": [
      {
        srcPath: "/_api/cloud-data/v1/data-settings",
        destPath: "/v1/data-settings"
      },
      {
        srcPath: "/_api/cloud-data/v1/schemas",
        destPath: "/v1/schemas"
      },
      {
        srcPath: "/_api/cloud-data/v1/connector",
        destPath: "/v1/connector"
      },
      {
        srcPath: "/_api/data/v1/data-settings",
        destPath: "/v1/data-settings"
      },
      {
        srcPath: "/_api/data/v1/schemas",
        destPath: "/v1/schemas"
      },
      {
        srcPath: "/_api/data/v1/connector",
        destPath: "/v1/connector"
      },
      {
        srcPath: "/_api/cloud-data/v1/wix-data",
        destPath: "/v1/wix-data"
      }
    ],
    "cloud-data.wix-code.com": [
      {
        srcPath: "",
        destPath: ""
      }
    ],
    _: [
      {
        srcPath: "/_api/cloud-data",
        destPath: ""
      },
      {
        srcPath: "/_api/cloud-data/v1/schemas",
        destPath: "/v1/schemas"
      }
    ],
    "www._base_domain_": [
      {
        srcPath: "/_api/cloud-data",
        destPath: ""
      },
      {
        srcPath: "/_api/data",
        destPath: ""
      },
      {
        srcPath: "/[a-z0-9-_/]+/_api/cloud-data",
        destPath: ""
      }
    ],
    "dev._base_domain_": [
      {
        srcPath: "/_api/cloud-data",
        destPath: ""
      }
    ],
    "bo._base_domain_": [
      {
        srcPath: "/_api/cloud-data/v1",
        destPath: "/v1"
      },
      {
        srcPath: "/[a-z0-9-_/]+/_api/cloud-data",
        destPath: ""
      }
    ],
    "manage._base_domain_": [
      {
        srcPath: "/_api/cloud-data",
        destPath: ""
      },
      {
        srcPath: "/_api/data",
        destPath: ""
      },
      {
        srcPath: "/[a-z0-9-_/]+/_api/cloud-data",
        destPath: ""
      }
    ],
    "editor._base_domain_": [
      {
        srcPath: "/_api/cloud-data/v1/schemas",
        destPath: "/v1/schemas"
      },
      {
        srcPath: "/_api/cloud-data/dbs/tasks",
        destPath: "/dbs/tasks"
      },
      {
        srcPath: "/_api/data/v1/schemas",
        destPath: "/v1/schemas"
      },
      {
        srcPath: "/_api/data/dbs/tasks",
        destPath: "/dbs/tasks"
      },
      {
        srcPath: "/_api/cloud-data/v1/wix-data",
        destPath: "/v1/wix-data"
      },
      {
        srcPath: "/_api/cloud-data/v1/data-settings",
        destPath: "/v1/data-settings"
      },
      {
        srcPath: "/_api/data/v2/indexes",
        destPath: "/v2/indexes"
      },
      {
        srcPath: "/_api/cloud-data/v1/external-database-connections",
        destPath: "/v1/external-database-connections"
      }
    ],
    "blocks._base_domain_": [
      {
        srcPath: "/_api/cloud-data/v1/schemas",
        destPath: "/v1/schemas"
      },
      {
        srcPath: "/_api/cloud-data/dbs/tasks",
        destPath: "/dbs/tasks"
      },
      {
        srcPath: "/_api/data/v1/schemas",
        destPath: "/v1/schemas"
      },
      {
        srcPath: "/_api/data/dbs/tasks",
        destPath: "/dbs/tasks"
      },
      {
        srcPath: "/_api/cloud-data/v1/wix-data",
        destPath: "/v1/wix-data"
      },
      {
        srcPath: "/_api/cloud-data/v1/data-settings",
        destPath: "/v1/data-settings"
      },
      {
        srcPath: "/_api/data/v2/indexes",
        destPath: "/v2/indexes"
      },
      {
        srcPath: "/_api/cloud-data/v1/external-database-connections",
        destPath: "/v1/external-database-connections"
      }
    ],
    "create.editorx": [
      {
        srcPath: "/_api/cloud-data/v1/schemas",
        destPath: "/v1/schemas"
      },
      {
        srcPath: "/_api/cloud-data/dbs/tasks",
        destPath: "/dbs/tasks"
      },
      {
        srcPath: "/_api/data/v1/schemas",
        destPath: "/v1/schemas"
      },
      {
        srcPath: "/_api/data/dbs/tasks",
        destPath: "/dbs/tasks"
      },
      {
        srcPath: "/_api/cloud-data/v1/wix-data",
        destPath: "/v1/wix-data"
      },
      {
        srcPath: "/_api/cloud-data/v1/data-settings",
        destPath: "/v1/data-settings"
      },
      {
        srcPath: "/_api/data/v2/indexes",
        destPath: "/v2/indexes"
      },
      {
        srcPath: "/_api/cloud-data/v1/external-database-connections",
        destPath: "/v1/external-database-connections"
      }
    ],
    "www.wixapis.com": [
      {
        srcPath: "/wix-data/v1/collections",
        destPath: "/v1/wix-data/collections"
      },
      {
        srcPath: "/wix-data/v1/external-database-connections",
        destPath: "/v1/external-database-connections"
      },
      {
        srcPath: "/wix-data/v2/indexes",
        destPath: "/v2/indexes"
      },
      {
        srcPath: "/wix-data/v1/items",
        destPath: "/v1/items"
      },
      {
        srcPath: "/wix-data/v1/bulk",
        destPath: "/v1/bulk"
      },
      {
        srcPath: "/wix-data/v1/external-databases",
        destPath: "/v1/external-databases"
      },
      {
        srcPath: "/wix-data/v2",
        destPath: "/v2"
      }
    ],
    "www.wixgateway.com": [
      {
        srcPath: "/wix-data/v1/items",
        destPath: "/v1/items"
      },
      {
        srcPath: "/wix-data/v1/bulk",
        destPath: "/v1/bulk"
      }
    ]
  };
  return resolveUrl(Object.assign(opts, { domainToMappings }));
}
function insertDataItem(payload) {
  const { toJSON: toReq, fromJSON: fromReq } = serializer2(_insertDataItemRequest, {});
  const { fromJSON: fromRes } = serializer2(_insertDataItemResponse, {});
  function __insertDataItem({ host }) {
    const serializedData = toReq(payload);
    const metadata = {
      entityFqdn: "wix.data.v2.data_item",
      method: "POST",
      methodFqn: "com.wixpress.cloud.data.api.data.DataItemService.InsertDataItem",
      url: resolveComWixpressCloudDataApiDataDataItemServiceUrl({
        protoPath: "/v2/items",
        data: serializedData,
        host
      }),
      data: serializedData,
      transformResponse: fromRes
    };
    return metadata;
  }
  __insertDataItem.fromReq = fromReq;
  return __insertDataItem;
}
function updateDataItem(payload) {
  const { toJSON: toReq, fromJSON: fromReq } = serializer2(_updateDataItemRequest, {});
  const { fromJSON: fromRes } = serializer2(_updateDataItemResponse, {});
  function __updateDataItem({ host }) {
    const serializedData = toReq(payload);
    const metadata = {
      entityFqdn: "wix.data.v2.data_item",
      method: "PUT",
      methodFqn: "com.wixpress.cloud.data.api.data.DataItemService.UpdateDataItem",
      url: resolveComWixpressCloudDataApiDataDataItemServiceUrl({
        protoPath: "/v2/items/{dataItem.id}",
        data: serializedData,
        host
      }),
      data: serializedData,
      transformResponse: fromRes
    };
    return metadata;
  }
  __updateDataItem.fromReq = fromReq;
  return __updateDataItem;
}
function saveDataItem(payload) {
  const { toJSON: toReq, fromJSON: fromReq } = serializer2(_saveDataItemRequest, {});
  const { fromJSON: fromRes } = serializer2(_saveDataItemResponse, {});
  function __saveDataItem({ host }) {
    const serializedData = toReq(payload);
    const metadata = {
      entityFqdn: "wix.data.v2.data_item",
      method: "POST",
      methodFqn: "com.wixpress.cloud.data.api.data.DataItemService.SaveDataItem",
      url: resolveComWixpressCloudDataApiDataDataItemServiceUrl({
        protoPath: "/v2/items/save",
        data: serializedData,
        host
      }),
      data: serializedData,
      transformResponse: fromRes
    };
    return metadata;
  }
  __saveDataItem.fromReq = fromReq;
  return __saveDataItem;
}
function getDataItem(payload) {
  const { toJSON: toReq, fromJSON: fromReq } = serializer2(_getDataItemRequest, {});
  const { fromJSON: fromRes } = serializer2(_getDataItemResponse, {});
  function __getDataItem({ host }) {
    const serializedData = toReq(payload);
    const metadata = {
      entityFqdn: "wix.data.v2.data_item",
      method: "GET",
      methodFqn: "com.wixpress.cloud.data.api.data.DataItemService.GetDataItem",
      url: resolveComWixpressCloudDataApiDataDataItemServiceUrl({
        protoPath: "/v2/items/{dataItemId}",
        data: serializedData,
        host
      }),
      params: toURLSearchParams(serializedData),
      transformResponse: fromRes
    };
    return metadata;
  }
  __getDataItem.fromReq = fromReq;
  return __getDataItem;
}
function removeDataItem(payload) {
  const { toJSON: toReq, fromJSON: fromReq } = serializer2(_removeDataItemRequest, {});
  const { fromJSON: fromRes } = serializer2(_removeDataItemResponse, {});
  function __removeDataItem({ host }) {
    const serializedData = toReq(payload);
    const metadata = {
      entityFqdn: "wix.data.v2.data_item",
      method: "DELETE",
      methodFqn: "com.wixpress.cloud.data.api.data.DataItemService.RemoveDataItem",
      url: resolveComWixpressCloudDataApiDataDataItemServiceUrl({
        protoPath: "/v2/items/{dataItemId}",
        data: serializedData,
        host
      }),
      params: toURLSearchParams(serializedData),
      transformResponse: fromRes
    };
    return metadata;
  }
  __removeDataItem.fromReq = fromReq;
  return __removeDataItem;
}
function truncateDataItems(payload) {
  const { toJSON: toReq, fromJSON: fromReq } = serializer2(_truncateDataItemsRequest, {});
  const { fromJSON: fromRes } = serializer2(_truncateDataItemsResponse, {});
  function __truncateDataItems({ host }) {
    const serializedData = toReq(payload);
    const metadata = {
      entityFqdn: "wix.data.v2.data_item",
      method: "POST",
      methodFqn: "com.wixpress.cloud.data.api.data.DataItemService.TruncateDataItems",
      url: resolveComWixpressCloudDataApiDataDataItemServiceUrl({
        protoPath: "/v2/items/truncate",
        data: serializedData,
        host
      }),
      data: serializedData,
      transformResponse: fromRes
    };
    return metadata;
  }
  __truncateDataItems.fromReq = fromReq;
  return __truncateDataItems;
}
function queryDataItems(payload) {
  const { toJSON: toReq, fromJSON: fromReq } = serializer2(_queryDataItemsRequest, {});
  const { fromJSON: fromRes } = serializer2(_queryDataItemsResponse, {});
  function __queryDataItems({ host }) {
    const serializedData = toReq(payload);
    const metadata = {
      entityFqdn: "wix.data.v2.data_item",
      method: "POST",
      methodFqn: "com.wixpress.cloud.data.api.data.DataItemService.QueryDataItems",
      url: resolveComWixpressCloudDataApiDataDataItemServiceUrl({
        protoPath: "/v2/items/query",
        data: serializedData,
        host
      }),
      data: serializedData,
      transformResponse: fromRes
    };
    return metadata;
  }
  __queryDataItems.fromReq = fromReq;
  return __queryDataItems;
}
function aggregateDataItems(payload) {
  const { toJSON: toReq, fromJSON: fromReq } = serializer2(_aggregateDataItemsRequest, {});
  const { fromJSON: fromRes } = serializer2(_aggregateDataItemsResponse, {});
  function __aggregateDataItems({ host }) {
    const serializedData = toReq(payload);
    const metadata = {
      entityFqdn: "wix.data.v2.data_item",
      method: "POST",
      methodFqn: "com.wixpress.cloud.data.api.data.DataItemService.AggregateDataItems",
      url: resolveComWixpressCloudDataApiDataDataItemServiceUrl({
        protoPath: "/v2/items/aggregate",
        data: serializedData,
        host
      }),
      data: serializedData,
      transformResponse: fromRes
    };
    return metadata;
  }
  __aggregateDataItems.fromReq = fromReq;
  return __aggregateDataItems;
}
function countDataItems(payload) {
  const { toJSON: toReq, fromJSON: fromReq } = serializer2(_countDataItemsRequest, {});
  const { fromJSON: fromRes } = serializer2(_countDataItemsResponse, {});
  function __countDataItems({ host }) {
    const serializedData = toReq(payload);
    const metadata = {
      entityFqdn: "wix.data.v2.data_item",
      method: "POST",
      methodFqn: "com.wixpress.cloud.data.api.data.DataItemService.CountDataItems",
      url: resolveComWixpressCloudDataApiDataDataItemServiceUrl({
        protoPath: "/v2/items/count",
        data: serializedData,
        host
      }),
      data: serializedData,
      transformResponse: fromRes
    };
    return metadata;
  }
  __countDataItems.fromReq = fromReq;
  return __countDataItems;
}
function queryDistinctValues(payload) {
  const { toJSON: toReq, fromJSON: fromReq } = serializer2(_queryDistinctValuesRequest, {});
  const { fromJSON: fromRes } = serializer2(_queryDistinctValuesResponse, {});
  function __queryDistinctValues({ host }) {
    const serializedData = toReq(payload);
    const metadata = {
      entityFqdn: "wix.data.v2.data_item",
      method: "POST",
      methodFqn: "com.wixpress.cloud.data.api.data.DataItemService.QueryDistinctValues",
      url: resolveComWixpressCloudDataApiDataDataItemServiceUrl({
        protoPath: "/v2/items/query-distinct-values",
        data: serializedData,
        host
      }),
      data: serializedData,
      transformResponse: fromRes
    };
    return metadata;
  }
  __queryDistinctValues.fromReq = fromReq;
  return __queryDistinctValues;
}
function bulkInsertDataItems(payload) {
  const { toJSON: toReq, fromJSON: fromReq } = serializer2(_bulkInsertDataItemsRequest, {});
  const { fromJSON: fromRes } = serializer2(_bulkInsertDataItemsResponse, {});
  function __bulkInsertDataItems({ host }) {
    const serializedData = toReq(payload);
    const metadata = {
      entityFqdn: "wix.data.v2.data_item",
      method: "POST",
      methodFqn: "com.wixpress.cloud.data.api.data.DataItemService.BulkInsertDataItems",
      url: resolveComWixpressCloudDataApiDataDataItemServiceUrl({
        protoPath: "/v2/bulk/items/insert",
        data: serializedData,
        host
      }),
      data: serializedData,
      transformResponse: fromRes
    };
    return metadata;
  }
  __bulkInsertDataItems.fromReq = fromReq;
  return __bulkInsertDataItems;
}
function bulkUpdateDataItems(payload) {
  const { toJSON: toReq, fromJSON: fromReq } = serializer2(_bulkUpdateDataItemsRequest, {});
  const { fromJSON: fromRes } = serializer2(_bulkUpdateDataItemsResponse, {});
  function __bulkUpdateDataItems({ host }) {
    const serializedData = toReq(payload);
    const metadata = {
      entityFqdn: "wix.data.v2.data_item",
      method: "POST",
      methodFqn: "com.wixpress.cloud.data.api.data.DataItemService.BulkUpdateDataItems",
      url: resolveComWixpressCloudDataApiDataDataItemServiceUrl({
        protoPath: "/v2/bulk/items/update",
        data: serializedData,
        host
      }),
      data: serializedData,
      transformResponse: fromRes
    };
    return metadata;
  }
  __bulkUpdateDataItems.fromReq = fromReq;
  return __bulkUpdateDataItems;
}
function bulkSaveDataItems(payload) {
  const { toJSON: toReq, fromJSON: fromReq } = serializer2(_bulkSaveDataItemsRequest, {});
  const { fromJSON: fromRes } = serializer2(_bulkSaveDataItemsResponse, {});
  function __bulkSaveDataItems({ host }) {
    const serializedData = toReq(payload);
    const metadata = {
      entityFqdn: "wix.data.v2.data_item",
      method: "POST",
      methodFqn: "com.wixpress.cloud.data.api.data.DataItemService.BulkSaveDataItems",
      url: resolveComWixpressCloudDataApiDataDataItemServiceUrl({
        protoPath: "/v2/bulk/items/save",
        data: serializedData,
        host
      }),
      data: serializedData,
      transformResponse: fromRes
    };
    return metadata;
  }
  __bulkSaveDataItems.fromReq = fromReq;
  return __bulkSaveDataItems;
}
function bulkRemoveDataItems(payload) {
  const { toJSON: toReq, fromJSON: fromReq } = serializer2(_bulkRemoveDataItemsRequest, {});
  const { fromJSON: fromRes } = serializer2(_bulkRemoveDataItemsResponse, {});
  function __bulkRemoveDataItems({ host }) {
    const serializedData = toReq(payload);
    const metadata = {
      entityFqdn: "wix.data.v2.data_item",
      method: "POST",
      methodFqn: "com.wixpress.cloud.data.api.data.DataItemService.BulkRemoveDataItems",
      url: resolveComWixpressCloudDataApiDataDataItemServiceUrl({
        protoPath: "/v2/bulk/items/remove",
        data: serializedData,
        host
      }),
      data: serializedData,
      transformResponse: fromRes
    };
    return metadata;
  }
  __bulkRemoveDataItems.fromReq = fromReq;
  return __bulkRemoveDataItems;
}
function queryReferencedDataItems(payload) {
  const { toJSON: toReq, fromJSON: fromReq } = serializer2(_queryReferencedDataItemsRequest, {});
  const { fromJSON: fromRes } = serializer2(_queryReferencedDataItemsResponse, {});
  function __queryReferencedDataItems({ host }) {
    const serializedData = toReq(payload);
    const metadata = {
      entityFqdn: "wix.data.v2.data_item",
      method: "POST",
      methodFqn: "com.wixpress.cloud.data.api.data.DataItemService.QueryReferencedDataItems",
      url: resolveComWixpressCloudDataApiDataDataItemServiceUrl({
        protoPath: "/v2/items/query-referenced",
        data: serializedData,
        host
      }),
      data: serializedData,
      transformResponse: fromRes
    };
    return metadata;
  }
  __queryReferencedDataItems.fromReq = fromReq;
  return __queryReferencedDataItems;
}
function isReferencedDataItem(payload) {
  const { toJSON: toReq, fromJSON: fromReq } = serializer2(_isReferencedDataItemRequest, {});
  const { fromJSON: fromRes } = serializer2(_isReferencedDataItemResponse, {});
  function __isReferencedDataItem({ host }) {
    const serializedData = toReq(payload);
    const metadata = {
      entityFqdn: "wix.data.v2.data_item",
      method: "POST",
      methodFqn: "com.wixpress.cloud.data.api.data.DataItemService.IsReferencedDataItem",
      url: resolveComWixpressCloudDataApiDataDataItemServiceUrl({
        protoPath: "/v2/items/is-referenced",
        data: serializedData,
        host
      }),
      data: serializedData,
      transformResponse: fromRes
    };
    return metadata;
  }
  __isReferencedDataItem.fromReq = fromReq;
  return __isReferencedDataItem;
}
function insertDataItemReference(payload) {
  const { toJSON: toReq, fromJSON: fromReq } = serializer2(_insertDataItemReferenceRequest, {});
  const { fromJSON: fromRes } = serializer2(_insertDataItemReferenceResponse, {});
  function __insertDataItemReference({ host }) {
    const serializedData = toReq(payload);
    const metadata = {
      entityFqdn: "wix.data.v2.data_item",
      method: "POST",
      methodFqn: "com.wixpress.cloud.data.api.data.DataItemService.InsertDataItemReference",
      url: resolveComWixpressCloudDataApiDataDataItemServiceUrl({
        protoPath: "/v2/items/insert-reference",
        data: serializedData,
        host
      }),
      data: serializedData,
      transformResponse: fromRes
    };
    return metadata;
  }
  __insertDataItemReference.fromReq = fromReq;
  return __insertDataItemReference;
}
function removeDataItemReference(payload) {
  const { toJSON: toReq, fromJSON: fromReq } = serializer2(_removeDataItemReferenceRequest, {});
  const { fromJSON: fromRes } = serializer2(_removeDataItemReferenceResponse, {});
  function __removeDataItemReference({ host }) {
    const serializedData = toReq(payload);
    const metadata = {
      entityFqdn: "wix.data.v2.data_item",
      method: "POST",
      methodFqn: "com.wixpress.cloud.data.api.data.DataItemService.RemoveDataItemReference",
      url: resolveComWixpressCloudDataApiDataDataItemServiceUrl({
        protoPath: "/v2/items/remove-reference",
        data: serializedData,
        host
      }),
      data: serializedData,
      transformResponse: fromRes
    };
    return metadata;
  }
  __removeDataItemReference.fromReq = fromReq;
  return __removeDataItemReference;
}
function bulkInsertDataItemReferences(payload) {
  const { toJSON: toReq, fromJSON: fromReq } = serializer2(_bulkInsertDataItemReferencesRequest, {});
  const { fromJSON: fromRes } = serializer2(_bulkInsertDataItemReferencesResponse, {});
  function __bulkInsertDataItemReferences({ host }) {
    const serializedData = toReq(payload);
    const metadata = {
      entityFqdn: "wix.data.v2.data_item",
      method: "POST",
      methodFqn: "com.wixpress.cloud.data.api.data.DataItemService.BulkInsertDataItemReferences",
      url: resolveComWixpressCloudDataApiDataDataItemServiceUrl({
        protoPath: "/v2/bulk/items/insert-references",
        data: serializedData,
        host
      }),
      data: serializedData,
      transformResponse: fromRes
    };
    return metadata;
  }
  __bulkInsertDataItemReferences.fromReq = fromReq;
  return __bulkInsertDataItemReferences;
}
function bulkRemoveDataItemReferences(payload) {
  const { toJSON: toReq, fromJSON: fromReq } = serializer2(_bulkRemoveDataItemReferencesRequest, {});
  const { fromJSON: fromRes } = serializer2(_bulkRemoveDataItemReferencesResponse, {});
  function __bulkRemoveDataItemReferences({ host }) {
    const serializedData = toReq(payload);
    const metadata = {
      entityFqdn: "wix.data.v2.data_item",
      method: "POST",
      methodFqn: "com.wixpress.cloud.data.api.data.DataItemService.BulkRemoveDataItemReferences",
      url: resolveComWixpressCloudDataApiDataDataItemServiceUrl({
        protoPath: "/v2/bulk/items/remove-references",
        data: serializedData,
        host
      }),
      data: serializedData,
      transformResponse: fromRes
    };
    return metadata;
  }
  __bulkRemoveDataItemReferences.fromReq = fromReq;
  return __bulkRemoveDataItemReferences;
}
function replaceDataItemReferences(payload) {
  const { toJSON: toReq, fromJSON: fromReq } = serializer2(_replaceDataItemReferencesRequest, {});
  const { fromJSON: fromRes } = serializer2(_replaceDataItemReferencesResponse, {});
  function __replaceDataItemReferences({ host }) {
    const serializedData = toReq(payload);
    const metadata = {
      entityFqdn: "wix.data.v2.data_item",
      method: "POST",
      methodFqn: "com.wixpress.cloud.data.api.data.DataItemService.ReplaceDataItemReferences",
      url: resolveComWixpressCloudDataApiDataDataItemServiceUrl({
        protoPath: "/v2/items/replace-references",
        data: serializedData,
        host
      }),
      data: serializedData,
      transformResponse: fromRes
    };
    return metadata;
  }
  __replaceDataItemReferences.fromReq = fromReq;
  return __replaceDataItemReferences;
}

// node_modules/@wix/motion-edm-autogen-query-wrapper/dist/esm/Iterator.js
var Iterator = (
  /** @class */
  function() {
    function Iterator2(_a14) {
      var items = _a14.items, originQuery = _a14.originQuery, fetchNextPage = _a14.fetchNextPage, fetchPrevPage = _a14.fetchPrevPage, limit = _a14.limit;
      this._items = items;
      this._fetchNextPage = fetchNextPage;
      this._fetchPrevPage = fetchPrevPage;
      this._originQuery = originQuery;
      this._limit = limit;
    }
    Object.defineProperty(Iterator2.prototype, "items", {
      get: function() {
        return this._items;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Iterator2.prototype, "length", {
      get: function() {
        return this._items.length;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Iterator2.prototype, "pageSize", {
      get: function() {
        return this._limit;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Iterator2.prototype, "query", {
      get: function() {
        return this._originQuery;
      },
      enumerable: false,
      configurable: true
    });
    Iterator2.prototype.next = function() {
      return __awaiter(this, void 0, void 0, function() {
        var nextPageIterator;
        return __generator(this, function(_a14) {
          switch (_a14.label) {
            case 0:
              if (!this.hasNext()) {
                throw new Error("No next page to fetch");
              }
              return [4, this._fetchNextPage()];
            case 1:
              nextPageIterator = _a14.sent();
              return [2, nextPageIterator];
          }
        });
      });
    };
    Iterator2.prototype.prev = function() {
      return __awaiter(this, void 0, void 0, function() {
        var previousPageIterator;
        return __generator(this, function(_a14) {
          switch (_a14.label) {
            case 0:
              if (!this.hasPrev()) {
                throw new Error("No previous page to fetch");
              }
              return [4, this._fetchPrevPage()];
            case 1:
              previousPageIterator = _a14.sent();
              return [2, previousPageIterator];
          }
        });
      });
    };
    return Iterator2;
  }()
);

// node_modules/@wix/motion-edm-autogen-query-wrapper/dist/esm/CursorBasedIterator.js
var CursorBasedIterator = (
  /** @class */
  function(_super) {
    __extends(CursorBasedIterator2, _super);
    function CursorBasedIterator2(_a14) {
      var items = _a14.items, originQuery = _a14.originQuery, fetchNextPage = _a14.fetchNextPage, fetchPrevPage = _a14.fetchPrevPage, limit = _a14.limit, nextCursor = _a14.nextCursor, prevCursor = _a14.prevCursor;
      var _this = _super.call(this, { items, originQuery, fetchNextPage, fetchPrevPage, limit }) || this;
      _this._nextCursor = nextCursor;
      _this._prevCursor = prevCursor;
      _this.cursors = {
        next: nextCursor,
        prev: prevCursor
      };
      return _this;
    }
    CursorBasedIterator2.prototype.hasNext = function() {
      return !!this._nextCursor;
    };
    CursorBasedIterator2.prototype.hasPrev = function() {
      return !!this._prevCursor;
    };
    return CursorBasedIterator2;
  }(Iterator)
);

// node_modules/@wix/motion-edm-autogen-query-wrapper/dist/esm/OffsetBasedIterator.js
var OffsetBasedIterator = (
  /** @class */
  function(_super) {
    __extends(OffsetBasedIterator2, _super);
    function OffsetBasedIterator2(_a14) {
      var items = _a14.items, fetchNextPage = _a14.fetchNextPage, fetchPrevPage = _a14.fetchPrevPage, offset = _a14.offset, originQuery = _a14.originQuery, limit = _a14.limit, totalCount = _a14.totalCount, tooManyToCount = _a14.tooManyToCount;
      var _this = _super.call(this, { items, fetchNextPage, fetchPrevPage, originQuery, limit }) || this;
      _this._totalCount = totalCount;
      _this._offset = offset;
      _this._tooManyToCount = tooManyToCount;
      return _this;
    }
    Object.defineProperty(OffsetBasedIterator2.prototype, "currentPage", {
      get: function() {
        return this._limit === 0 ? void 0 : Math.floor(this._offset / this._limit);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(OffsetBasedIterator2.prototype, "totalPages", {
      get: function() {
        return this._tooManyToCount || this._limit === 0 ? void 0 : Math.ceil(this._totalCount / this._limit);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(OffsetBasedIterator2.prototype, "totalCount", {
      get: function() {
        return this._tooManyToCount ? void 0 : this._totalCount;
      },
      enumerable: false,
      configurable: true
    });
    OffsetBasedIterator2.prototype.hasNext = function() {
      return Boolean(this._limit !== 0 && this.currentPage !== void 0 && // currentPage 0 is the first page
      this.totalPages !== void 0 && this.currentPage < this.totalPages - 1);
    };
    OffsetBasedIterator2.prototype.hasPrev = function() {
      return Boolean(this._limit !== 0 && this.currentPage && this.currentPage > 0);
    };
    return OffsetBasedIterator2;
  }(Iterator)
);

// node_modules/@wix/filter-builder/dist/esm/type-utils.js
var import_kind_of = __toESM(require_kind_of());
function isArray4(arr) {
  return (0, import_kind_of.default)(arr) === "array";
}
function isDate(obj) {
  return (0, import_kind_of.default)(obj) === "date";
}
function isNumber(obj) {
  return (0, import_kind_of.default)(obj) === "number";
}
function isString3(obj) {
  return (0, import_kind_of.default)(obj) === "string";
}
function isFunction(obj) {
  return (0, import_kind_of.default)(obj) === "function";
}
function typeForDisplay(obj) {
  return upperCaseFirst((0, import_kind_of.default)(obj));
}
function upperCaseFirst(str2) {
  if (!isString3(str2)) {
    return str2;
  }
  var first = str2.slice(0, 1).toUpperCase();
  var rest = str2.slice(1, str2.length);
  return first + rest;
}

// node_modules/@wix/filter-builder/dist/esm/clone.js
function clone(obj) {
  if (obj == null || typeof obj !== "object") {
    return obj;
  }
  var temp = null;
  if (isDate(obj)) {
    temp = new Date(obj.getTime());
  } else {
    temp = obj.constructor();
    for (var key in obj) {
      temp[key] = clone(obj[key]);
    }
  }
  return temp;
}

// node_modules/@wix/filter-builder/dist/esm/filter-validator.js
var FilterValidator = function() {
  function FilterValidator2(operatorName, previousInvalidArguments, ctor) {
    this._validations = [];
    this.operatorName = operatorName;
    this.ctor = ctor;
    this._invalidArguments = clone(previousInvalidArguments);
  }
  FilterValidator2.prototype.typeIsString = function(value) {
    var _this = this;
    return this.addValidation(function() {
      return isString3(value);
    }, function() {
      return "Invalid ".concat(_this.operatorName, " parameter value [").concat(typeForDisplay(value), "]. ").concat(_this.operatorName, " parameter must be a String.");
    });
  };
  FilterValidator2.prototype.typeIsStringNumberOrDate = function(value) {
    var _this = this;
    return this.addValidation(function() {
      return isDateStringOrNumber(value);
    }, function() {
      return "Invalid ".concat(_this.operatorName, " parameter value [").concat(typeForDisplay(value), "]. Valid ").concat(_this.operatorName, " parameter types are String, Number or Date.");
    });
  };
  FilterValidator2.prototype.sameType = function(first, second) {
    var _this = this;
    return this.addValidation(function() {
      return typeForDisplay(first) === typeForDisplay(second);
    }, function() {
      return "Invalid ".concat(_this.operatorName, " parameter values [").concat(typeForDisplay(first), "] and [").concat(typeForDisplay(second), "]. Both parameters must be of the same type.");
    });
  };
  FilterValidator2.prototype.typeIsStringNumberOrDateForAll = function(values) {
    var _this = this;
    return this.addValidation(function() {
      return values.every(isDateStringOrNumber);
    }, function() {
      return "Invalid ".concat(_this.operatorName, " usage. ").concat(_this.operatorName, " supports only Number, String or Date items.");
    });
  };
  FilterValidator2.prototype.validFieldName = function(field) {
    var _this = this;
    return this.addValidation(function() {
      return isString3(field);
    }, function() {
      return "Invalid ".concat(_this.operatorName, " field value [").concat(typeForDisplay(field), "]. ").concat(_this.operatorName, " field must be a String.");
    });
  };
  FilterValidator2.prototype.isInstanceOfSameClass = function(obj) {
    var _this = this;
    return this.addValidation(function() {
      return obj instanceof _this.ctor;
    }, function() {
      return "Invalid ".concat(_this.operatorName, " parameter [").concat(typeForDisplay(obj), "]. ").concat(_this.operatorName, " expects FilterBuilder only.");
    });
  };
  FilterValidator2.prototype.arityIsOne = function(args) {
    var _this = this;
    return this.addValidation(function() {
      return args.length === 1;
    }, function() {
      return "Invalid ".concat(_this.operatorName, " usage. ").concat(_this.operatorName, " requires one parameter.");
    });
  };
  FilterValidator2.prototype.arityIsTwo = function(args) {
    var _this = this;
    return this.addValidation(function() {
      return args.length === 2;
    }, function() {
      return "Invalid ".concat(_this.operatorName, " usage. ").concat(_this.operatorName, " requires two parameters.");
    });
  };
  FilterValidator2.prototype.arityIsThree = function(args) {
    var _this = this;
    return this.addValidation(function() {
      return args.length === 3;
    }, function() {
      return "Invalid ".concat(_this.operatorName, " usage. ").concat(_this.operatorName, " requires three parameters.");
    });
  };
  FilterValidator2.prototype.arityIsAtLeastTwo = function(args) {
    var _this = this;
    return this.addValidation(function() {
      return args.length >= 2;
    }, function() {
      return "Invalid ".concat(_this.operatorName, " usage. ").concat(_this.operatorName, " requires at least two parameters.");
    });
  };
  FilterValidator2.prototype.addValidation = function(predicateFn, messageFn) {
    this._validations.push({
      predicateFn,
      messageFn
    });
    return this;
  };
  FilterValidator2.prototype.validateAndAggregate = function() {
    var _this = this;
    var valid = this._validations.every(function(_a14) {
      var predicateFn = _a14.predicateFn, messageFn = _a14.messageFn;
      return _this._appendIfInvalid(predicateFn(), messageFn());
    });
    return [this._invalidArguments, valid];
  };
  FilterValidator2.prototype._appendIfInvalid = function(valid, message) {
    if (!valid) {
      this._invalidArguments.push(message);
      return false;
    }
    return true;
  };
  return FilterValidator2;
}();
function isDateStringOrNumber(value) {
  return isString3(value) || isNumber(value) || isDate(value);
}

// node_modules/@wix/filter-builder/dist/esm/query-optimiser.js
var optimisations = [
  optimisedUnaryAnd,
  optimisedEmptyAnd,
  optimisedAndsAsObjects,
  optimisedNestedAnds,
  optimisedNestedOrs
];
function optimisedQuery(query) {
  var newQuery = fullyOptimised(query)[0];
  return newQuery;
}
function fullyOptimised(query) {
  if (Array.isArray(query)) {
    return fullyOptimisedArray(query);
  }
  if (typeof query === "object" && query !== null && !instanceOfIgnoredType(query)) {
    return fullyOptimisedObject(query);
  }
  return [query, false];
}
function fullyOptimisedArray(query) {
  var optimisedElements = query.map(fullyOptimised);
  var somethingChanged = 0 < optimisedElements.filter(function(_a14) {
    var elementChanged = _a14[1];
    return elementChanged;
  }).length;
  var newElements = optimisedElements.map(function(_a14) {
    var element = _a14[0];
    return element;
  });
  return [newElements, somethingChanged];
}
function fullyOptimisedObject(query) {
  var _a14 = fullEntriesOptimisation(query), queryAfterOptimisingEntries = _a14[0], changedStage1 = _a14[1];
  var _b = fullObjectOptimisation(queryAfterOptimisingEntries), queryAfterFullOptimisation = _b[0], changedStage2 = _b[1];
  var changed = changedStage1 || changedStage2;
  return [queryAfterFullOptimisation, changed];
  function fullObjectOptimisation(query2) {
    var updatedQuery = applyFirstOptimisation(query2);
    if (!updatedQuery) {
      return [query2, false];
    }
    var finalQuery = fullyOptimised(updatedQuery)[0];
    return [finalQuery, true];
  }
  function fullEntriesOptimisation(query2) {
    var changedEntries = Object.entries(query2).map(entryOptimisation).filter(function(_a15) {
      var changed3 = _a15[2];
      return changed3;
    });
    var newQuery = __assign(__assign({}, query2), entriesAsObject(changedEntries));
    var changed2 = !!changedEntries.length;
    return [newQuery, changed2];
  }
  function entryOptimisation(_a15) {
    var key = _a15[0], value = _a15[1];
    var _b2 = fullyOptimised(value), newValue = _b2[0], changed2 = _b2[1];
    return [key, newValue, changed2];
  }
  function entriesAsObject(entries) {
    return entries.reduce(function(acc, _a15) {
      var _b2;
      var key = _a15[0], value = _a15[1];
      return __assign(__assign({}, acc), (_b2 = {}, _b2[key] = value, _b2));
    }, {});
  }
}
function applyFirstOptimisation(node) {
  for (var _i = 0, optimisations_1 = optimisations; _i < optimisations_1.length; _i++) {
    var optimisation = optimisations_1[_i];
    var newNode = optimisation(node);
    if (newNode) {
      return newNode;
    }
  }
}
function optimisedUnaryAnd(node) {
  var args = node.$and;
  if (Array.isArray(args) && args.length === 1) {
    return args[0];
  }
}
function optimisedEmptyAnd(node) {
  var args = node.$and;
  if (Array.isArray(args) && args.length === 0) {
    return {};
  }
  return null;
}
function optimisedAndsAsObjects(node) {
  var args = node.$and;
  if (!args) {
    return;
  }
  var basicObjects = [];
  var operatorObjects = [];
  args.forEach(function(arg) {
    if (isOperator(arg)) {
      operatorObjects = __spreadArray(__spreadArray([], operatorObjects, true), [arg], false);
    } else {
      basicObjects = __spreadArray(__spreadArray([], basicObjects, true), [arg], false);
    }
  });
  if (basicObjects.length <= 1 || haveOverlappingFields(basicObjects)) {
    return;
  }
  var combinedBasicObjects = Object.assign.apply(Object, __spreadArray([{}], basicObjects, false));
  return { $and: __spreadArray([combinedBasicObjects], operatorObjects, true) };
  function isOperator(node2) {
    var keys = Object.keys(node2);
    return keys.every(function(name) {
      return name.startsWith("$");
    }) && keys.length > 0;
  }
  function haveOverlappingFields(objects) {
    var nonUniqueKeys = objects.map(function(it) {
      return Object.keys(it);
    }).reduce(function(a, b) {
      return __spreadArray(__spreadArray([], a, true), b, true);
    }, []);
    var uniqueKeys = unique(nonUniqueKeys);
    return uniqueKeys.length !== nonUniqueKeys.length;
  }
  function unique(values) {
    var dict = {};
    values.forEach(function(v) {
      return dict[v] = true;
    });
    return Object.keys(dict);
  }
}
function optimisedNestedAnds(node) {
  var args = node.$and;
  if (!args) {
    return;
  }
  var hasNestedAnds = !!args.find(function(it) {
    return it.$and;
  });
  if (!hasNestedAnds) {
    return;
  }
  var newArgs = args.reduce(function(result, current) {
    var and = current.$and;
    if (!and) {
      return __spreadArray(__spreadArray([], result, true), [current], false);
    }
    return __spreadArray(__spreadArray([], result, true), and, true);
  }, []);
  return { $and: newArgs };
}
function optimisedNestedOrs(node) {
  var args = node.$or;
  if (!args) {
    return;
  }
  var hasNestedOrs = !!args.find(function(it) {
    return it.$or;
  });
  if (!hasNestedOrs) {
    return;
  }
  var newArgs = args.reduce(function(result, current) {
    var or = current.$or;
    if (!or) {
      return __spreadArray(__spreadArray([], result, true), [current], false);
    }
    return __spreadArray(__spreadArray([], result, true), or, true);
  }, []);
  return { $or: newArgs };
}
function instanceOfIgnoredType(obj) {
  return obj instanceof Date;
}

// node_modules/@wix/filter-builder/dist/esm/filter-mixin.js
var filterMixin = function(Base) {
  if (Base === void 0) {
    Base = function() {
      function class_1() {
      }
      return class_1;
    }();
  }
  return function(_super) {
    __extends(class_2, _super);
    function class_2(obj) {
      if (obj === void 0) {
        obj = {};
      }
      var _this = _super.call(this, obj) || this;
      _this.filterTree = obj.filterTree || { $and: [] };
      _this.invalidArguments = obj.invalidArguments || [];
      _this.encoder = obj.encoder || {};
      return _this;
    }
    class_2.prototype.eq = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return this._binaryAnd("$eq", ".eq", args);
    };
    class_2.prototype.ne = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return this._binaryAnd("$ne", ".ne", args);
    };
    class_2.prototype.ge = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return this._AndLogicalEquivalence("$gte", ".ge", args);
    };
    class_2.prototype.gt = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return this._AndLogicalEquivalence("$gt", ".gt", args);
    };
    class_2.prototype.le = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return this._AndLogicalEquivalence("$lte", ".le", args);
    };
    class_2.prototype.lt = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return this._AndLogicalEquivalence("$lt", ".lt", args);
    };
    class_2.prototype.isNotEmpty = function(field) {
      var _a14 = this._filterValidator(".isNotEmpty").arityIsOne(arguments).validFieldName(field).validateAndAggregate(), newInvalidArguments = _a14[0], valid = _a14[1];
      if (valid) {
        return this.ne(field, null);
      }
      return this._copy(this.filterTree, newInvalidArguments);
    };
    class_2.prototype.isEmpty = function(field) {
      var _a14 = this._filterValidator(".isEmpty").arityIsOne(arguments).validFieldName(field).validateAndAggregate(), newInvalidArguments = _a14[0], valid = _a14[1];
      if (valid) {
        return this.eq(field, null);
      }
      return this._copy(this.filterTree, newInvalidArguments);
    };
    class_2.prototype.startsWith = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return this._AndStringOperand("$startsWith", ".startsWith", args);
    };
    class_2.prototype.endsWith = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return this._AndStringOperand("$endsWith", ".endsWith", args);
    };
    class_2.prototype.contains = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return this._AndStringOperand("$contains", ".contains", args);
    };
    class_2.prototype.hasSome = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return this._AndSetOperand("$hasSome", ".hasSome", args);
    };
    class_2.prototype.hasAll = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return this._AndSetOperand("$hasAll", ".hasAll", args);
    };
    class_2.prototype.or = function(orQuery) {
      var _a14 = this._filterValidator(".or").arityIsOne(arguments).isInstanceOfSameClass(orQuery).validateAndAggregate(), newInvalidArguments = _a14[0], valid = _a14[1];
      if (valid) {
        var prefix = isEmptyAnd(this.filterTree) ? [] : [this.filterTree];
        return this._copy(inAnd({ $or: __spreadArray(__spreadArray([], prefix, true), [orQuery.filterTree], false) }), newInvalidArguments.concat(orQuery.invalidArguments));
      } else {
        return this._copy(this.filterTree, newInvalidArguments);
      }
    };
    class_2.prototype.and = function(andQuery) {
      var _a14 = this._filterValidator(".and").arityIsOne(arguments).isInstanceOfSameClass(andQuery).validateAndAggregate(), newInvalidArguments = _a14[0], valid = _a14[1];
      if (valid) {
        var prefix = isEmptyAnd(this.filterTree) ? [] : [this.filterTree];
        return this._copy(inAnd.apply(void 0, __spreadArray(__spreadArray([], prefix, false), [andQuery.filterTree], false)), newInvalidArguments.concat(andQuery.invalidArguments));
      } else {
        return this._copy(this.filterTree, newInvalidArguments);
      }
    };
    class_2.prototype.not = function(notQuery) {
      var _a14 = this._filterValidator(".not").arityIsOne(arguments).isInstanceOfSameClass(notQuery).validateAndAggregate(), newInvalidArguments = _a14[0], valid = _a14[1];
      if (valid) {
        var newFilterTree = clone(this.filterTree);
        var notClause = { $not: [notQuery.filterTree] };
        var resultingFilter = inAndOptimized(newFilterTree, notClause);
        return this._copy(resultingFilter, newInvalidArguments.concat(notQuery.invalidArguments));
      } else {
        return this._copy(this.filterTree, newInvalidArguments);
      }
    };
    class_2.prototype.between = function(field, rangeStart, rangeEnd) {
      var _a14 = this._filterValidator(".between").arityIsThree(arguments).sameType(rangeStart, rangeEnd).typeIsStringNumberOrDate(rangeStart).typeIsStringNumberOrDate(rangeEnd).validateAndAggregate(), newInvalidArguments = _a14[0], valid = _a14[1];
      if (valid) {
        return this.ge(field, rangeStart).lt(field, rangeEnd);
      }
      return this._copy(this.filterTree, newInvalidArguments);
    };
    class_2.prototype.getFilterModel = function() {
      if (this.invalidArguments.length > 0) {
        throw new Error(this.invalidArguments.join(" "));
      }
      return optimisedQuery(this.filterTree);
    };
    class_2.prototype.setFilterModel = function(filterModel) {
      return this._copy(filterModel, []);
    };
    class_2.prototype._binaryAnd = function(filterOperatorSymbol, operatorName, args) {
      var _a14 = Array.prototype.slice.call(args), field = _a14[0], operand = _a14[1];
      var newInvalidArguments = this._filterValidator(operatorName).arityIsTwo(args).validFieldName(field).validateAndAggregate()[0];
      var newFilterTree = this._makeNewFilter(field, filterOperatorSymbol, operand);
      return this._copy(newFilterTree, newInvalidArguments);
    };
    class_2.prototype._AndLogicalEquivalence = function(filterOperatorSymbol, operatorName, args) {
      var _a14 = Array.prototype.slice.call(args), field = _a14[0], operand = _a14[1];
      var newInvalidArguments = this._filterValidator(operatorName).arityIsTwo(args).validFieldName(field).typeIsStringNumberOrDate(operand).validateAndAggregate()[0];
      var newFilterTree = this._makeNewFilter(field, filterOperatorSymbol, operand);
      return this._copy(newFilterTree, newInvalidArguments);
    };
    class_2.prototype._AndStringOperand = function(filterOperatorName, operatorName, args) {
      var _a14 = Array.prototype.slice.call(args), field = _a14[0], operand = _a14[1];
      var newInvalidArguments = this._filterValidator(operatorName).arityIsTwo(args).validFieldName(field).typeIsString(operand).validateAndAggregate()[0];
      var newFilterTree = this._makeNewFilter(field, filterOperatorName, operand);
      return this._copy(newFilterTree, newInvalidArguments);
    };
    class_2.prototype._AndSetOperand = function(filterOperatorName, operatorName, args) {
      var _a14 = Array.prototype.slice.call(args), field = _a14[0], rawOperands = _a14.slice(1);
      var operands = isArray4(rawOperands[0]) ? rawOperands[0] : rawOperands;
      var newInvalidArguments = this._filterValidator(operatorName).arityIsAtLeastTwo(args).validFieldName(field).typeIsStringNumberOrDateForAll(operands).validateAndAggregate()[0];
      var newFilterTree = this._makeNewFilter(field, filterOperatorName, operands);
      return this._copy(newFilterTree, newInvalidArguments);
    };
    class_2.prototype._makeNewFilter = function(field, filterOperatorName, operand) {
      var newFilterTree = clone(this.filterTree);
      var serializableOperand = operand === void 0 ? null : operand;
      var newFilter = this._buildFilter(field, filterOperatorName, serializableOperand);
      if (isArray4(newFilterTree.$and)) {
        newFilterTree.$and.push(newFilter);
        return newFilterTree;
      } else {
        var result = isEmptyObject(newFilterTree) ? inAnd(newFilter) : inAnd(newFilterTree, newFilter);
        return result;
      }
    };
    class_2.prototype._buildFilter = function(field, filterOperatorName, operand) {
      if (filterOperatorName !== "$eq") {
        var newFilter = {};
        newFilter[field] = {};
        newFilter[field][filterOperatorName] = this._encode(operand);
        return newFilter;
      } else {
        var newFilter = {};
        newFilter[field] = this._encode(operand);
        return newFilter;
      }
    };
    class_2.prototype._encode = function(operand) {
      if (isFunction(this.encoder)) {
        return this.encoder(operand);
      } else {
        return operand;
      }
    };
    class_2.prototype._copy = function(filterTree, invalidArguments) {
      return new this.constructor(__assign(__assign({}, this), { filterTree, invalidArguments }));
    };
    class_2.prototype._filterValidator = function(filterOperatorName) {
      return new FilterValidator(filterOperatorName, this.invalidArguments, this.constructor);
    };
    return class_2;
  }(Base);
};
function isConjunctiveFormFilter(filterTree) {
  return isArray4(filterTree.$and);
}
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}
function inAnd() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return {
    $and: args
  };
}
function inAndOptimized() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return {
    $and: args.reduce(function(aggr, val) {
      return isConjunctiveFormFilter(val) ? aggr.concat(val.$and) : aggr.concat([val]);
    }, [])
  };
}
function isEmptyAnd(node) {
  return node && node.$and && node.$and.length === 0;
}
var filter_mixin_default = filterMixin;

// node_modules/@wix/filter-builder/dist/esm/filter-builder.js
var FilterBuilder = function(_super) {
  __extends(FilterBuilder2, _super);
  function FilterBuilder2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  Object.defineProperty(FilterBuilder2.prototype, "constructorName", {
    get: function() {
      return "FilterBuilder";
    },
    enumerable: false,
    configurable: true
  });
  FilterBuilder2.prototype._build = function() {
    return this.getFilterModel();
  };
  return FilterBuilder2;
}(filter_mixin_default());

// node_modules/@wix/motion-edm-autogen-query-wrapper/dist/esm/PlatformizedQueryBuilder.js
var import_lodash23 = __toESM(require_lodash());

// node_modules/@wix/motion-edm-autogen-query-wrapper/dist/esm/renameFieldByPaths.js
var import_lodash22 = __toESM(require_lodash());
var fromCorvidName3 = corvidEntities.fromCorvidName;
var renameFieldByPaths = function(transformationPaths, fieldPath) {
  if (!(0, import_lodash22.isString)(fieldPath)) {
    return fieldPath;
  }
  var transformationPath = (0, import_lodash22.findKey)(transformationPaths, function(_3, path) {
    return path === fieldPath || fieldPath.startsWith("".concat(path, "."));
  });
  if (transformationPath) {
    return fieldPath.replace(transformationPath, transformationPaths[transformationPath]);
  }
  return fieldPath.split(".").map(function(segment) {
    return transformationPaths[segment] || fromCorvidName3(segment);
  }).join(".");
};

// node_modules/@wix/motion-edm-autogen-query-wrapper/dist/esm/PlatformizedQueryBuilder.js
var SortOrder;
(function(SortOrder3) {
  SortOrder3[SortOrder3["ASC"] = 0] = "ASC";
  SortOrder3[SortOrder3["DESC"] = 1] = "DESC";
})(SortOrder || (SortOrder = {}));
var WIX_DATA_EMPTY_FILTER = { $and: [] };
var toScalaCompatibleFilter = function(filter) {
  return (0, import_lodash23.isEqual)(filter, WIX_DATA_EMPTY_FILTER) ? {} : filter;
};
var PlatformizedQueryBuilder = (
  /** @class */
  function(_super) {
    __extends(PlatformizedQueryBuilder2, _super);
    function PlatformizedQueryBuilder2(obj) {
      var _this = _super.call(this, obj) || this;
      _this.transformationPaths = obj.transformationPaths;
      _this.sort = obj.sort || [];
      _this.paging = obj.paging || {};
      return _this;
    }
    PlatformizedQueryBuilder2.prototype.eq = function(field, value) {
      return _super.prototype.eq.call(this, this._transformQueryFieldName(field), value);
    };
    PlatformizedQueryBuilder2.prototype.ne = function(field, value) {
      return _super.prototype.ne.call(this, this._transformQueryFieldName(field), value);
    };
    PlatformizedQueryBuilder2.prototype.ge = function(field, value) {
      return _super.prototype.ge.call(this, this._transformQueryFieldName(field), value);
    };
    PlatformizedQueryBuilder2.prototype.gt = function(field, value) {
      return _super.prototype.gt.call(this, this._transformQueryFieldName(field), value);
    };
    PlatformizedQueryBuilder2.prototype.le = function(field, value) {
      return _super.prototype.le.call(this, this._transformQueryFieldName(field), value);
    };
    PlatformizedQueryBuilder2.prototype.lt = function(field, value) {
      return _super.prototype.lt.call(this, this._transformQueryFieldName(field), value);
    };
    PlatformizedQueryBuilder2.prototype.isNotEmpty = function(field) {
      return _super.prototype.isNotEmpty.call(this, this._transformQueryFieldName(field));
    };
    PlatformizedQueryBuilder2.prototype.isEmpty = function(field) {
      return _super.prototype.isEmpty.call(this, this._transformQueryFieldName(field));
    };
    PlatformizedQueryBuilder2.prototype.startsWith = function(field, value) {
      return _super.prototype.startsWith.call(this, this._transformQueryFieldName(field), value);
    };
    PlatformizedQueryBuilder2.prototype.endsWith = function(field, value) {
      return _super.prototype.endsWith.call(this, this._transformQueryFieldName(field), value);
    };
    PlatformizedQueryBuilder2.prototype.contains = function(field, value) {
      return _super.prototype.contains.call(this, this._transformQueryFieldName(field), value);
    };
    PlatformizedQueryBuilder2.prototype.hasSome = function(field) {
      var values = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
      }
      return _super.prototype.hasSome.apply(this, __spreadArray([this._transformQueryFieldName(field)], values, false));
    };
    PlatformizedQueryBuilder2.prototype.hasAll = function(field) {
      var values = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
      }
      return _super.prototype.hasAll.apply(this, __spreadArray([this._transformQueryFieldName(field)], values, false));
    };
    PlatformizedQueryBuilder2.prototype.between = function(field, rangeStart, rangeEnd) {
      return _super.prototype.between.call(this, this._transformQueryFieldName(field), rangeStart, rangeEnd);
    };
    PlatformizedQueryBuilder2.prototype.in = function(field, values) {
      return this._AndSetOperand("$in", ".in", [
        this._transformQueryFieldName(field),
        values
      ]);
    };
    PlatformizedQueryBuilder2.prototype.exists = function(field, value) {
      return this._binaryAnd("$exists", ".exists", [
        this._transformQueryFieldName(field),
        value
      ]);
    };
    PlatformizedQueryBuilder2.prototype.ascending = function() {
      var _a14;
      var _this = this;
      var fieldNames = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        fieldNames[_i] = arguments[_i];
      }
      (_a14 = this.sort).push.apply(_a14, fieldNames.map(function(fieldName) {
        return {
          fieldName: _this._transformQueryFieldName(fieldName),
          order: SortOrder[SortOrder.ASC]
        };
      }));
      return this;
    };
    PlatformizedQueryBuilder2.prototype.descending = function() {
      var _a14;
      var _this = this;
      var fieldNames = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        fieldNames[_i] = arguments[_i];
      }
      (_a14 = this.sort).push.apply(_a14, fieldNames.map(function(fieldName) {
        return {
          fieldName: _this._transformQueryFieldName(fieldName),
          order: SortOrder[SortOrder.DESC]
        };
      }));
      return this;
    };
    PlatformizedQueryBuilder2.prototype.skip = function(offset) {
      this.paging.offset = offset;
      return this;
    };
    PlatformizedQueryBuilder2.prototype.limit = function(limit) {
      this.paging.limit = limit;
      return this;
    };
    PlatformizedQueryBuilder2.prototype.build = function() {
      return {
        filter: toScalaCompatibleFilter(this.getFilterModel()),
        sort: this.sort,
        paging: this.paging
      };
    };
    PlatformizedQueryBuilder2.prototype._transformQueryFieldName = function(field) {
      return renameFieldByPaths(this.transformationPaths, field);
    };
    return PlatformizedQueryBuilder2;
  }(filter_mixin_default())
);

// node_modules/@wix/motion-edm-autogen-query-wrapper/dist/esm/wrapWithQueryBuilder.js
var _a13 = preset.query;
var ITEMS_RESULT_PROPERTY_NAME2 = _a13.ITEMS_RESULT_PROPERTY_NAME;
var PAGING_METADATA_RESULT_PROPERTY_NAME2 = _a13.PAGING_METADATA_RESULT_PROPERTY_NAME;
var PagingMethods2 = constants.PagingMethods;
var DEFAULT_LIMIT = 50;
var PlatformizedQueryMethodWrapper = (
  /** @class */
  function(_super) {
    __extends(PlatformizedQueryMethodWrapper2, _super);
    function PlatformizedQueryMethodWrapper2(obj) {
      var _this = _super.call(this, obj) || this;
      _this.func = obj.func;
      _this.requestTransformer = obj.requestTransformer;
      _this.responseTransformer = obj.responseTransformer;
      _this.errorTransformer = obj.errorTransformer;
      _this.pagingMethod = obj.pagingMethod;
      _this.cursor = obj.cursor;
      _this.builderOptions = obj.builderOptions;
      return _this;
    }
    PlatformizedQueryMethodWrapper2.prototype.find = function(options) {
      var _a14, _b, _c, _d;
      if (options === void 0) {
        options = {};
      }
      return __awaiter(this, void 0, void 0, function() {
        var query, request, response, _e, _f, items, _g, pagingMetadata_1, error_1;
        var _this = this;
        return __generator(this, function(_h) {
          switch (_h.label) {
            case 0:
              _h.trys.push([0, 2, , 3]);
              query = this._buildQuery();
              request = this.requestTransformer(query, options);
              return [4, this.func(request, __assign(__assign({}, options), this.builderOptions))];
            case 1:
              response = _h.sent();
              _e = this.responseTransformer(response), _f = ITEMS_RESULT_PROPERTY_NAME2, items = _e[_f], _g = PAGING_METADATA_RESULT_PROPERTY_NAME2, pagingMetadata_1 = _e[_g];
              if (this.pagingMethod === PagingMethods2.Offset) {
                return [2, new OffsetBasedIterator({
                  items,
                  fetchNextPage: function() {
                    return _this._copyWithNextPage().find(options);
                  },
                  fetchPrevPage: function() {
                    return _this._copyWithPrevPage().find(options);
                  },
                  offset: this._pagingOffset,
                  limit: this._pagingLimit,
                  totalCount: pagingMetadata_1 === null || pagingMetadata_1 === void 0 ? void 0 : pagingMetadata_1.total,
                  tooManyToCount: pagingMetadata_1 === null || pagingMetadata_1 === void 0 ? void 0 : pagingMetadata_1.tooManyToCount,
                  originQuery: this
                })];
              }
              return [2, new CursorBasedIterator({
                items,
                limit: this._pagingLimit,
                originQuery: this,
                fetchNextPage: function() {
                  var _a15, _b2;
                  return _this._copyWithCursor((_b2 = (_a15 = pagingMetadata_1 === null || pagingMetadata_1 === void 0 ? void 0 : pagingMetadata_1.cursors) === null || _a15 === void 0 ? void 0 : _a15.next) !== null && _b2 !== void 0 ? _b2 : "").find(options);
                },
                fetchPrevPage: function() {
                  var _a15, _b2;
                  return _this._copyWithCursor((_b2 = (_a15 = pagingMetadata_1 === null || pagingMetadata_1 === void 0 ? void 0 : pagingMetadata_1.cursors) === null || _a15 === void 0 ? void 0 : _a15.prev) !== null && _b2 !== void 0 ? _b2 : "").find(options);
                },
                prevCursor: (_b = (_a14 = pagingMetadata_1 === null || pagingMetadata_1 === void 0 ? void 0 : pagingMetadata_1.cursors) === null || _a14 === void 0 ? void 0 : _a14.prev) !== null && _b !== void 0 ? _b : "",
                nextCursor: (_d = (_c = pagingMetadata_1 === null || pagingMetadata_1 === void 0 ? void 0 : pagingMetadata_1.cursors) === null || _c === void 0 ? void 0 : _c.next) !== null && _d !== void 0 ? _d : ""
              })];
            case 2:
              error_1 = _h.sent();
              return [2, this.errorTransformer(error_1)];
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    PlatformizedQueryMethodWrapper2.prototype.skipTo = function(cursor) {
      return this._copyWithCursor(cursor);
    };
    PlatformizedQueryMethodWrapper2.prototype._copyWithCursor = function(cursor) {
      return new PlatformizedQueryMethodWrapper2(__assign(__assign({}, this), { cursor }));
    };
    PlatformizedQueryMethodWrapper2.prototype._buildQuery = function() {
      var _a14;
      var queryObject = this.build();
      if (this.pagingMethod === PagingMethods2.Cursor) {
        if (((_a14 = this.builderOptions) === null || _a14 === void 0 ? void 0 : _a14.cursorWithEmptyFilterAndSort) && this.cursor) {
          return {
            cursorPaging: { cursor: this.cursor, limit: this._pagingLimit }
          };
        }
        return {
          filter: queryObject.filter,
          sort: this.sort,
          cursorPaging: { cursor: this.cursor, limit: this._pagingLimit }
        };
      }
      return {
        filter: queryObject.filter,
        sort: this.sort,
        paging: { limit: this._pagingLimit, offset: this._pagingOffset }
      };
    };
    Object.defineProperty(PlatformizedQueryMethodWrapper2.prototype, "_pagingOffset", {
      get: function() {
        return this.paging.offset || 0;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(PlatformizedQueryMethodWrapper2.prototype, "_pagingLimit", {
      get: function() {
        return this.paging.limit === void 0 ? DEFAULT_LIMIT : this.paging.limit;
      },
      enumerable: false,
      configurable: true
    });
    PlatformizedQueryMethodWrapper2.prototype._copyWithOffsetChange = function(amount) {
      var nextPage = {
        offset: this._pagingOffset + amount,
        limit: this._pagingLimit
      };
      return new PlatformizedQueryMethodWrapper2(__assign(__assign({}, this), { paging: nextPage }));
    };
    PlatformizedQueryMethodWrapper2.prototype._copyWithNextPage = function() {
      return this._copyWithOffsetChange(this._pagingLimit);
    };
    PlatformizedQueryMethodWrapper2.prototype._copyWithPrevPage = function() {
      return this._copyWithOffsetChange(-this._pagingLimit);
    };
    return PlatformizedQueryMethodWrapper2;
  }(PlatformizedQueryBuilder)
);
var wrapWithQueryBuilder = function(_a14) {
  var func = _a14.func, requestTransformer = _a14.requestTransformer, responseTransformer = _a14.responseTransformer, errorTransformer = _a14.errorTransformer, pagingMethod = _a14.pagingMethod, transformationPaths = _a14.transformationPaths, _b = _a14.cursor, cursor = _b === void 0 ? void 0 : _b;
  return function(builderOptions) {
    if (builderOptions === void 0) {
      builderOptions = {};
    }
    return new PlatformizedQueryMethodWrapper({
      func,
      builderOptions,
      requestTransformer,
      responseTransformer,
      errorTransformer,
      pagingMethod,
      transformationPaths,
      cursor
    });
  };
};

// node_modules/@wix/data/build/es/src/data-v2-data-item.universal.js
var __awaiter6 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __verbose5 = false;
function __log5(...args) {
  __verbose5 && console.log(...args);
}
function __inspect5(obj) {
  return obj;
}
var _toVeloEntity5 = "$";
var _fromVeloEntity5 = "$";
var Environment;
(function(Environment2) {
  Environment2["LIVE"] = "LIVE";
  Environment2["SANDBOX"] = "SANDBOX";
})(Environment || (Environment = {}));
var Action;
(function(Action2) {
  Action2["UNKNOWN_ACTION"] = "UNKNOWN_ACTION";
  Action2["INSERTED"] = "INSERTED";
  Action2["UPDATED"] = "UPDATED";
})(Action || (Action = {}));
var SortOrder2;
(function(SortOrder3) {
  SortOrder3["ASC"] = "ASC";
  SortOrder3["DESC"] = "DESC";
})(SortOrder2 || (SortOrder2 = {}));
var BulkActionType;
(function(BulkActionType2) {
  BulkActionType2["UNKNOWN_ACTION_TYPE"] = "UNKNOWN_ACTION_TYPE";
  BulkActionType2["INSERT"] = "INSERT";
  BulkActionType2["UPDATE"] = "UPDATE";
  BulkActionType2["DELETE"] = "DELETE";
})(BulkActionType || (BulkActionType = {}));
var _aggregateDataItemsRequest2 = {};
var _aggregateDataItemsResponse2 = {};
var _bulkInsertDataItemReferencesRequest2 = {};
var _bulkInsertDataItemReferencesResponse2 = {};
var _bulkInsertDataItemsRequest2 = {};
var _bulkInsertDataItemsResponse2 = {};
var _bulkRemoveDataItemReferencesRequest2 = {};
var _bulkRemoveDataItemReferencesResponse2 = {};
var _bulkRemoveDataItemsRequest2 = {};
var _bulkRemoveDataItemsResponse2 = {};
var _bulkSaveDataItemsRequest2 = {};
var _bulkSaveDataItemsResponse2 = {};
var _bulkUpdateDataItemsRequest2 = {};
var _bulkUpdateDataItemsResponse2 = {};
var _countDataItemsRequest2 = {};
var _countDataItemsResponse2 = {};
var _getDataItemRequest2 = {};
var _getDataItemResponse2 = {};
var _insertDataItemReferenceRequest2 = {};
var _insertDataItemReferenceResponse2 = {};
var _insertDataItemRequest2 = {};
var _insertDataItemResponse2 = {};
var _isReferencedDataItemRequest2 = {};
var _isReferencedDataItemResponse2 = {};
var _queryDataItemsRequest2 = {};
var _queryDataItemsResponse2 = {};
var _queryDistinctValuesRequest2 = {};
var _queryDistinctValuesResponse2 = {};
var _queryReferencedDataItemsRequest2 = {};
var _queryReferencedDataItemsResponse2 = {};
var _removeDataItemReferenceRequest2 = {};
var _removeDataItemReferenceResponse2 = {};
var _removeDataItemRequest2 = {};
var _removeDataItemResponse2 = {};
var _replaceDataItemReferencesRequest2 = {};
var _replaceDataItemReferencesResponse2 = {};
var _saveDataItemRequest2 = {};
var _saveDataItemResponse2 = {};
var _truncateDataItemsRequest2 = {};
var _truncateDataItemsResponse2 = {};
var _updateDataItemRequest2 = {};
var _updateDataItemResponse2 = {};
function insertDataItem2(options) {
  var _a14, _b, _c;
  return __awaiter6(this, arguments, void 0, function* () {
    const requestTransformation = {
      dataCollectionId: "$[0].dataCollectionId",
      dataItem: "$[0].dataItem"
    };
    const responseTransformation = "$";
    const { httpClient, sideEffects } = arguments[1];
    const { toAmbassadorRequest } = serializer({
      rootSchema: _insertDataItemRequest2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [...["dataItem"]],
        transformation: _fromVeloEntity5
      },
      customTransformation: requestTransformation
    });
    const { fromJSON } = serializer({
      rootSchema: _insertDataItemResponse2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [...["dataItem"]],
        transformation: _toVeloEntity5
      },
      customTransformation: responseTransformation
    });
    const payload = toAmbassadorRequest([options]);
    const reqOpts = insertDataItem(payload);
    __log5(`"InsertDataItem" sending request with: ${__inspect5(reqOpts)}`);
    (_a14 = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSiteCall) === null || _a14 === void 0 ? void 0 : _a14.call(sideEffects);
    try {
      const result = yield httpClient.request(reqOpts);
      (_b = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSuccess) === null || _b === void 0 ? void 0 : _b.call(sideEffects, result);
      return fromJSON(result.data);
    } catch (err) {
      const transformedError = transformError2(err, requestTransformation, [
        "options"
      ]);
      (_c = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onError) === null || _c === void 0 ? void 0 : _c.call(sideEffects, err);
      throw transformedError;
    }
  });
}
function updateDataItem2(_id, options) {
  var _a14, _b, _c;
  return __awaiter6(this, arguments, void 0, function* () {
    const requestTransformation = {
      dataItem: { "*": "$[1].dataItem", id: "$[0]" },
      dataCollectionId: "$[1].dataCollectionId"
    };
    const responseTransformation = "$";
    const { httpClient, sideEffects } = arguments[2];
    const { toAmbassadorRequest } = serializer({
      rootSchema: _updateDataItemRequest2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [...["dataItem"]],
        transformation: _fromVeloEntity5
      },
      customTransformation: requestTransformation
    });
    const { fromJSON } = serializer({
      rootSchema: _updateDataItemResponse2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [...["dataItem"]],
        transformation: _toVeloEntity5
      },
      customTransformation: responseTransformation
    });
    const payload = toAmbassadorRequest([_id, options]);
    const reqOpts = updateDataItem(payload);
    __log5(`"UpdateDataItem" sending request with: ${__inspect5(reqOpts)}`);
    (_a14 = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSiteCall) === null || _a14 === void 0 ? void 0 : _a14.call(sideEffects);
    try {
      const result = yield httpClient.request(reqOpts);
      (_b = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSuccess) === null || _b === void 0 ? void 0 : _b.call(sideEffects, result);
      return fromJSON(result.data);
    } catch (err) {
      const transformedError = transformError2(err, requestTransformation, [
        "_id",
        "options"
      ]);
      (_c = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onError) === null || _c === void 0 ? void 0 : _c.call(sideEffects, err);
      throw transformedError;
    }
  });
}
function saveDataItem2(options) {
  var _a14, _b, _c;
  return __awaiter6(this, arguments, void 0, function* () {
    const requestTransformation = {
      dataCollectionId: "$[0].dataCollectionId",
      dataItem: "$[0].dataItem"
    };
    const responseTransformation = "$";
    const { httpClient, sideEffects } = arguments[1];
    const { toAmbassadorRequest } = serializer({
      rootSchema: _saveDataItemRequest2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [...["dataItem"]],
        transformation: _fromVeloEntity5
      },
      customTransformation: requestTransformation
    });
    const { fromJSON } = serializer({
      rootSchema: _saveDataItemResponse2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [...["dataItem"]],
        transformation: _toVeloEntity5
      },
      customTransformation: responseTransformation
    });
    const payload = toAmbassadorRequest([options]);
    const reqOpts = saveDataItem(payload);
    __log5(`"SaveDataItem" sending request with: ${__inspect5(reqOpts)}`);
    (_a14 = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSiteCall) === null || _a14 === void 0 ? void 0 : _a14.call(sideEffects);
    try {
      const result = yield httpClient.request(reqOpts);
      (_b = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSuccess) === null || _b === void 0 ? void 0 : _b.call(sideEffects, result);
      return fromJSON(result.data);
    } catch (err) {
      const transformedError = transformError2(err, requestTransformation, [
        "options"
      ]);
      (_c = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onError) === null || _c === void 0 ? void 0 : _c.call(sideEffects, err);
      throw transformedError;
    }
  });
}
function getDataItem2(dataItemId, options) {
  var _a14, _b, _c;
  return __awaiter6(this, arguments, void 0, function* () {
    const requestTransformation = {
      dataItemId: "$[0]",
      dataCollectionId: "$[1].dataCollectionId",
      consistentRead: "$[1].consistentRead"
    };
    const responseTransformation = "$.dataItem";
    const { httpClient, sideEffects } = arguments[2];
    const { toAmbassadorRequest } = serializer({
      rootSchema: _getDataItemRequest2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [],
        transformation: _fromVeloEntity5
      },
      customTransformation: requestTransformation
    });
    const { fromJSON } = serializer({
      rootSchema: _getDataItemResponse2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [...["dataItem"]],
        transformation: _toVeloEntity5
      },
      customTransformation: responseTransformation
    });
    const payload = toAmbassadorRequest([dataItemId, options]);
    const reqOpts = getDataItem(payload);
    __log5(`"GetDataItem" sending request with: ${__inspect5(reqOpts)}`);
    (_a14 = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSiteCall) === null || _a14 === void 0 ? void 0 : _a14.call(sideEffects);
    try {
      const result = yield httpClient.request(reqOpts);
      (_b = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSuccess) === null || _b === void 0 ? void 0 : _b.call(sideEffects, result);
      return fromJSON(result.data);
    } catch (err) {
      const transformedError = transformError2(err, requestTransformation, [
        "dataItemId",
        "options"
      ]);
      (_c = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onError) === null || _c === void 0 ? void 0 : _c.call(sideEffects, err);
      throw transformedError;
    }
  });
}
function removeDataItem2(dataItemId, options) {
  var _a14, _b, _c;
  return __awaiter6(this, arguments, void 0, function* () {
    const requestTransformation = {
      dataItemId: "$[0]",
      dataCollectionId: "$[1].dataCollectionId"
    };
    const responseTransformation = "$";
    const { httpClient, sideEffects } = arguments[2];
    const { toAmbassadorRequest } = serializer({
      rootSchema: _removeDataItemRequest2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [],
        transformation: _fromVeloEntity5
      },
      customTransformation: requestTransformation
    });
    const { fromJSON } = serializer({
      rootSchema: _removeDataItemResponse2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [...["dataItem"]],
        transformation: _toVeloEntity5
      },
      customTransformation: responseTransformation
    });
    const payload = toAmbassadorRequest([dataItemId, options]);
    const reqOpts = removeDataItem(payload);
    __log5(`"RemoveDataItem" sending request with: ${__inspect5(reqOpts)}`);
    (_a14 = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSiteCall) === null || _a14 === void 0 ? void 0 : _a14.call(sideEffects);
    try {
      const result = yield httpClient.request(reqOpts);
      (_b = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSuccess) === null || _b === void 0 ? void 0 : _b.call(sideEffects, result);
      return fromJSON(result.data);
    } catch (err) {
      const transformedError = transformError2(err, requestTransformation, [
        "dataItemId",
        "options"
      ]);
      (_c = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onError) === null || _c === void 0 ? void 0 : _c.call(sideEffects, err);
      throw transformedError;
    }
  });
}
function truncateDataItems2(options) {
  var _a14, _b, _c;
  return __awaiter6(this, arguments, void 0, function* () {
    const requestTransformation = { dataCollectionId: "$[0].dataCollectionId" };
    const responseTransformation = "$";
    const { httpClient, sideEffects } = arguments[1];
    const { toAmbassadorRequest } = serializer({
      rootSchema: _truncateDataItemsRequest2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [],
        transformation: _fromVeloEntity5
      },
      customTransformation: requestTransformation
    });
    const { fromJSON } = serializer({
      rootSchema: _truncateDataItemsResponse2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [],
        transformation: _toVeloEntity5
      },
      customTransformation: responseTransformation
    });
    const payload = toAmbassadorRequest([options]);
    const reqOpts = truncateDataItems(payload);
    __log5(`"TruncateDataItems" sending request with: ${__inspect5(reqOpts)}`);
    (_a14 = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSiteCall) === null || _a14 === void 0 ? void 0 : _a14.call(sideEffects);
    try {
      const result = yield httpClient.request(reqOpts);
      (_b = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSuccess) === null || _b === void 0 ? void 0 : _b.call(sideEffects, result);
      return fromJSON(result.data);
    } catch (err) {
      const transformedError = transformError2(err, requestTransformation, [
        "options"
      ]);
      (_c = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onError) === null || _c === void 0 ? void 0 : _c.call(sideEffects, err);
      throw transformedError;
    }
  });
}
function queryDataItems2(options) {
  const requestTransformation = { "*": "$[1]", query: "$[0]" };
  const responseTransformation = {
    items: "$.dataItems",
    pagingMetadata: "$.pagingMetadata"
  };
  const { httpClient, sideEffects } = arguments[1];
  const { toAmbassadorRequest } = serializer({
    rootSchema: _queryDataItemsRequest2,
    depSchemas: {},
    fqdnTransformation: {
      paths: [],
      transformation: _fromVeloEntity5
    },
    customTransformation: requestTransformation
  });
  const { fromJSON } = serializer({
    rootSchema: _queryDataItemsResponse2,
    depSchemas: {},
    fqdnTransformation: {
      paths: [...["Array#dataItems"]],
      transformation: _toVeloEntity5
    },
    customTransformation: responseTransformation
  });
  return wrapWithQueryBuilder({
    func: (payload) => __awaiter6(this, void 0, void 0, function* () {
      var _a14, _b, _c;
      const reqOpts = queryDataItems(Object.assign(Object.assign({}, payload), options));
      (_a14 = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSiteCall) === null || _a14 === void 0 ? void 0 : _a14.call(sideEffects);
      try {
        const result = yield httpClient.request(reqOpts);
        (_b = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSuccess) === null || _b === void 0 ? void 0 : _b.call(sideEffects, result);
        return result;
      } catch (err) {
        (_c = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onError) === null || _c === void 0 ? void 0 : _c.call(sideEffects, err);
        throw err;
      }
    }),
    requestTransformer: (...args) => toAmbassadorRequest(args),
    responseTransformer: ({ data }) => fromJSON(data),
    errorTransformer: (err) => {
      const transformedError = transformError2(err, requestTransformation);
      throw transformedError;
    },
    pagingMethod: "OFFSET",
    transformationPaths: resolveQueryFieldsTransformationPaths(_toVeloEntity5)
  })({ cursorWithEmptyFilterAndSort: true });
}
function aggregateDataItems2(options) {
  var _a14, _b, _c;
  return __awaiter6(this, arguments, void 0, function* () {
    const requestTransformation = {
      dataCollectionId: "$[0].dataCollectionId",
      initialFilter: "$[0].initialFilter",
      aggregation: "$[0].aggregation",
      finalFilter: "$[0].finalFilter",
      paging: "$[0].paging",
      cursorPaging: "$[0].cursorPaging",
      sort: "$[0].sort",
      returnTotalCount: "$[0].returnTotalCount",
      consistentRead: "$[0].consistentRead"
    };
    const responseTransformation = "$";
    const { httpClient, sideEffects } = arguments[1];
    const { toAmbassadorRequest } = serializer({
      rootSchema: _aggregateDataItemsRequest2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [],
        transformation: _fromVeloEntity5
      },
      customTransformation: requestTransformation
    });
    const { fromJSON } = serializer({
      rootSchema: _aggregateDataItemsResponse2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [],
        transformation: _toVeloEntity5
      },
      customTransformation: responseTransformation
    });
    const payload = toAmbassadorRequest([options]);
    const reqOpts = aggregateDataItems(payload);
    __log5(`"AggregateDataItems" sending request with: ${__inspect5(reqOpts)}`);
    (_a14 = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSiteCall) === null || _a14 === void 0 ? void 0 : _a14.call(sideEffects);
    try {
      const result = yield httpClient.request(reqOpts);
      (_b = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSuccess) === null || _b === void 0 ? void 0 : _b.call(sideEffects, result);
      return fromJSON(result.data);
    } catch (err) {
      const transformedError = transformError2(err, requestTransformation, [
        "options"
      ]);
      (_c = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onError) === null || _c === void 0 ? void 0 : _c.call(sideEffects, err);
      throw transformedError;
    }
  });
}
function countDataItems2(options) {
  var _a14, _b, _c;
  return __awaiter6(this, arguments, void 0, function* () {
    const requestTransformation = {
      dataCollectionId: "$[0].dataCollectionId",
      filter: "$[0].filter",
      consistentRead: "$[0].consistentRead"
    };
    const responseTransformation = "$";
    const { httpClient, sideEffects } = arguments[1];
    const { toAmbassadorRequest } = serializer({
      rootSchema: _countDataItemsRequest2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [],
        transformation: _fromVeloEntity5
      },
      customTransformation: requestTransformation
    });
    const { fromJSON } = serializer({
      rootSchema: _countDataItemsResponse2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [],
        transformation: _toVeloEntity5
      },
      customTransformation: responseTransformation
    });
    const payload = toAmbassadorRequest([options]);
    const reqOpts = countDataItems(payload);
    __log5(`"CountDataItems" sending request with: ${__inspect5(reqOpts)}`);
    (_a14 = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSiteCall) === null || _a14 === void 0 ? void 0 : _a14.call(sideEffects);
    try {
      const result = yield httpClient.request(reqOpts);
      (_b = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSuccess) === null || _b === void 0 ? void 0 : _b.call(sideEffects, result);
      return fromJSON(result.data);
    } catch (err) {
      const transformedError = transformError2(err, requestTransformation, [
        "options"
      ]);
      (_c = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onError) === null || _c === void 0 ? void 0 : _c.call(sideEffects, err);
      throw transformedError;
    }
  });
}
function queryDistinctValues2(options) {
  var _a14, _b, _c;
  return __awaiter6(this, arguments, void 0, function* () {
    const requestTransformation = {
      dataCollectionId: "$[0].dataCollectionId",
      fieldName: "$[0].fieldName",
      filter: "$[0].filter",
      order: "$[0].order",
      paging: "$[0].paging",
      cursorPaging: "$[0].cursorPaging",
      returnTotalCount: "$[0].returnTotalCount",
      consistentRead: "$[0].consistentRead"
    };
    const responseTransformation = "$";
    const { httpClient, sideEffects } = arguments[1];
    const { toAmbassadorRequest } = serializer({
      rootSchema: _queryDistinctValuesRequest2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [],
        transformation: _fromVeloEntity5
      },
      customTransformation: requestTransformation
    });
    const { fromJSON } = serializer({
      rootSchema: _queryDistinctValuesResponse2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [],
        transformation: _toVeloEntity5
      },
      customTransformation: responseTransformation
    });
    const payload = toAmbassadorRequest([options]);
    const reqOpts = queryDistinctValues(payload);
    __log5(`"QueryDistinctValues" sending request with: ${__inspect5(reqOpts)}`);
    (_a14 = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSiteCall) === null || _a14 === void 0 ? void 0 : _a14.call(sideEffects);
    try {
      const result = yield httpClient.request(reqOpts);
      (_b = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSuccess) === null || _b === void 0 ? void 0 : _b.call(sideEffects, result);
      return fromJSON(result.data);
    } catch (err) {
      const transformedError = transformError2(err, requestTransformation, [
        "options"
      ]);
      (_c = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onError) === null || _c === void 0 ? void 0 : _c.call(sideEffects, err);
      throw transformedError;
    }
  });
}
function bulkInsertDataItems2(options) {
  var _a14, _b, _c;
  return __awaiter6(this, arguments, void 0, function* () {
    const requestTransformation = {
      dataCollectionId: "$[0].dataCollectionId",
      dataItems: "$[0].dataItems",
      returnEntity: "$[0].returnEntity"
    };
    const responseTransformation = "$";
    const { httpClient, sideEffects } = arguments[1];
    const { toAmbassadorRequest } = serializer({
      rootSchema: _bulkInsertDataItemsRequest2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [...["Array#dataItems"]],
        transformation: _fromVeloEntity5
      },
      customTransformation: requestTransformation
    });
    const { fromJSON } = serializer({
      rootSchema: _bulkInsertDataItemsResponse2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [...["Array#results.dataItem"]],
        transformation: _toVeloEntity5
      },
      customTransformation: responseTransformation
    });
    const payload = toAmbassadorRequest([options]);
    const reqOpts = bulkInsertDataItems(payload);
    __log5(`"BulkInsertDataItems" sending request with: ${__inspect5(reqOpts)}`);
    (_a14 = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSiteCall) === null || _a14 === void 0 ? void 0 : _a14.call(sideEffects);
    try {
      const result = yield httpClient.request(reqOpts);
      (_b = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSuccess) === null || _b === void 0 ? void 0 : _b.call(sideEffects, result);
      return fromJSON(result.data);
    } catch (err) {
      const transformedError = transformError2(err, requestTransformation, [
        "options"
      ]);
      (_c = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onError) === null || _c === void 0 ? void 0 : _c.call(sideEffects, err);
      throw transformedError;
    }
  });
}
function bulkUpdateDataItems2(options) {
  var _a14, _b, _c;
  return __awaiter6(this, arguments, void 0, function* () {
    const requestTransformation = {
      dataCollectionId: "$[0].dataCollectionId",
      dataItems: "$[0].dataItems",
      returnEntity: "$[0].returnEntity"
    };
    const responseTransformation = "$";
    const { httpClient, sideEffects } = arguments[1];
    const { toAmbassadorRequest } = serializer({
      rootSchema: _bulkUpdateDataItemsRequest2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [...["Array#dataItems"]],
        transformation: _fromVeloEntity5
      },
      customTransformation: requestTransformation
    });
    const { fromJSON } = serializer({
      rootSchema: _bulkUpdateDataItemsResponse2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [...["Array#results.dataItem"]],
        transformation: _toVeloEntity5
      },
      customTransformation: responseTransformation
    });
    const payload = toAmbassadorRequest([options]);
    const reqOpts = bulkUpdateDataItems(payload);
    __log5(`"BulkUpdateDataItems" sending request with: ${__inspect5(reqOpts)}`);
    (_a14 = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSiteCall) === null || _a14 === void 0 ? void 0 : _a14.call(sideEffects);
    try {
      const result = yield httpClient.request(reqOpts);
      (_b = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSuccess) === null || _b === void 0 ? void 0 : _b.call(sideEffects, result);
      return fromJSON(result.data);
    } catch (err) {
      const transformedError = transformError2(err, requestTransformation, [
        "options"
      ]);
      (_c = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onError) === null || _c === void 0 ? void 0 : _c.call(sideEffects, err);
      throw transformedError;
    }
  });
}
function bulkSaveDataItems2(options) {
  var _a14, _b, _c;
  return __awaiter6(this, arguments, void 0, function* () {
    const requestTransformation = {
      dataCollectionId: "$[0].dataCollectionId",
      dataItems: "$[0].dataItems",
      returnEntity: "$[0].returnEntity"
    };
    const responseTransformation = "$";
    const { httpClient, sideEffects } = arguments[1];
    const { toAmbassadorRequest } = serializer({
      rootSchema: _bulkSaveDataItemsRequest2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [...["Array#dataItems"]],
        transformation: _fromVeloEntity5
      },
      customTransformation: requestTransformation
    });
    const { fromJSON } = serializer({
      rootSchema: _bulkSaveDataItemsResponse2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [...["Array#results.dataItem"]],
        transformation: _toVeloEntity5
      },
      customTransformation: responseTransformation
    });
    const payload = toAmbassadorRequest([options]);
    const reqOpts = bulkSaveDataItems(payload);
    __log5(`"BulkSaveDataItems" sending request with: ${__inspect5(reqOpts)}`);
    (_a14 = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSiteCall) === null || _a14 === void 0 ? void 0 : _a14.call(sideEffects);
    try {
      const result = yield httpClient.request(reqOpts);
      (_b = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSuccess) === null || _b === void 0 ? void 0 : _b.call(sideEffects, result);
      return fromJSON(result.data);
    } catch (err) {
      const transformedError = transformError2(err, requestTransformation, [
        "options"
      ]);
      (_c = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onError) === null || _c === void 0 ? void 0 : _c.call(sideEffects, err);
      throw transformedError;
    }
  });
}
function bulkRemoveDataItems2(options) {
  var _a14, _b, _c;
  return __awaiter6(this, arguments, void 0, function* () {
    const requestTransformation = {
      dataCollectionId: "$[0].dataCollectionId",
      dataItemIds: "$[0].dataItemIds"
    };
    const responseTransformation = "$";
    const { httpClient, sideEffects } = arguments[1];
    const { toAmbassadorRequest } = serializer({
      rootSchema: _bulkRemoveDataItemsRequest2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [],
        transformation: _fromVeloEntity5
      },
      customTransformation: requestTransformation
    });
    const { fromJSON } = serializer({
      rootSchema: _bulkRemoveDataItemsResponse2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [...["Array#results.dataItem"]],
        transformation: _toVeloEntity5
      },
      customTransformation: responseTransformation
    });
    const payload = toAmbassadorRequest([options]);
    const reqOpts = bulkRemoveDataItems(payload);
    __log5(`"BulkRemoveDataItems" sending request with: ${__inspect5(reqOpts)}`);
    (_a14 = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSiteCall) === null || _a14 === void 0 ? void 0 : _a14.call(sideEffects);
    try {
      const result = yield httpClient.request(reqOpts);
      (_b = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSuccess) === null || _b === void 0 ? void 0 : _b.call(sideEffects, result);
      return fromJSON(result.data);
    } catch (err) {
      const transformedError = transformError2(err, requestTransformation, [
        "options"
      ]);
      (_c = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onError) === null || _c === void 0 ? void 0 : _c.call(sideEffects, err);
      throw transformedError;
    }
  });
}
function queryReferencedDataItems2(options) {
  var _a14, _b, _c;
  return __awaiter6(this, arguments, void 0, function* () {
    const requestTransformation = {
      dataCollectionId: "$[0].dataCollectionId",
      referringItemId: "$[0].referringItemId",
      referringItemFieldName: "$[0].referringItemFieldName",
      order: "$[0].order",
      paging: "$[0].paging",
      cursorPaging: "$[0].cursorPaging",
      returnTotalCount: "$[0].returnTotalCount",
      consistentRead: "$[0].consistentRead"
    };
    const responseTransformation = "$";
    const { httpClient, sideEffects } = arguments[1];
    const { toAmbassadorRequest } = serializer({
      rootSchema: _queryReferencedDataItemsRequest2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [],
        transformation: _fromVeloEntity5
      },
      customTransformation: requestTransformation
    });
    const { fromJSON } = serializer({
      rootSchema: _queryReferencedDataItemsResponse2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [...["Array#results.dataItem"]],
        transformation: _toVeloEntity5
      },
      customTransformation: responseTransformation
    });
    const payload = toAmbassadorRequest([options]);
    const reqOpts = queryReferencedDataItems(payload);
    __log5(`"QueryReferencedDataItems" sending request with: ${__inspect5(reqOpts)}`);
    (_a14 = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSiteCall) === null || _a14 === void 0 ? void 0 : _a14.call(sideEffects);
    try {
      const result = yield httpClient.request(reqOpts);
      (_b = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSuccess) === null || _b === void 0 ? void 0 : _b.call(sideEffects, result);
      return fromJSON(result.data);
    } catch (err) {
      const transformedError = transformError2(err, requestTransformation, [
        "options"
      ]);
      (_c = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onError) === null || _c === void 0 ? void 0 : _c.call(sideEffects, err);
      throw transformedError;
    }
  });
}
function isReferencedDataItem2(options) {
  var _a14, _b, _c;
  return __awaiter6(this, arguments, void 0, function* () {
    const requestTransformation = {
      dataCollectionId: "$[0].dataCollectionId",
      referringItemFieldName: "$[0].referringItemFieldName",
      referringItemId: "$[0].referringItemId",
      referencedItemId: "$[0].referencedItemId",
      consistentRead: "$[0].consistentRead"
    };
    const responseTransformation = "$";
    const { httpClient, sideEffects } = arguments[1];
    const { toAmbassadorRequest } = serializer({
      rootSchema: _isReferencedDataItemRequest2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [],
        transformation: _fromVeloEntity5
      },
      customTransformation: requestTransformation
    });
    const { fromJSON } = serializer({
      rootSchema: _isReferencedDataItemResponse2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [],
        transformation: _toVeloEntity5
      },
      customTransformation: responseTransformation
    });
    const payload = toAmbassadorRequest([options]);
    const reqOpts = isReferencedDataItem(payload);
    __log5(`"IsReferencedDataItem" sending request with: ${__inspect5(reqOpts)}`);
    (_a14 = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSiteCall) === null || _a14 === void 0 ? void 0 : _a14.call(sideEffects);
    try {
      const result = yield httpClient.request(reqOpts);
      (_b = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSuccess) === null || _b === void 0 ? void 0 : _b.call(sideEffects, result);
      return fromJSON(result.data);
    } catch (err) {
      const transformedError = transformError2(err, requestTransformation, [
        "options"
      ]);
      (_c = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onError) === null || _c === void 0 ? void 0 : _c.call(sideEffects, err);
      throw transformedError;
    }
  });
}
function insertDataItemReference2(options) {
  var _a14, _b, _c;
  return __awaiter6(this, arguments, void 0, function* () {
    const requestTransformation = {
      dataCollectionId: "$[0].dataCollectionId",
      dataItemReference: "$[0].dataItemReference"
    };
    const responseTransformation = "$";
    const { httpClient, sideEffects } = arguments[1];
    const { toAmbassadorRequest } = serializer({
      rootSchema: _insertDataItemReferenceRequest2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [],
        transformation: _fromVeloEntity5
      },
      customTransformation: requestTransformation
    });
    const { fromJSON } = serializer({
      rootSchema: _insertDataItemReferenceResponse2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [],
        transformation: _toVeloEntity5
      },
      customTransformation: responseTransformation
    });
    const payload = toAmbassadorRequest([options]);
    const reqOpts = insertDataItemReference(payload);
    __log5(`"InsertDataItemReference" sending request with: ${__inspect5(reqOpts)}`);
    (_a14 = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSiteCall) === null || _a14 === void 0 ? void 0 : _a14.call(sideEffects);
    try {
      const result = yield httpClient.request(reqOpts);
      (_b = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSuccess) === null || _b === void 0 ? void 0 : _b.call(sideEffects, result);
      return fromJSON(result.data);
    } catch (err) {
      const transformedError = transformError2(err, requestTransformation, [
        "options"
      ]);
      (_c = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onError) === null || _c === void 0 ? void 0 : _c.call(sideEffects, err);
      throw transformedError;
    }
  });
}
function removeDataItemReference2(options) {
  var _a14, _b, _c;
  return __awaiter6(this, arguments, void 0, function* () {
    const requestTransformation = {
      dataCollectionId: "$[0].dataCollectionId",
      dataItemReference: "$[0].dataItemReference"
    };
    const responseTransformation = "$";
    const { httpClient, sideEffects } = arguments[1];
    const { toAmbassadorRequest } = serializer({
      rootSchema: _removeDataItemReferenceRequest2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [],
        transformation: _fromVeloEntity5
      },
      customTransformation: requestTransformation
    });
    const { fromJSON } = serializer({
      rootSchema: _removeDataItemReferenceResponse2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [],
        transformation: _toVeloEntity5
      },
      customTransformation: responseTransformation
    });
    const payload = toAmbassadorRequest([options]);
    const reqOpts = removeDataItemReference(payload);
    __log5(`"RemoveDataItemReference" sending request with: ${__inspect5(reqOpts)}`);
    (_a14 = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSiteCall) === null || _a14 === void 0 ? void 0 : _a14.call(sideEffects);
    try {
      const result = yield httpClient.request(reqOpts);
      (_b = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSuccess) === null || _b === void 0 ? void 0 : _b.call(sideEffects, result);
      return fromJSON(result.data);
    } catch (err) {
      const transformedError = transformError2(err, requestTransformation, [
        "options"
      ]);
      (_c = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onError) === null || _c === void 0 ? void 0 : _c.call(sideEffects, err);
      throw transformedError;
    }
  });
}
function bulkInsertDataItemReferences2(options) {
  var _a14, _b, _c;
  return __awaiter6(this, arguments, void 0, function* () {
    const requestTransformation = {
      dataCollectionId: "$[0].dataCollectionId",
      dataItemReferences: "$[0].dataItemReferences",
      returnEntity: "$[0].returnEntity"
    };
    const responseTransformation = "$";
    const { httpClient, sideEffects } = arguments[1];
    const { toAmbassadorRequest } = serializer({
      rootSchema: _bulkInsertDataItemReferencesRequest2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [],
        transformation: _fromVeloEntity5
      },
      customTransformation: requestTransformation
    });
    const { fromJSON } = serializer({
      rootSchema: _bulkInsertDataItemReferencesResponse2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [],
        transformation: _toVeloEntity5
      },
      customTransformation: responseTransformation
    });
    const payload = toAmbassadorRequest([options]);
    const reqOpts = bulkInsertDataItemReferences(payload);
    __log5(`"BulkInsertDataItemReferences" sending request with: ${__inspect5(reqOpts)}`);
    (_a14 = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSiteCall) === null || _a14 === void 0 ? void 0 : _a14.call(sideEffects);
    try {
      const result = yield httpClient.request(reqOpts);
      (_b = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSuccess) === null || _b === void 0 ? void 0 : _b.call(sideEffects, result);
      return fromJSON(result.data);
    } catch (err) {
      const transformedError = transformError2(err, requestTransformation, [
        "options"
      ]);
      (_c = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onError) === null || _c === void 0 ? void 0 : _c.call(sideEffects, err);
      throw transformedError;
    }
  });
}
function bulkRemoveDataItemReferences2(options) {
  var _a14, _b, _c;
  return __awaiter6(this, arguments, void 0, function* () {
    const requestTransformation = {
      dataCollectionId: "$[0].dataCollectionId",
      dataItemReferences: "$[0].dataItemReferences"
    };
    const responseTransformation = "$";
    const { httpClient, sideEffects } = arguments[1];
    const { toAmbassadorRequest } = serializer({
      rootSchema: _bulkRemoveDataItemReferencesRequest2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [],
        transformation: _fromVeloEntity5
      },
      customTransformation: requestTransformation
    });
    const { fromJSON } = serializer({
      rootSchema: _bulkRemoveDataItemReferencesResponse2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [],
        transformation: _toVeloEntity5
      },
      customTransformation: responseTransformation
    });
    const payload = toAmbassadorRequest([options]);
    const reqOpts = bulkRemoveDataItemReferences(payload);
    __log5(`"BulkRemoveDataItemReferences" sending request with: ${__inspect5(reqOpts)}`);
    (_a14 = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSiteCall) === null || _a14 === void 0 ? void 0 : _a14.call(sideEffects);
    try {
      const result = yield httpClient.request(reqOpts);
      (_b = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSuccess) === null || _b === void 0 ? void 0 : _b.call(sideEffects, result);
      return fromJSON(result.data);
    } catch (err) {
      const transformedError = transformError2(err, requestTransformation, [
        "options"
      ]);
      (_c = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onError) === null || _c === void 0 ? void 0 : _c.call(sideEffects, err);
      throw transformedError;
    }
  });
}
function replaceDataItemReferences2(options) {
  var _a14, _b, _c;
  return __awaiter6(this, arguments, void 0, function* () {
    const requestTransformation = {
      dataCollectionId: "$[0].dataCollectionId",
      referringItemFieldName: "$[0].referringItemFieldName",
      referringItemId: "$[0].referringItemId",
      newReferencedItemIds: "$[0].newReferencedItemIds"
    };
    const responseTransformation = "$";
    const { httpClient, sideEffects } = arguments[1];
    const { toAmbassadorRequest } = serializer({
      rootSchema: _replaceDataItemReferencesRequest2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [],
        transformation: _fromVeloEntity5
      },
      customTransformation: requestTransformation
    });
    const { fromJSON } = serializer({
      rootSchema: _replaceDataItemReferencesResponse2,
      depSchemas: {},
      fqdnTransformation: {
        paths: [],
        transformation: _toVeloEntity5
      },
      customTransformation: responseTransformation
    });
    const payload = toAmbassadorRequest([options]);
    const reqOpts = replaceDataItemReferences(payload);
    __log5(`"ReplaceDataItemReferences" sending request with: ${__inspect5(reqOpts)}`);
    (_a14 = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSiteCall) === null || _a14 === void 0 ? void 0 : _a14.call(sideEffects);
    try {
      const result = yield httpClient.request(reqOpts);
      (_b = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onSuccess) === null || _b === void 0 ? void 0 : _b.call(sideEffects, result);
      return fromJSON(result.data);
    } catch (err) {
      const transformedError = transformError2(err, requestTransformation, [
        "options"
      ]);
      (_c = sideEffects === null || sideEffects === void 0 ? void 0 : sideEffects.onError) === null || _c === void 0 ? void 0 : _c.call(sideEffects, err);
      throw transformedError;
    }
  });
}

// node_modules/@wix/data/build/es/src/data-v2-data-item.public.js
var __metadata5 = { PACKAGE_NAME: "@wix/data" };
function insertDataItem3(httpClient) {
  return (options) => insertDataItem2(
    options,
    // @ts-ignore
    { httpClient }
  );
}
function updateDataItem3(httpClient) {
  return (_id, options) => updateDataItem2(
    _id,
    options,
    // @ts-ignore
    { httpClient }
  );
}
function saveDataItem3(httpClient) {
  return (options) => saveDataItem2(
    options,
    // @ts-ignore
    { httpClient }
  );
}
function getDataItem3(httpClient) {
  return (dataItemId, options) => getDataItem2(
    dataItemId,
    options,
    // @ts-ignore
    { httpClient }
  );
}
function removeDataItem3(httpClient) {
  return (dataItemId, options) => removeDataItem2(
    dataItemId,
    options,
    // @ts-ignore
    { httpClient }
  );
}
function truncateDataItems3(httpClient) {
  return (options) => truncateDataItems2(
    options,
    // @ts-ignore
    { httpClient }
  );
}
function queryDataItems3(httpClient) {
  return (options) => queryDataItems2(
    options,
    // @ts-ignore
    { httpClient }
  );
}
function aggregateDataItems3(httpClient) {
  return (options) => aggregateDataItems2(
    options,
    // @ts-ignore
    { httpClient }
  );
}
function countDataItems3(httpClient) {
  return (options) => countDataItems2(
    options,
    // @ts-ignore
    { httpClient }
  );
}
function queryDistinctValues3(httpClient) {
  return (options) => queryDistinctValues2(
    options,
    // @ts-ignore
    { httpClient }
  );
}
function bulkInsertDataItems3(httpClient) {
  return (options) => bulkInsertDataItems2(
    options,
    // @ts-ignore
    { httpClient }
  );
}
function bulkUpdateDataItems3(httpClient) {
  return (options) => bulkUpdateDataItems2(
    options,
    // @ts-ignore
    { httpClient }
  );
}
function bulkSaveDataItems3(httpClient) {
  return (options) => bulkSaveDataItems2(
    options,
    // @ts-ignore
    { httpClient }
  );
}
function bulkRemoveDataItems3(httpClient) {
  return (options) => bulkRemoveDataItems2(
    options,
    // @ts-ignore
    { httpClient }
  );
}
function queryReferencedDataItems3(httpClient) {
  return (options) => queryReferencedDataItems2(
    options,
    // @ts-ignore
    { httpClient }
  );
}
function isReferencedDataItem3(httpClient) {
  return (options) => isReferencedDataItem2(
    options,
    // @ts-ignore
    { httpClient }
  );
}
function insertDataItemReference3(httpClient) {
  return (options) => insertDataItemReference2(
    options,
    // @ts-ignore
    { httpClient }
  );
}
function removeDataItemReference3(httpClient) {
  return (options) => removeDataItemReference2(
    options,
    // @ts-ignore
    { httpClient }
  );
}
function bulkInsertDataItemReferences3(httpClient) {
  return (options) => bulkInsertDataItemReferences2(
    options,
    // @ts-ignore
    { httpClient }
  );
}
function bulkRemoveDataItemReferences3(httpClient) {
  return (options) => bulkRemoveDataItemReferences2(
    options,
    // @ts-ignore
    { httpClient }
  );
}
function replaceDataItemReferences3(httpClient) {
  return (options) => replaceDataItemReferences2(
    options,
    // @ts-ignore
    { httpClient }
  );
}

// src/app.js
var wixClient = createClient({
  modules: { items: data_v2_data_item_public_exports },
  auth: OAuthStrategy({ clientId: "ba06617b-5a55-4353-8c00-8cb65f4e4aa3" })
});
async function queryDataItems4() {
  const { items } = await wixClient.items.queryDataItems().find();
  console.log(items);
}
queryDataItems4();
/*! Bundled license information:

lodash/lodash.js:
  (**
   * @license
   * Lodash <https://lodash.com/>
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)

js-yaml/dist/js-yaml.mjs:
  (*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT *)
*/
