//FORMS

let loginForm = document.forms.login;
//you would NOT want to use document.forms but just showing it will list all the forms on the page, and you can look for a specific form name
//console.log(document.forms, loginForm);

//loginForm was defined above, so we can shorthand, so instead of
let emailInput = loginForm.email;
let passInput = loginForm.password;

// "?" in the URL: a query parameter
// "&": separates parameters


emailInput.addEventListener("keyup", e => {
  console.log(e.target.value);///What is getting typed in?
  console.log(e.keyCode);//shows the key code of whatever key the user entered in
})

//validate data in form before the submit button sends the data to the server
//submit event type will only work on FORMS!!
loginForm.addEventListener("submit", e => {

  //preventDefault work on ANY event, but the most common will be forms, and buttons in divs
  e.preventDefault();
  //lets say you do some checking of the user input and sumbit the form, blah blah
  //now you want to reset the form, basically is clears the input from the forms
  loginForm.reset();
  console.log(e);
})


//THIS
function listItems(pets){
  //if we dont force "this" to be something other the its default, it will always be the window because of the global scope
  console.log(this);
  alert(`${this.name} loves ${this.favorites[0]} and has a ${pet}`);
}

let user = {
  name: "Jacob",
  cart: [],
  coupons: [],
  favorites: ["cheese"],
  listFavorites: listItems //IMPLICITLY BINDS "THIS"
}

//IMPLICIT "THIS" BINDING
//alerts out Jacob Loves cheese
user.listFavorites();

//EXPLICIT BINDING
let jr = {
  name: "Junior Royce",
  cart: ["guns"],
  coupons: [1.99],
  favorites: ["Star Wars"]
};

//CALL
//RULE 1 about call is it must be called on a function
listItems.call(jr, "dog");

//RULE 2 about call is if the function being bound requires arguements, theye begin as the SECOND arguement of call()

//APPLY
//you would want to use apply if youre getting data in the form of an array, because apply natively applies it as an array anyway
listItems.apply(jr, ["cat"])
