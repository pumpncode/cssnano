import processors from './lib/decl';
/**
 * @type {import('postcss').PluginCreator<void>}
 * @return {import('postcss').Plugin}
 */
function pluginCreator() {
  return {
    postcssPlugin: 'postcss-merge-longhand',

    OnceExit(css) {
      css.walkRules((rule) => {
        processors.forEach((p) => {
          p.explode(rule);
          p.merge(rule);
        });
      });
    },
  };
}

pluginCreator.postcss = true;
export default pluginCreator;
