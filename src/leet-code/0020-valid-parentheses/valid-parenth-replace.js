// Regex matching adjacent open-close pairs (), {}, and [].
const adjacentParens = /\(\)|\{\}|\[\]/g

/**
 * Validates whether a string contains valid parentheses. Uses the 'replace'
 * string method.
 *
 * Time complexity: O(n^2)
 * Space complexity: O(n)
 *
 * @param {string} str String to be validated.
 * @returns {boolean} Whether the string contains valid parentheses.
 */
const hasValidParentheses = (str) => {
  if (str.length === 0) return true
  if (str.length % 2 !== 0) return false

  let currentStr = str
  let prevLength = 0

  // Remove adjacent pairs until there are none (until string size doesn't
  // change)
  do {
    prevLength = currentStr.length
    currentStr = currentStr.replace(adjacentParens, '')
  } while (currentStr.length < prevLength)

  return currentStr.length === 0
}

module.exports = {
  fun: hasValidParentheses,
  id: 'string-replace'
}
