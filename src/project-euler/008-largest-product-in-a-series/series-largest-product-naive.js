const { readFileSync } = require('fs')

/**
 * Parses the number text file as a number array.
 *
 * @param {string} numTxtPath Path to text file containing the number.
 * @returns {number[]} The number in the text file as a number array.
 */
const numTxtToNumArr = (numTxtPath) =>
  readFileSync(numTxtPath, 'utf8')
    .split('')
    .filter(str => !/[\s]/.test(str) && !isNaN(parseInt(str)))
    .map(str => parseInt(str))

/**
 * Computes the product of a sub-series in a number array.
 *
 * @param {number[]} numArr An array of numbers.
 * @param {number} index Index of the first number.
 * @param {number} scopeSize Size of the sub-series.
 * @returns {number} Product of number sub-series.
 */
const getScopeProduct = (numArr, index, scopeSize) =>
  numArr
    .slice(index, index + scopeSize)
    .reduce((prod, num) => num * prod)

/**
 * Computes the largest product in a series of numbers.
 *
 * @param {string} numTxtPath Path to text file containing the number.
 * @param {number} scopeSize Number of adjacent numbers to multiply.
 * @returns {number} Largest product in the series.
 */
const seriesLargestProduct = (numTxtPath, scopeSize) => {
  const numArr = numTxtToNumArr(numTxtPath)
  const lastIndex = numArr.length - scopeSize

  let maxProduct = 0
  for (let index = 0; index <= lastIndex; index++) {
    const product = getScopeProduct(numArr, index, scopeSize)
    if (product > maxProduct) maxProduct = product
  }

  return maxProduct
}

module.exports = {
  fun: seriesLargestProduct,
  id: 'naive'
}
