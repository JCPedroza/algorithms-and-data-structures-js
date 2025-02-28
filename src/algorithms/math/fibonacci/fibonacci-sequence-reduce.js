/**
 * Builds the Fibonacci sequence using the reduce pattern.
 * Time complexity: O(n)
 * Space complexity: O(n)
 * @param {number} length Length of the Fibonacci sequence.
 * @returns {bigint[]} Fibonacci sequence of the specified length.
 */
const fibonacciSequence = (length) => {
  const fibos = [0n, 1n]
  if (length < 2) return fibos.slice(0, length)

  return [...Array(length - 2).keys()].reduce(fibos => {
    const idxMinOne = fibos.at(-1) ?? 0n
    const idxMinTwo = fibos.at(-2) ?? 0n
    fibos.push(idxMinOne + idxMinTwo)
    return fibos
  }, fibos)
}

module.exports = {
  fun: fibonacciSequence,
  id: 'reduce'
}
