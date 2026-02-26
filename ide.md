---
cover: >-
  https://images.unsplash.com/photo-1581166397057-235af2b3c6dd?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxOTcwMjR8MHwxfHNlYXJjaHw1fHx0b29sc3xlbnwwfHx8fDE3NjAwOTIxMzl8MA&ixlib=rb-4.1.0&q=85
coverY: -658.7386424371996
metaLinks:
  alternates:
    - https://app.gitbook.com/s/CyMmymf8tiNQ4Ws9WmHV/ide
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
- In Windows kan je een map openen met Codium via rechtermuisklik.
- In MacOS kan je de map naar het symbool van Codium in jouw lint slepen.
{% endhint %}

### Emmet: snel HTML en CSS typen

* Emmet is een krachtige toolkit voor webontwikkelaars waarmee je sneller HTML en CSS kunt typen. Deze zit standaard geintegreerd in Codium.
* Typ een eenvoudige HTML-structuur zoals `div>ul>li*3` en druk op `Tab` om het uit te vouwen naar een volledige structuur.
* Hier vind je een uitgebreide [Emmet Cheat Sheet](https://docs.emmet.io/cheat-sheet/).

## Extensies installeren

In Codium heb je de mogelijkheid om extensies te installeren. In deze sectie bespreken we enkele nuttige extensies voor dit vak.

![icoon van extensies in Codium](.gitbook/assets/ide-extensies.png)

### [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

* Installeer de Prettier-extensie in Codium.
* Prettier automatiseert het formatteren van je code volgens vastgestelde regels.

### [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

* Installeer de Live Server-extensie in Codium.
* Klik met de rechtermuisknop op je HTML-bestand en selecteer "Open with Live Server".
* Je ziet een live voorbeeld van je website en automatische updates bij het opslaan van bestanden.

### [HTMLHint](https://marketplace.visualstudio.com/items?itemName=HTMLHint.vscode-htmlhint)

* Installeer de HTMLHint extensie in Codium.
* Deze plugin maakt eventuele fouten in HTML zichtbaarder in je IDE.

### [Github Pull Requests](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)

* Installeer de GitHub Pull Requests extensie in Codium.
* Log in met je GitHub-account (klik op het account-icoontje links onderaan boven het tandwiel en kies "Sign in with Github to use GitHub Pull Requests").
* Met deze plugin kun je git commando's op een visuele manier uitvoeren vanuit Codium

### [~~CSS Nesting Syntax Highlighting~~](https://marketplace.visualstudio.com/items?itemName=jacobcassidy.css-nesting-syntax-highlighting)

~~\* Installeer de extensie in Codium.~~ ~~\* Deze extensie zorgt ervoor dat je CSS-nesting syntax correct wordt gemarkeerd in je CSS-bestanden. Dit wordt ondersteund in moderne browsers maar zit nog niet standaard in Codium.~~

{% hint style="info" %}
Zit intussen standaard in Codium, dus deze extensie is niet meer nodig.
{% endhint %}

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
  "window.restoreWindows": "none",
  "chat.agent.enabled": false,
  "chat.disableAIFeatures": true,
  "telemetry.feedback.enabled": false,
  "telemetry.telemetryLevel": "off"
}
```
