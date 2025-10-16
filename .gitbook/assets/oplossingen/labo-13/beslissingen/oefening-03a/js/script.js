const num1Field = document.getElementById('number1');
const num2Field = document.getElementById('number2');
const operatorField = document.getElementById('operator');
const form = document.getElementsByTagName('form')[0];
const resultField = document.getElementById('result');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Haal de waarden op uit de inputvelden
    let num1 = parseInt(num1Field.value);
    let num2 = parseInt(num2Field.value);
    let operator = operatorField.value;

    // Controleer of de ingevoerde operator geldig is
    if (operator === '+' || operator === '-' || operator === '*' || operator === '/') {
        
        // Controleer of delen door 0 wordt geprobeerd
        if (operator === '/' && num2 === 0) {
            result.textContent = "Fout: Delen door 0 is niet toegestaan.";
        } else {
            // Voer de berekening uit op basis van de ingevoerde operator
            let result;
            if (operator === '+') {
                result = num1 + num2;
            } else if (operator === '-') {
                result = num1 - num2;
            } else if (operator === '*') {
                result = num1 * num2;
            } else if (operator === '/') {
                result = num1 / num2;
            }

            // Toon het resultaat aan de gebruiker
            resultField.textContent = "Resultaat: " + result;
        }
    } else {
        // Toon foutmelding voor ongeldige operator
        resultField.textContent = "Fout: Ongeldige operator. Gebruik alleen +, -, * of /.";
    }
});