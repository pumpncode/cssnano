import defaultPreset from 'cssnano-preset-default';
import postcssDiscardUnused from 'postcss-discard-unused';
import postcssMergeIdents from 'postcss-merge-idents';
import postcssReduceIdents from 'postcss-reduce-idents';
import postcssZindex from 'postcss-zindex';
import autoprefixer from 'autoprefixer';

/** @typedef {{autoprefixer?: autoprefixer.Options,
 discardUnused?: false | import('postcss-discard-unused').Options & { exclude?: true},
 mergeIdents?: false | { exclude?: true},
 reduceIdents?:false | import('postcss-reduce-idents').Options & { exclude?: true},
 zindex?: false | import('postcss-zindex').Options & { exclude?: true},
}} AdvancedOptions */
/** @typedef {import('cssnano-preset-default').Options & AdvancedOptions} Options */

const defaultOpts = {
  autoprefixer: {
    add: false,
  },
};
/**
 * @param {Options} opts
 * @return {{plugins: [import('postcss').PluginCreator<any>, false | Record<string, any> | undefined][]}}
 */
export default function advancedPreset(opts = {}) {
  const options = Object.assign({}, defaultOpts, opts);
  /** @type {[import('postcss').PluginCreator<any>, false | Record<string, any> | undefined][]} */
  const plugins = [
    ...defaultPreset(options).plugins,
    [autoprefixer, options.autoprefixer],
    [postcssDiscardUnused, options.discardUnused],
    [postcssMergeIdents, options.mergeIdents],
    [postcssReduceIdents, options.reduceIdents],
    [postcssZindex, options.zindex],
  ];

  return { plugins };
}
