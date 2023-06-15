const longest_palindrome_length = require('./3-7');


test("longest_palindrome_length  any subset of the list", () => {
    expect(longest_palindrome_length("awa")).toEqual(0);
});

test("longest_palindrome_length  of the list", () => {
    expect(longest_palindrome_length("A man a plan a canal Panama")).toEqual(21);
});

test("longest_palindrome_length ", () => {
    expect(longest_palindrome_length("forgeeksskeegfor")).toEqual(10);
});