# 1: wat is JavaScript

[MDN: What is JavaScript?](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)

JavaScript (vaak afgekort als JS) is een scriptingtaal die vroeger vooral werd gebruikt voor het interactief maken van web pagina's. Een voorbeeld van interactiviteit is het gebruik van animaties, foutmeldingen tonen bij formulieren en het uitvoeren van bepaalde code bij het klikken op een knop. Ondertussen gebruikt meer dan 97% van de websites die je online kan vinden wel iets van JavaScript en zijn volledig statische websites bijna nergens meer te vinden.

```markup
<!DOCTYPE html>
<html>
<body>
<button type="button" onclick="alert('Hello World')">Click me for popup!</button>
</body>
</html>
```

Het bovenstaande voorbeeld stelt een webpagina voor met een knop. Als je op die knop duwt zal er een kleine popup getoond worden met de boodschap **Hello world!**

Zoals we zeiden is JavaScript een scriptingtaal. Scripts zijn kleine stukken code die uitgevoerd worden als gewone tekst. Ze hebben geen speciale compilatiestap nodig, ze wordt geïnterpreteerd en uitgevoerd. Dit is een groot verschil met een taal zoals C#, waar de code wel moet gecompileerd worden om uitgevoerd te worden.

{% hint style="info" %}
Why is it called **Java**Script?

Toen JavaScript gemaakt werd had het een andere naam: "LiveScript". Maar op dat moment was Java heel populair, en voor marketing redenen besloten ze de nieuwe taal te positioneren als "kleine broer" van Java.

Maar over de jaren heen werd JavaScript een volledig onafhankelijke taal met zijn eigen specificatie (EcmaScript). Dus er is alleen maar een verband tussen de twee door hun naam, het zijn totaal verschillende talen.
{% endhint %}

### Node.js

Tot 2009 werd JavaScript exclusief gebruikt in browsers en was het gebruik van deze taal enkel nodig voor web pagina's. In 2009 veranderde dit verhaal helemaal bij het ontstaan van Node.js. Node.js laat het toe om JavaScript buiten de browser te gaan uitvoeren. Zo konden ook andere soorten applicaties worden gemaakt met JavaScript en steeg de populariteit van JavaScript heel snel. Dankzij Node.js konden web ontwikkelaars volledige applicaties bouwen die op web servers draaiden en in de browser met 1 dezelfde taal.

Ondertussen is JavaScript de 7de meest gebruikte programmeertaal in de wereld en kan deze gebruikt worden voor bijna alles te maken zoals:

* **Mobiele applicaties**
  * Bv. met React native
* **Web applicaties**
  * Bv. met React.js, angular, Vue.JS,...
* **Games**
  * Bv. met Phaser, kiwi.js,...
* **Desktop applicaties**
  * Bv. met electron.js

JavaScript is een van de meest veelzijdige talen in de programmeerwereld waar bijna alles mee kan gedaan worden. Dit is allemaal mogelijk geworden dankzij het ontstaan van Node.js in 2009, zonder Node.js zouden we voor eeuwig vast hebben gezeten in de limieten van de browser en was JavaScript nooit uitgegroeid tot de taal die het nu is.

JavaScript is over de jaren heen gegroeid tot de meest gebruikte taal voor webapplicaties op het internet. Je kan dus JavaScript gebruiken voor front- en backend en wordt deze taal tegenwoordig zelfs gebruikt voor standalone applicaties (mobile en desktop). Maar eigenlijk was het nooit de bedoeling geweest om met JavaScript grote en complexe systemen te bouwen.

{% hint style="success" %}
**Leuk weetje:** JavaScript was gemaakt in 1995 door Brandan Eich in 10 dagen tijd. Uiteraard is JavaScript over de jaren heen nog veel geëvolueerd, maar het was nooit de bedoeling dat deze taal zou uitgroeien tot de taal van het internet. Het draagt dus na al die jaren nog veel van de nadelen van het prille begin mee.
{% endhint %}

Er zijn ondertussen heel wat nieuwe versies van JavaScript gepasseerd die heel wat problemen en missende features hebben toegevoegd. Deze versies worden meestal aangeduid met de letters ES gevolgd door een jaartal of nummer. Zo is ES6 de meest ondersteunde versie van JavaScript. Deze versie introduceerde concepten zoals Classes die object georiënteerd programmeren mogelijk maken in JavaScript (op een gelijkaardig manier als in C#).
