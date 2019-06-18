module.exports = {
    castError: (message = '') => {
        console.log('--FAILED' + (message === '' ? '' : ': ' + message));
    },
    castSuccess: (message = '') => {
        console.log('--PASSED' + (message === '' ? '' : ': ' + message));
    },
    castText: (message) => {
        console.log(message);
    }
};