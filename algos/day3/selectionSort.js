function selectionSort(arr) {
    let length = arr.length;
    for(let i = 1, j = 0; i < length; i++) {

        for(let i = 0; i < length; i++) {
            let minIdx = i;
            for(let j = i + 1; j < length; j++) {
                if(arr[minIdx] > arr[j]) {
                    minIdx = j;
                }
            }

            if(minIdx !== i) {
                const temp = arr[i];
                arr[i] = arr[minIdx];
                arr[minIdx] = temp;
            }
        }
    }
    return arr;
}

console.log(selectionSort([2,1,3,5,4,8,7,6]));