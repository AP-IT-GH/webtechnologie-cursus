---
description: >-
  In dit hoofdstuk leer je hoe je overgangen tussen toestanden van een element
  kan definiëren. Transities verbeteren de gebruikerservaring en -interactie van
  je website.
---

# transities

Wanneer je met een website communiceert, merk je misschien dat veel elementen een toestand hebben dat verandert bij het zweven over of aanklikken van dat element. Dropdownmenu's kunnen bijvoorbeeld geopend of gesloten zijn. Knoppen kunnen van kleur veranderen wanneer ze worden gefocust of erover wordt gezweefd (hover). Pop-ups verschijnen en verdwijnen.

Standaard verandert CSS de stijl van deze toestanden onmiddellijk.

Met behulp van CSS-transities kunnen we interpoleren tussen de beginstatus en de doelstatus van het element. De overgang tussen de twee verbetert de gebruikerservaring door visuele richting, ondersteuning en hints te geven over de oorzaak en het gevolg van de interactie.

{% @flems/flems url="https://flems.io/#0=N4IgzgpgNhDGAuEAmIBcIB0ALeBbKIANCAGYCWMYaA2qAHYCGuEamO+RIsA9nYn6wA8SMgDcABLCgMwYALwAdLr3gMydCACclAPgV1x44WMnTZi8AEcArg00RxWGQFp4mhnTBl4ZXrv2GhoJgAA4eOgAS3KJaAISCAPSh4QFGCSKiegZGGVmBRuoh1vDi8ACeIRAWsFhwANYARtwAHkriZEgWTmCu7p7evnRtNfXIeYGC0g3Q4iTcml0ubh5ePn4gOgDKNQx1M0gOy-0+DtbeGIlT0OOJufq3YjqckDAIg1ToAByoAGwgAL6EehMFjoDAAKyoxB4fAgAnQMLAJRGsEaLXEcnESG4sGszD4GBsWjKm2gcHg8wAFEpCsUlABKADc+kRJQaxQpBkx2Nx+PghOsxNJrwpmmpIHZ8E5DOZdFZ4jANjsDm5OLxcP5RM0JLJCCpSgwits9hl+hZtVRTWaGAYSCQAFEYnwADJkJFwrTinZ0ADmECUhHElOApTsfpK-3pGJ04mAqTIJCDKLR1uTyCjceyhiNyowUhkYFdSJtdvF3V6KwG6yZqX+4mgkFjqWzSvsebMhbd-PsuGiEDLSz6q0Gpuy-30kdlz11a08rAAjPPUAAGAFAkCMZisPOyTgw-jwbc5+xN7IAdw68CwqHE8+Xy5CzVlhlqZB9OBvAFYH0-Ug0GKiPqaNw1h0Egzg8FA8w3gwUBkLAEANFAgrPuITSaAcmjOO4IjWGAN6fI+qHoZhN4AMyPgq3BwUgaHSKiqG4GG6jOE0UrcLgN4AEw9rKqQiKE0hlDeJAwL+2TgnhPgkGUEEqBqN4IbCmiobBb50M43gQLg+GSBqWiyuOQx0IarYQKgWB9pop6GEcYBzJonEKrAsH9vOGBcTWdBGfopnGhA2CDpWs42aUQ5VnQN52Q5uDiFx346fWMgQJpGkgfAhlmiZx4OMkBiZoYcx8M4XgAF7mbeGCftpmXGXmKhqBo1kFVibohEJIliahokQM0zgiPYby8Ip1F4nQqGSUiCayfuCl6cpqlwT6GlaTpin6SpE5ZQkABU4gACJwPMDA+DECrlJQ4g7Qk+hNEgZShQJ7UMMJsxdakr7vvAN53suohYBNUnTXJsJ8OtC2pGpy2aYga3zYgm3efo04iu8rBkQAnCuAIALr-EAA" %}

## CSS Transition vs. CSS Animation

| CSS Transition                                                                                                                  | CSS Animation                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Kan enkel gaan vanuit een begin-state naar een end-state. Er kunnen geen tussen-states worden toegevoegd.                       | Kan gaan vanuit een begin-state naar een end-state. Er kunnen extra states worden toegevoegd aan de animatie. |
| Kan slechts één keer per trigger worden uitgevoerd.                                                                             | Kan een vooraf bepaald aantal keer loopen, of zelfs oneindig.                                                 |
| Vereist een trigger om te starten.                                                                                              | Kan starten vanuit een trigger, of kan automatisch starten.                                                   |
| Wordt uitgevoerd van start-state naar end-state bij de trigger, en van end-state naar start-state wanneer de trigger verdwijnt. | Kan worden uitgevoerd voorwaarts, achterwaarts, of afwisselend.                                               |
| Gemakkelijker in gebruik, zowel in CSS als in Javascript.                                                                       | Moeilijker in gebruik, zowel in CSS als in Javascript.                                                        |
| Ideaal om een simpele animatie te tonen van één state naar een andere state.                                                    | Ideaal om een complexe serie van bewegingen weer te geven.                                                    |

<img src="../../.gitbook/assets/file.excalidraw.svg" alt="Het verschil tussen CSS Transition en CSS Animation" class="gitbook-drawing">

## transition properties

Om transities in CSS te gebruiken, kan je de verschillende transition properties gebruiken of de `transition` shorthand property.

**transition-property**

De eigenschap `transition-property` specificeert op welke CSS-eigenschap (css property) je een transitie wilt toepassen.

```css
button {
  transition-property: background-color;
}
```

De `transition-property` accepteert een of meer CSS-eigenschapsnamen in een door komma's gescheiden lijst.

Optioneel kan je gebruik maken van `transition-property:all` om aan te geven dat je op elke eigenschap een transitie wilt toepassen.

{% @flems/flems url="https://flems.io/#0=N4IgzgpgNhDGAuEAmIBcIB0sxhAGhADMBLGXVAbVADsBDAWwjUwAt56p8RYB7axfswA8SYgDcABLCi0cAXgA6IAO4AnWgAcNEVUoB8C6hIkjxUmfKWxiq6RAnwNAWmp8ISh7QBGxakggAHoogAAz6rtQQQgD0omIGRiZx5rJgwda2MA7O8OrUYIQ8qvQe8N6+-kFKYSB6ubT5hcUxcQnGppLSqek2dtlOvFBFpeV+gcE1eoNFLeJtSWZdlty9WY5OXjzwLCM+Y1Wh+pvbs-GGxoanelyQMAjEfOQgAGyozyAAvng0DEzoGAArXAEXj8CCCdCfb4gOiMZhYHBcUECeDwjJ9YDnCTKYhIbaoCQARhCIQ0AQA3FiWBBiABzNgE4mkilY0RgDQyACeBMIMBZiQBAFcwPBiIROQM+CiCbBwYhVJTErQoHTqE5iIh6GAZXKdIrjJtVP5VE51KJhQSAKwhACk+okXlosAA1rTVDxBX5JUNVAT3ZzlV4oIKIPbpr7sSwNaGsfV8hqHmqkIL1KK+IySSEtfa42AE3wnKL6L5aU5CJ77umJBBZDHEhpaEhRNRaQSABxkxUfQyGLCrCAYda5pr0CSYxK5-NqjTu7SqeDchx5ApFehdnvUPuZAfrcNj2PLqdOGc8OcLgmOl1uj1e8Pr6i99EwQfOY4sfcTw9p6eznTnh1Oq67qekg3pFHgS4NCuxSKli0QAFQSFiACaHpSA0EjKmAPASMK9jbPYzoQJyyhFEgEgAAbKlAFEQQOtIYKgWIHlBR4nmei7Ufa8HRIY3YPpuT47s4ET2OOxiTt+x6-vOi6ifej79qgxBgAAFKgLA8GIOgQaghSwMKACUH4ScuI4EmAsDKhAqmEhgABMhn2peQE3qB4YEhUxANKoyAKZuaiaHOJkSGyHK0Iubq4vaUWgZq4WIN6gr0PkjKEKoRLpTFqi4k4tKaASADM9mdnxG4YIFWg6BIW52Kg-AsAMUZQEgqk8E2xniRIQoimKEq3IQBLgkg-kVeoVUZbVMD1dsTWkK1EDadQnVYj1orik4A0WWU87+QhEgACJwEUtCitpEgipyZASDxhibEgnIhWFXIErF9rUnSDJEiSYgsPa4WyuqmralIuoKmV1A3NAcDfk8zyEqgISfAAuh8QA" %}

**transition-duration**

De eigenschap `transition-duration` wordt gebruikt om de tijd te definiëren die nodig is om een transitie te voltooien.

{% @flems/flems url="https://flems.io/#0=N4IgzgpgNhDGAuEAmIBcIB0sxhAGhADMBLGXVAbVADsBDAWwjUwAt56p8RYB7axfswA8SYgDcABLCi0cAXgA6IAO4AnWgAcNEVUoB8C6hIkjxUmfKVgAjgFdaqiBPhIAtMWph4tfkue0AIw8kCAAPRRAABn0PLx94IQ1zWTAIpFt1eGI+fUj6MCEAeg0DIxNC0TFS41NJaRSIm3tHZzcwbWQATz9vIOoQ8KVokD0wamhE5MsQdMzs6n0AJki8guLq8sqN2qnUqzsHJxdXemIkJCgPAHMewOCwiOG9U-Poelosq8n66dmP+f0AA4VvkiiVDDUKuJtpVdo0Di1jlcZLBiLQoLc+gNHvp4OpaF8kj89jMMv8ciMAKwrVZg7ZQqqGIpbLiQGAIebkEAATlQADYQABfPA0BhMdAYABWuAIvH4EEE6CFIpAdEYzCwOC4coE8A1TUOEmAEIkyjO8BYqAkAEYVhpQgBuE0sCDEK5sK22yL2p1lAI8VQhVSudSiWxgK2An0mgK0WAAayuqh4tn6rl4UADVuCaOojiQvuMGazppYxEQhec6k85fmrg0ye0qngnSteJ8YEIAfolfbNayfFcWVO1CurkIqY5fCtEFkEErGlo52ukej1EFhkMGANjgwx1i3n4RpNfbAtcHfwH1CtkTAvo3C2o24RED3bQ6SE6x7Kp-P1Fcl7zFayyrPem5Pjur7HC8FzXN+xi-leAFklekYgnehgPlukFvq4yJxmiUDwVWHZ-shczThIlIYeu4HPs0ECoMQYAABSoCwPBiDoeASKgXawOGACUxGnl2qj0FaYCwOiEAsZEGCAoJYGPhgaiaE2xGiO0MithISZnJW+luIg9AaDIiDpjwUC2PQnieoQqg2g5hmqGceGaFaADMixrlhEEvhIGCAXwxFdvw44MKQun0HwPDtHG86YeBhQAFQSAAInAAb-FxEheJ0ZASClhSGP6n6acxZm0LphAwI6zquu68CeisYgsJWkrhlkhCdJZ8r8FasAKogqiVuibr-uWED5INw06MprLQHAV5cgALICqCREKAC6gpAA" %}

`transition-duration` accepteert tijdseenheden, in seconden (**s**) of milliseconden (**ms**) en is standaard ingesteld op 0s.

**transition-timing-function**

Gebruik de eigenschap `transition-timing-function` om de snelheid van een CSS-transitie in de loop van de transitie duur te variëren.

Standaard zal CSS je elementen met een constante snelheid overzetten (`transition-timing-functie: lineair`). Lineaire overgangen kunnen er echter wat kunstmatig uitzien: in het echte leven hebben objecten gewicht en kunnen ze niet meteen stoppen en starten. Door een overgang gemakkelijker in of uit te gaan, kunnen je overgangen levendiger en natuurlijker worden.

{% @flems/flems url="https://flems.io/#0=N4IgzgpgNhDGAuEAmIBcIB0sxhAGhADMBLGXVAbVADsBDAWwjUwAt56p8RYB7axfswA8SYgDcABLCi0cAXgA64AI4BXWgCcIE+PEIBaKMWoRNSnbQBGxpBAAeikAAYlAPiMnNQgPSixrhWoRcSkZeSUwNU1tXQNTSHN4Kxt7RxcQV3iIHz8AoL9Q2TBHSPUtHT19LP1jROTqWwcldMzZCBqg33E84MlpIpKo8tiqtv0eVXg66wbU5rdqifgc7sDewvCVMpjK6uNxyemUpucFsf2llf81gv7N0uiKgzBEAAcwI9mTlpeId6uercwsUIkMdgZYKprLBPo00m5IdCAVxIDAEMQ+OQQAA2VAAVgALCAAL54GgMJjoDAAK1wBF4-AggnQJLJIDojGYWBwXAZAngXIe5WAgQkEgA7sQkPAWKgJABGPFOV52ADcook9Fodn0LAgxAA5mw5fKnMq1RrLLRYABrA0aCYNfS8KA8DRyh0AT1oUEsUFUEHV1DFLrdcvFLGIiCDYssbtsGn0GloolUYDlAA4VTGdPZ4PofYbqHLYEzEBoc68U6JqAbM9mNVqNAb9nHdDx6HKCQ3qBr4MnqGAoxjqPpXg7XhANPBPeGpTKc-3aIPh3x9EhVMn4COTWAg8TAoEMEKIBgRh5TBoJCLgzoB0Pt2vt-RjAb9IRVNR0Xw5RfNPvD2oY8wTPXY2mvPt71XUdn1fd9P2-YsJCyADeyAk9QLic5gxvMUlxXR8YOIF9a3gr9CLlPZqFQo8MJGRZJgg298IfEd9Fg0iP3IndkLGJYaPQkD6Owg54CYvCoMI9jiLgrjEMokT+MCA80OA7ZMP0X53nEu9l1Yp8ZM4hCKIkLSwAACgAZgASgEtTog0xFiFgHSWOg6SSLfOSTKc2B9EsCAAC9iCncynAwbEMzwCR9HCvE8Wi8KACYAHZovlDB4ts5TAPsrRUGICzUBYHgxCnaLUEIHhITAaydMlaVZQkJUAFIBO8AAqCQABE4DdWhtzK0yZzICQOu8QI4yQT0dNEMBXhkWcJEIGALVvPVDWNBUzTEFgcxW+x12ILR5KkHh-XoaiNWpNNt0IT1nT4fkSzLKcc0LA1RyjCB6HTKRXorHLqBRaA4EIrFCVQJwSQAXWJIA" %}

**transition-delay**

Gebruik de eigenschap `transition-delay` om het tijdstip op te geven waarop een transitie moet beginnen. Als de `transition-delay` niet is opgegeven, beginnen de overgangen onmiddellijk omdat de standaardwaarde 0s is. Deze eigenschap accepteert een tijdseenheid, bijvoorbeeld seconden (**s**) of milliseconden (**ms**).

{% @flems/flems url="https://flems.io/#0=N4IgzgpgNhDGAuEAmIBcIB0sxhAGhADMBLGXVAbVADsBDAWwjUwAt56p8RYB7axfswA8SYgDcABLCi0cAXgA6IAE5x4tagHMYSieoBGxakggAPRSAAMSgHzUeEkzICeQgPSixNhdRHipMvJKqgga2hC6BkYm5krWIDYAjJaW9GCO0LSuHuLevp4BsmAWIepaOiB6tIbGZhbxNgBMKWkZLu6eeX6S0kUlamEVVTUx9bYArC3pTlkduT7dhUEqA+URlVG1sVa2yVNtszleXJAwCMR85CAALKjj1yAAvng0DEzoGABWuAS8-BCCdBPF4gOiMZhYHBcP4CeAQ0qDCASYA+CQSADuxCQ8BYqAkiUmAAdTABuVESei0UwAWhYEGImjYeL2xLJ1DR+losAA1pplDwAK7Gam8KA8ZR4-nOWhQfRQAUQNlo0XivHoljERBKiT6cUmZTU5S0UQCsB4gAcrPJiFM8GpMoZ1ElDLY2sJxtEWgtVvZFNoyk0Rmpuvg8B49Dx1x9jx8PgwCLWqH4LBFGqgSAAFIkAJTI61G6hgTUXajUmbOPGWMBsmPUOMJ8JJnGp0iZxq5lG++AFovwEtlzIV-FTGux6jx1aN5Mt9MZgDMHfzGl7-fLeOaqWrPlr9cnMCbKdgacz10XXZ7xb4A5ceMmm9HdfHDf306PrYz4zPaO7y8vpbXw4jtuY4TqEibEGAGaoCwPBiBAyh4BIqCEDwsCml+Opcry-JCkgIo8GKEoSFALrwGAiDQHKCoPj4bgAFQSAAInA4q0H2cESORzhkBIdFuD4upIM4ea+qIYCEjeEiEDApLknSpHMikYgsNq0lmGWxClCWeKigK9DUNqnymn2hDOPh-z8DpAKIMo2oOpopaahAaRWf8tnAdQJzQGoJZXNcc6oJYTwALqPEAA" %}

Deze eigenschap is handig voor verspringende transities, bereikt door een langere transitievertraging in te stellen voor elk volgend element in een groep.

{% @flems/flems url="https://flems.io/#0=N4IgzgpgNhDGAuEAmIBcIB0sxhAGhADMBLGXVAbVADsBDAWwjUwAt56p8RYB7axfswA8SYgDcABLCi0cAXgA6IAO4AnWgAcNEVUonxaAI2LUkEAB6KQABiUA+BdQkShGuwAkeYnfp4SwLDzKEozUAK5CAPRujs4i4lIy8kqhYQC0xIj09gCyEOESmRD0EgCMUaJiDk4ulYmyYFapGVm5+WGFWRIATBXi1XF10g1N7S3FbQVFJQDMfVWxtQnDySDN05Md0xIALPMDS5IrjSljGyB2eVNdAKz7jvtckDAIxHzkIADsqABsIAC+eBoDCY6AwACtcARePx8vBmACgSA6IxmFgcFwYQJ4WC1JptKoJMBFqIwBoZABPVASQgwcwAbkWGloSFE1AA5tTrIyarSLGlRKo4PA3tRqbwoGF6NQec5wWEwCLCBS0li4eK4TpZRJaFBiOzqON6GANbDVDz-o5HBh1l1iTVlMQkPAWNTSjdrBoGYt6LRzGkWBB9Ww3dZPd6aoZaLAANbs1Q8MKmVU8KA8VTU9mppDawzpsyqNLqUQK6kADi92sQ5ngaV1+rFUk15qZLLZnIkFYjzl9qnZJjSefg8B49GpO0rVpq8HU1DAhHT9DS6f1Ji5Em5ixntDnC9UY-0s7AMkQAA0ABRpUphr0ASm1PGZsEyVI3PK3R8yorSGgTBPgr7brui54BIj7Ri+VafiKfACmE6gwY2pRgFBO5gF+sEivQJjsmkhBJq8fDUhAsgQBaU4YHiWg6KgxBgOeqCBN4qigagC6wAqt4SDaZx2h+aF7geQHHrQZ7ntY96LOBz4AaG1gAKTkdQ1pUQS3G2sUqD8Cwy6EGkAHaOepRcfazjCRhhpmJSXLGkpKnqNRhI8eERpaS6un6RShndCZ-FzhZArQLQr7XtYtmOJaynUJRDlqc56TTG5Ok8HpBkQOeMy+dO0HflZwXUt0YbhdQkX2fiPjxa52keWl547FlZk5bBeWvjMRUoRFFGqRVGljtVKWeYZNwNYeaEBS147tXZ0XdYSGhEosC78GkyhBuyIYSHmUA5j6tB9gOQ4jgeXbTZEABUEgACJwOmoniBA-gAWQEhnZEjh5kgFILTUpLkvlNJ0tq8qKsQyoprC-CmogLY1PWBpGiaTZmkpTzQMKoofD83SoNYAIALr-EAA" %}

## shorthand notatie: transition

Zoals de meeste CSS-eigenschappen, is er een verkorte versie. `transition` combineert `transition-property`, `transition-duration`, `transition-timing-function` en `transition-delay`.

```css
transition: [transition-property] [transition-duration] [transition-timing-function] [transition-delay];
```

```css
.longhand-notation {
  transition-property: color;
  transition-duration: 250ms;
  transition-timing-function: ease-in;
  transition-delay: 500ms;
}

.shorthand-notation {
  transition: color 250ms ease-in 500ms;
}
```

## Op welke eigenschappen kan je een transitie toepassen?

Bij het schrijven van CSS kan je aangeven welke eigenschappen geanimeerde overgangen moeten hebben. Bekijk deze [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)-lijst met animeerbare CSS-eigenschappen.

Over het algemeen is het alleen mogelijk om elementen over te zetten die een "middentoestand" kunnen hebben tussen hun begin- en eindtoestand. Het is bijvoorbeeld onmogelijk om overgangen voor `font-family` toe te voegen, omdat het onduidelijk is hoe de "middentoestand" tussen serif en monospace eruit moet zien. Aan de andere kant is het mogelijk om overgangen voor lettergrootte toe te voegen, omdat de eenheid een lengte is waartussen kan worden geïnterpoleerd.

Hier zijn enkele algemene eigenschappen die je kan overzetten.

**transform**

De CSS-eigenschap `transform` wordt vaak overgezet omdat het een GPU-versnelde eigenschap is die resulteert in vloeiendere animaties die ook minder batterij verbruiken. Met deze eigenschap kan je een element willekeurig schalen, roteren, vertalen of scheeftrekken.

**waarden**

* **scale()**: beïnvloedt de grootte van het element. Dit geldt ook voor de lettergrootte, opvulling, hoogte en breedte van een element. Het is ook een verkorte functie voor de functies **scaleX()** en **scaleY()**.
* **skewX()** en **skewY()**: Kantelt een element naar links of rechts, bv. je kan een rechthoek in een parallellogram veranderen. **skew()** is een afkorting die **skewX()** en **skewY()** combineert door beide waarden te accepteren.
* **translate()**: Verplaatst een element zijwaarts of op en neer.
* **rotate()**: Draait het element met de klok mee vanaf zijn huidige positie.

**color**

Voor, tijdens en na interactie kan kleur een goede indicatie zijn van de toestand. Een knop kan bijvoorbeeld van kleur veranderen als er met de muisaanwijzer over wordt bewogen. Deze kleurverandering kan de gebruiker feedback geven dat er op de knop kan worden geklikt.

De eigenschappen `color`, `background-color` en `border-color` zijn slechts een paar plaatsen waar kleur kan worden aangepast na interactie.

**shadows**

Schaduwen worden vaak overgezet om hoogteveranderingen aan te geven.

{% @flems/flems url="https://flems.io/#0=N4IgzgpgNhDGAuEAmIBcIB0sxhAGhADMBLGXVAbVADsBDAWwjUwAt56p8RYB7axfswA8SYgDcABLCi0cAXgA6IAO4AnWgAcNEVUoB8C6hIkjxUmfKVgAjgFdaqiEonxaAI2LUkEAB6KQAAz6gLwbgN47QgD0omIGRibR5rJg-jb2js6uHl6+-kEgeoB8G4Bou5HRscamktJJKXYOTiAu7p7efkp5esGAvjul4rG9MVyQMAjEfOQgACyoAGwgAL54NAxM6BgAVrgEvPwQgugLSyB0jMxYOFw7AvBnapraqhLAhsaiYBoyAJ6oEoQwPgBuF6-f4AWlEjlGfB+qh4yiBcXWtjA8GIhE+oKue3gP1g2J0COMtCgxAA5tRQcREPQwLj8aoEfNDIYMKl6k9gcpiEh4CwfgBGAIBDSA4EsCBktgCoUiwkSegOUmeH4ADllwMIfHgoLAxAAXhAfgAmCD0OVvD60b4g3xypEotEYrH8Om7BnA4lkilU020qT0uVuHiqbyqUHqUTI1XquJuWiwADWpNhti8mJ4UGDP2ULB9YHoPATEARwPg6moutRfFBGlhD3g1qDPh1LFoSDheBc5bAmtUZtL3apYwpSFs6ir1B+AGYAKwBGlysu0CtD6uo+ieUmgwipqGTiQQWTF5mxnjNsCt9vKH7CnwSI0iiSTR+3iSqUlxgAUAU7P4kf4CDAjUmABKRkT1ZOpHFQYgwE-VAWB4MQdE7VBNVgZEQI5U9z0vOEb0fNU70FR9+Ufd8vwA39fyAsCB2XHtg3oH4lwrGREAATU-UEiLo6gmWoQwIgAKgkAAROBg1oVFkIkFFPjICRhIiQwgyQT5sNeWDLWtZNuTlS08Upak-TxN05XFSUcQkQUAjEFhwOoIZoDgCcJinGZUACBYAF15iAA" %}

## overgangstriggers

Je CSS moet een statuswijziging bevatten en een gebeurtenis die de statuswijziging triggert, anders kunnen CSS-transities niet worden geactiveerd. Een typisch voorbeeld van zo'n trigger is de pseudo-klasse `:hover`. Deze pseudo-klasse komt overeen wanneer de gebruiker met de cursor over een element beweegt.

**Hieronder vind je een lijst met enkele pseudo-klassen en gebeurtenissen die statusveranderingen in je elementen kunnen veroorzaken:**

* `:hover`: wordt afgevuurd als de cursor zich boven het element bevindt.
* `:focus`: wordt afgevuurd als het element gefocust is.
* `:focus-within`: wordt afgevuurd als het element of een van zijn afstammelingen gefocust is.
* `:target`: wordt afgevuurd wanneer het huidige URL-fragment overeenkomt met de id van het element.
* `:active`: wordt afgevuurd wanneer het element wordt geactiveerd (meestal wanneer er op het element wordt gedrukt).
* **klassewijziging van JavaScript**: wanneer de CSS-klasse van een element verandert via JavaScript, zal CSS de in aanmerking komende eigenschappen die zijn gewijzigd gradueel aanpassen.
