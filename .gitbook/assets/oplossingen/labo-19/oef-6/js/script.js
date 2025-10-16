"use strict";

// JavaScript-functie die even getallen filtert en de overgebleven getallen verdubbelt
function filterAndDouble(numbers) {
    // Gebruik de filter-functie om alleen even getallen te behouden
    const evenNumbers = numbers.filter(function(number) {
      return number % 2 === 0;
    });

    // Gebruik de map-functie om de overgebleven getallen te verdubbelen
    const doubledNumbers = evenNumbers.map(function(number) {
      return number * 2;
    });

    // Retourneer de resulterende array
    return doubledNumbers;
  }

  // Voorbeeldgebruik van filterAndDouble-functie
  const inputNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Filter en verdubbel de getallen
  const resultArray = filterAndDouble(inputNumbers);

  console.log('Input Array:', inputNumbers);
  console.log('Filtered and Doubled Array:', resultArray);