function binarySearch(arr, tar) {
    let left = 0;
    let right = arr.length - 1;
    
    while(left <= right) {
        let mid = Math.floor((left + right) / 2); 
        
        if(arr[mid] === tar) {
            return mid;
        }

        if(tar > arr[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return - 1;
}

console.log(binarySearch([4,5,6,7,8,9], 10));