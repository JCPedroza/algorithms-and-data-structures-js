const tokensToRemove = /[.,:;?!\s]/g

// Remove tokens and convert to lowercase.
const normalize = (str) =>
  str
    .replace(tokensToRemove, '')
    .toLowerCase()

// Reverse order of characters.
const reverse = (str) =>
  [...str]
    .reverse()
    .join('')

/**
 * Checks if a string is a palindrome.
 * Complexity: time O(n) because normalize and reverse always happen,
 * space O(n).
 * @param {string} str String to be checked.
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 */
const isPalindrome = (str) => {
  const normalStr = normalize(str)
  return normalStr === reverse(normalStr)
}

module.exports = {
  fun: isPalindrome,
  id: 'string and array methods'
}
