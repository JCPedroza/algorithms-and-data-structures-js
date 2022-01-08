/**
 * Creates a copy of an object, but that only contains specific properties.
 * @param {object} object Object to sanitize.
 * @param {string[]} properties Properties to include.
 * @returns Copy of object that only contains the specified properties.
 */
const sanitizeObjectProperties = (object, properties) =>
  Object.assign({}, new Proxy(object, { ownKeys: () => properties }))

module.exports = {
  algorithm: sanitizeObjectProperties,
  id: 'Object.assign Proxy'
}
