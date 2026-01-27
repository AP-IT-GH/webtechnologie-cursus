# event binding

Een event aan een DOM-node koppelen noemen we **binding**. Er bestaan 3 grote groepen van manieren om events aan DOM-nodes te koppelen.

* event listeners
* HTML event handlers
* DOM event handlers

Enkel de eerste gaan we nog actief gebruiken aangezien deze veel voordelen oplevert tenopzicht van de anderen.

## event listeners

Event listeners werden in een update (in 2000) aan de DOM-specificatie toegevoegd. Ze hebben als grootste voordeel dat je meerdere functies kan koppelen aan eenzelfde event. We spreken van "level 2 event listeners".

```js
function checkUsername() {
    // code to check username
}

let elUsername = document.querySelector('#username');

elUsername.addEventListener('blur', checkUsername, false);
// 'blur' is één van de vele DOM events die wordt aangeroepen
```

Meer info over het blur-event: [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event) %}

### addEventListener

`addEventListener()` voegt een gebeurtenis toe aan het opgegeven element. Gebruik de methode `removeEventListener()` om een  gebeurtenis te verwijderen die is gekoppeld is met de methode addEventListener(). Gebruik de methode `element.addEventListener()` om een gebeurtenis aan het opgegeven element te koppelen.

[Meer info op MDN](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) {% embed url="https://flems.io/#0=N4IgzgpgNhDGAuEAmIBcIB0ALeBbKIANCAGYCWMYaA2qAHYCGuEamO+RIsA9nYn6wA8AQgAiAeQDCAFQCaABQCiAAnZQAfAB06gtVp0AjbkgCe+7boCM66VgjLFMZn2XiDAKzjxBAeizWLLAAmGztlBiQkRQA3CD4AGTIwfggAJwAKAEplAFkIeCxjX2DzHQAHdQBBeHgGWCxw5VgoMlgAa2UIWJd4bkaDAFca3lRfCu0LQeG6ZTIkAF5NEFwTACF4OiWbVJNZ7x8p3rpSwTLZhaWkCFxuLbGTsFhUsjL4fR46ZM6nOPhleeUSG4sAGzngGAA5vlHNdfqsTABJJDpJYrdabECZADc2mgsL4GAiUW68ESyTiaRRXBa7SWhGUJAGdAQZF4WWUwG0ykBwNBv0h0J+fHhSKpVxuS0yGDIdDoaQAEtIcvF-solvLoFA+gB1bipKBIJY4ugAX2xFh8j2erxOB2MZgtem0nEgMBZvCo6CCQVQAAYQCbCPQmCx0Bh3FRiB9+PBWAGgyBGMxWBhYGBI1xeDG4yaALomoA %}

### preventDefault

De `preventDefault()` methode stopt de standaardactie van een element.

* voorbeeld 1: Het voorkomt dat een verzendknop een formulier verzendt.
* voorbeeld 2: Het voorkomt dat een link de URL volgt.

[Meer info op MDN](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) {% embed url="https://flems.io/#0=N4IgzgpgNhDGAuEAmIBcIB0ALeBbKIANCAGYCWMYaA2qAHYCGuEamO+RIsA9nYn6wA8AQgAiAeQDCAFQCaABQCiAAnZQAfAB06gtVp0AjbkgCe+7YIbKySALyaQuEwEE6sLNwBOD1Z4gl7EBx4AAcwVAB6CIB3AGYwd25uKDAMHlwIh3UAcW5leDyAdViAZUTk1PTBCIZzHRD1aSwIZRC-ADcIPlF-BgBXKHgACgBKZWZ4DyRlaIooVo6u+Hzm5SgyOgBrZQYjTuUST25cA+Soblm6AHMVloBVACUAGQxqhu0LBsl12G3JlvWWx2dGm7jg2zIJFuyiQvQGywYCDIvGsYAWEE6fGQrwi7zoFgSnjIIXg+iQ3FgfWYfAwVwg8EUMGp8AAQiYAJJIIYOJyuRLeEAjDAMJBIRSY+BPMhgfgQTzcrg-TYOQgHPpueDIuhDDFLEbAbTKZS6mltE3wHokfqDUaGnYwTzDByFBhos0Sy3W4ZjWAMKAwJCoZQ+ADUxolGFhVvh8kWWKQIwA3NoAL5JiwRQnE0kfHQRIymfTVPTaTiQGBI3hUdAARgAnKgAAwgFOEehMFjoDAAKyoxB4WIE6BbbZAjGYrDSYD7XF4-HgrBbAF0U0A %}

{% hint style="info" %}
Hieronder volgt nog uitleg over de andere 2 types van event binders. We gaan deze niet meer gebruiken in moderne code. Je zal ze nog wel tegenkomen in oudere projecten of bij zoekresultaten op internet.
{% endhint %}

## HTML event handlers

In eerdere versies van HTML bestond er een groep attributen die we konden gebruiken om events mee te binden en JavaScript-functies te triggeren. Aangezien we werken in een scheiding tussen de pagina-opbouw en functionele code, is het ook beter om deze niet meer te gebruiken.

```js
<input type="text" id="username" onblur="checkUsername()">
```

## DOM event handlers

In de oorspronkelijke DOM-specificatie werden de event handlers al toegevoegd. Ze worden in alle belangrijke browsers ondersteund en geven de mogelijkheid om JavaScript en HTML van elkaar te scheiden.

Het belangrijkste nadeel van deze oorspronkelijke handlers is dat ze slechts 1 functie aan een event kunnen koppelen. Wanneer er meerdere scripts op dezelfde events zouden reageren, zal er maximaal 1 script uitgevoerd worden.

```js
function checkUsername() {
    // code to check username
}

let elUsername = document.querySelector('#username');
elUsername.onblur = checkUsername;
```
