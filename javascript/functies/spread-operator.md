# Spread Operator

In tegenstelling tot primitieve data types (zoals nummers, strings, booleans) zijn arrays, objecten en functies complexe data types. Om efficient om te springen met het geheugen, worden deze complexe data types als referenties opgeslagen.

Wanneer we een array toewijzen aan een nieuwe variabele, wijzen we eigenlijk een verwijzing toe naar de originele array in het geheugen. Dit betekent dat als we de nieuwe variabele aanpassen, we ook de originele array aanpassen omdat ze beide naar dezelfde locatie in het geheugen verwijzen.

```js
let arr1 = [1,2,3,4];
let arr2 = arr1;
arr2[0] = 9;
// arr2[0]) === 9
// MAAR OOK arr1[0] === 9
```

Wanneer we de inhoud willen kopiëren in een nieuwe array maken we gebruik van de spread operator:

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

## Spread bij objecten

Hetzelfde referentieprobleem geldt voor objecten. Wanneer je een object toewijst aan een nieuwe variabele, wijzen beide naar hetzelfde object in het geheugen:

```js
let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = obj1;
obj2.a = 99;
console.log(obj1.a); // 99 — ook obj1 is aangepast!
```

Met de spread operator maak je een echte kopie van het object:

```js
let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = { ...obj1 };
obj2.a = 99;
console.log(obj1.a); // 1 — obj1 blijft ongewijzigd
console.log(obj2.a); // 99
```

Je kan ook twee objecten samenvoegen:

```js
let persoon = { naam: "Jan", leeftijd: 25 };
let adres = { stad: "Gent", land: "België" };
let gecombineerd = { ...persoon, ...adres };
console.log(gecombineerd);
// { naam: "Jan", leeftijd: 25, stad: "Gent", land: "België" }
```

Een veelgebruikte toepassing is het overschrijven van specifieke eigenschappen. De volgorde is hierbij belangrijk: eigenschappen die later staan overschrijven eerdere:

```js
let standaardInstellingen = { thema: "licht", taal: "nl", meldingen: true };
let gebruikerInstellingen = { thema: "donker" };
let instellingen = { ...standaardInstellingen, ...gebruikerInstellingen };
console.log(instellingen);
// { thema: "donker", taal: "nl", meldingen: true }
```

### Ondiepe kopie (shallow copy)

De spread operator maakt enkel een **ondiepe kopie**. Geneste objecten worden nog steeds als referentie gekopieerd:

```js
let obj1 = { a: 1, nested: { b: 2 } };
let obj2 = { ...obj1 };
obj2.nested.b = 99;
console.log(obj1.nested.b); // 99 — nested object is nog steeds gedeeld!
```

Wil je een volledige diepe kopie, gebruik dan `structuredClone()`:

```js
let obj1 = { a: 1, nested: { b: 2 } };
let obj2 = structuredClone(obj1);
obj2.nested.b = 99;
console.log(obj1.nested.b); // 2 — obj1 blijft ongewijzigd
```

[Meer info over de spread operator op MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

