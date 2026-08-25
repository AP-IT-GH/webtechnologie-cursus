# JSON

JSON is een afkorting voor `JavaScript Object Notation`. Dit is een tekst gebaseerd formaat om data te kunnen uitwisselen tussen programma's. Het voordeel van JSON is dat het ook heel eenvoudig is opgesteld zodat het ook leesbaar is voor mensen. Dit in tegenstelling tot bijvoorbeeld een binair formaat dat helemaal niet leesbaar is door mensen.

Eigenlijk lijkt JSON heel hard op de manier dat we objecten hebben aangemaakt in het onderdeel van objecten.

Je kan een JSON bijvoorbeeld in een bestand opslaan en ergens op je filesysteem plaatsen en later terug met een programma oproepen. Of via een server versturen naar een gebruiker.

### JSON-object

Hieronder een voorbeeld van een JSON-bestand met 1 object. We slagen dit bestand op als `dinosaur.json` op dezelfde plaats waar je andere assets zou opslaan.

```json
{
    "naam": "Stegosaurus",
    "tijdperk": "Jurassic",
    "dieet": "Omnivoor",
    "regios": ["Noord America", "Europa"],
    "hoogte": 14,
    "lengte": 29,
    "gewicht": 6000
}
```

* Je merkt op dat het er iets anders uitziet als gewone JavaScript code. Zo worden de keys van de properties ook **tussen dubbele quotes** geplaatst.
* In JSON bestanden mag je enkel gebruik maken van **dubbele** quotes. Om na te gaan of je JSON bestand valid is kan je bijvoorbeeld een online tool zoals [https://codebeautify.org/jsonviewer](https://codebeautify.org/jsonviewer) gebruiken.

![JSON viewer screenshot](../../.gitbook/assets/2021-11-23%2011_23_16-Best%20JSON%20Viewer%20and%20JSON%20Beautifier%20Online.png)

Even een overzicht van wat dit JSON bestand bevat:

* 1 object met 1 dinosaurus:
  * een naam
  * een tijdperk
  * een dieet
  * de regio('s) waar de dinosaurus in leefde
  * de hoogte
  * de lengte
  * het gewicht

**We kunnen dit JSON object als volgt visualiseren:**

![Visualisatie van JSON-object](../../.gitbook/assets/image%20(25).png)

## inlezen van JSON

Als je dit object vanuit een file wil inlezen kan je gebruik maken van het `import` keyword.

```js
import dinosaur from "../assets/json/dinosaur.json" with { type: 'json' };
```

Als we op deze manier een JSON willen inladen, krijgen we een foutmelding: `Uncaught SyntaxError: Cannot use import statement outside a module`. Deze melding kunnen we voorkomen door in ons HTML-bestand het script als module te bestempelen:

```html
<script src="js/script.js" type="module" defer></script>
```

Daarna kan je gewoon de eigenschappen aan de hand van de dot notatie van dit JSON-bestand opvragen:

```js
console.log(`Naam: ${dinosaur.naam}`);
console.log(`Tijdperk: ${dinosaur.tijdperk}`);
console.log(`Dieet: ${dinosaur.dieet}`);
console.log(`Hoogte: ${dinosaur.hoogte}`);
console.log(`Lengte: ${dinosaur.lengte}`);
console.log(`Gewicht: ${dinosaur.gewicht}`);

```

Willen we ook de regios afprinten op het scherm dan gaan we een for-lus nodig hebben want een dinosaurus kan in meerdere regios voorkomen en is dus een array van strings. Je kan dit doen aan de hand van een gewone for-lus of een for...of-lus.

### for-lus\*\*

```js
console.log(`Regios: `);

for (let i=0; i<dinosaur.regios.length; i++) {
    console.log(`\t${dinosaur.regios[i]}`);
}
```

### for...of-lus

```js
console.log(`Regios: `);

for (let regio of dinosaur.regios) {
    console.log(`\t${regio}`);
}
```

Het afprinten van 1 dinosaurus zouden we eventueel ook in een aparte functie kunnen steken. Het is zoveel mogelijk de bedoeling om herbruikbare functionaliteiten in functies te plaatsen. We noemen deze functie `printDinosaur` omdat dit exact beschrijft wat deze functie gaat doen.

```js
function printDinosaur(dinosaur) {
    console.log(`Naam: ${dinosaur.naam}`);
    console.log(`Tijdperk: ${dinosaur.tijdperk}`);
    console.log(`Dieet: ${dinosaur.dieet}`);
    console.log(`Regios: `);
    for (let regio of dinosaur.regios) {
        console.log(`\t${regio}`);
    }
    console.log(`Hoogte: ${dinosaur.hoogte}`);
    console.log(`Lengte: ${dinosaur.lengte}`);
    console.log(`Gewicht: ${dinosaur.gewicht}`);
    
    console.log("-".repeat(50));
}
```
