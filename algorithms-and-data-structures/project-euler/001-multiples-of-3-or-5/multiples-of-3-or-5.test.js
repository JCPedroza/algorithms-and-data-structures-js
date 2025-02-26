const assert = require('node:assert/strict')
const { describe, it } = require('node:test')

const solutions = require('./multiples-of-3-or-5.repo')

for (const { fun, id } of solutions) {
  describe(`Project Euler "Multiples of 3 or 5" solution "${id}"`, () => {
    it('sums multiples that are valued less than a small input', () => {
      assert.equal(fun(0), 0)
      assert.equal(fun(1), 0)
      assert.equal(fun(2), 0)
      assert.equal(fun(3), 0)
      assert.equal(fun(4), 3)
      assert.equal(fun(5), 3)
      assert.equal(fun(6), 8)
    })

    it('sums multiples that are valued less than a medium input', () => {
      assert.equal(fun(1_000), 233_168)
    })

    it('returns 0 for negative input', () => {
      assert.equal(fun(-10), 0)
    })

    it('treats fractional input as integer', () => {
      assert.equal(fun(15.9), fun(15))
    })
  })
}
