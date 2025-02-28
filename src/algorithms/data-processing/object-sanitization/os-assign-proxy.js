/**
 * Creates a copy of an object, but that only contains specific properties.
 *
 * @param {object} object Object to sanitize.
 * @param {string[]} whitelist Properties to include.
 * @returns {object} Copy of object that only contains the specified properties.
 */
const sanitizeObject = (object, whitelist) =>
  Object.assign({}, new Proxy(object, { ownKeys: () => whitelist }))

module.exports = {
  fun: sanitizeObject,
  id: 'Object.assign Proxy'
}
