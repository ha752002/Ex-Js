const findMaxProduct = require('./4-6');


test('Test1: the longest increasing subsequence with arr', () => {
    const arr = [-10, -5, 0, 1, 2, 3, 4];
    const result = findMaxProduct(arr);
    expect(result).toBe(200);
});

test('Test 2: the longest increasing subsequence with arr', () => {
    const arr = [-2, -1, 0, 1, 2, 3, 4];
    const result = findMaxProduct(arr);
    expect(result).toBe(24);
});
test('Test 3: the longest increasing subsequence with arr', () => {
    const arr = [-1, -2, -3, -4, -5];
    const result = findMaxProduct(arr);
    expect(result).toBe(-6);
});
test('Test 3: the longest increasing subsequence with arr', () => {
    const arr = [0, 0, 0, 0, 0];
    const result = findMaxProduct(arr);
    expect(result).toBe(0);
});

