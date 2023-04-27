const assert = require('node:assert/strict')
const { describe, it } = require('node:test')

const algorithms = require('./primes-up-to.repo')

algorithms.forEach(({ fun, id }) => {
  describe(`Primes-up-to algorithm "${id}"`, () => {
    it('calculates all prime numbers up to a given number', () => {
      assert.deepEqual(fun(1), [])
      assert.deepEqual(fun(11), [2, 3, 5, 7, 11])
    })
  })
})
