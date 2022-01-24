export default pluginCreator;
export type Options = {
    precision: boolean | number;
    angle?: boolean;
    time?: boolean;
    length?: boolean;
};
/**
 * @typedef {{precision: boolean | number, angle?: boolean, time?: boolean, length?: boolean}} Options */
/**
 * @type {import('postcss').PluginCreator<Options>}
 * @param {Options} opts
 * @return {import('postcss').Plugin}
 */
declare function pluginCreator(opts?: Options): import('postcss').Plugin;
declare namespace pluginCreator {
    const postcss: true;
}
