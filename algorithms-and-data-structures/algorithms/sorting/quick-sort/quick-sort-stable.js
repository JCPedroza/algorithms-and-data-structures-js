/**
 * Sorts a numeric array using the Quick Sort approach.
 * Stable, but at the price of O(n) space complexity and O(n log n) best
 * time complexity.
 * Time complexity: best O(n log n) worst O(n^2) average O(n log n)
 * Space complexity: total O(n) auxiliary O(n).
 * @param {number[]} nums Array to be sorted.
 * @returns {number[]} Sorted array.
 */
const quickSort = (nums) => {
  if (nums.length < 2) return nums

  const pivot = nums[0]
  const left = []
  const right = []

  for (let index = 1; index < nums.length; index++) {
    nums[index] < pivot ? left.push(nums[index]) : right.push(nums[index])
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}

module.exports = {
  algorithm: quickSort,
  id: 'stable, not-in-place, recursive'
}
