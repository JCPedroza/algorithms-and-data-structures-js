const solutions = require('./even-fibo.repo')

const assert = require('node:assert/strict')
const { describe, it } = require('node:test')

solutions.forEach(({ fun, id }) => {
  describe(`Even fibonacci algorithm "${id}"`, () => {
    it('sums even fibo numbers up to the given limit', () => {
      assert.equal(
        fun(-1),
        0
      )

      assert.equal(
        fun(0),
        0
      )

      assert.equal(
        fun(2),
        2
      )

      assert.equal(
        fun(10),
        10
      )

      assert.equal(
        fun(60),
        44
      )
    })
  })
})
