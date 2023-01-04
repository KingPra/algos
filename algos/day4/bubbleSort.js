function bubbleSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        for(let j = i; j < arr.length; j++) {
            if(arr[j - 1] > arr[j]) {
                [[arr[j - 1], arr[j]] = [arr[j], arr[j -1]]]
            }
        }
    }
    return arr;
}

console.log(bubbleSort([2,1,5,4,3,6,8,7]));