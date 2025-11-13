let yearInput = prompt('Enter year');
let year = parseInt(yearInput, 10);

// Controleren of het een schrikkeljaar is
let isLeapYear = false;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    isLeapYear = true;
}

// Toon het resultaat aan de gebruiker
let resultMessage = isLeapYear ? `${year} is een schrikkeljaar!` : `${year} is geen schrikkeljaar.`;
console.log(resultMessage);