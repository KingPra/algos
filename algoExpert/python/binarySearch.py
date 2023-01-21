import math

def binarySearch(array, target):
    # Write your code here.
    lPointer = 0
    rPointer = len(array) - 1

    while lPointer <= rPointer:
        mid = (lPointer + rPointer) // 2
        if array[mid] == target:
            return mid
        if target > array[mid]:
            lPointer = mid + 1
        else:
            rPointer = mid - 1
    return -1


arr = [1,2,3,4,5,6,7]

print(binarySearch(arr, 3))