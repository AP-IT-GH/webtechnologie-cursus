# 7: Arrays

Tijdens het onderdeel over datatypes hebben we al kort het concept array
vermeld. Een array is een geordende lijst van waarden. Elke waarde in
een array heeft een vaste plaats, aangeduid met een index, en die index
begint altijd bij 0.

Arrays zijn handig wanneer je meerdere gerelateerde gegevens onder één
variabele wilt opslaan.

## Een array maken

In JavaScript hoef je geen type of vaste lengte op te geven. Arrays
kunnen automatisch groeien wanneer je er elementen aan toevoegt.

### Lege array
```js
    let numbers = [];
    // of
    let numbers = new Array();
```

### Array met beginwaarden
```js
    let numbers = [1, 2, 3, 4, 5];
```

In talen zoals Java en C# moet je vooraf de lengte bepalen. In
JavaScript is dat niet nodig: arrays zijn dynamisch.

------------------------------------------------------------------------

## Elementen opvragen met een index

Met vierkante haakjes `[]` kun je een element opvragen op een bepaalde
positie.

```js
    let fruits = ["Banana", "Apple", "Orange"];
    console.log(fruits[0]); // Banana
    console.log(fruits[1]); // Apple
    console.log(fruits[2]); // Orange
```

### Index buiten bereik

Als je een index opvraagt die niet bestaat, krijg je undefined.

```js
    console.log(fruits[3]); // undefined
```
    

------------------------------------------------------------------------

### Elementen aanpassen en toevoegen

Een element vervangen

```js
    fruits[2] = "Pear";
```

### Een element toevoegen via index
```js
    fruits[3] = "Kiwi";
```
    
Als de index nog niet bestond, wordt het element toegevoegd. Ontstaan er
gaten in de index (bijvoorbeeld door index 10 te vullen terwijl 1–9 leeg
zijn), dan worden die lege plaatsen gevuld met empty-items. Dit probeer
je best te vermijden.

------------------------------------------------------------------------

### De lengte van een array

length geeft het aantal elementen terug:

```js
    let fruits = ["Banana", "Apple", "Orange"];

    console.log(fruits.length); // 3

```

De lengte is altijd de hoogste index + 1, ook als er lege plaatsen in
de array zitten.

------------------------------------------------------------------------

### Debuggen: array tonen in de console

```js
    console.log(fruits);
    // bijvoorbeeld: [ 'Banana', 'Apple', 'Orange' ]
```
------------------------------------------------------------------------

### Array manipulaties

JavaScript biedt verschillende methoden om arrays aan te passen.

#### Elementen toevoegen

##### Achteraan toevoegen met push()

```js
    fruits.push("Kiwi");
```

-   Voegt het nieuwe element achteraan toe.
-   Past de array aan.
-   Geeft de nieuwe lengte terug.

------------------------------------------------------------------------

##### Vooraan toevoegen met unshift()

```js
    let fruits = ["Banana", "Apple", "Orange"];
    fruits.unshift("Pear");

    console.log(fruits);
    // ["Pear", "Banana", "Apple", "Orange"]
```

-   Voegt vooraan toe.
-   Alle bestaande elementen schuiven op.

------------------------------------------------------------------------

#### Elementen verwijderen

##### Laatste element verwijderen met pop()

```js
    let lastFruit = fruits.pop();
    console.log(lastFruit); // verwijderd element
```

-   Verwijdert het laatste element.
-   Geeft dat verwijderde element terug.

------------------------------------------------------------------------

##### Eerste element verwijderen met shift()

```js
    let firstFruit = fruits.shift();
    console.log(firstFruit); // verwijderd element
    console.log(fruits);
```

-   Verwijdert het eerste element.
-   De rest schuift naar links op.

------------------------------------------------------------------------

##### Meerdere (of specifieke) elementen verwijderen met splice()

```js
splice(startIndex, aantalTeVerwijderen)
```

```js
    let fruits = ["Banana", "Apple", "Orange", "Kiwi", "Pear"];

    let removedFruits = fruits.splice(1, 2);

    console.log(removedFruits); // ["Apple", "Orange"]
    console.log(fruits);        // ["Banana", "Kiwi", "Pear"]
```

-   Verwijdert één of meerdere elementen.
-   Past de array blijvend aan.
-   Geeft een array met verwijderde elementen terug.

------------------------------------------------------------------------

## De join() methode

De `.join()` methode zet alle elementen van een array om in één string,
met een gekozen separator ertussen.

```js
    const words = ['Dit', 'is', 'een', 'zin'];
    const result = words.join(' ');

    console.log(result); // "Dit is een zin"
```

Belangrijk:

-   `.join()` verandert de originele array niet.
-   Als je geen separator opgeeft, gebruikt JavaScript standaard een
    komma:
```js
    console.log([1, 2, 3].join()); // "1,2,3"
```