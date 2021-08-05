//Write a functions for : add, subtract, multiple and divide
debugger;
var add = function (num1, num2) {
  return num1 + num2;
};

var subtract = function (num1, num2) {
  return num1 - num2;
};

var multiple = function(num1, num2) {
  return num1 * num2
};

var divide = function(num1, num2) {
  return num1 / num2
};

// console.log(add(1, 2)) //3

var calculate = function (func, num1, num2) {
  return func(num1, num2)
};
// console.log(calculate(add, 1, 2)); //3