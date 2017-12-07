/* eslint-disable global-require */
describe('Module MandatoryParamMissing:', () => {
    test('should export a class MandatoryParamMissingError', () => {
        const MPMError = require('./');

        expect(MPMError).toBeInstanceOf(Function);
    });

    test('should return an Error object when called', () => {
        const MPMError = require('./');
        const errorInstance = new MPMError('name');

        expect(errorInstance).toBeInstanceOf(Error);
    });
});
