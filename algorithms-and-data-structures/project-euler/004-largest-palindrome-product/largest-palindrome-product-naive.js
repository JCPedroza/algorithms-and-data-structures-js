/**
 * Check if a number is a palindrome.
 * @param {number} num Number to be checked.
 * @returns {boolean} True if the number is a palindrome, false otherwise.
 */
const isPalindrome = (num) => {
  const numStr = String(num)
  const reverseNumStr = [...numStr].reverse().join('')
  return numStr === reverseNumStr
}

/**
 * Find the largest palindrome product of two n-digit numbers.
 * @param {number} digits Number of digits of the multiplied numbers.
 * @returns {number} Largest palindrome product.
 */
const largestPalindromeProduct = (digits) => {
  const start = 10 ** (digits - 1) // first n-digit number
  const end = (10 ** digits) - 1 // last n-digit number
  let largestPalindrome = 0

  for (let factorA = start; factorA <= end; factorA++) {
    for (let factorB = factorA; factorB <= end; factorB++) {
      const product = factorA * factorB

      if (isPalindrome(product) && product > largestPalindrome) {
        largestPalindrome = product
      }
    }
  }

  return largestPalindrome
}

module.exports = {
  solution: largestPalindromeProduct,
  id: 'naive'
}
