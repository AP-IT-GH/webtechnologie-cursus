# Starten met JavaScript in de browser

Om JavaScript in je browser uit te voeren, moet je eerst een .js-bestand koppelen aan een HTML-pagina. Dat doe je met het <script>-element binnen het <head>-gedeelte van je HTML.

Bv.
```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Javascript</title>
    <script src="./js/script.js" type="module"></script>
</head>
<body>
    <h1>JavaScript</h1>
</body>
</html>
```

In dit voorbeeld linken we een bestand script.js dat zich in een map js bevindt.
Het attribuut type="module" zorgt ervoor dat we gebruik kunnen maken van ES6 modules — een moderne manier om JavaScript-bestanden te structureren en functies, variabelen of objecten te delen tussen bestanden.

## Javascript modules

### Lokale vs globale variabelen

Wanneer je JavaScript gebruikt zonder modules, zijn alle variabelen die je definieert globaal.
Dat betekent dat ze toegankelijk zijn in alle andere scripts die aan dezelfde HTML-pagina zijn gekoppeld.
Dit kan problemen veroorzaken als verschillende bestanden toevallig dezelfde variabelenaam gebruiken.

Door modules te gebruiken (type="module"), worden variabelen en functies lokaal voor dat specifieke bestand.
Zo vermijd je naamconflicten en blijft je code beter georganiseerd.

### Defer automatisch toegepast

Een bijkomend voordeel van modules is dat ze automatisch worden uitgevoerd nadat de HTML-pagina volledig is geladen.
Je hoeft dus geen defer-attribuut toe te voegen aan het <script>-element wanneer je met modules werkt.

### Strict mode

Modules draaien standaard in strict mode.
Dat betekent dat je geen "use strict"; bovenaan je bestand hoeft te zetten. Strict mode helpt je om fouten sneller op te sporen en zorgt voor consistenter gedrag van je code.

Meer informatie over strict mode vind je op [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)

### Code importeren en exporteren

Met modules kun je code — zoals functies, objecten of variabelen — exporteren uit het ene bestand en importeren in een ander.
Zo kun je je code opdelen in logische onderdelen en eenvoudiger hergebruiken.

Voorbeeld

Bestand: utils.js


```js
// Exporteer een functie
export function sayHello(name) {
    console.log(`Hallo, ${name}!`);
}

// Exporteer ook een variabele
export const appName = "Mijn App";
```

Bestand: script.js

```js
// Importeer de functie en variabele uit utils.js
import { sayHello, appName } from "./utils.js";

console.log(`Welkom bij ${appName}`);
sayHello("Philippe");
```

Wanneer je deze bestanden linkt met type="module", worden de functies en variabelen uit utils.js beschikbaar in script.js, zonder dat ze globaal worden gedeeld met andere scripts.
