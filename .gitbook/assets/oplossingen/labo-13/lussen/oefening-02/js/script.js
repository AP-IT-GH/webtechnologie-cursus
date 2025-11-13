const columnsField = document.getElementById('columns');
const rowsField = document.getElementById('rows');
const form = document.getElementById('gridForm');
const gridContainer = document.getElementById('gridContainer');

form.addEventListener('submit', function(e){
    e.preventDefault();

    // Haal de waarden op uit de inputvelden
    const columns = parseInt(columnsField.value);
    const rows = parseInt(rowsField.value);

    // Lege string om het raster op te bouwen
    let grid = "";

    // Doorloop de rijen
    for (let i=1; i<=rows; i++) {
        // Doorloop de kolommen binnen elke rij
        for (let j=1; j<=columns; j++) {
            grid += "x";
        }
        // Voeg een nieuwe regel toe na elke rij
        grid += "<br>";
    }

    // Toon het gegenereerde raster aan de gebruiker
    gridContainer.innerHTML = grid;
});