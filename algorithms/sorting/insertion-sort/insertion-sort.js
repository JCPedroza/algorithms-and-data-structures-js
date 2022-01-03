/**
 * Sorts a numeric array in-place using the Insertion Sort approach.
 * Time complexity: O(n^2) for best, worst, and average
 * Space complexity: total O(n) auxiliary O(1)
 * @param {number[]} array Array to be sorted.
 * @returns {number[]} Sorted array.
 */
const insertionSort = (array) => {
  for (let round = 0; round < array.length; round++) {
    let index = round

    while (index > 0 && array[index - 1] > array[index]) {
      [array[index - 1], array[index]] = [array[index], array[index - 1]]
      index--
    }
  }

  return array
}

module.exports = {
  algorithm: insertionSort,
  id: 'simple'
}
