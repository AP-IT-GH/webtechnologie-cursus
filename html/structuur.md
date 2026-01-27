# 1: structuur

Als je een krant bekijkt staan erop een blad verschillende elementen die telkens weer terugkeren: een hoofdtitel, een chapeau, een tussentitel, paragrafen enz. Voor elk artikel is er een kop, wat tekst en eventueel één of meerdere paragrafen. Structuur helpt lezers de artikels in de krant te begrijpen. Er bestaan nog andere documenttypes, bijvoorbeeld een verzekeringsformulier. Verzekeringsformulieren hebben verschillende rubrieken, elk met een kop en een vragenlijst met invulvakken of selectievakjes om aan te vinken.

HTML beschrijft de structuur van webpagina's. HTML is de afkorting van **HyperText Markup Language**. We maken gebruik van HTML-elementen (tags) om de verschillende soorten inhoud van elkaar te onderscheiden. Voor elk van de meest voorkomende soorten inhoud bestaat er een specifiek HTML-element.

## basisstructuur

Om een HTML-pagina te starten heb je enkele belangrijke basiselementen die steeds terugkomen.

De declaratie wordt helemaal bovenaan de pagina geplaatst. En is dus het eerste HTML-element dat je nodig hebt om een webpagina te maken. Dit element is uniek in zijn soort, want het was/is het enige element dat je in hoofdletters moe(s)t schrijven.

De HTML5-versie is gemakkelijk te gebruiken:

```html
<!DOCTYPE html>
```

Het `<!DOCTYPE>`-element voor HTML van vroeger, is een erfenis van SGML, en bestond uit drie hoofdonderdelen: de codenaam, de openbare id-reeks en de DTD (Document Type Definition) URL. Het is een vreemde mix van hoofdletters, kleine letters, aanhalingstekens en schuine strepen, en een URL naar een nog minder leesbaar bestand.

De browser maakt gebruik van het DOCTYPE-element om te weten hoe de webpagina gerenderd moet worden. Het element was vroeger van groot belang om te bepalen welke versie van (x)HTML er gebruik werd. De HTML 5-specificatie stelt dat de `<!DOCTYPE>` niet hoofdlettergevoelig is. Maar eerdere versies van HTML vereisen dat `<!DOCTYPE>` in hoofdletters staat. Je zal merken dat veel van HTML5 achterwaarts compatibel is met eerdere versies. De overgrote meerderheid van browsers op de markt herkennen de nieuwe `<!DOCTYPE>` tag en herkennen die als gewoon standaard. Met behulp van de achterwaarts compatibele versie van de `<!DOCTYPE>` kan je nu al HTML5 gebruiken en toch compatibel zijn met browsers van het verleden!

### \<html>

Het `<html>`-element markeert het begin en einde van een HTML-document en geeft aan dat het document HTML-code bevat. Dit element wordt ook wel het root-element genoemd.

Een HTML-document bestaat uit twee delen: de `<head>` en de `<body>`.

```html
<html lang="nl-BE">
   <head>
   </head>
   <body>
   </body>
</html>
```

In het voorbeeld zie je het juiste gebruik van het lang-attribuut. Dit attribuut wordt voornamelijk gebruikt door zoekmachines die webpagina's indexeren en door voorleessoftware om te kunnen achterhalen hoe ze de tekst moeten uitspreken. Ook jouw browser gebruikt dit om vertaalsuggesties te doen.
