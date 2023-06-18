const calculateExpression = require("./postFix");

test("Postfix:", () => {
    expect(calculateExpression('4*5-12+15')).toEqual('45*12-15+');
})

test("Postfix:", () => {
    expect(calculateExpression(('5/(2-3)*2'))).toEqual('523-/2*');
})

test("Postfix:", () => {
    expect(calculateExpression('8/(3-2)*5')).toEqual('832-/5*');
})  