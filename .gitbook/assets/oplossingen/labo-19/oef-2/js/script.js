"use strict";

function modifyString(inputString, callback) {
    const length = inputString.length;
    // Roep de callback-functie aan met de lengte van de string als argument
    callback(length);
  }

// Callback-functie om de lengte naar de DOM weg te schrijven
function printToDom(result) {
    document.querySelector("#result").innerHTML = result;
}

// Test de modifyString-functie met printLength als callback
  modifyString("Hello, World!", printToDom);