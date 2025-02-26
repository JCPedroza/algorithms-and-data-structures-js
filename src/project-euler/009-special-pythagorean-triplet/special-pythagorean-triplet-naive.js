/**
 * Compute the product of the pythagorean triplet where a + b + c = targetSum.
 *
 * @param {number} targetSum Sum of triplet must equal this value.
 * @throws {Error} If an invalid triplet is ever reached.
 * @returns {number} Product of triplet found, where a + b + c = targetSum.
 */
const specialPythagoreanTriplet = (targetSum) => {
  const tri = [1, 2, targetSum - 3]

  while (!(tri[0] ** 2 + tri[1] ** 2 === tri[2] ** 2)) {
    const [a, b, c] = tri

    const isSumTarget = a + b + c === targetSum
    const isAscending = a < b && b < c

    if (!isSumTarget || !isAscending) {
      throw new Error(`Invalid triplet ${[a, b, c]}`)
    }

    if (b + 2 < c) {
      tri[1] = b + 1
      tri[2] = c - 1
    } else {
      tri[0] = a + 1
      tri[1] = a + 2
      tri[2] = targetSum - tri[0] - tri[1]
    }
  }

  return tri[0] * tri[1] * tri[2]
}

module.exports = {
  fun: specialPythagoreanTriplet,
  id: 'naive'
}
