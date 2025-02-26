/**
 * Sum of natural numbers divisible by 'divisor' and below 'limit'.
 *
 * Time complexity: O(1)
 * Space complexity: O(1)
 *
 * @private
 * @param {number} limit Exclusive upper limit of the series.
 * @param {number} divisor Divisor.
 * @returns {number} Sum of multiples of 'divisor' below 'limit'.
 */
const sumDivisibleBy = (limit, divisor) => {
  // Number of multiples of 'divisor' below 'limit'
  const limitByN = Math.floor((limit - 1) / divisor)

  // Arithmetic series. No need to floor here since n * (n + 1) will be even
  return divisor * (limitByN * (limitByN + 1)) / 2
}

/**
 * Sum of multiples of 3 or 5 below 'limit'. Uses an analytic approach to avoid
 * iteration. Uses the inclusion-exclusion principle to avoid double-counting
 * multiples of 15 (multiples of both).
 *
 * Time complexity: O(1)
 * Space complexity: O(1)
 *
 * @param {number} limit Exclusive upper limit of the series.
 * @returns {number} Sum of multiples of 3 or 5 below 'limit'.
 */
const multiplesOf3Or5 = (limit) => {
  if (limit < 1) return 0

  // multiples of 3 + multiples of 5 - multiples of both
  return sumDivisibleBy(limit, 3) +
    sumDivisibleBy(limit, 5) -
    sumDivisibleBy(limit, 15)
}

module.exports = {
  fun: multiplesOf3Or5,
  id: 'analytic'
}
