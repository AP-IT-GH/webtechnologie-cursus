"use strict";

const form = document.querySelector('#nameForm');

form.addEventListener('submit', function (e) {

  // standaard HTML gedrag voorkomen
  e.preventDefault();

  // ingevulde naam ophalen
  const firstName = document.querySelector('#first-name').value;

  // naam uitlezen op scherm
  const messageElement = document.querySelector('#message');
  messageElement.innerHTML = firstName;
});