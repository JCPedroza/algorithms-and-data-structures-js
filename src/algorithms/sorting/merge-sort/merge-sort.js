/**
 * Unpacks 'number | undefined' type into 'number'
 *
 * @private
 * @param {number[]} array Numeric array.
 * @returns {number} Shifted array value.
 */
const shift = (array) => array.shift() ?? 0

/**
 * Merges two ordered arrays into one ordered array.
 *
 * @private
 * @param {number[]} left One of the arrays to be merged.
 * @param {number[]} right One of the arrays to be merged.
 * @returns {number[]} Merged array.
 */
const merge = (left = [], right = []) => {
  /** @type {number[]} */
  const sorted = []

  while (left.length && right.length) {
    sorted.push(left[0] <= right[0] ? shift(left) : shift(right))
  }

  return [...sorted, ...left, ...right]
}

/**
 * Sorts a numeric array using the merge sort approach.
 *
 * Time complexity: O(n log n) for best, worst, and average.
 * Space complexity: total O(n) auxiliary O(n).
 *
 * @param {number[]} nums Array to be sorted.
 * @returns {number[]} Sorted array.
 */
const mergeSort = (nums) => {
  if (nums.length < 2) return nums

  const midIndex = nums.length / 2
  const left = nums.slice(0, midIndex)
  const right = nums.slice(midIndex, nums.length)

  return merge(mergeSort(left), mergeSort(right))
}

module.exports = {
  fun: mergeSort,
  id: 'simple'
}
