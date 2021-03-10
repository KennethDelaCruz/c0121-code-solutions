const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const digit1 = process.argv[2];
const digit2 = process.argv[4];
const operand = process.argv[3];

function calculate(number1, operand, number2) {
  const x = parseInt(number1);
  const y = parseInt(number2);

  if (operand === 'add' || operand === 'plus') {
    return add(x, y);
  } else if (operand === 'subtract' || operand === 'minus') {
    return subtract(x, y);
  } else if (operand === 'multiply' || operand === 'times') {
    return multiply(x, y);
  } else if (operand === 'divide' || operand === 'over') {
    return divide(x, y);
  }

  return 'This cannot be calculated';
}

console.log(calculate(digit1, operand, digit2));
