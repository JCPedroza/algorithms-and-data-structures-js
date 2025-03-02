// Characters to remove from string in order to normalize it
const charsToIgnore = /[-.,:;?!'"\s()]/

/**
 * Checks if a string is a palindrome. Uses a while loop.
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 *
 * @param {string} str String to be checked.
 * @returns {boolean} Whether the string is a palindrome.
 */
const isPalindrome = (str) => {
  let leftIdx = 0
  let rightIdx = str.length - 1

  while (leftIdx < rightIdx) {
    // Skip left characters that are in the ignore regex
    while (charsToIgnore.test(str[leftIdx])) {
      leftIdx++
    }

    // Skip right characters that are in the ignore regex
    while (charsToIgnore.test(str[rightIdx])) {
      rightIdx--
    }

    // Different characters, not a palindrome
    if (str[leftIdx].toLowerCase() !== str[rightIdx].toLowerCase()) {
      return false
    }

    // Equal characters, continue to next characters
    leftIdx++
    rightIdx--
  }

  return true
}

module.exports = {
  fun: isPalindrome,
  id: 'while-loop'
}
