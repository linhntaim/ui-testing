const TestDriver = require('./test-driver')
const TestSuite = require('./test-suite')
const testCases = require('../test-cases/test-cases')

async function run() {
    await (new TestSuite(new TestDriver()))
        .add(...testCases)
        .run();
}

module.exports = run;