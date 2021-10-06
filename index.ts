//######################################################################
//###########################           SSTech       ###################
//###########################   Programming Courses  ###################
//######################################################################
let mynumber1, mynumber2: number;
let myopre: string;
mynumber1 = parseInt(prompt('anter the number 1'));
mynumber2 = parseInt(prompt('anter the number2'));
myopre = prompt('anter the opertion');
main(mynumber1, mynumber2, myopre);

function factorial(num1: number, num2: number) {
  return num1 + num2;
}
function sum(num1: number, num2: number) {
  return num1 - num2;
}
function max(num1: number, num2: number) {
  return num1 * num2;
}
function index(num1: number, num2: number) {
  return num1 / num2;
}
function main(num1: number, num2: number, opre: string) {
  let result: number;
  if (opre == '+') {
    result = factorial(num1, num2);
  } else if (opre == '-') {
    result = sum(num1, num2);
  } else if (opre == '*') {
    result = max(num1, num2);
  } else if (opre == '/') {
    result = index(num1, num2);
  }
  console.log(result);
}
