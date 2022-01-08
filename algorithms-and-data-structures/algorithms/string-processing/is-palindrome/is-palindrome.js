const tokensToRemove = /[.,:;?!\s]/g

const normalize = (str) => str.replace(tokensToRemove, '').toLowerCase()

const reverse = (str) => [...str].reverse().join('')

const isPalindrome = (str) => {
  const normalStr = normalize(str)
  return normalStr === reverse(normalStr)
}

module.exports = {
  algorithm: isPalindrome,
  id: 'string spread'
}
