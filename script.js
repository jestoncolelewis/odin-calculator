function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1/num2;
}

function operate(num1, op, num2) {
    switch (op) {
        case add:
            return add(num1, num2);
        case subtract:
            return subtract(num1, num2);
        case multiply:
            return multiply(num1, num2);
        case divide:
            return divide(num1, num2);
    }
}

function to_display(num) {
    display_val += num;
    display_content.textContent = display_val;
    display.append(display_content);
}

const display = document.querySelector('#display');
const display_content = document.createElement('p');
display_content.textContent = '0';
display.append(display_content);
let display_val = '';