/**
 * Counts the number of words of the input string.
 * Time complexity: O(n)
 * Space complecity: O(n)
 * @param {string} str String containing the words to be counted.
 * @returns {number} Number of words in the input string.
 */
const countWords = (str) =>
  str
    .replace(/[.:,;?!]/g, ' ')
    .split(/\s/)
    .filter(word => word.length > 0)
    .length

module.exports = {
  fun: countWords,
  id: 'filter length'
}
