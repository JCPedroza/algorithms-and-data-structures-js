/**
 * Sorts a numeric array in-place using the Bubble Sort method.
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 * @param {number[]} array Array to be sorted.
 * @returns {number[]} Sorted array.
 */
const bubbleSort = (array) => {
  for (let round = 0; round < array.length - 1; round++) {
    let ordered = true

    for (let index = 0; index < array.length - round - 1; index++) {
      if (array[index] > array[index + 1]) {
        [array[index], array[index + 1]] = [array[index + 1], array[index]]
        ordered = false
      }
    }

    if (ordered) break
  }

  return array
}

module.exports = {
  algorithm: bubbleSort,
  id: 'optimized bubble sort'
}
