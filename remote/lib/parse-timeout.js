const dev = process.env.NODE_ENV === 'development'
const defaultValue = dev ? 0 : 30000 // 0 or 30s

/**
 * If value === Infinity it returns "Infinity". If value === undefined it returns the default value. If the value is a Number it returns the value.
 * @param {string|number} value 
 * @returns {string|number}
 */
function parseTimeout(value = defaultValue) {
  if (isNaN(value)) {
    throw new TypeError('timeout must be a number, undefined or Infinity.')
  }

  if (!isFinite(value)) {
    return 'Infinity'
  }

  return +value
}

module.exports = parseTimeout
