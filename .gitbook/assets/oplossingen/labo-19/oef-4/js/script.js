"use strict";

// JavaScript-functie die twee arrays samenvoegt met behulp van de spread-operator
function mergeArrays(array1, array2) {
  // Gebruik de spread-operator om beide arrays samen te voegen in een nieuwe array
  const mergedArray = [...array1, ...array2];
  // Retourneer de samengevoegde array
  return mergedArray;
}

// Voorbeeldgebruik van de mergeArrays-functie
const arrayA = [1, 2, 3];
const arrayB = [4, 5, 6];

const resultArray = mergeArrays(arrayA, arrayB);

console.log('Array A:', arrayA);
console.log('Array B:', arrayB);
console.log('Merged Array:', resultArray);