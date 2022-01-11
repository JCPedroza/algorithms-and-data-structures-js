/**
 * Sorts a numeric array in-place using the Selection Sort approach.
 * Doubles the number of comparisons to achieve best O(n) time complexity.
 * Time complexity: best O(n) worst O(n^2) average O(n^2).
 * Space complexity: total O(n) auxiliary O(1).
 * @param {number[]} array Array to be sorted.
 * @returns {number[]} Sorted array.
 */
const selectionSort = (array) => {
  for (let pivot = 0; pivot < array.length - 1; pivot++) {
    let min = pivot
    let sorted = true

    // Find min value and check if array is already sorted to end loop early
    for (let target = pivot + 1; target < array.length; target++) {
      if (array[target] < array[min]) {
        min = target
      }

      if (array[target - 1] > array[target]) {
        sorted = false
      }
    }

    [array[pivot], array[min]] = [array[min], array[pivot]]
    if (sorted) break
  }

  return array
}

module.exports = {
  algorithm: selectionSort,
  id: 'kind of optimized'
}
