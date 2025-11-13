"use strict";

const inputField = document.querySelector('#input');
const messageElement = document.querySelector('#message');

inputField.addEventListener('input', function() {
    // Ingevoerde tekst ophalen
    const userInput = inputField.value;

    // Ingevoerde tekst weergeven
    messageElement.textContent = userInput;
});

// addEventListener met arrow function:
// inputField.addEventListener('input', () => {
//     // Ingevoerde tekst ophalen
//     const userInput = inputField.value;
//
//     // Ingevoerde tekst weergeven
//     messageElement.textContent = userInput;
// });
