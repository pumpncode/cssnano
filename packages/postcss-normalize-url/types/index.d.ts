export default pluginCreator;
/**
 * @type {import('postcss').PluginCreator<normalize.Options>}
 * @param {normalize.Options} opts
 * @return {import('postcss').Plugin}
 */
declare function pluginCreator(opts: normalize.Options): import('postcss').Plugin;
declare namespace pluginCreator {
    const postcss: true;
}
import normalize from "normalize-url";
