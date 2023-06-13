const countStringsContainingA = require('./1-10');

test('countStringsContainingA with empty string', () => {
    const str = "";
    const result = countStringsContainingA(str);
    expect(result).toBe(0);
});

test('count_words with valid string', () => {
    const str = ["cat", "dog", "rabbit", "alligator"];
    const result = countStringsContainingA(str);
    expect(result).toBe(3);
});