// State x and y as the Input Number
// State operator as the Input operation
// State the variable z for use as the end result
var x = parseInt(prompt("Enter a Value", "0"));
var operator = prompt("Enter an operator");
var y = parseInt(prompt("Enter a Value", "0"));
var z;

// if else loop used to differentiate between the different Input Operations
if (operator == "+") {
  z = x + y;
}
else if (operator == "-") {
  z = x - y;
}
else if (operator == "*") {
  z = x * y;
}
else if (operator == "/") {
  z = x / y;
}
// To print the result as a alert
alert (z);
