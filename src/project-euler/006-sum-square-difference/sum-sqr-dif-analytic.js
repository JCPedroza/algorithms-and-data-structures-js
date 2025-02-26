/**
 * Calculates the difference of the square of the sum, and the sum of the
 * squares, of the first n natural numbers, using an analytic approach.
 * Time complexity: O(1).
 * @param {number} limit Last natural number to sum.
 * @returns {number} Difference of the square of the sum, and the sum of
 * the squares, of the first n natural numbers.
 */
const sumSquareDifference = (limit) => {
  const sumOfNums = limit * (limit + 1) / 2
  const sumOfSquares = (2 * limit + 1) * (limit + 1) * limit / 6

  return sumOfNums * sumOfNums - sumOfSquares
}

module.exports = {
  fun: sumSquareDifference,
  id: 'analytic'
}
