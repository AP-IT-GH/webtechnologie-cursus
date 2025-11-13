"use strict";
let currentHour = 14;
let extraHours = 33;

let endHour = (currentHour + extraHours) % 24;

// Hoe bereken je de modulo of rest na deling?
// currentHour + extraHours = 47
// 24 past maar 1 keer in zijn geheel in 47:
// 1*24 = 24 => past wel binnen 47
// 2*24 = 48 => past niet binnen 47
// Trek 24 af van 47 => dan hebben we de modulo gevonden.
// 47 - 24 = 23

console.log(`Het is nu ${currentHour} uur.`);
console.log(`Over ${extraHours} is het ${endHour} uur.`);
