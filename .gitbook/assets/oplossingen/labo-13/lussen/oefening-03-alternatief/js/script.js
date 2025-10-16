// Opgelet: deze oplossing maakt geen gebruik van lussen, zoals de opgave impliceert.

const userGuessField = document.getElementById("userGuess");
const form = document.getElementById("guessForm");
const resultField = document.getElementById("result");

// Stel een te raden getal in (bijvoorbeeld 18)
const numberToGuess = 18;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Haal de gebruikersinvoer op uit het inputveld
  const userGuess = parseInt(userGuessField.value);

  let message = "";
  // Controleer of het getal correct is
  if (userGuess === numberToGuess) {
    message =
      "Perfect! Het te raden getal was inderdaad " + numberToGuess + " :-)";
  } else {
    // Geef een tip aan de gebruiker (hoger of lager)
    message = "Tip: " + (userGuess < numberToGuess ? "Hoger!" : "Lager!");
  }

  resultField.textContent = message;
});
