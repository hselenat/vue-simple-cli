"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _miniCssExtractPlugin = _interopRequireDefault(require("mini-css-extract-plugin"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// 需要处理，loader的路径 都是开发者实际项目中的路径，所以需要使用path.resolve来处理
var _default = exports["default"] = function _default(config) {
  return [
  // 转译js
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: require.resolve('babel-loader'),
      options: {
        presets: [[require.resolve('@babel/preset-env'), {
          targets: {
            browsers: ['last 2 versions', '> 1%']
          }
        }], require.resolve('@babel/preset-typescript'), require.resolve('@babel/preset-vue')]
      }
    }
  }, {
    test: /ts|tsx$/,
    exclude: /node_modules/,
    use: [{
      loader: require.resolve('babel-loader'),
      options: {
        presets: [require.resolve('@babel/preset-env'), require.resolve('@babel/preset-typescript'), require.resolve('@babel/preset-vue')]
      }
    }, {
      loader: require.resolve('ts-loader'),
      options: {
        context: config.cwd // 指定文件目录为开发者目录
      }
    }]
  }, {
    test: /\.(png|jpeg?g|gif)$/i,
    exclude: /node_modules/,
    use: [require.resolve('file-loader')]
  }, {
    test: /\.css$/,
    exclude: /node_modules/,
    use: [_miniCssExtractPlugin["default"].loader, require.resolve('css-loader')]
  }, {
    test: /\.less$/,
    exclude: /node_modules/,
    use: [_miniCssExtractPlugin["default"].loader, require.resolve('css-loader'), require.resolve('less-loader')]
  }, {
    test: /\.scss$/,
    exclude: /node_modules/,
    use: [_miniCssExtractPlugin["default"].loader, require.resolve('css-loader'), require.resolve('sass-loader')]
  }];
};