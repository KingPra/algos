import math

# def say_hello():
#     print('Hello, World')

# for i in range(5):
#     say_hello()


def merge(left_arr, right_arr, arr):
    leftSize = len(left_arr)
    rightSize = len(right_arr)
    mid = math.floor(len(arr) / 2)
    left_arr = []
    right_arr = []
    i = 0
    l = 0
    r = 0

    while (l < leftSize and r < rightSize):
        print('i : ', i, 'r: ', r)
        if(left_arr[l] < right_arr[r]):
            print('i : ', i)
            # arr.insert(i, left_arr[l])
            i += 1
            l += 1
        else:
            print('i in else: ', i)
            # arr.insert(i,right_arr[r])
            i += 1
            r += 1

    # while(l < leftSize):
    #     arr.insert(i, left_arr[l])
    #     i += 1
    #     l += 1
    # while(l < rightSize):
    #     arr.insert(i,right_arr[l])
    #     i += 1
    #     l += 1


def merge_sort(arr):
    length = len(arr)
    mid = math.floor(length / 2)
    
    if(length <= 1):
        return arr
    
    left_arr = []
    right_arr = []

    for i in range(len(arr)):
        if(i < mid):
            # print('i : ', i)
            left_arr.append(arr[i])
        else:
            # print('i in else: ', i)
            right_arr.append(arr[i])
    
    merge_sort(left_arr)
    merge_sort(right_arr)
    merge(left_arr, right_arr, arr)
    return arr

arr = [2,1,5,4,3,8,9,7,6]
merge_sort(arr)
print(arr)