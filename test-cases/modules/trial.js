const TestCase = require('../../test-sutte/test-case')
const Configuration = require('../../test-config')
const Utils = require('../../test-sutte/test-utils')

class TestTrial extends TestCase {
    async run(testDriver) {
        this.out('Testing...')
        await testDriver.browser.get(Configuration.START_URL)
        await testDriver.browser.findElement(testDriver.by.css('[title="Star linhntaim/ui-testing"]')).click()
        this.out('Tested!')
    }
}

module.exports = TestTrial