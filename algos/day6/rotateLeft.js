function rotateLeft(nums, k) {
    k = k % nums.length;
    nums.reverse();
    reverseSubarray(nums, 0, nums.length - k);
    reverseSubarray(nums, nums.length - k, nums.length);
    return nums;
  }
  
  function reverseSubarray(nums, start, exclusiveEnd) {
    const mid = Math.floor((exclusiveEnd - start) / 2);
    for (let i = 0; i < mid; i++) {
        const a = start + i;
        const b = exclusiveEnd - 1 - i;
        const temp = nums[a];
        nums[a] = nums[b];
        nums[b] = temp;
    }
  }


  console.log(rotateLeft([1,2,3,4], 3));
