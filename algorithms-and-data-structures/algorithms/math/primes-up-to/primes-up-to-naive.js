/**
 * Check if a number is prime.
 * Time complexity: O(1) best O(sqrt n) worst? O(sqrt n) avarage?
 * @param {number} num Number to check.
 * @returns True if the number is prime, false otherwise.
 */
const isPrime = (num) => {
  if (num < 3) return num === 2
  if (num % 2 === 0) return false

  const limit = Math.floor(Math.sqrt(num))
  for (let div = 3; div <= limit; div += 2) {
    if (num % div === 0) return false
  }

  return true
}

/**
 * Calculate all prime numbers up to the given number using a naive
 * brute-force approach.
 * Time complexity: O(n^2)? = O(n sqrt n)?
 * @param {number} num Inclusive limit of the prime sequence.
 * @returns {number[]} Prime numbers up to the given number.
 */
const primesUpTo = (num) => {
  const primes = []

  for (let candidate = 2; candidate <= num; candidate++) {
    if (isPrime(candidate)) primes.push(candidate)
  }

  return primes
}

module.exports = {
  algorithm: primesUpTo,
  id: 'naive brute force'
}
