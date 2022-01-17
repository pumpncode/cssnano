export default pluginCreator;
export type PostcssConvertValueOptions = {
    precision: boolean | number;
    angle?: boolean;
    time?: boolean;
    length?: boolean;
};
/**
 * @typedef {{precision: boolean | number, angle?: boolean, time?: boolean, length?: boolean}} PostcssConvertValueOptions */
/**
 * @type {import('postcss').PluginCreator<PostcssConvertValueOptions>}
 * @param {PostcssConvertValueOptions} opts
 * @return {import('postcss').Plugin}
 */
declare function pluginCreator(opts?: PostcssConvertValueOptions): import('postcss').Plugin;
declare namespace pluginCreator {
    const postcss: true;
}
