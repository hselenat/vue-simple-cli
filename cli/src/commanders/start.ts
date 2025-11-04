// 运行命令 
import Webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import path from 'path';
import getDevConfig from '../webpack/config.dev';
import { UConfig } from '../types';

export default (config: UConfig) => {
    const {
        port = 9000,
        entry = './index.js',
        mode = 'development',
        cwd = process.cwd(),
    } = config;

    const host = '0.0.0.0'; // 允许局域网访问

    const webpackConfig = getDevConfig(config);
    const devServer = {
        port,
        host,
        open: true,  
        compress: true,
        hot: true,
        static: {
            directory: path.join(cwd, 'dist'),
        },

    }

    const compiler = Webpack(webpackConfig);
    if (!compiler) {
        console.error("Failed to create webpack compiler");
        return;
    }
    const server = new WebpackDevServer(devServer, compiler);
    server.startCallback((err) => {
        if (err) {
            console.log("error: ", err);
        }
    })
}