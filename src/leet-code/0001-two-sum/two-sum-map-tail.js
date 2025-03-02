/**
 * Finds the two indexes of the two numbers that add up to 'target'. Assumes
 * that there is exactly one solution. Uses a hash map to iterate only once,
 * and tail recursion.
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
  /**
   * Helper recursive function.
   *
   * @param {number} idx Current index.
   * @param {Map<number, number>} difIdxMap Map of differences - indexes.
   * @returns {[number, number]}
   */
  const twoSumRecur = (idx, difIdxMap) => {
    if (idx >= nums.length) {
      throw new Error(`Array [${nums}] has no solution for ${target}`)
    }

    const dif = target - nums[idx]
    if (difIdxMap.has(dif)) {
      return [difIdxMap.get(dif) ?? -1, idx]
    }

    return twoSumRecur(idx + 1, difIdxMap.set(nums[idx], idx))
  }

  return twoSumRecur(0, new Map())
}

module.exports = {
  fun: twoSum,
  id: 'hash-map tail-recursion'
}
