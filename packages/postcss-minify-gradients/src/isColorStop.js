import { unit } from 'postcss-value-parser';
import { colord, extend } from 'colord';
import namesPlugin from 'colord/plugins/names';

extend([namesPlugin]);

/* Code derived from https://github.com/pigcan/is-color-stop */

const lengthUnits = new Set([
  'PX',
  'IN',
  'CM',
  'MM',
  'EM',
  'REM',
  'POINTS',
  'PC',
  'EX',
  'CH',
  'VW',
  'VH',
  'VMIN',
  'VMAX',
  '%',
]);
/** @param {string} input */
function isCSSLengthUnit(input) {
  return lengthUnits.has(input.toUpperCase());
}
/**
 * @param {string|undefined} str
 * @return {boolean}
 */
function isStop(str) {
  if (str) {
    let stop = false;
    const node = unit(str);
    if (node) {
      const number = Number(node.number);
      if (number === 0 || (!isNaN(number) && isCSSLengthUnit(node.unit))) {
        stop = true;
      }
    } else {
      stop = /^calc\(\S+\)$/g.test(str);
    }
    return stop;
  }
  return true;
}
/** @param {string} color
 * @param {string=} stop */
export default function isColorStop(color, stop) {
  return colord(color).isValid() && isStop(stop);
}
