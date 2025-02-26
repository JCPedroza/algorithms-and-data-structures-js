const assert = require('node:assert/strict')
const { describe, it } = require('node:test')

const solutions = require('./sum-sqr-dif.repo')

solutions.forEach(({ fun, id }) => {
  describe(`Sum square diffrerence solution "${id}"`, () => {
    it('calculates the difference of the sums', () => {
      assert.equal(
        fun(0),
        0
      )

      assert.equal(
        fun(1),
        0
      )

      assert.equal(
        fun(10),
        2_640
      )
    })
  })
})
