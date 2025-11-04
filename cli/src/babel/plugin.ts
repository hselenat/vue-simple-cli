import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { ProgressPlugin } from 'progress-bar-webpack-plugin';


import { UConfig } from '../types';


 
 export default (config: UConfig) => {
    return [
        new CleanWebpackPlugin(), // 清空output目录
        new HtmlWebpackPlugin({
         templateContent: "<div id='root'/>"
        }),
        new ProgressPlugin(), // 输出打包信息
        new MiniCssExtractPlugin({
            // 输出css文件名称，开发环境，不要带hash，方便热更新，生产环境，带hash，防止缓存问题
            filename: config.mode === 'development' ? 'bundle.css' : 'bundle.[contenthash].css',
        })
    ]
 }