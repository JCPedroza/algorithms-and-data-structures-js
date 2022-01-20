/**
 * Sorts a numeric array in-place using the Insertion Sort approach.
 * Time complexity: best O(n) worst O(n^2) average O(n^2).
 * Space complexity: total O(n) auxiliary O(1).
 * @param {number[]} nums Array to be sorted.
 * @returns {number[]} Sorted array.
 */
const insertionSort = (nums) => {
  for (let round = 1; round < nums.length; round++) {
    let pivot = round

    // Swap with left value until a lower value is found
    while (pivot > 0 && nums[pivot - 1] > nums[pivot]) {
      [nums[pivot - 1], nums[pivot]] = [nums[pivot], nums[pivot - 1]]
      pivot--
    }
  }

  return nums
}

module.exports = {
  algorithm: insertionSort,
  id: 'simple'
}
