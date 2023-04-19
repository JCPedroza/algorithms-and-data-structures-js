/**
 * Calculates the sum of the even fibonacci numbers, up to the given limit.
 * Uses tail recursion and analytic optiization.
 * Time complexity: O(n)
 * Space complexity: O(n) ? (tail recursion)
 * @param {number} limit Max value of the fibonacci numbers (inclusive).
 * @returns {number} Sum of the even fibonacci numbers that do not exceed the
 * limit.
 */
const fiboEvenSum = (limit) => {
  const loop = (acc, fib, nxtFib) => {
    if (fib > limit) return acc
    return loop(acc + fib, nxtFib, 4 * nxtFib + fib)
  }

  return loop(0, 0, 2)
}

module.exports = {
  fun: fiboEvenSum,
  id: 'tail recursion with analytic optimization'
}
