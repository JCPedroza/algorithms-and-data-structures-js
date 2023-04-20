const assert = require('node:assert/strict')
const { describe, it } = require('node:test')
const { join } = require('path')

const solutions = require('./series-largest-product.repo')

const bigNumPath = join(__dirname, '/big-number.txt')

solutions.forEach(({ fun, id }) => {
  describe(`Solution for project euler problem "${id}"`, () => {
    it('computes the largest product in a series', () => {
      assert.equal(
        fun(bigNumPath, 4),
        5_832
      )

      assert.equal(
        fun(bigNumPath, 13),
        23_514_624_000
      )
    })
  })
})
