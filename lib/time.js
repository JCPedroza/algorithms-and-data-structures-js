/**
 * Any function with any number of arguments.
 * @callback function
 * @param {any} args Any number of arguments.
 * @returns {any} Can return anything.
 */

/**
 * Measures the running time of a function, in milliseconds.
 * @param {function} fun Function to be timed.
 * @param {any[]} args Function arguments.
 * @returns {number} Total run time of the function, in milliseconds.
 */
const timeFun = (fun, args) => {
  const start = performance.now()
  fun(...args)
  const end = performance.now()

  return end - start
}

/**
 * Shuffles an array, in place.
 * @param {any[]} arr Array to be shuffled.
 * @returns {any[]} Reference to the input array, now shuffled.
 */
const shuffle = (arr) => {
  for (let idx = arr.length - 1; idx >= 0; idx--) {
    const swapIdx = Math.floor(Math.random() * (idx + 1))
    ;[arr[idx], arr[swapIdx]] = [arr[swapIdx], arr[idx]]
  }

  return arr
}

/**
 * @typedef TimeRepoResult
 * @type {object}
 * @property {string} id Identifier or description of the timing.
 * @property {[string, number][]} sortedTimes Times in ascending order.
 * @property {any[]} args Arguments to the functions.
 * @property {number} runs Number of times that each function will be timed.
 */

/**
 * Measures the running time of multiple functions.
 * @param {function[]} algos Functions to be timed.
 * @param {any[]} args Arguments to the functions.
 * @param {number} runs Number of times that each function will be timed.
 * @param {string} id Identifier or description of the timing.
 * @returns {TimeRepoResult}
 */
const timeRepo = (algos, args, runs, id) => {
  if (runs < 1) throw new RangeError(`runs:${runs} must be > 0`)

  // Initialize data object
  const times = {}
  for (const algo of algos) {
    times[algo.id] = 0
  }

  // Run timing and sum results
  for (let r = 0; r < runs; r++) {
    shuffle(algos)
    for (const algo of algos) {
      times[algo.id] += timeFun(algo.fun, args)
    }
  }

  // Sort times
  const sortedTimes =
    Object
      .entries(times)
      .sort((a, b) => a[1] - b[1])

  return { id, sortedTimes, args, runs }
}

module.exports = {
  timeRepo
}
