const tokensToRemove = /[.,:;?!\s]/g

const normalize = (str) => str.replace(tokensToRemove, '').toLowerCase()

const reverse = (str) => [...str].reverse().join('')

/**
 * Checks if a string is a palindrome.
 * Time complexity: O(n) for best, worst, average.
 * Space complexity: O(n)
 * @param {string} str String to be checked.
 * @returns {boolean} True if the string is a palindrome, False otherwise.
 */
const isPalindrome = (str) => {
  const normalStr = normalize(str)
  return normalStr === reverse(normalStr)
}

module.exports = {
  algorithm: isPalindrome,
  id: 'simple'
}
