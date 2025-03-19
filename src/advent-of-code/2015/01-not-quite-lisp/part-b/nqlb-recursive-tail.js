/**
 * Finds the position of the first character that causes santa to enter the
 * basement (floor -1). Uses tail recursion.
 *
 * Time complexity: O(n)
 * Space complexity: O(n) (call stack size)
 *
 * @param {string} dir Floor directions.
 * @returns {number} Position of first character that reaches the basement.
 */
const findBasePos = (dir) => {
  /**
   * Recursive helper function.
   *
   * @param {number} idx Current index.
   * @param {number} sum Current sum.
   * @returns {number} Position of first character that reaches the basement.
   */
  const recur = (idx, sum) => {
    if (sum === -1) return idx
    if (idx >= dir.length) throw new Error('Basement was never reached')

    if (dir[idx] === '(') return recur(idx + 1, sum + 1)
    else return recur(idx + 1, sum - 1)
  }

  return recur(0, 0)
}

module.exports = {
  fun: findBasePos,
  id: 'tail-recursion'
}
