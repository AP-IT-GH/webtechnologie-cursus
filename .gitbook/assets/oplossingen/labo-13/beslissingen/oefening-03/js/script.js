const num1 = parseInt(prompt("Geef getal 1 in"), 10);
const num2 = parseInt(prompt("Geef getal 2 in"), 10);
const operator = prompt("Geef de operator in (+, -, *, /)");

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
        console.log(`Resultaat: ${result}`);
    }
} else {
    // Toon foutmelding voor ongeldige operator
    resultField.textContent = "Fout: Ongeldige operator. Gebruik alleen +, -, * of /.";
}