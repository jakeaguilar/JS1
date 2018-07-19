// The DOM is essentially a virtual space/environment that happens in your browser (individualized to every persons browser) where HTML/CSS, XML, JS, and JSON kind of meet.
//Read the MDN on DOM
//JS is essentially a DOM manipulator, you are taking stuff from the DOM, manipulating it, and spitting back out

/*QUERYING THE DOM
These 3 are older ways of quering the DOM, there are 2 newer ways that are more robust ways of querying the DOM

This returns an array of the html tags used in the webpage, the tag must ALWAYS be enclosed in quotes, single or double.

In order to access what would come back we would need to assign it to a variable, so we made one called body
*/
let body = document.getElementsByTagName("body");
console.log(body);

let header = document.getElementsByClassName("heading");
console.log(header);

//will only give you the first one used
const paragraph = document.getElementById("paragraph1");
console.log(paragraph);

//NEWER METHODS
//can call tags, classes in HTML, or IDs, remember to call classes must start with "." and with IDs "#"
let div = document.querySelector(".Jake-is-the-BEST", "#My-mom-is-type-awesome");
console.log(div);

//can call tags, classes in HTML, or IDs, remember to call classes must start with "." and with IDs "#"
let divs = document.querySelectorAll("#My-mom-is-type-awesome")
console.log(divs);


/*EVENT LISTENING*/
//with event listening you need to know what youre element on the page, what event youre listening for (ie hover, click), and what youre going to do once event happens

//first value in addEventListener is the event were listening for, and second value is the function that will perform what you want to do
div.addEventListener(
  "mouseover",
  //ES6 FAT ARROW FUNCTION to write callback, no parentheses on ev because its a single argument
  ev => {
    console.log(ev);
    div.style.backgroundColor = "indigo";
  }

  /* ES5 Way to write callback
  function(ev){
    div.style.backgroundColor = "indigo";
  }
  */

);
