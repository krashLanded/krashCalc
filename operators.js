// add operator, returns the sum of 1 and another number
function add(number1, number2) {
    return number1 + number2;
};

// subtract operator, returns the difference of 1 and another number
function subtract(number1, number2) {
    return number1 - number2;
};

// multiply operator, returns the product of 1 and another number
function multiply(number1, number2) {
    return number1 * number2 ;
};

//divide operator, returns the quotient of 1 and another number
function divide(number1, number2) {
    return number1 / number2;
};

// function takes operator, two numbers, and then returns the result 
function operate(number1, number2, operator) {
    switch (operator) {
        case '+':
            return add(number1, number2);
        case '/':
            return divide(number1, number2);
        case '*':
            return multiply(number1, number2);
        case '-':
            return subtract(number1, number2);
    };
};
