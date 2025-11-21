const result = document.getElementById('result');

// Importeer data uit JSON
import personData from "../assets/json/person.json" with { type: 'json' };

// Functie om de volledige naam van de persoon af te drukken
function printFullName(person) {
    let theName = document.createElement('h2');
    theName.textContent = person.firstname + " " + person.lastname;
    result.appendChild(theName);
}

// Functie om de hobby's van de persoon af te drukken
function printHobbies(person) {
    let theHobbiesTitle = document.createElement('h3');
    theHobbiesTitle.textContent = "Hobbies:";
    result.appendChild(theHobbiesTitle);

    let theHobbies = document.createElement('ul');
    for (let i = 0; i < person.hobbies.length; i++) {
        let hobby = document.createElement('li');
        hobby.textContent = person.hobbies[i];
        theHobbies.appendChild(hobby);
    }

    result.appendChild(theHobbies);
}

// Roep de functies aan met het ingelezen object
printFullName(personData);
printHobbies(personData);