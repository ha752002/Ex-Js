const findLongestIncreasing = require('./3-3');

test('the longest increasing subsequence with arr', () => {
    const arr = [1, 2, 91, 9, 100];
    const result = findLongestIncreasing(arr);
    expect(result).toBe(4);
});

test('the longest increasing subsequence with arr', () => {
    const arr = [3, 10, 2, 1, 20];
    const result = findLongestIncreasing(arr);
    expect(result).toBe(3);
});

// test('the longest increasing subsequence with str', () => {
//     const str = "hsssss";
//     const result = findLongestIncreasing(str);
//     expect(result).toBe("Invalid input");
// });

// test('the longest increasing subsequence with arr', () => {
//     const str = " ";
//     const result = findLongestIncreasing(str);
//     expect(result).toBe("Invalid input");
// });


