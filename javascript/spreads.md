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

De spread operator kan ook gebruikt worden bij objecten:

```js
let obj1 = {a:1, b:2, c:3};
let obj2 = {...obj1, d:4};
console.log(obj2); // {a:1, b:2, c:3, d:4}
```

[Meer info over de spread operator op MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

