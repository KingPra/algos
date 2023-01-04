//mergeSort is a divide and conquer function. It is a recursive function
//mergeSort = recursively divide array in 2, sort, re-combine
// run-time complexity = O(n log n) quasilinear time
// space complexity = O(n)
// explanation video : https://www.youtube.com/watch?v=3j0SWDX4AtU

function mergeSort(arr) {
    let length = arr.length;
    if(length <= 1) {
        return; //base case
    }

    let middle = Math.floor(length / 2);
    let leftArr = new Array(middle);
    let rightArr = new Array(length - middle);

    //i is for our leftArr and j is for our rightArr
    for(let i = 0, j = 0; i < length; i++) {
        if(i < middle) {
            leftArr[i] = arr[i];
        } else {
            rightArr[j] = arr[i];
            j++;
        }
    }
    mergeSort(leftArr);
    mergeSort(rightArr);
    return merge(leftArr, rightArr, arr);
}

function merge(leftArr, rightArr, arr) {
    let leftSize = Math.floor(arr.length /2);
    let rightSize = arr.length - leftSize;
    let i = 0; l = 0; r = 0; 
    //check conditions for merging
    while(l < leftSize && r < rightSize) {
        if(leftArr[l] < rightArr[r]) {
            arr[i] = leftArr[l];
            i++;
            l++;
        } else {
            arr[i] = rightArr[r];
            i++;
            r++;
        }
    }
    while(l < leftSize) {
        arr[i] = leftArr[l];
        i++;
        l++;
    }
    while(r < rightSize) {
        arr[i] = rightArr[r];
        i++;
        r++;
    }
    return arr;
}



const arr =[8,2,5,7,3,4,6,1];
console.log(mergeSort(arr));
console.log(arr);