function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let j = i;
        while(j < arr.length) {
            if(arr[j - 1] > arr[j]) {
                let temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
                j--;
            } else {
                j++;
            }
        }
    }
    return arr;
}


console.log(insertionSort([3,2,1,6,4,5]));