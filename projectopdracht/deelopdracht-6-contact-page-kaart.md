# Deelopdracht 6 - Contact page kaart & bevestiging

In deze deelopdracht werk je de contactpagina af: je vervangt de tijdelijke kaart uit [deelopdracht 4](deelopdracht-4-contact-page-formulier.md) door een echte kaart, en je toont een bevestiging wanneer iemand het contactformulier verstuurt.

<figure><img src="wireframes/mobile-contact.png" alt="Mobiele wireframe van de contactpagina" width="300"><figcaption>Mobiele wireframe van de contactpagina</figcaption></figure>

## Kaart

Om het gebruikers gemakkelijk te maken om de fysieke locatie van onze shop te vinden gaan we ook een kaartje insluiten. We gebruiken daarvoor Leaflet.
Het kaartje moet aan de volgende zaken voldoen:

* **2 locatie pointers** op 2 fictieve locaties naar keuze.
* Locatie pointers in de vorm van je webshop logo

## Bevestiging na verzenden

Tot nu toe gebeurt er niets zichtbaars wanneer je het contactformulier verstuurt. Voeg daarom een bevestiging toe, zoals in de wireframe:

* Maak de velden van het formulier verplicht met het `required`-attribuut, zodat de bevestiging enkel verschijnt als alles is ingevuld.
* Luister met JavaScript naar het `submit`-event van het formulier.
* Voorkom met `event.preventDefault()` dat de pagina herlaadt. Het formulier hoeft niet echt verstuurd te worden.
* Verberg het volledige formulier en toon op dezelfde plek het bevestigingsbericht dat je in deelopdracht 3 al hebt gestyled.
* Gebruik CSS om het bevestigingsbericht standaard te verbergen. Voeg die verborgen toestand meteen in de HTML toe, zodat het bericht bij het laden van de pagina niet kort zichtbaar wordt (_content flash_).
* Gebruik JavaScript om na een geldige verzending het formulier te verbergen en het bevestigingsbericht te tonen, bijvoorbeeld door CSS-klassen toe te voegen en te verwijderen.

> ⚠️ Volg de [coding guidelines](./../coding-guidelines.md): gebruik `addEventListener` en **geen `onsubmit`-attribuut** in de HTML.
