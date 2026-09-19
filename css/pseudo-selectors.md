# pseudo selectors

Er bestaan 2 soorten van pseudo-selectoren, nl.:

* pseudo-classes (:)
* pseudo-elements (::)

{% embed url="https://www.youtube.com/watch?t=1s&v=RmDh3m8b9cU" %}
Een handige video over pseudoclass- en pseudoelement-selectoren
{% endembed %}

## pseudoklassen

Pseudo-classes kunnen worden toegevoegd aan de CSS-selector van een element om het op een bepaalde manier te stylen. Pseudo-classes beïnvloeden de staat van een HTML-element en worden actief zodra er een actie op dat element wordt uitgevoerd.

`:hover` is bijvoorbeeld een pseudo-classe die vaak samen met links en knoppen gebruikt wordt om een stijlverandering te laten plaatsvinden wanneer de gebruiker de muis over het element beweegt.

pseudo-classes zijn voorgedefinieerd in CSS. Elk element heeft dus pseudo-classes die gebruikt kunnen worden in de stijlregels. Een pseudo-classe-selector heeft als basis een dubbele punt gevolgd door de naam van de pseudo-classe. De naam van een pseudo-classe is hoofdletterongevoelig.

Stijlregels waarin gebruik gemaakt wordt van een pseudo-classe selector kunnen er als volgt uitzien:

```css
:pseudoclass-naam { 
    /* ... */ 
}

element:pseudoclass-naam { 
    /* ... */ 
}
```

### interactie pseudo-classes

Deze pseudo-classes reageren op wat de gebruiker doet met een element: er met de muis over gaan, erop klikken of er met het toetsenbord naartoe navigeren.

**:hover**

De [:hover](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover) CSS-pseudo-classe is de meest bekende pseudo-class die ervoor zorgt dat de weergave van een element wijzigt wanneer er met een muis wordt over gegaan.

```css
a:hover {
  color: #00CCFF;
}
```

**:active**

De [:active](https://developer.mozilla.org/en-US/docs/Web/CSS/:active) CSS-pseudo-classe geldt zolang er op een element geklikt wordt, dus zolang de muisknop ingedrukt is. Zo kan je een knop bijvoorbeeld "ingedrukt" laten lijken.

```css
button:active {
  transform: translateY(2px);
}
```

**:focus**

De [:focus](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus) CSS-pseudo-classe geldt voor het element dat op dat moment de focus heeft, bijvoorbeeld een invoerveld waarin je aan het typen bent of een knop waar je met de `Tab`-toets naartoe navigeerde. Zo zie je als gebruiker altijd welk element actief is.

```css
input:focus {
  outline: 3px solid #6a5acd;
}
```

{% hint style="warning" %}
Verwijder de focus-stijl nooit zonder er iets anders in de plaats te zetten. Gebruikers die met het toetsenbord navigeren zien anders niet meer waar ze zich op de pagina bevinden.
{% endhint %}

### input pseudo-klassen

De volgende pseudo-classes zijn gekoppeld aan formulieren en geven de mogelijkheid om elementen uit een formulier te selecteren op basis van de toestand van het form-element.

**:required**

De [:required](https://developer.mozilla.org/en-US/docs/Web/CSS/:required) CSS-pseudo-classe wordt gebruikt bij formulieren voor het markeren van velden die geldige gegevens moeten bevatten voordat een formulier kan worden ingediend.

**:valid**

De [:valid](https://developer.mozilla.org/en-US/docs/Web/CSS/:valid) CSS-pseudo-classe vertegenwoordigt een element waarvan de inhoud met succes wordt gevalideerd. Hierdoor kunnen geldige velden eenvoudig een uiterlijk krijgen dat de gebruiker helpt te bevestigen dat zijn gegevens correct zijn opgemaakt.

**:invalid**

De [:invalid](https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid) CSS-pseudo-classe vertegenwoordigt een element waarvan de inhoud niet gevalideerd kan worden. Dit is handig om invoerfouten voor de gebruiker te markeren.

```css
input:invalid {
  background-color: #ffdddd;
}
form:invalid {
  border: 5px solid #ffdddd;
}
input:valid {
  background-color: #ddffdd;
}
form:valid {
  border: 5px solid #ddffdd;
}
input:required {
  border-color: #800000;
  border-width: 3px;
}
input:required:invalid {
  border-color: #c00000;
}
```

### boomstructuur pseudoclassen

Deze pseudoclassen worden gebruikt om elementen uit de HTML-structuur te halen. We kunnen de structuur doorlopen zonder te weten welk element er exact staat.

**:first-child**

De [:first-child](https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child) CSS-pseudo-classe vertegenwoordigt het eerste element van een groep elementen op hetzelfde niveau ([voorbeeld](https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child)).

```css
/* Selecteert de eerste <p> van meerdere paragrafen */
p:first-child {
  color: red;
}
```

**:last-child**

Met [:last-child](https://developer.mozilla.org/en-US/docs/Web/CSS/:last-child) selecteer je het laatste element in de lijst van elementen in een ouderelement ([voorbeeld](https://developer.mozilla.org/en-US/docs/Web/CSS/:last-child)).

```css
/* Selecteert het laatste <li>-element in een ongeordende lijst */
ul li:last-child {
  border: 1px solid red;
  color: red;
}
```

**:nth-child(N)**

De [:nth-child(N)](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child) CSS-pseudo-class selecteert elementen op basis van hun positie in een groep van broers en zussen binnen één ouderelement ([voorbeeld](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child)).

```css
/* Selecteert td-elementen van de even rijen (2n) in tbody van een tabel */
table tbody tr:nth-child(2n) td{
    background-color: rgb(251, 251, 251);
}
/* Selecteert td-elementen van de even rijen (even) in tbody van een tabel */
table tbody tr:nth-child(even) td{
    background-color: rgb(251, 251, 251);
}
/* Selecteert de oneven rijen (2n+1) in tbody van tabel met class="spreadsheet" */
.spreadsheet tbody tr:nth-child(2n+1) {
	background-color: #ffffff;
}
/* Selecteert de oneven rijen (odd) in tbody van tabel met class="spreadsheet" */
.spreadsheet tbody tr:nth-child(odd) {
	background-color: #ffffff;
}
```

**:nth-of-type**

De [:nth-of-type](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type) CSS-pseudo-classe selecteert elementen van een bepaald type of op basis van hun positie in een groep broers en zussen.

```css
/* even paragrafen */
p:nth-of-type(2n) {
  color: blue;
}

/* oneven paragrafen */
p:nth-of-type(2n+1) {
  color: red;
}

/* eerste paragraaf */
p:nth-of-type(1) {
  font-weight: bold;
}
```

**:first-of-type**

De [:first-of-type](https://developer.mozilla.org/en-US/docs/Web/CSS/:first-of-type) CSS-pseudo-classe selecteert het eerste element van zijn type binnen een groep van broers / zussen.

```css
/* eerste artikel binnen een groep van meerdere artikels */
article:first-of-type {
  color: red;
  font-style: italic;
}
```

### de ouder selecteren met :has()

Met gewone selectoren kan je enkel "naar beneden" of "naar rechts" kijken in de HTML: je selecteert kinderen, afstammelingen of broers en zussen die **na** een element komen. De [:has()](https://developer.mozilla.org/en-US/docs/Web/CSS/:has) CSS-pseudo-classe draait dat om: je selecteert een element op basis van wat het **bevat**.

```css
/* Selecteert elk artikel dat een afbeelding bevat */
article:has(img) {
  display: flex;
  gap: 1rem;
}
```

Dat is handig bij formulieren, waar het label meestal **voor** het invoerveld staat. Met `:required` alleen kan je het label dan niet bereiken, maar via de ouder wel:

```html
<div class="form-group">
  <label for="email">E-mailadres</label>
  <input type="email" id="email" required>
</div>
```

```css
/* Zet een rood sterretje achter het label van elk verplicht veld */
.form-group:has(:required) > label::after {
  content: " *";
  color: red;
}
```

{% hint style="info" %}
Er bestaan nog meer véél meer pseudo-classes. Bekijk ze [hier](https://developer.mozilla.org/en-US/docs/Web/CSS/pseudo-classes) allemaal!
{% endhint %}

<figure><img src="../.gitbook/assets/image%20(36).png" alt=""><figcaption><p>Het verschil tussen nth-child en nth-of-type pseudo class selectors gevisualiseerd</p></figcaption></figure>

## pseudo-elementen

Met pseudo-elementen kunnen we een specifiek onderdeel van een element gaan beïnvloeden. Denk hierbij bijvoorbeeld aan extra inhoud vóór of na een element. We zouden daarvoor een `span`-element in de HTML kunnen steken, of we kunnen met een pseudo-element-selector dat onderdeel rechtstreeks vanuit CSS toevoegen en stijlen.

**::before en ::after**

Met [::before](https://developer.mozilla.org/en-US/docs/Web/CSS/::before) en [::after](https://developer.mozilla.org/en-US/docs/Web/CSS/::after) voeg je een extra, onzichtbaar element toe als eerste of laatste kind van een element. Zo kan je decoratie toevoegen zonder extra HTML te schrijven.

Deze pseudo-elementen verschijnen **enkel** als je de eigenschap `content` instelt. Dat mag ook een lege string zijn.

```css
/* Zet een rood sterretje achter het label */
label.verplicht::after {
  content: " *";
  color: red;
}
```

Met een lege `content` kan je `::before` en `::after` gebruiken als een vorm die je volledig met CSS opmaakt, bijvoorbeeld een lijn die onder een link verschijnt:

```css
a {
  position: relative;
}

a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0;
  height: 2px;
  background-color: #6a5acd;
  transition: width 0.3s ease;
}

a:hover::after {
  width: 100%;
}
```

{% hint style="info" %}
Een volledige lijst van alle pseudo-elementen vind je [hier](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements).
{% endhint %}
