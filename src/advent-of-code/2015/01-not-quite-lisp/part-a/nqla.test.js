const { describe, it } = require('node:test')
const assert = require('node:assert/strict')

const { readFileSync } = require('fs')
const { join } = require('path')

const solutions = require('./nqla.repo')

const bigInputPath = join(__dirname, '../input-big.txt')
const bigInput = readFileSync(bigInputPath, 'utf-8')

for (const { fun, id } of solutions) {
  describe(`Advent of Code 'Not Quite Lisp (part a)' solution '${id}'`, () => {
    it('Solves empty string', () => {
      assert.equal(fun(''), 0)
    })

    it('Solves string of length 1', () => {
      assert.equal(fun('('), 1)
      assert.equal(fun(')'), -1)
    })

    it('Solves string of length 4', () => {
      assert.equal(fun('(())'), 0)
      assert.equal(fun('()()'), 0)
      assert.equal(fun('((()'), 2)
      assert.equal(fun('))))'), -4)
    })

    it('Solves big input', () => {
      assert.equal(fun(bigInput), 232)
    })
  })
}
