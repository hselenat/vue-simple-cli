"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _fsExtra = _interopRequireDefault(require("fs-extra"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// 可以选择从git 去拉取模版(推荐使用这个) 方便模版维护
// 也可以选择从CDN/OSS 下载模版
// 也可以在插件内部内置模版, 初始化的时候从插件copy模版到用户目录
var _default = exports["default"] = function _default(config) {
  var template = 'vue'; // 默认是vue模版
  if (config.typescript) {
    template = 'typescript';
  }
  // 最简单的方法是从本地获取，也可以从git上download下来，也可以从CDN/OSS上下载
  var templatePath = _path["default"].join(__dirname, "../../templates/".concat(template));
  // 用户执行目录
  var targetPath = config.cwd;
  _fsExtra["default"].copy(templatePath, targetPath, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('初始化成功');
    }
  });
};