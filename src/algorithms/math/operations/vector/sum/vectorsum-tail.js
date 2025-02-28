/**
 * Sum the numbers in an array using tail recursion.
 *
 * @param {number[]} nums Array of numbers to sum.
 * @returns {number} Sum of the numbers in the array.
 */
const vsum = (nums) => {
  /**
   * Helper recursive function.
   *
   * @param {number[]} nums Array of numbers to sum.
   * @param {number} sum Currently accumulated sum.
   * @returns {number} Total accumulated sum.
   */
  const loop = (nums, sum = 0) => {
    if (nums.length) {
      const [head, ...tail] = nums
      return loop(tail, head + sum)
    }
    return sum
  }

  return loop(nums)
}

module.exports = {
  fun: vsum,
  id: 'tail recursion'
}
