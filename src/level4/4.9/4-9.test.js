const longestIncreasingSubsequence = require("./4-9");

test("The longest Increasing Subsequence:", () => {
    expect(longestIncreasingSubsequence([1, 2, 3, 5, 4, 6, 8])).toEqual(3);
})

test("The longest Increasing Subsequence:", () => {
    expect(longestIncreasingSubsequence([1, 2, 3, 8, 3, 2, 4, 5, 6, 7, 8, 9])).toEqual(6);
})

test("The longest Increasing Subsequence:", () => {
    expect(longestIncreasingSubsequence([1, 2, 3, 4])).toEqual(4);
})

test("The longest Increasing Subsequence:", () => {
    expect(longestIncreasingSubsequence([8, 9, 12, 10, 11, 15, 26])).toEqual(2);
})

test("The longest Increasing Subsequence:", () => {
    expect(longestIncreasingSubsequence([1, 4, 5, 12, 2, 3, 5])).toEqual(2);
})