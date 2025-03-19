/**
 * Finds the position of the first character that causes santa to enter the
 * basement (floor -1). Uses a for loop.
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 *
 * @param {string} dir Floor directions.
 * @returns {number} Position of first character that reaches the basement.
 */
const findBasePos = (dir) => {
  let floor = 0

  for (let idx = 0; idx < dir.length; idx++) {
    if (dir[idx] === '(') floor++
    else floor--

    if (floor === -1) return idx + 1
  }

  throw new Error('Basement was never reached')
}

module.exports = {
  fun: findBasePos,
  id: 'for-loop'
}
