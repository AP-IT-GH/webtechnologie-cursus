// Maak twee arrays met voornamen en achternamen
const firstNames = ["Emma", "Liam", "Sophie", "Noah", "Fatima"];
const lastNames = ["Pietersen", "de Vries", "Bakker", "Legrand", "Errazzouki"];

// Controleer of de lengte van beide arrays gelijk is
if (firstNames.length !== lastNames.length) {
    console.error("Fout: De lengte van de arrays is niet gelijk.");
} else {
    // Maak een lege array voor de volledige namen
    const fullNames = [];

    // Gebruik een for-loop om door de lijst van namen te lopen
    for (let i=0; i<firstNames.length; i++) {
        // Voeg voor- en achternaam samen en voeg deze toe aan de array van volledige namen
        const fullName = firstNames[i] + " " + lastNames[i];
        fullNames.push(fullName);
    }

    // Voeg de lijstitems toe aan de ul met id "namenLijst"
    const namesList = document.getElementById("namesList");
    for (let i=0; i<fullNames.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = fullNames[i];
        namesList.appendChild(listItem);
    }
}