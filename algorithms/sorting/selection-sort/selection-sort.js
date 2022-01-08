/**
 * Sorts a numeric array in-place using the Selection Sort approach.
 * Time complexity: O(n^2) for best, worst, and average.
 * Space complexity: total O(n) auxiliary O(1).
 * @param {number[]} array Array to be sorted.
 * @returns {number[]} Sorted array.
 */
const selectionSort = (array) => {
  for (let pivot = 0; pivot < array.length - 1; pivot++) {
    let minValueIndex = pivot

    // Find minimum value and swap it with the pivot
    for (let target = pivot + 1; target < array.length; target++) {
      if (array[target] < array[minValueIndex]) {
        minValueIndex = target
      }
    }

    [array[pivot], array[minValueIndex]] = [array[minValueIndex], array[pivot]]
  }

  return array
}

module.exports = {
  algorithm: selectionSort,
  id: 'simple'
}
