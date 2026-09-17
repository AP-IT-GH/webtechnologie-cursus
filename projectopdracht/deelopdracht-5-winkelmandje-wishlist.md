# Deelopdracht 5 - Winkelmandje en verlanglijst

In deze opdracht maak je de shoppagina interactief. Gebruikers kunnen producten toevoegen aan hun winkelmandje, het aantal exemplaren aanpassen, producten bewaren in hun verlanglijst en een bestelling bevestigen. Dat gebeurt enkel op de shoppagina: op de detailpagina's staan geen knoppen om iets toe te voegen.

<figure><img src="wireframes/mobile-shop.png" alt="Mobiele wireframe van de shoppagina" width="300"><figcaption>Het winkelmandje, de bevestigingsdialoog en de verlanglijst staan boven de zes producten</figcaption></figure>

![Productkaartje met een hartje en een teller voor het aantal](wireframes/mobile-shop-product-card.png)

{% hint style="warning" %}
Alle elementen, toestanden en interacties die je op de wireframes ziet, zijn **verplicht**. De kleine grijze notities leggen het gedrag uit en hoef je niet letterlijk op je webshop te plaatsen. Er zijn voor deze deelopdracht geen bonus-features.
{% endhint %}

---

## Wat moet je doen?

### 1. Producten toevoegen en aantallen aanpassen

Elk van de zes productkaartjes bevat een hartje en een knop **In winkelmandje**.

- Wanneer de gebruiker op **In winkelmandje** klikt, voeg je één exemplaar van dat product toe aan het winkelmandje.
- Daarna verandert de knop op het productkaartje in een teller met een **−-knop**, het huidige aantal en een **+-knop**.
- Met **+** voeg je één exemplaar toe. Met **−** verwijder je één exemplaar.
- Zakt de teller naar 0, dan verdwijnt het product uit het winkelmandje en verschijnt op het productkaartje opnieuw de knop **In winkelmandje**.
- De teller op het productkaartje en het aantal in het winkelmandje blijven altijd gelijk.

### 2. Winkelmandje

![Wireframe van het winkelmandje](wireframes/mobile-shop-cart.png)

Het winkelmandje staat bovenaan de mobiele shoppagina en rechts van de producten op desktop.

- Elk gekozen product staat één keer in de lijst, met een kleine afbeelding, de naam, de prijs en het gekozen aantal, bijvoorbeeld ×3.
- Het bolletje naast de titel toont het totale aantal exemplaren in het winkelmandje. Dit wordt automatisch bijgewerkt na elke wijziging.
- Het **subtotaal** is de som van de prijs per stuk maal het gekozen aantal van elk product. Dit wordt automatisch opnieuw berekend.
- Naast elke productregel staat een **×-knop**. Daarmee verwijder je meteen alle exemplaren van dat product. Op het bijbehorende productkaartje verschijnt opnieuw de knop **In winkelmandje**.
- Is het winkelmandje leeg, dan vervang je de productregels door één korte melding, bijvoorbeeld "Je winkelmandje is leeg."
- Onder het subtotaal staat de knop **Afrekenen**. Die opent de bevestigingsdialoog uit onderdeel 4.

### 3. Verlanglijst

![Wireframe van de verlanglijst](wireframes/mobile-shop-wishlist.png)

De verlanglijst staat onder het winkelmandje.

- Een klik op het hartje van een product voegt het product toe aan de verlanglijst en toont het hartje als actief of ingekleurd.
- Het product verschijnt als een verwijderbare _chip_ met de productnaam in de verlanglijst.
- Een tweede klik op hetzelfde hartje verwijdert het product uit de verlanglijst en maakt het hartje opnieuw leeg.
- Elke chip heeft een **×-knop**. Daarmee verwijder je het product eveneens uit de verlanglijst en maak je het bijbehorende hartje opnieuw leeg.
- De toestand van het hartje en de inhoud van de verlanglijst blijven altijd gelijk.

### 4. Bestelling bevestigen

<figure><img src="wireframes/desktop-shop.png" alt="Desktop-wireframe van de shoppagina met de dialoog om de bestelling te bevestigen"><figcaption>De dialoog "Bestelling bevestigen" staat rechts onderaan in de desktop-wireframe</figcaption></figure>

De knop **Afrekenen** opent een modale dialoog boven de pagina. De rest van de pagina krijgt daarbij een verduisterde achtergrond.

- De dialoog heeft als titel **Bestelling bevestigen** en bevat een **×-knop** om hem zonder bestelling te sluiten.
- Toon een overzicht van alle producten in het winkelmandje, met per product de naam, het aantal en de prijs.
- Toon onder het overzicht de totale prijs van de bestelling.
- Onderaan staat de knop **Bestelling plaatsen**.
- Na een klik op die knop toon je in de dialoog een bevestiging, bijvoorbeeld "✓ Bestelling geplaatst".
- Sluit de dialoog daarna automatisch. Hiervoor kun je `setTimeout` gebruiken.

### 5. Mobiel en desktop

Alle functionaliteiten werken in beide lay-outs. De inhoud en werking blijven hetzelfde wanneer de pagina door een media-query van de mobiele naar de desktopopbouw overschakelt.

---

## Tips

- Bouw de functionaliteit stap voor stap op en controleer na elke actie of alle bijbehorende aantallen, prijzen en knoppen mee veranderen.
- Gebruik een lijst (`ul`) voor de productregels in het winkelmandje en voor de chips in de verlanglijst.
- Bewaar per product één duidelijke toestand met minstens de identifier, prijs, het gekozen aantal en of het product in de verlanglijst staat.
- Test ook de overgang naar een leeg winkelmandje, het verwijderen via een ×-knop en het opnieuw toevoegen van hetzelfde product.
