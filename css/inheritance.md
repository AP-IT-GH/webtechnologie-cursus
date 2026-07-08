---
metaLinks:
  alternates:
    - https://app.gitbook.com/s/CyMmymf8tiNQ4Ws9WmHV/css/selectors/inheritance
---

# overerving

Inheritance (in het Nederlands vaak "overerving") is een mechanisme in CSS waarbij bepaalde CSS-eigenschappen van een parent-element automatisch worden doorgegeven aan zijn children. Het maakt het makkelijk om consistente typografie en kleuren door een hele sectie van de pagina heen toe te passen zonder elke keer dezelfde regels op elk element te schrijven.

## Waarom inheritance?

Veel stijlen hebben logische standaardwaarden die voor alle of de meeste child-elementen hetzelfde moeten zijn. Denk bijvoorbeeld aan lettertype, kleuren en regelhoogte: als de tekst in een artikel in een bepaalde font en kleur moet zijn, wil je dat alle paragrafen, kopjes en links daarin die stijl delen. Inheritance reduceert herhaling en maakt stylesheet onderhoud eenvoudiger.

## Welke eigenschappen erven en welke niet

* Meestal geërfde eigenschappen: typografische en tekst-gerelateerde eigenschappen zoals:
  * `color`
  * `font-family`, `font-size`, `font-style`, `font-weight`, `line-height`
  * `text-align`, `text-transform`, `letter-spacing`
  * `visibility`
* Niet-geërfde eigenschappen (meestal): layout- en box-model eigenschappen zoals:
  * `margin`, `padding`, `border`, `width`, `height`, `display`, `position`
  * `background-*` eigenschappen (bijv. `background-color`) worden niet geërfd

Let op: er is geen complete lijst in deze handleiding — de officiële specificatie documenteert welke eigenschappen erfenis ondersteunen. Als vuistregel: typografische/text-eigenschappen erven meestal; box/layout eigenschappen meestal niet.

## De cascade, initial value en computed value

Inheritance is één factor in de uiteindelijke (computed) stijl van een element. De cascade beslist welke regel wordt toegepast (specificiteit, ordening, !important), en als een eigenschap niet expliciet is ingesteld op een element, wordt de waarde afgeleid:

* Als de eigenschap geërfd wordt, en er is geen expliciete waarde op het element zelf, dan neemt het element de gebruikte waarde (computed value) van zijn ouder over.
* Als de eigenschap niet geërfd wordt en er is geen expliciete waarde, valt het element terug op de `initial`-waarde (zoals gedefinieerd in de CSS-specificatie).

## Keywords: inherit, initial

Je kunt de standaard gedrag beïnvloeden met enkele speciale sleutelwoorden:

*   `inherit`: forceert dat de eigenschap de waarde van de ouder overneemt, zelfs als het normaal niet geërfd zou worden.

    * Bijvoorbeeld: `div { background-color: inherit; }`

    Gebruik dit als je een specifieke eigenschap altijd wilt laten overnemen van de ouder, ongeacht de standaardgedragingen van die eigenschap. Bijvoorbeeld, als je wilt dat alle elementen binnen een bepaalde sectie dezelfde tekstkleur hebben als hun ouder, ongeacht hun eigen specifieke stijlen.
* `initial`: zet de eigenschap terug naar de standaard (initial) waarde uit de specificatie. Gebruik dit wanneer je een eigenschap wilt resetten naar de standaardwaarde, onafhankelijk van de waarden die mogelijk zijn geërfd van een ouder-element.
  * Bijvoorbeeld: `p { color: initial; }` zorgt dat de paragraaf de browser-standaardkleur gebruikt, niet de geërfde kleur.

## Voorbeelden

1. Basis inheritance voorbeeld

HTML:

```html
<div class="article">
  <h1>Titel van het artikel</h1>
  <p>Een inleidende paragraaf met <a href="#">een link</a>.</p>
</div>
```

CSS:

```css
.article {
  color: #333;
  font-family: "Georgia", serif;
}

/* h1 en p zullen automatisch dezelfde kleur en font erven */
```

2. Forceren van inheritance voor een niet-geërfde eigenschap

Stel dat je wilt dat een inline element de `background-color` van zijn ouder overneemt. Backgrounds erven niet automatisch, maar je kunt het forceren:

```css
.header {
  background-color: #f4f4f4;
}

.header em {
  background-color: inherit; /* nu erft het emphasised element de background */
}
```

3. Resetten naar de browser-standaard

```css
.button {
  color: #fff;
  background: #1976d2;
}

.button small {
  color: initial; /* small gebruikt de browser-standaardkleur (vaak black) */
}
```

## Praktische tips en valkuilen

* Verwacht niet dat alle CSS overerft. Controleer of een eigenschap daadwerkelijk geërfd wordt (test dit in de browser).
* Gebruik inheritance bewust om herhaling in je CSS te verminderen: zet de globale typografiestijlen op `body` of op een container zoals `.article`.
* Pas op met `inherit` op eigenschappen als `display` of `position` — het kan onverwachte layout-effecten hebben.
