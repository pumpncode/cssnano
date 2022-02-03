import { unit } from 'postcss-value-parser';
/** @param {string} value */
function hasUnit(value) {
  const parsedVal = unit(value);
  return parsedVal && parsedVal.unit !== '';
}
/** @param {import('postcss-value-parser').ParsedValue} columns */
export default (columns) => {
  /** @type {string[]} */
  const widths = [];
  /** @type {string[]} */
  const other = [];
  columns.walk((node) => {
    const { type, value } = node;
    if (type === 'word') {
      if (hasUnit(value)) {
        widths.push(value);
      } else {
        other.push(value);
      }
    }
  });

  // only transform if declaration is not invalid or a single value
  if (other.length === 1 && widths.length === 1) {
    return `${widths[0].trimStart()} ${other[0].trimStart()}`;
  }

  return columns;
};
