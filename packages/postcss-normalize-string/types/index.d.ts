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
export type Options = {
    preferredQuote?: 'double' | 'single';
};
/** @typedef {{preferredQuote?: 'double' | 'single'}} Options */
/**
 * @type {import('postcss').PluginCreator<Options>}
 * @param {Options} opts
 * @return {import('postcss').Plugin}
 */
declare function pluginCreator(opts: Options): import('postcss').Plugin;
declare namespace pluginCreator {
    const postcss: true;
}
