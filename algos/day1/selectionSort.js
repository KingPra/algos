
//Space Time complexity = O(n^2)T, O(1)S
/**
 * 
 * @param {The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from the unsorted part and putting it at the beginning. 
The algorithm maintains two subarrays in a given array.
The subarray which already sorted. 
The remaining subarray was unsorted.
In every iteration of the selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray. } arr 
 * 
 */
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