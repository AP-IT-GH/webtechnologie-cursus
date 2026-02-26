---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/CyMmymf8tiNQ4Ws9WmHV/javascript/objecten/json-en-arrays
---

# JSON en arrays

Je kan uiteraard in een JSON bestand ook een array van objecten plaatsen. Je kan dit herkennen aan de vierkante haken vooraan in het bestand.

```json
[
    {
      "naam": "Velociraptor",
      "tijdperk": "Krijt",
      "dieet": "Carnivoor",
      "regios": ["Asia"],
      "hoogte": 2,
      "lengte": 6,
      "gewicht": 33
    },
    {
      "naam": "Triceratops",
      "tijdperk": "Krijt",
      "dieet": "Herbivoor",
      "regios": ["Noord America"],
      "hoogte": 10,
      "lengte": 33,
      "gewicht": 26800
    },
    {
      "naam": "Tyrannosaurus Rex",
      "tijdperk": "Krijt",
      "dieet": "Carnivoor",
      "regios": ["Noord America"],
      "hoogte": 13,
      "lengte": 39,
      "gewicht": 13310
    },
    {
      "naam": "Stegosaurus",
      "tijdperk": "Jura",
      "dieet": "Omnivorous",
      "regios": ["Noord America", "Europa"],
      "hoogte": 14,
      "lengte": 29,
      "gewicht": 6000
    },
    {
      "naam": "Iguanodon",
      "tijdperk": "Krijt",
      "dieet": "Herbivoor",
      "regios": ["Noord America", "Europa"],
      "hoogte": 16,
      "lengte": 33,
      "gewicht": 11000
    }
  ]
```

We visualiseren deze JSON als volgt:

![Visualisatie JSON array van objecten](<../../.gitbook/assets/image (9).png>)

Het inlezen van deze JSON file gebeurd op identiek dezelfde manier als hiervoor, met het enige verschil dat we nu een array van `Dinosaur`-objecten hebben.

```js
import dinosaurs from "../assets/json/dinosaurs.json" with { type: 'json' };
```

Willen we nu alle namen van alle dinosaurussen afprinten op het scherm kunnen we dit als volgt doen:

```js
for (let dinosaur of dinosaurs) {
    console.log(dinosaur.naam);
}
```

We zouden ook alle informatie kunnen afprinten van de dinosaurs.

```js
for (let dinosaur of dinosaurs) {
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

of we gebruiken hier rechstreeks de `printDinosaur` functie

```js
for (let dinosaur of dinosaurs) {
    printDinosaur(dinosaur);
}
```

## array als property

Vaak bevind de array zich niet als buitenste element van het JSON object maar als property van een "root object". We noemen dit het root object omdat het de bovenste element is van de boomstructuur.

Hier zie je een voorbeeld van zo'n json bestand:

```json
{
  "dinosaurs": [
    {
      "naam": "Velociraptor",
      "tijdperk": "Krijt",
      "dieet": "Carnivoor",
      "regios": [
        "Asia"
      ],
      "hoogte": 2,
      "lengte": 6,
      "gewicht": 33
    },
    {
      "naam": "Triceratops",
      "tijdperk": "Krijt",
      "dieet": "Herbivoor",
      "regios": [
        "Noord America"
      ],
      "hoogte": 10,
      "lengte": 33,
      "gewicht": 26800
    },
    {
      "naam": "Tyrannosaurus Rex",
      "tijdperk": "Krijt",
      "dieet": "Carnivoor",
      "regios": [
        "Noord America"
      ],
      "hoogte": 13,
      "lengte": 39,
      "gewicht": 13310
    },
    {
      "naam": "Stegosaurus",
      "tijdperk": "Jura",
      "dieet": "Omnivorous",
      "regios": [
        "Noord America",
        "Europa"
      ],
      "hoogte": 14,
      "lengte": 29,
      "gewicht": 6000
    },
    {
      "naam": "Iguanodon",
      "tijdperk": "Krijt",
      "dieet": "Herbivoor",
      "regios": [
        "Noord America",
        "Europa"
      ],
      "hoogte": 16,
      "lengte": 33,
      "gewicht": 11000
    }
  ]
}
```

![Visualisatie van root object met dinosaurs property](<../../.gitbook/assets/image (15).png>)

Je kan dit ook visualiseren aan de hand van de [https://jsonformatter.org/json-viewer](https://jsonformatter.org/json-viewer) tool:

![JSON viewer screenshot](<../../.gitbook/assets/image (10).png>)

We kunnen ook dit JSON-bestand als volgt inlezen:

```js
import rootObject from '../assets/json/dinosaurs-alt.json' with { type: 'json' };
```

We kunnen nu aan de hand van de dot-notatie via het rootObject aan de dinosaurs array geraken:

```js
for (let dinosaur of rootObject.dinosaurs) {
    printDinosaur(dinosaur);
}
```
