// Maak een array van getallen
const numbers = [1, 2, 3, 4, 5, 6];

// Initialiseer een variabele voor de som
let sum = 0;

// Doorloop de array met een for-loop en bereken de som
for (let i=0; i<numbers.length; i++) {
    sum += numbers[i];
}

// Toon de som in de console
console.log("De som van de getallen is: " + sum);