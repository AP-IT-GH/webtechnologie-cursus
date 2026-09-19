# reset vs normalize

## het probleem: de user agent stylesheet

Ook als je zelf nog geen enkele regel CSS geschreven hebt, ziet een HTML-pagina er niet "naakt" uit. Een `h1` is groot en vet, een `ul` heeft bolletjes en inspringing, de `body` heeft een marge van `8px`, links zijn blauw en onderlijnd, ...

Die stijlen komen uit de **user agent stylesheet**: een CSS-bestand dat in elke browser ingebouwd zit. Je kan ze bekijken in de DevTools, onder het tabblad *Styles* staan ze aangeduid met `user agent stylesheet`.

Daar zijn twee problemen mee:

1. **Elke browser heeft zijn eigen versie.** Chrome, Firefox en Safari gebruiken niet exact dezelfde standaardwaarden. Een formulierveld of een `h1` in een `section` kan er dus net iets anders uitzien, afhankelijk van de browser.
2. **De standaardwaarden zitten vaak in de weg.** Denk aan de marge op de `body`, of aan `box-sizing: content-box` (zie [box model](box-model.md)). Je begint dan telkens met het "wegwerken" van stijlen die je nooit gevraagd hebt.

Om dat op te lossen, laad je vóór je eigen CSS een extra stylesheet in die de browserstijlen onder controle brengt. Daarvoor zijn er twee strategieën: **resetten** of **normaliseren**.

## twee strategieën

| | reset | normalize |
| --- | --- | --- |
| **idee** | Gooi (bijna) alle browserstijlen weg. | Behoud de nuttige browserstijlen, maar maak ze gelijk in elke browser. |
| **startpunt** | Een blanco pagina: alle tekst ziet er hetzelfde uit. | Een pagina die er "normaal" uitziet, in elke browser even normaal. |
| **koppen, lijsten, links** | Geen grootte, geen bolletjes, geen kleur of onderlijning. | Blijven zoals je ze kent. |
| **wat moet je zelf doen** | Alles opnieuw stijlen, ook de basis. | Enkel aanpassen wat je anders wil. |
| **in deze cursus** | [The New CSS Reset](https://github.com/elad2412/the-new-css-reset) | [modern-normalize](https://github.com/sindresorhus/modern-normalize) |

Je kiest **één** van de twee. Beide samen gebruiken heeft geen zin: de reset gooit de genormaliseerde stijlen toch weer weg.

## optie 1: The New CSS Reset

{% embed url="https://github.com/elad2412/the-new-css-reset" %}

The New CSS Reset is een **volledige reset**. Na het inladen ziet elk element er zo goed als hetzelfde uit: gewone tekst, zonder marges, zonder opmaak. Het enige dat behouden blijft, is het `display`-type van elk element: een `div` blijft een blokelement, een `span` blijft inline (zie [block vs. inline](../html/block-vs-inline.md)).

Het hart van het bestand is deze regel:

```css
*:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)) {
    all: unset;
    display: revert;
}
```

* `all: unset` zet **alle** eigenschappen van alle elementen terug naar hun basiswaarde (of laat ze erven van hun parent, zie [overerving](inheritance.md)).
* `display: revert` zet enkel de `display`-eigenschap terug naar de browserwaarde.
* Een paar elementen (zoals `img`, `video` en `svg`) worden overgeslagen, omdat ze anders stuk gaan.

Daarna volgen nog enkele kleinere regels. De belangrijkste:

```css
/* Het border-box model voor alle elementen */
*,
*::before,
*::after {
    box-sizing: border-box;
}

/* Lijsten krijgen geen bolletjes of nummers meer */
ol, ul, menu, summary {
    list-style: none;
}

/* Afbeeldingen worden nooit groter dan hun container */
img {
    max-inline-size: 100%;
    max-block-size: 100%;
}

/* Elementen met het hidden attribuut blijven verborgen */
:where([hidden]) {
    display: none;
}
```

**Gevolgen waar je rekening mee moet houden:**

* Een `h1` is even groot als een `p`. Je moet zelf `font-size` en `font-weight` instellen voor alle koppen.
* Een `p` of `h2` heeft geen marge meer. Witruimte tussen blokken moet je zelf voorzien.
* Een `ul` of `ol` toont geen bolletjes of nummers. Handig voor een navigatiebalk, maar voor een gewone opsomming moet je `list-style` opnieuw instellen.
* Links zijn niet meer blauw en niet meer onderlijnd. Zorg dat ze voor de gebruiker toch herkenbaar blijven.
* Knoppen en formuliervelden hebben geen rand of achtergrond meer. Ze zijn onzichtbaar tot je ze stijlt.
* `strong` en `em` zijn niet meer vet of cursief.

**Kies deze reset als** je een eigen design volledig vanaf nul wil opbouwen en controle wil over elk detail. Dit is ook de reset die in de labo-oefeningen al voor je klaarstaat (`reset.css`).

## optie 2: modern-normalize

{% embed url="https://github.com/sindresorhus/modern-normalize" %}

modern-normalize is een **normalize**. Het gooit niets weg, maar strijkt de verschillen tussen browsers glad en past een paar onhandige standaardwaarden aan. Na het inladen ziet je pagina er nog altijd uit zoals je gewend bent: koppen zijn groot en vet, lijsten hebben bolletjes, links zijn blauw.

modern-normalize is een moderne opvolger van het oudere [Normalize.css](https://necolas.github.io/normalize.css/). Het ondersteunt enkel recente browsers en is daardoor een stuk kleiner.

De belangrijkste regels:

```css
/* Het border-box model voor alle elementen */
*,
::before,
::after {
    box-sizing: border-box;
}

/* Een beter standaardlettertype: het systeemlettertype van het besturingssysteem */
html {
    font-family: system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
        'Apple Color Emoji', 'Segoe UI Emoji';
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    tab-size: 4;
}

/* De standaardmarge van 8px rond de pagina verdwijnt */
body {
    margin: 0;
}

/* Formulierelementen nemen het lettertype van de pagina over */
button,
input,
optgroup,
select,
textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
}
```

Daarnaast bevat het bestand nog kleine correcties, bijvoorbeeld voor `strong`, `code`, `small`, `sub`, `sup` en een aantal types van `input`, zodat ze in elke browser gelijk worden weergegeven.

**Gevolgen waar je rekening mee moet houden:**

* De standaardmarges op koppen, paragrafen en lijsten blijven bestaan. Als die je niet bevallen, moet je ze zelf overschrijven.
* Knoppen en formuliervelden behouden hun browserstijl. Ze zijn meteen bruikbaar, maar zien er nog niet uit zoals in jouw design.

**Kies deze normalize als** je wil vertrekken van verstandige standaardwaarden en enkel wil aanpassen wat nodig is. Dat is vaak sneller, zeker voor pagina's met veel gewone tekst.

## het verschil in de praktijk

Neem deze HTML:

```html
<h1>Mijn blog</h1>
<p>Welkom op mijn blog. Lees ook <a href="#">mijn laatste artikel</a>.</p>
<ul>
    <li>HTML</li>
    <li>CSS</li>
</ul>
<button>Abonneer</button>
```

| element | zonder reset of normalize | met modern-normalize | met The New CSS Reset |
| --- | --- | --- | --- |
| `body` | `8px` marge | geen marge | geen marge |
| `h1` | groot, vet, met marge | groot, vet, met marge | gewone tekst, geen marge |
| `p` | marge boven en onder | marge boven en onder | geen marge |
| `a` | blauw en onderlijnd | blauw en onderlijnd | zelfde kleur als de tekst, niet onderlijnd |
| `ul` | bolletjes en inspringing | bolletjes en inspringing | geen bolletjes, geen inspringing |
| `button` | browserknop | browserknop, lettertype van de pagina | gewone tekst, geen rand of achtergrond |
| lettertype | serif (browserafhankelijk) | systeemlettertype | serif (browserafhankelijk) |
| `box-sizing` | `content-box` | `border-box` | `border-box` |

Probeer het zelf: open een pagina met deze HTML in de browser, koppel telkens een ander bestand en vergelijk in de DevTools.

## gebruiken in je project

1. Download het bestand:
   * The New CSS Reset: [`reset.css`](https://raw.githubusercontent.com/elad2412/the-new-css-reset/main/css/reset.css)
   * modern-normalize: [`modern-normalize.css`](https://raw.githubusercontent.com/sindresorhus/modern-normalize/main/modern-normalize.css)
2. Plaats het in de map `css` van je project, naast je eigen stylesheet.
3. Koppel het in de `head` van **elke** pagina, **vóór** je eigen stylesheet.

```
project/
├─ index.html
└─ css/
   ├─ reset.css          (of modern-normalize.css)
   └─ style.css
```

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mijn blog</title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/style.css">
</head>
```

{% hint style="warning" %}
**De volgorde is belangrijk.** Bij regels met dezelfde specificiteit wint de regel die als laatste ingeladen wordt (zie [voorrangsregels](voorrangsregels.md)). Koppel je de reset of normalize ná je eigen stylesheet, dan kan die je eigen stijlen overschrijven.
{% endhint %}

{% hint style="info" %}
The New CSS Reset gebruikt de pseudo-klasse `:where()`. Alles binnen `:where()` telt voor **0** mee in de specificiteit. Daardoor wint zelfs de eenvoudigste selector uit je eigen CSS (bijvoorbeeld `h1`) van de reset, en hoef je nooit met zwaardere selectors of `!important` te werken om iets te overschrijven.
{% endhint %}

Pas het bestand zelf niet aan. Wil je iets anders, overschrijf het dan in je eigen stylesheet. Zo blijft duidelijk wat van de reset komt en wat van jou.

## welke kies je?

Er is geen foute keuze, zolang je weet waarom je kiest.

* Wil je **alles zelf bepalen** en vertrek je liever van een blanco blad? Kies **The New CSS Reset**.
* Wil je **vertrekken van verstandige standaardwaarden** en enkel aanpassen wat nodig is? Kies **modern-normalize**.

Kies je voor een reset, vergeet dan niet dat je ook de "onzichtbare" basis opnieuw moet opbouwen: herkenbare links, zichtbare knoppen en formuliervelden, en opsommingstekens waar het echt om een lijst gaat.
