export default pluginCreator;
export type Options = {
    startIndex?: number;
};
/** @typedef {{startIndex?: number}} Options */
/**
 * @type {import('postcss').PluginCreator<Options>}
 * @param {Options} opts
 * @return {import('postcss').Plugin}
 */
declare function pluginCreator(opts?: Options): import('postcss').Plugin;
declare namespace pluginCreator {
    const postcss: true;
}
