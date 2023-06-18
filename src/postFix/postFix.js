const infixToPostfix = (infixExpression) => {
    const operators = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
        '%': 2,
        '^': 3,
    };

    const stack = [];
    let postfixExpression = '';

    for (let char of infixExpression) {
        if (char === ' ') {
            continue;
        }

        if (/[a-zA-Z0-9]/.test(char)) {
            postfixExpression += char;
        } else if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            while (stack.length > 0 && stack[stack.length - 1] !== '(') {
                postfixExpression += stack.pop();
            }
            stack.pop();
        } else {
            while (
                stack.length > 0 &&
                stack[stack.length - 1] !== '(' &&
                operators[char] <= operators[stack[stack.length - 1]]
            ) {
                postfixExpression += stack.pop();
            }
            stack.push(char);
        }
    }

    while (stack.length > 0) {
        postfixExpression += stack.pop();
    }

    return postfixExpression;
};

module.exports = infixToPostfix;