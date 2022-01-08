/**
 * Calculates the sum of the even fibonacci numbers, up to the given limit.
 * Avoids checking for even numbers by adding every third fibonacci number,
 * which is always even.
 * Time complexity: O(n)
 * Space complexity: O(1)
 * @param {number} limit Max value of the fibonacci numbers (inclusive).
 * @returns Sum of the even fibonacci numbers that do not exceed the limit.
 */
const fiboEvenSum = (limit) => {
  let first = 1
  let second = 1
  let third = 2
  let sum = 0

  while (third <= limit) {
    sum += third
    first = second + third
    second = third + first
    third = second + first
  }

  return sum
}

module.exports = {
  solution: fiboEvenSum,
  id: 'while loop no if'
}
