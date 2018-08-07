/*
//JSON
let myObject = `{
  name: "Jake",
  age: NaN
}`;

myObject = JSON.stringify(myObject);
console.log(myObject);
*/

/*
//const weCool = true;
const weCool = false;
const myPromise = new Promise( (resolve, reject) => {
  if (weCool) resolve("We are indeed cool.")
  else if (!weCool) reject("Sorry, we aint cool...");
} );

myPromise.then(result => {
  console.log(result);
}).catch( error => {
  console.log(error);
})


function returnTwo(){
  return 2;
}

console.log(Promise.resolve(returnTwo()));
*/

let starTrekSeries;

fetch("http://stapi.co/api/v1/rest/series/search").then(response => {
  //console.log(response);
  if(response.ok){
    console.log("yay");
  }
  return response.json();
}).then(jsonResult => {
  console.log(jsonResult.series);
  starTrekSeries = jsonResult.series
}).catch( (err) => {console.log(err); });
