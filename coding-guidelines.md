# Coding Guidelines

## Algemeen

- Gebruik altijd **relatieve paden** (_paths_) om te linken naar bestanden en afbeeldingen. Hou er rekening mee dat je website gehost (en beoordeeld) zal worden op UNIX-gebaseerde systemen. Als je je path met een ```/``` laat beginnen zal dit niet werken op Linux of Mac.
- Gebruik een overzichtelijke **mappenstructuur** voor je project. Plaats al je CSS-bestanden in een map genaamd `css`, al je JavaScript-bestanden in een map genaamd `js`, en al je afbeeldingen in een map genaamd `assets`. Dit maakt het makkelijker om bestanden terug te vinden en te onderhouden. Steek je HTML files in de root van je project en noem je index.html bestand altijd `index.html`. Dit is de standaard bestandsnaam die een webserver zal gebruiken als startpagina.
- Zorg er voor dat er **geen ongebruikte bestanden** en geen **dode code** in je project aanwezig zijn. Verwijder alle bestanden die niet gebruikt worden in je project. Zorg dat er geen code in commentaar staat (hiervoor gebruik je git).
- **Correcte Indentatie**: Stuur enkel code in die correct uitgelijnd is. Foutieve indentatie maakt je code moeilijker te lezen en te onderhouden.

## HTML

- **Foutloze HTML**: Zorg ervoor dat je HTML valide en foutloos is.
- **Geen overbodige HTML**: Gebruik alleen de HTML-tags die strikt noodzakelijk zijn voor je ontwerp. Vermijd overbodige of dubbele tags.
- **Semantisch Correct**: Gebruik altijd semantisch correcte HTML-tags zoals `<header>`, `<main>`, `<footer>`, en `<article>`. Dit verbetert zowel de toegankelijkheid als de zoekmachineoptimalisatie (SEO).

## CSS

- **Engelse Benamingen**: Alle waarden voor **class**, **id** en andere attributen moeten in het **Engels** zijn.
- **Kebap-case voor CSS-variabelen**: Gebruik de [kebap-case](https://developer.mozilla.org/en-US/docs/Glossary/Kebab_case) voor CSS-variabelen. Bijvoorbeeld: `--main-color`, `--font-size-lg`.
- **Geen Overbodige CSS**: Laat geen onnodige of niet-gebruikte CSS-eigenschappen staan in je stylesheet. Dit maakt je bestand groter en moeilijker te onderhouden.
- **Gebruik externe CSS-bestanden**: Vermijd inline CSS. Gebruik altijd externe stylesheets om je CSS te organiseren en te scheiden van je HTML.
- Maak gebruik van **CSS Variabelen** voor veelvoorkomende waarden (bv. kleuren): Definieer ze altijd bovenaan je stylesheet, binnen de `:root {}` selector, zodat ze overal in je CSS beschikbaar zijn.

## JavaScript

- **Geen inline JavaScript**: Vermijd het gebruik van inline JavaScript in je HTML-bestanden. Plaats al je JavaScript-code in externe bestanden en link deze via `<script>` tags. Dit bevordert een betere scheiding van verantwoordelijkheden en maakt je code beter onderhoudbaar.
- **Javascript Modules**: Modules helpen om globale variabelen te vermijden en maakt je code beter organiseerbaar. Bovendien plaatst het JavaScript automatisch in **strict mode** en zorgt het ervoor dat je scripts pas worden uitgevoerd nadat de HTML is geladen.

    ```html
    <script type="module" src="js/main.js"></script>
    ```
  
  - Meer informatie over JavaScript modules vind je op: [MDN Web Docs - JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).
  - Meer informatie over JavaScript strict mode vind je op: [MDN Web Docs - Strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode).

- **Variabelen in CamelCase**: Gebruik **camelCase** voor variabele- en functienamen. Dit betekent dat je begint met een kleine letter en de eerste letter van elke nieuwe woord in hoofdletters schrijft, bijvoorbeeld: `userName`, `totalPrice`, `fetchData`.
- **Engelse variabelen**: Geef alle variabelen Engelse namen. Dit maakt je code internationaal leesbaar en voorkomt verwarring.
- **Gebruik van Commentaar**: Voeg **duidelijke commentaren** toe waar nodig om je code begrijpelijk te maken, vooral bij complexe logica. Let echter op dat je geen overbodige commentaren toevoegt die de code rommelig maken.
- Verkies het gebruik van **querySelector** en **querySelectorAll** boven oudere methoden zoals `getElementById` of `getElementsByClassName`. Deze moderne methoden zijn flexibeler en krachtiger.
- Maak gebruik van **event listeners** in plaats van inline event handlers. Dit bevordert een betere scheiding van verantwoordelijkheden en maakt je code beter onderhoudbaar.

## Afbeeldingen
- **Afbeeldingen**: Zorg er voor dat de aspect ratio van je afbeeldingen gerespecteerd wordt. 
- Gebruik altijd afbeeldingen met geschikte **resolutie**: hoog genoeg is zodat ze voldoende scherp zijn, maar niet zò hoog dat ze de laadtijd van je website in gedrang brengen.
- Voorzie elke afbeelding van een bronvermelding in de figcaption. Vermeld ook als je een afbeelding zelf hebt gemaakt of wanneer je een afbeelding met AI hebt gegenereerd.