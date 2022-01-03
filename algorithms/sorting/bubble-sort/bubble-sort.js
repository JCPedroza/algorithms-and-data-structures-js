/**
 * Sorts a numeric array in-place using the Bubble Sort approach.
 * Time complexity: O(n^2) for best, worst, and average
 * Space complexity: total O(n) auxiliary O(1)
 * @param {number[]} array Array to be sorted.
 * @returns {number[]} Sorted array.
 */
const bubbleSort = (array) => {
  for (let round = 0; round < array.length - 1; round++) {
    for (let index = 0; index < array.length - 1; index++) {
      if (array[index] > array[index + 1]) {
        [array[index], array[index + 1]] = [array[index + 1], array[index]]
      }
    }
  }

  return array
}

module.exports = {
  algorithm: bubbleSort,
  id: 'simple'
}
