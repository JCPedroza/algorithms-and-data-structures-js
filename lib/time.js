/**
 * Any function with any number of arguments.
 *
 * @callback function
 * @param {any} args Any number of arguments.
 * @returns {any} Can return anything.
 */

/**
 * Measures the running time of a function, in milliseconds.
 *
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
 *
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
 *
 * @param {function[]} algos Functions to be timed.
 * @param {any[]} args Arguments to the functions.
 * @param {number} runs Number of times that each function will be timed.
 * @param {string} id Identifier or description of the timing.
 * @returns {TimeRepoResult}
 */
const timeRepo = (algos, args, runs, id) => {
  if (runs < 1) throw new RangeError(`runs:${runs} must be > 0`)
  console.log('\nMeasuring running time...\n')

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

  // Sort times in ascending order
  const sortedTimes = Object
    .entries(times)
    .sort((a, b) => a[1] - b[1])

  return { id, sortedTimes, args, runs }
}

/**
 * Parses a result object into a print-friendly string.
 *
 * @param {TimeRepoResult} result Result to be parsed.
 * @returns {string} A print-friendly string.
 */
const parseResult = ({ id, sortedTimes, args, runs }) => {
  const strArgs = args.map(arg => arg.toLocaleString())
  const strRuns = runs.toLocaleString()

  let parsedResult =
    `${id}\nargument list: (${strArgs})\nnumber of runs: ${strRuns}\n\n`

  for (let idx = 0; idx < sortedTimes.length; idx++) {
    const left = `${idx + 1}: ${sortedTimes[idx][1].toFixed(3)} ms - `
    const right = `${sortedTimes[idx][0]}\n`
    parsedResult += `${left}${right}`
  }

  return parsedResult
}

/**
 * Measure the running time of multiple functions and parse the results into
 * a print-friendly string.
 *
 * @param {function[]} algos Functions to be timed.
 * @param {any[]} args Arguments to the functions.
 * @param {number} runs Number of times that each function will be timed.
 * @param {string} id Identifier or description of the timing.
 * @returns {string} A print-friendly string.
 */
const timeAndReport = (algos, args, runs, id) =>
  console.log(parseResult(timeRepo(algos, args, runs, id)))

module.exports = {
  timeRepo,
  timeAndReport
}
