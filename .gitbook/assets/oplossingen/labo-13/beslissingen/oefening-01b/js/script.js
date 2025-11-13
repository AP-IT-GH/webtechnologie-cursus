// Nodige velden inlezen in geheugen
const firstNameField = document.getElementById('firstname');
const lastNameField = document.getElementById('lastname');
const ageField = document.getElementById('age');
const form = document.getElementById('form');
const messageField = document.getElementById('message');

// Luisteren naar formulier dat verzonden wordt
form.addEventListener('submit', function(e){
    // Voorkomen dat formulier verzonden wordt
    e.preventDefault();

    // Inlezen van waarden uit de inputvelden
    let firstName = firstNameField.value;
    let lastName = lastNameField.value;
    let age = ageField.value;

    // Controleren op lege velden
    if (firstName === '' || lastName === '') {
        messageField.textContent = "Vul zowel voornaam als achternaam in!";
        return;
    }

    // Controleren op leeftijd tussen 12 en 60 jaar
    if (isNaN(age) || age < 12 || age > 60) {
        messageField.textContent = "U behoort niet tot de gezochte leeftijdsklasse!";
        return;
    }

    // Hoofdletters juist zetten
    firstName = firstName.substring(0,1).toUpperCase() + firstName.substring(1).toLowerCase();
    lastName = lastName.substring(0,1).toUpperCase() + lastName.substring(1).toLowerCase();

    // Samenstellen van de boodschap met string interpolatie
    let message = `U bent ${firstName} ${lastName} en u bent ${age} jaar oud.`;

    // Plaatsen van de boodschap in het label
    messageField.textContent = message;
});