/**
 * Sum of natural numbers multiples of 3 or 5 and below the limit.
 * Uses the filter-reduce pattern.
 * Time complexity: O(n)
 * Space complexity: O(n), the length of the range array
 * @param {number} limit Limit of the series.
 * @returns {number} Sum of natural numbers divisible by n and
 * below the limit.
 */
const multiplesOf3Or5 = (limit) => {
  if (limit < 0) return 0

  const intLimit = parseInt(limit)

  return [...Array(intLimit).keys()] // [0, 1, ... , lim - 1]
    .filter(num => num % 3 === 0 || num % 5 === 0)
    .reduce((sum, num) => sum + num, 0)
}

module.exports = {
  fun: multiplesOf3Or5,
  id: 'filter reduce'
}
