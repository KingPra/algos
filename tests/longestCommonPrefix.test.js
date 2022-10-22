const longestCommonPrefixTest = require("../leetcode/longestCommonPrefix");


test("this input should return fl", () => {
    expect(longestCommonPrefixTest(["flower", "flow", "flight"])).toBe("fl");
})