/**
 * Sum the numbers in an array using recursion.
 * @param {number[]} nums Array of numbers.
 * @returns {number} Sum of the numbers in the array.
 */
const vsum = (nums) => {
  if (nums.length) {
    const [head, ...tail] = nums
    return head + vsum(tail)
  }
  return 0
}

module.exports = {
  fun: vsum,
  id: 'recursive'
}
