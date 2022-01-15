export default CommentRemover;
/** @param {import('../index.js').PostCssRemoveCommentsOptions} options */
declare function CommentRemover(options: import('../index.js').PostCssRemoveCommentsOptions): void;
declare class CommentRemover {
    /** @param {import('../index.js').PostCssRemoveCommentsOptions} options */
    constructor(options: import('../index.js').PostCssRemoveCommentsOptions);
    options: import("../index.js").PostCssRemoveCommentsOptions;
    /** @param {string} comment */
    canRemove(comment: string): boolean | undefined;
    _hasFirst: boolean | undefined;
}
