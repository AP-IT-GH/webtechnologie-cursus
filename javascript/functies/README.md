---
metaLinks:
  alternates:
    - https://app.gitbook.com/s/CyMmymf8tiNQ4Ws9WmHV/javascript/functies
---

# Functies

[MDN: Functions - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

Tot nu toe ben je al een aantal keren het concept van functie of methode tegengekomen, zonder echt te weten hoe functies werken. De meest bekende functie die je tot nu toe hebt gebruikt is de `console.log()` functie.

```js
console.log("What is your name? ");
```

In het onderdeel over arrays zagen we ook een aantal functies zoals de `indexOf` functie die je kan uitvoeren op een array.

```js
console.log(arr.indexOf("Banana"));
```

Ook het omzetten van strings naar numbers deed je met de functie `parseInt`.

```js
let age = parseInt(prompt("What is your age? "));
```

{% hint style="info" %}
We hebben in veel gevallen een speciaal soort functies gebruikt die bij een bepaald object horen. Dit was het geval bij de functies die bij de arrays horen (zoals `indexOf`). Dit soort functies noemen we methoden. In dit onderdeel gaan we zelf geen methoden schrijven. Beschouw methoden op dit moment als een speciaal type van functies.
{% endhint %}

## wat is een functie

Een functie is een van de belangrijkste bouwstenen van een programma. Ze laten het toe om bepaalde code te herhalen zonder de code meerdere keren opnieuw te typen. We groeperen stukken code die we dus meerdere keren kunnen gebruiken.

Dit is bijvoorbeeld wat er gebeurt bij een `console.log`. Hoewel we de echte code van deze functie niet zelf kunnen lezen, zit er achter deze functie een stuk code die het mogelijk maakt om dingen op het scherm tevoorschijn te toveren. Wijzelf moeten deze code niet zelf schrijven, wij kunnen gewoon de functie gebruiken die dat doet voor ons.

De meeste functies zien er als volgt uit:

![Function diagram](<../../.gitbook/assets/Untitled Diagram.drawio.png>)

* Je steekt er een aantal input argumenten in
* De functie doet iets met deze argumenten
* **Optioneel:** Geeft iets terug (return)

Een leuke analogie is een functie beschouwen als een soort recept. Als je een recept gebruikt betekent dit dat:

1. Je met een aantal ingredienten start (de input)
2. Je voert een aantal stappen uit met die ingredienten (de body van de functie)
3. Je krijgt een gerecht als resultaat (return waarde)

![Zo maak je een lekkere smos ham!](<../../.gitbook/assets/image (27).png>)

## functies gebruiken

Elke functie die we tot nu toe hebben gebruikt werkt op dezelfde manier. We roepen de functie aan door de naam van de functie te schrijven gevolgd door haakjes. Tussen die haakjes plaatsen we de **argumenten** van de functie. Deze worden vaak de input genoemd van de functie. Een functie kan 0 argumenten hebben:

```js
functionName();
```

of zelfs juist heel veel argumenten

```js
functionName('argument1', 'argument2', 'argument3');
```

{% hint style="warning" %}
Opgelet: in JavaScript worden oproepen met een **ongeldig** aantal argumenten niet tegengehouden. Overbodige argumenten worden gewoon genegeerd en ontbrekende argumenten worden `undefined`.
{% endhint %}

Elke functie heeft ook een **return** waarde die je eventueel kan toekennen aan een variabele.

```js
let fruits = ["Banana","Apple","Kiwi"];
let indexOfBanana = fruits.indexOf("Banana");
```

De `indexOf` functie heeft als return waarde een number die aangeeft op welke index het gezochte string staat.

Soms heeft een functie geen return waarde. In JavaScript zal de functie dan de speciale waarde `undefined` teruggeven. `console.log` heeft bijvoorbeeld geen return waarde.

```js
let returnValue = console.log("Hello JavaScript");
console.log(returnValue); // undefined
```
