export default pluginCreator;
export type StringAstNode = {
    type: string;
    value: string;
} | {
    type: string;
    value: string;
} | {
    type: string;
    value: string;
} | {
    type: string;
    value: string;
};
export type StringAst = {
    nodes: StringAstNode[];
    types: {
        escapedSingleQuote: number;
        escapedDoubleQuote: number;
        singleQuote: number;
        doubleQuote: number;
    };
    quotes: boolean;
};
export type PostCssNormalizeStringOptions = {
    preferredQuote?: 'double' | 'single';
};
/** @typedef {{preferredQuote?: 'double' | 'single'}} PostCssNormalizeStringOptions */
/**
 * @type {import('postcss').PluginCreator<PostCssNormalizeStringOptions>}
 * @param {PostCssNormalizeStringOptions} opts
 * @return {import('postcss').Plugin}
 */
declare function pluginCreator(opts: PostCssNormalizeStringOptions): import('postcss').Plugin;
declare namespace pluginCreator {
    const postcss: true;
}
