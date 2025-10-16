"use strict"

// Haal alle elementen op met klasse collapsible (dit zijn button elementen)
const collapsableElements = document.querySelectorAll(".collapsible");

collapsableElements.forEach((collapsableElement, index) => {
  collapsableElement.addEventListener("click", function() {
    // Voeg de klasse active toe aan het button element
    collapsableElement.classList.toggle("active");
    // haal het p-element op dat onder het button element is gedefinieerd
    const content = collapsableElement.nextElementSibling;

    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
})