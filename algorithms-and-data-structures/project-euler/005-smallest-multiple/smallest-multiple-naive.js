/**
 * Check if the dividend is divisible by the range [1, limit].
 * Time complexity: O(n).
 * @param {number} limit Divide from 1 to this integer.
 * @param {number} dividend Divide by this integer.
 * @returns {boolean} True if the dividend is divisible by the range, false
 * otherwise.
 */
const isDivisibleByRange = (limit, dividend) => {
  for (let divisor = 2; divisor <= limit; divisor++) {
    if (dividend % divisor !== 0) return false
  }

  return true
}

/**
 * Find the smallest number divisible by the range [1, limit].
 * Time complexity: ???
 * @param {number} limit End of range integer.
 * @returns {number} Smallest integer divisible by the range.
 */
const smallestMult = (limit) => {
  if (limit < 3) return limit
  let dividend = limit * 2

  while (!isDivisibleByRange(limit, dividend)) {
    dividend += 2 // no need to check odd nums if range contains 2
  }

  return dividend
}

module.exports = {
  fun: smallestMult,
  id: 'naive brute force'
}
