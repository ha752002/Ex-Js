const findMaxDifference = require('./3-2');


test('the maximum difference with 2 number', () => {
    const arr = [1];
    const result = findMaxDifference(arr);
    expect(result).toBe("Invalid input");
});

test('the maximum difference with 2 number', () => {
    const arr = "jjajaj";
    const result = findMaxDifference(arr);
    expect(result).toBe("Invalid input");
});


test('the maximum difference with arr', () => {
    const arr = [1, 2, 91, 9, 100];
    const result = findMaxDifference(arr);
    expect(result).toBe(99);
});

test('the maximum difference with arr', () => {
    const arr = [-10, -5, -1, -8, -2];
    const result = findMaxDifference(arr);
    expect(result).toBe(9);
});