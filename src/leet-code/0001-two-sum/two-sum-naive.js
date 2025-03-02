/**
 * Finds the two indexes of the two numbers that add up to 'target'. Assumes
 * that there is exactly one solution. Uses a naive brute-force approach.
 *
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 *
 * @throws {Error} Array must contain a solution.
 * @param {number[]} nums Numeric array to be searched.
 * @param {number} target Target sum to search for.
 * @returns {[number, number]} Indexes of the two numbers that add up to
 * 'target'.
 */
const twoSum = (nums, target) => {
  for (let pivotIdx = 0; pivotIdx < nums.length - 1; pivotIdx++) {
    for (let idx = pivotIdx + 1; idx < nums.length; idx++) {
      if (nums[pivotIdx] + nums[idx] === target) {
        return [pivotIdx, idx]
      }
    }
  }

  throw new Error(`Array [${nums}] has no solution for ${target}`)
}

module.exports = {
  fun: twoSum,
  id: 'naive'
}
