const theLongestCommon = require("./2-3");

test("The longest common common subsequence of the two stringst", () => {
    expect(theLongestCommon("abcdef", "abczyzcdef")).toBe("cdef");
});