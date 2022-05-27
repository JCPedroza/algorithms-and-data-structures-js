/**
 * This module uses the sieve of eratosthenes to find the sum of prime
 * numbers below a given value.
 *
 * https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
 */

const { floor, sqrt } = Math

/**
 * Computes the sum of the primes below a given number using the sieve of
 * eratosthenes.
 * @param {number} num Primes below this number will be summed.
 * @throws {Error} Argument must be a number.
 * @returns {number} Sum of the primes below the given number.
 */
const sumOfPrimesBelow = (num) => {
  if (typeof num !== 'number') {
    throw new Error(`Argument must be a number: ${num}`)
  }

  // Optimization 1: When the outer loop reaches this index, all nonprimes
  // in the sieve are already marked
  const limit = floor(sqrt(num)) // Optimization 1

  const primes = []
  const sieve = Array(num < 0 ? 0 : num).fill(true)

  // 0 and 1 are not primes, first prime is 2
  sieve[0] = false
  sieve[1] = false

  // Generate sieve and collect primes as they are found
  for (let index = 2; index <= limit; index++) {
    if (sieve[index]) {
      primes.push(index)

      // Optimization 2: Start at index squared, nonprimes below this index
      // are already marked
      const indexSq = index * index

      let coefficient = 0
      let indexFalse = indexSq + coefficient * index

      while (indexFalse <= num) {
        sieve[indexFalse] = false
        coefficient += 1
        indexFalse = indexSq + coefficient * index
      }
    }
  }

  // Collect primes not collected in the sieve generation loop
  for (let index = primes.at(-1) + 1; index < sieve.length; index++) {
    if (sieve[index]) primes.push(index)
  }

  return primes.reduce((x, y) => x + y, 0)
}

module.exports = {
  solution: sumOfPrimesBelow,
  id: 'sieve of eratosthenes'
}
