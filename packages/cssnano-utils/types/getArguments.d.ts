/**
 * Extracts the arguments of a CSS function or AtRule.
 *
 * @param {import('postcss-value-parser').ParsedValue | import('postcss-value-parser').FunctionNode} node
 */
export default function getArguments(node: import('postcss-value-parser').ParsedValue | import('postcss-value-parser').FunctionNode): import("postcss-value-parser").Node[][];
