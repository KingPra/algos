const solution = require('../strEndsWith.js');

test('test solution that matches the last char, should return true',() => {
    expect(solution('abc','bc')).toBe(true);
    expect(solution('abc', 'abc')).toBe(true);

})

test('this test should not find a match and should return false',() => {
    expect(solution('abc', 'd')).toBe(false);
})