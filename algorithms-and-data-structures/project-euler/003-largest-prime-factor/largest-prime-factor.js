/**
 * Calculates the largest prime factor of the input number.
 * @param {number} num Find the largest prime factor of this number.
 * @returns The largest prime factor of the given number.
 */
const largestPrimeFactor = (num) => {
  let factor = 2
  let lastFactor = 1

  while (num > 1) {
    if (num % factor === 0) {
      lastFactor = factor
      num /= factor

      while (num % factor === 0) {
        num /= factor
      }
    }

    factor++
  }

  return lastFactor
}

module.exports = {
  fun: largestPrimeFactor,
  id: 'simple'
}
