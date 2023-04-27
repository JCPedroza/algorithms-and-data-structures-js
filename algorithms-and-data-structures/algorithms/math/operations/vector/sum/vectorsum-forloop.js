/**
 * Sum the numbers in an array using for loop.
 * @param {number[]} nums Array of numbers.
 * @returns {number} Sum of the numbers in the array.
 */
const vsum = (nums) => {
  let sum = 0
  for (const num of nums) sum += num
  return sum
}

module.exports = {
  fun: vsum,
  id: 'for loop'
}
