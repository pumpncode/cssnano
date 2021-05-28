import browserslist from 'browserslist';
import { isSupported } from 'caniuse-api';
import valueParser, { stringify } from 'postcss-value-parser';
import minifyColor from './minifyColor';

function walk(parent, callback) {
  parent.nodes.forEach((node, index) => {
    const bubble = callback(node, index, parent);

    if (node.nodes && bubble !== false) {
      walk(node, callback);
    }
  });
}

/*
 * IE 8 & 9 do not properly handle clicks on elements
 * with a `transparent` `background-color`.
 *
 * https://developer.mozilla.org/en-US/docs/Web/Events/click#Internet_Explorer
 */

function hasTransparentBug(browser) {
  return ~['ie 8', 'ie 9'].indexOf(browser);
}

function isMathFunctionNode(node) {
  if (node.type !== 'function') {
    return false;
  }

  return ['calc', 'min', 'max', 'clamp'].includes(node.value.toLowerCase());
}

function transform(value, options) {
  const parsed = valueParser(value);

  walk(parsed, (node, index, parent) => {
    if (node.type === 'function') {
      if (/^(rgb|hsl)a?$/i.test(node.value)) {
        const { value: originalValue } = node;

        node.value = minifyColor(stringify(node), options);
        node.type = 'word';

        const next = parent.nodes[index + 1];

        if (
          node.value !== originalValue &&
          next &&
          (next.type === 'word' || next.type === 'function')
        ) {
          parent.nodes.splice(index + 1, 0, {
            type: 'space',
            value: ' ',
          });
        }
      } else if (isMathFunctionNode(node)) {
        return false;
      }
    } else if (node.type === 'word') {
      node.value = minifyColor(node.value, options);
    }
  });

  return parsed.toString();
}

function pluginCreator() {
  return {
    postcssPlugin: 'postcss-colormin',

    prepare(result) {
      const resultOpts = result.opts || {};
      const browsers = browserslist(null, {
        stats: resultOpts.stats,
        path: __dirname,
        env: resultOpts.env,
      });

      const options = {
        supportsTransparent: browsers.some(hasTransparentBug) === false,
        supportsAlphaHex: isSupported('css-rrggbbaa', browsers),
      };

      const cache = {};

      return {
        OnceExit(css) {
          css.walkDecls((decl) => {
            if (
              /^(composes|font|filter|-webkit-tap-highlight-color)/i.test(
                decl.prop
              )
            ) {
              return;
            }

            const value = decl.value;

            if (!value) {
              return;
            }

            const cacheKey = JSON.stringify({ value, options, browsers });

            if (cache[cacheKey]) {
              decl.value = cache[cacheKey];

              return;
            }

            const newValue = transform(value, options);

            decl.value = newValue;
            cache[cacheKey] = newValue;
          });
        },
      };
    },
  };
}

pluginCreator.postcss = true;
export default pluginCreator;
