# manual check
# def isPalindrome(string):
#     str_split = list(string)
#     left_pointer = 0
#     right_pointer = len(str_split) - 1
#     while left_pointer < right_pointer:
#         str_split[left_pointer], str_split[right_pointer] = str_split[right_pointer], str_split[left_pointer]
#         left_pointer = left_pointer + 1
#         right_pointer = right_pointer - 1
#     str_split = ''.join(str_split)
#     return str_split == string


#python builtins
def isPalindrome(string):
    return string == string[::-1]
    
print(isPalindrome('racecar'))