/** @param {string|undefined} value */
function trimValue(value) {
  return value ? value.trim() : value;
}
/** @param {{nodes: import('postcss').Node[]}} node */
function empty(node) {
  return !node.nodes.filter((child) => child.type !== 'comment').length;
}

/**
 * @param {import('postcss').AnyNode} a
 * @param {import('postcss').AnyNode} b
 */
function equals(a, b) {
  if (a.type !== b.type) {
    return false;
  }

  if (
    /** @type {import('postcss').Declaration} */ (a).important !==
    /** @type {import('postcss').Declaration} */ (b).important
  ) {
    return false;
  }

  if ((a.raws && !b.raws) || (!a.raws && b.raws)) {
    return false;
  }

  switch (a.type) {
    case 'rule':
      if (a.selector !== /** @type {import('postcss').Rule} */ (b).selector) {
        return false;
      }
      break;
    case 'atrule':
      if (
        a.name !== /** @type {import('postcss').AtRule} */ (b).name ||
        a.params !== /** @type {import('postcss').AtRule} */ (b).params
      ) {
        return false;
      }

      if (a.raws && trimValue(a.raws.before) !== trimValue(b.raws.before)) {
        return false;
      }

      if (
        a.raws &&
        trimValue(a.raws.afterName) !== trimValue(b.raws.afterName)
      ) {
        return false;
      }
      break;
    case 'decl':
      if (
        a.prop !== /** @type {import('postcss').Declaration} */ (b).prop ||
        a.value !== /** @type {import('postcss').Declaration} */ (b).value
      ) {
        return false;
      }

      if (a.raws && trimValue(a.raws.before) !== trimValue(b.raws.before)) {
        return false;
      }
      break;
  }

  if ('nodes' in a && 'nodes' in b) {
    if (a.nodes.length !== b.nodes.length) {
      return false;
    }

    for (let i = 0; i < a.nodes.length; i++) {
      if (!equals(a.nodes[i], b.nodes[i])) {
        return false;
      }
    }
  }
  return true;
}
/**
 * @param {import('postcss').Rule} last
 * @param {import('postcss').AnyNode[]} nodes
 */
function dedupeRule(last, nodes) {
  let index = nodes.indexOf(last) - 1;
  while (index >= 0) {
    const node = nodes[index--];
    if (node && node.type === 'rule' && node.selector === last.selector) {
      last.each((child) => {
        if (child.type === 'decl') {
          dedupeNode(child, node.nodes);
        }
      });

      if (empty(/** @type {import('postcss').Rule}*/ (node))) {
        node.remove();
      }
    }
  }
}
/**
 * @param {import('postcss').AtRule | import('postcss').Declaration} last
 * @param {import('postcss').AnyNode[]} nodes
 */
function dedupeNode(last, nodes) {
  let index = nodes.includes(last) ? nodes.indexOf(last) - 1 : nodes.length - 1;

  while (index >= 0) {
    const node = nodes[index--];
    if (node && equals(node, last)) {
      node.remove();
    }
  }
}

/**
 * @param {import('postcss').AnyNode} root
 * */
function dedupe(root) {
  if ('nodes' in root) {
    const { nodes } = root;

    let index = nodes.length - 1;
    while (index >= 0) {
      let last = nodes[index--];
      if (!last || !last.parent) {
        continue;
      }
      dedupe(last);
      if (last.type === 'rule') {
        dedupeRule(last, nodes);
      } else if (last.type === 'atrule' || last.type === 'decl') {
        dedupeNode(last, nodes);
      }
    }
  }
}
/**
 * @type {import('postcss').PluginCreator<void>}
 * @return {import('postcss').Plugin}
 */
function pluginCreator() {
  return {
    postcssPlugin: 'postcss-discard-duplicates',
    OnceExit(css) {
      dedupe(css);
    },
  };
}

pluginCreator.postcss = true;
export default pluginCreator;
