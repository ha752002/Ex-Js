const SortListAscending = require('./1-7');

test('SortListAscending with empty array', () => {
    const arr = [];
    const sortedArr = SortListAscending(arr);
    expect(sortedArr).toEqual("Invalid input");
});

test('Sort list alphabetically', () => {
    const arr = ['banana', 'apple', 'cherry', 'date'];
    const sortedArr = SortListAscending(arr);
    expect(sortedArr).toEqual(['apple', 'banana', 'cherry', 'date']);
});