// Haal de waarden op uit de inputvelden
const multiplier = parseInt(prompt("Geef het getal waarvan je de maaltafel wilt zien:"));
const iterations = parseInt(prompt("Geef aan tot welk getal je de maaltafel wilt zien:"));

// De string variabele voor de maaltafelreeks
let multiplications = "";

// Doorloop de loop het gewenste aantal keer en voeg het product toe aan de string
for (let i = 1; i <= iterations; i++) {
    multiplications += `${multiplier * i}, `;
}
// Verwijder de laatste komma en spatie
multiplications = multiplications.substring(0, (multiplications.length - 2));

// Toon de maaltafelreeks aan de gebruiker
console.log(multiplications);