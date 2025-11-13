// Oefening: Som van even getallen

// 1. Stel de grens in
const limit = 10;

// 2. Startwaarde voor de som
let som = 0;

// 3. Loop door alle getallen van 1 tot en met limit
for (let i = 1; i <= limit; i++) {
    // 4. Controleer of het getal even is
    if (i % 2 === 0) {
        som += i; // Tel het even getal op bij de som
    }
}

// 5. Toon het resultaat
console.log(`De som van alle even getallen tot en met ${limit} is ${som}.`);
