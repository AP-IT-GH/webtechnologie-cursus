
# Hoofdstuk 2: Werken met Promises

In dit hoofdstuk leer je werken met **Promises** in JavaScript. Je ontdekt wat een Promise is, hoe je ermee werkt, en hoe je fouten afhandelt.

---

## Wat is een Promise?

Een **Promise** is een object dat de **toekomstige uitkomst** van een asynchrone operatie vertegenwoordigt. Die uitkomst kan:

- **geslaagd** zijn (de Promise wordt *resolved*), of
- **mislukken** (de Promise wordt *rejected*).

Je hoeft voorlopig zelf geen Promise te kunnen schrijven. In de praktijk gebruik je vooral functies die al een Promise teruggeven.

> **Waarom Promises?**  
> Wanneer we met asynchrone code werken (zoals het ophalen van gegevens van een server), kunnen we niet direct weten wanneer de operatie klaar is. Promises helpen om de uitkomst van deze toekomstige operatie te beheren, zodat we pas actie ondernemen wanneer de operatie is voltooid.

## Een Promise gebruiken

Stel dat je een functie hebt genaamd `doeIetsAsynchroon()` die een Promise teruggeeft:

```javascript
doeIetsAsynchroon()
  .then(() => {
    console.log("De promise is resolved");
  })
  .catch((fout) => {
    console.error("Er ging iets mis:", fout);
  });
```

- `.then()` wordt uitgevoerd wanneer de Promise geslaagd is. Dit ontvangt de **resultaten van de succesvolle Promise**.
- `.catch()` wordt uitgevoerd als er iets misgaat en vangt **fouten op** die zich voordoen tijdens de asynchrone operatie.

---

## Promise chaining

Je kunt meerdere asynchrone stappen op elkaar laten volgen door `.then()` meerdere keren te gebruiken. Dit heet **chaining**. Elke `.then()` ontvangt de **output van de vorige stap**, en je kunt de resultaten doorgeven naar de volgende stap.

### Voorbeeld met geneste `then`:

```javascript
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    // Zet de response om naar JSON
    return response.json().then((data) => {
      console.log("Todo ontvangen:", data);
      console.log("Titel van de todo:", data.title);
    });
  })
  .catch((error) => {
    console.error("Er ging iets mis:", error);
  });
```

Bovenstaande code werkt, maar is moeilijk leesbaar door de geneste structuur. We kunnen dit vereenvoudigen door de binnenste Promise te **returnen**:

### Verbeterde versie met chaining:

```javascript
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    return response.json(); // Geeft een nieuwe Promise terug
  })
  .then((data) => {
    console.log("Todo ontvangen:", data);
    return data.title;
  })
  .then((title) => {
    console.log("Titel van de todo:", title);
  })
  .catch((error) => {
    console.error("Er ging iets mis:", error);
  });
```

---

## Voorbeelden van browser-API’s die Promises gebruiken

Veel moderne browserfuncties werken al met Promises. Hier zijn drie bekende voorbeelden:

---

### `fetch()`

De `fetch()`-functie wordt gebruikt om gegevens van een server op te halen.

```javascript
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json()) // Zet om naar JSON
    .then((data) => console.log("Todo:", data))
    .catch((error) => console.error("Fout bij ophalen:", error));
```

> Let op: `response.json()` geeft **zelf ook een Promise** terug. Meer daarover in het fetch hoofdstuk.

---

### `navigator.clipboard.readText()`

Deze functie haalt tekst op uit het klembord van de gebruiker.

```javascript
navigator.clipboard
    .readText()
    .then((tekst) => {
        console.log("Tekst uit klembord:", tekst);
    })
    .catch((fout) => {
        console.error("Klembord niet beschikbaar:", fout);
    });
```

---

### `Notification.requestPermission()`

Deze functie vraagt toestemming om meldingen te tonen in de browser.

```javascript
Notification.requestPermission()
    .then((permission) => {
        if (permission === "granted") {
            new Notification("Hello!");
        }
    });
```

> Tip: eenmaal gegeven (of geweigerde) toestemming wordt **onthouden door de browser**. Je kunt dit in Chromium-based browsers resetten bij de instellingen onder Privacy & Security > Site settings.

---

## (Optioneel) Zelf een Promise maken

Hoewel je zelden zelf Promises hoeft te schrijven, is het nuttig om te weten hoe het werkt:

```javascript
function wachtEven(ms) {
    return new Promise((resolve, reject) => {
        if (ms < 0) {
            reject("Tijd mag niet negatief zijn");
        } else {
            setTimeout(() => {
                resolve("Klaar!");
            }, ms);
        }
    });
}

wachtEven(1000)
    .then((resultaat) => {
        console.log(resultaat);
    })
    .catch((fout) => {
        console.error(fout);
    });
```

De functie wachtEven(ms) creëert een nieuwe Promise. Laten we de verschillende onderdelen ervan stap voor stap doornemen:

**Functie wachtEven(ms):**
Deze functie accepteert één argument: ms (milliseconden), wat de wachttijd bepaalt voordat de Promise zich als volbracht beschouwt.

```javascript
function wachtEven(ms) {
    return new Promise((resolve, reject) => {
```

Hier wordt een nieuwe Promise gemaakt. De constructor van de Promise accepteert een functie met twee parameters: resolve en reject.

_resolve_: Dit wordt aangeroepen wanneer de bewerking succesvol is en de Promise wordt "voltooid" (fulfilled).

_reject_: Dit wordt aangeroepen wanneer er een fout optreedt en de Promise wordt "afgewezen" (rejected).


**Validatie van de tijd (ms < 0):**
```javascript
if (ms < 0) {
    reject("Tijd mag niet negatief zijn");
}
```

Voordat de daadwerkelijke wachttijd wordt ingesteld, controleert de functie of de ms-waarde een negatieve waarde heeft. Als dit het geval is, wordt de Promise afgewezen met de foutmelding "Tijd mag niet negatief zijn". Dit is een eenvoudige vorm van foutafhandeling.

**Wachten met setTimeout:**

```javascript
else {
    setTimeout(() => {
        resolve("Klaar!");
    }, ms);
}
```

Als de tijd positief is, wordt setTimeout gebruikt om een wachttijd van ms milliseconden in te stellen.

Na de wachttijd wordt de resolve-functie aangeroepen om de Promise te vervullen. De tekst "Klaar!" wordt meegegeven als resultaat van de Promise.

---

## (Optioneel) Meerdere Promises combineren

### `Promise.all()`

Met Promise.all() wacht je totdat alle Promises zijn voltooid. Als een van de Promises faalt, wordt de catch-blok geactiveerd. Dit is handig wanneer je wilt wachten op meerdere bewerkingen die allemaal succesvol moeten zijn voordat je verder kunt gaan.

```javascript
const belofte1 = wachtEven(1000);
const belofte2 = wachtEven(1500);

Promise.all([belofte1, belofte2])
    .then((resultaten) => {
        console.log("Alle beloften klaar:", resultaten);
    })
    .catch((fout) => {
        console.error("Eén van de beloften faalde:", fout);
    });
```

---

### `Promise.race()`

In tegenstelling tot Promise.all(), geeft Promise.race() de eerste Promise die klaar is terug, ongeacht of die geslaagd of mislukt is. Dit kan nuttig zijn als je wilt weten welke asynchrone bewerking het snelst voltooid is, zoals het ophalen van gegevens van meerdere bronnen en alleen de snelste gebruiken.

Deze methoden helpen je bij het beheren van meerdere asynchrone taken en kunnen je code efficiënter maken, afhankelijk van je behoeften.

```javascript
Promise.race([belofte1, belofte2])
    .then((resultaat) => {
        console.log("Eerste belofte klaar:", resultaat);
    })
    .catch((fout) => {
        console.error("Eerste fout:", fout);
    });
```

---

> In het volgende hoofdstuk leer je hoe je `async` en `await` gebruikt om asynchrone code nog leesbaarder te maken.
