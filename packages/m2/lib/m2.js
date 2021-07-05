const m1 = require('@lerna-test/m1');

module.exports = m2;

function m2() {
    m1()
    console.log('hello m2');
}
