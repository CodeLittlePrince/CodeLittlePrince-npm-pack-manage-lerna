const m1 = require('@lerna-test-zx/m1')

module.exports = {
    increase(n) {
        return m1.add(n, 1)
    }
}
