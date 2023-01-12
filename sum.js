module.exports = function sum(a, b) {
    const res = a + b
    if (Number.NaN(res)) {
        throw new Error('Invalid operation')
    }

    return res
}
