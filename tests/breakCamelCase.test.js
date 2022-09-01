const camelCaseTest = require('../codewars/breakCamelCase');



//Test.assertEquals(solution('camelCasing'), 'camel Casing', 'Unexpected result')
//Test.assertEquals(solution('camelCasingTest'), 'camel Casing Test', 'Unexpected result')

test('camelCasing should return camel Casing',() => {
    expect(camelCaseTest('camelCase')).toBe('camel Case');
})

test('camelCasingTest shoulr return camel Casing Test', () => {
    expect(camelCaseTest('camelCasingTest')).toBe('camel Casing Test');
})