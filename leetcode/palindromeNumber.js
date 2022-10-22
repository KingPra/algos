// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.
 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

// Constraints:

// -231 <= x <= 231 - 1

//Follow up: Could you solve it without converting the integer to a string?

//steps
//1)create answer variable (jk)
//2)create local variable numberStr for storing x
//3)create variable revNumStr for storing reversed numberStr
//4)convert numberStr to string using toString()
//5)split numberStr to an array of strings
//6)reverse numberStr and store it in revNumStr
//7)join both arrays and compare them
//8)if they are equal return true else false 

/**
 * param {number} x
 * return {boolean}
 */
 var isPalindrome = function(x) { //time complexity: o(n), space complexity: o(n)
    let numberStr = x.toString().split("");
    let revNumStr = x.toString().split("").reverse();
    
    if(numberStr.join() === revNumStr.join()){
        return true;
    }else{
        return false;
    }    
};

console.log(isPalindrome(121));

module.exports = {
    isPalindrome : isPalindrome
}