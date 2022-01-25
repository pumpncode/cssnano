import BasePlugin from '../plugin';
import { IE_6 } from '../dictionary/browsers';
import { PROPERTY } from '../dictionary/identifiers';
import { DECL } from '../dictionary/postcss';
/** @param {string} prop */
function vendorPrefix(prop) {
  let match = prop.match(/^(-\w+-)/);
  if (match) {
    return match[0];
  }

  return '';
}

export default class LeadingUnderscore extends BasePlugin {
  /** @param {import('postcss').Result=} result */
  constructor(result) {
    super([IE_6], [DECL], result);
  }
  /** @param {import('postcss').Declaration} decl */
  detect(decl) {
    const { before } = decl.raws;

    if (before && before.includes('_')) {
      this.push(decl, {
        identifier: PROPERTY,
        hack: `${before.trim()}${decl.prop}`,
      });
    }

    if (
      decl.prop[0] === '-' &&
      decl.prop[1] !== '-' &&
      vendorPrefix(decl.prop) === ''
    ) {
      this.push(decl, {
        identifier: PROPERTY,
        hack: decl.prop,
      });
    }
  }
}
