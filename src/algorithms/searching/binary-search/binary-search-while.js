/**
 * Find the index of a value inside an array.
 *
 * Time complexity: O(1) best O(log n) worst O(log n).
 * Space complexity: O(1).
 *
 * @param {number[]} array Sorted array containing the value to be found.
 * @param {number} searchValue Value to find inside the array.
 * @returns {number} Index of the value in the array, or -1 if value is
 * not found.
 */
const binarySearch = (array, searchValue) => {
  let leftLimit = 0
  let rightLimit = array.length - 1

  while (leftLimit <= rightLimit) {
    const midIndex = Math.trunc((leftLimit + rightLimit) / 2)

    if (array[midIndex] === searchValue) {
      return midIndex
    }

    if (array[midIndex] < searchValue) {
      leftLimit = midIndex + 1
    } else {
      rightLimit = midIndex - 1
    }
  }

  return -1
}

module.exports = {
  fun: binarySearch,
  id: 'while-loop'
}
