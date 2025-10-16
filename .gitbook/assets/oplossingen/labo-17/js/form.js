"use strict";

// Select form and elements using querySelector
const form = document.querySelector("#contactform");
const errorList = document.querySelector("#errorlist");
const successMessage = document.querySelector("#success");

function hasValue(input) {
  if (input.value.trim() === "") {
    return showError(input);
  }
  return true;
}

function showError(input) {
  let inputName = input.name;
  let message = `The ${inputName} field is empty! Please fill in a value.`;
  // Maak een nieuw li element aan
  const li = document.createElement("li");
  // Voeg de tekst toe aan het li element
  li.textContent = message;
  // Voeg het li element toe als child element van je errorList
  errorList.appendChild(li);
}

function showSuccess() {
  let message = "We have received your message!";
  // Voeg de tekst toe aan het successMessage element
  successMessage.textContent = message;
}

function showAlert(name, email, message) {
  alert(`You have sent a message.\n
    Name: ${name}\n
    Email: ${email}\n
    Message: ${message}`);
}

form.addEventListener("submit", (event) => {
  // stop de default submissie van je form
  event.preventDefault();

  // Verwijder de children van errorList en successMessage
  // Gebruik geen innerHTML -> kwetsbaar voor html injections
  errorList.textContent = "";
  successMessage.textContent = "";

  // Select the form elements using querySelector (name attributes as selectors)
  let nameValid = hasValue(form.querySelector("[name='name']"));
  let emailValid = hasValue(form.querySelector("[name='email']"));
  let messageValid = hasValue(form.querySelector("[name='message']"));

  if (nameValid && emailValid && messageValid) {
    showAlert(
        form.querySelector("[name='name']").value,
        form.querySelector("[name='email']").value,
        form.querySelector("[name='message']").value
    );
    showSuccess();
  }
});
