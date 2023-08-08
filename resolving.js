/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

//create a function
//add 2 parameters
//compare both parameters
//return the higher parameter
const higherIndex = (index1, index2) => {
  let solution = [index1, index2];

  if (solution[0] > solution[1]) {
    return `solution 1 is equals ${solution[0]}`;
  } else {
    return `solution 2 is equals ${solution[1]}`;
  }
};

//console.log(higherIndex(12, 15));

/* ESERCIZIO 6
    Usa un while loop per calcolare la massa totale dell'equipaggio. Salvala in una variabile chiamata "crewMass".
  */

//while loop is true,
//crewMass divide the volume of crew members

let crewMass = 50;
const massCalculator = (volume) => {
  while (crewMass) {
    if (volume <= crewMass) {
      break;
    }
  }
  return crewMass / volume;
};
//console.log(massCalculator(7));

/* let funds = 50; 

while (funds > 1 && funds < 100) {
    funds += 2; //2 steps forward 
    funds -= 1;
} */

//let totalBet = rand(1, funds);
//console.log(totalBet); 

//writing a pseudo code 

/* const returnValue = (value) {

  if value type !== number && value type !== string && value type !== array 
  return value; 

  if value type === string 
  reverse string 
  
  
  if value number === string 
  reverse number 

  
  if value type === array 
  reverse array 

  return reversed value;
} */


//challenge 

//given an array of forcarsted maximum temps, the thermometer displays a string with these temps 
//e.g [17, 21, 23] will print "...17c in 1days... 21c in 2 days... 23c in 3 days" 

//create a function "printforcast" which takes in an array an logs a string like the above to the console

// TEST DATA 1 ... [17, 21, 23] 
//TEST DATA 2 ... [12, 5, -5, 0, 4]

//THE PROBLEM
//the thermometer will display a string with the elements of the array 
//the elements will be printed as strings 


//solution 
//create a function 
//create a for loop to loop through the array  
//create a variable = 0 to compare if element is lower than 0
//print each element using template literal into the string
//omit elements that are below zero 


//incorrect
/* let degree = 0; 
const printforcast = (temps) => {

 
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] < 0) continue;
    let result = temps[i];  
    `...c in 1days... 21c in 2 days... 23c in 3 days`
    if(result >= degree){

    }
    //console.log(result);
  }
} 

printforcast([17, 21, 23]) */ 

//correct method 

//breaking up into sub-problems 
//transform array into string 
//transform element to string with degrees celsius 
//string needs to contain day [index - 1] 
//add ... between elements and start an end of string 
//log string to console 

/* const data1 =  [17, 21, 23]; 
const data2 = [12, 5, -5, 0, 4]; 

//if this code was jusg a fixed array with only 3 items 
//one would have hard coded this using template literals 
//added with the element index but that is not the case 
 
const printForcast = (arr) => {
  //create an empty string and in each iteration
  //add the value to the string 
  let str = "";  

  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]} degrees C in ${i + 1} days ...`;
    //to get the day, u use the current index + 1 

  }
  console.log("..." + str);

}; 

printForcast([17, 21, 23]); */ 


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/ 

//understanding 
//a function that calculates the difference between a given number and a parameter 19 
//this function will return the difference multiplied by 3 if the number given is equal to 19.. 

//step by step 
//create a function with one parameter that is equal to 19 ... done
//calculate the difference of both and place the difference inside a variable 
//creat an if condition that multiplies the variable by 3 if it is equals to 19 

/* let num = 19;
const crazyDiff = (randomParameter) => {

  let differenceOfNums = Math.abs(num - randomParameter); 

  if (differenceOfNums === 19) {
     differenceOfNums = differenceOfNums * 3; 
     //console.log(differenceOfNums);  
  }
  return differenceOfNums
 
}

console.log(crazyDiff(Math.floor(Math.random() * 20) + 1)); */