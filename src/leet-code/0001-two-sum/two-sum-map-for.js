/**
 * Finds the two indexes of the two numbers that add up to 'target'. Assumes
 * that there is exactly one solution. Uses a hash map to iterate only once, and
 * one for loop.
 *
 * Time complexity: O(n)
 * Space complexity: O(n) (space used by the hash map)
 *
 * @throws {Error} Array must contain a solution.
 * @param {number[]} nums Numeric array to be searched.
 * @param {number} target Target sum to search for.
 * @returns {[number, number]} Indexes of the two numbers that add up to
 * 'target'.
 */
const twoSum = (nums, target) => {
  /** @type {Map<number, number>} */
  const difIdxMap = new Map()

  for (let idx = 0; idx < nums.length; idx++) {
    const dif = target - nums[idx]
    if (difIdxMap.has(dif)) return [difIdxMap.get(dif) ?? -1, idx]
    else difIdxMap.set(nums[idx], idx)
  }

  throw new Error(`Array [${nums}] has no solution for ${target}`)
}

module.exports = {
  fun: twoSum,
  id: 'hash-map for-loop'
}
