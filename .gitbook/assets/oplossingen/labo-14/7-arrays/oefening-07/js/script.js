const result = document.getElementById('result');

let spreadsheet = [
    [100, 104, 105],
    [144, 110, 109],
    [105, 107, 111]
];

// Bereken de som van de elementen in elke rij
let sumRow1 = 0;
let sumRow2 = 0;
let sumRow3 = 0;

// Som voor de eerste rij
for (let i = 0; i < spreadsheet[0].length; i++) {
    sumRow1 += spreadsheet[0][i];
}

// Som voor de tweede rij
for (let i = 0; i < spreadsheet[1].length; i++) {
    sumRow2 += spreadsheet[1][i];
}

// Som voor de derde rij
for (let i = 0; i < spreadsheet[2].length; i++) {
    sumRow3 += spreadsheet[2][i];
}

// Toon de resultaten op het scherm
result.innerHTML = `
Som van de elementen in rij 1: ${sumRow1} <br>
Som van de elementen in rij 2: ${sumRow2} <br>
Som van de elementen in rij 3: ${sumRow3}`;