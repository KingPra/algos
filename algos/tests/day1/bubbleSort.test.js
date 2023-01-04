const bubbleSortTest = require('../../day2/bubblesort2');

test('expect array to return sorted in ascending order', () => {
    expect(bubbleSortTest([3,2,1,4,6,5])).toEqual([1,2,3,4,5,6]);
});

test('expect an empty array to return empty array', () => {
    expect(bubbleSortTest([])).toEqual([]);
});
