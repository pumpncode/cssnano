export default pluginCreator;
export type PostcssNormalizeCharsetOptions = {
    add: boolean;
};
/**
 * @typedef {{add: boolean}} PostcssNormalizeCharsetOptions
 */
/** @param {PostcssNormalizeCharsetOptions} opts */
declare function pluginCreator(opts?: PostcssNormalizeCharsetOptions): {
    postcssPlugin: string;
    /**
     * @param {import('postcss').Root} css
     * @param {import('postcss').Helpers} helpers
     */
    OnceExit(css: import('postcss').Root, { AtRule }: import('postcss').Helpers): void;
};
declare namespace pluginCreator {
    const postcss: boolean;
}
