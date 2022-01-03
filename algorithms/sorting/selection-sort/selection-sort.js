/**
 * Sorts a numeric array in-place using the Selection Sort approach.
 * Time complexity: O(n^2) for best, worst, average
 * Space complexity: total O(n) auxiliary O(1)
 * @param {number[]} array Array to be sorted.
 * @returns {number[]} Sorted array.
 */
const selectionSort = (array) => {
  for (let pivot = 0; pivot < array.length - 1; pivot++) {
    let minValue = Infinity
    let minIndex = Infinity

    for (let target = pivot; target < array.length; target++) {
      if (array[target] < minValue) {
        minIndex = target
        minValue = array[target]
      }
    }

    [array[pivot], array[minIndex]] = [array[minIndex], array[pivot]]
  }

  return array
}

module.exports = {
  algorithm: selectionSort,
  id: 'simple'
}
