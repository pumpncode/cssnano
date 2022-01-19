export default pluginCreator;
export type PostCssZindexOptions = {
    startIndex?: number;
};
/** @typedef {{startIndex?: number}} PostCssZindexOptions */
/**
 * @type {import('postcss').PluginCreator<PostCssZindexOptions>}
 * @param {PostCssZindexOptions} opts
 * @return {import('postcss').Plugin}
 */
declare function pluginCreator(opts?: PostCssZindexOptions): import('postcss').Plugin;
declare namespace pluginCreator {
    const postcss: true;
}
