const { floor, sqrt } = Math

/**
 * Checks primality of a number using trial division.
 * @param {number} num Number to check for primality.
 * @returns {boolean} True if number is prime, false otherwise.
 */
const isPrime = (num) => {
  if (num < 2) return false
  if (num < 4) return true // 2 and 3 are prime
  if (num % 2 === 0) return false

  if (num < 9) return true // 4, 6, 8 are excluded
  if (num % 3 === 0) return false

  const limit = floor(sqrt(num))
  for (let div = 5; div <= limit; div += 6) {
    if (num % div === 0 || num % (div + 2) === 0) return false // 6k +- 1
  }

  return true
}

/**
 * Compute the nth prime number.
 * @param {number} index Base-1 index of the prime number.
 * @returns {number} The prime number at the given base-1 index.
 */
const prime = (index) => {
  if (index < 1 || !index) {
    throw new Error(`Invalid index ${index} must be number > 0`)
  }
  if (index < 3) return [2, 3][index - 1]

  let curIndex = 2
  let curNum = 3

  while (curIndex < index) {
    curNum += 2
    if (isPrime(curNum)) curIndex++
  }

  return curNum
}

module.exports = {
  solution: prime,
  id: 'trial division'
}
