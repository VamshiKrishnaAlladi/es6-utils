/* eslint-disable global-require */

describe('Module ES6 Utils:', () => {
    test('should export an object', () => {
        const utils = require('./es6-utils');

        expect(utils).toBeInstanceOf(Object);
    });
});
