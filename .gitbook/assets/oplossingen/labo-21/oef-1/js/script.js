"use strict";

async function getBitcoinValue() {
  try {
    const apiUrl = 'https://api.coindesk.com/v1/bpi/currentprice.json';
    const response = await fetch(apiUrl);
    const bitcoinData = await response.json();

    const bitcoinValueElement = document.getElementById('bitcoinValue');
    bitcoinValueElement.textContent = `1 bitcoin heeft een waarde van ${bitcoinData.bpi.EUR.rate_float.toFixed(4)} euro.`;
  } catch (error) {
    console.error('Er is een fout opgetreden:', error.message);
  }
}

// Roep de functie aan bij het laden van de pagina
await getBitcoinValue();