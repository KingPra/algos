const moveZerosTest = require("../codewars/movingZeros");

test('[1,2,0,1,0,1,0,3,0,1] should return [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]', () => { 
    expect(moveZerosTest.moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])).toEqual([1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
})

test('[1,2,0,1,0,1,0,3,0,1] should return [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]', () => { 
    expect(moveZerosTest.moveZerosLessCode([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])).toEqual([1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
})
