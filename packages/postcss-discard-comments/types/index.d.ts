export default pluginCreator;
export type PostCssRemoveCommentsOptions = {
    removeAll?: boolean | undefined;
    removeAllButFirst?: boolean | undefined;
    remove?: ((s: string) => boolean) | undefined;
};
/** @typedef {object} PostCssRemoveCommentsOptions
 *  @property {boolean=} removeAll
 *  @property {boolean=} removeAllButFirst
 *  @property {(s: string) => boolean=} remove
 */
/**
 * @type {import('postcss').PluginCreator<PostCssRemoveCommentsOptions>}
 * @param {PostCssRemoveCommentsOptions} opts
 * @return {import('postcss').Plugin}
 */
declare function pluginCreator(opts?: PostCssRemoveCommentsOptions): import('postcss').Plugin;
declare namespace pluginCreator {
    const postcss: true;
}
