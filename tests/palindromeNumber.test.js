const isPalindromeTest = require("../palindromeNumber");

test("121 returns true", () =>{
    expect(isPalindromeTest.isPalindrome(121)).toBe(true);
})

test("111 returns true", () =>{
    expect(isPalindromeTest.isPalindrome(111)).toBe(true);
})

test("313 returns true", () =>{
    expect(isPalindromeTest.isPalindrome(313)).toBe(true);
})

test("123 returns false", () =>{
    expect(isPalindromeTest.isPalindrome(123)).toBe(false);
})