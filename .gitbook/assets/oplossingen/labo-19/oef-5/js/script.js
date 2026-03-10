"use strict";

function sortStrings(stringsArray) {
  // Gebruik de ingebouwde sort() functie om alfabetisch te sorteren.
  // De localeCompare functie zorgt ervoor dat we netjes alfabetisch
  // sorteren (ook als er verschil in hoofdletters en kleine letters is).
  stringsArray.sort((a, b) => a.localeCompare(b));

  // Print het resultaat in de console
  console.log("Gesorteerde strings:", stringsArray);

  // Verder optioneel: retourneer de gesorteerde array
  return stringsArray;
}

// Voorbeeld van hoe studenten het kunnen aanroepen:
const fruits = ["Banaan", "Appel", "druif", "Citroen", "aardbei"];

sortStrings(fruits);
// Output in console: Gesorteerde strings: [ 'aardbei', 'Appel', 'Banaan', 'Citroen', 'druif' ]
