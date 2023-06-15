const sortByDistinctCharacters = require("./3-10");

test("Sắp xếp mảng theo số kí tự ", () => {
    expect(sortByDistinctCharacters(['apple', 'banana', 'orange', 'kiwi', 'strawberry'])).toEqual(['kiwi', 'apple', 'banana', 'orange', 'strawberry']);
})

test("Sorts array with empty strings", () => {
    expect(sortByDistinctCharacters(['', 'banana', '', 'kiwi', 'strawberry'])).toEqual(['', '', 'kiwi', 'banana', 'strawberry']);
});

test("The list sorted by the number of distinct characters in each string", () => {
    expect(sortByDistinctCharacters(["can", "you", "hear", "my", "heart"])).toEqual([
        "my",
        "can",
        "you",
        "hear",
        "heart",
    ]);
});