/**
 * Sorts a numeric array using the Quick Sort approach.
 * Stable, but at the price of O(n) space complexity and O(n log n) best
 * time complexity.
 * Time complexity: best O(n log n) worst O(n^2) Average O(n log n)
 * Space complexity: total O(n) auxiliary O(n).
 * @param {number[]} array Array to be sorted.
 * @returns {number[]} Sorted array.
 */
const quickSort = (array) => {
  if (array.length < 2) return array

  const pivot = array[0]
  const left = []
  const right = []

  for (let index = 1; index < array.length; index++) {
    array[index] < pivot ? left.push(array[index]) : right.push(array[index])
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}

module.exports = {
  algorithm: quickSort,
  id: 'stable'
}
