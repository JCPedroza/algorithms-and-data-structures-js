const assert = require('node:assert/strict')
const { describe, it } = require('node:test')

const algorithms = require('./reverse-array.repo')

algorithms.forEach(({ fun, id }) => {
  describe(`Reverse array algorithms "${id}"`, () => {
    it('reverses order of array items', () => {
      assert.deepEqual(fun([]), [])
      assert.deepEqual(fun([1]), [1])
      assert.deepEqual(fun([1, 2, 3]), [3, 2, 1])

      assert.deepEqual(
        fun(['a', 'b', 'c', 'd']),
        ['d', 'c', 'b', 'a']
      )

      assert.throws(() => fun())
    })
  })
})
