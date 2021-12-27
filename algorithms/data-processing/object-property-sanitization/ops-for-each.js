/**
 * Creates a copy of an object, but that only contains specific properties.
 * @param {object} object Object to sanitize.
 * @param {string[]} properties Properties to include.
 * @returns Copy of object that only contains the specified properties.
 */
const sanitizeObjectProperties = (object, properties) => {
  const accumulator = {}

  properties.forEach(property => {
    if (property in object) accumulator[property] = object[property]
  })

  return accumulator
}

module.exports = {
  algorithm: sanitizeObjectProperties,
  id: 'for each'
}
