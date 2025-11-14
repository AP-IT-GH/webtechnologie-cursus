const resultField = document.getElementById('result');

function printMaaltafel(multiplier, iterations) {
    // De string variabele voor de maaltafelreeks
    let multiplications = "";
    
    // Doorloop de loop het gewenste aantal keer en voeg het product toe aan de string
    for (let i=1; i<=iterations; i++) {
        multiplications += `${multiplier * i}, `;
    }
    // Verwijder de laatste komma en spatie
    multiplications = multiplications.substring(0, (multiplications.length-2));

    // Toon de maaltafelreeks aan de gebruiker 
    resultField.innerHTML += `${multiplications} <br>`;
}

printMaaltafel(1,10);
printMaaltafel(2,10);
printMaaltafel(3,10);
printMaaltafel(4,10);
printMaaltafel(5,10);
printMaaltafel(6,10);
printMaaltafel(7,10);
printMaaltafel(8,10);
printMaaltafel(9,10);
printMaaltafel(10,10);