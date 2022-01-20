export default pluginCreator;
export type PostCssDiscardUnusedOptions = {
    fontFace?: boolean;
    counterStyle?: boolean;
    keyframes?: boolean;
    namespace?: boolean;
};
/**@typedef {{fontFace?: boolean, counterStyle?: boolean, keyframes?: boolean, namespace?: boolean}} PostCssDiscardUnusedOptions */
/**
 * @type {import('postcss').PluginCreator<PostCssDiscardUnusedOptions>}
 * @param {PostCssDiscardUnusedOptions} opts
 * @return {import('postcss').Plugin}
 */
declare function pluginCreator(opts: PostCssDiscardUnusedOptions): import('postcss').Plugin;
declare namespace pluginCreator {
    const postcss: true;
}
