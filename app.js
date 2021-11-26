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




