// output doc selector
const container = document.querySelector('.container');
let valueHolder = '';

//clearbutton (CE) creation and functionality
let clearButton = document.querySelector('.CE');
clearButton.addEventListener('click', () => {
    valueHolder = '';
    output.innerHTML = valueHolder;
});

//
const output = document.querySelector('.output');
output.textContent = valueHolder;

//for each number button, it adds the value to valueHolder, and then updates
//the innerHTML of the output value which is the display at the top
const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(function(item) {
    item.addEventListener('click', function() {
        valueHolder = valueHolder + item.innerHTML;
        output.innerHTML = valueHolder;
    });
});
//

//addition functionality
const additionButton = document.querySelector('.plus');
additionButton.addEventListener('click', function() {
    valueHolder = valueHolder + additionButton.innerHTML;
    output.innerHTML = valueHolder;
});

//subtract functionality
const subtractButton = document.querySelector('.minus');
subtractButton.addEventListener('click', function() {
    valueHolder = valueHolder + subtractButton.innerHTML;
    output.innerHTML = valueHolder;
});

//equals operator
const equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click', function() {
    let equation = valueHolder;
    let answer = eval(equation);
    valueHolder = answer;
    output.innerHTML = valueHolder;
});

//multiply functionality
const multiplyButton = document.querySelector('.multiply');
multiplyButton.addEventListener('click', function() {
    valueHolder = valueHolder + multiplyButton.innerHTML;
    output.innerHTML = valueHolder;
});

//divide functionality
const divideButton = document.querySelector('.divide');
divideButton.addEventListener('click', function() {
    valueHolder = valueHolder + divideButton.innerHTML;
    output.innerHTML = valueHolder;
});

//
const backspaceButton = document.querySelector('.backspace');
backspaceButton.addEventListener('click', () => {
    valueHolder = valueHolder.substring(0, valueHolder.length - 1);
    output.innerHTML = valueHolder;
});

const firstPButton = document.querySelector('.firstP');
firstPButton.addEventListener('click', function() {
    valueHolder = valueHolder + firstPButton.innerHTML;
    output.innerHTML = valueHolder;
});

const lastPButton = document.querySelector('.lastP');
lastPButton.addEventListener('click', function() {
    valueHolder = valueHolder + lastPButton.innerHTML;
    output.innerHTML = valueHolder;
});


