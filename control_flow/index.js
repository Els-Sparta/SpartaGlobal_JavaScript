// var money_in_my_pocket = parseFloat(prompt('How much money do you have?'));
// var drinks_drunk = parseFloat(prompt("How many have you had?"))
// var price_of_crisp = parseFloat(prompt("How much are those crisp"))
//
// if(money_in_my_pocket > 10 && drinks_drunk < 3){
//   console.log("Another drink pls");
// }
// else if(money_in_my_pocket > 5 || price_of_crisp == 0){
//   console.log("half a drink please");
// }
//
// else {
//   console.log("Get your ass home!");
// }

//if version
var name ="tim"

if(name === "bob"){
  console.log("Wassup Bob!");
}
else if (name === "tim"){
  console.log("Yo Tim!");
}
else if(name === "steve"){
  console.log("Steeeeevie");
}

//switch version
switch(name) {
  case "bob":
    console.log("Wassup Bob!");
    break;
  case "Tim":
    console.log("Yo Tim");
    break;
  case "steve":
    console.log("Steeeeevie");
    break;
  default:
    console.log("hi default person");
}
