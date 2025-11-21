// Oefening 8: Getal raden

// 1. Genereer een willekeurig getal tussen 1 en 10
let answer = Math.floor(Math.random() * (10 - 1 + 1) + 1);

// 2. Vraag de gebruiker om een gok
let guess = Number(prompt("Raad het getal (tussen 1 en 10):"));

// 3. Controleer het antwoord
if (guess === answer) {
    console.log("Gefeliciteerd, je hebt het juiste getal geraden!");
} else {
    console.log(`Helaas, het juiste getal was ${answer}.`);
}
