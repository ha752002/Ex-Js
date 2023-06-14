const test1 = require('./3-4');


test('the longest increasing subsequence with arr', () => {
    const arr = ["abc", "bb"];
    const result = test1(arr);
    expect(result).toBe(1);
});

test('the longest increasing subsequence with arr', () => {
    const arr = ["abc", "bb", "hjiu"];
    const result = test1(arr);
    expect(result).toBe(1);
});

test('the longest increasing subsequence with arr', () => {
    const arr = ["hello", "world", "foobar", "barfoo", "he", "llo"];
    const result = test1(arr);
    expect(result).toBe(6);
});


