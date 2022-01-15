const plugin = 'postcss-discard-empty';

/**
 * @param {import('postcss').Root} css
 * @param {import('postcss').Result} result
 */
function discardAndReport(css, result) {
  /** @param {import('postcss').AnyNode} node */
  function discardEmpty(node) {
    if ('nodes' in node) {
      node.each(discardEmpty);
    }

    if (
      (node.type === 'decl' && !node.value) ||
      (node.type === 'rule' && !node.selector) ||
      ('nodes' in node && !node.nodes.length) ||
      (node.type === 'atrule' &&
        ((!node.nodes && !node.params) || (!node.params && !node.nodes.length)))
    ) {
      node.remove();

      result.messages.push({
        type: 'removal',
        plugin,
        node,
      });
    }
  }

  css.each(discardEmpty);
}
/**
 * @type {import('postcss').PluginCreator<void>}
 * @return {import('postcss').Plugin}
 */
function pluginCreator() {
  return {
    postcssPlugin: plugin,
    OnceExit(css, { result }) {
      discardAndReport(css, result);
    },
  };
}

pluginCreator.postcss = true;
export default pluginCreator;
