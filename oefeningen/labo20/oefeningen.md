# Oefeningen labo 20

Zorg ervoor dat je onderstaande folderstructuur aanhoudt:

```
webtechnologie/
├─ labo-x/
│  ├─ oefening-01/
│  │  ├─ index.html
│  │  ├─ assets/
│  │  │  ├─ image-1.jpg 
│  │  │  ├─ data.json 
│  │  ├─ css/
│  │  │  ├─ reset.css
│  │  │  ├─ style.css
│  │  ├─ js/
│  │  │  ├─ script.js
│  ├─ oefening-02/
│  ├─ oefening-n/
├─ labo-y/
├─ labo-z/      
```

**Technische richtlijnen:**

- Gebruik steeds **ES modules** om globale variabelen te vermijden:  
  `<script type="module" src="./path/to/script.js" defer></script>`
- Zet bovenaan elk script `"use strict";` om strikte modus in te schakelen.
- Volg de [Coding Guidelines](https://apwt.gitbook.io/webtechnologie/coding-guidelines).

---

## Oefening 1 – Notificatie-toestemming vragen via een Promise

### Leerdoelen
- Je begrijpt hoe `Notification.requestPermission()` werkt als een Promise.
- Je leert reageren op de uitkomst van een permissie-aanvraag.

### Opdracht
Vraag toestemming aan de gebruiker om notificaties te tonen via de Notifications API:

1. Roep `Notification.requestPermission()` automatisch aan wanneer de pagina geladen is.
2. Als de gebruiker **toestemming geeft**, toon dan een notificatie met de tekst: **"Hello world"**.
3. Als de gebruiker **weigert**, toon dan in de console: **"Toestemming geweigerd"**.

---

## Oefening 2 – Een eigen Promise gebruiken

### Leerdoelen
- Je leert hoe je zelf een Promise maakt.
- Je oefent met het verwerken van asynchrone resultaten.

### Opdracht
Gebruik onderstaande functie die een vermenigvuldiging uitvoert na 5 seconden:

```javascript
const multiply = (number1, number2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(number1 * number2);
        }, 5000);
    });
};
```

1. Roep deze functie aan met twee willekeurige getallen, bijvoorbeeld `multiply(4, 7)`.
2. Wacht op het resultaat met `.then()`.
3. Voorzie een `catch`-blok voor het geval er een fout optreedt.
4. Toon het resultaat in de console.

De `setTimeout` simuleert een trage bewerking.

---

## Oefening 3 – Promise chaining

### Leerdoelen
- Je leert hoe je meerdere asynchrone stappen aan elkaar koppelt.
- Je oefent met het doorgeven van resultaten tussen `.then()`-blokken.

### Opdracht
Werk verder met de `multiply()`-functie:

1. Vermenigvuldig twee getallen met `multiply()` en toon het resultaat.
2. Gebruik dat resultaat als input voor een nieuwe `multiply(result, 2)`-aanroep.
3. Herhaal dit proces minstens vijf keer.
4. Toon telkens het tussenresultaat in de console.

Vermijd geneste `.then()`-blokken. Schrijf ze op één niveau (flat).

> Tip: om testing wat gemakkelijker te maken, verlaag je de timing van de timeout-functie binnen multiply.

---

## Oefening 4 – Foutafhandeling in Promise chains

### Leerdoelen
- Je leert hoe je fouten afvangt in een Promise chain.
- Je begrijpt hoe `throw` werkt binnen een `.then()`.

### Opdracht
Bouw verder op oefening 3:

1. Laat ergens halverwege in de chain een fout ontstaan met `throw new Error("foutboodschap")`.
2. Zorg dat de fout correct wordt afgehandeld met `.catch()`.
3. Toon de foutboodschap in de console.

---

## Oefening 5 – `async/await` syntax

### Leerdoelen
- Je leert het alternatief voor `.then()` en `.catch()` met `async/await`.
- Je oefent met het schrijven van leesbare asynchrone functies.

### Opdracht
Herschrijf oefening 1 t.e.m. 4 met `async/await` in plaats van `.then()` en `.catch()`.

Zorg dat je gebruik maakt van `try`/`catch` om fouten correct op te vangen bij `await`.