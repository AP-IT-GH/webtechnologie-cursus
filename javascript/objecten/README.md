# 9: objecten

[MDN: Object - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

Er bestaan een aantal datatypes in **JavaScript** die we "primitieve" of "eenvoudige" datatypes noemen. Dit is omdat de waarden altijd maar uit 1 enkel ding bestaat. In het hoofdstuk over **arrays** heb je gezien dat er ook nog een ander soort datatypes bestaat: de **complexe datatypes**. Deze worden opgebouwd uit meerdere primitieve datatypes.

Een object is een ander voorbeeld van een complex datatype. In JavaScript kom je objecten haast overal tegen. Daarom is het belangrijk om deze te begrijpen en deze te kunnen gebruiken.

Je kan een object bezien als een kast met verschillende kaften. Elke kaft heeft een sticker zodat je gemakkelijk een kaft kan vinden aan de hand van zijn naam. Deze sticker noemen we hier een "key".

![Object illustratie 1](../../.gitbook/assets/image%20(6).png)

Een leeg object (of "lege kast") kunnen we op de volgende manier aanmaken:

```js
let user = {};           // Meest gebruikt
// of
let user = new Object(); // Niet zo vaak gebruikt
```

![Object illustratie 2](../../.gitbook/assets/image%20(3).png)

De manier met de accolades noemen we een **object literal** en is ook de meest gebruikte manier van objecten aan te maken.

## properties

Uiteraard gaan we geen lege objecten aanmaken maar willen we hier dingen gaan insteken. We doen dit aan de hand van `key:value` paren:

```js
let user = {
  name: "Andie",
  age: 30
}
```

Een property bestaat uit een **key** voor het `:`-symbool gevolgd door een **value**.

In dit user-object zijn er twee properties:

1. De eerste property heeft de key: "name" en de value: "Andie"
2. De tweede property heeft de key: "age" en de value: 30

Het resulterende object ziet er dan als volgt uit:

![Object illustratie 3](../../.gitbook/assets/image%20(23).png)

We kunnen deze properties aanspreken aan de hand van de dot-notatie:

```js
console.log(user.name); // Andie
console.log(user.age);  // 30
```
