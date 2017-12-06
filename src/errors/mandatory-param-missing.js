class MandatoryParamMissingError extends Error {
    constructor(paramName) {
        super(`It is mandatory to pass the parameter ${paramName}`);
    }
}

module.exports = MandatoryParamMissingError;
