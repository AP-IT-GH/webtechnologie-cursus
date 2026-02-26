---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/CyMmymf8tiNQ4Ws9WmHV/javascript/arrays/lussen-en-arrays
---

# lussen en arrays

## for loop

Nu we het concept van arrays kennen wordt het gebruik van lussen nog interessanter. Een van de meest voorkomende dingen die je gaat doen tijdens het programmeren is het overlopen van elk element van een array en daar dan iets mee te doen.

```js
let fruits = ["Banana","Apple","Orange"];
```

We kunnen hiervoor een eenvoudige `for` loop voor gebruiken.

* De `intialExpression` is hier een variabele die we de waarde 0 geven. We gaan deze variabele gebruiken om de huidige plaats in de array bij te houden en het eerste element dat we willen tonen is 0. Dus we nemen hier `i=0`
* Voor de `condition` moeten we uitzoeken wanneer de `for` lus moet stoppen. We zouden kunnen zeggen dat we in de lus willen blijven zolang `i<3` want er zijn 3 elementen.
* Voor elk element willen we nu een `console.log` statement uitvoeren voor het huidige element. We vragen een element op aan de hand van de index notatie en gebruiken de variabele `i` als index. Dus `console.log(fruits[i]);`
* We willen uiterard dat de variabele `i` wordt opgehoogd telkens de conditie nog `true` is. Dus we doen hier `i++` of `i=i+1`

We bekomen dan de volgende code:

```js
let fruits = ["Banana","Apple","Orange"];

for (let i=0; i<3; i++) {
    console.log(fruits[i]);
}
```

Maar wat als we nu een element toevoegen achteraan de array

```js
let fruits = ["Banana","Apple","Orange"];
fruits.push("Kiwi");

for (let i=0; i<3; i++) {
    console.log(fruits[i]);
}
```

dan werkt dit niet meer want we hebben de loop maar tot 3 laten gaan. We kunnen uiteraard niet telkens het getal verhogen als we een element toevoegen.

Gelukkig hebben we gezien hoe we het aantal elementen van een array opvragen. Dit doen we aan de hand van `length`. We vervangen nu het getal 3 met `fruits.length`

```js
let fruits = ["Banana","Apple","Orange"];
fruits.push("Kiwi");

for (let i=0; i<fruits.length; i++) {
    console.log(fruits[i]);
}
```

Je hebt in je IDE een aantal handige autocomplete functies voor snel deze syntax te genereren.

![IDE snippet voor for-loop generatie](<../../.gitbook/assets/forloopgenerate (1).gif>)

### for ... of loop

Heb je de huidige index van het element niet nodig dan bestaat er nog een eenvoudigere constructie waarmee je over elk element van de array kan gaan.

```js
let fruits = ["Banana","Apple","Orange"];

for (let fruit of fruits) {
    console.log(fruit);
}
```

{% hint style="success" %}
In veel gevallen hebben we de index niet nodig en dan is deze constructie de meest eenvoudige die je kan bedenken.
{% endhint %}
