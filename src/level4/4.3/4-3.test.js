const findMaxCommonSubstrings = require('./4-3');


test('the longest increasing subsequence with arr', () => {
    const arr = ["abc", "bb"];
    const result = findMaxCommonSubstrings(arr);
    expect(result).toBe(1);
});


test('the longest increasing subsequence with arr', () => {
    const arr = ["hello", "world", "foobar", "barfoo", "he", "llo"];
    const result = test1(arr);
    expect(result).toBe(1);
});