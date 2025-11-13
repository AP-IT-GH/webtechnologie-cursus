const multiplierField = document.getElementById('multiplier');
const iterationField = document.getElementById('iterations');
const resultField = document.getElementById('result');
const form = document.getElementsByTagName('form')[0];

form.addEventListener('submit', function(e){
    e.preventDefault();

    // Haal de waarden op uit de inputvelden
    const multiplier = parseInt(multiplierField.value);
    const iterations = parseInt(iterationField.value);

    // De string variabele voor de maaltafelreeks
    let multiplications = "";

    // Doorloop de loop het gewenste aantal keer en voeg het product toe aan de string
    for (let i=1; i<=iterations; i++) {
        multiplications += `${multiplier * i}, `;
    }
    // Verwijder de laatste komma en spatie
    multiplications = multiplications.substring(0, (multiplications.length-2));

    // Toon de maaltafelreeks aan de gebruiker 
    resultField.textContent = multiplications;
});