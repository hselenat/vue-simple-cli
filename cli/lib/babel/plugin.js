"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _htmlWebpackPlugin = _interopRequireDefault(require("html-webpack-plugin"));
var _cleanWebpackPlugin = require("clean-webpack-plugin");
var _miniCssExtractPlugin = _interopRequireDefault(require("mini-css-extract-plugin"));
var _progressBarWebpackPlugin = require("progress-bar-webpack-plugin");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var _default = exports["default"] = function _default(config) {
  return [new _cleanWebpackPlugin.CleanWebpackPlugin(),
  // 清空output目录
  new _htmlWebpackPlugin["default"]({
    templateContent: "<div id='root'/>"
  }), new _progressBarWebpackPlugin.ProgressPlugin(),
  // 输出打包信息
  new _miniCssExtractPlugin["default"]({
    // 输出css文件名称，开发环境，不要带hash，方便热更新，生产环境，带hash，防止缓存问题
    filename: config.mode === 'development' ? 'bundle.css' : 'bundle.[contenthash].css'
  })];
};