/**
 * Sorts a numeric array in-place using the Bubble Sort approach.
 * Time complexity: best O(n) average O(n^2) worst O(n^2)
 * Space complexity: total O(n) auxiliary O(1)
 * @param {number[]} nums Array to be sorted.
 * @returns {number[]} Sorted array.
 */
const bubbleSort = (nums) => {
  let ordered
  let round = 0

  do {
    ordered = true

    for (let index = 0; index < nums.length - round - 1; index++) {
      if (nums[index] > nums[index + 1]) {
        [nums[index], nums[index + 1]] = [nums[index + 1], nums[index]]
        ordered = false
      }
    }

    round++
  } while (!ordered)

  return nums
}

module.exports = {
  fun: bubbleSort,
  id: 'optimized while loop'
}
