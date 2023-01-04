function bubbleSort(arr) {

    for(let i = 1; i < arr.length; i++) {
        for(let j = 1; j < arr.length; j++) {
            if(arr[j -1] > arr[j]) {
                const temp =  arr[j -1];
                arr[j -1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([4,2,3,7,8,6,5,1]));

module.exports = bubbleSort;