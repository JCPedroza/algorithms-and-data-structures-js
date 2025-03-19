const { describe, it } = require('node:test')
const assert = require('node:assert/strict')

const { readFileSync } = require('fs')
const { join } = require('path')

const solutions = require('./nqlb.repo')

const bigInputPath = join(__dirname, '../input-big.txt')
const bigInput = readFileSync(bigInputPath, 'utf-8')

for (const { fun, id } of solutions) {
  describe(`Advent of Code 'Not Quite Lisp (part b)' solution '${id}'`, () => {
    it('throws error for empty string', () => {
      assert.throws(() => fun(''))
    })

    it('solves string of length 1', () => {
      assert.equal(fun(')'), 1)
    })

    it('solves big input', () => {
      assert.equal(fun(bigInput), 1783)
    })

    it('throws error if basement is not reached', () => {
      assert.throws(() => fun('()((()'))
    })
  })
}
