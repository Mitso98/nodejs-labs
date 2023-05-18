// Sample input: node calculator.js -o + 3 7

// steps
// from process.argv
// get the operator. Allowed operators are + - * / **
// get the operands (values)
// do the operation on the operands
// print the operation and results ex:  3 + 7 = 10

// Get the command-line arguments
const args = process.argv.slice(2);

// Parse the operator and operands
const operator = args[0];
const operands = args.slice(1).map(parseFloat);

// Perform the mathematical operation
let result;
switch (operator) {
  case '+':
    result = operands.reduce((acc, val) => acc + val, 0);
    break;
  case '-':
    result = operands.reduce((acc, val) => acc - val);
    break;
  case '*':
    result = operands.reduce((acc, val) => acc * val, 1);
    break;
  case '/':
    result = operands.reduce((acc, val) => acc / val);
    break;
  case '**':
    result = operands.reduce((acc, val) => acc ** val);
    break;
  default:
    console.log('Invalid operator');
    return;
}

// Print the result
console.log(`${operands.join(` ${operator} `)} = ${result}`);