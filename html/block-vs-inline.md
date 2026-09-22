# block vs. inline

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

## `<div>` en `<span>`

De meeste HTML-elementen vertellen iets over hun inhoud: een `<p>` bevat een paragraaf, een `<nav>` bevat navigatie, een `<strong>` duidt belangrijke tekst aan. Soms wil je echter gewoon een stuk van je pagina kunnen vastnemen om het op te maken met CSS of aan te spreken vanuit JavaScript, zonder dat die inhoud een eigen betekenis heeft. Daarvoor bestaan er twee betekenisloze containers:

* `<div>` is een **block**-element en groepeert inhoud in een blok.
* `<span>` is een **inline**-element en groepeert inhoud binnen een tekstregel.

Beide elementen voegen zelf geen enkele betekenis en geen zichtbare opmaak toe. Ze zijn puur een haakje om `class`- of `id`-attributen aan te hangen.

### elementen in blok groeperen

Met een `<div>` steek je meerdere elementen in 1 blok, zodat je ze daarna als een geheel kan manipuleren. Dat is handig om bijvoorbeeld een kaartje of een kolom te maken:

```html
<div class="kaart">
    <h2>Titel van de kaart</h2>
    <p>Tekst van de kaart</p>
</div>
```

```css
.kaart {
    padding: 1rem;
    border: 1px solid #ccc;
}
```

Omdat een `<div>` een block-element is, komt het onder de voorgaande inhoud te staan en neemt het standaard de volledige beschikbare breedte in.

### elementen inline groeperen

Met een `<span>` doe je hetzelfde binnen een lopende tekst. De tekst blijft gewoon doorlopen, er komt geen regeleinde bij:

```html
<p>Deze cursus kost <span class="prijs">45 euro</span> per student.</p>
```

```css
.prijs {
    font-weight: bold;
    color: darkgreen;
}
```

### wanneer gebruik je ze?

`<div>` en `<span>` zijn je **laatste keuze**, niet je eerste. Kijk altijd eerst of er een element bestaat dat wel de juiste betekenis heeft:

| In plaats van | Gebruik je beter |
| ------------- | ---------------- |
| `<div class="header">` | `<header>` |
| `<div class="menu">` | `<nav>` |
| `<div class="artikel">` | `<article>` |
| `<div class="voettekst">` | `<footer>` |
| `<span class="belangrijk">` | `<strong>` |
| `<span class="nadruk">` | `<em>` |

Pas als geen enkel semantisch element past, grijp je naar een `<div>` of een `<span>`. Een typisch geldig gebruik is een puur visuele wrapper, bijvoorbeeld een element dat enkel bestaat om een grid of een flexbox op te zetten.

{% hint style="warning" %}
Een pagina volstoppen met `<div>`'s wordt _divitis_ genoemd. Zo'n pagina werkt wel, maar zoekmachines en voorleessoftware kunnen er geen structuur meer uit afleiden, en voor jezelf wordt de code veel moeilijker leesbaar. Lees zeker het hoofdstuk over [semantiek](semantiek.md).
{% endhint %}
