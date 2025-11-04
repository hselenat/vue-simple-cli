import { Configuration } from "webpack";

export interface IConfig {
    port: number,
    entry: string,
    cwd: string,
    mock?: boolean,
    mode?: "development" | "production" | "none";
}

export interface ArgsConfig { 
    typescript?: boolean,
    vue?: boolean,

}

export type UConfig = ArgsConfig & IConfig;

export interface WebpackConfig {
    (config: UConfig): Configuration
}