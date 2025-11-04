"use strict";

var _commander = require("commander");
var _start = _interopRequireDefault(require("./commanders/start"));
var _build = _interopRequireDefault(require("./commanders/build"));
var _init = _interopRequireDefault(require("./commanders/init"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } // console.log("Hello World from cli");
var pkg = require("../package.json");
var cwd = process.cwd();
var fs = require('fs');

// 获取命令执行的相对路径
var userPkgPath = "".concat(cwd, "/package.json");

// 暴露config给开发者使用
var config = {
  port: 9000,
  entry: './index.js',
  cwd: process.cwd()
};

// 读取用户配置
if (fs.existsSync(userPkgPath)) {
  var userConfig = require(userPkgPath).vue_simple_cli || {};
  config = _objectSpread(_objectSpread({}, config), userConfig);
}

// 1. 定义 -v / --version 命令 查看版本号
_commander.program.version("\u5F53\u524D\u7248\u672C\uFF1A".concat(pkg.version), "-v, --version", "查看版本号");

// 2. 定义 init 命令 <name> 初始化项目
_commander.program.command('init').description('初始化项目').option('-v, --vue', '初始化vue项目').option('-t, --typescript', '初始化typescript项目').action(function (args) {
  console.log('init args', _objectSpread(_objectSpread({}, config), args));
  (0, _init["default"])(_objectSpread(_objectSpread({}, config), args));
});

// 3. start 命令 启动项目
_commander.program.command('start').description('启动项目').option('-m, --mock', '启动mock服务').option('-p, --port <port>', '启动端口').action(function (args) {
  // console.log('start args',args);
  (0, _start["default"])(_objectSpread({}, config));
});

// 4. build 命令 打包项目
_commander.program.command('build').description('打包项目').option('-m, --mock', '打包mock服务').option('-p, --port <port>', '打包端口').action(function (args) {
  // console.log('build args', args);
  (0, _build["default"])(config);
});

// 5. publish
// 做git标准检查（husky），跑单测，自动化执行add，commit push，执行自动构建（build）
_commander.program.command('publish').description('发布项目').option('-m, --mock', '发布mock服务').option('-p, --port <port>', '发布端口').action(function (args) {
  console.log('publish args', args);
});
_commander.program.parse(process.argv);