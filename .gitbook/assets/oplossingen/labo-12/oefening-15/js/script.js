"use strict";

const colorblindText =
    "roses are blue, violets are red, grass is yellow, don't be so mean.";

// Vervang de kleuren in een volgorde zodat we geen omgekeerde vervangingen krijgen.
let newText = colorblindText.replace(/blue/g, "TEMP_RED")
    .replace(/yellow/g, "TEMP_GREEN")
    .replace(/red/g, "TEMP_BLUE")
    .replace(/green/g, "TEMP_YELLOW");

// Zet de tijdelijke waarden om naar de correcte kleuren in hoofdletters
newText = newText.replace(/TEMP_RED/g, "red")
    .replace(/TEMP_GREEN/g, "green")
    .replace(/TEMP_BLUE/g, "blue")
    .replace(/TEMP_YELLOW/g, "yellow");


console.log(colorblindText);
console.log("=");
console.log(newText);
