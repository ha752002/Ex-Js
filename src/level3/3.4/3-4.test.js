const test1 = require('./3-4');


// test('the longest increasing subsequence with arr', () => {
//     const arr = ["abc", "bb"];
//     const result = test1(arr);
//     expect(result).toBe(1);
// });

test('the longest increasing subsequence with arr', () => {
    const arr = ["abbc", "bzz", "hjiu"];
    const result = test1(arr);
    expect(result).toEqual(["abbc", "bzz"]);
});

test('the longest increasing subsequence with arr', () => {
    const arr = ["hello", "world", "foobar", "barfoo", "he", "llo"];
    const result = test1(arr);
    expect(result).toEqual(["foobar", "barfoo"]);
});

test('the longest increasing subsequence with arr', () => {
    const arr = [];
    const result = test1(arr);
    expect(result).toEqual([]);
});



