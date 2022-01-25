export default pluginCreator;
export type Options = {
    lint?: boolean;
};
/** @typedef {{lint?: boolean}} Options */
/**
 * @type {import('postcss').PluginCreator<Options>}
 * @param {Options} opts
 * @return {import('postcss').Plugin}
 */
declare function pluginCreator(opts?: Options): import('postcss').Plugin;
declare namespace pluginCreator {
    function detect(node: import("postcss").Node): boolean;
    const postcss: true;
}
