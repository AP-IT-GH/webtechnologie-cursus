# array functies

Bij de introductie van ES6 werden er ook een boel extra array functies toegegvoegd. Deze maken het werken met arrays nog interessanter. Hieronder zien we een paar veel voorkomende functies:

## spread operator

Een array is geen primitief object. Wanneer je een array kopieert, dan kopieer het het adres.

```js
let arr1 = [1,2,3,4];
let arr2 = arr1;
arr2[0] = 9;
// arr2[0]) === 9
// MAAR OOK arr1[0] === 9
```

Wanneer we de inhoud willen kopieren in een nieuwe array maken we gebruik van de spread operator:

```js
let arr1 = [1,2,3,4];
let arr2 = [...arr1];
arr2[0] = 9;
console.log(arr1); // 1
console.log(arr2); // 9
```

De spread operator wordt voorgesteld door 3 punten: `...`. Je plaatst de 3 punten voor de naam van een variabel die een array bevat. Dit vervangt bv. `...arr1` door `1,2,3,4`.

Op deze manier kan je ook verschillende arrays samenvoegen:

```js
let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];
let arr3 = [...arr1,...arr2]
console.log(arr3); // [1,2,3,4,5,6,7,8]
```

Of gewoon de elementen van een array tussen andere elementen plaatsen van een nieuwe array:

```js
let arr1 = [1,2,3,4];
let arr2 = [2,3,4, ...arr1];
let arr3 = [...arr1, 2,3,4];
```

## loops

```js
const numbers = [1,2,3,4];
for(let i=0; i < numbers.length; i++){
    console.log(numbers[i]);
}
```

Zoals we al gezien hebben, kunnen we makkelijk loopen door een array a.d.h.v. zijn index. Een simpele for-lus waar we een variabel optellen laat ons toe elk element van de array aan te spreken.

Array objecten hebben zelf een functie die toelaat elk element apart in een lus aan te spreken: `forEach`:

```js
const numbers = [1,2,3,4];
numbers.forEach(e => console.log(e));
```

`forEach()` verwacht een callback-functie met 1 parameter. Die parameter stelt elk element voor van de array. In het voorbeeld hierboven zal de callback functie `e => console.log(e)` dus voor elk element e uitgevoerd worden dat in de array numbers zit.

## sort

We kunnen de inhoud van een array ook sorteren:

```js
const numbers = [3,1,4,2]; 
numbers.sort(); 
// numbers = [1,2,3,4]
```

Sort past dus de inhoud van een array aan! Wanneer we de originele array niet willen aanpassen, kunnen we gebruik maken van een spread operator:

```js
const numbers = [3, 1, 4, 2]; 
numbersSorted = [...numbers].sort(); 
// numbersSorted = [1,2,3,4] 
// numbers = [3,1,4,2]
```

We moeten wel opletten met de default sort functie te gebruiken:

```js
const arr = [3, 2, 12, 22, 4]; 
arr.sort(); // arr = [ 12, 2, 22, 3, 4 ]
```

Waarden worden omgezet naar strings. Dit kan problemen geven wanneer we getallen willen sorteren. Wil je zeker zijn dat jouw sort correct wordt uitgevoerd, dan geef je een callback mee aan de sort functie die exact bepaalt hoe er moet gesorteerd worden:

```js
function sortingNumbers (a, b) {
    if(a < b) return -1;
    if(a > b) return 1;
    return 0;
}

const arr = [3, 2, 12, 22, 4];
arr.sort(sortingNumbers);
// arr = [ 2, 3, 4, 12, 22 ]
```

`sortingnumbers` bepaalt nu hoe we sorteren. De callback zal alle elementen met mekaar vergelijken a.d.h.v. deze functie: a en b zullen dus door alle waarden van de array gaan.

De regels voor de callback functie zijn als volgt:

* neem variabele a en b
* sorteerfunctie moet < 0 teruggeven als a < b
* sorteerfunctie moet > 0 teruggeven als a > b
* sorteerfunctie moet 0 teruggeven als a === b

Bovenstaand voorbeeld kunnen we ook verkorten als volgt:

```js
const arr = [3, 2, 12, 22, 4];
arr.sort((a, b) => {
    if(a < b) return -1;
    if(a > b) return 1;
    return 0;
});
// arr = [ 2, 3, 4, 12, 22 ]
```

Of nog korter (probeer zelf eens te zoeken waarom dit werkt):

```js
const arr = [3, 2, 12, 22, 4];
arr.sort((a, b) => {
    return a - b;
});
// arr = [ 2, 3, 4, 12, 22 ]
```

We kunnen dus ook objecten sorteren!

```js
const arr = [
    {name: 'George', age: 33},
    {name: 'Abe', age: 20},
    {name: 'Mabel', age: 29}
];

arr.sort((a, b)=>{
    const name1 = a.name.toUpperCase();
    const name2 = b.name.toUpperCase();
    if(name1 < name2 ) return -1;
    if(name1 > name2 ) return 1;
    return 0;
}
);

/* 
[
  { name: 'Abe', age: 20 },
  { name: 'George', age: 33 },
  { name: 'Mabel', age: 29 }
]
*/
```

Hierboven sorteren we op de naam property van elk object. Let op dat we naar Uppercase omzetten om zodat bv. "Mabel" niet voor "abe" zou komen.

Willen we toch op leeftijd sorteren? Dan passen we de callback aan:

```js
arr.sort((a, b)=>{
    if(a.age < b.age ) return -1;
    if(a.age > b.age ) return 1;
    return 0;
}
);

/*
[
  { name: 'Abe', age: 20 },
  { name: 'Mabel', age: 29 },
  { name: 'George', age: 33 }
]
*/
```

## filter

```js
const numbers = [1, 2, 3, 4];
let evenNumbers = [];
numbers.forEach(e => {
    if(e % 2 === 0){
        evenNumbers.push(e);
    }
})
console.log(evenNumbers); // [2,4]
```

We kunnen ook een nieuwe array maken met een subset van de elementen van de originele array. Hierboven halen we alle even elementen uit de array. Weeral hebben we een extra array op voorhand nodig en gebruiken we `forEach` om door de array te loopen.

De filter methode van een array laat ons toe dit te verkorten. Filter verwacht een callback functie waarvan de parameter elk element van de array voorstelt. De filter functie geeft weeral een array terug. De return waarde van de callback moet een boolean zijn: als e=>{} true geeft, dan zal e in de nieuwe array zitten. Als e=>{} false geeft, dan wordt het element niet in de nieuwe array gestoken. De code hierboven kunnen we dus vervangen met:

```js
const numbers = [1, 2, 3, 4];
let evenNumbers = numbers.filter(e=>{
        if(e % 2 === 0) return true;
    }
    );
// evenNumbers = [2,4]
```

Of nog korter:

```js
const numbers = [1, 2, 3, 4];
let evenNumbers = numbers.filter(e => e % 2 === 0);
// evenNumbers = [2,4]
```

## map

Soms willen we een bewerking doen op de elementen van een array. Door te lopen door een array kunnen we een nieuwe array maken met nieuwe elementen gebaseerd op een bewerking op de originelen:

```js
const numbers = [1, 2, 3, 4];
let doubleNumbers = [];
numbers.forEach(element => doubleNumbers.push(2 * element));
console.log(doubleNumbers); // [2,4,6,8]
```

Hier spreken we van "mapping" van waarden op anderen. Let op: we hebben hier een nieuwe array nodig waarin we de "mapped" elementen kopiëren.

Arrays hebben hier een speciale functie voor. De map functie:

```js
const numbers = [1, 2, 3, 4];
let doubledNumbers = numbers.map(e => 2 * e);
// doubledNumbers = [2,4,6,8]
```

Het resultaat is hetzelfde als het vorige voorbeeld. De map-functie verwacht een callback die weeral elk element aanspreekt van de array. De return waarde van map is een nieuwe array. De elementen van deze nieuwe array zijn het resultaat van elke oproep naar de callback. In het voorbeeld hierboven worden alle elementen maal 2 gedaan.

## find
Soms willen we in een array één specifiek element zoeken dat voldoet aan een bepaalde voorwaarde. We zouden dit kunnen doen met een for-lus of forEach:

```js
const numbers = [3, 7, 12, 5];
let firstBig = null; 

numbers.forEach(num => {
    if (num > 10 && firstBig === null) { 
        firstBig = num;
    }
});

console.log(firstBig); // 12 
```

In dit voorbeeld zoeken we het eerste getal dat groter is dan 10. Zodra we dat gevonden hebben, bewaren we het en stoppen we (in dit geval doen we dat via een check op `firstBig === null`).

Dit kan veel eenvoudiger met de find-functie:

```js
const numbers = [3, 7, 12, 5]; 
let firstBig = numbers.find(num => num > 10); // firstBig = 12 
```

De find-functie doorloopt de array en geeft het eerste element terug dat voldoet aan de opgegeven voorwaarde (de callback). Zodra een element gevonden is waarvoor de callback true teruggeeft, stopt de functie en geeft het dat element terug.

Als geen enkel element aan de voorwaarde voldoet, dan is het resultaat undefined.

Voorbeeld:

```js
const numbers = [1, 2, 3]; 
let found = numbers.find(n => n > 10); 
console.log(found); // undefined 
```

## chains

We kunnen de return waarden van array functies ook aan mekaar doorgeven. Dit doen we door "chains". Bv. wanneer we 2 maps na mekaar willen doen:

```js
let doublePlusOneNumbers = numbers.map(e => 2 * e).map(e => e + 1);
```

De langere versie:

```js
let doublePlusOneNumbers = numbers
  .map(e => { return 2 * e })
  .map(e => { return e + 1 });
```

Hier hangen we een filter aan een map. Eerst wordt de filter uitgevoerd. Op het resultaat hiervan doen we dan een map:

```js
const numbers = [1,2,3,4];
let doubleTheEven = numbers
    .filter(e => e % 2 === 0)
    .map(e => e * 2);
// doubleTheEven = [4,8]
```

Let op, de volgorde is belangrijk. Probeer zelf eens map en filter om te draaien en kijk naar het resultaat.

Hier doen we een filter, dan een map, en dan filteren we dat resultaat nog eens:

```js
const numbers = [1,2,3,4];
let doubleTheEven = numbers
    .filter(e => e % 2 === 0)
    .map(e => e * 2)
    .filter(e => e < 8)
// doubleTheEven = [4]
```

Er is dus geen limiet op het aantal methodes dat je zo aan mekaar kan hangen.

## reduce

Stel we willen alle getallen van een array optellen. Een logische oplossing is de volgende:

```js
const numbers = [1, 2, 3, 4];
let sum = 0;
numbers.forEach(e => sum += e);
// sum = 10
```

Wat als we eerst wat willen filteren. Dat kan bv. door:

```js
const numbers = [1, 2, 3, 4];
let sum = 0;
numbers.forEach(e => {
    if(e % 2 === 0){
        sum += e;
    }
});
// sum = 6
```

Arrays hebben nog een functie: `reduce`. Deze functie laat toe om de array te "reduceren" naar een bepaalde waarde of object. Het som-voorbeeld kunnen we herschrijven als:

```js
const numbers = [1, 2, 3, 4];

let resultSum = numbers.reduce((sum, element) => sum + element, 0);
// resultSum = 10
```

Reduce verwacht 2 parameters:

* een functie met twee parameters
  * sum: jouw totaal resultaat
  * element: elk element van de array
* beginwaarde (0)

De callback wordt uitgevoerd op elk element. De eerste keer dat deze functie wordt opgeroepen wordt de eerste parameter (hier: sum) vervangen door de beginwaarde (hier: 0). Het resultaat van de functie wordt meegegeven als nieuwe beginwaarde voor het volgende element. In dit voorbeeld worden volgende calls uitgevoerd:

```
(0, 1) => 0 + 1
(1, 2) => 1+ 2
(3, 3) => 3 + 3
(6, 4) => 6+ 4
resultsum = 10
```

We kunnen dit ook gebruiken om bv. strings aan mekaar te hangen. Dit voorbeeld maakt van een array 1 string.

```js
const words = ['ik', 'ben', 'thuis'];

let result = words.reduce((phrase, word) => phrase + ' ' + word, '');
// result = 'ik ben thuis'
```

De beginwaarde hier is `''`.

Het resultaat hoeft geen primitive te zijn. We kunnen ook een object teruggeven:

```js
const numbers = [1,2,3,4];

let result = numbers.reduce((calculation,number) => {
        calculation.sum += number;
        calculation.mult *= number;
        return calculation;
    }, {
        sum:0,
        mult:1
    }
);
// result = { sum: 10, mult: 24 }
```

**Let op: de beginwaarde hier is ook een object.**
