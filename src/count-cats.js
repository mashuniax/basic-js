const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr.reduce((a, b) => a.concat(b)).filter(item => item == "^^").length;
  }
  }
  

module.exports = {
  countCats
};
