// output doc selector
const container = document.querySelector('.container');
let valueHolder = '';

const output = document.querySelector('.output');
output.textContent = valueHolder;

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(function(item) {
    item.addEventListener('click', function() {
        valueHolder = valueHolder + item.innerHTML;
        output.innerHTML = valueHolder;
    });
});

const buttonOne = document.querySelector('.one');

buttonOne = 1;
// value holders for buttons




