/**
 * Sorts a numeric array in-place using the Insertion Sort approach.
 * Time complexity: best O(n) worst O(n^2) average O(n^2).
 * Space complexity: total O(n) auxiliary O(1).
 * @param {number[]} array Array to be sorted.
 * @returns {number[]} Sorted array.
 */
const insertionSort = (array) => {
  for (let round = 1; round < array.length; round++) {
    let pivot = round

    // Swap with left value until a lower value is found
    while (pivot > 0 && array[pivot - 1] > array[pivot]) {
      [array[pivot - 1], array[pivot]] = [array[pivot], array[pivot - 1]]
      pivot--
    }
  }

  return array
}

module.exports = {
  algorithm: insertionSort,
  id: 'simple'
}
