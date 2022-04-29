const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  matrix = matrix[0].map((col, i) => matrix.map(row => row[i]));
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].indexOf(0) == -1) {
      matrix[i] = matrix[i]
    } else {
      matrix[i] = matrix[i].slice(0, matrix[i].indexOf(0))
    }
  }
	return matrix.flat(1).reduce((prev, cur) => prev + cur, 0)
}

module.exports = {
  getMatrixElementsSum
};
