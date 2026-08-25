# elementen

Een klassiek HTML-element bestaat uit 3 belangrijke onderdelen: de opening, inhoud en sluiting. Zowel de opening als de sluiting beginnen met het teken `<` en eindigen met het teken `>`. Tussen deze tekens staat de naam van het element. De naam van het opening- en sluitingselement zijn altijd hetzelfde. Vóór de naam van de sluitingstag wordt een schuine streep geplaatst (/).

```html
<element>
    inhoud van het element
</element>
```

Tekst indelen houdt in dat je stukken of onderdelen van die tekst moet kunnen benoemen, zodat de browser weet hoe de tekst in zijn geheel moet worden weergegeven. Om de structuur van een webpagina te beschrijven voegen we code toe aan de woorden die op de pagina moeten verschijnen. Die toegevoegde code worden ook metagegevens genoemd.

Als je schrijft voor het web moet je metagegevens aan de tekst toevoegen om de indeling ervan aan te geven. In HTML worden die metagegevens voorgesteld als tags. HTML is niet hoofdlettergevoelig. Er geldt een algemene afspraak om alle HTML-code in kleine letters te schrijven.

## attributen

Op ieder HTML-element kan je een reeks attributen gaan definiëren. Deze attributen zijn eigenschappen van het element. Zo kan je elementen specifieke informatie meegeven.

```html
<p id="ipsum" class="lorum">Lorem ipsum dolor sit amet, consectutor!</p>
```

### id

Het `id`-attribuut kan worden toegekend aan eender welk HTML-element. Het wordt gebruikt om gebruikte elementen appart te kunnen identificeren. Je kan zowel vanuit CSS als vanuit JavaScript elementen aanspreken. Het is van belang dat geen 2 elementen hetzelfde id hebben anders is dit niet meer uniek.

### class

Het `class`-attribuut wordt voornamelijk gebruikt om elementen te klasseren, bijvoorbeeld het onderscheid maken tussen een p-element gebruikt voor een artikel en een p-element gebruikt voor een reactie.

## meta

Meta-elementen bevatten informatie over de webpagina zoals de gebruikte karakterset en keywords. Het is belangrijk dat het meta-element `charset` altijd voorzien is. Dit zorgt er namelijk voor dat de browser weet welke karakterset hij moet tonen. Het meta-element `keywords` is ook altijd aangeraden om beter gevonden te worden door zoekmachines.

```html
<head>
  <meta charset="UTF-8">
  <meta name="description" content="Free Web tutorials">
  <meta name="keywords" content="HTML,CSS,XML,JavaScript">
  <meta name="author" content="John Doe">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head> 
```
