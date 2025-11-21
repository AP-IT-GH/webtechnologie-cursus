"use strict";

// JavaScript-functie die een calculator maakt en een callback-functie retourneert
function createCalculator(operation) {
  // Gebruik een if-statement om te bepalen of de bewerking 'add' of 'multiply' is
  if (operation === 'add') {
    // Retourneer een callback-functie voor optellen
    return function (num1, num2, callback) {
      const result = num1 + num2;
      // Roep de callback-functie aan met de uitkomst van de optelling als argument
      callback(result);
    };
  } else if (operation === 'multiply') {
    // Retourneer een callback-functie voor vermenigvuldigen
    return function (num1, num2, callback) {
      const result = num1 * num2;
      // Roep de callback-functie aan met de uitkomst van de vermenigvuldiging als argument
      callback(result);
    };
  } else {
    // Retourneer null als de bewerking niet geldig is
    return null;
  }
}

// Functie om het resultaat naar de console weg te schrijven
function printToConsole(result) {
  console.log(result);
}

// Maak een calculator voor optellen
const addCalculator = createCalculator('add');
// Test de addCalculator met printToDom als callback
addCalculator(5, 10, printToConsole);

// Maak een calculator voor vermenigvuldigen
const multiplyCalculator = createCalculator('multiply');
// Test de multiplyCalculator met printToDom als callback
multiplyCalculator(3, 4, printToConsole);


/***************/
/* uitbreiding */
/**************/


// Functie om het resultaat naar de DOM weg te schrijven
function printToDom(result) {
  let newListItem = document.createElement("li")
  newListItem.textContent = result;
  document.querySelector("#result").appendChild(newListItem);
}

addCalculator(5, 10, printToDom);
multiplyCalculator(3, 4, printToDom);
