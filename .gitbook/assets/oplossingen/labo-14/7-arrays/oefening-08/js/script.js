// Oefening: Fibonacci-reeks genereren

// 1. Stel het aantal te genereren getallen in
const numberOfGeneratedNumbers = 10;

// 2. Maak een array om de Fibonacci-getallen in op te slaan
let fibonacci = [];

// 3. Voeg de eerste twee getallen toe (basis van de reeks)
fibonacci[0] = 0;
fibonacci[1] = 1;

// 4. Bereken de volgende getallen met een for-loop
for (let i = 2; i < numberOfGeneratedNumbers; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

// 5. Toon de volledige reeks
console.log(`De eerste ${numberOfGeneratedNumbers} Fibonacci-getallen zijn:`);
console.log(fibonacci);
