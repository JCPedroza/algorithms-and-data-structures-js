const assert = require('node:assert/strict')
const { describe, it } = require('node:test')

/**
 * Interface for sorting algorithms.
 *
 * @typedef SortingAlgorithm
 * @property {string} id Name of the algorithm.
 * @property {(nums: number[]) => number[]} fun Sorting function.
 */

/**
 * Create unit tests for a sorting algorithm.
 *
 * @param {SortingAlgorithm[]} algorithms Array with sorting algorithms.
 * @param {string} sortName Name of the sorting algorithms.
 */
const testSorters = (algorithms, sortName) => {
  algorithms.forEach(({ fun, id }) => {
    describe(`${sortName} algorithm "${id}"`, () => {
      it('sorts numeric arrays', () => {
        assert.deepEqual(fun([]), [])
        assert.deepEqual(fun([9]), [9])

        assert.deepEqual(
          fun([3, 2, 1, 0, -1, -2, -3]),
          [-3, -2, -1, 0, 1, 2, 3]
        )

        assert.deepEqual(
          fun([-13.9, 2.1, 13.9, 2.0, 2.2, -21, 7.092]),
          [-21, -13.9, 2.0, 2.1, 2.2, 7.092, 13.9]
        )
      })
    })
  })
}

module.exports = {
  testSorters
}
