"use strict";
let weight1 = 75;
let height1 = 1.8;
let name1 = "Mounir";

let weight2 = 60;
let height2 = 1.83;
let name2 = "Babs";

let bmi1 = (weight1 / height1 ** 2).toFixed(2)
let bmi2 = (weight2 / height2 ** 2).toFixed(2)
// Je kunt hetzelfde bereiken met de Math.pow functie (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow):
// let bmi3 = (weight1 / Math.pow(height1, 2)).toFixed(2);
// let bmi4 = (weight2 / Math.pow(height2, 2)).toFixed(2);

console.log("BMI van " + name1 + " is " + bmi1);
console.log("BMI van " + name2 + " is " + bmi2);

// Je kunt ook gebruik maken van Template Literals in plaats van string concatination.
// (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
// console.log(`BMI van ${name1} is ${bmi1}`);
// console.log(`BMI van ${name2} is ${bmi2}`);
