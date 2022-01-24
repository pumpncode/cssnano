export default pluginCreator;
export type Options = {
    add: boolean;
};
/**
 * @typedef {{add: boolean}} Options
 */
/**
 * @type {import('postcss').PluginCreator<Options>}
 * @param {Options} opts
 * @return {import('postcss').Plugin}
 */
declare function pluginCreator(opts?: Options): import('postcss').Plugin;
declare namespace pluginCreator {
    const postcss: true;
}
