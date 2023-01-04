function binarySearch(arr, tar) {
    let left = 0;
    let right = arr.length - 1;

    while(left <= right) {
        let mid = Math.floor((left + right) / 2);

        if(tar ===  arr[mid]) {
            return mid;
        } else if(tar < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}


console.log(binarySearch([2,3,4,5,6], 3));