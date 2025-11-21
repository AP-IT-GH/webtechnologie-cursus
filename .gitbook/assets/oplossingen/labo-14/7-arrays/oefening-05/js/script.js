const resultList = document.getElementById("results");

// Array om de punten op te slaan
const grades = [];

// Vraag de gebruiker om punten in te voeren met een do-while loop
let input;
do {
    input = prompt("Voer een punt in (typ 'stop' om te eindigen):");
    if (input !== null && input !== "" && !isNaN(input)) {
        // Voeg het ingevoerde getal toe aan de array
        grades.push(parseInt(input));
    }
} while (input !== null && input.toLowerCase() !== "stop");

let total = 0;
let succeeded = 0;
let failed = 0;

for (const grade of grades) {
    // Totaal nodig voor berekenen van gemiddelde
    total += grade;

    // Aantal geslaagde nodig voor berekening percentage en aantal gebuisde
    if (grade >= 10) {
        succeeded++;
    } else {
        failed++;
    }
}

// Bereken gemiddelde
const average = total / grades.length;

// Bereken het percentage
const percentage = (total / (grades.length * 20)) * 100;

// Toon de resultaten op het scherm
const averageLI = document.createElement("li");
averageLI.textContent = "Gemiddelde: " + average;
resultList.appendChild(averageLI);

const percentageLI = document.createElement("li");
percentageLI.textContent = "Percentage: " + percentage + "%";
resultList.appendChild(percentageLI);

const failedLI = document.createElement("li");
failedLI.textContent = "Aantal gebuisde vakken: " + failed;
resultList.appendChild(failedLI);