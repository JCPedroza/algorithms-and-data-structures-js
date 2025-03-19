/**
 * Finds the floor where santa needs to deliver presents. Uses tail recursion.
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 *
 * @param {string} dir Floor directions.
 * @returns {number} Floor number.
 */
const findFloor = (dir) => {
  /**
   * Recursive helper function.
   * @param {number} idx Current index.
   * @param {number} sum Current sum.
   */
  const recur = (idx, sum) => {
    if (idx >= dir.length) return sum
    if (dir[idx] === '(') return recur(idx + 1, sum + 1)
    else return recur(idx + 1, sum - 1)
  }

  return recur(0, 0)
}

module.exports = {
  fun: findFloor,
  id: 'tail-recursion'
}
