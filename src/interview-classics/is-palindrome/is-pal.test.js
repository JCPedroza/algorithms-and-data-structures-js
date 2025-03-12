const assert = require('node:assert/strict')
const { describe, it } = require('node:test')
const { join } = require('path')
const { readFileSync } = require('fs')

const solutions = require('./is-pal.repo')

const smallPalPath = join(__dirname, '/palindrome-small.txt')
const bigPalPath = join(__dirname, '/palindrome-big.txt')

const smallPalindrome = readFileSync(smallPalPath, 'utf-8')
const bigPalindrome = readFileSync(bigPalPath, 'utf-8')

solutions.forEach(({ fun, id }) => {
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

    it('identifies small palindrome with punctuation', () => {
      assert.equal(
        fun(smallPalindrome),
        true
      )
    })

    it('identifies a big palindrome with punctuation', () => {
      assert.equal(
        fun(bigPalindrome),
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
