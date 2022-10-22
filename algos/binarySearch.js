
// 1. we need to iterate the array to find a match for the target.
// 2. we need a pointer for the start and end
// 3. var mid will keep track of the middle of the arr
// 4. if mid is == to target, return mid, else if target < mid, end = mid -1, else start = mid + 1
// 5. return mid;
function binarySearch(arr, target) {
    let left = 0; 
    let right = arr.length - 1;

    while(left <= right) {
        
        let mid = Math.floor((right + left) / 2);
        if(arr[mid] == target) {
            return mid;
        } else if (target > arr[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
console.log(binarySearch([1,2,3,4,5], 5));
module.exports = binarySearch;