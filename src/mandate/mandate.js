const MPMError = require('./../errors/mandatory-param-missing');

function mandate(paramName) {
    throw new MPMError(paramName);
}

module.exports = mandate;
