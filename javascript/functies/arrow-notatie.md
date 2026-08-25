# arrow notatie

Een functie kan op deze manier geschreven worden:

```js
function add(a,b,c){
  return a + b + c;
}
```

Dit is een **"named function"**. De functie heeft de naam `add`. Maar we kunnen deze functie ook anders schrijven:

```js
const add = (a,b,c) => {
  return a + b + c;
}
```

Dit is een **"anonymous function"**. De functie heeft geen naam maar wordt toegekend aan de variabele `add`. In beide gevallen heeft de functie hier 3 parameters: a, b en c. De functie geeft ook een waarde terug: `a + b + c`. Hiervoor gebruik je return.

We gebruiken in JavaScript tegenwoordig heel veel "anonymous functions".

Functies roep je op a.d.h.v. de naam van de variabele waar de functie zich in bevindt plus haakjes () en de nodige parameters:

```js
const hallo = () => {
  console.log("hallo");
}
hallo();
```

Hierboven hebben we een functie met 0 parameters. We roepen ze dus op met `hallo()`.

```js
const add = (a, b) => {
  return a + b;
}
let total: number = add(1, 2);
```

Deze functie heeft 2 parameters: a en b. Deze functie heeft ook een return waarde. We kunnen de uitkomst van deze functie dus toekennen aan een variabele.

Let op: return stopt de uitvoering van een functie. De `console.log` in de code hieronder zal dus nooit uitgevoerd worden. De functie stop bij lijn 2:

```js
const add = (a, b) => {
  return a + b;
  console.log("dit wordt niet uitgevoerd");
}
let total: number = add(1, 2);
```

## verkorte notatie

Wanneer je maar 1 lijn code hebt staan in jouw functie, kan je jouw schrijfwijze verkorten:

```js
let hello = () => { 
    console.log("hello"); 
};
```

```js
let hello = () => console.log("hello");
```

Wanneer jouw lijn code een return doet, hoef je zelfs return niet meer te vermelden:

```js
let add = (a, b) => { 
    return a + b
};
```

```js
let add = (a, b) => a + b;
```

Wanneer je maar 1 parameter hebt, kan je zelfs de haakjes rond de parameter weglaten:

```js
let double = (a) => { 
    return 2*a 
};
```

```js
let double = (a) =>  2 * a;
```

```js
let double = a =>  2 * a;
```
