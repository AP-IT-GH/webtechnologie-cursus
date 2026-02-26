---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/CyMmymf8tiNQ4Ws9WmHV/javascript/basisconcepten/data-types
---

# data types

Je hebt in het onderdeel variabelen al twee verschillende datatypes gezien die je in JavaScript kan gebruiken: `string` en `number`. We zien in dit onderdeel er nog een aantal en gaan we dieper in op het gebruik ervan.

### number

In JavaScript is er geen verschil tussen gehele getallen (integers) en floating point getallen zoals in andere programmeertalen (bv. C#).

Je kan allerhande operaties uitvoeren op getallen, zoals vermenigvuldiging (\*), delen (/), optellen (+), aftrekken (-), en nog veel meer

Naast de gewone getallen die jullie allemaal al kennen heb je ook "speciale numerieke waarden" die tot dit data type behoren: `Infinity`, `-Infinity` en `NaN`

*   **Infinity** stelt het wiskundige ∞ symbool voor. Het is een speciale waarde die groter is dan alle mogelijke waarden. Hoe kleiner de absolute waarde van het getal waardoor je deelt, hoe groter het resultaat. In TypeScript levert dit:

    ```
    console.log(1/0); // Infinity
    ```

    Deze value zal je waarschijnlijk niet vaak tegenkomen, maar het is een indicatie dat je per ongeluk waarschijnlijk door 0 hebt gedeeld
*   **NaN** stelt voor dat de waarde het gevolg is van een rekenfout. Bijvoorbeeld als je een stuk tekst probeert te delen door getal

    ```
    console.log( "not a number" / 2 );
    ```

    Dus `NaN` zal je vaak tegen komen als je iets verkeerd gedaan hebt in je berekening. Je komt NaN ook vaak tegen tijdens het converteren van een datatype naar een ander. Hoe we dit doen zien we later in detail, maar hier heb je al een voorproefje:

    ```
    console.log(parseInt("1")) // 1
    console.log(parseInt("getal")); // NaN
    ```

De reden waarvoor dat ze gekozen hebben om deze getallen uit te drukken is vrij eenvoudig. De ontwerpers van JavaScript wilden niet dat de programma's crashen als je een wiskundige fout maakt zoals bij andere programmeertalen.

### string

Een string in JavaScript moet omringd zijn met quotes.

```js
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;
```

In JavaScript zijn er drie types van quotes

1. Double quotes: `"Hello"`.
2. Single quotes: `'Hello'`.
3. Backticks: `` `Hello` ``.

Double en single quotes zijn "eenvoudige" quotes. Er is geen verschil tussen de twee in JavaScript. Je mag dus kiezen om single of double quotes te gebruiken. Zorg er wel voor dat je deze keuze wel over heel je project hetzelfde houdt.

De derde soort quotes is een speciaal soort. Ze laten ons toe om variabelen en expressies in strings te plaatsen door ze te omringen door `${...}`

```javascript
let name = "Andie";

// met een variable
console.log( `Hello, ${name}!` ); // Hello, Andie!

// met een expression
console.log( `the result is ${1 + 2}` ); // the result is 3
```

Alles wat tussen de `${...}` staat wordt geëvalueerd en het resultaat wordt deel van de string.

Je kan eender welke variabele omzetten van een ander datatype omzetten naar een string aan de hand van de `toString()` methode.

```javascript
let number = 4;
let str = number.toString();
```

### boolean

Het boolean type heeft maar twee verschillende waarden: `true` en `false`

Het type wordt vaak gebruikt om ja/nee waarden in op te slagen. `true` betekent ja of waar. En `false` betekent nee of niet waar.

```javascript
let isLightOn = true;
```

De bovenstaande code zou een variabele kunnen voorstellen die aangeeft of het licht aan is of niet.

Boolean waarden kunnen ook afkomstig zijn uit het resultaat van vergelijkingen:

```javascript
let isGroterDan = 4 > 1;
console.log(isGroterDan) // true
```

Vergelijkingen of comparisons zien we later in detail in een verder hoofdstuk.

### null

De speciale `null` waarde hoort niet thuis in een van de types die hierboven zijn beschreven.

Het vormt een apart type dat alleen de `null` value bevat.

```javascript
let collegeDegree = null;
```

Het is een speciale waarde die "niets" of"leeg" voorstelt. De code hierboven zegt gewoon dat de gebruiker bijvoorbeeld geen `collegeDegree` heeft. Dus bijvoorbeeld zit deze gebruiker nog in het middelbaar en heeft dus geen diploma.

### undefined

Net zoals `null` is `undefined` een waarde die op zichzelf staat met zijn eigen type. De betekenis is zeer gelijkaardig maar toch iets anders. Het zegt dat de waarde nog niet is toegekend of niet van toepassing kan zijn in deze context.

```javascript
let message;
console.log(message); // undefined
```

We hebben hier boven dus nog geen waarde toegekend aan de variabele `message`

### object en array

Er zijn ook nog types die wie complexe types noemen. Hier behoren de objecten en de arrays. We gaan hier op dit moment nog niet verder op in omdat dit een te complex gegeven is om nu al te behandelen. Deze types worden nog duidelijk in een verder hoofdstuk.
