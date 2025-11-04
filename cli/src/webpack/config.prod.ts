import commonConfig from './config.com';
import { UConfig } from '../types';
import { Configuration } from "webpack";

export default (config: UConfig): Configuration => {
    return commonConfig({ ...config, mode: 'production' })
}