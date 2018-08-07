// Ask the User what calculator they would like to use
alert("What Calculator do you need?");
var calc_choice = prompt("(b)asic, (a)dvnaced, (i)bmi or (t)rip");
// If the input is 'b' the basic calculator prompt is run
if(calc_choice=="b"){
  alert("Basic Calculator");
// If the input is 'a' the advanced calculator prompt is run
}
else if(calc_choice=="a"){
  alert("Advanced Calculator");
}
// if the input is "i" the BMT calculator prompt is run
else if(calc_choice=="i"){
  alert("BMI Calculator");
}
// if the input is "t" the trip calculator prompt is run
else if(calc_choice=="t"){
  alert("Trip Calculator");
}
