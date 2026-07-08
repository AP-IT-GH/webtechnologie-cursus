---
metaLinks:
  alternates:
    - https://app.gitbook.com/s/CyMmymf8tiNQ4Ws9WmHV/javascript/for
---

# Lussen

[MDN: for statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

Vaak moet een stuk programma meerdere keren achter elkaar worden uitgevoerd. Hiervoor worden lussen gebruikt. Een aantal voorbeelden van waar je best lussen voor gebruikt:

* Als je een bericht 100 keer op het scherm wilt tonen
* Als je alle getallen tussen 0 en 100 wilt optellen
* ...

Er zijn verschillende soorten lussen die je kan gebruiken. We beginnen in dit deel met de `for`-lus.

### De syntax

De syntax voor de `for`-lus is:

```js
for (initialExpression; condition; updateExpression) {
    // body van de lus
}
```

Uitleg van de onderdelen:

1. De initialExpression initialiseert en declareert variabelen. Deze wordt maar één keer uitgevoerd, aan het begin van de lus.
2. De condition wordt geëvalueerd:
   * Als de condition `false` is, wordt de lus beëindigd.
   * Als de condition `true` is, wordt de code in de body van de lus uitgevoerd.
3. De updateExpression past de variabele aan (bijv. verhogen of verlagen).
4. Daarna wordt de condition opnieuw geëvalueerd. Dit proces herhaalt zich totdat de condition `false` is.

***

### Voorbeeld 1: 5 keer herhalen

We willen een stuk tekst 5 keer laten zien op het scherm. In plaats van hetzelfde statement vijf keer te schrijven gebruiken we een `for`-lus.

```js
for (let i = 0; i < 5; i++) {
  console.log('Hello JavaScript!');
}
```

Stap-voor-stap overzicht:

| Iteratie | Variabele | Condition: i < 5 | Actie                                                    |
| -------- | --------- | ---------------- | -------------------------------------------------------- |
| 1        | `i = 0`   | `true`           | Hello JavaScript! wordt getoond; i wordt verhoogd naar 1 |
| 2        | `i = 1`   | `true`           | Hello JavaScript! wordt getoond; i wordt verhoogd naar 2 |
| 3        | `i = 2`   | `true`           | Hello JavaScript! wordt getoond; i wordt verhoogd naar 3 |
| 4        | `i = 3`   | `true`           | Hello JavaScript! wordt getoond; i wordt verhoogd naar 4 |
| 5        | `i = 4`   | `true`           | Hello JavaScript! wordt getoond; i wordt verhoogd naar 5 |
| 6        | `i = 5`   | `false`          | De lus wordt stopgezet                                   |

***

### Voorbeeld 2: toon getallen van 1 tot en met 10

```js
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

### Voorbeeld 3: som van getallen 1 t/m 10

```js
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum); // 55
```

### Voorbeeld 4: tel van 10 terug naar 1

```js
for (let i = 10; i > 0; i--) {
  console.log(i);
}
```

### Voorbeeld 5: veelvouden van 2 tussen 0 en 10

```js
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}
```

{% hint style="info" %}
In JavaScript bestaan er nog speciale vormen van for-lussen. Later behandelen we `for...in`, `for...of` en methodes zoals `forEach`.
{% endhint %}
