const longestWordArr = require('./2-2');

test('the second largest with arr', () => {
    const numbers = ["Hihi", "ahhahaah"];
    const result = longestWordArr(numbers);
    expect(result).toBe("ahhahaah");
});

test('the second largest with arr', () => {
    const numbers = ["Hihi"];
    const result = longestWordArr(numbers);
    expect(result).toBe("Invalid input");
});

test('the second largest with characters', () => {
    const numbers = "Hello my name is";
    const result = longestWordArr(numbers);
    expect(result).toBe("Invalid input");
});