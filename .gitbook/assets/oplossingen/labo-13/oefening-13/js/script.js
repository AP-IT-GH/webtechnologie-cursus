// Oefening: Aftellen met een while-loop

// 1. Startwaarde instellen
const initialValue = 5;

// 2. Variabele om af te tellen
let huidigGetal = initialValue;

// 3. While-loop die aftelt tot nul
while (huidigGetal >= 0) {
    console.log(`Teller: ${huidigGetal}`);
    huidigGetal--; // 4. Verlaag de teller met 1
}

console.log("Aftelling voltooid!");
