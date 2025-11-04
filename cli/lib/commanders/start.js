"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _webpack = _interopRequireDefault(require("webpack"));
var _webpackDevServer = _interopRequireDefault(require("webpack-dev-server"));
var _path = _interopRequireDefault(require("path"));
var _config = _interopRequireDefault(require("../webpack/config.dev"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// 运行命令 
var _default = exports["default"] = function _default(config) {
  var _config$port = config.port,
    port = _config$port === void 0 ? 9000 : _config$port,
    _config$entry = config.entry,
    entry = _config$entry === void 0 ? './index.js' : _config$entry,
    _config$mode = config.mode,
    mode = _config$mode === void 0 ? 'development' : _config$mode,
    _config$cwd = config.cwd,
    cwd = _config$cwd === void 0 ? process.cwd() : _config$cwd;
  var host = '0.0.0.0'; // 允许局域网访问

  var webpackConfig = (0, _config["default"])(config);
  var devServer = {
    port: port,
    host: host,
    open: true,
    compress: true,
    hot: true,
    "static": {
      directory: _path["default"].join(cwd, 'dist')
    }
  };
  var compiler = (0, _webpack["default"])(webpackConfig);
  if (!compiler) {
    console.error("Failed to create webpack compiler");
    return;
  }
  var server = new _webpackDevServer["default"](devServer, compiler);
  server.startCallback(function (err) {
    if (err) {
      console.log("error: ", err);
    }
  });
};