const testSubjects = [
  require('./is-palindrome')
]

testSubjects.forEach(({ algorithm, id }) => {
  const palindrome = `Anita! LAva :
    la?; tina.`

  const runPositiveTests = () => {
    expect(algorithm(palindrome)).toBe(true)
    expect(algorithm('')).toBe(true)
    expect(algorithm('123321')).toBe(true)
  }

  const runNegativeTests = () => {
    expect(algorithm('Not a palindrome :(')).toBe(false)
    expect(algorithm('123123')).toBe(false)
  }

  test(`${id} recognizes palindromes`, runPositiveTests)
  test(`${id} recognizes non-palindromes`, runNegativeTests)
})
