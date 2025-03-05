// Using inclusive regular expresion
const charsToRemove = /[-.,:;?!'"\s()]/g

/**
 * Checks if a string is a palindrome. Uses srtring and array methods, and an
 * exclusive regular expression.
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 *
 * @param {string} str String to be checked.
 * @returns {boolean} Whether the string is a palindrome.
 */
const isPalindrome = (str) => {
  const normalStr = str
    .replace(charsToRemove, '')
    .toLowerCase()

  const reverseNormalStr = [...normalStr]
    .reverse()
    .join('')

  return normalStr === reverseNormalStr
}

module.exports = {
  fun: isPalindrome,
  id: 'method inclusive-regex'
}
