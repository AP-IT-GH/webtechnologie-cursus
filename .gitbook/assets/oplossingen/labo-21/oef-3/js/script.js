"use strict";

// Voeg een event listener toe aan de knop om een grapje te laden
document.querySelector('#loadJokeButton').addEventListener('click', getJoke);

async function getJoke() {
  try {
    const apiUrl = 'https://v2.jokeapi.dev/joke/Programming?type=twopart';
    const response = await fetch(apiUrl);
    const joke = await response.json();

    const jokeContainer = document.querySelector('#jokeContainer');
    jokeContainer.innerHTML = `
      <p>${joke.setup}</p>
      <p>${joke.delivery}</p>
    `;
  } catch (error) {
    console.error('Er is een fout opgetreden:', error.message);
  }
}