/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output collega questo file al tuo HTML e apri la console del browser. 
- Dovrai creare una direttiva di output per testare le variabili od i risultati delle espressioni che crei
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* We have 8 data types in Javascript. 

what are data types? 

This is the logic that can be carried out with a variable that does not cause any error. 

There are 6 main Data Types in JS 

1. Numbers - This data type is used to represent positive or negative numbers with or without decimal place. 

e.g let a = 40; 

2. String - This data type is used to represent textual data e.g let man = "Godwin"; 

3. Boolean - This data type is Binary and can only hold 2 CSSFontFeatureValuesRule, True or false. e.g let manIsSleeping = true; 

4. Null - this data type can only hold 1 sensorValue, null(empty). 

5. Undefined - this data type appears when a variable has been declared but does not contain any value. 

6. TypeOf - this data type is used to confirm what a variable has inside of it e.g 

let man = 75; 
typeof(man); 

7. Function data type executes a block of code when called. 

8. Array data type - this is used to store multiple values in a single variable 

e.g let studentsColorBooks = ["Red", "Yellow", "Green", "Orange"]; */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* const name = "Godwin";
console.log(name); */
/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let num1 = 12;
let num2 = 20;

let num3 = num1 + num2;
console.log(num3); */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let x = 12; */

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//name = "Ezukuse";
//console.log(name);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let subtration = 4 - x; 
console.log(subtraction);  */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let algo1 = 10;
let algo2 = 20;

if (algo1 < algo2) {
  console.log(algo1, ": is the lower number");
} else {
  console.log("both numbers are equal");
} */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let arr1 = [1, 2, 3, 4, 5, 6];

if (arr1[arr1.length - 1] !== 5) {
  console.log("not equal");
} else {
  console.log("number doesn't exist");
} */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let a = 10;
let b = 5;

if (a % b === 0) {
  console.log("divisibile per 5");
} else {
  console.log("confirm number");
} */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let num1 = 3;
let num2 = 5;

if (num1 === 8) {
  console.log("true");
} else if (num1 + num2 === 8) {
  console.log("Both values added is 8");
} else {
  console.log("check addition");
} */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let customerSpent = 200;
let totalShoppingCart = 50;
let transportation = 10;

if (customerSpent < totalShoppingCart && customerSpent !== totalShoppingCart) {
  console.log("customer will pay" + transportation, +"for transportation");
} else if (customerSpent >= totalShoppingCart) {
  console.log("customer gets free transportation");
} else {
  console.log("calculate goods again");
} */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let customerSpent = 200;
let totalShoppingCart = 50;
let transportation = 10;
let blackFriday = (20 / customerSpent) * 100;

if (customerSpent < totalShoppingCart && customerSpent !== totalShoppingCart) {
  console.log("customer will pay" + transportation, +"for transportation");
} else if ((customerSpent >= totalShoppingCart) - blackFriday) {
  console.log("customer gets free transportation for black friday sales");
} else {
  console.log("calculate goods again");
} */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let a = 5;
let b = 10;
let c = 15;
let d = [a, b, c];

if ((a, b, c)) {
  console.log(d.reverse());
} */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let arr1 = [1, 2, "MALE", 4, 5];

if (arr1[2] < 1 && arr1[2] > 9) {
  console.log("this is not a num");
} else {
  console.log(arr1[2]);
} */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let a = 71;
let b = 85;

if (a % b === 0) {
  console.log("Pari");
} else {
  console.log("Dispari");
} */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let val = 7
  if (val >= 10) {
      console.log("Uguale a 10 o maggiore");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Meno di 10");
    }  */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/* const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
}; */

/* SCRIVI QUI LA TUA RISPOSTA */

/* me.city = "Toronto";
console.log(me); */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* delete me.lastName;
console.log(me); */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* delete me.skills[2];
console.log(me); */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let arr1 = [];
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr1 = arr2; */
//console.log(arr1);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* arr1.pop();
arr1.push(100);
console.log(arr1); */

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john";
let name2 = "John";

console.log(name1 == name2);
console.log(name1 === name2.toLowerCase());

const starWarsCharacters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 277,
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
  },
  {
    name: "C-3PO",
    height: 167,
    mass: 75,
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a",
  },
  {
    name: "R2-D2",
    height: 96,
    mass: 32,
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female",
  },
  {
    name: "Owen Lars",
    height: 178,
    mass: 120,
    hair_color: "brown, grey",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "52BBY",
    gender: "male",
  },
  {
    name: "Beru Whitesun lars",
    height: 165,
    mass: 75,
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY",
    gender: "female",
  },
  {
    name: "R5-D4",
    height: 97,
    mass: 32,
    hair_color: "n/a",
    skin_color: "white, red",
    eye_color: "red",
    birth_year: "unknown",
    gender: "n/a",
  },
  {
    name: "Biggs Darklighter",
    height: 183,
    mass: 84,
    hair_color: "black",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "24BBYs",
    gender: "male",
  },
  {
    name: "Obi-Wan Kenobi",
    height: 182,
    mass: 77,
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue-gray",
    birth_year: "57BBY",
    gender: "male",
  },
];

/* ESERCIZIO 1
    Crea una variabile chiamata "characters" e assegnale un array vuoto 
  
  let characters = [];
  */

/* ESERCIZIO 2
    Utilizzando un ciclo for, cicla l'array "starWarsCharacters".
    Dovrai accedere alla proprietà "name" di ogni oggetto in esso contenuto, e inserirla nell'array "starWarsCharacters" creato precedentemente.
    Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
  */

/* let arrToFill = [];
  
  for (let i = 0; i < starWarsCharacters.length; i++) {
    //console.log(starWarsCharacters[i]);
    arrToFill.push(starWarsCharacters[i].name);
  }
  
  console.log(arrToFill); */

/* ESERCIZIO 3
    Seguendo i passaggi precedenti crea un nuovo array chiamato "femaleCharacters" e inserisci al suo interno tutti gli oggetti femminili.
  */

/* let femaleCharacters = [];
  
  for (let i = 0; i < starWarsCharacters.length; i++) {
    if (starWarsCharacters[i].gender === "female") {
      femaleCharacters.push(starWarsCharacters[i]);
    }
  }
  
  console.log(femaleCharacters); */

/* ESERCIZIO 4
    Crea un oggetto "eyeColor" che abbia le seguenti proprietà: blue, yellow, brown, red, blue-gray.
    Ad ognuna di queste proprietà assegna come valore un array vuoto.
  */

/* const eyeColor = {
    blue: [],
    yellow: [],
    brown: [],
    red: [],
    "blue-gray": [],
  }
   */
/* ESERCIZIO 5
    Utilizza uno switch statement per inserire uno ad uno gli oggetti dei personaggi di "starWarsCharacters" negli array relativi al colore degli occhi precedentemente creati.
    Ogni personaggio dovrà finire nell'array corrispondente al suo colore degli occhi (al valore della sua proprietà "eye_color").
  */

/* for (let i = 0; i < starWarsCharacters.length; i++) {
    switch(starWarsCharacters[i].eye_color){
  
      case "blue":
      eyeColor.blue.push(starWarsCharacters[i]);
      break; 
  
      case "yellow": 
      starWarsCharacters[i]; 
      break; 
  
      case "brown": 
      starWarsCharacters[i]; 
      break; 
  
      case "red": 
      starWarsCharacters[i]
      break; 
  
      case "blue-gray": 
      starWarsCharacters[i]; 
      break; 
    }
  }
  
  
  /* ESERCIZIO 6
    Usa un while loop per calcolare la massa totale dell'equipaggio. Salvala in una variabile chiamata "crewMass".
  */

/* ESERCIZIO 7
    Crea uno if/else statement per rivelare la tipologia di carico, utilizzando la massa totale, di un'ipotetica astronave contenente i personaggi dell'array "starWarsCharacters".
  
    Se la massa è inferiore a 500 stampa in console: "Ship is under loaded"
    Se la massa è superiore a 500 stampa in console: "Ship is half loaded"
    Se la massa è superiore a 700 stampa in console: "Warning: Load is over 700"
    Se la massa è superiore a 900 stampa in console: "Critical Load: Over 900"
    Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: escape from ship now!" 
  
  
  
    Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
  */

/* ESERCIZIO 8
    Usa un for loop per cambiare il valore della proprietà "gender" di alcuni personaggi dal valore "n/a" a "robot" (Tip: puoi effettuare la riassegnazione del valore corrispondente o creare un nuovo array)
  */

/* valueToChange = [];
  for (let i = 0; i < starWarsCharacters.length; i++) {
    console.log(starWarsCharacters[i].gender);
    if (starWarsCharacters[i].gender === "n/a") {
      valueToChange.push((starWarsCharacters[i] = "robot"));
    }
  }
  
  console.log(valueToChange); */

/* --EXTRA-- ESERCIZIO 9
    Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "characters" le stringhe corrispondenti a personaggi con lo stesso nome.
    Una volta fatto crea un console.log per controllare la proprietà length di "characters" prima e dopo l'operazione.
  */

/* --EXTRA-- ESERCIZIO 10
    Crea una funzionalità che selezioni un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le proprietà in modo discorsivo (a tuo piacimento).
  */

/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function area(l1, l2) {
    let result = l1 * l2;
  
    return result;
  }
  
  console.log(area(10, 15)); */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function crazySum(a, b) {
  let result = a + b;

  if (result % 2 === 0) {
    console.log(result * 3);
  } else {
    console.log("This is not a problem");
  }
}

console.log(crazySum(10, 10)); */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

//to be continued
/* SCRIVI QUI LA TUA RISPOSTA */

/* let globalNum = 17;
function crazyDiff(b) {
  let newNum = b - globalNum;
  let result = newNum;

  if (globalNum > b) {
    console.log(result * 3);
  } else {
    console.log("nothing to see here");
  }
}

console.log(crazyDiff(b)); */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function boundary(n) {
  let number = n;

  if (number >= 20 && number <= 100) {
    console.log(true);
  } else if (number === true) {
    console.log(true);
  } else {
    console.log("this calculation is incorrect");
  }

  //return number;
}

console.log(boundary(27)); */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function epify(string) {
  let result = string;

  if (result.startsWith("EPICODE")) {
    return result;
    //console.log(result)
  } else {
    return "EPICODE" + " " + result;
  }
}

console.log(epify("Woman"));
console.log(epify("EPICODE"));
console.log(epify("Boy"));
console.log(epify("Girl"));
console.log(epify("Gender")); */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function check3and7(num) {
  let parameter = num;

  if (parameter % 3 === 0 || parameter % 7 === 0) {
    console.log(parameter);
  } else {
    console.log("nothing to see here");
  }
}

console.log(check3and7(20));
console.log(check3and7(21));
console.log(check3and7(79)); */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function reverseString(string) {
  let parameter = string;
  let empty;

  empty = parameter.split("");
  let newString = empty.reverse();

  return newString;
}

console.log(reverseString("EPICODE")); */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//unfinished
/* function upperFirst(str) {
  let stringToModify = str;

  let checkingString = stringToModify.split(" ");

  for (let i = 0; i < checkingString.length; i++) {
    checkingString[i] = checkingString.charAt(0).toUpperCase() + checkingString[i].slice(1);
  }

  let confirmedString = checkingString.join();

  return confirmedString;
}

console.log(upperFirst("prepare your mind")); */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function cutString(string) {
  let stringNewArray = string;

  let wordsToSeparate = stringNewArray.split("");
  //console.log(wordsToSeparate);

  //wordsToSeparate.pop();
  //wordsToSeparate.shift();

  //or 

  //let separatedWords = wordsToSeparate.splice(1, 3);

  return separatedWords;
}

console.log(cutString("happy")); */
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function giveMeRandom(n) {
  let random = Math

 for ( let i = 0; i < arr.length; i++) {

 }

  return random;
}

console.log(giveMeRandom(10)); */

/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

/* const stringsFunction = (a, b) => {
  let both = a.concat(b);
}; */

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/

/* let arr = [];
const nums = () => {
  for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 10));
  }
  return nums;
};

console.log(nums()); */

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

/* let arr = [1, 4, 7, 19, 7, 8, 2];
let num = 0;

arr.forEach((index) => (num += index));

console.log(num);
 */
/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 9 (forEach)
    Scrivi una funzione per trovare il film più vecchio nell'array fornito.
  */

let yearOfRelease = [];
movies.forEach(function (movie) {
  yearOfRelease.push(movie.year);
});

console.log(yearOfRelease);

/* ESERCIZIO 10
    Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
  */

/* ESERCIZIO 11 (map)
    Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
  */

/* ESERCIZIO 12 (filter)
    Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
  */

/* ESERCIZIO 13 (reduce)
    Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
  */

/* ESERCIZIO 14 (find)
    Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
  */

/* ESERCIZIO 15 (findIndex)
    Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
  */
