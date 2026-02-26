---
metaLinks:
  alternates:
    - https://app.gitbook.com/s/CyMmymf8tiNQ4Ws9WmHV/html/intro-1
---

# Teksten

Een zeer belangrijk onderdeel van bijna elke webapplicatie is het voorzien van teksten op de webpagina. We gebruiken hiervoor specifieke HTML-elementen. Er bestaan véél meer HTML-elementen met betrekking tot het schrijven van teksten dan degene die we hier opsommen. Voor meer informatie verwijzen we naar [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML).

## titel

Koppen en subkoppen weerspiegelen de informatiehiërarchie in documenten. Zo kan een document beginnen met een grote kop, gevolgd door een inleiding of de meest belangrijke informatie. De pagina wordt verder opgebouwd met tussenkoppen en alinea's. Elk onderwerp kan bijvoorbeeld een nieuwe alinea beslaan, en elke paragraaf kan een kop hebben die de inhoud beschrijft.

In HTML zijn er 6 niveau's van titels voorzien. De elementen voor titels zijn te herkennen aan de letter 'h' van 'heading' en een niveaubepalend cijfer.

Ingebouwd in een browser zitten er al regels voor het weergeven van titels. Elk niveau van titels wordt op een unieke manier weergegeven. Deze weergave heeft echter niets te maken met de waarde van het HTML-element zelf.

```html
<h1>This is a Main Heading</h1>
<h2>This is a Level 2 Heading</h2>
<h3>This is a Level 3 Heading</h3>
<h4>This is a Level 4 Heading</h4>
<h5>This is a Level 5 Heading</h5>
<h6>This is a Level 6 Heading</h6>
```

{% hint style="info" %}
Hoewel het gebruik van meerdere `h1`-elementen op één pagina is toegestaan volgens de HTML-standaard, wordt dit niet beschouwd als een goede praktijk. Een pagina moet slechts 1 `h1`-element hebben. Dit element zal de inhoud van de pagina beschrijven.
{% endhint %}

## paragraaf

Doorlopende tekst wordt in `<p>` element geplaatst. Vóór en na een paragraaf plaatst de browser standaard witruimte ter grootte van ongeveer één blanco regel. Indien het element gevolgd wordt door een tweede `<p>` element dan schuiven de witruimtes in elkaar en resteert tussen de blokken tekst slechts één blanco regel.

```html
<p>lorem ipsum dolor sit amet, consectutor.</p>
```

{% hint style="info" %}
Er bestaan geen verschillende niveau's van `p`-elementen. Dus er bestaat enkel `<p>`. **Iets als een `p1`-element bestaat dus niet.**
{% endhint %}

## regeleinde

Om programmeren eenvoudig en overzichtelijk te houden, werd er besloten om extra witruimte, opgenomen in teksten, niet te tonen in de browser. Dit fenomeen noemen we: **"white space collapsing"**.

Om toch een regeleinde in te voeren, maken we gebruik van het `<br>`-element. Het `<br>`-element is een element zonder inhoud en heeft geen eindtag in HTML.

```html
<h1>Een korte titel</h1>
<p>Dit is een lange paragraaf waarin we graag op een bepaald moment een regeleinde plaatsen.<br>Een regeleinde is geen goede manier om zaken te positioneren in HTML.</p>
```

### boven- en onderschrift

Boven- en onderschrift zijn tekens die boven of onder de normale schrijfhoogte worden geplaatst, gewoonlijk in een iets kleiner [corps](https://nl.wikipedia.org/wiki/Lettertype#corps). Om deze eenvoudig te kunnen invoeren, kregen deze elk een eigen element, nl.: `<sup>`en `<sub>`. Deze worden gebruikt om bijvoorbeeld wiskundige formules te tonen in een browser.

```html
<p>In deze paragraaf komt een formule: a<sup>2</sup> = b<sup>2</sup> + c<sup>2</sup></p>
```

## citaten

We gaan vaak verwijzen naar werk van anderen. Hiervoor bestaan er verschillende mogelijkheden in HTML. Elk van deze mogelijkheden heeft een specifieke juiste toepassing. Het is belangrijk om de verschillende HTML-elementen dus goed uit elkaar te houden.

### blokcitaat

Wanneer we een volledig citaat los willen plaatsen van andere teksten. Maken we gebruik van het `<blockquote>`-element.

```html
<blockquote cite="http://en.wikipedia.org/wiki/Winnie-the-Pooh">
    <p>Did you ever stop to think, and forget to start again?</p>
</blockquote>
```

### inline citaat

Het `<q>`-element gebruiken we dan eerder wanneer we het citaat verwerken in onze eigen tekst.

```html
<p>As A.A. Milne said, <q cite="http://en.wikipedia.org/wiki/Winnie-the-Pooh">Some people talk to animals. Not many listen though. That's the problem.</q></p>
```

Je merkt in beide voorbeelden het `cite`-attribuut. Dit attribuut geeft de bron van het citaat weer. Er bestaat echter ook een `<cite>`-element dat wordt gebruikt om de titel van een werk te duiden (vb. de titel van een boek, een liedje, een film, een TV-serie, een schilderij, een beeldhouwwerk,...), maar nooit een te verwijzen naar een persoon.

## afkortingen

Wanneer we in onze tekst een afkorting willen plaatsen, kunnen we met het `<abbr>`-element ook ineens de volledige versie ervan tonen. Hiervoor maak je gebruik van het `title`-attribuut.

```html
<p><abbr title="Professor">Prof.</abbr> Stephen Hawking is a theoretical physicist and cosmologist.</p>
```

## auteur van de website

Met het `<address>`-element kan je de contactinformatie van de auteur/eigenaar van een document of van een artikel meegeven aan de lezer. Dit element heeft echter een andere betekenis afhankelijk van zijn locatie in het document.

Als het `<address>`-element in een `<body>`-element staat stelt het de contactinformatie van de auteur van de een webpagina voor. Als het `<address>`-element in een `<article>`-element staat, stelt het de contactinformatie met betrekking tot dat artikel voor.
