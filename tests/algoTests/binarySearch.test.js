const binarySearchTest = require('../../algos/binarySearch');

test('[1,2,3,4,5], 5 should return 4', () => {
    expect(binarySearchTest([1,2,3,4,5], 5)).toBe(4);
})

test('[1,2,3,4,5], 3 should return 2', () => {
    expect(binarySearchTest([1,2,3,4,5], 3)).toBe(2);
})
