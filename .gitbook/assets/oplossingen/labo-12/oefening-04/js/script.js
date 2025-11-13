"use strict";
let myWeight = 70;
let myHeight = 1.72;

let myBMI = myWeight / myHeight ** 2;
// Je kunt hetzelfde bereiken met de Math.pow functie (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow):
// let myBMI = myWeight / Math.pow(myHeight, 2);

console.log(myBMI);
