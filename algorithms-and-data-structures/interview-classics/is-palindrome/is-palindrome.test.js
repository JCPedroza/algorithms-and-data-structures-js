const testSubjects = [
  require('./is-palindrome')
]

const palindrome = `Anita! LAva :
    la?; tina.`

testSubjects.forEach(({ algorithm, id }) => {
  describe(`Palindrome test algorithm "${id}"`, () => {
    it('identifies palindrome strings', () => {
      expect(algorithm(palindrome)).toBe(true)
      expect(algorithm('')).toBe(true)
      expect(algorithm('123321')).toBe(true)

      expect(algorithm('Not a palindrome :(')).toBe(false)
      expect(algorithm('123123')).toBe(false)
    })
  })
})
