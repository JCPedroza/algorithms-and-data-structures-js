/**
 * Creates a copy of an object, but that only contains specific properties.
 * @param {object} object Object to sanitize.
 * @param {string[]} whitelist Properties to include.
 * @returns Copy of object that only contains the specified properties.
 */
const sanitizeObject = (object, whitelist) =>
  Object.fromEntries(
    whitelist
      .filter(prop => prop in object)
      .map(prop => [prop, object[prop]])
  )

module.exports = {
  fun: sanitizeObject,
  id: 'Object.fromEntries filter map'
}
