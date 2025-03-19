/**
 * Finds the position of the first character that causes santa to enter the
 * basement (floor -1). Uses a while loop.
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 *
 * @param {string} dir Floor directions.
 * @returns {number} Position of first character that reaches the basement.
 */
const findBasePos = (dir) => {
  let floor = 0
  let idx = 0

  while (idx < dir.length) {
    if (dir[idx] === '(') floor++
    else floor--

    if (floor === -1) return idx + 1

    idx++
  }

  throw new Error('Basement was never reached')
}

module.exports = {
  fun: findBasePos,
  id: 'while-loop'
}
