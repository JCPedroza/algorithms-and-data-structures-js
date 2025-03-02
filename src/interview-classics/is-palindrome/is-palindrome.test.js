const assert = require('node:assert/strict')
const { describe, it } = require('node:test')

const algorithms = require('./is-palindrome.repo')

const palindrome = `Anita! LAva :
    la?; tina.`

algorithms.forEach(({ fun, id }) => {
  describe(`Palindrome test algorithm "${id}"`, () => {
    it('identifies palinfromes of length 0', () => {
      assert.equal(
        fun(''),
        true
      )
    })

    it('identifies palindromes of length 1', () => {
      assert.equal(
        fun('x'),
        true
      )
    })

    it('identifies small palindromes of even length', () => {
      assert.equal(
        fun('123321'),
        true
      )
    })

    it('identifies small palindromes of odd length', () => {
      assert.equal(
        fun('1230321'),
        true
      )
    })

    it('identifies palindromes with multiple whitespace', () => {
      assert.equal(
        fun(palindrome),
        true
      )
    })

    it('identifies sentence-like non-palindromes', () => {
      assert.equal(
        fun('This is not a palindrome'),
        false
      )
    })

    it('identifies one-word non-palindromes of even length', () => {
      assert.equal(
        fun('123123'),
        false
      )
    })

    it('identifies one-word non-palindromes of odd length', () => {
      assert.equal(
        fun('1230123'),
        false
      )
    })
  })
})
