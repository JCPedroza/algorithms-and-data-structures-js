/**
 * Creates a new object with the specified properties of the
 * input object, if they are present.
 * @param {object} object Object to sanitize.
 * @param {string[]} properties Properties to copy.
 * @returns Object with the specified properties if present in
 * original object.
 */
const sanitizeObjectProperties = (object, properties) =>
  properties
    .filter(property => property in object)
    .reduce((copy, property) => {
      copy[property] = object[property]
      return copy
    }, {})

module.exports = {
  fun: sanitizeObjectProperties,
  id: 'filter reduce'
}
