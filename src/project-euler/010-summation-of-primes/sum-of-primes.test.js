const assert = require('node:assert/strict')
const { describe, it } = require('node:test')

const solutions = require('./sum-of-primes.repo')

solutions.forEach(({ fun, id }) => {
  describe(`Project euler solution "${id}"`, () => {
    it('computes the sum of prime numbers below a given number', () => {
      assert.equal(
        fun(-1),
        0
      )

      assert.equal(
        fun(0),
        0
      )

      assert.equal(
        fun(10),
        17
      )

      assert.equal(
        fun(17),
        41
      )

      assert.equal(
        fun(29), 100
      )
    })

    it('throws an error when called with non-numeric argument', () => {
      assert.throws(
        () => fun()
      )

      assert.throws(
        () => fun(true)
      )

      assert.throws(
        () => fun('ca')
      )
    })
  })
})
