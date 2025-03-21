/**
 * Find the index of a value inside an array.
 *
 * Time complexity: O(1) best O(log n) worst O(log n).
 * Space complexity: O(log n)? height of recursion tree?
 *
 * @param {number[]} array Sorted array containing the value to be found.
 * @param {number} target Value to find inside the array.
 * @returns {number} Index of the value in the array, or -1 if value is
 * not found.
 */
const binarySearch = (array, target) => {
  /**
   * Helper recursive function.
   *
   * @param {number} start Index to start the search from.
   * @param {number} end Index to stop the search at.
   * @returns {number} Index of the value in the array.
   */
  const search = (start, end) => {
    const mid = Math.trunc((start + end) / 2)

    if (array[mid] === target) return mid
    if (start > end) return -1

    if (array[mid] < target) return search(mid + 1, end)
    else return search(start, mid - 1)
  }

  return search(0, array.length - 1)
}

module.exports = {
  fun: binarySearch,
  id: 'recursive'
}
