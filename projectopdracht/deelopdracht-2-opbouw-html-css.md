# Deelopdracht 2 - Mobiele website met HTML en CSS

Lees voor je begint zeker de [algemene info](info.md) door. Hier vind je alle informatie over de projectopdracht, de deelopdrachten en de wireframes.

In deze deelopdracht ga je de **mobiele** webpagina's van de webshop bouwen. Zorg ervoor dat je browservenster is ingesteld als een gangbaar smartphone scherm en voer de stappen in dit document uit. Volg hierbij altijd de [mobiele wireframes](info.md#wireframes): die tonen welke elementen er op elke pagina staan en in welke volgorde. Kleuren, lettertype en content haal je uit de styleguide die je hebt geschreven tijdens [deelopdracht 1](deelopdracht-1-concept-content.md).

---

## 1. Mappenstructuur & bestanden

Maak de volgende mappenstructuur aan:

```
projectopdracht-webtechnologie-<je naam>/
├─ index.html
├─ shop.html
├─ contact.html
├─ product-<naam>.html
├─ css/
│  ├─ general.css
│  ├─ home.css
│  ├─ normalize.css
│  ├─ shop.css
│  ├─ product.css
│  └─ contact.css
├─ assets/
│  └─ images/
│     ├─ foto-1.jpg
│     ├─ foto-2.jpg
│     └─ foto-3.jpg
└─ js/
```

### HTML-pagina's

Maak de volgende HTML-pagina's aan:

- `index.html`
- `shop.html`
- `product-<naam>.html` (minimaal 6 pagina's, één per product)
- `contact.html`

### CSS-bestanden

- Eén CSS-bestand voor de algemene opmaak: `general.css`.
- Een apart CSS-bestand per pagina voor pagina-specifieke opmaak: `home.css`, `shop.css`, `product.css`, `contact.css`.
- Kies zelf of je `normalize.css` of `reset.css` gebruikt, en voeg dit bestand toe aan de map `css/`. Zorg dat je zeker het verschil tussen de twee kent, want je moet je keuze kunnen toelichten tijdens de mondelinge verdediging.

Link elke HTML-pagina met de juiste CSS-bestanden. `index.html` heeft bijvoorbeeld 3 `<link>`-tags: je reset/normalize-bestand, `general.css` en `home.css`.

> **TIP**: Houd de volgorde van de CSS-bestanden aan: eerst de reset of normalize, daarna `general.css` en vervolgens de pagina-specifieke CSS.

---

## 2. Algemene features (op elke pagina)

Elke pagina moet dezelfde algemene elementen bevatten:

- Typografie: lettertype, font-size, headings (h1, h2, h3, ...)
- Een header met je logo in een `h1`. Het logo is de enige `h1` op elke pagina; de titel van de pagina zelf is telkens een `h2`.
- Navigatie in de header met links naar de andere pagina's. Gebruik flexbox om het logo en de navigatie naast elkaar te plaatsen.
- Een footer

> **TIPS**:
> - Bouw de algemene features eerst op één pagina (bijvoorbeeld `index.html`). Kopieer deze HTML pas naar de andere pagina's wanneer ze klaar zijn. Omdat `general.css` op elke pagina gelinkt is, blijft de styling overal hetzelfde — dit bespaart tijd en zorgt voor uniformiteit.
> - Gebruik op elke pagina de juiste semantische elementen (`header`, `nav`, `main`, `aside`, `section`, `article`, `footer`, ...) zoals gezien in de les.

---

## 3. Pagina-specifieke features

### `index.html` — de homepage

<figure><img src="wireframes/mobile-home.png" alt="Mobiele wireframe van de homepage" width="300"><figcaption>Mobiele wireframe van de homepage</figcaption></figure>

- Een intro met:
  - Een klein label (_eyebrow tag_) boven de titel, bv. een korte slogan of de categorie van je webshop.
  - Een titel in een `h2`, bv. de slogan van je webshop.
  - Algemene uitleg over je webshop, zoals beschreven in je styleguide uit deelopdracht 1.
  - Een CTA (call-to-action) knop die linkt naar de shop (tip: style de `a`-tag met CSS als een button).
- Een sectie met de 3 best verkochte producten:
  - Een `h2` titel, met rechts ervan een korte voetnoot (bv. _meest verkocht deze maand_).
  - Een kaartje per product (gebruik een `article` per kaartje), onder elkaar geplaatst.
  - Links in het kaartje staat een vierkante productfoto. Gebruik de CSS-property `background-image` om de foto te plaatsen.
  - Rechts van de foto staan de titel en de prijs naast elkaar, met daaronder een korte beschrijving. Gebruik flexbox om de foto en de tekst naast elkaar te zetten.
  - Het kaartje linkt naar de detailpagina van het product.
- Een "bio"-sectie met een eigen achtergrondkleur, met:
  - Een ronde, professionele foto van jezelf, met ernaast je naam en een korte ondertitel (bv. je rol in de webshop). Gebruik flexbox om de foto en je naam naast elkaar te plaatsen.
  - Daaronder een korte uitleg of bio van jezelf.

### `shop.html` — het overzicht van alle producten

<figure><img src="wireframes/mobile-shop.png" alt="Mobiele wireframe van de shoppagina" width="300"><figcaption>Mobiele wireframe van de shoppagina</figcaption></figure>

- Een klein label (_eyebrow tag_) en een `h2` titel.
- Een `aside` met het winkelmandje en de wishlist, elk met een `h3` titel. De inhoud mag in deze fase nog leeg zijn: de functionaliteit volgt in [deelopdracht 5](deelopdracht-5-winkelmandje-wishlist.md).
- Een `h3` titel boven de productlijst, met daaronder 6 productkaartjes (gebruik een `article` per kaartje), onder elkaar geplaatst, met elk:
  - Een foto van het product (gebruik `background-image`).
  - Een titel (`h4`) met de prijs ernaast.
  - Een korte beschrijving, gebaseerd op de productbeschrijving uit deelopdracht 1.
  - Onderaan een button met een hartje om het product toe te voegen aan je wishlist, en een button om het product toe te voegen aan je winkelmandje (moeten nog niet werken).

### 6 detailpagina's — één per product

<figure><img src="wireframes/mobile-product-detail.png" alt="Mobiele wireframe van een productdetailpagina" width="300"><figcaption>Mobiele wireframe van een productdetailpagina</figcaption></figure>

- Bovenaan een link terug naar de shop (bv. _← Terug naar de shop_).
- Een klein label (_badge_), bv. de categorie van het product.
- De titel van het product in een `h2`, met de prijs ernaast.
- Een afbeelding in een `figure`, met de bronvermelding cursief in de `figcaption`.
- Een `h3` titel (bv. _Het verhaal_) met daaronder een uitgebreide beschrijving van het product.
- Een `h3` titel (bv. _Specificaties_) met daaronder een tabel (`table`) met 6 productspecificaties: één rij per specificatie, met links het label en rechts de waarde (bv. _Materiaal_ | _Eikenhout_).
- Onderaan, naast elkaar:
  - Een button met een hartje om het product toe te voegen aan je wishlist.
  - Een button om het product toe te voegen aan je winkelmandje.
  - Deze twee buttons hoeven niet te werken, ook niet in latere deelopdrachten.

> **TIP**:
> Werk 1 detailpagina volledig uit, en kopieer deze naar de andere 5 detailpagina's als je helemaal klaar bent. Pas enkel de content aan (titel, beschrijving, afbeelding, specificaties).


### `contact.html`

Voorzie de pagina met alle algemene features, maar laat de `main` voorlopig leeg. Het contactformulier volgt in [deelopdracht 4](deelopdracht-4-contact-page-formulier.md).
