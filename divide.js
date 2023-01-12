module.exports = function divide(a, b) {
  const res = a / b
  if (Number.NaN(res)) {
    throw new Error('Invalid operation')
  }

  return a - b
}