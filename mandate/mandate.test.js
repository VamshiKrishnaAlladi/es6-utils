/* eslint-disable global-require */
const MPMError = require('./../errors/mandatory-param-missing');

describe('Module es6-utils/mandate:', () => {
    test('should export a function', () => {
        const mandate = require('./');

        expect(mandate).toBeInstanceOf(Function);
    });

    test('should throw a MandatoryParamMissingError when called', () => {
        const mandate = require('./');

        expect(mandate).toThrow(MPMError);
    });
});
