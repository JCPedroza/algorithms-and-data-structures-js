/**
 * Calculates the sum of the even fibonacci numbers, up to the given limit.
 * Only calculates even fibonacci numbers.
 * Time complexity: O(n)
 * Space complexity: O(1)
 * @param {number} limit Max value of the fibonacci numbers (inclusive).
 * @returns {number} Sum of the even fibonacci numbers that do not exceed the
 * limit.
 */
const fiboEvenSum = (limit) => {
  let lastEven = 0
  let currentEven = 2
  let sum = 0

  while (currentEven <= limit) {
    sum += currentEven
    ;[lastEven, currentEven] = [currentEven, 4 * currentEven + lastEven]
  }

  return sum
}

module.exports = {
  solution: fiboEvenSum,
  id: 'while loop no if only even'
}
