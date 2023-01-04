function mergeSort(arr) {

    let length = arr.length;
    let middle = Math.floor(length / 2);
    let leftArr = new Array(middle);
    let rightArr = new Array(length - middle);

    if (length <= 1) {
        return arr;
    }

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
    merge(leftArr, rightArr, arr);
    return arr;
}

function merge(leftArr, rightArr, arr) {
    
    let leftSize = Math.floor(arr.length / 2)
    let rightSize = arr.length - leftSize;
    let i = 0, l = 0, r = 0;

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

}



console.log(mergeSort([3,2,1,4,5,8,7,6]));