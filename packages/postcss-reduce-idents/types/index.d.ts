export default pluginCreator;
export type Options = {
    counter?: boolean;
    counterStyle?: boolean;
    keyframes?: boolean;
    gridTemplate?: boolean;
    encoder?: (value: string, index: number) => string;
};
/** @typedef {{counter?: boolean, counterStyle?: boolean,
              keyframes?: boolean, gridTemplate?: boolean,
              encoder?: (value: string, index: number) => string}} Options
*/
/**
 * @type {import('postcss').PluginCreator<Options>}
 * @param {Options} arg
 * @return {import('postcss').Plugin}
 */
declare function pluginCreator({ counter, counterStyle, keyframes, gridTemplate, encoder, }?: Options): import('postcss').Plugin;
declare namespace pluginCreator {
    const postcss: true;
}
