export default cssnanoPlugin;
export type Preset = string | [string, Record<string, any>] | Function | {
    plugins: unknown[];
};
export type Options = {
    plugins?: (import('postcss').Plugin | string)[];
    preset?: Preset;
    configFile?: string;
};
/**
 * @typedef {{plugins?: (import('postcss').Plugin | string)[], preset?: Preset, configFile?: string}} Options
 */
/**
 * @type {import('postcss').PluginCreator<Record<string, any>>}
 */
declare const cssnanoPlugin: import('postcss').PluginCreator<Record<string, any>>;
