const assert = require('node:assert/strict')
const { describe, it } = require('node:test')

const algorithms = require('./fibonacci-sequence.repo')

algorithms.forEach(({ fun, id }) => {
  describe(`Fibonacci sequence algorithm "${id}"`, () => {
    it('builds the Fibonacci sequence of the given length', () => {
      assert.deepEqual(fun(0), [])
      assert.deepEqual(fun(1), [0n])
      assert.deepEqual(fun(2), [0n, 1n])

      assert.deepEqual(
        fun(10),
        [0n, 1n, 1n, 2n, 3n, 5n, 8n, 13n, 21n, 34n]
      )
    })
  })
})
