const calculateExpression = require("./sumPostFix");

test("Postfix:", () => {
    expect(calculateExpression("3-4-5")).toEqual(-6);
})

test("Postfix:", () => {
    expect(calculateExpression("5/(2-3)*2")).toEqual(-10);
})

test("Postfix:", () => {
    expect(calculateExpression("8/(3-2)*5")).toEqual(40);
})  