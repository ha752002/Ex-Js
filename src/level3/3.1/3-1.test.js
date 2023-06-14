const findSecondSmallest = require('./3-1');

test('the second largest with empty', () => {
    const arr = [];
    const result = findSecondSmallest(arr);
    expect(result).toBe("Invalid input");
});

test('the second largest with characters', () => {
    const str = ",";
    const result = findSecondSmallest(str);
    expect(result).toBe("Invalid input");
});


test('the second largest with arr', () => {
    const numbers = [2, 7, 1, 9];
    const result = findSecondSmallest(numbers);
    expect(result).toBe(2);
});

test('the second largest with arr', () => {
    const numbers = [9, 7, 0, 3];
    const result = findSecondSmallest(numbers);
    expect(result).toBe(3);
});