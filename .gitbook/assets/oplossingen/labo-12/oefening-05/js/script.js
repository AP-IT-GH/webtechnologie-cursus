"use strict";

let weight1 = 75;
let height1 = 1.8;
let name1 = "Mounir";

let weight2 = 60;
let height2 = 1.83;
let name2 = "Babs";

let bmi1 = weight1 / height1 ** 2;
let bmi2 = weight2 / height2 ** 2;
// Je kunt hetzelfde bereiken met de Math.pow functie (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow):
// let bmi1 = weight1 / Math.pow(height1, 2);
// let bmi2 = weight2 / Math.pow(height2, 2);

console.log("BMI van " + name1 + " is " + bmi1);
console.log("BMI van " + name2 + " is " + bmi2);
// Of met behulp van Template Literals (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals):
// console.log(`BMI van ${name1} is ${bmi1}`);
// console.log(`BMI van ${name2} is ${bmi2}`);
