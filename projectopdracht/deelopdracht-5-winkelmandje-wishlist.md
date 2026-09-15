# Deelopdracht 5 - Winkelmandje en Wishlist

In deze opdracht ga je de functionaliteit van de knoppen "Add to Cart" (toevoegen aan winkelmandje) en "Wishlist" (hartje) implementeren, zodat gebruikers items kunnen toevoegen aan hun winkelmandje en verlanglijstje. Dit doe je enkel op de shoppagina: de knoppen op de detailpagina's hoeven niet te werken. Je webshop moet een interactief geheel worden waarin de geselecteerde items in de juiste lijsten worden opgeslagen en weergegeven.

<figure><img src="wireframes/mobile-shop.png" alt="Mobiele wireframe van de shoppagina" width="300"><figcaption>Het winkelmandje en de wishlist staan bovenaan de shoppagina</figcaption></figure>

![Productkaartje met een hartje en een "Add to Cart"-knop](wireframes/mobile-shop-product-card.png)

Zorg ervoor dat je eerst de basisfunctionaliteit opzet. Pas wanneer alles goed werkt, kun je de extra functies (bonus-features) toevoegen.

---

## Wat moet je doen?

### 1. **Winkelmandje**

![Wireframe van het winkelmandje](wireframes/mobile-shop-cart.png)

Het winkelmandje is de lijst met producten die de gebruiker heeft toegevoegd om te kopen. Het staat bovenaan de shoppagina. Hier zijn de vereiste functionaliteiten:

#### Must-have functionaliteiten:
- **Product toevoegen aan winkelmandje**: Wanneer een gebruiker op de "Add to Cart" knop klikt, moet het desbetreffende product (met een kleine afbeelding, naam en prijs) worden toegevoegd aan het winkelmandje.
- **Aantal producten**: Naast de titel van het winkelmandje staat een bolletje met het aantal producten in het winkelmandje. Dit aantal moet automatisch worden bijgewerkt telkens wanneer er een item wordt toegevoegd of verwijderd.
- **Subtotaal bijwerken**: Het subtotaal onderaan het winkelmandje moet automatisch worden geüpdatet telkens wanneer er een item wordt toegevoegd.
- **Verwijderen van producten**: Naast elk item in het winkelmandje staat een klein ×-knopje. Dit stelt de gebruiker in staat om individuele items uit het winkelmandje te verwijderen. Ook hier moet het subtotaal automatisch worden aangepast.
- **Aantal van hetzelfde product**: Als een gebruiker hetzelfde item meerdere keren toevoegt aan het winkelmandje, moeten de items worden samengevoegd. De naam van het product moet het aantal weergeven, bijvoorbeeld: "Wand Of Smiles (3)", en de prijs per stuk en het subtotaal moeten correct worden aangepast.
- **Leeg winkelmandje**: Zit er niets in het winkelmandje? Toon dan in plaats van de items één regel tekst, bv. "Je winkelmandje is leeg."
- **Checkout-knop**: Onder het subtotaal staat een checkout-knop. Die opent de checkout-pop-up, zie onderdeel 3 hieronder.

#### Bonus-features:
- **Opsplitsing van de totaalprijs**: Toon de netto-prijs, de BTW (21% van de netto-prijs) en de totaalprijs. De prijs per stuk moet inclusief BTW zijn.
- **Bevestigingsbericht op de shoppagina**: Wanneer een gebruiker op de shoppagina een product aan het winkelmandje toevoegt, moet er een kort bevestigingsbericht worden getoond. Dit kun je zelf ontwerpen, of gebruik maken van een externe bibliotheek zoals [Toastify](https://apvarun.github.io/toastify-js/#).
- **Winkelmandje leegmaken**: Voeg een knop toe die de gebruiker in staat stelt om het volledige winkelmandje in één keer leeg te maken.

---

### 2. **Wishlist**

![Wireframe van de wishlist](wireframes/mobile-shop-wishlist.png)

De wishlist is een lijst van producten die de gebruiker graag zou willen kopen, maar nog niet aan het winkelmandje heeft toegevoegd. De wishlist is vooral handig voor gebruikers die willen rondkijken of later kopen. Het is ook waardevol voor marketingdoeleinden. De wishlist staat onder het winkelmandje op de shoppagina.

#### Must-have functionaliteiten:
- **Item toevoegen of verwijderen uit de wishlist**: Wanneer een gebruiker op het hartje-icoon klikt, moet het hartje ingekleurd worden (de toggle functionaliteit) en verschijnt het product als een _chip_ in de wishlist: een klein, afgerond label met de naam van het product. Klikt de gebruiker opnieuw, dan wordt het hartje weer leeg en verdwijnt de chip uit de wishlist.
- **Verwijderen via de wishlist**: Elke chip heeft een klein ×-knopje. Klikt de gebruiker erop, dan verdwijnt het item uit de wishlist en wordt het hartje bij dat product weer leeg.

#### Bonus-features:
- **Bevestigingsbericht voor wishlist**: Toon een kort bevestigingsbericht wanneer een item wordt toegevoegd of verwijderd uit de wishlist.
- **Verplaats items van wishlist naar winkelmandje**: Voeg een knop toe die alle producten in de wishlist in één keer toevoegt aan het winkelmandje.

---

### 3. **Checkout (verplichte extra)**

<figure><img src="wireframes/desktop-shop.png" alt="Desktop-wireframe van de shoppagina met de checkout-pop-up"><figcaption>De checkout-pop-up staat rechtsonder in de desktop-wireframe van de shoppagina</figcaption></figure>

Dit onderdeel is een extra, maar het is **niet optioneel**: je moet het implementeren.

- **Checkout-pop-up**: Een klik op de checkout-knop opent een pop-up (_modal_) met de titel "Bestelling bevestigen" en een ×-knopje om de pop-up te sluiten.
- **Overzicht**: In de pop-up staat een overzicht van de producten in het winkelmandje (naam en prijs), met daaronder de totaalprijs.
- **Bestelling plaatsen**: Onderaan de pop-up staat een knop "Bestelling plaatsen". Na een klik verschijnt in de pop-up een bevestiging, bv. "✓ Bestelling bevestigd". Daarna sluit de pop-up na enkele seconden automatisch (tip: gebruik `setTimeout`).

---

### 4. **Algemene Bonus-features**

Wil je jezelf extra uitdagen en indruk maken? Dan kun je de volgende bonus-features implementeren:
- **Animaties bij toevoegen of verwijderen**: Voeg subtiele animaties toe bij het toevoegen of verwijderen van items in de wishlist of het winkelmandje om de interactie visueel aantrekkelijker te maken.

Je mag ook altijd zelf extra bonus functionaliteiten verzinnen!

---

## Tips:
- Begin met de basisfunctionaliteit van het winkelmandje en de wishlist.
- Gebruik een lijst (`ul`) voor de items in je winkelmandje en voor de chips in je wishlist.
- Test uitgebreid en regelmatig om te zorgen dat alles goed werkt en de prijzen correct worden berekend.
- Zorg ervoor dat je winkelmandje en wishlist werkt op mobiel én desktop.
