# variabelen

We gaan net zoals bij andere programmeertalen vaak werken met informatie of data. Deze data kan veranderen naarmate het programma uitgevoerd worden en moet ergens bijgehouden worden. Een voorbeeld van het werken met data kan

* Een optelling van twee getallen die we zelf hebben ingevoerd
* Het bijhouden van de naam van de gebruiker van je programma
* Het bijhouden van het aantal seconden dat je programma aan het lopen is
* ...

Deze data zal bijgehouden worden in een **variabele**.

## let

Een variabele is een plaats in het geheugen waar we een naam geven zodat we deze kunnen aanspreken. We kunnen deze variabele gebruiken om bijvoorbeeld een stuk tekst of getal bij te houden.

Om een variabele aan te maken in JavaScript gebruiken we het `let` keyword.

Het onderstaande statement maakt (of declareert) een variabele met de naam "message"

```javascript
let message;
```

Nu wordt er een plaats voorzien in het geheugen voor deze message. Momenteel is deze nog wel leeg. En als je goed oplet dan zie je ook dat je geen enkele manier hebt om te weten wat er exact in deze variabele kan zitten. Is het een getal? is het een stuk tekst? Is het iets helemaal anders? Je zou kunnen afleiden van de naam dat het een bericht bevat, maar meer dan dat weet je niet. Stel dat we de variabele `thing` zouden noemen

```javascript
let thing;
```

dan weet je absoluut niets over deze variabele. Het kan eender wat zijn.

Om dit probleem op te lossen zou je het een waarde kunnen toekennen op de volgende manier.

```javascript
let thing = 0;
```

dan zie je direct dat `thing` een getal is. En bij

```javascript
let thing = "My Message";
```

zie je duidelijk dat `thing` een stuk text is (of een string in programmeertermen). Strings plaats je altijd tussen quotes.

Een variabele een waarde toekennen noemen we ook in programmeren een assignment. We hangen er een waarde aan vast. Je kan deze waarde ook in een aparte lijn in je code toekennen.

```javascript
let thing;
thing = "My Message";
```

Je kan nu deze variabele laten zien aan de gebruiker door te combineren met de `console.log` statement.

```javascript
let thing = "My Message";
console.log(thing);
```

We kunnen het concept van een variabele eenvoudig uitleggen aan de hand van een doos waarin je data kan bewaren. Het bevat een sticker waar een unieke naam op staat zodat je het gemakkelijk kan vinden.

Bijvoorbeeld in ons `message` voorbeeld kunnen we een doos inbeelden waar een sticker `message` op plakt. Daarin plaatsen we een papiertje met de tekst "Hello!" in.

We kunnen nu eender welk stuk papier in deze doos steken en we kunnen deze zoveel veranderen als we willen:

```javascript
let message;

message = "Hello!";
message = "World!"; // value changed
console.log(message);
```

Als de waarde veranderd wordt, dan wordt de oude data verwijderd van de variabele.

We kunnen ook twee variabelen declareren en de data van de ene kopieren in de andere.

```javascript
let hello = "Hello world!";
let message;
// kopieer 'Hello world' van hello naar message
message = hello;
// de twee variabelen bevatten nu dezelfde data
console.log(hello); // Hello world!
console.log(message); // Hello world!
```

{% hint style="danger" %}
Een variabelen mag maar 1 keer gedeclareerd worden. Als je dit toch doet zal je een foutboodschap krijgen.

```javascript
let message = "This";
let message = "That"; // SyntaxError: 'message' has already been declared
```

Dus we mogen een variabele maar 1 keer declareren en daarna kunnen we hiernaar verwijzen zonder het `let` keyword..
{% endhint %}

## var

In oudere JavaScript werd het keyword `var` gebruikt om een variabele te declareren. Dit is sinds 2015 niet meer de juiste manier van werken. Het gebruik van `var` komt alleen nog voor als je voor oudere systemen wil programmeren.

{% hint style="danger" %}
Er is een groot verschil in de werking tussen `var` en `let`.
{% endhint %}

## const

Soms heb je variabelen in je code die nooit mogen wijzigen. Als je wil dat deze niet gewijzigd worden door een programmafout dan kan je deze best declareren als constanten. Je gebruikt hiervoor het `const` keyword in plaats van `let`

```javascript
const myBirthday = "13/12/1984";
myBirthday = "01/01/2001"; // error, can't reassign the constant!
```

Als een programmeur zeker weet dat een variabele nooit zal veranderen, dan kunnen ze deze best ook als `const` aanduiden zodat het duidelijk is voor iedereen die je code gebruikt.

Vaak worden constanten ook aangegeven door de variabele naam in hoofdletters te plaatsen. Zo wordt het nog duidelijker dat deze waarde nooit zal wijzigen.

```javascript
const COLOR_RED = "#F00";
```

Opgelet, `const` betekent alleen dat dat een variabele altijd naar dezelfde data wijst, maar die data kan op haar beurt wel veranderlijk zijn:

```javascript
// [] is een lege array, dus een rij waarden
const myArray = [];

// toegelaten, dit plaatst een extra waarde in de rij
myArray.push(3);
console.debug(myArray);

// NIET toegelaten, de naam is permanent gelinkt aan de eerste array
myArray = [];
```

## datatypes

Het verhaal wordt nu iets complexer. Stel je voor dat we thing eerst een waarde "My message" toekennen

```javascript
let thing = "My Message";
```

en daarna kennen we er een getal aan toe:

```javascript
thing = 0;
```

Nu kunnen we eigenlijk niet meer afleiden of `thing` nu een getal (number) of een tekst (string) is. Numbers en strings noemen we **data types**. Het geeft aan wat voor waarden in de variabele kunnen opgeslagen worden.

Nu komt het grote verschil tussen C# en JavaScript eindelijk boven. In JavaScript is de bovenstaande code toegestaan en geeft geen foutmeldingen. Je mag eerst een variabele behandelen als een string, en daarna als een number. C# laat dit niet toe. C# noemen ze in de programmeerwereld: **strongly typed**. Eenmaal je een variabele een type heeft gekregen dan kan dit type nooit meer veranderd worden. De waarde mag wel veranderd worden als het type hetzelfde blijft.
