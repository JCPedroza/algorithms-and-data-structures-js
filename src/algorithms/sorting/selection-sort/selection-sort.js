/**
 * Sorts a numeric array in-place using the Selection Sort approach.
 * Time complexity: O(n^2) for best, worst, and average.
 * Space complexity: total O(n) auxiliary O(1).
 * @param {number[]} nums Array to be sorted.
 * @returns {number[]} Sorted array.
 */
const selectionSort = (nums) => {
  for (let pivot = 0; pivot < nums.length - 1; pivot++) {
    let minValueIndex = pivot

    // Find minimum value and swap it with the pivot
    for (let target = pivot + 1; target < nums.length; target++) {
      if (nums[target] < nums[minValueIndex]) {
        minValueIndex = target
      }
    }

    [nums[pivot], nums[minValueIndex]] = [nums[minValueIndex], nums[pivot]]
  }

  return nums
}

module.exports = {
  fun: selectionSort,
  id: 'simple'
}
