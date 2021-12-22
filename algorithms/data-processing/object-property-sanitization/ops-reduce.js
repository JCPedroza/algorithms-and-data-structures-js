/**
 * Creates a new object with the specified properties of the
 * input object, if they are present.
 * @param {object} object Object to sanitize.
 * @param {string[]} properties Properties to copy.
 * @returns Object with the specified properties if present in
 * original object.
 */
const sanitizeObjectProperties = (object, properties) => {
  const reducer = (copy, property) => {
    if (property in object) copy[property] = object[property]
    return copy
  }

  return properties.reduce(reducer, {})
}

module.exports = {
  fun: sanitizeObjectProperties,
  id: 'reduce'
}
