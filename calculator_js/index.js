// Ask the User what calculator they would like to use
alert("What Calculator do you need?");
var calc_choice = prompt("(b)asic, (a)dvnaced, (i)bmi or (t)rip");
// If the input is 'b' the basic calculator prompt is run
if(calc_choice=="b"){
  alert("Basic Calculator");
// Giving the code information so a basic calculation can be made
  var num1=parseInt(prompt("Enter a value", "0"));
  var operator=prompt("Enter an operator","eg. +, -, * or /");
  var num2=parseInt(prompt("Enter a value", "0"));
// Using switch to differentiate between the different operators
  switch(operator){
    case "+" :
      alert(num1+num2);
      break;
    case "-" :
      alert(num1-num2);
      break;
    case "*" :
      alert(num1*num2);
      break;
    case "/" :
      alert(num1/num2);
      break;
    default:
      alert("Incorrect input");
  }
}
// If the input is 'a' the advanced calculator prompt is run
else if(calc_choice=="a"){
  alert("Advanced Calculator");
// Asking the user if they would like to use the Power / Square root funtion
  operator=prompt("Would you like the (p)ower or (s)quare root of initial input");
// Using switch to differentiate between the different operators
  switch (operator) {
    case "p":
      num1=parseInt(prompt("Enter a value", "0"));
      num2=parseInt(prompt("Enter a value", "0"));
      alert(Math.pow(num1, num2));
      break;
    case "s":
      num1=parseInt(prompt("Enter a value", "0"))
      alert(Math.sqrt(num1));
      break;
    default:
      alert("Incorrect input");
  }
}
// if the input is "i" the BMT calculator prompt is run
else if(calc_choice=="i"){
  alert("BMI Calculator");
  operator=prompt("Would you like to use (m)etric or (i)mperial")
  switch (operator) {
    case "m":
      var weight = parseFloat(prompt("Enter your weight in kg"));
      var height = parseFloat(prompt("Enter your height in m"));
      var metric_bmi_function = (weight/height) / height;
      alert(metric_bmi_function);
      break;
    case "i":
      weight = parseFloat(prompt("Enter your weight in pounds"));
      height = parseFloat(prompt("Enter your weight in inches"));
      var imperial_bmi_function = ((weight * 703)/height)/height;
      alert(imperial_bmi_function);
      break;
    default:
      alert("Incorrect input")
  }
}
// if the input is "t" the trip calculator prompt is run
else if(calc_choice=="t"){
  alert("Trip Calculator");
}
