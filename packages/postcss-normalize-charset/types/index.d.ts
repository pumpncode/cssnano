export default pluginCreator;
export type PostcssNormalizeCharsetOptions = {
    add: boolean;
};
/**
 * @typedef {{add: boolean}} PostcssNormalizeCharsetOptions
 */
/**
 * @type {import('postcss').PluginCreator<PostcssNormalizeCharsetOptions>}
 * @param {PostcssNormalizeCharsetOptions} opts
 * @return {import('postcss').Plugin}
 */
declare function pluginCreator(opts?: PostcssNormalizeCharsetOptions): import('postcss').Plugin;
declare namespace pluginCreator {
    const postcss: true;
}
