/**
 * Sum of natural numbers divisible by n and below the limit.
 * Uses an analytic approach.
 * Time complexity: O(1)
 * Space complexity: O(1)
 * @param {number} limit Limit of the series.
 * @param {number} n Divisor.
 * @returns {number} Sum of natural numbers divisible by n and
 * below the limit.
 */
const sumDivisibleBy = (limit, n) => {
  const limitByN = parseInt((limit - 1) / n)
  return parseInt(n * (limitByN * (limitByN + 1)) / 2)
}

/**
 * Sum of natural numbers multiples of 3 or 5 and below the limit.
 * Uses an analytic approach.
 * Time complexity: O(1)
 * Space complexity: O(1)
 * @param {number} limit Limit of the series.
 * @returns {number} Sum of natural numnbers multiples of 3 or 5 and
 * below the limit.
 */
const multiplesOf3or5 = (limit) =>
  sumDivisibleBy(limit, 3) +
  sumDivisibleBy(limit, 5) -
  sumDivisibleBy(limit, 15)

module.exports = {
  fun: multiplesOf3or5,
  id: 'analytic'
}
