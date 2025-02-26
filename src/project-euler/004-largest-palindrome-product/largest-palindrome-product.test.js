const assert = require('node:assert/strict')
const { describe, it } = require('node:test')

const solutions = require('./largest-palindrome-product.repo')

solutions.forEach(({ fun, id }) => {
  describe(`Largest palindrome product algorithm "${id}"`, () => {
    it('finds the largest palindrome product of small numbers', () => {
      assert.equal(
        fun(2),
        9_009
      )

      assert.equal(
        fun(3),
        906_609
      )
    })
  })
})
