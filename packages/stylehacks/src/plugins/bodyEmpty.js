import parser from 'postcss-selector-parser';
import exists from '../exists';
import isMixin from '../isMixin';
import BasePlugin from '../plugin';
import { FF_2 } from '../dictionary/browsers';
import { SELECTOR } from '../dictionary/identifiers';
import { RULE } from '../dictionary/postcss';
import { BODY } from '../dictionary/tags';

export default class BodyEmpty extends BasePlugin {
  /** @param {import('postcss').Result=} result */
  constructor(result) {
    super([FF_2], [RULE], result);
  }
  /** @param {import('postcss').Rule} rule */
  detect(rule) {
    if (isMixin(rule)) {
      return;
    }
    parser(this.analyse(rule)).processSync(rule.selector);
  }
  /**
   * @param {import('postcss').Rule} rule
   * @return {parser.SyncProcessor<void>}
   */
  analyse(rule) {
    return (selectors) => {
      selectors.each((selector) => {
        if (
          exists(selector, 0, BODY) &&
          exists(selector, 1, ':empty') &&
          exists(selector, 2, ' ') &&
          selector.at(3)
        ) {
          this.push(rule, {
            identifier: SELECTOR,
            hack: selector.toString(),
          });
        }
      });
    };
  }
}
