
const div = document.querySelector(".myDiv");
const trekkies = "https://vignette.wikia.nocookie.net/memoryalpha/images/7/74/Enterprise_NX-01.jpg/revision/latest?cb=20160106180837&path-prefix=en";
let image = document. querySelector ("img");

//returns text (only) in ALL children as well
//console.log(div.textContent);

//reset the vlaue of the text inside the element, just for show you would never want to write this
//div.textContent = "say cheese and die!!!";

//console.log(div.innerHTML);

//Just to show to you can insert an h1 tag into the DOM
//div.innerHTML = "<h1> hey there, R.L. Stein. Did you die in the 90s</h1>";

//created element and populated it with the string
let newH1 = document.createElement("h1");
newH1.textContent = "I am the greatest....I....I....";
//newH1.id = "red_bg";


//to use appendChild, you need to use the appendChild method on the object div, because
//new h1 tag being made is a child of the parent, div.
div.appendChild(newH1);

let newH2 = document.createElement("h2");
newH2.textContent = "I am before the h1";

//really verbose for doing the same thing as classlist
newH2.className = "blue-bg";
//the += doesnt work with ids but with classes it works
newH2.className += " white-text";

//when using insertBefore you must insert the new tag you are inserting and the reference node you want to place the element youre inserting before
div.insertBefore(newH2, newH1);


let newP = document.createElement("p");
newP.textContent = "I am a squirrel...";
newP.classList.add("purple-text", "green-bg");
div.appendChild(newP);

let span = document.querySelector("span");
span.addEventListener("mouseenter", (e) => {
  span.classList.remove("white-text");
});

span.addEventListener("click", (e) => {
  span.classList.toggle("giant-text");
  //replace a class with a different class, class yoy want to change from first and the one you want to replace with the second

  //checks if the element contains the class green-bg and if so replace green-bg with blue-bg, if not replace blue-bg with green-bg
  span.classList.contains("green-bg") ?
  //
  span.classList.replace("green-bg", "blue-bg") :
  span.classList.replace("blue-bg", "green-bg");
});

image.addEventListener("click", (e) => {
  image.setAttribute("src", trekkies)

});
