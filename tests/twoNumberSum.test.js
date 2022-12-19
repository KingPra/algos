const twoNumberSum = require('../algoExpert/twoNumberSum');

test('expect [3,5]', () => {
    expect(twoNumberSum([1,2,3,4,5,8], 8)).toEqual([3,5]);
})
test('expect []', () => {
    expect(twoNumberSum([1,2,3,4,5,8], 78)).toEqual([]);
})