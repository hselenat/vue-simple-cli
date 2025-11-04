"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _jsLoader = _interopRequireDefault(require("../babel/jsLoader"));
var _plugin = _interopRequireDefault(require("../babel/plugin"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var path = require("path");
var _default = exports["default"] = function _default(config) {
  var _config$entry = config.entry,
    entry = _config$entry === void 0 ? './index.js' : _config$entry,
    _config$mode = config.mode,
    mode = _config$mode === void 0 ? 'development' : _config$mode;
  return {
    entry: entry,
    mode: mode,
    output: {
      path: path.join(process.cwd(), 'dist'),
      filename: 'bundle.[contenthash].js'
    },
    target: 'web',
    stats: 'errors-only',
    resolve: {
      extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.vue', '.css']
    },
    module: {
      rules: _toConsumableArray((0, _jsLoader["default"])(config))
    },
    plugins: _toConsumableArray((0, _plugin["default"])(config))
  };
};