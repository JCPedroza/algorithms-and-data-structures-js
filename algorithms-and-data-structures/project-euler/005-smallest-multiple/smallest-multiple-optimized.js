const { primesUpTo } = require('../../algorithms/exports')

/**
 * Find the smallest number divisible by the range [1, limit].
 * Time complexity: ???
 * @param {number} limit Last number of the range (inclusive).
 * @returns {number} Smallest integer divisible by the range.
 */
const smallestMult = (limit) => {
  const exponents = []
  const primes = primesUpTo(limit)
  const limitSqrt = Math.sqrt(limit)
  const limitLog = Math.log(limit)

  let index = 0
  let resultMult = 1
  let primeIsBelowLimit = true

  while (primes[index] <= limit) {
    exponents[index] = 1

    if (primeIsBelowLimit) {
      if (primes[index] <= limitSqrt) {
        exponents[index] = Math.floor(limitLog / Math.log(primes[index]))
      } else {
        primeIsBelowLimit = false
      }
    }

    resultMult *= primes[index] ** exponents[index]
    index++
  }

  return resultMult
}

module.exports = {
  solution: smallestMult,
  id: 'optimized'
}
