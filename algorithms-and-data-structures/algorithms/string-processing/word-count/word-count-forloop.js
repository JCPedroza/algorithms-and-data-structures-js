/**
 * Counts the number of words of the input string.
 * Time complexity: O(n)
 * Space complecity: O(n)
 * @param {string} str String containing the words to be counted.
 * @returns {number} Number of words in the input string.
 */
const countWords = (str) => {
  const normalizedStr = str.replace(/[.:,;?!]/g, ' ')
  const words = normalizedStr.split(/\s/)
  let wordCount = 0

  for (const word of words) {
    if (word) wordCount++
  }

  return wordCount
}

module.exports = {
  fun: countWords,
  id: 'for of loop accumulator'
}
