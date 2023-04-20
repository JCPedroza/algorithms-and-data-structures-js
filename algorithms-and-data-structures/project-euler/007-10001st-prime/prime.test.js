const assert = require('node:assert/strict')
const { describe, it } = require('node:test')

const solutions = require("./prime.repo")

solutions.forEach(({ fun, id }) => {
  describe(`Prime number solution "${id}"`, () => {
    it('computes the nth prime number', () => {
      assert.equal(
        fun(1),
        2
      )

      assert.equal(
        fun(2),
        3
      )

      assert.equal(
        fun(3),
        5
      )

      assert.equal(
        fun(4),
        7
      )

      assert.equal(
        fun(5),
        11
      )
    })

    it('throws error for invalid indexes', () => {
      assert.throws(
        () => fun(0)
      )

      assert.throws(
        () => fun(-1)
      )

      assert.throws(
        () => fun()
      )
    })
  })
})
