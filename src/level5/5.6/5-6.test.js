const trimStr = require("./5-6");


test('the longest increasing subsequence with arr', () => {
    const arr = "Hello ";
    const result = trimStr(arr);
    expect(result).toBe("Hello");
});


test('test 2', () => {
    const arr = " Hello ";
    const result = trimStr(arr);
    expect(result).toBe("Hello");
});