const Utils = require('./test-utils')

class TestCase {
    constructor(name) {
        this.name = name
    }

    async start(testDriver) {
        this.out('START')
    }

    async run(testDriver) {

    }

    async end(testDriver) {
        this.out('END')
    }

    out(message) {
        Utils.castText(this.name, message)
    }
}

module.exports = TestCase