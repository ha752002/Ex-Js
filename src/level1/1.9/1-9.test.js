const count_words = require('./1-9');


test('count_words with numbers', () => {
    const numbers = [1, 2, 3];
    const result = count_words(numbers);
    expect(result).toBe("Invalid input");
});


test('count_words with empty', () => {
    const numbers = [];
    const result = count_words(numbers);
    expect(result).toBe("Invalid input");
});

test('count_words with String', () => {
    const str = "Hello Mother";
    const count = count_words(str);
    expect(count).toBe(2);
});