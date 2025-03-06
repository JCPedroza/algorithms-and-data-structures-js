const assert = require('node:assert/strict')
const { describe, it } = require('node:test')

const solutions = require('./valid-parenth.repo')

for (const { fun, id } of solutions) {
  describe(`LeetCode 0020 'Valid Parentheses' solution '${id}'`, () => {
    it('returns true for empty string', () => {
      assert.equal(fun(''), true)
    })

    it('returns false for string of size 1', () => {
      assert.equal(fun('['), false)
    })

    it('identifies valid strings of length 2', () => {
      assert.equal(fun('()'), true)
      assert.equal(fun('[]'), true)
      assert.equal(fun('[]'), true)
    })

    it('identifies invalid strings of length 2', () => {
      assert.equal(fun('(('), false)
      assert.equal(fun('(]'), false)
      assert.equal(fun(')('), false)
    })

    it('returns false for strings of odd length', () => {
      assert.equal(fun('()('), false)
      assert.equal(fun('[)]()'), false)
      assert.equal(fun('([[()]]'), false)
    })

    it('identifies valid string of length 4', () => {
      assert.equal(fun('(())'), true)
      assert.equal(fun('({})'), true)
      assert.equal(fun('()[]'), true)
      assert.equal(fun('()()'), true)
    })
  })
}
