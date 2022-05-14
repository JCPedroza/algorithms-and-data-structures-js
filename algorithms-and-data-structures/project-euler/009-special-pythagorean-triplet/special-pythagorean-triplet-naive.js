// Check if triplet holds invariant a² + b² = c²
const isSquareValid = ([a, b, c]) => a ** 2 + b ** 2 === c ** 2

// Check if triplet holds invariant a + b + c = targetSum
const isSumValid = ([a, b, c], targetSum) => a + b + c === targetSum

// Check if triplet holds invariant a < b < c
const isRelValid = ([a, b, c]) => a < b && b < c

// Throws an error if triplet doesn't hold sum or relation invariants
const validateTriplet = (triplet, targetSum) => {
  if (!isSumValid(triplet, targetSum) || !isRelValid(triplet)) {
    throw new Error(`Invalid triplet ${triplet}`)
  }
}

// Computes next triplet iteration, while holding sum and relation invariants
const increaseTriplet = (triplet, targetSum) => {
  const [a, b, c] = triplet

  validateTriplet(triplet, targetSum)

  if (b + 2 < c) {
    triplet[1] = b + 1
    triplet[2] = c - 1
  } else {
    triplet[0] = a + 1
    triplet[1] = a + 2
    triplet[2] = targetSum - triplet[0] - triplet[1]
  }
}

/**
 * Compute the product of the pythagorean triplet where a + b + c = targetSum.
 * @param {number} targetSum Sum of triplet must equal this value.
 * @throws {Error} If an invalid triplet is ever reached.
 * @returns {number} Product of triplet found, where a + b + c = targetSum.
 */
const specialPythagoreanTriplet = (targetSum) => {
  const triplet = [1, 2, targetSum - 3]

  while (!isSquareValid(triplet)) {
    increaseTriplet(triplet, targetSum)
  }

  return triplet.reduce((acc, num) => acc * num)
}

module.exports = {
  solution: specialPythagoreanTriplet,
  id: 'naive'
}
