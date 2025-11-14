"use strict";

// Voeg een event listener toe aan de knop om de conversie te starten
document.querySelector('#convertButton')
    .addEventListener('click', convertTimestamp);

function convertTimestamp() {
  // Haal de invoer van de gebruiker op
  const timestampInput = document.querySelector('#timestampInput').value;

  // Controleer of de invoer een geldige timestamp is
  if (!/^\d+$/.test(timestampInput)) {
    alert('Voer een geldige UNIX-timestamp in.');
    return;
  }

  // Bouw de API-url met de ingevoerde timestamp
  const apiUrl = `https://helloacm.com/api/unix-timestamp-converter/?cached&s=${timestampInput}`;

  // Gebruik de Fetch API om gegevens op te halen van de API
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Toon het geconverteerde tijdstip in de DOM
      const resultDiv = document.querySelector('#result');
      resultDiv.textContent = `Geconverteerde tijd: ${data}`;
    })
    .catch(error => {
      console.error('Fout bij het ophalen van gegevens:', error);
      alert('Er is een fout opgetreden bij het ophalen van gegevens.');
    });
}