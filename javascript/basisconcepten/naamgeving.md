# naamgeving

## regels naamgeving

Er zijn twee limitaties voor variabele namen in JavaScript:

1. De naam mag alleen letters, getallen of de symbolen $ en \_ bevatten.
2. Het eerste karakter mag geen getal zijn.

Voorbeeld van valide namen:

```javascript
let userName;
let test123;
```

Als de naam bestaat uit verschillende woorden wordt in javascript vaak lowerCamelCase gebruikt. Woorden worden naast elkaar geplakt en elk woord buiten het eerste begint met een hoofdletter. Bijvoorbeeld: `myVeryLongName`

Wat interessant is dat het dollarteken $ en de underscore \_ wel mag gebruikt worden in variabele namen. Het zijn gewone symbolen zoals letters zonder een speciale betekenis.

Ook deze namen zijn geldig.

```javascript
let $ = 1;
let _ = 2;

console.log($ + _); // 3
```

Voorbeelden van niet geldige variabele namen:

```javascript
let 1a; // Mag niet starten met een getal

let my-name; // streepjes zijn niet aanvaard
```

{% hint style="info" %}
**hoofdlettergevoelig**\
Variabele genaamd `apple` en `AppLE` zijn twee verschillende variabelen.
{% endhint %}

{% hint style="warning" %}
**gereserveerde namen**

Er is een lijst van [gereserveerde woorden](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords), die niet mogen gebruikt worden als variabele namen omdat ze gebruikt worden door de taal zelf.

Bijvoorbeeld: `let`, `class`, `return` en `function` zijn gereserveerd.

De onderstaande code geeft een syntax error:

```
let let = 5; // can't name a variable "let", error!
let return = 5; // also can't name it "return", error!
```
{% endhint %}

### goede naamgeving

Een variabele moet een duidelijke, vanzelfsprekende betekenis hebben. Het moet de data beschrijven dat het opslaat. De naamgeving van een variabele is een van de meest belangrijke en complexe vaardigheid die je moet verkrijgen tijdens het programmeren. Een snelle blik op variabele namen kan snel laten zien welke code geschreven is door een beginnende programmeur en welke door een ervaren programmeur.

In een echt project wordt er veel meer tijd gestoken in het aanpassen en uitbreiden van bestaande code dan in nieuwe code te schrijven. Als we (of iemand anders) op een later moment terug in onze eigen code moeten werken is het veel eenvoudiger om je weg te vinden als alles goed een goede naam heeft gekregen. Denk dus altijd goed na over de juiste naam voor een variabele voordat je deze declareert. Op lange termijn zal je hier zeker veel uit halen.

Een paar eenvoudige regels die je kan volgen:

* Gebruik leesbare namen zoals `userName` of `shoppingCart`
* Gebruik zo weinig mogelijk afkortingen of korte namen zoals `a`, `b`, `c` tenzij je echt weet wat je aan het doen bent.
* Gebruik zo veel mogelijk beschrijvende namen. Probeer zoveel mogelijk vage termen zoals `data` of `value` te vermijden. Deze namen vertellen de lezer van je code eigenlijk niets extra.
* Probeer zo consistent mogelijk te zijn met je naamgeving binnen je team of je eigen code. Gebruik je ergens het concept `user` noem het dan op een ander moment niet `visitor`.

Al deze regels klinken waarschijnlijk heel eenvoudig, maar in de praktijk is dit allemaal niet zo eenvoudig.
