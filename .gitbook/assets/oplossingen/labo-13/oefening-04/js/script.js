const num1 = parseInt(prompt("Geef getal 1 in"), 10);
const num2 = parseInt(prompt("Geef getal 2 in"), 10);
const operator = prompt("Geef de operator in (+, -, *, /)");

// Controleer of de ingevoerde operator geldig is
if (operator === '+' || operator === '-' || operator === '*' || operator === '/') {

    // Controleer of delen door 0 wordt geprobeerd
    if (operator === '/' && num2 === 0) {
        console.log("Fout: Delen door 0 is niet toegestaan.");
    } else {
        // Voer de berekening uit op basis van de ingevoerde operator
        let result;
        // Voer de berekening uit op basis van de ingevoerde operator
        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num1 / num2;
                break;
            default:
                result = "Fout: Ongeldige operator. Gebruik alleen +, -, * of /.";
        }

        // Toon het resultaat aan de gebruiker
        console.log(`Resultaat: ${result}`);
    }
} else {
    // Toon foutmelding voor ongeldige operator
    console.log("Fout: Ongeldige operator. Gebruik alleen +, -, * of /.");
}