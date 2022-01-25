import BasePlugin from '../plugin';
import { IE_5_5, IE_6, IE_7 } from '../dictionary/browsers';
import { DECL } from '../dictionary/postcss';

export default class Important extends BasePlugin {
  /** @param {import('postcss').Result=} result */
  constructor(result) {
    super([IE_5_5, IE_6, IE_7], [DECL], result);
  }
  /** @param {import('postcss').Declaration} decl */
  detect(decl) {
    const match = decl.value.match(/!\w/);
    if (match && match.index) {
      const hack = decl.value.substr(match.index, decl.value.length - 1);
      this.push(decl, {
        identifier: '!important',
        hack,
      });
    }
  }
}
