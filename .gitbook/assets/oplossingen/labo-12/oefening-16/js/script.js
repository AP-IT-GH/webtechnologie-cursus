"use strict";

// Input string die gecodeerd is met rot13
let inputString = "uryyb";  // Dit is "hello" gecodeerd in rot13

// Stap 1: Vervang de letters van a-m door TEMP_CHARACTER in hoofdletters
let tempString = inputString
    .replace(/a/g, 'TEMP_N')
    .replace(/b/g, 'TEMP_O')
    .replace(/c/g, 'TEMP_P')
    .replace(/d/g, 'TEMP_Q')
    .replace(/e/g, 'TEMP_R')
    .replace(/f/g, 'TEMP_S')
    .replace(/g/g, 'TEMP_T')
    .replace(/h/g, 'TEMP_U')
    .replace(/i/g, 'TEMP_V')
    .replace(/j/g, 'TEMP_W')
    .replace(/k/g, 'TEMP_X')
    .replace(/l/g, 'TEMP_Y')
    .replace(/m/g, 'TEMP_Z')
    .replace(/n/g, 'TEMP_A')
    .replace(/o/g, 'TEMP_B')
    .replace(/p/g, 'TEMP_C')
    .replace(/q/g, 'TEMP_D')
    .replace(/r/g, 'TEMP_E')
    .replace(/s/g, 'TEMP_F')
    .replace(/t/g, 'TEMP_G')
    .replace(/u/g, 'TEMP_H')
    .replace(/v/g, 'TEMP_I')
    .replace(/w/g, 'TEMP_J')
    .replace(/x/g, 'TEMP_K')
    .replace(/y/g, 'TEMP_L')
    .replace(/z/g, 'TEMP_M');

// Stap 3: Zet de tijdelijke markers om naar de juiste letters (rot13-transformatie)
let decodedString = tempString
    .replace(/TEMP_A/g, 'a')
    .replace(/TEMP_B/g, 'b')
    .replace(/TEMP_C/g, 'c')
    .replace(/TEMP_D/g, 'd')
    .replace(/TEMP_E/g, 'e')
    .replace(/TEMP_F/g, 'f')
    .replace(/TEMP_G/g, 'g')
    .replace(/TEMP_H/g, 'h')
    .replace(/TEMP_I/g, 'i')
    .replace(/TEMP_J/g, 'j')
    .replace(/TEMP_K/g, 'k')
    .replace(/TEMP_L/g, 'l')
    .replace(/TEMP_M/g, 'm')
    .replace(/TEMP_N/g, 'n')
    .replace(/TEMP_O/g, 'o')
    .replace(/TEMP_P/g, 'p')
    .replace(/TEMP_Q/g, 'q')
    .replace(/TEMP_R/g, 'r')
    .replace(/TEMP_S/g, 's')
    .replace(/TEMP_T/g, 't')
    .replace(/TEMP_U/g, 'u')
    .replace(/TEMP_V/g, 'v')
    .replace(/TEMP_W/g, 'w')
    .replace(/TEMP_X/g, 'x')
    .replace(/TEMP_Y/g, 'y')
    .replace(/TEMP_Z/g, 'z');

// Resultaat tonen
console.log("Encoded string: " + inputString);
console.log("Decoded string: " + decodedString);  // Verwacht "hello"
