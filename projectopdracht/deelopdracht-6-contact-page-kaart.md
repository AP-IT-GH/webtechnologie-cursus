# Deelopdracht 6 - Contact page kaart & bevestiging

Lees eerst de [Projectinformatie](info.md). Daar vind je de wireframes, de deadlines en de regels voor het hele project.

In deze deelopdracht werk je de contactpagina af: je vervangt de tijdelijke kaart uit [deelopdracht 4](deelopdracht-4-contact-page-formulier.md) door een echte kaart, en je toont een bevestiging wanneer iemand het formulier verstuurt.

<figure><img src="wireframes/mobile-contact.png" alt="Mobiele wireframe van de contactpagina" width="300"><figcaption>Mobiele wireframe van de contactpagina</figcaption></figure>

---

## 1. Kaart

Maak met Leaflet een kaart die bezoekers helpt om je winkel te vinden:

- met **2 markers** op 2 fictieve locaties naar keuze;
- met je **logo** als icoon voor de markers.

---

## 2. Bevestiging na verzenden

Voorlopig gebeurt er niets zichtbaars wanneer iemand het formulier verstuurt. Toon daarom het bevestigingsbericht dat je in [deelopdracht 3](deelopdracht-3-development-responsive.md) al hebt gestyled.

- Maak alle velden verplicht met het `required`-attribuut. Zo verschijnt de bevestiging enkel als alles is ingevuld.
- Verberg het bevestigingsbericht standaard met CSS. Zet die verborgen toestand al in de HTML, zodat het bericht niet even zichtbaar is bij het laden (_content flash_).
- Luister in JavaScript naar het `submit`-event van het formulier en voorkom met `event.preventDefault()` dat de pagina herlaadt. Het formulier hoeft niet echt verstuurd te worden.
- Verberg na het verzenden het formulier en toon op dezelfde plek het bevestigingsbericht, bv. door CSS-klassen toe te voegen en te verwijderen.

> ⚠️ Volg de [coding guidelines](../coding-guidelines.md): gebruik `addEventListener` en **geen `onsubmit`-attribuut** in de HTML.
