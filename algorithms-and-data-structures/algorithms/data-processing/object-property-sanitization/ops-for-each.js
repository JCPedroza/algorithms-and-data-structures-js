/**
 * Creates a copy of an object, but that only contains specific properties.
 * @param {object} object Object to sanitize.
 * @param {string[]} whitelist Properties to include.
 * @returns Copy of object that only contains the specified properties.
 */
const sanitizeObject = (object, whitelist) => {
  const copy = {}

  whitelist.forEach(prop => {
    if (prop in object) copy[prop] = object[prop]
  })

  return copy
}

module.exports = {
  fun: sanitizeObject,
  id: 'for each'
}
