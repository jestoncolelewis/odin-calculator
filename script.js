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
    if (num2 === 0) {
        return 'nope';
    } else {
        return num1/num2;
    }
}

function operate(num1, op, num2) {
    let result = 0;
    switch (op) {
        case 'add':
            result = add(num1, num2);
            break;
        case 'subtract':
            result = subtract(num1, num2);
            break;
        case 'multiply':
            result = multiply(num1, num2);
            break;
        case 'divide':
            result = divide(num1, num2);
            break;
    }
    display_val = '';
    to_display(String(result));

    return result;
}

function to_display(num) {
    display_val += num;
    display_content.textContent = display_val;
    display.append(display_content);
}

function operand(name) {
    if (eql === 0) {
        num1 = Number(display_val);
        eql = 1;
    } else {
        num2 = Number(display_val);
        display_val = '';
        num1 = operate(num1, op, num2);
    }
    op = name;
    display_val = '';
}

function wipe() {
    num1 = 0;
    num2 = 0;
    eql = 0;
    op = '';
    display_content.textContent = '0';
    display.append(display_content);
}

const display = document.querySelector('#display');
const display_content = document.createElement('p');
const equals = document.querySelector('#eql');
const clear = document.querySelector('#clr');

let display_val = '';
let num1 = 0;
let num2 = 0;
let op = '';
let eql = 0;

display_content.textContent = '0';
display.append(display_content);

equals.onclick = () => {
    num2 = Number(display_val);
    display_val = '';
    operate(num1, op, num2);
    eql = 0;
    display_val = '';
}
clear.onclick = () => {wipe()};