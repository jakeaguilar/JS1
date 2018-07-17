//FUNCTIONS
//Variables declared inside a function are NOT global, what happens inside a function is private to that function, and that function only


/*
//ANNONYMOUS FUNCTIONS, these types of funtions cannot refer to itself because this function has no name.
// this is JUST a FUNCTION definintion
//inside the pararentheses is your arguments or parameters go
fucntion(string){
  //inside this block, is where your data transformation happens and return
  //NEVER put code after a return statement becasue JS will stop after the return statement in that block
  return string.toUpperCase();
};//END of the function
*/


/*
//NAMED FUNCTIONS
//FUNCTION definintion, fucntion declares we creating a function definiton and the name of the function is addTwo()
// we are taking the value num, and then adding 2
//think as "num" as just an empty variable, so when we replace later, the value we put in the pararentheses will take become that variable
function addTwo(num) {
  return num + 2;
};


//CALL or INVOKE a FUNCTION
//below is whats called the calledSite
addTwo(22);
let myNewNumber = addTwo(34);
console.log(myNewNumber);

//function that just displays the string
function logMyString(string){
  consle.log(string);
};
logMyString("JAke is the coolest cat!");
*/


/*
//FUNCTION DECLARATION
fucntion alertsAd(){
alert ("Hey we have a sale on Garthoks!!")
};

alertsAd();
*/


/*
//FUNCTION EXPRESSION
//if you tried to call this Function Expression before the fucntion is defined it will throw an error
confirmStuff("Do you want to build a snowman?")

let confirmStuff = function(someString) {
  confirm(someString);
};

confirmStuff("Do you want to build a snowman?")
*/






//RECURSION
let i = 0;
function iCallMyself() {
  console.log(i);
  i++;
  if(i < 10) iCallMyself();
};



/*
//FAT ARROW FUNCTIONS
//BASIC IMPLEMENTATION
(logFunction, alertFunction) => {
  logFunction("hello world");
  alertFunction("Goodbye world");
}

//ONLY 1 argument
//pararentheses are optional if theres only 1 argument
string => {
  console.log(string);
}

//FUNCTION EXPRESSION OF FAT ARROW
let logString = string => {
  console.log(string);
}
logString("Hello Dogs!");
*/


/*
//IMPLICIT RETURN
string => (string.toUpperCase());
string => string.toUpperCase();
*/

//DAY 5 Try it out is the take home
