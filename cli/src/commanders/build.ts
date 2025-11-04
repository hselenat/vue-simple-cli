import Webpack from 'webpack'
import webpackConfig from '../webpack/config.prod'
import { UConfig } from '../types'
const process = require('process')
export default (config: UConfig) => {
    const compiler = Webpack(webpackConfig(config))
    if (!compiler) {
        console.error("Failed to create webpack compiler");
        process.exit(1);
    }
    compiler!.run((err, stats) => {
        if (err) {
           process.exit(1)
        }
    })
}


