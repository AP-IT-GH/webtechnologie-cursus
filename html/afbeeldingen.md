# afbeeldingen

Afbeeldingen voeg je toe aan een webpagina met behulp van het `<img>`-element. Voor het `<img>`-element zijn er verschillende attributen beschikbaar om de weergave en toegankelijkheid van afbeeldingen te verbeteren.

## het `<img>`-element

Het `src`-attribuut bepaalt welke afbeelding moet worden geladen. Dit attribuut kan een absolute of een relatieve verwijzing bevatten. Het `alt`-attribuut geeft een omschrijving die in tekst-georiënteerde browsers wordt weergegeven en is ook cruciaal voor de toegankelijkheid van de website, met name voor slechtzienden. Het `title`-attribuut wordt gebruikt om extra informatie over de afbeelding weer te geven.

```html
<img src="ellerman.jpeg" alt="Campus Ellerman" title="De hoofdingang van het gebouw aan de Ellermanstraat"/>
```

De plaatsing van het `<img>`-element beïnvloedt hoe de afbeelding wordt weergegeven op de website, maar deze weergave kan later worden aangepast met behulp van CSS.

## formaten

Afbeeldingen komen in verschillende formaten en afmetingen. Het is essentieel om zorgvuldig na te denken over welk formaat van afbeelding je nodig hebt voor jouw website. De meest gangbare afbeeldingsformaten op het web zijn: .jpg, .jpeg, .png, .gif en .svg.

## afmetingen

Het is belangrijk om afbeeldingen groot genoeg op te slaan om correct weer te geven op grotere schermen. Echter, grotere afbeeldingen laden trager, wat de algehele snelheid van jouw website kan beïnvloeden. Het is cruciaal om een goed evenwicht te vinden tussen de afmetingen van de afbeelding en de bestandsgrootte ervan.

## `<figure>` en `<figcaption>`

De `<figure>`- en `<figcaption>`-elementen zijn geïntroduceerd in HTML5 om illustraties zoals afbeeldingen, video's, codeblokken, svg, canvas, enzovoort, samen met een bijschrift als een geheel te identificeren. Hiermee wordt de semantiek van de HTML-code verbeterd.

Het `<figcaption>`-element kan worden gebruikt om een bijschrift toe te voegen aan de illustratie. Dit is een aanvulling en geen vervanging van het `alt`- of `title`-attribuut.

Niet elke afbeelding hoeft in een `<figure>`-element te staan met een `<figcaption>`. Het kan worden gebruikt om illustraties die meer uitleg vereisen, verder toe te lichten.

Voordelen:

* HTML-code wordt semantischer doordat het `<figure>`-element illustraties identificeert met hun bijschrift.
* Het `<figure>`-element kan meerdere afbeeldingen bevatten met één `<figcaption>` die een algemene omschrijving geeft van alle afbeeldingen.

```html
<figure>
   <img src="images/jonge-marsman.jpg" alt="Foto van de jonge Marsman" />
   <figcaption>De jonge Hendrik Marsman</figcaption>
</figure>
```

## `srcset` en `sizes`

Om responsieve afbeeldingen mogelijk te maken, introduceert HTML5 de `srcset`- en `sizes`- attributen voor het `<img>`-element. Deze attributen stellen browsers in staat om de juiste afbeelding op basis van het schermformaat te selecteren.

* Het `srcset`-attribuut bevat een lijst van afbeeldingsbestanden met bijbehorende breedtes. Bijvoorbeeld:

```html
<img srcset="afbeelding-1.jpg 600w, afbeelding-2.jpg 900w, afbeelding-3.jpg 1200w" sizes="(max-width: 600px) 90vw, (max-width: 900px) 60vw, 40vw" src="afbeelding-1.jpg" alt="Een responsieve afbeelding">
```

In dit voorbeeld zal de browser de juiste afbeelding kiezen op basis van het schermformaat.

* Het `sizes`-attribuut bepaalt hoeveel ruimte de afbeelding inneemt op het scherm, afhankelijk van de viewport grootte.

Met deze toevoegingen kun je de prestaties van jouw website verbeteren en tegelijkertijd een goede gebruikerservaring bieden op verschillende apparaten.

Meer informatie over [responsive afbeeldingen](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images).
