const test1 = require('./4-3');


test('the longest increasing subsequence with arr', () => {
    const arr = ["abc", "bb"];
    const result = test1(arr);
    expect(result).toBe(1);
});

test('the longest increasing subsequence with arr', () => {
    const arr = ["hello", "world", "jelly"];
    const result = test1(arr);
    expect(result).toBe(1);
});