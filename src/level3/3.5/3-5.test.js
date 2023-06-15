const findSmallestPositiveInteger = require('./3-5');

test('the smallest positive integer is:', () => {
    const arr = [1, 2, 3, 7, 8, 20];
    const result = findSmallestPositiveInteger(arr);
    expect(result).toBe(42);
});

test("the smallest positive integer", () => {
    expect(findSmallestPositiveInteger([1, 3, 4, 5])).toEqual(2);
});

test("the smallest positive integer", () => {
    expect(findSmallestPositiveInteger([1, 2, 3, 4])).toEqual(11);
});