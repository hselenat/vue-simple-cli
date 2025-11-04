import { UConfig } from '../types';
declare const _default: (config: UConfig) => ({
    test: RegExp;
    exclude: RegExp;
    use: {
        loader: string;
        options: {
            presets: (string | (string | {
                targets: {
                    browsers: string[];
                };
            })[])[];
        };
    };
} | {
    test: RegExp;
    exclude: RegExp;
    use: ({
        loader: string;
        options: {
            presets: string[];
            context?: undefined;
        };
    } | {
        loader: string;
        options: {
            context: string;
            presets?: undefined;
        };
    })[];
} | {
    test: RegExp;
    exclude: RegExp;
    use: string[];
})[];
export default _default;
