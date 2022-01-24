export default pluginCreator;
export type Options = normalize.Options;
/** @typedef {normalize.Options} Options */
/**
 * @type {import('postcss').PluginCreator<Options>}
 * @param {Options} opts
 * @return {import('postcss').Plugin}
 */
declare function pluginCreator(opts: Options): import('postcss').Plugin;
declare namespace pluginCreator {
    const postcss: true;
}
import normalize from "normalize-url";
