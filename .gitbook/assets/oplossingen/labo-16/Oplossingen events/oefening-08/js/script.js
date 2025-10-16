"use strict"

// Nieuw li-element maken
const newLi = document.createElement("li");

newLi.textContent = "Nieuw Item"
// newLi.innerHTML = "Nieuw Item" // alternatief voor regel 6


// Bestaande ul selecteren en nieuw li-element toevoegen
const myList = document.querySelector("#list");
myList.appendChild(newLi);

// Resultaat tonen in de console
console.log(myList.innerHTML);
