/**
 * Generates even fibonacci numbers.
 * @param {number} limit Max value of the fibonacci sequence.
 * @returns A generator function.
 */
const nxtEvenFibo = (limit) =>
  (function * evenFiboGen () {
    // Every third fibonacci number is even
    let current = 2
    let mid = 3
    let last = 5

    while (current <= limit) {
      yield current
      current = mid + last
      mid = last + current
      last = current + mid
    }
  })()

/**
 * Calculates the sum of the even fibonacci numbers, up to the given limit.
 * Uses generator function and for of with accumulator.
 * Time complexity: O(n)
 * Space complexity: O(1)
 * @param {number} limit Max value of the fibonacci numbers (inclusive).
 * @returns {number} Sum of the even fibonacci numbers that do not exceed the
 * limit.
 */
const fiboEvenSum = (limit) => {
  let sum = 0

  for (const fibo of nxtEvenFibo(limit)) {
    sum += fibo
  }

  return sum
}

module.exports = {
  fun: fiboEvenSum,
  id: 'generator and for of with accumulator'
}
