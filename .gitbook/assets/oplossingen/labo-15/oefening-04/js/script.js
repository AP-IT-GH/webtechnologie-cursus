// Importeer data uit JSON
import animalsData from "../assets/json/dieren.json" with { type: 'json' };

// Functie om een lijst van dierennamen terug te geven
function getAnimalsList(animals) {
    const animalNames = [];
    for (let i=0; i < animals.length; i++) {
        animalNames.push(animals[i].name);
    }
    return animalNames;
}

// Roep de functie aan met het ingelezen array van dieren
const animalsList = getAnimalsList(animalsData);

// Toon dieren aan gebruiker
const list = document.getElementById('animals');
for (const animal of animalsData) {
    const li = document.createElement('li');
    li.textContent = animal.name;
    list.appendChild(li);
}


// Functie om informatie over een gekozen dier weer te geven
const result = document.getElementById('result');
function displayAnimalInfo(animals, choice) {
    const chosenAnimal = animals[choice-1]; // Convertie van gebruikersinput naar array-index
    if (chosenAnimal) {
        result.textContent = chosenAnimal.info;
    } else {
        result.textContent = 'Foutieve keuze, gelieve enkel een getal te kiezen uit de lijst met opties.';
    }
}

// toon informatie over gekozen dier
const form = document.getElementById('getInfo');
const animalIdField = document.getElementById('animalId');

form.addEventListener('submit',function(e){
    e.preventDefault();

    displayAnimalInfo(animalsData, animalIdField.value);
});