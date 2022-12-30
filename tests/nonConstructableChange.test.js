const nonConstructableChange = require('../algoExpert/nonConstructableChange');


test('expect [1,2,5] to return 4', () => {
    expect(nonConstructableChange([1,2,5])).toBe(4);
});

test('expect [5,7,1,1,2,3,22]to return 20', () => {
    expect(nonConstructableChange([5,7,1,1,2,3,22])).toBe(20);
});