# Deelopdracht 7 - Dynamische content (finale)

Lees eerst de [Projectinformatie](info.md). Daar vind je de wireframes, de deadlines en de regels voor het hele project.

Echte webshops schrijven hun producten niet met de hand in HTML. Eigenaars beheren ze in een _Content Management System_ (CMS) dat de data in een database bewaart, en de HTML wordt automatisch gegenereerd op basis van die data.

In deze laatste deelopdracht doe je iets gelijkaardigs: je vervangt de _hardcoded_ productkaartjes op de shoppagina door kaartjes die JavaScript genereert uit data.

{% hint style="info" %}
Hiervoor moet je je bestaande code herwerken (_refactoring_). Maak eerst een commit, zodat je altijd terug kunt naar een werkende versie.
{% endhint %}

---

## 1. Zet je producten om naar een array van objecten

Maak een array met één object per product. Elk object bevat de gegevens van het product: een unieke `id`, afbeelding, naam, beschrijving, prijs en productspecifieke eigenschappen. Met de `id` kun je straks een product gemakkelijk terugvinden.

```javascript
const shopItems = [
  {
    id: 1,
    image: "assets/blue-alchemy-jug.jpg",
    name: "Blue Alchemy Jug",
    description:
      "The Magical Blue Alchemy Jug is a rare and enchanting artifact, shimmering with an ethereal, deep sapphire glow.",
    material: "Enchanted crystal, reinforced with rare alchemical alloys",
    dimensions: "10 inches tall, 5 inches in diameter at its widest point",
    price: 13,
  },
  {
    id: 2,
    image: "assets/wand-of-smiles.jpg",
    name: "Wand Of Smiles",
    description: "A magical wand, ideal companion for the mage.",
    material: "Wood",
    dimensions: "20 inches tall",
    price: 130,
  },
];
```

---

## 2. Genereer de productkaartjes

Loop over de array en bouw voor elk product de HTML van het kaartje op met JavaScript. Hergebruik daarvoor de HTML-structuur uit [deelopdracht 2](deelopdracht-2-opbouw-html-css.md).

Voeg de kaartjes toe aan het element dat de productlijst bevat. Verwijder daarna de _hardcoded_ kaartjes uit `shop.html`.

---

## 3. Laat het winkelmandje en de verlanglijst opnieuw werken

De knoppen **In winkelmandje** en het hartje werken waarschijnlijk niet meer. Pas je event handling aan zodat alles uit [deelopdracht 5](deelopdracht-5-winkelmandje-wishlist.md) opnieuw werkt. Er zijn twee manieren:

- **Via de positie:** haal alle knoppen op, loop erover en gebruik hun positie om het juiste product in `shopItems` te vinden.
- **Via een data-attribuut (aanbevolen):** zet de `id` van het product in de HTML met een [data-attribuut](https://developer.mozilla.org/en-US/docs/Web/HTML/How_to/Use_data_attributes), bv. `data-id="1"`. Je code hangt dan niet af van de volgorde in de array.

```javascript
button.addEventListener("click", () => {
  const id = Number(button.dataset.id);
  const item = shopItems.find((item) => item.id === id);
  // Voeg toe aan winkelmandje
});
```

> ⚠️ Volg de [coding guidelines](../coding-guidelines.md): gebruik **geen `onclick`-attributen** in de HTML.

---

## Tips

- Zorg dat je project **werkt** wanneer je het indient. Een stabiel project is beter dan een project met veel features dat crasht.
- Dien **tijdig** in. Je presenteert het eindresultaat op het einde van het semester.
