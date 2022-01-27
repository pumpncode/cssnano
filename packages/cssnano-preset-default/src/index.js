/**
 * @author Ben Briggs
 * @license MIT
 * @module cssnano:preset:default
 * @overview
 *
 * This default preset for cssnano only includes transforms that make no
 * assumptions about your CSS other than what is passed in. In previous
 * iterations of cssnano, assumptions were made about your CSS which caused
 * output to look different in certain use cases, but not others. These
 * transforms have been moved from the defaults to other presets, to make
 * this preset require only minimal configuration.
 */

import cssDeclarationSorter from 'css-declaration-sorter';
import postcssDiscardComments from 'postcss-discard-comments';
import postcssReduceInitial from 'postcss-reduce-initial';
import postcssMinifyGradients from 'postcss-minify-gradients';
import postcssSvgo from 'postcss-svgo';
import postcssReduceTransforms from 'postcss-reduce-transforms';
import postcssConvertValues from 'postcss-convert-values';
import postcssCalc from 'postcss-calc';
import postcssColormin from 'postcss-colormin';
import postcssOrderedValues from 'postcss-ordered-values';
import postcssMinifySelectors from 'postcss-minify-selectors';
import postcssMinifyParams from 'postcss-minify-params';
import postcssNormalizeCharset from 'postcss-normalize-charset';
import postcssMinifyFontValues from 'postcss-minify-font-values';
import postcssNormalizeUrl from 'postcss-normalize-url';
import postcssMergeLonghand from 'postcss-merge-longhand';
import postcssDiscardDuplicates from 'postcss-discard-duplicates';
import postcssDiscardOverridden from 'postcss-discard-overridden';
import postcssNormalizeRepeatStyle from 'postcss-normalize-repeat-style';
import postcssMergeRules from 'postcss-merge-rules';
import postcssDiscardEmpty from 'postcss-discard-empty';
import postcssUniqueSelectors from 'postcss-unique-selectors';
import postcssNormalizeString from 'postcss-normalize-string';
import postcssNormalizePositions from 'postcss-normalize-positions';
import postcssNormalizeWhitespace from 'postcss-normalize-whitespace';
import postcssNormalizeUnicode from 'postcss-normalize-unicode';
import postcssNormalizeDisplayValues from 'postcss-normalize-display-values';
import postcssNormalizeTimingFunctions from 'postcss-normalize-timing-functions';
import { rawCache } from 'cssnano-utils';
/** @typedef {{
discardComments?: false | import('postcss-discard-comments').Options & { exclude?: true},
reduceInitial?:  false | { exclude?: true}
minifyGradients?:  false | { exclude?: true}
svgo?: false | import('postcss-svgo').Options & { exclude?: true},
reduceTransforms?:  false | { exclude?: true}
convertValues?: false | import('postcss-convert-values').Options & { exclude?: true},
calc?: false | import('postcss-calc').PostCssCalcOptions & { exclude?: true},
colormin?: false | Record<string, any> & { exclude?: true},
orderedValues?: false | { exclude?: true},
minifySelectors?: false | { exclude?: true},
minifyParams?: false | { exclude?: true},
normalizeCharset?: false | import('postcss-normalize-charset').Options & { exclude?: true},
minifyFontValues?: false | import('postcss-minify-font-values').Options & { exclude?: true},
normalizeUrl?: false | import('postcss-normalize-url').Options & { exclude?: true},
mergeLonghand?: false | { exclude?: true},
discardDuplicates?: false | { exclude?: true},
discardOverridden?: false | { exclude?: true},
normalizeRepeatStyle?: false | { exclude?: true},
mergeRules?: false | { exclude?: true},
discardEmpty?: false | { exclude?: true},
uniqueSelectors?: false | { exclude?: true},
normalizeString?: false | import('postcss-normalize-string').Options & { exclude?: true},
normalizePositions?: false | { exclude?: true},
normalizeWhitespace?: false| { exclude?: true},
normalizeUnicode?: false | { exclude?: true},
normalizeDisplayValues?: false | { exclude?: true},
normalizeTimingFunctions?: false | { exclude?: true},
rawCache?: false | { exclude?: true}}} Options */

const defaultOpts = {
  convertValues: {
    length: false,
  },
  normalizeCharset: {
    add: false,
  },
  cssDeclarationSorter: {
    keepOverrides: true,
  },
};
/**
 * @param {Options} opts
 * @return {{plugins: [import('postcss').PluginCreator<any>, false | Record<string, any> | undefined][]}}
 */
export default function defaultPreset(opts = {}) {
  const options = Object.assign({}, defaultOpts, opts);
  /** @type {[import('postcss').PluginCreator<any>, false | object | undefined][]} **/
  const plugins = [
    [postcssDiscardComments, options.discardComments],
    [postcssMinifyGradients, options.minifyGradients],
    [postcssReduceInitial, options.reduceInitial],
    [postcssSvgo, options.svgo],
    [postcssNormalizeDisplayValues, options.normalizeDisplayValues],
    [postcssReduceTransforms, options.reduceTransforms],
    [postcssColormin, options.colormin],
    [postcssNormalizeTimingFunctions, options.normalizeTimingFunctions],
    [postcssCalc, options.calc],
    [postcssConvertValues, options.convertValues],
    [postcssOrderedValues, options.orderedValues],
    [postcssMinifySelectors, options.minifySelectors],
    [postcssMinifyParams, options.minifyParams],
    [postcssNormalizeCharset, options.normalizeCharset],
    [postcssDiscardOverridden, options.discardOverridden],
    [postcssNormalizeString, options.normalizeString],
    [postcssNormalizeUnicode, options.normalizeUnicode],
    [postcssMinifyFontValues, options.minifyFontValues],
    [postcssNormalizeUrl, options.normalizeUrl],
    [postcssNormalizeRepeatStyle, options.normalizeRepeatStyle],
    [postcssNormalizePositions, options.normalizePositions],
    [postcssNormalizeWhitespace, options.normalizeWhitespace],
    [postcssMergeLonghand, options.mergeLonghand],
    [postcssDiscardDuplicates, options.discardDuplicates],
    [postcssMergeRules, options.mergeRules],
    [postcssDiscardEmpty, options.discardEmpty],
    [postcssUniqueSelectors, options.uniqueSelectors],
    [cssDeclarationSorter, options.cssDeclarationSorter],
    [rawCache, options.rawCache],
  ];

  return { plugins };
}
