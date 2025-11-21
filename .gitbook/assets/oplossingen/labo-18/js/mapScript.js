/* In dit script plaats je de code om de kaart in de id apMap te tekenen, zodat de AP-Hogeschool met adres Ellermanstraat 33 gecentreerd staat.  
Gebruik hiervoor de documentatie op https://leafletjs.com/ 
*/
let map = L.map('apMap').setView([51.22992, 4.41612], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Verander het icoon van de marker naar "icon-ap.png". Let hierbij op de afmetingen [36, 20] en het ankerpunt [0, 20].
let APicon = L.icon({
    iconUrl: './assets/icon-ap.png',

    iconSize:     [36, 20], // size of the icon
    iconAnchor:   [0, 20], // point of the icon which will correspond to marker's location
});

L.marker([51.22992, 4.41612], {icon: APicon}).addTo(map);