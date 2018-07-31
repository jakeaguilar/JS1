//PROTOTYPE INHEIRITNACE
let sentence = new String("Ann went walking one day...");
let number = new Number(32);
console.log(Object.getPrototypeOf(number));

//most basic way to create an object
//objects are made of KEY VALUE PAIRS, ("KEY : VALUE" = catchPhrase: "Where's my car?")
let dude = {
  catchPhrase: "Where's my car?",
  firstName: "Big",
  lastName: "Lebowski",
  age: Infinity
};
console.log(Object.getPrototypeOf(dude));



/*
//always use a capital letter for a constructor function
function User (name, email, password, favorites, cart){
  this.name = name;
  this.email = email;
  this.password = password;
  this.favorites = favorites;
  this.cart = cart;

};

//always user new when building a new objecct with certain properties
let jacob = new User("Jacob", "aguilarjacob23@yahoo.com", "123456", [], []);
console.log(jacob);
console.log(Object.getPrototypeOf(jacob));

let ryeker = new User("Ryeker", "best_teach@truth.com", "1111", [], []);
ryeker.isAdmin = true;
console.log(ryeker);
*/

let emailInput = loginForm.email;
let passInput = loginForm.password;
let nameInput = loginForm.name

function User (name, email, password){
  this.name = name;
  this.email = email;
  this.password = password;
};
