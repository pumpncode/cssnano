import postcssDiscardComments from 'postcss-discard-comments';
import postcssNormalizeWhitespace from 'postcss-normalize-whitespace';
import postcssDiscardEmpty from 'postcss-discard-empty';
import { rawCache } from 'cssnano-utils';

/** @typedef {{discardComments?: false | import('postcss-discard-comments').Options & { exclude?: true},
normalizeWhitespace?: false| { exclude?: true}, discardEmpty?: false | { exclude?: true}, rawCache?: false | { exclude?: true}}} Options */
const defaultOpts = {};
/**
 * @param {Options} opts
 * @return {{plugins: [import('postcss').PluginCreator<any>, false | Record<string, any> | undefined][]}}
 */
export default function defaultPreset(opts = {}) {
  const options = Object.assign({}, defaultOpts, opts);
  /** @type {[import('postcss').PluginCreator<any>, false | object | undefined][]} **/
  const plugins = [
    [postcssDiscardComments, options.discardComments],
    [postcssNormalizeWhitespace, options.normalizeWhitespace],
    [postcssDiscardEmpty, options.discardEmpty],
    [rawCache, options.rawCache],
  ];

  return { plugins };
}
