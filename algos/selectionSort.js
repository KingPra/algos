
function selectionSort(arr){

    for(let i = 0; i < arr.length; i++) {
        let minIdx = i;

        for (let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }

        if(minIdx !== i) {
            const valToSwap = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = valToSwap;
        }
    }
    return arr;
}

const arr = [7,9,3,5,15,10,0];
console.log(selectionSort(arr));

module.exports = selectionSort;