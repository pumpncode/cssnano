'use strict';
const valueParser = require('postcss-value-parser');
const addToCache = require('./cache');
const isNum = require('./isNum');

const RESERVED_KEYWORDS = ['auto', 'span', 'inherit', 'initial', 'unset'];

module.exports = function () {
  let cache = {};
  let declCache = [];

  return {
    collect(node, encoder) {
      if (node.type !== 'decl') {
        return;
      }

      if (/(grid-template|grid-template-areas)/i.test(node.prop)) {
        valueParser(node.value).walk((child) => {
          if (child.type === 'string') {
            child.value.split(/\s+/).forEach((word) => {
              if (/\.+/.test(word)) {
                // reduce empty zones to a single `.`
                node.value = node.value.replace(word, '.');
              } else if (
                word &&
                RESERVED_KEYWORDS.indexOf(word.toLowerCase()) === -1
              ) {
                addToCache(word, encoder, cache);
              }
            });
          }
        });

        declCache.push(node);
      } else if (node.prop.toLowerCase() === 'grid-area') {
        valueParser(node.value).walk((child) => {
          if (
            child.type === 'word' &&
            RESERVED_KEYWORDS.indexOf(child.value) === -1
          ) {
            addToCache(child.value, encoder, cache);
          }
        });

        declCache.push(node);
      }
    },

    transform() {
      declCache.forEach((decl) => {
        decl.value = valueParser(decl.value)
          .walk((node) => {
            if (/(grid-template|grid-template-areas)/i.test(decl.prop)) {
              node.value.split(/\s+/).forEach((word) => {
                if (word in cache) {
                  node.value = node.value.replace(word, cache[word].ident);
                }
              });
              node.value = node.value.replace(/\s+/g, ' '); // merge white-spaces
            }

            if (decl.prop.toLowerCase() === 'grid-area' && !isNum(node)) {
              if (node.value in cache) {
                node.value = cache[node.value].ident;
              }
            }

            return false;
          })
          .toString();
      });

      // reset cache after transform
      declCache = [];
    },
  };
};
