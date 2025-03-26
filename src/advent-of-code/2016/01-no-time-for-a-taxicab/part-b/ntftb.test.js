const { describe, it } = require('node:test')
const assert = require('node:assert/strict')

const { readFileSync } = require('fs')
const { join } = require('path')

const solutions = require('./ntftb.repo')

const bigInputPath = join(__dirname, '../input-big.txt')
const bigInput = readFileSync(bigInputPath, 'utf-8')

for (const { fun, id } of solutions) {
  describe(`Advent of Code 'No Time for a Taxicab p2' solution '${id}'`, () => {
    it('throws for empty directions', () => {
      assert.throws(() => fun(''))
    })

    it('throws for directions without solution', () => {
      assert.throws(() => fun('R2, L2, R2, L2'))
    })

    it('solves for four directions', () => {
      assert.equal(fun('R8, R4, R4, R8'), 4)
    })

    it('solves big-sized directions (solves the puzzle)', () => {
      assert.equal(fun(bigInput), 182)
    })
  })
}
