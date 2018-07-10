/*
let bestNumber = true;
let isTrue = false;

console.log(bestNumber || isTrue);


let num = 11;
let string = 11;

//loose equality checks for value and NOT the type
console.log(num == string);

//strict equality checks for both value and type
console.log(num === string);
*/

var prim = "Jake";

var stringObj = new String(prim);

console.log(prim === stringObj);//false

console.log(prim == stringObj);//true

//MODULUS
console.log (5 % 2);// in this example its how many times 2 can go into 5, so the remainder is 1 becasue 2 can go into 5, 2 times leaving 1 left over

//INC and device
let start = 1;
// blah blah blah logic here....
start = start + 1;
//this also is the same as
start++;
console.log(start);//should be 2 now

let nonNum = "cheese";
console.log(parseInt(nonNum));

//if you try to perfrom a number eval on a non number, it will return NaN, and if you try to perfrom string eval on a number it will jsut return an error

//if you want to check if something is or is not a number

//is a number
//console.log(!isNan());

//is not a number
//console.log(isNan());

//change the string 50 into a number and if it cant change it, it will return Not a Number (Nan)
let fifty = "50";
console.log(parseInt(fifty));

//if you want to change a number into a string
let nonString = 50000;
console.log(nonString.toString()); //this does not reassign the value of nonString
//console.log(nonString = nonString.toString()); this would reassign nonString

nonString += 20;//same as nonString = nonString + 20

//any time you do a reassignment, doesnt matter if its a console log or not, it WILL reassign it!

//IF ELSE
/*
//make 2 string number variables and convert them numbers then add them together
var firstNum = prompt("Provide a number between the values 1-10");
var secondNum = prompt("Provide a second number between the values 1-10");

// remember "!isNan" means its checking if it IS a number, isNaN checks if it is NOT a number
if(!isNaN(firstNum) && !isNaN(secondNum))
{
  alert(parseInt(firstNum) + parseInt(secondNum));
}
else if(isNaN(secondNum))
{
  secondNum = parseInt(prompt("STAHP it! One of your inputs was not a number"));
  alert(parseInt(firstNum) + (secondNum));
}
else
{
  alert("you dumb");
}
*/

//SWITCH CASE
/*
let greeting = prompt("Tell me how to say hello" , "Gutentaag")
//.toLowerCase or .toUpperCase is a way to normalize data
switch (greeting.toLowerCase()) {
  case "hello":
    alert(`I love saying ${greeting}`);
    break;
  case "wassup":
    alert(`${greeting} is so 90s`);
    break;
  default:
    alert(`Ive never heard ${greeting} before!`);
    break;
}
*/

//TERNARY
let money = 10;
let currency = confirm("In dollars or not?");

//you would want to use Ternarys if its a really simple evaluation, and its the most optimized in JS
currency ? alert(`$${money}`) : alert(money);//TERNARY

var userAge = confirm("Are you over the age 18?");
if(userAge)
{
  let isUnder80 = confirm("Are you under 80 years old?");
  if(isUnder80)
  {
    let isCool = confirm("Do you love Star Wars?");
    if(isCool)
    {
      alert("you are soo cool!");
    }
  }
  else
  {
    let isElderly = confirm("Do you like prunes");
  }
}
else
{
  alert("You were shot first!");
}
