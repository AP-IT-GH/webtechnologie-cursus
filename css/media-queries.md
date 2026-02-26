---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/CyMmymf8tiNQ4Ws9WmHV/css/natuurlijke-volgorde/media-queries
---

# media queries

## definitie

Websites kunnen tegenwoordig bekeken worden op smart-phones, tablets, pc of op een breedbeeld scherm. CSS heeft hiervoor media queries waarmee **op basis van de breedte van een scherm aparte CSS geschreven kan worden**.

Een media query is een stuk CSS-code in de stylesheet van een website, die informatie zoals de grootte van het browserscherm van de bezoeker opvraagt tijdens het laden van jouw website. Op basis van opgevraagde informatie worden specifieke CSS-stijlregels weergegeven voor een welbepaalde schermgrootte of **viewport**.

{% embed url="https://ap.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=1e1407b1-8ac1-4d5c-82b5-ac680130c711" %}

## syntax

```css
@media media-type and (media-feature-rule) {
   / * CSS-regels komen hier * /
}
```

* **media-type** vertelt de browser voor wat voor soort media deze code bestemd is (bijv. print of screen)
* **media-expressie**, een regel of een voorwaarde waaraan voldaan moet zijn, vooraleer de opgegeven CSS kan worden toegepast
* **CSS-regels** worden toegepast als aan de voorwaarde voldaan wordt en het media-type correct is

## media-types

```css
/* Als de pagina wordt afgedrukt heeft de body een lettergrootte van 12pt . 
Het is niet van toepassing wanneer de pagina in een browser geladen wordt. */
@media print {
    body {
        font-size: 12pt;
    }
}
```

* **all**
* **print**
* **screen**
* **speech**

## **media-kenmerken**

Nadat het media-type werd opgegeven, kan een stijlregel opgesteld worden voor het opgegeven media-kenmerk, veelal de breedte en de hoogte van het opgegeven media-type.

De functie die het vaakst gebruikt wordt om responsieve ontwerpen te maken (en mét brede browser-ondersteuning) is de **breedte van de viewport** door middel van `min-width`, `max-width` en `width` media-kenmerken.

### mobile first design

```css
/* stijlregels voor alle schermen kleiner dan 320px breed */
@media only screen and (min-width: 320px) {
    /* stijlregels voor browserschermen > 320px en < 720px */
}

@media only screen and (min-width: 720px) {
    /* stijlregels voor browserschermen > 720px en < 1024px */
}

@media only screen and (min-width:1024px) {
    /* stijlregels voor browserschermen ≥ 1024px */
}
```

### desktop first design

```css
/* stijlregels voor schermen groter dan 1024px breed */
@media only screen and (max-width: 1024px) {
    /* stijlregels voor schermen > 720px en ≤ 1024px breed */
}

@media only screen and (max-width: 720px) {
    /* stijlregels voor schermen > 320px en ≤ 720px breed */
}

@media only screen and (max-width:320px) {
    /* stijlregels voor schermen ≤ 320px breed */
}
```

### breakpoints en media-queries

![](../.gitbook/assets/css-mediaqueries-1.png)

## voorbeelden

### media-queries en font-size

{% embed url="https://flems.io/#0=N4IgzgpgNhDGAuEAmIBcIB0sxhAGhADMBLGXVAbVADsBDAWwjUwAt56p8RYB7axfswA8LAIwA+AOIAnHj3iIABIT7xFtQi1rUA1tGIArHYoBu2xQHNZ8pWFgsI0+kID0Y8QB1qQgA7iAMjzSEPSKxD5gAK6hSDxQQYpgxGoMEPB4irzUkAhpkdLqSOHESbDEivrpicgVxJFg9DxIioj0PgnE1GVIkfyKkWpQtABGQRAVarHxwYr0tBZ06lDEAI6RtBiKAIqRJeoD43UzwT7BDtRIjslh1KZxkT7wtEomlRU4EJs7PP1ga+NPC4hdTDA7BDIAYWepE6tAyPmhEH4xFoimoPDA8GktAA-Ntds0cvlymkUaEnvQ1gwKpFlJELCi1NRIlAhooEdJGfkMF5JLRWSj3moePRqHsiiYSqjOuzaNJEGAWsEwBkqdJol9dn9IuMBoopgkrLRJUg4eyhrBHM9FMtho4fq8oBkIFrGkhNgBJJD-RRQiBgOV7Qi0S0zEz3fjPcbLUNpVDVSCKLR24KbAAKtBZUGi+v0a2S8L4l05oMVbpZJR9UT22PgxB+A2S3MUAEFMiL6L1yjxhpBpGZkaj0bd-WpgpbLhcNV4ITnLYhOYqZa9qFa63wAbtZqp-Rk6HY8gVO2BNgBlGpaOCKfOK9o4a6dLEQHzEHqK2ij4hzGaIVn1TYALJBMM5SEJy1AMqyqJZGYAqKgGL5Ihkr7siykp0AUTT1nc2bwAi8AYK4fhcJAMAIPW2TMAAzKgogAGwAOwgAAvngNCpMwGAGLgBBZAI8DMCxbEgHQjCcdgPHcDugjoF4XgAAKMEUqJ2MESLqBcigABT0J0AC0ADur7wCw8YAEwAAwWT4AAeACUijAF4iguUm7BQI5zmud5Kj8HpSQAF4QPGdG2QA3F5LnMV40XUApSmCqpEDqdozQ6fpRlICZ8ZUVZtkOU5tyuWwHCeUV3kub58D+cQQXxgx4WRYosWxfFyCJbAam3Kl2m6dQhnGaZigACx5fZZXeSVHmFRVrlVTVdWKAAHI15XNTFcnUIp7UqZ1yXdZp6X9Zl2WKAArGNBVNVNE2zcoqgLcFigAJyrd5LWbdtymJHtKWHX1A1ZUNdGXbdLk3TNd3zYFT2iNZNkRWtH1xVtCW7V1GlpQDJ1DQxoOQ+D7lgxV0O1bDohva5yNtd9SV-VjGWDfGS349dRMEyTD0w-GohmZTUUbSjX0dRjPVHYDp3Paza0Q01Plc2TPNUfz63UK1qM7T9ov-YzQM81Z8NXTL7Ny3NCuLaIw0q9TGu079B0M8dTOKKIcOG8TstrfLfncy7VsI01NvC+j+2Y71uunbz0uTSbXtmz7isu2d1uCzTIuh2L2PO6IuXuxznt3fdCcW6FAdI6ntvp-T4dO3rfvR8VseF6TFsNWX72C8HWsZzrteRyDeds6VHPe9VvuiCt7dUzFJHQHA66UegS00aILEALrMUAA" %}

### media-queries en background-color

{% embed url="https://flems.io/#0=N4IgzgpgNhDGAuEAmIBcIB0sxhAGhADMBLGXVAbVADsBDAWwjUwAt56p8RYB7axfswA8LAIwA+AIKw2EAE4BzOXyQBrGAFc5AAmJht22oRa1qq6MQBWq7QDdT2pTx7xE2sDPn0hAejHiAHWohAAdxABkeOQh6XRCwDVikHigo92J4Q0Z4PG1eakgECHgtQyRiEL1iWGJtCxz3ZDriDTB6HiRtRHoQtOJqGqQNfm0NTKhaACMoiDrM5NTo7XpaBTpDKGIARw1aDG0ARQ09QzHZlqXokOiWCGokeQzdajsUjRD4WjdberqcCH2Rx4ozAO1mn3uMUMkzO0VyAGEvqR+rRciEkXd4MRaNpqDwwPA5LQAPyHY6dQpaWrFbGxT70HYMOoabSEDQKbGZagaKATbTouScrQYIIAcVovOxf0yPHo1BO5Vsehx-X5tDkiH0hIgYFyjLkiUBx1BGlmY20CzSSloSqQqP5E1g8i+2k2k3kwJ+UFyEGN7SQ+wAkkgwdpETr1SdCLQnUtbG9+F9ZptY8VUI1INoTO7ovsAAq0HlQRIWiw7DJolSPGH6f08vShhInIlY4FjDLC7SSPKy+jDWo8SaQOT2fhSvEvHWZaJOh73Q1BeElp2IQX6VU-ajO1tbrrHZZ8TW5OgeYqlPtgfYAZSaJjg2nL+l6OCe-W1lSG+loU+IKyWiF5Vp9gAWSiSZakIQVqA5XkcXyexJX0MBaEqO5cmIToQh5JU6B0DpiE9N54HReAMF8MIuEgGAEAIgpmAAZlQUQADYAHYQAAXzwGgGCYdAMEsXACHyAR4GYTjuJAOhGGYLAcC4ETMWYHwACptBvTJ4FubRJhjVQnGGTpeEWbQeEIHSOgATy6YFok6FSfCCaYkGs4AggMXTYH05RDIAWmMqJ0wAYidUKIAAbiCDigiCVTtAAeReDxojuLUTEydVZgATiygAmEIAA9TJ0MhdUaTTtM87yeEMnsTPgYFJmLWYHKCAABRhyhxZKIDuQx7m0AAKFYCt8gB3DCtPTHL8oKgBKbQ3JeCyXMW9yDB0vSDPufyUkCnTmsi5bouoE7YrUxL3FgFKCi6dLDCWZiAAYnsK4rXR1MrIAq2Yqu2oy9p0BrTM2H5tFa6gOuQKUer60xOmG2hRompApu0Z7Xvmtbluc1z1o8rafJ2gK5HTFJiB+I6DBOjjKOgOAd3IEBRFYpjOIAXQ4oA" %}

### media-queries en flexbox

{% embed url="https://flems.io/#0=N4IgzgpgNhDGAuEAmIBcIB0sxhAGhADMBLGXVAbVADsBDAWwjUwAt56p8RYB7axfswA8kBMT4ACWFFo4AvAB0QxRPQC0vfrWLUIAJyUTiSRctUa+8bboMgAfAuoTnL50Np74xaRCkz5SioQ9Ep2tEIA9B5ePg5Ori7unt4wfrJgpkEh9gBGkdEpEHEJiQU+aQFmwaGw+cmxjiVuZanS6ZmqoUh1MTDFTUm9vm2VWaEQPYX9JYOFFRmBnfaEkw3xMy3D-gtV2XYA5qt9jQOb8x3V9ixHRScb9a3bF3vEN9MJs+UjO2P2AFZvO4fM7fZ6hADWgPWwIeW3ai0udigUKaEk+j3hu1C9BRiQioi8fDsXEgMDEfHIIAAjAAWVC0kAAXzwNAYTHQGD+uAImgE8GYTJZIDojGYWBwXF5EEE6AAAowkMRaBIwLA9BBpRJaNQkBIABT0WgADzUAHdjPAWKgJAA2AAMdoADkaAJQSYBA1FsDjuz2olyESxqMDEABeEGtVIATM6ANx+kqMhMJDBZCxaHT6X3Q-0BmAmxXq8nUa28KAAV3o1HjOaaSeoydcqdU2dzJXNSEtkYdAFIa22JPXUUOmsnm8F01ZM3pW23DXp9jprQBmdX0fttx20JCK6j7a1Rtcb3M5WiwcH7PQ8cs6ixQHh6a1QYj7Ni8PS0KDH-2KsCOmQAJ7WoQ+bfqiIEQAWxBFoSJYSFeppgU0EEmqaH6OtaaG0I6SHOPWY5ZLOJ5nheV43kgd4PtaADEhB0bhCTzoucF2gxrhbjuOj7hIh7BGxAZBiG4bWgArEejYuGWVESM+r7wJAtCXhq1YSc4OQPkg+jWmAPDPrq1EAJy0EZRkSFScbJoyJLQHAsGUlGBmoAZTIALqMkAA" %}
