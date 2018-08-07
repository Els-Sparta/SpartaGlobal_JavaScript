var x = prompt("Enter a Value", "0");
var operator = prompt("Enter an operator");
var y = prompt("Enter a Value", "0");
// var num1 = parseInt(x);
// var num2 = parseInt(y);

if (operator == "+") {
  var z = parseInt(x) + parseInt(y);
}
else if (operator == "-") {
  var z = parseInt(x) - parseInt(y);
}
else if (operator == "*") {
  var z = parseInt(x) * parseInt(y);
}
else if (operator == "%") {
  var z = parseInt(x) % parseInt(y);
}

console.log (z);
// alert (z);
