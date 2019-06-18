const TestCase = require('../../test-sutte/test-case')
const Configuration = require('../../test-config')
const Utils = require('../../test-sutte/test-utils')

class TestTrial extends TestCase {
    async run(testDriver) {
        await testDriver.browser.get('http://www.google.com/ncr')
        await testDriver.browser.findElement(testDriver.by.name('q')).sendKeys('webdriver', testDriver.key.RETURN)
        await testDriver.browser.wait(testDriver.until.titleIs('webdriver - Google Search'), 1000)
    }
}

module.exports = TestTrial