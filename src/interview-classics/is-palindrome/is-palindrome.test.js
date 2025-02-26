const assert = require('node:assert/strict')
const { describe, it } = require('node:test')

const algorithms = require('./is-palindrome.repo')

const palindrome = `Anita! LAva :
    la?; tina.`

algorithms.forEach(({ fun, id }) => {
  describe(`Palindrome test algorithm "${id}"`, () => {
    it('identifies strings that are palindromes', () => {
      assert.equal(
        fun(palindrome),
        true
      )

      assert.equal(
        fun(''),
        true
      )

      assert.equal(
        fun('123321'),
        true
      )
    })

    it('identifies strings that are not palindromes', () => {
      assert.equal(
        fun('This is not a palindrome'),
        false
      )

      assert.equal(
        fun('123123'),
        false
      )
    })
  })
})
