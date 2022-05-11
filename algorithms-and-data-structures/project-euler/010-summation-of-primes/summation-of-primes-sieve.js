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

  const primes = []
  const limit = num < 0 ? 0 : num

  const sieve = Array(limit).fill(true)
  sieve[0] = false
  sieve[1] = false

  for (let index = 2; index < limit; index++) {
    if (sieve[index]) {
      primes.push(index)
      const indexSq = index * index

      let coefficient = 0
      let indexFalse = indexSq + coefficient * index
      while (indexFalse < limit) {
        sieve[indexFalse] = false
        coefficient += 1
        indexFalse = indexSq + coefficient * index
      }
    }
  }

  return primes.reduce((x, y) => x + y, 0)
}

module.exports = {
  solution: sumOfPrimesBelow,
  id: 'sieve of eratosthenes'
}
