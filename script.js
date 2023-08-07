//another way to declare a variable ...

/* let degreesC,
  room1 = "001",
  room2 = "002";

console.log(degreesC); //returns undefined
console.log(room1);
console.log(room2);  */

//telling js a string has not ended
//using escaping characters..\\ BACKSLASH
/* const dialog = 'Sam looked up, and said "hello, old friend!", as Max walked in.';
const dialog1 = 'He looked up and said "don\'t do that!" to Max';

const imperative = "Don't do that!";

const s = "In JavaScript, use \\ as an escape character in strings.";

console.log(dialog);
console.log(dialog1);
console.log(imperative);
console.log(s); */

/* const sam3 = {
  name: "Sam",
  classification: {
    // property values can
    kingdom: "Anamalia", // be objects themselves
    phylum: "Chordata",
    class: "Mamalia",
    order: "Carnivoria",
    family: "Felidae",
    subfaimily: "Felinae",
    genus: "Felis",
    species: "catus",
  },
};

//methods ... accessing the properties of an object
console.log(sam3.classification.kingdom);
console.log(sam3["classification"].kingdom);
console.log(sam3.classification["kingdom"]);
console.log(sam3["classification"]["kingdom"]);  */

//DATE

/* let today = new Date();
console.log(today);

const halloweenParty = new Date(2016, 9, 31, 19, 0);
console.log(halloweenParty); */

//js string methods

//1. charAt();
//returns the character of the specified index
/* let str = "how are you";
console.log(`the character in string.charAt(0) is "${str.charAt(0)}"`); */

//2. slice()
//returns a shallow copy of an array into a new array
//when a number is added to the parameter, the numbers below it are automatically deleted
//the second parameter indicates how many indexes it needs to save counting from the first param
/* 
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
const vitamin = fruits.slice(0, 3);

console.log(citrus);
console.log(vitamin); */

// 3. splice()
//takes a pattern a divides a string into an ordered list
//returns an array
//When the string is empty and a non-empty separator is specified, split() returns [""]

/* let str = "";
console.log(str.split("b"));

let text = "Oh brave new world that has such people in it";
let word = text.split(",");

console.log(word); */

////////////////////
//Array methods

//1. every() - this method checks wether all the elements passed into the array pass the test implemented
//by the function...it returns a boolean... like an iterator, it exits immediately it finds a falsy

/* const isBigEnough = (element, index, array) => {
  return element >= 10;
}; 
//console.log([15, 7, 25, 38].every(isBigEnough));
//console.log([15, 25, 25, 38].every(isBigEnough));

//confirming if one array is a subset of another array

const arr = (arr1, arr2) => {
  arr2.every((element) => arr1.includes(element));
};

console.log(arr([12, 13, 14, 15, 17], [7, 8, 9]));*/

//2. filter() method
//creates a shallow copy of a given array, filtered down to just the elements from the array
//filtered down to just the elements from the array

/* const filterFunction = (value) => {
  return value >= 15;
};

filterFunction([0, 6, 19, 8]);
const filtered = [10, 12, 15, 9, 18];
console.log(filtered.filter(filterFunction)); */

//3. forEach()
//this method unlike the for loops only stops after the task has been completed, there is no break
//

/* let num = [3, 4, 5, 6];

num.forEach((numIndex) => numIndex++);
 */

//4. map() creates a new prottotype with the result of calling a provided fnctn on every element...
