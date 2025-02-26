const assert = require('node:assert/strict')
const { describe, it } = require('node:test')

const algorithms = require('./primes-of-length.repo')

algorithms.forEach(({ fun, id }) => {
  describe(`Prime numbers algorithm "${id}"`, () => {
    it('builds an array of the first n prime numbers', () => {
      assert.deepEqual(fun(0), [])
      assert.deepEqual(fun(1), [2])
      assert.deepEqual(fun(2), [2, 3])
      assert.deepEqual(fun(7), [2, 3, 5, 7, 11, 13, 17])
    })
  })
})
