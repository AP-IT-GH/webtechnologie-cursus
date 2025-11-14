---
cover: >-
  https://images.unsplash.com/photo-1581166397057-235af2b3c6dd?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxOTcwMjR8MHwxfHNlYXJjaHw1fHx0b29sc3xlbnwwfHx8fDE3NjAwOTIxMzl8MA&ixlib=rb-4.1.0&q=85
coverY: -658.7386424371996
---

# IDE

Visual Studio Code (VSCode) is een populaire en krachtige geïntegreerde ontwikkelomgeving (IDE) die veel wordt gebruikt in de webontwikkelingsgemeenschap. Het biedt een gebruiksvriendelijke interface en een uitgebreide set functies. Laten we enkele belangrijke aspecten van het gebruik van VS Code in het kader van webtechnologie verkennen.

## Installatie van VS Code:

* Bezoek de officiële [VS Code-website](https://code.visualstudio.com/).
* Download de versie die compatibel is met je besturingssysteem.
* Volg de installatie-instructies.

![installatie-instructies vs code](<.gitbook/assets/image (19) (1).png>)

### Projectmappen in VS Code:

* Open een map of project in VS Code met behulp van `File > Open Folder`.
* Gebruik de zijbalk (Explorer) om door je projectbestanden te navigeren.
* Werk met meerdere projecten tegelijkertijd door ze in **verschillende** vensters te openen.
  * In 1 VS Code-venster heb je dus maximaal 1 project/oefening gelijktijdig openstaan.

{% hint style="info" %}
In Windows kan je een map openen met VS Code via rechtermuisklik. ![open map with VS Code in Windows](<.gitbook/assets/image (30) (1).png>)

In MacOS kan je de map naar het symbool van VS Code in jouw lint slepen.
{% endhint %}

### Emmet: snel HTML en CSS typen

* Emmet is een krachtige toolkit voor webontwikkelaars waarmee je sneller HTML en CSS kunt typen.
* Typ een eenvoudige HTML-structuur zoals `div>ul>li*3` en druk op `Tab` om het uit te vouwen naar een volledige structuur.
* Hier vind je een uitgebreide [Emmet Cheat Sheet](https://docs.emmet.io/cheat-sheet/).

## Extensies installeren

In VSCode heb je de mogelijkheid om extensies te installeren.

![icoon van extensies in VS Code](.gitbook/assets/ide-extensies.png)

### [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

* Installeer de Prettier-extensie in VS Code.
* Prettier automatiseert het formatteren van je code volgens vastgestelde regels.

### [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

* Installeer de Live Server-extensie in VS Code.
* Klik met de rechtermuisknop op je HTML-bestand en selecteer "Open with Live Server".
* Je ziet een live voorbeeld van je website en automatische updates bij het opslaan van bestanden.

### [HTMLHint](https://marketplace.visualstudio.com/items?itemName=HTMLHint.vscode-htmlhint)

* Installeer de HTMLHint extensie VS Code.
* Deze plugin maakt eventuele fouten in HTML zichtbaarder in je IDE.

### [Github Pull Requests](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)

* Installeer de GitHub Pull Requests extensie in VS Code.
* Log in met je GitHub-account (klik op het account-icoontje links onderaan boven het tandwiel en kies "Sign in with Github to use GitHub Pull Requests").
* Met deze plugin kun je git commando's op een visuele manier uitvoeren vanuit VSCode

### [CSS Nesting Syntax Highlighting](https://marketplace.visualstudio.com/items?itemName=jacobcassidy.css-nesting-syntax-highlighting)

* Installeer de extensie in VS Code.
* Deze extensie zorgt ervoor dat je CSS-nesting syntax correct wordt gemarkeerd in je CSS-bestanden. Dit wordt ondersteund in moderne browsers maar zit nog niet standaard in VSCode.

## Configuratie VSCode

In VSCode worden instellingen bewaard in een `settings.json` bestand. We gaan enkele instellingen toevoegen die het werken met webtechnologie aangenamer maken. Voel je vrij om deze instellingen op termijn aan te passen naar jouw voorkeur.

* Druk op `Ctrl+Shift+P` (of `Cmd+Shift+P` op macOS) om het Command Palette te openen.
* Typ `Preferences: Open Settings (JSON)` en selecteer deze optie om de instellingen in JSON-formaat te openen.
* Alternatief: Je kunt ook naar de instellingen navigeren via `File > Preferences > Settings` (of `Code > Settings > Settings` op macOS), en daar de JSON-instellingen openen door op het `Open Settings (JSON)` icoon in de rechterbovenhoek van het instellingenvenster te klikken.
* Voeg de volgende configuraties toe aan je settings.json:

```json
{
  "files.autoSave": "afterDelay",
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "explorer.compactFolders": false
}
```

De instellingen zorgen ervoor dat Visual Studio Code automatisch je bestanden opslaat na een korte vertraging met "files.autoSave": "afterDelay", automatisch de code formatteert bij het opslaan met "editor.formatOnSave": true, en Prettier instelt als de standaard formatter voor al je codebestanden met "editor.defaultFormatter": "esbenp.prettier-vscode". Hierdoor wordt je code consistent geformatteerd en hoef je je geen zorgen te maken over handmatig opslaan of formatteren.
