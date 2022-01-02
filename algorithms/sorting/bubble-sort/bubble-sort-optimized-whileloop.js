/**
 * Sorts a numeric array in-place using the Bubble Sort method.
 * Time complexity: best O(n) average O(n^2) worst O(n^2)
 * Space complexity: total O(n) auxiliary O(1)
 * @param {number[]} array Array to be sorted.
 * @returns {number[]} Sorted array.
 */
const bubbleSort = (array) => {
  let ordered
  let round = 0

  do {
    ordered = true

    for (let index = 0; index < array.length - round - 1; index++) {
      if (array[index] > array[index + 1]) {
        [array[index], array[index + 1]] = [array[index + 1], array[index]]
        ordered = false
      }
    }

    round++
  } while (!ordered)

  return array
}

module.exports = {
  algorithm: bubbleSort,
  id: 'optimized while loop'
}
