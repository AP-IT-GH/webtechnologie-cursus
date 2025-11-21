const firstName = prompt("Wat is je voornaam?");
const lastName = prompt("Wat is je achternaam?");
const age = parseInt(prompt("Hoe oud ben je?"), 10);

// Als een gebruiker de leeftijd leeg laat of een niet-numerieke waarde invoert, wordt NaN geretourneerd door parseInt
// We controleren dit met isNaN functie
if (!firstName || !lastName || isNaN(age)) {
    console.log("Ongeldige invoer. Zorg ervoor dat je voornaam, achternaam en leeftijd correct invult.");
} else if (age < 12 || age > 60 ) {
    console.log("U behoort niet tot de leeftijdsklasse.")
} else {
    console.log(`Welkom ${firstName} ${lastName}, je bent ${age} jaar oud.`);
}