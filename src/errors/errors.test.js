/* eslint-disable global-require */
describe('Module es6-utils/errors:', () => {
    test('should export an object', () => {
        const errors = require('./');

        expect(errors).toBeInstanceOf(Object);
    });
});
