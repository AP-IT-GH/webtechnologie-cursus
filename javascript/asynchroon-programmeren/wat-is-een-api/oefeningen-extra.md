# extra oefeningen

## oefening: treinverbindingen

**leerdoelen**

* werken met objecten
* dot notatie gebruiken
* gebruik/uitlezen van JSON
* schrijven van functies
* gebruik maken van async/await

**functionele analyse**

api url 1: [**https://api.irail.be/stations/?format=json\&lang=nl**](https://api.irail.be/stations/?format=json\&lang=nl)

Deze api geeft je alle NMBS treinstations.

api url 2: [**https://api.irail.be/connections/?from=BE.NMBS.008814308\&to=BE.NMBS.008822004\&format=json**](https://api.irail.be/connections/?from=BE.NMBS.008814308\&to=BE.NMBS.008822004\&format=json)

Deze api geeft je de eerstvolgende verbindingen tussen 2 treinstations. Hiervoor heb je de 2 id's van de gekozen treinstations nodig. Hier Halle en Mechelen.

Je maakt een programma dat de eerstvolgende treinverbindingen weergeeft tussen 2 gekozen treinstations.

**technische analyse**

Maak een **async function getStations()** dat alle stations opvraagt zonder externe bibliotheken. Deze functie geeft een station\[] terug. Hiervoor genereer je de interface op [https://app.quicktype.io](https://app.quicktype.io)

Maak vervolgens een **async function askStation()** dat de gebruiker vraagt een station in te typen. Indien het station niet werd gevonden in de lijst met stations wordt er om een nieuwe ingave gevraagd. Werd het station wel gevonden dan geeft de functie het volledige gevonden station-object terug.

Maak een **async function main()** aan. Maak 2 variabelen aan met als interface type station en gebruik 2 maal de askStation functie om een station te vragen aan de gebruiker.

Gebruik van beide station variabelen de juiste overeenkomstige .id en voer een request uit met de 2e api om de trein-verbindingen op te vragen.

Zoek online een unixToString functie op om de tijdsnotatie weer te geven in een leesbaar formaat. Of je kan uiteraard gebruik maken van de api in de oefening hierboven.

**voorbeeldinteractie**

```
geef een station op aub? Halle
geef een station op aub? Meche
het station werd niet teruggevonden. gelieve een nieuwe ingave te doen.
geef een station op aub? Mechelen

eerstvolgende treinverbindingen:
vertrek: Halle om 5/12/2021 20:37:00       
aankomst: Mechelen om 5/12/2021 22:04:00   
+++++++++++++++++++++++++++++++++++++++++++
vertrek: Halle om 5/12/2021 20:45:00       
aankomst: Mechelen om 5/12/2021 22:16:00   
+++++++++++++++++++++++++++++++++++++++++++
vertrek: Halle om 5/12/2021 20:58:00       
aankomst: Mechelen om 5/12/2021 22:23:00   
+++++++++++++++++++++++++++++++++++++++++++
vertrek: Halle om 5/12/2021 21:20:00       
aankomst: Mechelen om 5/12/2021 22:54:00   
+++++++++++++++++++++++++++++++++++++++++++
vertrek: Halle om 5/12/2021 21:37:00       
aankomst: Mechelen om 5/12/2021 23:04:00   
+++++++++++++++++++++++++++++++++++++++++++
vertrek: Halle om 5/12/2021 21:41:00       
aankomst: Mechelen om 5/12/2021 23:16:00   
+++++++++++++++++++++++++++++++++++++++++++
vertrek: Halle om 5/12/2021 21:41:00       
aankomst: Mechelen om 5/12/2021 23:23:00   
+++++++++++++++++++++++++++++++++++++++++++
```
