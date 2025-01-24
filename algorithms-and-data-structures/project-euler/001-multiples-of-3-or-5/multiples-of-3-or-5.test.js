const assert = require('node:assert/strict')
const { describe, it } = require('node:test')

const solutions = require('./multiples-of-3-or-5.repo')

solutions.forEach(({ fun, id }) => {
  describe(`Multiples of 3 or 5 solution "${id}"`, () => {
    it('sums the multiples of 3 or 5 below the given input', () => {
      assert.equal(
        fun(-10),
        0
      )

      assert.equal(
        fun(10.9),
        23
      )

      assert.equal(
        fun(0),
        0
      )

      assert.equal(
        fun(10),
        23
      )

      assert.equal(
        fun(100),
        2_318
      )
    })
  })
})
