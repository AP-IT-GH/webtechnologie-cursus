# Deelopdracht 3 - Development responsive webshop

In deze deelopdracht werken we de desktopversie van je webshop uit. Volg daarbij de [desktop-wireframes](info.md#wireframes) die je hieronder per pagina vindt. Kleuren, lettertype en content blijven die uit je styleguide van deelopdracht 1. Gebruik "min-width" in je media-queries en behoud zo de _mobile-first_ aanpak. Zorg ervoor dat je jouw site minstens optimaliseert voor smartphones en desktops. Tablets zijn geen must.

{% hint style="info" %}
Indien je in opdracht 1 geen gebruik hebt gemaakt van flexbox of grid voor lay-out, zul je dit wat moeten herwerken. Zorg daarbij dat je site er nog steeds goed uitziet op mobiel.
{% endhint %}

Beperk de maximum breedte van de body tot 1280px en zorg ervoor dat deze gecentreerd staat op het scherm.

{% hint style="warning" %}
Niets op je webshop blijft vastplakken tijdens het scrollen: gebruik nergens `position: sticky`.
{% endhint %}

Zorg ervoor dat je jouw webshop test op verschillende schermgroottes.

## Overzicht van veranderingen per pagina

De volgende zaken zullen er anders uitzien op desktop ten opzichte van mobiel:

### `index.html`

<figure><img src="wireframes/desktop-home.png" alt="Desktop-wireframe van de homepage"><figcaption>Desktop-wireframe van de homepage</figcaption></figure>

- De algemene lay-out verandert: de pagina bestaat nu uit twee kolommen. Links staan de introductie en het bio-kaartje, rechts de best verkochte producten.
- Het bio-kaartje staat onder de introductie en krijgt een rand.
- Plaats de 3 meest verkochte items in een grid: één breed kaartje bovenaan, en twee even brede kaartjes eronder. Zorg ervoor dat op mobiel de 3 elementen onder elkaar komen.
- Op desktop staan de titel en de korte beschrijving over de foto van het kaartje, in plaats van ernaast. Zet in het brede kaartje het product dat je in deelopdracht 1 in de kijker zette, met zijn label (_badge_) erbij.

### `shop.html`

<figure><img src="wireframes/desktop-shop.png" alt="Desktop-wireframe van de shoppagina"><figcaption>Desktop-wireframe van de shoppagina</figcaption></figure>

- Zet de 6 producttegels in een flexbox. Zorg ervoor dat de beschikbare schermbreedte zo optimaal mogelijk benut wordt.
- Beperk het maximum aantal producttegels op 1 rij tot 3. Reken daarvoor de ideale flex-basis uit.
- Op desktop staat de foto boven de titel en de beschrijving, in plaats van ernaast.
- Zet de productlijst en de shopping cart + wishlist in een flexbox. Het winkelmandje en de wishlist komen in een smallere kolom rechts van de productlijst te staan als er voldoende ruimte is.

### De 6 detailpagina's

<figure><img src="wireframes/desktop-product-detail.png" alt="Desktop-wireframe van een productdetailpagina"><figcaption>Desktop-wireframe van een productdetailpagina</figcaption></figure>

- De afbeelding en de tekst worden horizontaal naast elkaar geplaatst in plaats van onder elkaar. Gebruik daarvoor flexbox of grid in combinatie met een media-query.
- De link terug naar de shop blijft bovenaan staan, boven de twee kolommen.
- Links staat de foto met het bijschrift. Rechts staan het label, de titel en de prijs, de beschrijving en de specificaties.

### `contact.html`

- Deze pagina hoeft voorlopig nog niet uitgewerkt te worden. Dit volgt in [deelopdracht 4](deelopdracht-4-contact-page-formulier.md).
