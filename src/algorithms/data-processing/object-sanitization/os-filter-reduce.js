/**
 * Creates a copy of an object, but that only contains specific properties.
 *
 * @param {object} object Object to sanitize.
 * @param {string[]} whitelist Properties to include.
 * @returns {object} Copy of object that only contains the specified properties.
 */
const sanitizeObject = (object, whitelist) =>
  whitelist
    .filter(prop => prop in object)
    .reduce((copy, prop) => {
      copy[prop] = object[prop]
      return copy
    }, {})

module.exports = {
  fun: sanitizeObject,
  id: 'filter reduce'
}
