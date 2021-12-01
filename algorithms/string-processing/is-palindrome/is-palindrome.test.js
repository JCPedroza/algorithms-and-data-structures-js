const testSubjects = [
  require('./is-palindrome')
]

testSubjects.forEach(({ fun, id }) => {
  const palindrome = `Anita! LAva :
    la?; tina.`

  const runPositiveTests = () => {
    expect(fun(palindrome)).toBe(true)
    expect(fun('')).toBe(true)
    expect(fun('123321')).toBe(true)
  }

  const runNegativeTests = () => {
    expect(fun('Not a palindrome :(')).toBe(false)
    expect(fun('123123')).toBe(false)
  }

  test(`${id} recognizes palindromes`, runPositiveTests)
  test(`${id} recognizes non-palindromes`, runNegativeTests)
})
