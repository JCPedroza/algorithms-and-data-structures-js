/**
 * Sorts a numeric array in-place using the Bubble Sort approach.
 * Time complexity: O(n^2) for best, worst, and average
 * Space complexity: total O(n) auxiliary O(1)
 * @param {number[]} nums Array to be sorted.
 * @returns {number[]} Sorted array.
 */
const bubbleSort = (nums) => {
  for (let round = 0; round < nums.length - 1; round++) {
    for (let index = 0; index < nums.length - 1; index++) {
      if (nums[index] > nums[index + 1]) {
        [nums[index], nums[index + 1]] = [nums[index + 1], nums[index]]
      }
    }
  }

  return nums
}

module.exports = {
  fun: bubbleSort,
  id: 'simple'
}
