/**
 * Finds the floor where santa needs to deliver presents. Uses recursion.
 *
 * Time complexity: O(n)
 * Space complexity: O(n^2) (string copy in each call stack)
 *
 * @param {string} dir Floor directions.
 * @returns {number} Floor number.
 */
const findFloor = (dir) => {
  if (dir.length === 0) return 0
  if (dir[0] === '(') return 1 + findFloor(dir.slice(1))
  else return -1 + findFloor(dir.slice(1))
}

module.exports = {
  fun: findFloor,
  id: 'recursion'
}
