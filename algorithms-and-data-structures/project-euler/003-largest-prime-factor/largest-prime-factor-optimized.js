/**
 * Calculates the largest prime factor of the input number.
 * @param {number} num Find the largest prime factor of this number.
 * @returns The largest prime factor of the given number.
 */
const largestPrimeFactor = (num) => {
  let factor = 3
  let lastFactor

  if (num % 2 === 0) {
    lastFactor = 2
    num /= 2

    while (num % 2 === 0) {
      num /= 2
    }
  } else {
    lastFactor = 1
  }

  let maxFactor = Math.sqrt(num)

  while (num > 1 && factor <= maxFactor) {
    if (num % factor === 0) {
      num /= factor
      lastFactor = factor

      while (num % factor === 0) {
        num /= factor
      }

      maxFactor = Math.sqrt(num)
    }

    factor += 2
  }

  if (num === 1) {
    return lastFactor
  } else {
    return num
  }
}

module.exports = {
  fun: largestPrimeFactor,
  id: 'optimized'
}
