# JS bibliotheken

## Wat is een JavaScript bibliotheek?
Een JavaScript bibliotheek (of *library*) is een verzameling kant-en-klare functies en hulpmiddelen die je kunt gebruiken in je eigen webproject. In plaats van alles zelf te programmeren, maak je gebruik van code die anderen al hebben geschreven, getest en verbeterd.

Libraries helpen je om sneller te werken, minder fouten te maken en complexere functionaliteit toe te voegen zonder diepgaande kennis van alle onderliggende technieken.

Voorbeelden van taken waar libraries bij helpen:
- Datums en tijden formatteren
- Tabellen en lijsten beter weergeven
- Grafieken en visualisaties maken
- Lay-outs en stijlen eenvoudiger toepassen
- Interactieve elementen toevoegen

## Waarom gebruiken we libraries?
Libraries lossen veelvoorkomende problemen op die ontwikkelaars anders steeds opnieuw moeten programmeren.

Ze zijn handig omdat ze:
- **Tijd besparen:** je hoeft minder eigen code te schrijven.
- **Betrouwbaar zijn:** populaire libraries worden veel gebruikt en goed onderhouden.
- **Consistentie bieden:** dezelfde functies werken overal op dezelfde manier.
- **Complexe taken eenvoudig maken:** bijvoorbeeld een grafiek maken met maar een paar regels code.

Libraries zijn dus een belangrijk onderdeel van modern webdevelopment.

## Hoe voeg je een library toe aan je project?
De meest eenvoudige manier om een library te gebruiken, is door een `<script>`-tag of `<link>`-tag toe te voegen aan je HTML-bestand. De library wordt dan via een CDN (Content Delivery Network) ingeladen.

Voorbeeld:
```HTML
<script src="https://cdn.jsdelivr.net/npm/dayjs"></script>
```

Daarna kun je de functies van de library meteen in je eigen JavaScript gebruiken.

## Voorbeelden van veelgebruikte libraries

### Tailwind CSS 
Tailwind maakt het heel makkelijk om snel nette layouts te bouwen met alleen class-namen.

##### Voorbeeld
```HTML
<!DOCTYPE html>
<html>
<head>
  <title>Tailwind Voorbeeld</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 p-10">

  <h1 class="text-3xl font-bold mb-4">Welkom bij Tailwind CSS</h1>

  <div class="bg-white p-6 rounded-xl shadow-md">
    <p class="text-gray-700">
      Met Tailwind kun je heel snel stijlen toevoegen met simpele class-namen.
    </p>
    <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
      Klik mij
    </button>
  </div>

</body>
</html>
```

##### Uitleg

**1. Laden van Tailwind CSS**
```HTML
<script src="https://cdn.tailwindcss.com"></script>
```
Deze regel zorgt ervoor dat Tailwind direct beschikbaar is in de pagina, zonder installatie of configuratie.

**2. Styling via class-attributen**
Tailwind gebruikt alleen class-namen om opmaak toe te passen.
Bijvoorbeeld:
- `bg-gray-100` → lichtgrijze achtergrond
- `p-10` → padding van 10 Tailwind-eenheden
- `text-3xl` → grote titel
- `rounded-xl` → extra afgeronde hoeken
- `shadow-md` → middelgrote schaduw

**3. Het knopje wordt gestyled met kleur, padding, hover-effect**
`bg-blue-500` `text-white` `px-4` `py-2` `rounded` `hover:bg-blue-600`
→ zonder een regel CSS te schrijven.


### Chart.js
Met Chart.js creëer je met enkele regels code een volledige, professionele grafiek.

##### Voorbeeld
```HTML
<!DOCTYPE html>
<html>
<head>
  <title>Chart.js Voorbeeld</title>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body style="font-family: Arial; padding: 20px;">

  <h1>Voorbeeldgrafiek met Chart.js</h1>
  <canvas id="grafiek" width="400" height="200"></canvas>

  <script>
    const canvas = document.getElementById('grafiek');

    new Chart(canvas, {
      type: 'bar',
      data: {
        labels: ['Rood', 'Blauw', 'Geel', 'Groen', 'Paars'],
        datasets: [{
          label: 'Aantal items',
          data: [12, 19, 3, 5, 7]
        }]
      }
    });
  </script>

</body>
</html>
```

##### Uitleg
**1. Laden van Chart.js**
```HTML
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
```
Dit maakt de Chart constructor beschikbaar.

**2. Een `<canvas>` element gebruiken**
Een grafiek wordt getekend in een `<canvas>`, een teken-gebied in HTML.

**3. Een nieuwe grafiek maken**
```JavaScript
new Chart(canvas, {...})
```
Hier maak je een staafdiagram aan.

**4. De data instellen**
```JavaScript
labels: ['Rood', 'Blauw', ...]
data: [12, 19, 3, 5, 7]
```
- `labels` = categorieën onderaan
- `data` = waarden van de staafjes

**5. Chart.js tekent alles automatisch**
Geen wiskunde, geen tekenlogica — Chart.js doet al het werk.


### Grid.js
Met Grid.js maak je met een klein stukje JavaScript een complete interactieve tabel.

##### Voorbeeld
```HTML
<!DOCTYPE html>
<html>
<head>
  <title>Grid.js Voorbeeld</title>

  <link
    href="https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css"
    rel="stylesheet"
  />

  <script src="https://cdn.jsdelivr.net/npm/gridjs/dist/gridjs.umd.js"></script>
</head>
<body style="font-family: Arial; padding: 20px;">

  <h1>Interactieve Tabel met Grid.js</h1>

  <div id="tabel"></div>

  <script>
    new gridjs.Grid({
      columns: ['Naam', 'Email', 'Rol'],
      data: [
        ['Sanne', 'sanne@example.com', 'Admin'],
        ['Iris', 'iris@example.com', 'Editor'],
        ['Tim', 'tim@example.com', 'Student'],
        ['Lars', 'lars@example.com', 'Viewer']
      ],
      search: true,
      sort: true,
      pagination: {
        enabled: true,
        limit: 3
      }
    }).render(document.getElementById('tabel'));
  </script>

</body>
</html>
```

##### Uitleg
**1. CSS van Grid.js laden**
```HTML
<link ... mermaid.min.css">
```
Hiermee krijgt de tabel een nette basisvormgeving.

**2. Grid.js zelf laden**
```HTML
<script src="gridjs.umd.js"></script>
```

**3. Een nieuwe tabel aanmaken**
```JavaScript
new gridjs.Grid({...})
```
Hier geef je de configuratie mee.

**4. Kolommen en data instellen**
```JavaScript
columns: ['Naam', 'Email', 'Rol']
data: [...]
```
Data wordt ingevuld als rijen met waarden.

**5. Interactiviteit aanzetten**
```JavaScript
search: true
sort: true
pagination: { enabled: true, limit: 3 }
```
Dit zorgt automatisch voor:
- zoekbalk
- sorteerbare kolommen
- pagina-indeling

**6. Tabel renderen in de `<div>`**
```Javascript
.render(document.getElementById('tabel'))
```

### Leaflet
Leaflet.js maakt het makkelijk om een interactieve kaart toe te voegen aan je website.

##### Voorbeeld
```HTML
<!DOCTYPE html>
<html>
<head>
  <title>Leaflet.js Voorbeeld</title>

  <!-- Leaflet CSS -->
  <link
    rel="stylesheet"
    href="https://unpkg.com/leaflet/dist/leaflet.css"
  />

  <!-- Leaflet JS -->
  <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>

  <style>
    #map {
      height: 400px;
    }
  </style>
</head>

<body style="font-family: Arial; padding: 20px;">

  <h1>Kaart met Leaflet.js</h1>

  <div id="map"></div>

  <script>
    const map = L.map('map').setView([51.2194, 4.4025], 13); // Antwerpen

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(map);

    const marker = L.marker([51.2194, 4.4025]).addTo(map);

    marker.bindPopup("Welkom in Antwerpen!").openPopup();
  </script>

</body>
</html>
```

##### Uitleg
**1. Leaflet CSS en JS laden**
```HTML
<link rel="stylesheet" href="leaflet.css">
<script src="leaflet.js"></script>
```
Leaflet heeft:
- CSS → voor de kaart-styling
- JS → voor de kaart-functionaliteit

Dat maakt de library direct bruikbaar.

**2. Een map-container maken**
```HTML
<div id="map"></div>
```
Leaflet heeft een HTML-element nodig om de kaart in te tonen.
De hoogte wordt in CSS ingesteld:

```CSS
#map { height: 400px; }
```

**3. Een nieuwe kaart aanmaken**
```JavaScript
const map = L.map('map').setView([51.2194, 4.4025], 13);
```

- `L.map('map')` → koppelt Leaflet aan het element met id "map".
- `setView([lat, lng], zoom)` → bepaalt:
  - coördinaten (Antwerpen)
  - zoomniveau (13)

**4. Een kaartlaag toevoegen**
```JavaScript
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {...})
```

- Dit laadt gratis kaarttegels van OpenStreetMap.
- `{z}` = zoomniveau
- `{x}` en `{y}` = welke tegel moet geladen worden

Je kunt dit zien als de “achtergrondplaatjes” van de kaart.

**5. Een marker (pin) toevoegen**
```JavaScript
const marker = L.marker([51.2194, 4.4025]).addTo(map);
```
Dit zet een pin op de kaart op dezelfde coördinaten als de startpositie.

**6. Een popup aan de marker koppelen**
```JavaScript
marker.bindPopup("Welkom in Antwerpen!").openPopup();
```
- `bindPopup` → maakt een tekstballon die verschijnt als je op de marker klikt
- `openPopup()` → zorgt dat de popup al meteen open staat


## > extra info voor labo

**defer**: Het script dat in de head van een HTML-bestand staat, wordt pas uitgevoerd nadat de hele pagina geladen is.

```javascript
<script src="javascript.js" defer></script>
```

{% embed url="https://flems.io/#0=N4IgzgpgNhDGAuEAmIBcIkQLYHsD6mAZhAE4B0AVmCADQiECWM1qA2qAHYCGWEaIZABbwsUWiFg4OiafwA8AQgAiAeQDCAFQCaABQCiAAmGiAfAB0Oc41HOWARjiQBPWxasBGExsEQDYWCQMAA7wBkSkBlzw8IF2AK6IcgD0gp4Wbv6BIX4ksAC8ZhjY+OHkVIVhEMQkJsmZwfCulkFePn4BDZEOAG6+JBAAjnEQYPBgBgwchDgkWFEMUgaEJDhYBvBtQVwkXADmO0GCBnbQOADuZAYAcjNzUFBONOuCDOOvBhw4oUE4YGAMdhgTxOsC4cUgz189Wy7wgAA84AlkMcqjNfBtfFsdvsuIcDPDXmMyMkWulmhMkAUQEF3IUTAAJaBQHAGADqMygSAUJKacha9POEF6JCeGMq1Ui0ViSL8QTgDEYI2eUUh7SyoTAghwcU5KPxCNgSKQBigUVIl287zOXCcquhoVBHAM-SGI1Ck2ms3mi2Wq1VWL2B0ExKSpI4biSDmctmS1ls4kgMAQCw4LBA7gAbKgAAwgAC+NE4PD46EwuAIVXNVHEkmkEFk6C4MBI8AAFEgcIbeNIyLsIPA9DBu-AAEJOACSSFbhRphQAlGRGCRRmoXpyyJ9MAA1JvDOcAbnzhZA3F4-Eo1DotZk8H4R6LZ-QZFgfxrUhvd7zAF080A %}
