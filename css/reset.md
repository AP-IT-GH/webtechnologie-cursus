---
metaLinks:
  alternates:
    - https://app.gitbook.com/s/CyMmymf8tiNQ4Ws9WmHV/css/reset
---

# reset.css

## historie

Een reset.css-bestand is ontstaan uit de behoefte om de standaardstijlen van browsers te normaliseren en inconsistenties tussen verschillende browsers te verminderen. Het idee is om alle standaardmarges, padding, en andere opmaakstijlen van elementen te resetten naar een uniforme basislijn, zodat ontwikkelaars een consistente startpositie hebben om vanaf te werken.

## voor- en nadelen

**voordelen**

1. **normalisatie:** Elimineert inconsistente standaardstijlen tussen browsers, waardoor een gelijkmatige basis ontstaat.
2. **voorkomt stijlingserfenissen:** Minimaliseert het risico van onbedoelde stijlingserfenissen tussen verschillende delen van de website.

**nadelen**

1. **stijling terug toevoegen:** Het kan zijn dat ontwikkelaars na het resetten van de standaardstijlen opnieuw veel stijling moeten toevoegen.
2. **overhead:** Sommige ontwikkelaars beschouwen het als overbodig, vooral als ze de specifieke standaardstijlen van bepaalde browsers niet als een probleem beschouwen.

## versies

### The New CSS Reset

Een moderne versie van Eric Meyer's Reset.css (zie hieronder). Dit is de versie die we gebruiken voor CSS oefeningen en projecten binnen de opleiding.

{% embed url="https://elad2412.github.io/the-new-css-reset/" %}

### Eric Meyer's Reset.css

{% embed url="https://meyerweb.com/eric/tools/css/reset/" %}

Een van de eerste populaire reset.css-bestanden werd gemaakt door Eric Meyer. Het werd vaak gebruikt, maar soms als te agressief beschouwd omdat het bijna elk opmaakattribuut op nul zet.

```css
/* Eric Meyer's Reset.css */
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
/* ... (Resetting more styles) ... */
```

### Normalize.css

{% embed url="https://github.com/sindresorhus/modern-normalize" %}

Later werd Normalize.css geïntroduceerd door Nicolas Gallagher. In tegenstelling tot een reset, behoudt Normalize.css bepaalde nuttige standaardstijlen, terwijl het nog steeds normaliseert over verschillende browsers.

```css
/* Normalize.css v8.0.1 */
/* ... (Normalized styles) ... */
```

### moderne alternatieven

Met de opkomst van flexbox en CSS Grid Layout zijn sommige ontwikkelaars van mening dat de noodzaak van een reset.css minder relevant is geworden. In plaats daarvan geven ze de voorkeur aan een meer doelgerichte normaalstelling of helemaal geen reset, afhankelijk van het project.

```css
/* Modern Reset (minimal) */
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td {
    margin: 0;
    padding: 0;
    border: 0;
}
/* ... (Minimal reset, retaining default styling for some elements) ... */
```

Bij het kiezen van een reset.css of een vergelijkbare aanpak, moet je rekening houden met het specifieke project, de doelen en je persoonlijke ontwikkelingsvoorkeuren. Het is essentieel om bewust te zijn van de voor- en nadelen van elk reset.css-bestand.
