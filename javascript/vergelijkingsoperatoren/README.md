# 5: beslissingen

[MDN: Comparison operators / Conditionals - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison)

We kennen veel vergelijkingsoperatoren vanuit de wiskunde.

In JavaScript worden deze als volgt geschreven:

* Groter/kleiner dan: `a > b`, `a < b`
* Groter/kleiner of gelijk aan: `a >= b`, `a <= b`
* Gelijk aan: `a == b` of `a === b`.
* Niet gelijk aan: `a != b`

{% hint style="info" %}
Het verschil tussen `==` en `===` is dat in JavaScript bij `==` eerst een type conversie wordt gedaan. Dus vergelijk je een string en een getal, dan zal de string omgezet worden naar een getal. Bij `===` doet hij dat niet.

Het is daarom in JavaScript altijd aangeraden om `===` te gebruiken.
{% endhint %}

### boolean als resultaat

Alle vergelijkingsoperatoren geven een boolean waarde terug:

* `true` – betekent “ja”, “correct” or “waar”.
* `false` – betekent “nee”, “fout” or “niet waar”.

Bijvoorbeeld:

```js
console.log( 2 > 1 );  // true
console.log( 2 == 1 ); // false
console.log( 2 != 1 ); // true
```

Het resultaat van een vergelijking kan worden toegekend aan een variabele, net zoals elke waarde.

```js
let result = 5 > 4;
console.log(result); // true
```

### strings vergelijken

Om te zien of een string groter is dan een andere gebruikt JavaScript een zogenaamde "lexicografische" order. In andere woorden worden strings letter per letter vergeleken.

Bijvoorbeeld:

```js
console.log( "Z" > "A" ); // true
console.log( "Glow" > "Glee" ); // true
console.log( "Bee" > "Be" ); // true
```

Het algoritme om deze twee strings te vergelijken is heel eenvoudig:

1. Vergelijk het eerste karakter van beide strings.
2. Als het eerste karakter van de eerste string groter (of kleiner) is dan de andere string. Dan is de eerste string groter (of kleiner) dan de tweede. Dan zijn we al klaar.
3. Als het eerste karakter hetzelfde is, vergelijk dan het volgende karakter op dezelfde manier.
4. Herhaal tot het einde van een van beide strings.
5. Als beide strings eindigen met dezelfde lengte dan zijn ze gelijk. Anders zal de langste string de grootste zijn.

In het eerste voorbeeld krijg je al een resultaat in de eerste stap want `"Z" > "A"` geeft al een resultaat in de eerste stap.

De tweede vergelijking van `"Glow"`en `"Glee"` heeft iets meer stappen nodig:

1. G is gelijk aan G
2. l is gelijk aan l
3. o is groter dan e. Het algoritme stopt hier. De eerste string is groter.
