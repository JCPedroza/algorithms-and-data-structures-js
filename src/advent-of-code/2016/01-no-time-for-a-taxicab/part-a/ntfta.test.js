const { describe, it } = require('node:test')
const assert = require('assert/strict')

const { readFileSync } = require('fs')
const { join } = require('path')

const solutions = require('./ntfta.repo')

const bigInputPath = join(__dirname, '../input-big.txt')
const bigInput = readFileSync(bigInputPath, 'utf-8')

for (const { fun, id } of solutions) {
  describe(`Advent of Code 'No Time for a Taxicab' solution '${id}'`, () => {
    it('solves for empty directions', () => {
      assert.equal(fun(''), 0)
    })

    it('solves for two directions', () => {
      assert.equal(fun('R2, L3'), 5)
    })

    it('solves big-sized directions (solves the puzzle)', () => {
      assert.equal(fun(bigInput), 236)
    })
  })
}
