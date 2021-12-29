/**
 * Calculates the sum of the even fibonacci numbers, up to the given limit.
 * Time complexity: O(n)
 * Space complexity: O(1)
 * @param {number} limit Max value of the fibonacci numbers (inclusive).
 * @returns Sum of the even fibonacci numbers that do not exceed the limit.
 */
const fiboEvenSum = (limit) => {
  let current = 0
  let next = 1
  let sum = 0

  while (current <= limit) {
    [current, next] = [next + current, current]
    if (current % 2 === 0) sum += current
  }

  return sum
}

module.exports = {
  solution: fiboEvenSum,
  id: 'while loop'
}
