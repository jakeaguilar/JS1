/*
var myString = "Hello World*76";
console.log(typeof myString);
var myNumber = 43;
console.log(typeof myNumber);

//good way of naming bools is using is? like Is the user logged in?
var isLoggedIn = false; //boolean

//if you see a "variable" in the console on chrome is "not defined"
var newVariable;
console.log(newriable);// purposely wrong!! will give error above ^^

//null varialble will literally just say null!
//isLoggedIn = null;
*/

/*Having issues, will no display anything when starting atom-live-server
i tried refreshing once on the page, commenting out everything past the first alert
pop up. Not sure why nothing is displaying...

Also when trying to use ES6 string interpolation, it sees the ${variable} as
part of the string, is there another package i need to install? resorted to ES5 interpolation

//Question: Is there a better way of concatentating strings and variables etc.?

...also due to not being in class not sure what branch gh-pages is?
*/

//Asks for users first mame
var firstName = prompt("What is your first name?");

//Asks for users last name
var lastName = prompt("What is your last name?");

//logs users first name into the console, with concatenation
Console.log("User's first name is:" + firstName);

//Displays users last name by a pop up message
alert("Your last name is:" + lastName);


//prompts user to enter their birthdate
var bDay = prompt("When is your birthday (MM/DD/YYYY)?");

//assigns user input for variable bDay to Date
var bDay = new Date();

//confirming the date entered for their bday is accurate
var bdayConfirm = confirm("Is the date you entered for your birthday correct?");
if (true)
  {
    alert("Your birthday is:" + bDay.toDateString());
  //alert("Your birthday is:" + bDay);
  }
else
  {
  alert("Please refresh the page and try again!");
  }
