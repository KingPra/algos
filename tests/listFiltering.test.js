const filter_list = require('../codewars/listFiltering.js');

test('test should filter out a and b', () => {
    expect(filter_list([1,2,'a','b'])).toStrictEqual([1,2]);
})

test('test should only return 1,0,15',() => {
    expect(filter_list([1,'abc','b',0,15])).toStrictEqual([1,0,15]);
})

test('test will only ingest string and return null', () => {
    expect(filter_list(['abc','b'])).toBe(null);
})

// assert.deepEqual(filter_list([1,2,'a','b']),[1,2], 'For input [1,2,"a","b"]');
// assert.deepEqual(filter_list([1,'a','b',0,15]),[1,0,15], 'For input [1,"a","b",0,15]');
// assert.deepEqual(filter_list([1,2,'aasf','1','123',123]),[1,2,123], 'For input [1,2,"aasf","1","123",123]');





// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]