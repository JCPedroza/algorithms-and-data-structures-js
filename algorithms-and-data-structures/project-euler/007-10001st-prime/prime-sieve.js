const { floor, sqrt } = Math

/**
 * Compute the nth prime number.
 * @param {number} index Base-1 index of the prime number.
 * @returns {number} The prime number at the given base-1 index.
 */
const prime = (index) => {
  if (index < 1 || !index) {
    throw new Error(`Invalid index ${index} must be number > 0`)
  }

  const upperBound = 200_000
  const limit = floor(sqrt(upperBound))

  const sieve = Array(upperBound + 1).fill(true)
  sieve[0] = false
  sieve[1] = false
  const primes = []

  for (let multiplier = 2; multiplier <= limit; multiplier++) {
    if (sieve[multiplier]) {
      primes.push(multiplier)
      const multiplierSq = multiplier * multiplier

      let coefficient = 0
      let indexFalse = multiplierSq + coefficient * multiplier
      while (indexFalse <= upperBound) {
        sieve[indexFalse] = false
        coefficient += 1
        indexFalse = multiplierSq + coefficient * multiplier
      }
    }
  }

  return primes[index - 1]
}

module.exports = {
  fun: prime,
  id: 'sieve of eratosthenes'
}
