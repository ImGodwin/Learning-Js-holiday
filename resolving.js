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

/* let crewMass = 50;
const massCalculator = (volume) => {
  while (crewMass) {
    if (volume <= crewMass) {
      break;
    }
  }
  return crewMass / volume;
};
console.log(massCalculator(7)); */
