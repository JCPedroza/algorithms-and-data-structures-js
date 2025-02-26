/**
 * Reverses the order of the input array.
 * Time complexity: n/2 = O(n).
 * Space complexity: O(n) total, O(1) auxiliary.
 * @param {any[]} array Array to be reversed.
 * @returns Reversed array (in-place).
 */
const reverseArray = (array) => {
  const mid = Math.trunc(array.length / 2)

  for (let left = 0; left < mid; left++) {
    const right = array.length - left - 1
    ;[array[left], array[right]] = [array[right], array[left]]
  }

  return array
}

module.exports = {
  fun: reverseArray,
  id: 'swap'
}
