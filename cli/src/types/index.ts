import { Configuration } from "webpack";

export interface IConfig {
    /** 端口号 */
    port: number,
    /** 入口文件 */
    entry: string,
    /** 输出文件 */
    cwd: string,
    /** 是否mock数据 */
    mock?: boolean,
    /** 开发模式，生产模式或其他 */
    mode?: "development" | "production" | "none";
}

export interface ArgsConfig { 
    /** 是否使用ts */
    typescript?: boolean,
    /** 是否使用vue */
    vue?: boolean,

}

// 合并后的配置
export type UConfig =  IConfig & ArgsConfig;

// webpack配置
export interface WebpackConfig {
    (config: UConfig): Configuration
}