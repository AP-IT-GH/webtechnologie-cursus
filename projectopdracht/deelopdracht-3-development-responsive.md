# Deelopdracht 3 - Development responsive webshop

Lees eerst de [Projectinformatie](info.md). Daar vind je de wireframes, de deadlines en de regels voor het hele project.

In deze deelopdracht maak je je webshop responsive: je voegt een desktopversie toe aan de mobiele versie uit [deelopdracht 2](deelopdracht-2-opbouw-html-css.md).

- De [desktop-wireframes](info.md#desktop) bepalen hoe elke pagina eruitziet op een groot scherm. Je vindt ze hieronder ook per pagina.
- Kleuren, lettertypes en content blijven die uit je `styleguide.md` uit [deelopdracht 1](deelopdracht-1-concept-content.md).

---

## Algemene regels

- Werk _mobile first_: je mobiele CSS is de basis, en je past die aan voor grotere schermen met media queries met `min-width`.
- Je site moet goed werken op smartphone en desktop. Tablet is niet verplicht.
- De `body` is maximaal 1280px breed en staat gecentreerd op het scherm.
- Test je webshop op verschillende schermbreedtes.

{% hint style="info" %}
Gebruikte je in deelopdracht 2 geen flexbox of grid voor de lay-out? Dan moet je dat nu herwerken. Controleer daarna of je site er op mobiel nog steeds goed uitziet.
{% endhint %}

---

## Wat verandert er op desktop?

### Homepage (`index.html`)

<figure><img src="wireframes/desktop-home.png" alt="Desktop-wireframe van de homepage"><figcaption>Desktop-wireframe van de homepage</figcaption></figure>

- De pagina bestaat uit twee kolommen: links de intro met daaronder de bio, rechts de best verkochte producten.
- De bio krijgt een rand.
- Zet de 3 productkaartjes in een grid: één breed kaartje bovenaan en twee even brede kaartjes eronder. Op mobiel blijven ze onder elkaar staan.
- In het brede kaartje staat het product dat je in de kijker zet, met zijn _badge_.
- De titel en de korte beschrijving staan over de foto in plaats van ernaast.

### Shop (`shop.html`)

<figure><img src="wireframes/desktop-shop.png" alt="Desktop-wireframe van de shoppagina"><figcaption>Desktop-wireframe van de shoppagina</figcaption></figure>

- De productlijst en de `aside` met winkelmandje en wishlist staan naast elkaar in een flexbox. De `aside` is een smallere kolom rechts.
- De 6 productkaartjes staan in een flexbox en vullen de beschikbare breedte zo goed mogelijk. Er staan maximaal 3 kaartjes op één rij: reken daarvoor zelf de juiste `flex-basis` uit.
- In elk kaartje staat de foto boven de titel en beschrijving in plaats van ernaast.

### Detailpagina's (`product-<naam>.html`)

<figure><img src="wireframes/desktop-product-detail.png" alt="Desktop-wireframe van een productdetailpagina"><figcaption>Desktop-wireframe van een productdetailpagina</figcaption></figure>

- De link terug naar de shop blijft bovenaan staan, over de volledige breedte.
- Daaronder staan twee kolommen naast elkaar (flexbox of grid):
  - links de foto met bijschrift;
  - rechts de _badge_, de titel en prijs, de beschrijving en de specificaties.

### Contact (`contact.html`)

Het contactformulier volgt pas in [deelopdracht 4](deelopdracht-4-contact-page-formulier.md). Maak nu wel al het **bevestigingsbericht** dat verschijnt na het verzenden van het formulier:

- een titel, bv. _Bericht verzonden_;
- een korte zin, bv. dat je zo snel mogelijk antwoordt.

Style het bericht volgens je huisstijl. In [deelopdracht 6](deelopdracht-6-contact-page-kaart.md) verberg en toon je het met JavaScript.
