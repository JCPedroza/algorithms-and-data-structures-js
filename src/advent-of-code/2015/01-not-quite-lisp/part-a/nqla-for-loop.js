/**
 * Finds the floor where santa needs to deliver presents. Uses a for loop.
 *
 * Time complexity: O(n)
 * Space complecity: O(1)
 *
 * @param {string} dir Floor directions.
 * @returns {number} Floor number.
 */
const findFloor = (dir) => {
  let floor = 0

  for (const char of dir) {
    if (char === '(') floor++
    else floor--
  }

  return floor
}

module.exports = {
  fun: findFloor,
  id: 'for-loop'
}
