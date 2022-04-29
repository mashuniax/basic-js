const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	let arr = n.toString().split('').map(i => +i);
  let maxI = arr.lastIndexOf(Math.max.apply(null, arr));
  arr.splice(maxI - 1, 1);
  return Number(arr.join(''))
}

module.exports = {
  deleteDigit
};
