const pluginCreator = () => {
  return {
    postcssPlugin: 'cssnano-util-raw-cache',
    /**
     * @param {import('postcss').Root} css
     * @param {{result: import('postcss').Result & {root: {rawCache?: any}}}} arg
     */
    OnceExit(css, { result }) {
      result.root.rawCache = {
        colon: ':',
        indent: '',
        beforeDecl: '',
        beforeRule: '',
        beforeOpen: '',
        beforeClose: '',
        beforeComment: '',
        after: '',
        emptyBody: '',
        commentLeft: '',
        commentRight: '',
      };
    },
  };
};

pluginCreator.postcss = true;

export default pluginCreator;
