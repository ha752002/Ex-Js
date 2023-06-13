const SecondLargest = require('./2-1');


test('the second largest with arr', () => {
    const numbers = [2, 7, 1, 9];
    const result = SecondLargest(numbers);
    expect(result).toBe(7);
});

test('the second largest with empty', () => {
    const arr = [];
    const result = SecondLargest(arr);
    expect(result).toBe("Invalid input");
});

test('the second largest with characters', () => {
    const str = ",";
    const result = SecondLargest(str);
    expect(result).toBe("Invalid input");
});


test('the second largest with arr', () => {
    const numbers = [2, 7, 1, 9];
    const result = SecondLargest(numbers);
    expect(result).toBe(7);
});
