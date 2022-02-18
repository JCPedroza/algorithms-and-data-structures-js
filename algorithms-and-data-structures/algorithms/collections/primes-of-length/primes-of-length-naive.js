/**
 * Check if a number is prime.
 * Time complexity: O(1) best O(sqrt n) worst? O(sqrt n) avarage?
 * @param {number} num Number to check.
 * @returns True if number is prime, false otherwise.
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
 * Builds an array of the first n prime numbers.
 * Time complexity: O(n^2)? = O(n sqrt n)?
 * @param {number} length Number of prime numbers in the array.
 * @returns {number[]} Array witht he first n prime numbers.
 */
const primesOfLength = (length) => {
  const primes = []

  for (let num = 2; primes.length < length; num++) {
    if (isPrime(num)) primes.push(num)
  }

  return primes
}

module.exports = {
  algorithm: primesOfLength,
  id: 'naive brute force'
}
