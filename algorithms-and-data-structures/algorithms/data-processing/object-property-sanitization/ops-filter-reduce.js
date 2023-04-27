/**
 * Creates a copy of an object, but that only contains specific properties.
 * @param {object} object Object to sanitize.
 * @param {string[]} properties Properties to include.
 * @returns Copy of object that only contains the specified properties.
 */
const sanitizeObjectProperties = (object, properties) =>
  properties
    .filter(property => property in object)
    .reduce((accumulator, property) => {
      accumulator[property] = object[property]
      return accumulator
    }, {})

module.exports = {
  fun: sanitizeObjectProperties,
  id: 'filter reduce'
}
