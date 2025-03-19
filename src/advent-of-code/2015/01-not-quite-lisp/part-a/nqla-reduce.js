/**
 * Finds the floor where santa needs to deliver presents. Uses the spread
 * operator, and the map, reduce methods.
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 *
 * @param {string} dir Floor directions.
 * @returns {number} Floor number.
 */
const findFloor = (dir) =>
  [...dir]
    .map((char) => char === '(' ? 1 : -1)
    .reduce((sum, num) => num + sum, 0)

module.exports = {
  fun: findFloor,
  id: 'spread-map-reduce'
}
