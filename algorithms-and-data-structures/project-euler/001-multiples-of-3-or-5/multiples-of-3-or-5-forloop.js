/**
 * Sum of natural numbers multiples of 3 or 5 and below the limit.
 * Uses the for-loop accumulator pattern.
 * Time complexity: O(n)
 * Space complexity: O(1), the 64-bits IEEE 754 standard
 * @param {number} limit Limit of the series.
 * @returns {number} Sum of natural numbers divisible by n and
 * below the limit.
 */
const multiplesOf3Or5 = (limit) => {
  let sum = 0

  for (let num = 1; num < limit; num++) {
    if (num % 3 === 0 || num % 5 === 0) {
      sum += num
    }
  }

  return sum
}

module.exports = {
  solution: multiplesOf3Or5,
  id: 'for-loop accumulator'
}
