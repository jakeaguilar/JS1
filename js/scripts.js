/*
let btnClear = document.querySelector("#btnClear");
let myTimeout;
let annoyingPopup = () => {
  alert("HEY! Have you seen my insane and wacky discounts!?!?");
};
*/

/*
//ES6 way w/o function

setTimeout(
  () => {
    alert("Hey guys, you cool")
  },
  5000
);
*/

/*
//ES6 Way w/ fucntion
//because JS is asynchronous, the console log will display before the startTimer function
function startTimer(){
  myTimeout = setTimeout(annoyingPopup, 5000);
  };

  startTimer();
  console.log("I should be second!");


//how to clear it
function cancelTimer(){
  clearTimeout(myTimeout)
}

btnClear.addEventListener("click", cancelTimer);
*/

/*
//SET INTERVAL, very similiar to timeout but interval appears every so many seconds
let myInterval;

function remindUser(){
  alert("HEY, balloons are on sale muthafucka");
};

myInterval = setInterval(remindUser, 3000);

function clear() {
  clearTimeout(myInterval);
};

btnClear.addEventListener("click", clear);
*/

/*
//TRY IT OUT

//1.
let btnTimeoutClear = document.querySelector("#btnTimeoutClear");
let btnIntClear = document.querySelector("#btnIntClear");

let timeoutAnswer = prompt("How long do you wanna wait", "in seconds")
let intervalAnswer = prompt("How long do you wanna wait in between", "in seconds")
let timeoutReference;
let intervalReference;

//2.
let quotes =["Be Kind", "Stay humble", "Shoot first", "Strike hard", "No Mercy"];

function createTimer(time, type){
    let endIndex = time.indexOf(" ");
    let parsedTime = parseInt(time.substring(0, endIndex));

    if(!isNaN(parsedTime)){
      parsedTime *= 1000;
      if(type === "timeout"){
        timeoutReference = setTimeout( alertRandomQuote, parsedTime);
      }else{
      //...
      intervalReference = setInterval( alertRandomQuote, parsedTime);
      }
  }else{
      //...
      console.log("oops...")
    }
  };


  function alertRandomQuote() {
    let maxIndex = quotes.length -1;
    let indexToChoose = Math.floor(Math.random() * maxIndex);
    alert(quotes[indexToChoose]);
  };

createTimer(timeoutAnswer, "timeout");


//3.
createTimer(intervalAnswer, "interval")

//4.
btnIntClear.addEventListener("click", () => {
  clearInterval(intervalReference);
});

btnTimeoutClear.addEventListener("click", () => {
  clearInterval(timeoutReference);
});
*/

//LOCAL STORAGE/SESSION STORAGE


function storeUserInfo(){
  if(sessionStorage.getItem("firstName")){
      let firstName = prompt("Whats your first name?");
      sessionStorage.setItem("firstName", firstName);
  }
};

storeUserInfo();


let retrievedValue = sessionStorage.getItem("firstName");
alert(`Hey ${retrievedValue}!`);
