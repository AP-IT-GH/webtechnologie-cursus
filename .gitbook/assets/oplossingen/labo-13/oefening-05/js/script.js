// Invoer
let startUur = parseInt(prompt("Geef het startuur (0-23) in:"), 10);
let startMinuten = parseInt(prompt("Geef de startminuten in (0-59) in:"), 10);
let extraUren = 5;
let extraMinuten = 30;

// Berekening totale minuten
let totaalMinuten = startMinuten + extraMinuten;
let extraUrenDoorMinuten = Math.floor(totaalMinuten / 60);
let nieuweMinuten = totaalMinuten % 60;

// Berekening totale uren
let totaalUren = startUur + extraUren + extraUrenDoorMinuten;
let dagenLater = Math.floor(totaalUren / 24);
let nieuwUur = totaalUren % 24;

// Output
console.log(`Nieuw tijdstip: ${String(nieuwUur).padStart(2, '0')}:${String(nieuweMinuten).padStart(2, '0')}`);

if (dagenLater === 0) {
    console.log("Dit tijdstip valt nog op dezelfde dag.");
} else if (dagenLater === 1) {
    console.log("Dit is het tijdstip 1 dag later.");
} else {
    console.log(`Dit is het tijdstip ${dagenLater} dagen later.`);
}
