# strings

In JavaScript worden alle soorten tekst opgeslagen als strings. Er is geen apart type voor de aparte karakters.

### Quotes

Even een herhaling van alle soorten quotes die er bestaan in JavaScript.

Strings kunnen ingesloten zijn door ofwel single quotes ('), double quotes (") of backticks (\`)

```javascript
let single = 'single-quoted';
let double = "double-quoted";
let backticks = `backticks`;
```

De single en double quotes zijn in essentie hetzelfde. Backticks laten ons toe om expressies in de string te gebruiken, door ze in de `${}` constructie te plaatsen:

```javascript
console.log(`1 + 2 = ${1+2}`);
```

Nog een voordeel van backticks te gebruiken dat ze het toelaten om een string die bestaat uit verschillende lijnen eenvoudig te kunnen uitdrukken:

```javascript
let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

console.log(guestList);
```

Dit zou niet werken met single of double quotes.

### speciale karakters

Het is nog wel mogelijk om strings op meerdere lijnen te kunnen zetten. Je kan hiervoor een "newline character" gebruiken. Dit wordt geschreven als en stelt een nieuwe lijn voor (line break).

#### new lines

```javascript
let guestList = "Guests\n* John\n*Pete\n*Mary";

console.log(guestList);
```

Bijvoorbeeld: deze twee lijnen zijn identiek, maar op een andere manier geschreven.

```javascript
let str1 = "Hello\nWorld"; 

let str2 = `Hello
World`;

console.log(str1 == str2); // true
```

#### tabs

Een nog vaak gebruikt karakter in console applicaties is het karakter of het tab karakter. Dit laat toe een stuk witruimte toe te voegen tussen twee stukken tekst. Bijvoorbeeld:

```javascript
let str1 = "Voor de tab\tNa de tab"; 

console.log(str1);
```

#### escaping

Omdat backslash of `\` gebruikt wordt om aan te geven dat iets een speciaal karakter is, is het niet mogelijk om zomaar \ te gebruiken in je strings. Bijvoorbeeld:

```javascript
let str1 = "\test123"; 

console.log(str1);
```

**Waarom?** Het \t karakter zal gezien worden als een tab karakter en dus getoond worden als een tab. Willen we toch de \ laten zien moeten we deze voorafgaan door nog een \\

```javascript
let str1 = "\\test123"; 

console.log(str1);
```

Hetzelfde is geldig voor karakters zoals ' en " omdat deze worden aanzien als het einde van een string. Wil je toch deze gebruiken in je strings moet je ze ook laten vooraf gaan door een backslash (\\)

```javascript
let str1 = "\"Hello World\"";
let str2 = '\'Hello World\'';

console.log(str1);
console.log(str2);
```

wat je ook kan doen is de quotes van je string slim kiezen zodat er geen conflicten bestaan:

```javascript
let str1 = '"Hello World"';
let str2 = "'Hello World'";
```

### string lengte

Je kan de lengte van een string bepalen aan de hand van de `length` property:

```js
let str1 = "Hello";
console.log(str1.length);
```

dit zal 5 uitprinten op je scherm.

### substring

We kunnen een **substring** (= deel van een string) opvragen door de index van het eerste symbool en de index van het laatste symbool mee te geven als volgt:

```javascript
let str1 = "Hallo, wereld";
console.log(str1.substring(4,5)); // toont o
```

{% hint style="warning" %}
Er bestond ook een **substr** methode voor strings. Deze werkt iets anders maar is achterhaald.
{% endhint %}

omdat je de karakters tussen 4 en 5 gebruikt om de substring te maken.

Zie dat je deze niet perongeluk omwisselt!

### indexOf

Als we willen weten waar een bepaalde substring in een string voorkomt, gebruiken we `indexOf`

```javascript
console.log("Javascript is cooler!".indexOf("cool"));  // geeft 14
console.log("Javascript is cooler!".indexOf("z"));     // geeft -1
console.log("Javascript is cooler!".indexOf("Cool"));  // geeft -1 want cool is niet hetzelfde als Cool
```

### replace

```javascript
console.log("Typescript is cooler!".replace("Typescript","Javascript"));
// Javascript is cooler!
```

Komt de string meerdere keren voor zal deze maar 1 keer worden vervangen.

```javascript
console.log("Typescript is cooler! Typescript rocks!".replace("Typescript","Javascript"));
// Javascript is cooler! Typescript rocks!
```

Wil je dit toch doen? Dan kan je dit op de volgende manier doen:

```javascript
console.log("Typescript is cooler! Typescript rocks!".replace(/Typescript/g,"Javascript"));
// Javascript is cooler! Javascript rocks!
```

Je hoeft de achterliggende betekenis hiervan niet te begrijpen. Je moet deze enkel kunnen toepassen in de oefeningen.

### repeat

Met de repeat functie kan je een bepaalde string meerdere keren achter elkaar concateneren. Zo kan je een string een aantal keer herhalen.

```javascript
let tekst = "Na ";
console.log(tekst.repeat(13)); // Na Na Na Na Na Na Na Na Na Na Na Na Na
console.log("batman!");        // batman!
```

### toUpperCase en toLowerCase

```javascript
let tekst = "DiT is GekKe Tekst";
console.log(tekst.toUpperCase()); // DIT IS GEKKE TEKST
console.log(tekst.toLowerCase()); // dit is gekke tekst
```

### trim

Met deze methode verwijder je witruimte (spaties, tabs, newlines,...) aan het begin en aan het einde van een string:

```javascript
let tekst = "  TypeScript is cool!      ";
console.log(tekst.trim())
```

De methodes trimStart en trimEnd zoals je die gezien hebt in C# zijn niet beschikbaar in oudere versies van JavaScript. Er zijn manieren om dit te omzeilen. Dit valt wel buiten de scope van de cursus.
