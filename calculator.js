//Create a variable to hold the first number that is pressed

var currentNum
var output = currentNum


//Display the clicked number
var display = document.getElementById("display");
var numOne = document.getElementById("one")


numOne.onclick = function () {
  //need to find out how to make it the id of the button clicked
  display.innerHTML = numOne.value
  currentNum = numOne.value
}

// Clear the output and display
var clear = document.getElementById("clear")
clear.onclick =  function () {
  display.innerHTML = ''
}


//Display needs to show the last element clicked
var display

//When the "equals" button i
// onClick
// var operator

//Write a functions for : add, subtract, multiple and divide
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


