import { Configuration } from "webpack";
import jsLoader from "../babel/jsLoader";
import plugin from "../babel/plugin";
const path = require("path");
import { UConfig } from "../types/index";


export default (config: UConfig): Configuration => {

    const {
        entry = './index.js',
        mode = 'development',
    } = config;

    return {
        entry,
        mode,
        output: {
            path: path.join(process.cwd(), 'dist'),
            filename: 'bundle.[contenthash].js',
        },
        target: 'web',
        stats: 'errors-only',
        resolve: {
            extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.vue', '.css'],
        },
        module: {
            rules: [
                ...jsLoader(config)
            ]
        },
        plugins: [
            ...plugin(config)
        ]
    }
}