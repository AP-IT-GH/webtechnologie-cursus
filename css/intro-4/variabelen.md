# CSS Variabelen

CSS-variabelen (ook wel CSS Custom Properties genoemd) voegen flexibiliteit en herbruikbaarheid toe aan je stylesheets. Ze maken het mogelijk om waarden centraal te definiëren en op meerdere plaatsen te hergebruiken. In deze handleiding leggen we uit hoe je variabelen declareert, gebruikt, dynamisch bijwerkt met JavaScript en wat de beperkingen zijn.

## declaratie van CSS-variabelen

CSS-variabelen beginnen met twee streepjes `--` en worden gedefinieerd binnen een selector. Meestal plaats je globale variabelen in `:root` zodat ze op het hele document beschikbaar zijn.

```css
:root {
  --primary-color: #3498db;
  --font-family: 'Arial', sans-serif;
  --spacing: 8px;
}
```

### de `:root` selector

De `:root` selector is een pseudo-class die verwijst naar het root-element van het document (meestal het `<html>`-element). Het is de aanbevolen plek om globale CSS-variabelen te definiëren omdat die variabelen vervolgens beschikbaar zijn in het hele document via inheritance.

Belangrijke punten:
- `:root` verwijst naar het root-element (document root). In HTML is dat hetzelfde element als `html`.
- `:root` heeft de specificiteit van een pseudo-class, wat betekent dat het iets meer gewicht heeft dan een gewone type-selector zoals `html` (dus `:root {}` kan soms `html {}` overschrijven wanneer beide in conflict zijn).
- Aangezien variabelen erven, zijn variabelen gedefinieerd op `:root` beschikbaar in alle descendants tenzij ze lokaal overschreven worden.
- `document.documentElement` in JavaScript verwijst naar hetzelfde element als `:root` (het `<html>`-element).

Voorbeeld — globale declaratie en lezing via JS:

```css
:root {
  --site-accent: #ff6b6b;
  --site-padding: 16px;
}

.header {
  padding: var(--site-padding);
  color: var(--site-accent);
}
```

```javascript
// JS: lees of wijzig een globale variabele
const root = document.documentElement;
const accent = getComputedStyle(root).getPropertyValue('--site-accent').trim();
console.log(accent);
root.style.setProperty('--site-accent', '#1abc9c');
```

Gebruik `:root` voor theming en globale instellingen. Voor component-scoped variabelen kun je ze ook op een container of component-niveau definiëren (bijv. `.card { --card-padding: 12px }`).

Je kunt ook `html[data-theme="dark"]` gebruiken om thema-variabelen te groeperen en vervolgens `document.documentElement.setAttribute('data-theme', 'dark')` via JS te zetten — dat werkt goed samen met `:root`-gebaseerde thema's.

Je kunt ook variabelen op een specifiek element definiëren; die zijn dan alleen beschikbaar binnen dat element en zijn kinderen (scoping en cascade zie verder).

## gebruik van CSS-variabelen

Gebruik de functie `var()` om de waarde van een variabele op te halen. Voeg waar mogelijk een fallback toe voor veilig verval. In dit voorbeeld neem ik de `:root`-definitie op binnen hetzelfde codeblok zodat voorbeelden ook losstaand door linters kunnen worden verwerkt:

```css
:root {
  --primary-color: #3498db;
  --font-family: 'Arial', sans-serif;
  --spacing: 8px;
}

body {
  background-color: var(--primary-color, #f0f0f0);
  font-family: var(--font-family, Arial, sans-serif);
  margin: var(--spacing, 0px);
}
```

De fallback wordt gebruikt wanneer de variabele niet gedefinieerd is of geen geldige waarde heeft.

### scoping, cascade en override

Custom properties volgen de normale CSS-cascade en zijn inheritable (ze erven door naar kinderen tenzij overschreven). Je kunt op een specifiek element een variabele overschrijven. In dit voorbeeld staat de declaratie en het gebruik in hetzelfde codeblok:

```css
:root {
  --accent: #3498db;
}

.header {
  --accent: #2ecc71; /* overschrijft --accent binnen .header en zijn kinderen */
}

.button {
  /* fallback voorkomt dat een analyzer klaagt als --accent niet gevonden wordt */
  background: var(--accent, #3498db);
}
```

Hier zal `.button` binnen `.header` de groene kleur gebruiken, terwijl knoppen elders de blauwe kleur behouden.

## berekeningen en verschillende units

Variabelen slaan waarden (inclusief units) op. Je kunt `calc()` gebruiken om waarden te combineren. Geef een fallback met een compatibele unit en declareer de variabele in hetzelfde codeblok:

```css
:root {
  --base-spacing: 8px;
}

.card {
  padding: calc(var(--base-spacing, 8px) * 2);
  margin-bottom: var(--base-spacing, 8px);
}
```

Let op: de units moeten compatibel zijn bij het combineren.

## dynamisch gebruik met JavaScript

Je kunt custom properties op elk moment met JavaScript aanpassen via `setProperty`. Dit is handig voor thema's of gebruikersinstellingen.

```javascript
// zet een globale variabele
document.documentElement.style.setProperty('--primary-color', '#e74c3c');

// of op een specifiek element
const header = document.querySelector('.header');
header.style.setProperty('--accent', '#ffcc00');
```

Als je de berekende (geïnherited) waarde wilt lezen, gebruik dan `getComputedStyle`:

```javascript
const value = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
console.log(value);
```

## voorbeeld: thema wisselen (light / dark)

Een veelgebruikte toepassing is het wisselen van thema's door variabelen te overschrijven op een container (bijvoorbeeld `html[data-theme="dark"]`). Ook hier staan declaraties vlakbij het gebruik zodat voorbeelden zelfstandig werken:

```css
:root {
  --bg: #ffffff;
  --text: #222222;
}

html[data-theme="dark"] {
  --bg: #121212;
  --text: #eaeaea;
}

body {
  background: var(--bg, #ffffff);
  color: var(--text, #222222);
}
```

Met JavaScript zet je het thema eenvoudig:

```javascript
document.documentElement.setAttribute('data-theme', 'dark');
```

## beperkingen en best practices

- Custom properties zijn waarden, geen property-namen — je kunt ze niet gebruiken als CSS-eigenschapsnamen (bijv. `var(--some-property)` kan niet in plaats van `color:`).
- Ze werken voor vrijwel alle CSS-eigenschappen, maar sommige eigenschappen (zoals `@keyframes`-namen) ondersteunen ze niet.
- Gebruik fallbacks in kritieke paden zodat je stylesheet robuust blijft als variabelen ontbreken.
- Houd naming consistent: gebruik een duidelijke prefix (bijv. `--theme-`, `--spacing-`) om verwarring te voorkomen.