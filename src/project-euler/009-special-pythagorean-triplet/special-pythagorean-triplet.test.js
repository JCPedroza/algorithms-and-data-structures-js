const assert = require('node:assert/strict')
const { describe, it } = require('node:test')

const solutions = require('./special-pythagorean-triplet.repo')

for (const { fun, id } of solutions) {
  describe(`Project euler solution "${id}"`, () => {
    it('finds a specific special pythagorean triplet', () => {
      assert.equal(
        fun(24),
        480
      )

      assert.equal(
        fun(1_000),
        31_875_000
      )

      // Output can be one of three values.
      assert(
        [49_920, 55_080, 60_000].includes(fun(120))
      )
    })
  })
}
