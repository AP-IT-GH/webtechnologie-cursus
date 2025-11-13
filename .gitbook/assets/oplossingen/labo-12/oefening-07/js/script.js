"use strict";
let start = 100000;
let rate = 0.02;
let years = 7;

// Rente op rente formule:
// Eindsaldo = Inleg * ( 1 + rente) ^ looptijd
let total = (start * (1 + rate) ** years).toFixed(2);
// Je kunt hetzelfde bereiken met de Math.pow functie (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow):
// let total = (start * Math.pow(1 + rate, years)).toFixed(2);

console.log(
  `Op een periode van ${years} jaar stijgt je bezit van ${start} naar ${total}.`
);
console.log(`Dit met een rentevoet van ${rate}`);
