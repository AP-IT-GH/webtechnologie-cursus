---
cover: >-
  https://images.unsplash.com/photo-1581166397057-235af2b3c6dd?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxOTcwMjR8MHwxfHNlYXJjaHw1fHx0b29sc3xlbnwwfHx8fDE3NjAwOTIxMzl8MA&ixlib=rb-4.1.0&q=85
coverY: -658.7386424371996
---

# IDE

Codium (ook wel VSCodium genoemd) is een populaire, privacygerichte build van Visual Studio Code die veel wordt gebruikt in de webontwikkelingsgemeenschap. Het biedt een gebruiksvriendelijke interface en een uitgebreide set functies vergelijkbaar met VS Code. Laten we enkele belangrijke aspecten van het gebruik van Codium in het kader van webtechnologie verkennen.

## Installatie van Codium:

* Bezoek de officiële [VSCodium-website](https://vscodium.com/).
* Download de versie die compatibel is met je besturingssysteem.
* Volg de installatie-instructies.

### Projectmappen in Codium

* Open een map of project in Codium met behulp van `File > Open Folder`.
* Gebruik de zijbalk (Explorer) om door je projectbestanden te navigeren.
* Werk met meerdere projecten tegelijkertijd door ze in **verschillende** vensters te openen.
  * In 1 Codium-venster heb je dus maximaal 1 project/oefening gelijktijdig openstaan.

{% hint style="info" %}
* In Windows kan je een map openen met Codium via rechtermuisklik.
* In MacOS kan je de map naar het symbool van Codium in jouw dock slepen.
{% endhint %}

### Emmet: snel HTML en CSS typen

* Emmet is een krachtige toolkit voor webontwikkelaars waarmee je sneller HTML en CSS kunt typen. Deze zit standaard geintegreerd in Codium.
* Typ een eenvoudige HTML-structuur zoals `div>ul>li*3` en druk op `Tab` om het uit te vouwen naar een volledige structuur.
* Een nieuw HTML-bestand `scaffolden` kan je doen door `!` te typen en op `Tab` te drukken.
* Hier vind je een uitgebreide [Emmet Cheat Sheet](https://docs.emmet.io/cheat-sheet/).

## Configuratie Codium

In Codium worden instellingen bewaard in een `settings.json` bestand. We gaan enkele instellingen toevoegen die het werken met webtechnologie aangenamer maken. Voel je vrij om deze instellingen op termijn aan te passen naar jouw voorkeur.

* Druk op `Ctrl+Shift+P` (of `Cmd+Shift+P` op macOS) om het Command Palette te openen.
* Typ `Preferences: Open Settings (JSON)` en selecteer deze optie om de instellingen in JSON-formaat te openen.
* Alternatief: Je kunt ook naar de instellingen navigeren via `File > Preferences > Settings` (of `Codium > Settings > Settings` op macOS), en daar de JSON-instellingen openen door op het `Open Settings (JSON)` icoon in de rechterbovenhoek van het instellingenvenster te klikken.
* Voeg de volgende configuraties toe aan je settings.json:

```json
{
  "files.autoSave": "afterDelay",
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "explorer.compactFolders": false,
  "window.restoreWindows": "none"
}
```

Wat meer uitleg bij elke instelling:
* `files.autoSave` zorgt ervoor dat bestanden automatisch worden opgeslagen na een korte vertraging.
* `editor.formatOnSave` zorgt ervoor dat de code automatisch wordt geformatteerd bij het opslaan.
* `editor.defaultFormatter` stelt Prettier in als de standaard formatter voor je code.
* `explorer.compactFolders` schakelt het samenvoegen van mappen in de bestandsverkenner uit, zodat je een duidelijk overzicht hebt van je projectstructuur.
* `window.restoreWindows` voorkomt dat Codium automatisch vensters herstelt bij het opstarten, wat handig is bij het werken met meerdere projecten.

## Extensies installeren

In Codium heb je de mogelijkheid om je editor uit te breiden door extensies of plug-ins te installeren. In deze sectie bespreken we enkele nuttige extensies voor dit vak.

![icoon van extensies in Codium](.gitbook/assets/ide-extensies.png)

### [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

* Prettier automatiseert het formatteren van je code volgens vastgestelde regels.

### [Hotplate — Live Server](https://marketplace.visualstudio.com/items?itemName=maithanhduyan.hotplate)

* Voegt een lokale ontwikkelserver toe aan Codium, zodat je je website live kunt bekijken tijdens het ontwikkelen.
* Klik na de installatie op de "Go Live" knop rechtsonder in Codium om de server te starten.
* Je website wordt geopend in je standaard webbrowser en wordt automatisch vernieuwd bij wijzigingen in je code.

### [HTMLHint](https://marketplace.visualstudio.com/items?itemName=HTMLHint.vscode-htmlhint)

* Installeer de HTMLHint extensie in Codium.
* Deze plugin maakt eventuele fouten in HTML zichtbaarder in je IDE.

### [Github Pull Requests](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)

* Installeer de GitHub Pull Requests extensie in Codium.
* Log in met je GitHub-account (klik op het account-icoontje links onderaan boven het tandwiel en kies "Sign in with Github to use GitHub Pull Requests").
* Met deze plugin kun je git commando's op een visuele manier uitvoeren vanuit Codium

### [axe Linter](https://marketplace.visualstudio.com/items?itemName=deque-systems.vscode-axe-linter)
* Installeer de axe Linter extensie in Codium.
* Deze plugin helpt je bij het verbeteren van de toegankelijkheid van je website door mogelijke problemen te identificeren en suggesties te geven voor verbeteringen.

### [CSS Peek](https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek)
* Installeer de CSS Peek extensie in Codium.
* Met deze plugin kun je direct naar de CSS-definities van je HTML-elementen springen, waardoor het gemakkelijker wordt om de styling van je website te beheren en te begrijpen.