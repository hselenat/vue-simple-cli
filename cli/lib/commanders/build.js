"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _webpack = _interopRequireDefault(require("webpack"));
var _config = _interopRequireDefault(require("../webpack/config.prod"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var process = require('process');
var _default = exports["default"] = function _default(config) {
  var compiler = (0, _webpack["default"])((0, _config["default"])(config));
  if (!compiler) {
    console.error("Failed to create webpack compiler");
    process.exit(1);
  }
  compiler.run(function (err, stats) {
    if (err) {
      process.exit(1);
    }
  });
};