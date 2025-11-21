"use strict";

// JavaScript-functie die objecten sorteert op basis van een attribuutnaam
function sortByAttribute(objectArray, attributeName) {
  // Gebruik de sort-functie met een aangepaste vergelijkingsfunctie
  objectArray.sort(function(a, b) {
    // Vergelijk objecten op basis van het opgegeven attribuut
    if (a[attributeName] < b[attributeName]) {
      return -1;
    } else if (a[attributeName] > b[attributeName]) {
      return 1;
    } else {
      return 0;
    }
  });

  // Retourneer de gesorteerde array van objecten
  return objectArray;
}

// Voorbeeldgebruik van sortByAttribute-functie
const people = [
  { name: 'Bob', age: 45 },
  { name: 'Charlie', age: 35 },
  { name: 'Alice', age: 30 }
];

console.log('Original Array:', people);

// Sorteer objecten op basis van het attribuut 'age'
const sortedPeople = sortByAttribute([...people], 'age');

console.log('Sorted Array:', sortedPeople);

