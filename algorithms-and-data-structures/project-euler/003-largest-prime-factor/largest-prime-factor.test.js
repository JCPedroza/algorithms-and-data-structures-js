const assert = require('node:assert/strict')
const { describe, it } = require('node:test')

const solutions = require('./largest-prime-factor.repo')

solutions.forEach(({ fun, id }) => {
  describe(`Largest prime factor algorithm "${id}"`, () => {
    it('finds the largest prime factor of a number', () => {
      assert.equal(
        fun(2),
        2
      )

      assert.equal(
        fun(7),
        7
      )

      assert.equal(
        fun(154),
        11
      )
    })
  })
})
