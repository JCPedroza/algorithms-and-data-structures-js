/**
 * Calculate all prime numbers up to the given number using the Sieve
 * of Eratosthenes.
 * @param {number} num Inclusive limit of the prime sequence.
 * @returns {number[]} Prime numbers up to the given number.
 */
const primesUpTo = (num) => {
  if (num < 2) return []

  const sieve = Array(num + 1).fill(true)
  sieve[0] = false
  sieve[1] = false
  const limit = Math.trunc(Math.sqrt(num))

  for (let index = 2; index <= limit; index++) {
    if (sieve[index]) {
      const indexSq = index * index

      for (let loop = 0; loop <= num; loop++) {
        sieve[indexSq + loop * index] = false
      }
    }
  }

  return sieve.reduce((primes, isPrime, index) => {
    if (isPrime) primes.push(index)
    return primes
  }, [])
}

module.exports = {
  algorithm: primesUpTo,
  id: 'sieve of eratosthenes'
}
