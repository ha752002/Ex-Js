const sortByDistinctWords = require('./4-7');


test('Test1: ', () => {
    const arr = ['the quick brown fox', 'the lazy dog jumps over the fence', 'the cat in the hat'];
    const result = sortByDistinctWords(arr);
    expect(result).toEqual(['the lazy dog jumps over the fence', 'the quick brown fox', 'the cat in the hat']);
});

test('Test2: Empty input array', () => {
    const arr = [];
    const result = sortByDistinctWords(arr);
    expect(result).toEqual([]);
});

test('Test3: Input array with one string', () => {
    const arr = ['hello world'];
    const result = sortByDistinctWords(arr);
    expect(result).toEqual(['hello world']);
});
test('Test5: Input array with strings of different lengths', () => {
    const arr = ['cat', 'elephant', 'dog', 'tiger', 'lioness'];
    const result = sortByDistinctWords(arr);
    expect(result).toEqual(['elephant', 'lioness', 'tiger', 'cat', 'dog']);
});