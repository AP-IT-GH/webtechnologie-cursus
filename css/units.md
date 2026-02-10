# units

Lettergroottes, randdiktes, hoogte en breedte van elementen en witruimtes hebben allemaal een maat die benoemd moet kunnen worden. Ze worden onderverdeeld in twee soorten.

## absolute maten

In CSS worden maten zoals pica (pc), inches (in), centimeters (cm), millimeters (mm) en punten (pt) gebruikt. De absolute maten definiëren **een exacte grootte**, onafhankelijk van andere elementen op de webpagina. De meest voorkomende maten binnen deze categorie zijn **px** (pixels) en **pt** (punten).

Als webmaster moet er rekening gehouden worden met het verschil in weergave tussen Windows, Linux- en Mac-systemen. Bij Linux- en Mac-systemen wordt er best met pixels gewerkt, aangezien punten op deze twee systemen immers kleiner worden weergegeven dan op Windows.

**pixels (px)**: Pixels worden vaak gebruikt door webdesigners omdat ze op deze manier precies weten hoeveel ruimte hun tekst zal innemen op een webpagina. Het aantal pixels is gevolgd door de letters px.

`css element { width: 768px; }`

**mm, cm**: aantal millimeters of centimeters\
**pt, pi**: Aantal points of picas. Een point is 1/72 van een inch en een pica is 12 points. Deze termen uit de drukkerswereld kunnen we ook in webpagina's gebruiken

Tegenwoordig hebben veel browsers de mogelijkheid om de tekst te vergroten of te verkleinen. Dit is zeer handig voor slechtzienden. Dit heeft echter geen invloed op tekst, waarvan de grootte in pixels of millimeters is opgegeven. Om tekst te laten meegroeien of -krimpen, dient de grootte in punten of een percentage opgegeven te worden. Bijvoorbeeld 150% voor grote tekst of 80% voor kleine tekst.

\{% hint type="info"} Om het gebruik van rem gemakkelijker te maken en te koppelen aan de standaard 16px voor de font-grootte van het HTML-element, wordt vaak de "rem 62.5 regel" toegepast. Door de font-size van het HTML-element in te stellen op 62.5%, wordt 1rem gelijk aan 10px (62.5% van 16px). Dit vergemakkelijkt het rekenen.

## relatieve maten

De **relatieve maten** geven geen exacte grootte weer, maar hun weergave is afhankelijk van andere elementen binnen de webpagina. De meest voorkomende maten binnen deze categorie zijn procent (**%**) en **em**. Enkele voorbeelden:

* 200% = 2x standaard lettergrootte
* 2em = 2x standaard lettergrootte
* 3em = 39 px (bij standaard lettergrootte 13 pixels)

**em**: Een em is gelijk aan de breedte van een letter m.\
**rem**: Een rem staat gelijk aan de font grootte van het HTML-element (voor de meeste browsers veelal standaard 16px).\
**ex:** Ex is de hoogte van de x-height van het huidige lettertype.

### percentages

Een webpagina heeft een vaste hiërarchie. Elementen op een pagina hebben in deze hiërarchie allemaal hun vaste plaats, afhankelijk van waar ze in de html geplaatst werden.

Bij units in percentages worden die **percentages** altijd uitgedrukt **tegenover het directe ouderelement** of het element dat er in de hiërarchie net boven staat. Stel dat de breedte en de hoogte van een element in percenten opgegeven wordt, moet ervoor gezorgd worden dat de breedte en de hoogte van het ouderelement ook in percenten uitgedrukt wordt.

```css
html {
    height: 100%;
    width: 100%
}
body {
    height: 100%;
    width: 100%               
}
```

### em

De em is een maateenheid die binnen de typografie gebruikt en gebaseerd is op de breedte van de hoofdletter M binnen een lettertype van een bepaalde puntgrootte.\
De afspraak is dat 1em gelijk is aan de standaard corpsgrootte (font-size), namelijk 16px. Die kan eventueel zelf ingesteld worden voor elk HTML-element.

```css
/* Stel dat de font-size in de body gelijk is aan 20px */
body { 
   font-size: 20px; 
} 
```

Dan betekent dat 1em voor dat element en al zijn kinderen gelijk is aan 20px.

```css
/* Dan betekent dat 1em voor dat element en al zijn kinderen gelijk is aan 20px.*/
div { 
   font-size: 2em; /* 2x 20px = 40px */
   width: 4em; /* 2x 40px = 80px */
   height: 4em; /* 2x 40px = 80px */
}
```

Het World Wide Web Consortium ( W3C ) beveelt het gebruik van **ems voor corpsgrootten** als een best practice vanwege hun schaalbaarheid.

### viewport eenheden

meer info: [https://css-tricks.com/fun-viewport-units/](https://css-tricks.com/fun-viewport-units/)

{% embed url="https://youtu.be/Utc_uhvTluk" %}
