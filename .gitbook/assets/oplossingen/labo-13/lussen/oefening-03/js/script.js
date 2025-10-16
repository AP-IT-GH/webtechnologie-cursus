// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
"use strict";

// IIFE (Immediately Invoked Function Expression) om te voorkomen dat variabelen in een globale scope terrecht komen. Meer info: https://developer.mozilla.org/en-US/docs/Glossary/IIFE
(() => {
  /*
        We kunnen het te raden getal hard-coden, maar in dit voorbeeld genereren we elke keer de gebruiker op start klikt een nieuw willekeurig getal tussen 0 en 30
        Math.random genereert een willekeurig getal tussen 0 en 1, door deze eerst te vermenigvuldigen met het maximum getal (30) en vervolgens af te ronden krijgen we een willekeurig getal tussen 0 en 30
        Opgelet: als we correctNumber binnen de do-while loop zouden genereren, zal deze elke iteratie van de lus anders zijn en wordt het spel wel heel moeilijk.
    */

  document.querySelector("button").addEventListener("click", () => {
    const correctNumber = Math.round(Math.random() * 30);
    let answer;

    do {
      // de promptfunctie geeft altijd strings terug, dus we zorgen dat het nummertje wordt geinterpreteerd als een geheel nummer (integer) met parseInt. De tweede argument (10) die we aan parseInt meegeven aan de functie is de radix (talstelsel).
      answer = parseInt(prompt("Geef een getal in tussen 0 en 30"), 10);

      if (answer === correctNumber) {
        alert("Correct!");
      } else if (answer > correctNumber) {
        alert("Lager!");
      } else if (answer < correctNumber) {
        // door hier gebruik te maken van een "else if (answer < correctNumber)" in plaats van een algemene "else", zorgen we er voor dat de do-lus zich herhaalt wanneer een gebruiker invalid input meegeeft (bv. een letter ipv een cijfer)
        alert("Hoger!");
      }
    } while (answer !== correctNumber);
  });
})();
