/** @return {import('postcss-value-parser').SpaceNode} */
export default function addSpace() {
  return { type: 'space', value: ' ', sourceIndex: 0, sourceEndIndex: 0 };
}
