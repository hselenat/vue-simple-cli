import { Configuration } from "webpack";
import { UConfig } from './../types/index';
import jsLoader from "../babel/jsLoader";
import plugin from "../babel/plugin";

const path = require("path");   

export default (config: UConfig): Configuration => {
    const {
        mode= "production",
        entry= './index.js',
    } = config;
    
    return {
        mode,
        entry,
        output: {
            path: path.join(process.cwd(), 'dist'),
            filename: 'bundle.[contenthash].js',
        },
        target: 'web',
        stats: 'errors-only',
        resolve: {
            extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.css'],
        },
        module: {
            rules: [
                ...jsLoader(config)
            ]
        },
        plugins: [...plugin(config)]
    }
}