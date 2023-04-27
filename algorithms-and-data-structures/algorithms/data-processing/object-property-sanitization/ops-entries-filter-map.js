/**
 * Creates a copy of an object, but that only contains specific properties.
 * @param {object} object Object to sanitize.
 * @param {string[]} properties Properties to include.
 * @returns Copy of object that only contains the specified properties.
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
