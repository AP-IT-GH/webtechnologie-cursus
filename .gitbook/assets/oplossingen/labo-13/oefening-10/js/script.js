// Haal de waarden op uit de inputvelden
const columns = parseInt(prompt("Geef het aantal kolommen in:"));
const rows = parseInt(prompt("Geef het aantal rijen in:"));

// Lege string om het raster op te bouwen
let grid = "";

// Doorloop de rijen
for (let i = 1; i <= rows; i++) {
    // Doorloop de kolommen binnen elke rij
    for (let j = 1; j <= columns; j++) {
        grid += "x";
    }
    // Voeg een nieuwe regel toe na elke rij
    grid += "\n";
}

// Toon het gegenereerde raster aan de gebruiker
console.log(grid);