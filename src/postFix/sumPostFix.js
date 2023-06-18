const infixToPostfix = require("./postFix");
function sumPostfix(str) {
    let postfix = infixToPostfix(str);
    let arr = [];
    let result = 0;
    for (let i = 0; i < postfix.length; i++) {
        let a = postfix[i];
        if (/[0-9]/.test(a)) {
            arr.push(a);
        } else {
            let x = arr.pop();
            let y = arr.pop();
            switch (a) {
                case "+":
                    result = y + x;
                    break;
                case "*":
                    result = y * x;
                    break;
                case "-":
                    result = y - x;
                    break;
                case "/":
                    result = y / x;
                    break;

                default:
                    return 0;
                    break;
            }
            arr.push(result);
        }
    }
    console.log(arr[0]);
    return arr[0];
}

module.exports = sumPostfix;