/**
 * @param {Options} opts
 * @return {{plugins: [import('postcss').PluginCreator<any>, false | Record<string, any> | undefined][]}}
 */
export default function defaultPreset(opts?: Options): {
    plugins: [import('postcss').PluginCreator<any>, false | Record<string, any> | undefined][];
};
export type Options = {
    discardComments?: false | import('postcss-discard-comments').Options & {
        exclude?: true;
    };
    normalizeWhitespace?: false | {
        exclude?: true;
    };
    discardEmpty?: false | {
        exclude?: true;
    };
    rawCache?: false | {
        exclude?: true;
    };
};
import { rawCache } from "cssnano-utils";
