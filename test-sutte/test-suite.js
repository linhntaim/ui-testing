class TestSuite {
    constructor(testDriver) {
        this.testDriver = testDriver
        this.testCases = []
    }

    add(...testCases) {
        this.testCases.push(...testCases)
        return this
    }

    async run() {
        try {
            for (let i in this.testCases) {
                await this.testCases[i].run(this.testDriver)
            }
        } finally {
            // await this.testDriver.browser.quit()
        }
    }
}

module.exports = TestSuite;