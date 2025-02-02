/**
 * Measures the running time of a function, in milliseconds
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
 * Shuffles array, in place.
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

const timeRepo = (algos, args, runs, id) => {
  const times = {}
  for (const algo of algos) {
    times[algo.id] = 0
  }

  for (let r = 0; r < runs; r++) {
    shuffle(algos)

    for (const algo of algos) {
      times[algo.id] += timeFun(algo.fun, args)
    }
  }

  const sortedTimes =
    Object
      .entries(times)
      .sort((a, b) => a[1] - b[1])

  return { id, sortedTimes, args, runs }
}

module.exports = {
  timeRepo
}
