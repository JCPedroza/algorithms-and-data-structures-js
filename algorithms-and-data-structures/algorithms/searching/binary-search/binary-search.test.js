const assert = require('node:assert/strict')
const { describe, it } = require('node:test')

const algorithms = require('./binary-search.repo')

algorithms.forEach(({ fun, id }) => {
  describe(`Binary search algorithm "${id}"`, () => {
    it('finds value in array', () => {
      assert.equal(fun([0, 1, 2, 3, 4], 0), 0)
      assert.equal(fun([0, 1, 2, 3, 4], 2), 2)
      assert.equal(fun([0, 1, 2, 3, 4], 4), 4)
      assert.equal(fun([0, 1, 2, 3, 4], 5), -1)
    })
  })
})
