# Deelopdracht 3 - Development responsive webshop

In deze deelopdracht werken we de desktopversie van het design in Figma – aangepast aan jouw styleguide uit opdracht 1 – uit. Gebruik "min-width" in je media-queries en behoud zo de _mobile-first_ aanpak. Zorg ervoor dat je jouw site minstens optimaliseert voor smartphones en desktops. Tablets zijn geen must.

{% hint style="info" %}
Indien je in opdracht 1 geen gebruik hebt gemaakt van flexbox of grid voor lay-out, zul je dit wat moeten herwerken. Zorg daarbij dat je site er nog steeds goed uitziet op mobiel.
{% endhint %}

Beperk de maximum breedte van de body tot 1440px en zorg ervoor dat deze gecentreerd staat op het scherm.

Zorg ervoor dat je jouw webshop test op verschillende schermgroottes.

## Overzicht van algemene veranderingen

- Horizontale layout van de header: het logo, de navigatie en de zoekbalk komen horizontaal naast elkaar te staan. Gebruik hiervoor flexbox in combinatie met een media-query.

## Overzicht van veranderingen per pagina

De volgende zaken zullen er anders uitzien op desktop ten opzichte van mobiel:

* index.html:
  - Plaats de 3 meest verkochte items in een grid zoals in het wireframe. Zorg ervoor dat op mobiel de 3 elementen onder elkaar komen.
  - Het kaartje met de foto en uitleg van de auteur is nu horizontaal gepositioneerd.
  - De algemene lay-out verandert: de meest verkochte items staan nu rechts van de introductie en het auteurkaartje.

* shop.html:
  - Zet de 6 producttegels in een flexbox. Zorg ervoor dat de beschikbare schermbreedte zo optimaal mogelijk benut wordt.
  - Beperk het maximum aantal producttegels op 1 rij tot 3, zoals in het wireframe. Reken daarvoor de ideale flex-basis uit.
  - Zet de productlijst en de shopping cart + wishlist in een flexbox. Deze mogen langs elkaar komen als er voldoende ruimte is.

* de 6 detailpagina's:
  - De afbeelding en de tekst worden horizontaal naast elkaar geplaatst in plaats van onder elkaar. Gebruik daarvoor flexbox of grid in combinatie met een media-query.

* contact.html:
  - Deze pagina hoeft voorlopig nog niet uitgewerkt te worden. Dit volgt in de volgende deelopdracht.
