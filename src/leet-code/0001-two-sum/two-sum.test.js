const assert = require('node:assert/strict')
const { describe, it } = require('node:test')

const solutions = require('./two-sum.repo')

for (const { fun, id } of solutions) {
  describe(`Leetcode 0001 'Two Sum' solution ${id}`, () => {
    it('Solves array of length 2', () => {
      assert.deepEqual(
        fun([3, 2], 5),
        [0, 1]
      )
    })

    it('Solves array of lengh 4', () => {
      assert.deepEqual(
        fun([4, -7, 9, 2], 11),
        [2, 3]
      )
    })

    it('Solves array of lengh 5', () => {
      assert.deepEqual(
        fun([4, -7, 9, 2, -5], -12),
        [1, 4]
      )
    })

    it('Solves for sume of the same values', () => {
      assert.deepEqual(
        fun([4, 8, -7, 8, 3], 16),
        [1, 3]
      )
    })

    it('Throws error if no solution is found in array of length 5', () => {
      assert.throws(() => fun([3, 2, 1, 0, -1], -10), Error)
    })

    it('Throws error if no solution is found in array of length 2', () => {
      assert.throws(() => fun([3, 2], 9), Error)
    })

    it('Throws error if no solution is found in array of length 1', () => {
      assert.throws(() => fun([3], -6), Error)
    })

    it('Throws error if no solution is found in array of length 0', () => {
      assert.throws(() => fun([], 7), Error)
    })
  })
}
