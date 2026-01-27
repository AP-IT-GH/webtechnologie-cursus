# 3: document object model

[MDN: Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

Het Document Object Model (of kortweg DOM) bepaalt hoe een browser de HTML-pagina moet opbouwen en hoe JavaScript deze kan lezen en aanpassen.

Deze set van regels is onderverdeeld in 2 belangrijke onderdelen:

* het opbouwen van een pagina (tot de DOM tree);
* het lezen en aanpassen van onderdelen op de pagina.

We noemen het een Document Object Model, omdat we de pagina gaan opbouwen vanuit het standpunt van objecten. Elk object staat voor een ander deel van de pagina die geladen werd in de browser. Het DOM bepaalt ook methoden en eigenschappen (zoals een object), waarmee we het document kunnen gaan manipuleren.

{% hint style="warning" %}
Het DOM is geen onderdeel van HTML, noch van JavaScript. Het is een losstaande set van regels en wordt geïmplementeerd door elke browser. DOM is een W3C-standaard (https://dom.spec.whatwg.org)
{% endhint %}

Met het DOM verkrijgt JavaScript alle benodigde kracht om dynamische HTML te creëren, JavaScript kan:

* alle HTML-elementen op de pagina wijzigen;
* alle HTML-attributen op de pagina wijzigen;
* alle CSS-stijlen op de pagina wijzigen;
* bestaande HTML-elementen en attributen verwijderen;
* nieuwe HTML-elementen en attributen toevoegen;
* reageren op alle bestaande HTML-gebeurtenissen op de pagina;
* nieuwe HTML-gebeurtenissen op de pagina creëren.

## DOM tree

Wanneer een browser een pagina inlaadt, maakt hij een DOM tree aan. Hierin worden de verschillende objecten samen gezet die de pagina uitmaken. Deze DOM tree bestaat uit 4 soorten van objecten/nodes:

* document node (geel);
* element node (groen);
* eigenschap node (rood);
* tekst node (paars).

<figure><img src="../../.gitbook/assets/Schermafbeelding 2019-11-16 om 19.25.36.png" alt=""><figcaption><p>DOM tree (bron: JavaScript en JQuery - Jon Duckett - 9781118531648)</p></figcaption></figure>
