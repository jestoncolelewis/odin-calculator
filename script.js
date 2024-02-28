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
        case 'add':
            to_display(add(num1, num2));
            break;
        case 'subtract':
            to_display(subtract(num1, num2));
            break;
        case 'multiply':
            to_display(multiply(num1, num2));
            break;
        case 'divide':
            to_display(divide(num1, num2));
            break;
    }
}

function to_display(num) {
    display_val += num;
    display_content.textContent = display_val;
    display.append(display_content);
}

function operand(name) {
    num1 = display_val;
    op = name;
    display_val = '';
}

const display = document.querySelector('#display');
const display_content = document.createElement('p');
display_content.textContent = '0';
display.append(display_content);
let display_val = '';
let num1 = 0;
let num2 = 0;
let op = '';