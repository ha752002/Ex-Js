
const findNumberMedian = require('./1-8');

test('Find median with empty', () => {
    const numbers = [];
    const median = findNumberMedian(numbers);
    expect(median).toBe("Invalid input");
});

test('Find median with odd number of elements', () => {
    const numbers = "";
    const median = findNumberMedian(numbers);
    expect(median).toBe("Invalid input");
});

test('Find median with odd number of elements', () => {
    const numbers = [1, 3, 5, 7, 9];
    const median = findNumberMedian(numbers);
    expect(median).toBe(5);
});

test('Find median with odd number of elements', () => {
    const numbers = [1, 3, 7, 9];
    const median = findNumberMedian(numbers);
    expect(median).toBe(5);
});

