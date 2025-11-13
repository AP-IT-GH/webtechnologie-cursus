"use strict";

// Arrow functie die checkt of een getal oneven is
const isOdd = (num) => num % 2 !== 0;

// Arrow functie die checkt of een getal even is
const isEven = (num) => num % 2 === 0;

// Extra functies met een soortgelijke structuur:
// Checkt of een getal groter is dan 10
const isGreaterThanTen = (num) => num > 10;

// Checkt of een getal een veelvoud is van 3
const isMultipleOfThree = (num) => num % 3 === 0;

// Functie die controleert of minstens twee elementen in de array voldoen aan de callback
function atLeastTwo(numbers, callback) {
    let count = 0;

    for (const num of numbers) {
        if (callback(num)) {
            count++;
        }
        if (count >= 2) return true;
    }

    return false;
}

// Voorbeelden
console.log(atLeastTwo([2, 3, 4, 6, 8], isOdd)); // false (alleen 3 is oneven)
console.log(atLeastTwo([2, 3, 4, 5, 6, 8], isOdd)); // true (3 en 5 zijn oneven)

console.log(atLeastTwo([11, 13, 2], isGreaterThanTen)); // true (11 en 13 > 10)
console.log(atLeastTwo([3, 6, 7], isMultipleOfThree)); // true (3 en 6 zijn veelvouden van 3)
