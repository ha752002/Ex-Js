const theSumNumber = require('./2-4');

test('the sum of the numbers divisible by both 3 and 5 with arr', () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = theSumNumber(numbers);
    expect(result).toBe(0);
});

test("The sum of the numbers that are divisible by both 3 and 5.", () => {
    expect(theSumNumber([1, 2, 30, 3, 4, 15])).toBe(45);
});

test("The sum of the numbers that are divisible by both 3 and 5.", () => {
    expect(theSumNumber([1, 2, 30, 3, 4, -15])).toBe(15);
});

