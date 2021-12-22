/**
 * Creates a new object with the specified properties of the
 * input object, if they are present.
 * @param {object} object Object to sanitize.
 * @param {string[]} properties Properties to copy.
 * @returns Object with the specified properties if present in
 * original object.
 */
const sanitizeObjectProperties = (object, properties) => {
  const accumulator = {}

  properties.forEach(property => {
    if (property in object) accumulator[property] = object[property]
  })

  return accumulator
}

module.exports = {
  fun: sanitizeObjectProperties,
  id: 'for each'
}
