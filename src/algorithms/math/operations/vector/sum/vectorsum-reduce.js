/**
 * Sum the numbers in an array using reduce.
 * @param {number[]} nums Array of numbers.
 * @returns {number} Sum of the numbers in the array.
 */
const vsum = (nums) => nums.reduce((sum, num) => sum + num, 0)

module.exports = {
  fun: vsum,
  id: 'reduce'
}
