var x = parseInt(prompt("Enter a Value", "0"));
var operator = prompt("Enter an operator");
var y = parseInt(prompt("Enter a Value", "0"));
var z;

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

alert (z);
