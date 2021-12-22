/**
 * Creates a new object with the specified properties of the
 * input object, if they are present.
 * @param {object} object Object to sanitize.
 * @param {string[]} properties Properties to copy.
 * @returns Object with the specified properties if present in
 * original object.
 */
const sanitizeObjectProperties = (object, properties) =>
  Object.fromEntries(
    properties
      .filter(property => property in object)
      .map(property => [property, object[property]])
  )

module.exports = {
  fun: sanitizeObjectProperties,
  id: 'Object.fromEntries filter map'
}
