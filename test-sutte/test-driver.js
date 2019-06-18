const {Builder, By, Key, until} = require('selenium-webdriver')

class TestDriver {
    constructor() {
        this.by = By
        this.until = until
        this.key = Key
        this.browser = (new Builder())
            .forBrowser('chrome')
            .build()
    }
}

module.exports = TestDriver