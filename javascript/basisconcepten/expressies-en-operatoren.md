---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/CyMmymf8tiNQ4Ws9WmHV/javascript/basisconcepten/expressies-en-operatoren
---

# expressies en operatoren

Tot nu toe hebben we variabelen als een opzichzelfstaand concept beschouwd. We declareerden een variabele en daarna printen we deze uit op ons scherm. Het wordt pas interessant als we deze gaan combineren in expressies. De meest bekende expressies zijn uiteraard de wiskundige expressies. Het optellen van twee getallen kan je bijvoorbeeld op de volgende manier doen

```javascript
console.log(5 + 5) // 10
```

`5 + 5` is hetgeen dat we een expressie noemen in programmeren.

Je kan niet alleen expressies maken met waarden (literals) zoals het getal 5, maar je kan ook met variabelen werken.

```javascript
let a = 5;
let b = 5;
console.log(a + b); // 10
```

Dit geeft hetzelfde resultaat als hierboven, maar we gebruiken hier dus de variabelen a en b. Het is alsof je deze getallen invult in de plaats van de letter.

{% hint style="info" %}
**Even wat terminologie.** Als we spreken over een operator dan bedoelen we daarbij in het geval van een optelling het symbool + mee

De getallen die je optelt noemen we de operanden. In dit geval 5 en 5

Samen vormen deze een expressie (bv. 5 + 5, a + b,...)
{% endhint %}

### expressie-resultaat toewijzen

Meestal zal je expressies schrijven waarin je bewerkingen op en met variabelen uitvoert. Vervolgens zal je het resultaat van die expressie willen bewaren voor verder gebruik in je code. In de volgende code kennen we het **expressie**-resultaat toe aan een variabele:

```javascript
let amountOfInfectionsYesterday = 1000;
let amountOfInfectionsToday = 1005;
let diffInfections = amountOfInfectionsYesterday - amountOfInfectionsToday;
```

Hierbij zal de temperatuur uit de rechtse 2 variabelen worden uitgelezen, van elkaar worden afgetrokken en vervolgens bewaard worden in `diffInfections`.

Een ander voorbeeld van een **expressie**-resultaat toewijzen maar nu met literals:

```javascript
let diffInfections = 1005 - 1000;
```

Uiteraard mag je ook combinaties van literals en variabelen gebruiken in je expressies:

```javascript
let width = 15;
let height = 20 * width;
```

### wiskundige operators

We hebben tot nu toe de + operator gezien, maar we hebben nog vele andere wiskundige operatoren die je kan gebruiken in JavaScript.

* Optelling`+`,
* Aftrekking`-`,
* Vermenigvuldiging`*`,
* Deling`/`,
* Rest`%`,
* Exponent`**`.

De eerste vier zijn uiteraard vanzelfsprekend en zijn gewoon hetzelfde als diegene die je kent van wiskunde. De twee laatste zullen jullie waarschijnlijk nog niet kennen.

#### de rest operator %

De rest operator `%` heeft niets te maken met percentages. Het stelt een rest voor van een deling van twee getallen.

```js
console.log(5 % 2); // De rest van de deling van 5 en 2 is 1
console.log(6 % 2); // De rest van de deling van 6 en 2 is 0
```

#### exponent

Met de exponent operator `a ** b` ga je een macht berekenen van twee getallen.

```js
console.log(2 ** 2); // 2² = 4
console.log(2 ** 3); // 2³ = 8
console.log(2 ** 4); // 2⁴ = 16
```

#### haakjes

Ook de volgorde van bewerkingen zijn van toepassing in JavaScript:

1. **haakjes**
2. **vermenigvuldigen, delen en modulo**: `*` (vermenigvuldigen), `/` (delen) en `%` (rest na deling, ook modulo genoemd)
3. **optellen en aftrekken**: `+` en `-`, enz.

En je kan dus bij expressies ook gebruik maken van haakjes om zo je expressies duidelijker te maken.

```javascript
let weightOnEarth = 90;        //kg
let gEarth = 9.81;    //m/s² 
let gMars = 3.711;    //m/s²

let weightOnMars = (weightOnEarth/gEarth) * gMars; //kg
```

#### verkorte operator notaties

Heel vaak wil je de inhoud van een variabele bewerken en dan terug bewaren in de variabele zelf. Bijvoorbeeld een variabele vermenigvuldigen met 10 en het resultaat ervan terug in de variabele plaatsen. Stel dat we een variabele `i` hebben:

| **verkorte notatie** | **lange notatie** | **beschrijving**                         |
| -------------------- | ----------------- | ---------------------------------------- |
| `i++;`               | `i = i + 1;`      | variabele met 1 verhogen                 |
| `i--;`               | `i = i - 1;`      | variabele met 1 verlagen                 |
| `i+=3;`              | `i = i + 3;`      | variabele verhogen met een getal         |
| `i-=6;`              | `i = i - 6;`      | variabele verminderen met een getal      |
| `i*=7;`              | `i = i * 7;`      | variabele vermenigvuldigen met een getal |
| `i/=2;`              | `i = i / 2;`      | variabele delen door een getal           |

### string Concatenatie

In wiskundige expressies kan je alleen maar operatoren gebruiken op getallen of variabelen die getallen bevatten. In JavaScript kan je ook een `+` operator gebruiken op strings. Je telt uiteraard de strings niet bij elkaar op want dat gaat natuurlijk niet. De `+` operator wordt hier gebruikt om strings aan elkaar te plakken (concatenatie).

```javascript
let s = "my" + "string";
console.log(s); // mystring
```

Je kan hier uiteraard ook gewoon andere variabelen gebruiken als operanden. Zo wordt de string concatenatie vaak gebruikt om een variabele in een vaste string te tonen. Je kan de operator ook gebruiken om meer dan 1 string aan elkaar te concateneren.

```javascript
let text = "World";
console.log("Hello " + text + "!");
```

Nog een belangrijk ding om te weten is dat als 1 van de operanden van een concatenatie een string is en de andere een getal is, het resultaat ook een string is. Zo kan je dus een string concateneren met een getal.

```javascript
let age = 21;
console.log("You are " + age + " years old!");
```

In het hoofdstuk van Data Types hebben we in het deeltje string ook kort een andere manier gezien om strings te concateneren zonder gebruik te maken van de `+` operator. We maakten daar gebruik van de speciale backtick quotes en de `${}` constructie:

```javascript
let age = 21;
console.log(`You are ${age} years old!`);
```

Het stuk dat je tussen `${}` plaatst zal worden geplakt in de string. Zo hoef je niet te werken met de concatenatie operator.
