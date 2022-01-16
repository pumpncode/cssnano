/** @typedef {import('postcss').ChildNode & {parent?: Child}} Child
/**
 * @param {Child} nodeA
 * @param {Child} nodeB
 * @return {boolean}
 */
export default function sameParent(nodeA: Child, nodeB: Child): boolean;
/**
 * /**
 */
export type Child = import('postcss').ChildNode & {
    parent?: Child;
};
