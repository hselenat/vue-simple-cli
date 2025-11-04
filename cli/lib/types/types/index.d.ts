import { Configuration } from "webpack";
export interface IConfig {
    port: number;
    entry: string;
    cwd: string;
    mock?: boolean;
    mode?: "development" | "production" | "none";
}
export interface ArgsConfig {
    react?: boolean;
    typescript?: boolean;
    vue?: boolean;
}
export type UConfig = ArgsConfig & IConfig;
export interface WebpackConfig extends Configuration {
    devServer?: {
        port?: number;
        open?: boolean;
        hot?: boolean;
        historyApiFallback?: boolean;
        proxy?: any;
    };
}
