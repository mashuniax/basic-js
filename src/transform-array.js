const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (arr.includes('--double-next')) {
    arr.splice(arr.indexOf('--double-next'), 1, arr[arr.indexOf('--double-next') + 1]);
    } else if (arr.includes('--double-prev')) {
    arr.splice(arr.indexOf('--double-prev'), 1, arr[arr.indexOf('--double-prev') - 1]);
    } else if (arr.includes('--discard-next')) {
    arr.splice(arr.indexOf('--discard-next'), 2)
    } else if (arr.includes('--discard-prev')) {
    arr.splice(arr.indexOf('--discard-prev') - 1, 2)
    } return arr;
}

module.exports = {
  transform
};
