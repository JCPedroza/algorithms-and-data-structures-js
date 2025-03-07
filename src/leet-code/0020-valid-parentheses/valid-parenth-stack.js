/** Holds the open-close character relationship between parentheses. */
const parens = new Map([
  ['(', ')'],
  ['[', ']'],
  ['{', '}']
])

/**
 * Validates whether a string contains valid parentheses. Uses a stack.
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 *
 * @param {string} str String to be validated
 * @returns {boolean} Whether the string contains valid parentheses.
 */
const hasValidParentheses = (str) => {
  if (str.length === 0) return true
  if (str.length % 2 !== 0) return false

  /** @type {string[]} */
  const stack = []

  for (const char of str) {
    if (parens.has(char)) {
      const parChar = parens.get(char)
      if (parChar !== undefined) stack.push(parChar)
    } else if (stack.pop() !== char) {
      return false
    }
  }

  // If the stack is empty, all parentheses have been closed.
  return stack.length === 0
}

module.exports = {
  fun: hasValidParentheses,
  id: 'stack'
}
