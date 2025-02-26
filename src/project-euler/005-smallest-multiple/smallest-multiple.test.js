const assert = require('node:assert/strict')
const { describe, it } = require('node:test')

const solutions = require('./smallest-multiple.repo')

solutions.forEach(({ fun, id }) => {
  describe(`Smallest multiple algorithm "${id}"`, () => {
    it('finds the smallest number divisible by all from 1 to n', () => {
      assert.equal(
        fun(1),
        1
      )

      assert.equal(
        fun(2),
        2
      )

      assert.equal(
        fun(5),
        60
      )
    })
  })
})
