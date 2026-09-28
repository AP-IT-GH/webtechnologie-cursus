# CSS aanpassen met JavaScript


Naast het bewerken van de HTML, kunnen we met JavaScript ook CSS manipuleren.

### Directe CSS-aanpassing via JavaScript

Het is mogelijk om de CSS van een element direct aan te passen door de `style` property van dat element te wijzigen. Bijvoorbeeld:

```javascript
document.querySelector('#p2').style.color = 'blue';
```


{% embed url="https://flems.io/#0=N4IgzgpgNhDGAuEAmIBcIB0ALeBbKIANCAGYCWMYaA2qAHYCGuEamO+RIsA9nYn6wA8AQgAiAeQDCAFQCaABQCiAAnZQAfAB06gtVp0AjbkgCe+7boBM6gFIMAbgwDKsAE5kADvGUAJaQFkAGWUJf0EAeixrCw91SSwGOgBzMmTleCwIXwDgsHgTGFQI2O1SnQ9lMiQAXk0QDwBGOvUfaChuZQB1blcoJGFi-UEKqtr6y2bWqHaunr6B8JK6CzA3T3h9JG5YAFdmPgwkiHhFGH34ACETAEkkAAo6jwmQAEoMPIKIDB5212Vq5R1AxQHYQOoAbm0W1250Ox1OEHOV1uD3GdTeHxgGBIvHgADEmBQTP9ASAAILuBhQCFQ7Z7CAHI4nM4My43e6PZ4Y-JYnF8JxkABeWQBdSgDFcR1cNJ04VW7i85mWsqMpiGkTwGm0nEgMAQZF4VHQlgADKgTSAAL6EehMFjoDAAKyoxB4fFZrCtNpAjGYrG+YBdXFxHvQVoAupagA" %}

{% hint style="info" %}
Let op: Het aanpassen van CSS via JavaScript op deze manier wordt vaak vermeden, omdat het kan leiden tot complexiteit en onvoorspelbare gevolgen. Het overschrijft inline stijlen en kan de scheiding van verantwoordelijkheden tussen HTML, CSS en JavaScript verstoren.
{% endhint %}

## Classlist

Een betere en meer gestructureerde manier om CSS toe te passen via JavaScript is door gebruik te maken van de classList van een element. Hiermee kun je classes toevoegen of verwijderen, zonder direct inline stijlen te bewerken. Het voordeel hiervan is dat je de styling beheert via de CSS-bestanden en niet direct in de JavaScript-code.

### Classlist ophalen

```javascript
let classesOnSection = document.querySelector("section").classList // toont een lijst van alle classes op de section
```

### Een class toevoegen

Om een class aan een element toe te voegen, gebruik je de add() methode:

```javascript
document.querySelector("section").classList.add("my-class") // voeg de class my-class toe aan de lijst van classes.
```

### Een class verwijderen

Om een class van een element te verwijderen, gebruik je de remove() methode:

```javascript
document.querySelector("section").classList.remove("my-class") // verwijder de class my-class van de classlist. 
```

## CSS uitlezen met JavaScript

CSS die al door de browser verwerkt werd (vanuit een externe stylesheet), kan je niet zomaar uitlezen. Hiervoor gebruiken we de functie `window.getComputedStyle()`.

```js
let color = window.getComputedStyle(
  document.querySelector('#id")
).backgroundColor;
```
