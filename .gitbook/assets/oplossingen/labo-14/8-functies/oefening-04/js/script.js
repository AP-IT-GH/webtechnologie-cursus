const resultField = document.getElementById('result');
const currentYear = new Date().getFullYear();

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? true : false;
}

for (let i=1950; i<currentYear; i++) {
    if ( isLeapYear(i) ) {
        resultField.innerHTML += `Het jaartal ${i} is een schrikkeljaar.<br>`;
    }
}