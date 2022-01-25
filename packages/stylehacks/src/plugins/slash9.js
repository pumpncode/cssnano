import BasePlugin from '../plugin.js';
import { IE_6, IE_7, IE_8 } from '../dictionary/browsers';
import { VALUE } from '../dictionary/identifiers';
import { DECL } from '../dictionary/postcss';

export default class Slash9 extends BasePlugin {
  /** @param {import('postcss').Result=} result */
  constructor(result) {
    super([IE_6, IE_7, IE_8], [DECL], result);
  }
  /** @param {import('postcss').Declaration} decl */
  detect(decl) {
    let v = decl.value;
    if (v && v.length > 2 && v.indexOf('\\9') === v.length - 2) {
      this.push(decl, {
        identifier: VALUE,
        hack: v,
      });
    }
  }
}
