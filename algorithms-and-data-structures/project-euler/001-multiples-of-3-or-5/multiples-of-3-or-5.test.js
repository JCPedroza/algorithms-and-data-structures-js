const assert = require('node:assert/strict')
const { describe, it } = require('node:test')

const solutions = require('./multiples-of-3-or-5.repo')

for (const { fun, id } of solutions) {
  describe(`Project Euler "Multiples of 3 or 5" solution "${id}"`, () => {
    it('sums multiples of 3 or 5 that are smaller than the input', () => {
      assert.equal(
        fun(0),
        0
      )

      assert.equal(
        fun(10),
        23
      )

      assert.equal(
        fun(100),
        2_318
      )
    })

    it('returns 0 for negative input', () => {
      assert.equal(
        fun(-10),
        0
      )
    })

    it('converts numerical input to integer', () => {
      assert.equal(
        fun(15.9),
        fun(15)
      )
    })
  })
}
