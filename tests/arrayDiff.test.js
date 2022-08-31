const arrayDiff = require('../codewars/arrayDiff');

// assert.deepEqual(arrayDiff([1,2], [1]), [2], "a was [1,2], b was [1]");
// assert.deepEqual(arrayDiff([1,2,2], [1]), [2,2], "a was [1,2,2], b was [1]");
// assert.deepEqual(arrayDiff([1,2,2], [2]), [1], "a was [1,2,2], b was [2]");
// assert.deepEqual(arrayDiff([1,2,2], []), [1,2,2], "a was [1,2,2], b was []");
// assert.deepEqual(arrayDiff([], [1,2]), [], "a was [], b was [1,2]");
// assert.deepEqual(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")
test("([1,2], [1]) should return [2]", () => {
    expect(arrayDiff([1,2],[1])).toEqual([2]);
})
test("([1,2,2], [1]) should return [2,2]",() => {
    expect(arrayDiff([1,2,2],[1])).toEqual([2,2]);
})
test("([1,2,2],[2]) should return [1]",() => {
    expect(arrayDiff([1,2,2], [2])).toEqual([1]);
})
test("(1,2,2),[] should return [1,2,2]",() => {
    expect(arrayDiff([1,2,2],[])).toEqual([1,2,2]);
})
test("([], [1,2]) should return []", () => {
    expect(arrayDiff([],[1,2])).toEqual([]);
})
test("([1,2,3], [1,2]) should return [2]", () => {
    expect(arrayDiff([1,2,3], [1,2])).toEqual([3]);
})