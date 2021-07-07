const m1 = require('@lerna-test-zx/m1')

module.exports = {

    increase(n) {
        return m1.sum(n, 1)
    }
}
