module.exports = function modulo(a, b) {
    const res = a % b
    if (Number.isNaN(res)) {
        throw new Error('Invalid Operation')
    }

    return res
}