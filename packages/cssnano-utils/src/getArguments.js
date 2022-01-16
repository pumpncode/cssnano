/** @param {import('postcss-value-parser').Node} node */
export default function getArguments(node) {
  /** @type {import('postcss-value-parser').Node[][]} */
  const list = [[]];
  if ('nodes' in node) {
    for (const child of node.nodes) {
      if (child.type !== 'div') {
        list[list.length - 1].push(child);
      } else {
        list.push([]);
      }
    }
  }
  return list;
}
