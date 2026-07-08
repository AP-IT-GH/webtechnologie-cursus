---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/CyMmymf8tiNQ4Ws9WmHV/css/selectors/pseudo-selectors
---

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

### locatie pseudo-classes

Elk van de volgende selectoren is een pseudo-classe die je meestal met het `<a>`-element gebruikt. De **volgorde** waarin ze worden toegepast **speelt een rol**.

```css
a:link {  
  color: #0000FF; 
}
a:visited { 
  color: #FF00FF;
}
a:hover {
  color: #00CCFF;
}
a:active {
  color: #FF0000;
}
```

**:link**

De [:link](https://developer.mozilla.org/en-US/docs/Web/CSS/:link) CSS-pseudo-classe geldt voor niet-bezochte links en is standaard blauw en onderlijnd.

```css
a:link {
  color: #0000FF;
}
```

**:visited**

De [:visited](https://developer.mozilla.org/en-US/docs/Web/CSS/:visited) CSS-pseudo-classe geldt voor bezochte links en is standaard magenta.

```css
a:visited {
  color: #FF00FF;
}
```

**:hover**

De [:hover](https://github.com/barbaralettany/webtech-js/blob/main/css/2-selectors/css-pseudoklassen.md#definitie) CSS-pseudo-classe is de meest bekende pseudo-class die ervoor zorgt dat de weergave van een element wijzigt wanneer er met een muis wordt over gegaan.

```css
a:hover {
  color: #00CCFF;
}
```

**:active**

De [:active](https://developer.mozilla.org/en-US/docs/Web/CSS/:active) CSS-pseudo-classe maakt in bovenstaand voorbeeld de koppelingen rood als erop geklikt wordt. Omdat `:active` als laatste gedefineerd is, overschrijft deze de eerste drie pseudo-classes. Dit wordt bijvoorbeeld gebruikt bij navigatie, zodat je in de menu weet welke pagina je aan het bekijken bent.

```css
a:active {
  color: #FF0000;
}
```

### input pseudo-klassen

De volgende pseudo-classes zijn gekoppeld aan formulieren en geven de mogelijkheid om elementen uit een formulier te selecteren op basis van de toestand van het form-element.

**:checked**

De [:checked](https://developer.mozilla.org/en-US/docs/Web/CSS/:checked) CSS-pseudo-classe vertegenwoordigt een radio-button, een checkbox of option, waarbij dat element is aangevinkt of status is geschakeld.

```css
input:checked{
  accent-color: red;
}
option:checked {
  accent-color: red;
}
```

> TIP: De `accent-color` eigenschap stelt de kleur in van de accentuering van een formulier element, zoals de kleur van een geselecteerde checkbox of radio button.

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

**:only-child**

[:only-child](https://developer.mozilla.org/en-US/docs/Web/CSS/:only-child) komt overeen met een element als dit het enige onderliggende element van het ouderelement is, het 'enige kind' als het ware ([voorbeeld](https://developer.mozilla.org/en-US/docs/Web/CSS/:only-child)).

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

**:nth-last-child(N)**

De [:nth-last-child(N)](http://www.sitepoint.com/web-foundations/81298/) CSS-pseudo-classe selecteert het N laatste element in de lijst van elementen in een ouderelement ([voorbeeld](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-child)).

```css
table {
  border: 1px solid blue;
}
/* Selecteert de laatste drie elementen */
tr:nth-last-child(-n+3) {
  background-color: pink;
}
/* Selecteert elk element vanaf het tweede tot het laatste element */
tr:nth-last-child(n+2) {
  color: blue;
}
/* Selecteert enkel het voorlaatste element */
tr:nth-last-child(2) {
  font-weight: 600;
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

{% hint style="info" %}
Er bestaan nog meer véél meer pseudo-classes. Bekijk ze [hier](https://developer.mozilla.org/en-US/docs/Web/CSS/pseudo-classes) allemaal!
{% endhint %}

<figure><img src="../.gitbook/assets/image (36).png" alt=""><figcaption><p>Het verschil tussen nth-child en nth-of-type pseudo class selectors gevisualiseerd</p></figcaption></figure>

## pseudo-elementen

Met pseudo-elementen kunnen we een specifiek onderdeel van een element gaan beïnvloeden. Denk hierbij bijvoorbeeld aan de eerste lijn van een paragraaf. We zouden die lijn dan in een `span`-element kunnen steken of we kunnen met een pseudo-element-selector die lijn specifieke stijleigenschappen geven.

**::first-letter**

```css
p::first-letter {
  font-size: 250%;
}
```

**::first-line**

```css
p::first-line {
  color: red;
}
```

{% hint style="info" %}
Een volledige lijst van alle pseudo-elementen vind je [hier](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements).
{% endhint %}
