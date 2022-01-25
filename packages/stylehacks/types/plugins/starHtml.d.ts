export default class StarHtml extends BasePlugin {
    /** @param {import('postcss').Result=} result */
    constructor(result?: import('postcss').Result | undefined);
    /**
     * @param {import('postcss').Rule} rule
     * @return {parser.SyncProcessor<void>}
     */
    analyse(rule: import('postcss').Rule): parser.SyncProcessor<void>;
}
import BasePlugin from "../plugin";
import parser from "postcss-selector-parser";
