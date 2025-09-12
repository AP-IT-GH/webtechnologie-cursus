# Deelopdracht 6 - Dynamische content (finale)

In de echte wereld beheren webshop-eigenaars hun items niet via HTML. Nieuwe items toevoegen, de voorraad aanpassen, beschrijvingen wijzigen, promo’s toevoegen... zou te veel tijd in beslag nemen en vereist telkens een developer. In plaats daarvan gebruiken ze vaak een Content Management Systeem (_CMS_) waarmee ze met enkele kliks aanpassingen kunnen doen die opgeslagen worden in een database. De HTML wordt dan automatisch gegenereerd op basis van deze data.

In deze laatste opdracht ga je de bestaande _hardcoded_ shopitems vervangen door items die in JavaScript worden beheerd en dynamisch weergegeven worden.  
Deze opdracht vereist enige herwerking (_refactoring_) van je bestaande project. Zorg voor een reservekopie, voor het geval er iets misgaat. Overweeg ook om je project op GitHub te plaatsen.

---

## Wat moet je doen?

### 1. **Zet de shop items om in een array van objecten**

Overloop je shopitems. Elk item heeft een foto, titel, beschrijving, enkele productspecifieke eigenschappen en een prijs.

Bouw een array van objecten waarbij de data van elk item in een object wordt bijgehouden. Geef elk item een unieke ID: dat maakt het straks gemakkelijker om specifieke items op te zoeken.

Voorbeeld:

```javascript
const shopItems = [
  {
    id: 1,
    image: "../assets/shopItems/blue_alchemy_jug.jpg",
    name: "Blue Alchemy Jug",
    description:
      "The Magical Blue Alchemy Jug is a rare and enchanting artifact, shimmering with an ethereal, deep sapphire glow.",
    material: "Enchanted crystal, reinforced with rare alchemical alloys",
    dimensions: "10 inches tall, 5 inches in diameter at its widest point",
    price: 13,
  },
  {
    id: 2,
    image: "../assets/shopItems/wand_of_smiles.jpg",
    name: "Wand Of Smiles",
    description: "A magical wand, ideal companion for the mage.",
    material: "Wood",
    dimensions: "20 inches tall",
    price: 130,
  },
];
```

---

### 2. **HTML voor shopitems opbouwen**

Loop over de array van objecten en bouw voor elk item de HTML op. Je kunt hiervoor de HTML uit deelopdracht 2 hergebruiken.  
In plaats van de gegevens _hardcoded_ in de HTML te zetten, bouw je nu dynamisch HTML op met JavaScript.

---

### 3. **Shopitems toevoegen aan de DOM**

Voeg de gegenereerde HTML van stap 2 toe aan het juiste DOM-element (bijvoorbeeld de `article-section`).

---

### 4. **Zorg dat het winkelmandje en de wishlist opnieuw werken**

De knoppen "voeg toe aan winkelmand" en "wishlist" zullen waarschijnlijk niet meer werken.  
Update de eventhandling zodat deze opnieuw functioneren.

**Aanpakoptie 1**:  
Haal in één keer alle buttons op via JavaScript, loop erover, en gebruik hun positie in de array om het juiste item op te zoeken in de `shopItems` array.

**Aanpakoptie 2 (aanbevolen)**:  
Voeg de item-ID toe aan de HTML via een [data-attribuut](https://developer.mozilla.org/en-US/docs/Web/HTML/How_to/Use_data_attributes).  
Dat maakt je code robuuster, omdat de volgorde in de array dan geen invloed heeft op de logica.

Voorbeeld:

```javascript
button.addEventListener("click", (e) => {
  const id = parseInt(e.target.dataset.id);
  const item = shopItems.find((item) => item.id === id);
  // Voeg toe aan winkelmandje
});
```

> ⚠️ Gebruik bij voorkeur **geen `onClick`-attributen** in de HTML.

---

## Bonusopdrachten (voor gevorderden)

Wil je jezelf extra uitdagen of indruk maken? Dan kun je deze extra features proberen:

- **ShopItems opslaan in JSON**: sla je `shopItems` array op in een `.json`-bestand en importeer het in je JavaScript. Zo pas je _separation of concerns_ beter toe.
- **ShopItems ophalen met `fetch`**: upload het JSON-bestand naar een publieke GitHub repository en haal het op via `fetch`. Zorg voor foutafhandeling.
- **Detailpagina’s dynamisch opbouwen**: toon een detailpagina voor elk item door het ID in de URL mee te geven (`itemDetail.html?id=2`) en laad dan het juiste item in via JavaScript.

Je mag ook altijd zelf bonusfunctionaliteit verzinnen!

---

## Tips

- Zet je project op GitHub als je dat nog niet gedaan hebt. Zo kun je terugkeren naar eerdere versies als het fout loopt.
- Zorg dat je project **werkt** bij het indienen. Een stabiel werkend project is beter dan een project met veel features dat crasht.
- Dien je project **tijdig** in. Je zal het eindresultaat moeten presenteren op het einde van het semester.
