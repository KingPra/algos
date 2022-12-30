function binarySearch(arr, tar) {
    let left = 0;
    let right = arr.length -1;

    while(left <= right) {
        let mid = Math.floor((left + right) / 2);

        if(arr[mid] === tar) {
            return mid;
        } else if(arr[mid] < tar) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

console.table([
    binarySearch([1,2,3,4,5,6,7], 5) === 4,
    binarySearch([1,5,7,12,15], 15) === 4,
    binarySearch([1,5,7,12,14], 15) === -1
    ]);
console.log(binarySearch([1,5,7,12,15], 15) === 4,);