let myArray = [];//Most Basic of Arrays
let favFoods = ["pizza","hamburger","french fries"];

let alltheThings = ["string", 24, ["stuff"], {}, false];

console.log(favFoods[1]);

//1st Try it out!

var tio1Array = ["Thor Ragnarok","13",true,"2011",];

console.log(tio1Array, tio1Array.length);
//alert(tio1Array[2]); //alerts 3 values in the array

//check if its an array, and EVERY array is an object!
console.log(Array.isArray(tio1Array), typeof tio1Array);


// PUSH: the .push function of arrays adds values to the end of the array specified before the function, the .push function WILL
//ACTUALLY change the value of the varialbe/array. Again arrays arent variables but the .push fucntion is essentially
//reassigning your array with the original values plus the new value.
console.log(tio1Array.push("Leo DiCaprio"));
console.log(tio1Array, tio1Array.length);


//UNSHIFT: just like the push function and how it acts but adds a value to the beginning of the array.
tio1Array.unshift("Tim Mcgraw");
console.log(tio1Array);



/*
//POP removes the LAST value of an array, this will still alter the array just like PUSH
//you can assign a variable to be the value you remove or pop off the array

tio1Array.pop();
let lastValue = tio1Array.pop();
console.log(lastValue);
*/




/*
//SHIFT removes the first element of an array, this will still alter the array just like PUSH
//you can assign a variable to be the value you remove or shift off the array

tio1Array.shift();
let firstValue = tio1Array.shift();
console.log(firstValue);
*/




/*
//SPLICE is able to change the values of an array by removing or adding values.
//refer to SPLCE MDN
//think of SPLCE as cutting out a section of an array, like video editing it removes from a certain frame in the video to the ending frame youd want to remove.

//1 arguement: Beginning with that index it will remove ALL indices after.
//you can assign a variable to be the value you remove from the array
// this removed "13" and "true"
 //let removed = tio1Array.splice(2);
//console.log(tio1Array, removed);

console.log(tio1Array, "BEFORE");
tio1Array.splice(1,2);// 2 arguements, Starting at the first index (index), the second will remove that many values from the array. so starting with index 1 how many do you want to remove.
console.log(tio1Array, "AFTER");


// 3 args, starts at index 3, removed 1 value, and then adds the array in the place of the 3rd index, you can also add values after the inserted array and they will take the place of the 4th,5th,6th values and etc.
console.log(tio1Array, "BEFORE");
tio1Array.splice(3,1, ["I got added, i took the place of index 3", 23])// SAME AS ABOVE but shorter 3 args, starts at index 3, removed 1 value, and then adds the array in the place of the 3rd index
console.log(tio1Array, "AFTER");

tio1Array.splice(-3,1); // IF negative sum is in the 1st arguement, it would start at the END of the array and counts back to that spot.
*/



/*
//SLICE,
  not SPLICE, SLICE is the first fucntion so far to not CHANGE the orginal array, it will copy the change the copied array. essentially SLICE copys the array.
  there are times where you may want to work with a copy of an array instead of the original array
//SLICE is solely FOR COPYING

//if you pass 1 arguement, such as 1, it will copy the array for index value 1 and on. UNLIKE SPLICE, in SLICE the 2nd arguement is an index versus a count
  the 2nd arguement is the index that it will COPY TO.

let arrayCopy = tio1Array.slice(1, 4); //if you pass 1 arguement, such as 1, it will copy the array for index value 1 and on.
console.log(arrayCopy);
*/


/*
//INDEXOF
//indexOf returns the index of a desired value, it commonly used with SPLICE
let removeIndex = tio1Array.indexOf(24);//returns the index of the specified value
tio1Array.splice(removeIndex,1)
*/

/*
//LASTINDEXOF
//SAME as INDEXOF but will give the index of the last desired value in an array, so if you were still looking for 24, it would give the last time 24 is in the array
*/


/*
//REVERSE
//CHANGES the original array, it reverses the order of the array
let myNums = [1,2,,3,4,5];
console.log(myNums.reverse());
console.log(myNums);
*/


/*
//SORT, sort treats EVERYTHING AS STRINGS and will sort alphanumerically based of the FIRST number or letter
console.log(tio1Array);
tio1Array.sort();
console.log(tio1Array);
*/


/*
//NESTED ARRAYS
//the fist [] within the log function() represents index 0 of the multiDimensional array, and the second [] represents the index of the nested array ie "[hello]"
let multiDimensional = [["hello",1]["goodbye",0]];
console.log(multiDimensional [0][0], multiDimensional[1][0])
*/


//Try it Out 2 ARRAYS

//Creating the master movie array and leaving empty to fill later
var masterMovieArray = [];

//creating the 5 arrays of fav movies, just did SW as an example
let fav1 = ["Phantom Menace", "Anakin"];
let fav2 = ["Attack of the Clones", "Broda"];
let fav3 = ["Revenge of the sith", "Vader"];
let fav4 = ["New Hope", "Luke"];
let fav5 = ["Empire Strikes Back", "Palpatine"]

//Step 1
//adding the 5 arrays to the master array by using PUSH and then the variable names of the arrays
let masterMovieArray.push(fav1, fav2, fav3, fav4, fav5);
console.log(masterMovieArray);

//Step 2
//we want the titles of the movies, so using PUSH and NESTED ARRAYS (the first index represents the index of the movie in the array, second index represents the position of the title inside the nested array)
let titles = [];
titles.push(masterMovieArray [0][0], masterMovieArray [2][0], masterMovieArray [3][0], masterMovieArray [4][0], masterMovieArray [5][0]);
alert(titles);
//Step 3
//We want the fav and least fav movie, so made new variable called favAndleast, and then pushed the indexes 0 and 4 of the masterMovieArray into the new array, favAndleast
let favAndleast = [];
favAndleast.push(masterMovieArray [0], masterMovieArray [4]);
console.log(favAndleast);

//Step 4
//to see the length of the masterMovieArray and how it has still has the same amount of values
alert(masterMovieArray.length);
