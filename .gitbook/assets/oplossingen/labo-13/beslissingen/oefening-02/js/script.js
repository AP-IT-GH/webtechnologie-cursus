const form = document.getElementById('yearForm')
const yearInputField = document.getElementById('yearInput');
const resultField = document.getElementById('result');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Haal het jaartal op uit het formulier
    let year = yearInputField.value;

    // Controleren of het een schrikkeljaar is
    let isLeapYear = false;
    if ( (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ) {
        isLeapYear = true;
    }

    // Toon het resultaat aan de gebruiker
    let resultMessage = isLeapYear ? `${year} is een schrikkeljaar!` : `${year} is geen schrikkeljaar.`;
    resultField.textContent = resultMessage;
});