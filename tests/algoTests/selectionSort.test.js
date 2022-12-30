const selectionSortTest = require('../../algos/selectionSort');

test('expect [2,1,3] to return [1,2,3]', () => {
    expect(selectionSortTest([2,1,3])).toEqual([1, 2, 3]);
});

test('expect [2,0,3] to return [1,0,3]', () => {
    expect(selectionSortTest([2,0,3])).toEqual([0, 2, 3]);
});