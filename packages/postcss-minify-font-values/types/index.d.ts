export default pluginCreator;
export type PostCssMinifyFontValueOptions = {
    removeAfterKeyword?: boolean;
    removeDuplicates?: boolean;
    removeQuotes?: boolean;
};
/** @typedef {{removeAfterKeyword?: boolean, removeDuplicates?: boolean, removeQuotes?: boolean}} PostCssMinifyFontValueOptions */
/**
 * @type {import('postcss').PluginCreator<PostCssMinifyFontValueOptions>}
 * @param {PostCssMinifyFontValueOptions} opts
 * @return {import('postcss').Plugin}
 */
declare function pluginCreator(opts: PostCssMinifyFontValueOptions): import('postcss').Plugin;
declare namespace pluginCreator {
    const postcss: true;
}
