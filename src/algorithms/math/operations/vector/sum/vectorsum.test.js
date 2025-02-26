const assert = require('node:assert/strict')
const { describe, it } = require('node:test')

const algorithms = require('./vectorsum.repo')

algorithms.forEach(({ fun, id }) => {
  describe(`Vectorsum algorithm "${id}"`, () => {
    it('computes the sum of all the numbers in an array', () => {
      assert.equal(fun([]), 0)
      assert.equal(fun([5]), 5)
      assert.equal(fun([1, 2, -4, 10, -21]), -12)
    })
  })
})
