---
metaLinks:
  alternates:
    - https://app.gitbook.com/s/CyMmymf8tiNQ4Ws9WmHV/html/intro/block-vs-inline
---

# Block vs. inline

In HTML wordt er een onderscheid gemaakt tussen block- en inline-elementen. Een block-element neemt zonder opmaak de volledige breedte van de pagina in beslag. Block-elementen zullen dus steeds onder elkaar verschijnen. Hiertegenover staat inline-elementen die zoals tekst achter elkaar verschijnen.

Voorbeelden van block-elementen:

* `<p>`
* `<h1>`
* `<div>`
* `<section>`
* `<article>`

Voorbeelden van inline-elementen:

* `<a>`
* `<img>`
* `<input>`
* `<span>`
* `<strong>`
* `<em>`
* `<br>`

## elementen in blok groeperen

Het is mogelijk om meerdere elementen te groeperen in 1 block-element. Deze elementen kunnen we dus als een container gebruiken om meerder elementen in te steken en deze dan later te manipuleren als zijnde 1 blok.

```html
<article class="post">
    <h1>Titel van de post</h1>
    <p>Tekst van de post</p>
</article>
```

## elementen inline groeperen

Het is ook mogelijk om elementen `inline` te groeperen. Hiervoor wordt gebruik gemaakt van het `<span>`-element.

```html
<p>We gaan hier <em>tekst</em> inline <strong>manipuleren</strong>.</p>
```
