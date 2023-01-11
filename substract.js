module.exports = function sum(a, b) {
    if (b > a) {
        throw new Error('negative result not allowed')
    }

    return a - b
}