# Deelopdracht 2 - Mobiele website met HTML en CSS

Lees eerst de [Projectinformatie](info.md). Daar vind je de wireframes, de deadlines en de regels voor het hele project.

In deze deelopdracht bouw je de **mobiele** versie van je webshop. Stel je browservenster in op een gangbaar smartphonescherm.

- De [mobiele wireframes](info.md#mobiel) bepalen welke elementen op elke pagina staan en in welke volgorde.
- Kleuren, lettertypes, teksten en afbeeldingen haal je uit je `styleguide.md` uit [deelopdracht 1](deelopdracht-1-concept-content.md).

---

## 1. Mappenstructuur

Maak deze structuur aan in je projectrepository:

```
projectopdracht-webtechnologie-<je naam>/
├─ index.html
├─ shop.html
├─ product-<naam>.html     (6 pagina's, één per product)
├─ contact.html
├─ css/
│  ├─ normalize.css        (of reset.css)
│  ├─ general.css
│  ├─ home.css
│  ├─ shop.css
│  ├─ product.css
│  └─ contact.css
├─ assets/                 (afbeeldingen uit deelopdracht 1)
└─ js/
```

### CSS-bestanden

- `general.css` bevat de opmaak die op elke pagina terugkomt.
- `home.css`, `shop.css`, `product.css` en `contact.css` bevatten de opmaak van één pagina.
- Kies zelf tussen `normalize.css` en `reset.css`. Ken het verschil: je moet je keuze toelichten tijdens de mondelinge verdediging.

Link elke pagina aan 3 CSS-bestanden, in deze volgorde: normalize/reset, `general.css`, en daarna het bestand van die pagina. Voor `index.html` is dat dus normalize/reset, `general.css` en `home.css`.

---

## 2. Op elke pagina

- **Typografie:** lettertype, tekstgrootte en headings (`h1`, `h2`, `h3`, ...).
- **Header** met je logo in een `h1`. Het logo is de enige `h1` op de pagina; de paginatitel is telkens een `h2`.
- **Navigatie** in de header met links naar de andere pagina's. Plaats logo en navigatie naast elkaar met flexbox.
- **Footer**.

Gebruik de juiste semantische elementen: `header`, `nav`, `main`, `aside`, `section`, `article`, `footer`, ...

> **Tip:** Werk de header en footer eerst volledig uit op `index.html` en kopieer ze pas daarna naar de andere pagina's. Omdat `general.css` overal gelinkt is, ziet elke pagina er meteen hetzelfde uit.

---

## 3. Per pagina

### Homepage (`index.html`)

<figure><img src="wireframes/mobile-home.png" alt="Mobiele wireframe van de homepage" width="300"><figcaption>Mobiele wireframe van de homepage</figcaption></figure>

**Intro**

- Een klein label boven de titel (_eyebrow tag_), bv. een korte slogan of de categorie van je webshop.
- Een `h2` titel, bv. de slogan van je webshop.
- De omschrijving van je webshop uit je styleguide.
- Een CTA-knop (_call to action_) naar de shop. Style hiervoor een `a`-tag als button.

**Best verkochte producten**

- Een `h2` titel met daaronder 3 productkaartjes onder elkaar. Elk kaartje is een `article` dat linkt naar de detailpagina van het product.
- Links staat een vierkante productfoto (via `background-image`). Rechts staan de titel en prijs naast elkaar, met daaronder een korte beschrijving. Zet foto en tekst naast elkaar met flexbox.
- Deze kaartjes krijgen op mobiel nog geen _badge_. Die voeg je toe in de desktopversie in [deelopdracht 3](deelopdracht-3-development-responsive.md).

**Bio**

- Een sectie met een eigen achtergrondkleur.
- Een ronde foto van jezelf, met ernaast je naam en een korte ondertitel (bv. je rol in de webshop). Zet foto en naam naast elkaar met flexbox.
- Daaronder je bio.

### Shop (`shop.html`)

<figure><img src="wireframes/mobile-shop.png" alt="Mobiele wireframe van de shoppagina" width="300"><figcaption>Mobiele wireframe van de shoppagina</figcaption></figure>

- Een _eyebrow tag_ en een `h2` titel.
- Een `aside` met het winkelmandje en de wishlist, elk met een `h3` titel. Ze mogen voorlopig leeg zijn: de functionaliteit volgt in [deelopdracht 5](deelopdracht-5-winkelmandje-wishlist.md).
- Een `h3` titel met daaronder 6 productkaartjes onder elkaar. Elk kaartje is een `article` met:
  - een productfoto (via `background-image`);
  - een `h4` titel met de prijs ernaast;
  - een korte beschrijving;
  - een hartjesknop (wishlist) en een knop _In winkelmandje_. Die hoeven nog niet te werken.

### Detailpagina's (`product-<naam>.html`)

<figure><img src="wireframes/mobile-product-detail.png" alt="Mobiele wireframe van een productdetailpagina" width="300"><figcaption>Mobiele wireframe van een productdetailpagina</figcaption></figure>

Maak voor elk van je 6 producten een detailpagina met:

- bovenaan een link terug naar de shop, bv. _← Terug naar de shop_;
- een `h2` met de producttitel en de prijs ernaast;
- de productafbeelding in een `figure`, met de bron cursief in de `figcaption`;
- een `h3` (bv. _Het verhaal_) met de volledige productomschrijving;
- een `h3` (bv. _Specificaties_) met een `table` van de 6 specificaties: één rij per specificatie, label links en waarde rechts (bv. _Materiaal_ | _Eikenhout_).

Enkel het product dat je in de kijker zet, krijgt een _badge_ met de tekst uit deelopdracht 1 (bv. _Uitgelicht_).

Op de detailpagina's staan **geen** knoppen voor de wishlist of het winkelmandje. Die staan enkel in de shop.

> **Tip:** Werk één detailpagina volledig af en kopieer ze dan naar de andere 5. Pas daarna enkel de content aan.

### Contact (`contact.html`)

Voorzie de header en footer, maar laat de `main` voorlopig leeg. Het contactformulier volgt in [deelopdracht 4](deelopdracht-4-contact-page-formulier.md).
