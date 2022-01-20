/**
 * Sorts a numeric array in-place using the Selection Sort approach.
 * Doubles the number of comparisons to achieve best O(n) time complexity.
 * Time complexity: best O(n) worst O(n^2) average O(n^2).
 * Space complexity: total O(n) auxiliary O(1).
 * @param {number[]} nums Array to be sorted.
 * @returns {number[]} Sorted array.
 */
const selectionSort = (nums) => {
  for (let pivot = 0; pivot < nums.length - 1; pivot++) {
    let min = pivot
    let sorted = true

    // Find min value and check if nums is already sorted to end loop early
    for (let target = pivot + 1; target < nums.length; target++) {
      if (nums[target] < nums[min]) {
        min = target
      }

      if (nums[target - 1] > nums[target]) {
        sorted = false
      }
    }

    [nums[pivot], nums[min]] = [nums[min], nums[pivot]]
    if (sorted) break
  }

  return nums
}

module.exports = {
  algorithm: selectionSort,
  id: 'kind of optimized'
}
