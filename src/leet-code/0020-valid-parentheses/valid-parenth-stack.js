/** Holds the open-close character relationship between parentheses. */
const parens = new Map([
  ['(', ')'],
  ['[', ']'],
  ['{', '}']
])

/**
 * Unboxes a string option into a string.
 *
 * @param {string | undefined} str String option to be unboxed.
 * @returns {string} Unboxed string.
 */
const unboxOption = (str) => {
  if (str === undefined) throw new Error('string is undefined')
  return str
}

/**
 * Validates whether a string contains valid parentheses. Uses a stack.
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 *
 * @param {string} str String to be validated
 * @returns Whether the string contains valid parentheses.
 */
const hasValidParentheses = (str) => {
  // Empty string is valid
  if (str.length === 0) return true

  // String of odd length can't be valid
  if (str.length % 2 !== 0) return false

  /** @type {string[]} */
  const stack = []

  for (let idx = 0; idx < str.length; idx++) {
    const currentChar = str[idx]

    if (parens.has(currentChar)) {
      stack.push(unboxOption(parens.get(currentChar)))
    } else if (stack.pop() !== currentChar) {
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
