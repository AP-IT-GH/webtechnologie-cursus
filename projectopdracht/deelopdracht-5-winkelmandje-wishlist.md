# Deelopdracht 5 - Winkelmandje en Wishlist

In deze opdracht ga je de functionaliteit van de knop "In winkelmandje" en van het hartje (wishlist) implementeren, zodat gebruikers items kunnen toevoegen aan hun winkelmandje en verlanglijstje. Dat gebeurt enkel op de shoppagina: op de detailpagina's staan geen knoppen om iets toe te voegen. Je webshop moet een interactief geheel worden waarin de geselecteerde items in de juiste lijsten worden opgeslagen en weergegeven.

<figure><img src="wireframes/mobile-shop.png" alt="Mobiele wireframe van de shoppagina" width="300"><figcaption>Het winkelmandje en de wishlist staan bovenaan de shoppagina</figcaption></figure>

![Productkaartje met een hartje en een teller voor het aantal](wireframes/mobile-shop-product-card.png)

Zorg ervoor dat je eerst de basisfunctionaliteit opzet. Pas wanneer alles goed werkt, kun je de extra functies (bonus-features) toevoegen.

---

## Wat moet je doen?

### 1. **Winkelmandje**

![Wireframe van het winkelmandje](wireframes/mobile-shop-cart.png)

Het winkelmandje is de lijst met producten die de gebruiker heeft toegevoegd om te kopen. Het staat bovenaan de shoppagina. Hier zijn de vereiste functionaliteiten:

#### Must-have functionaliteiten:
- **Product toevoegen aan winkelmandje**: Wanneer een gebruiker op de knop "In winkelmandje" klikt, moet het desbetreffende product (met een kleine afbeelding, naam en prijs) worden toegevoegd aan het winkelmandje.
- **Teller op het productkaartje**: Na het toevoegen verandert de knop "In winkelmandje" in een teller met een −-knop, het aantal en een +-knop. Met + voeg je nog een exemplaar toe, met − haal je er een weg. Zakt de teller naar 0, dan verdwijnt het product uit het winkelmandje en verschijnt de knop "In winkelmandje" opnieuw.
- **Aantal per product**: In het winkelmandje staat elk product maar één keer, met het aantal exemplaren ernaast (bv. ×3). Het subtotaal houdt rekening met dat aantal.
- **Aantal producten**: Naast de titel van het winkelmandje staat een bolletje met het aantal producten in het winkelmandje. Dit aantal moet automatisch worden bijgewerkt telkens wanneer er een item wordt toegevoegd of verwijderd.
- **Subtotaal bijwerken**: Het subtotaal onderaan het winkelmandje moet automatisch worden geüpdatet telkens wanneer er een item wordt toegevoegd of verwijderd.
- **Verwijderen van producten**: Naast elk product in het winkelmandje staat een klein ×-knopje. Een klik erop verwijdert de volledige regel, met alle exemplaren van dat product, uit het winkelmandje. Het subtotaal wordt automatisch aangepast, en op het productkaartje verschijnt opnieuw de knop "In winkelmandje".
- **Leeg winkelmandje**: Zit er niets in het winkelmandje? Toon dan in plaats van de items één regel tekst, bv. "Je winkelmandje is leeg."
- **Knop "Afrekenen"**: Onder het subtotaal staat een knop "Afrekenen". Die opent de pop-up om de bestelling te bevestigen, zie onderdeel 3 hieronder.

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

### 3. **Afrekenen (verplichte extra)**

<figure><img src="wireframes/desktop-shop.png" alt="Desktop-wireframe van de shoppagina met de pop-up om de bestelling te bevestigen"><figcaption>De pop-up "Bestelling bevestigen" staat rechtsonder in de desktop-wireframe van de shoppagina</figcaption></figure>

Dit onderdeel is een extra, maar het is **niet optioneel**: je moet het implementeren.

- **Pop-up**: Een klik op de knop "Afrekenen" opent een pop-up (_modal_) met de titel "Bestelling bevestigen" en een ×-knopje om de pop-up te sluiten.
- **Overzicht**: In de pop-up staat een overzicht van de producten in het winkelmandje (naam, aantal en prijs), met daaronder de totaalprijs.
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
