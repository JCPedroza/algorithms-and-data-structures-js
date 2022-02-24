/**
 * Calculates the difference of the square of the sum, and the sum of the
 * squares, of the first n natural numbers, using the accumulator pattern.
 * Time complexity: O(n).
 * @param {number} limit Last natural number to sum.
 * @returns {number} Difference of the square of the sum, and the sum of
 * the squares, of the first n natural numbers.
 */
const sumSquareDifference = (limit) => {
  let sumOfSquares = 0
  let sumOfNums = 0

  for (let num = 1; num <= limit; num++) {
    sumOfNums += num
    sumOfSquares += num * num
  }

  return sumOfNums * sumOfNums - sumOfSquares
}

module.exports = {
  solution: sumSquareDifference,
  id: 'for-loop accumulator'
}
