module.exports = {
    castError: (namespace, message = '') => {
        this.castText(namespace, '--FAILED' + (message === '' ? '' : ': ' + message))
    },
    castSuccess: (namespace, message = '') => {
        this.castText(namespace, '--PASSED' + (message === '' ? '' : ': ' + message))
    },
    castText: (namespace, message) => {
        console.log(namespace + '::' + message)
    }
}