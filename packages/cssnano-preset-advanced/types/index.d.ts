/**
 * @param {Options} opts
 * @return {{plugins: [import('postcss').PluginCreator<any>, false | Record<string, any> | undefined][]}}
 */
export default function advancedPreset(opts?: Options): {
    plugins: [import('postcss').PluginCreator<any>, false | Record<string, any> | undefined][];
};
export type AdvancedOptions = {
    autoprefixer?: autoprefixer.Options;
    discardUnused?: false | import('postcss-discard-unused').Options & {
        exclude?: true;
    };
    mergeIdents?: false | {
        exclude?: true;
    };
    reduceIdents?: false | import('postcss-reduce-idents').Options & {
        exclude?: true;
    };
    zindex?: false | import('postcss-zindex').Options & {
        exclude?: true;
    };
};
export type Options = import('cssnano-preset-default').Options & AdvancedOptions;
import autoprefixer from "autoprefixer";
