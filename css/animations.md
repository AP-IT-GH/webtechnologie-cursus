---
description: >-
  Animatie is een geweldige manier om interactieve elementen te benadrukken. In
  dit hoofdstuk leer je hoe je animatie-effecten kunt toevoegen en beheren met
  CSS.
---

# 6: animaties

CSS-animaties maken het mogelijk om overgangen van de ene CSS-stijlconfiguratie naar de andere te animeren. CSS-animaties zijn als CSS-transities maar krachtiger. Animaties bestaan uit twee componenten:

* Een set **keyframes** die de begin- en eindstatus van de animatie aangeven, evenals mogelijke tussenstops;
* Een CSS eigenschap **animation** die de CSS-animatie beschrijft;

## keyframes

In animatie software, CSS en de vele andere tools waarmee je iets kan animeren, zijn **keyframes** het mechanisme dat je gebruikt om een animatie te definiëren.

{% hint style="info" %}
Een keyframe vertegenwoordigdt een specifiek punt op een tijdlijn.
{% endhint %}

Er moet ten minste één keyframe worden gedefinieerd in een CSS-animatie, maar meestal worden er ten minste twee weergegeven. Ze beschrijven het begin en einde van de animatie. Er kunnen aanvullende keyframes worden gedefinieerd om eventuele tussenstappen tussen het begin en het einde van de animatiecyclus te beschrijven.

Keyframes worden gespecificeerd met behulp van de `@keyframes` at-regel. Laten we eens kijken naar de syntaxis van deze at-regel.

```css
@keyframes name-of-animation {
  0% {
    height: 0px;
  }

  50% {
    height: 400px;
  }

  100% {
    height: 300px;
  }
}
```

In het bovenstaande voorbeeld hebben we 3 keyframes gedefinieerd met als waarden 0%, 50% en 100%. Alle drie de keyframes vertegenwoordigen een punt op de tijdlijn.

**Het betekent het volgende:**

1. Begin de animatie (0%) met height ingesteld op 0px;
2. Animeer height naar 400px terwijl de animatie doorgaat tot het midden van de animatie duur (50%);
3. Animeer height naar 300px terwijl de animatie doorgaat tot het einde van de animatie duur (100%) ;

Je kan een willekeurig aantal punten toevoegen aan de `@keyframes` at-regel.

```css
@keyframes name-of-animation {
  0% {
    height: 0px;
  }

  25% {
    height: 200px;
  }

  50%, {
    height: 300px;
  }

  75% {
    height: 100px;
  }

  100% {
    height: 400px;
  }
}
```

{% hint style="info" %}
**Elk punt dat je toevoegt, moet een procentuele (%) waarde zijn.**

Er zijn hier twee uitzondering op namelijk "`from`" en "`to`". Binnen de `@keyframes` at-regel zijn `from` en `to` trefwoorden die 0% en 100% vertegenwoordigen, het begin en het einde van de animatie.
{% endhint %}

```css
@keyframes name-of-animation {
  from {
    height: 0px;
  }

  to {
    height: 300px;
  }
}
```

## animatie eigenschappen

Als je de `@keyframes` wilt gebruiken, moet je verschillende animatie-eigenschappen definiëren of gebruik maken van de `animation` short-hand notatie.

**animation-duration**

De eigenschap `animation-duration` definieert hoe lang de animatie duurt. Het moet een tijdswaarde zijn, hoe groter de tijdswaarde, hoe groter de lengte van de`@keyframes`-tijdlijn.

{% hint style="info" %}
De standaardwaarde is 0 seconden. Je kan geen negatieve tijdwaarden toevoegen.
{% endhint %}

```css
.animation-element {
    animation-duration: 10s;
}
```

**animation-timing-function**

Om natuurlijke bewegingen in animaties na te bootsen, kan je de `animation-timing-function` gebruiken.&#x20;

**Er zijn verschillende waarden beschikbaar als presets in CSS:**

* `linear`
* `ease`
* `ease-in`
* `ease-out`
* `ease-in-out`

```css
.animation-element {
    animation-timing-function: ease-in-out;
}
```

{% hint style="info" %}
Indien de `animation-timing-function` niet wordt ingevuld, wordt de standaardwaarde `ease` gebruikt.
{% endhint %}

{% embed url="https://flems.io/#0=N4IgZglgNgpgziAXAbVAOwIYFsZJAOgAsAXLKEAGhAGMB7NYmBvAHiwwjQAJqoM44AXgA6IAO4AnDAAdpMCaIB8w7lxYATCADcefASJATaxDIwUhFLAPSaty1Sz4AjGFHtcPXAGryMadfJcAVzEEFicAOZcYACuaNSh9CqeanCuMAnuKWq00oloilCcMBgS1rn5WSksFRD0iiVp5Xl1BcnZNS31jTAAtJzNle3Vtd38fbQxxIOtVZ6dlT39aL2T01ajbaoe1mmwme3Wzq721uycipQgexn5CIggAIwATIgA7CAAvhTo2LgP+AAVggqHQGExiHgwXBiFwjCYzFxBEFaNQYjgGPgAI4xeQATwAyukErQJAAKADk+HhpnkFIAlABuFTQ2E3BJIlFojHEbG4iSE4nEUmU9nEBnMtAqMX4DDqdQAUS0EIAMhAYUx5JTqIQ-BEYBSKFwycATBJ9cRPvSkYouMB2jSzPgYXjYLK0GFTK0ACphSIAMTiCVanLNFvwWgwUFxkqtkquYta9xAADZEAAGL4-ECYHB4fDUARXMGMZgPc7ce2qTRwaR8PGIaKwAAeko8hBgEAiJEbj3T6a0hDbTZgzd6mgkt1ajbo0awaGHgJiMIgYDxvRLEJnEPkw6jXZWEEYWDg2-BEljKhU1OMtIkdvafk9+V6uZgjcdMD3HvYL-UMSkfJGwAZjgb9n1afozC9egN0mBhG04SAPUYcDf0g0JwjQCJelieIgK4Io0BKC8VE+K80AAAQAaxgPEwCkHA4DhW9GAfVR0wAUnYlJiCkNA4DAUksA-ViYDJdMmXacjVAAVi4njPD4vxBOE0SEXE4CU3TAIIik7YuCcDBqGoiIjDidRGwiWgoHUYcZJklQrAAKi4AARDJSS9ZUuBdWBmOcqxr0-e8qw8MQIHUYhCEbN502kVt2g7Lsey4Z54sS1QjJMsz4Msrh2CMehh2kWg4CPac4Vcbyv3aQqIk4XpYDAYhGwwKZaGHerGokFLWq4drhWHJxSQCCReikTRl17ScsEvKU0GOKBFJrOsMAbQyoFRaiutKBqVmFaRG2eWb5oTIUkzwAAWdMMy+ABdT4gA" %}

**animation-iteration-count**

De eigenschap `animation-iteration-count` definieert hoe vaak de `@keyframes`-tijdlijn moet worden uitgevoerd. Standaard is dit 1, wat betekent dat wanneer de animatie het einde van je tijdlijn bereikt, deze aan het einde stopt. Het getal kan geen negatief getal zijn.

{% embed url="https://flems.io/#0=N4IgZglgNgpgziAXAbVAOwIYFsZJAOgAsAXLKEAGhAGMB7NYmBvAHiwwjQAJqoM44AXgA6IAO4AnDAAdpMCaIB8w7lxYATCADcefASJATaxDIwlcMaCO0ZKWAek1blqlgCMArsWL1FACXk4EwliB09vXxUuNWlFABEYCysbCESxWgl1Yi4AJi4Aaxh5LkJ5QgwMKHV8B1iVB3ZORUoQOBhYamIIegREEAAWRAB2EABfCnRsXD78ACsEKjoGJmI8JaCucJ9uQS51WmoPHAZ8AEcPeQBPAGV2mE6MgAoAci36Z4BKAG4VdeyAcyMYmKu32h2OxDOFwkNzuDwkL3wRhMZk+PzQKjeaHwGHU6gAoloVgAZCBBJjyF68CDUfLPChcR4fLiCRRcYBRLicwG0YESfC8fhwUlBJEwLC0IkvSzWUwwNGczlaWgQdRcHl8-C0MBgNrEADqquIhHR0W5QPkAr0wrJkNx6mlyTlCrQow+LTaHS6PTwAEYAAyIHJjCYgTA4PACgQtJaMZgzSQyOTmDmqTRwaR8S6ILhgWAAD1NJRgEH+JBzAf9WhNnLzMHzAFpNBJ7t60Dm6FAjmgi7MPEEIGBLg3YysOyt5EXKqW0A2IIwsHBx8sJOjRioVDinYx2ZyZSl6A3wzAc8i5VPt91Z+oPFI2zmAMxwC+yttzsymK8j2geBg5nIvges5dFgnD-A2YC-p0V45lAnAwBgq4qOuGJoAAAoUlxgFIOBwFwZ47qm0T+gApLuqjRMQUhoHAYAZFgp7GHKjz+t8nIodEACspHkdElHUbR9GMSiMCPA+ABs-rqDA-xsRRmwYLSPK-uoOb-LQVRFihKEqPYABUXAJHQd7aIkQSXLAeF6fYm4EcURFcGIRqEDmQz+tIhacqUpblrk7meaobiKfkyloKpXDsEY9BFtItBwPOMH4e0n5EkWkX-JwDawGAxA5hgXi0GliEZbOEg+blFgFUWbgZNJEgNlImj9hWLZYGuG6oVivG5vQxANvFABeJ5cL6+D9K1MX2mBLXikVEglQ2PjSP+E2cjVmTyDmaD0DAa4enCba9AMOSIL6YwALqjEAA" %}

{% hint style="info" %}
Met de waarde `infinite` wordt je animatie oneindig keer herhaald.
{% endhint %}

```css
.animation-element {
    animation-iteration-count: infinite;
}
```

**animation-direction**

Met `animation-direction` kan je instellen in welke richting de tijdlijn over je `keyframes` loopt:

* `normal`: de standaardwaarde, die vooruit is;
* `reverse`: loopt achteruit over je tijdlijn;
* `alternate`: voor elke animatie-iteratie loopt de tijdlijn achtereenvolgens vooruit of achteruit;
* `alternerend-reverse`: combinatie van `reverse` en `alternate`;

```css
.animation-element {
    animation-direction: reverse;
}
```

{% embed url="https://flems.io/#0=N4IgZglgNgpgziAXAbVAOwIYFsZJAOgAsAXLKEAGhAGMB7NYmBvAHiwwjQAJqoM44AXgA6IAO4AnDAAdpMCaIB8w7lxYATCADcefASJATaxDIwlcMaCO0ZKWAek1blqlnwBGMKC66+uAYUJLAHMYLk0JGGpiCHoVPzU4LyjiHwS1WmkY+kU0Wgl2KAdM7LQ0hJYS2LLIrXkk4qzq8r9KppyMKDNMRkbSlt82-s7u0xgAWlr6mD7m+Nb7JNhotIcPLxcHdk5FShAllOqERBAARlPEAHYQAF8KdGxcE-wAKwQqOgYmYjxPuGIuEYTGYuIJwrRqABXHAMfAAR0h8gAngBlZLRfIACgA5PggWMJNiAJQAbhUfwBB2ioPBUJhxHhiIkqPRxCx2KpxGJZLQnPwGHU6gAonUGAAZCD-JjyHHUIJoULYihcTHAEwSULEG5E0GKLjAeb4sz4f5I2D8qw2aoAEQgkWi1Rp6s1+C0nURPO1PL2nKOeAArIgAAy3e4gTA4PD4agCPafRjME7bbgG1SaODSPhIxBcMCwAAePN8hBgEGCJBzpyDQa0hCLuYL4wih3oOboUGhaHrL0h-wgYCR43j3zb33k9c6ZbQ4wgjCwcFHXwknpUKjxxgJFusY3180s29K4wjMBzRpgE8tpmqTchUlKOYATHALwfr7P5Ff6EPaJCGDnOJAViMC+VpfjEWCcME4xgL+DqtlwUCcDAGDLioNyrmgAACADWMBImAUg4HAgIbowu6qEGACk5EJMQUi8mA+RYKepEwJiQbqDAwSkvM6GqP6VE0X47gYNQ2HBEYv7qDmwS0FA6j1nxvhVoJqa0fRcCMQULHAmxADMABsHFcTxqh8XxKj2AAVFw1pRPkV51FwpqwMRVn2GuZ7mGpXBiBA6jEIQOaXEG0iFvMJZlhWXAPqF4WqCJYkST+aDSVw7BGPQ9bSLQcCztUp5eI557zBlwScOMsBgMQOYYJCbL1mVFUSFFNUWPVtD1u4+ScRIkwChAvaVpEWArmgKjrFAQnppmGDZlw7hQBC2GNSh5XTmy0iPiNY0+qyfonAALA+wa3AAujcQA" %}

**animation-delay**

De eigenschap `animation-delay` bepaalt hoe lang de start van de animatie moet worden uitgesteld. Net als de eigenschap `animation-duration` accepteert deze een tijdswaarde.

{% hint style="info" %}
In tegenstelling tot de eigenschap `animation-duration` kan je het een negatieve waarde geven. Als je een negatieve waarde instelt, begint de tijdlijn in je `@keyframes` op dat punt. Als je animatie bijvoorbeeld 10 seconden lang is en je `animation-delay` instelt op -5s, begint deze halverwege je tijdlijn.
{% endhint %}

{% embed url="https://flems.io/#0=N4IgZglgNgpgziAXAbVAOwIYFsZJAOgAsAXLKEAGhAGMB7NYmBvAHiwwjQAJqoM44AXgA6IAO4AnDAAdpMCaIB8w7lxYATCADcefASJATaxDIwlcMaCO0ZKWAek1blqlnwBGMKC66+uAZUYoLnUYLjgTCWIuLUsuACswy2tTCDCAVwhiRBU-NTgvGGpiHzy1WmliCHpFAAY4BwqqmtyylibqtEUARgb7DpbVPPbKzsUAJj6Brtbh6cUAVinRwbLyla7u+saN0t8HAthi0ocPLxcHdk5FShBDoua0BEQQbvHEAHYQAF8KdGxcC98PEEFQ6AwmMQ8OCIlwjCYzFxBCFaNR0jgGPgAI7peQAT38hWKtAkAAoAOT4eGmeTkgCUAG4VDDovdikiUWiMcRsbiJASicQSRS2cR6Uy0CpRfgMOp1ABRLSQgAyEAiTHkFOohEsAHMYOSKFxScBIvriN86UjFFxgK1qWZ8BE8bAZVYbJ0ACJeDB4jlmmA82JQXES3z24w0iT4Xj8OCqiJUmBYWhKinJGwGxmtVpaWgQdRwyOO2hgMAFYgAdQLxEIYa4EYR8hjenjap5svU6fdNPFKktEtuos6z1e71qPz+IEwODwMYEt3BjGYLyu3Dtqk0cGkfDxiC4YFgAA964QYBBdSR91talo661DzAjwBaTQSB6dfd0ENYND1+LpBEEBgHiz5LpCX6QvI9YYFAF5oM+WTJnAkEQhIErfCoKhuikjC2q0GapPQz4zjA+4OjAME9o8r7pFIjz7gAzHAVG4Z0iFmERCF0OkDD7pwkBWIwrEesRVRYJwurPmAvHFJ+XBwWgMAYOh-ZYWgAACADWMB4mAUg4HARZNvhqi1AApKZeTEFITxgCSWDkcWMCkrU2aqJhqgLBZVl+DZlhwPZEiOcZNKkoxABstShLq7l5O4GDUFpupGLx6j7rqtBQOo9aeZ5Kj2AAVFw3p0PR2hhM6sBGYV9jYRR5gbr4Yg1oQ+4fLU0gnq0Z4XleXDjJ13WqAlSUpbQaX7uwRj0PW0i0HAWTye+fBVEq9bTbqnDPrAYDZBY6RChtKlbQhEh9ftGCHbQ9buCSoQSM+UiaIB17vlgGHqWcwRNSEao7r6+7uFAqJacdEinc+QrSPu4zvZ9aBDoKI54AALLUiATt8AC63xAA" %}

**animation-play-state**

Met de eigenschap `animation-play-state` kan je de animatie afspelen en pauzeren. De standaardwaarde is `active` en als je deze instelt op `paused`, wordt de animatie gepauzeerd.

```css
.animation-element {
    animation-play-state: paused;
}
```

**animation-fill-mode**

De eigenschap `animation-fill-mode` definieert welke waarden in je `@keyframes`-tijdlijn blijven bestaan voordat de animatie start of nadat deze is afgelopen. De standaardwaarde is `none`, wat betekent dat wanneer de animatie is voltooid, de waarden in je tijdlijn worden weggegooid.

**andere opties zijn:**

* `forwards`: de waarden beschreven in de laatste keyframe worden behouden, op basis van de richting van de animatie;
* `backwards`: de waarden beschreven in de eerste keyframe worden behouden, op basis van de richting van de animatie;
* `both`: volgt de regels voor zowel `backwards` als `forwards`;

{% embed url="https://flems.io/#0=N4IgZglgNgpgziAXAbVAOwIYFsZJAOgAsAXLKEAGhAGMB7NYmBvAHiwwjQAJqoM44AXgA6IAO4AnDAAdpMCaIB8w7lxYATCADcefASJATaxDIwlcMaCO0ZKWAek1blqlnwBGMKC66+uANXlLdXkuEIsrGwh6AFpIKCgYrFoQlT81OC8YamIfdLVaaWJotEU0ehgHQuL6PPSWapLFMFoJMQwJdTgqoqa0-Ibe2vcMagBrds7u+0ba-vrZ0vdjQh6a0vm1e0zYHLyHDy8XB3ZORUoQHez1hEQQAEZ7xAB2EABfCnRsXDv8ACsEFQ6AwmMQ8MC4MQuEYTGYuIIwrRqABXHAMfAAR2R8gAngBlLI5VoACgA5PgYaZ5KSAJQAbhUEKhVxy8MRKLRxEx2Ik+MJxBJpJZxFpDLQKmF+Aw6nUAFEtKCADIQSFMeRk6iESwAcxgpIoXGJwBMEl1xDeNPhii4wH6lLM+EhONgUsiphKADFoFAALIpGBsk1m-BaDBQbFi3x24xUiT4Xj8ODKyEUmDJBVkyzWKmi-r9LS0CDqaExh20MBgTLEADqReIhEjXGjsPk8b0SZVXOl6kzbsYubQFrFF2FJVuDwATIgAAzvT4gTA4PDxgQXYGMZh3U7cW2qTRwaR8HGILhgWAAD0bhBgEG1JBP92n060Df6Z5g55imgk1xKJ7o4ZYGgjZ-MikIQGAOIxOuoL-qC8iNmGt5oDEECMFgcBwSCEhim8KgqK62aMDa-RZlEsSLjAJ72jAiF9iUX7IlI6wPnAjYRERDFoUE6zQbQyIMA+dGcbExRYJw2pxAJOR-lwUCcDAHS4fhaAAAJjDAOJgFIOBwCWLYkao04AKSGekxBSGgcAtBIWDUaWMDEtONIGnA1Bho59z0v0eGqI+JlmX4FmWNZrR2fpVLEgAzAAbNOITat5qi+CM4zakYAnqCe2q0FA6iNr5vkqPYABUXAACLZK07oKlwTqwHpJX2ARNHmLuvhiHWhAns807SJe-TXre95cBOfUDaoqVjOl-FoFlXDsEY9CNtItBwGhsk-nwxQKo2i3apwMSwGAxAnhgyICntHQHShEjDadFgXbQjbLJ08gxFImhgQ+P5YMp4poIcUCBfuh4YMeXDuFASJjFdpqHQK0gnhOv3-SO-JjngAAs04zu8AC6bxAA" %}

## animation short-hand notatie

In plaats van alle eigenschappen afzonderlijk te definiëren, kan je ze definiëren met behulp van één eigenschap namelijk `animation`. Hiermee kan je de animatie-eigenschappen in de volgende volgorde kan definiëren:

1. `animation-name`
2. `animation-duration`
3. `animation-timing-function`
4. `animation-delay`
5. `animation-iteration-count`
6. `animation-direction`
7. `animation-fill-mode`
8. `animation-play-state`

```css
.animation-element {
	animation: animation-name 5s ease 1s infinite normal forwards running;
}
```

## animatie voorbeelden

{% embed url="https://flems.io/#0=N4IgzgpgNhDGAuEAmIBcIB0sxhAGhADMBLGXVAbVADsBDAWwjUwAt56p8RYB7axfswA8SYgDcABLCi0cAXgA63PvFrFqEAE5KAfAuoSJI8VJnylLCLSS79hw8cnTZYRSAgBPCGFsH7D0SczVyVPCF9-f0dTFzcABwBXONJdIQB6QL0-KIzxLMijQJjzdy8IgsKTZxLE5KhU3LF8yPTMu3tWvPaAquC3eh4E+BZyh0bmzqb9SZ0uSBgEYj5yEABGAGZUADYQAF88GgYmdAwAK1wCXn4IQXQrsHgJTR5VRE0JOQkkHlgExn4MABHBJaDwAZWgcHgPE0AAoAOQYZ6vLTwgCUAG59PdHvMoR8vj8-jd4ECQZpwZCEDCEXiEOisdR9HTSdYkABRMQkgAyxAeNy0CNgLFo1AA5hB4XgJLDgKpNBL4Ls0R8dBJgO1kbQ3hgHh4YBhRcR6NqltQAGKkKAAWR4SAgBPliowYloUBBjMMmpe2q0WGCvIeSIgAy5CKNJsQDPa7TEPGISCePp1PEIhEg8AA6gnhp6JN6UZp-S5A6ykEhw9Rjb7o9RlYy5lT4GaVqsAEyoAAMewOIDojGYWBwXCuAngzAARnaPOr2qIwHEZB5UBJCDAAB55yzEMVsFerTudsQsPOnBIPYiEDwAWlHJJXsBJWjzbp31GvxEQ9DAD6fmjzE60LAADWYrPAk1BILePBQDCK6IG6jK7Po+gYJY1izn486LrQy6rhueZrhA67XqImhQmaD4wX81CnuezZXtB1z8L+1z-u0r5iu+n4hj+Uh-luEA7nuEirAArJ2cSbu0ADuOYsPuElSQBQGgeBkHQbBmgrmKMFIABML2tpEgTjIIESAAHFJEhgDBCYGZoRnXpo1jEOeK4SQApEhKHUBgYRgJhhjYUuK5EdJfhnhejF3ixNlxEBEDXrQ6n6bJ8n7oe3n6MhTJ+WEQUSNuu7wCu6xicp6VIMMZWSRFhiASBYGDBpvBaSuMksDxDlGSupmqRIFXrjZdlpX4U6OVozmue5g2dtlda+RgtSkIVxUiW2Q15nJ1UKRIbZ1SpTWpZpcEmWZwE9VNLmiLNXkvlWkaURIsE8MBEhbIFViQB+76DI86gkFWiCrjCMkpUgYA+XlAACwGeIQLmMIFr3vRqfgHZ50oACzzYVhgmgq6jXjAhClaJh3dBIhNisT0JxCunZ5rlhhbHj6P+DTxOk+TB6Vdk1MpbT7705l-OGCzlns1TXPvjzjPi-YsvXqLFOK7luWoQMQwsGtQklSuB2KztNUSLjiuNWpLVQW1Z0JTAYhLDA8DkWNDWGVofUXYN1m2VA9ntBNTk3W5fH3e0yuq1tHGPaafArmALCaOo72fRI31JcT-0SID6g8aDmjg45UM5b5cMI0j3g2UnKeFZjOPSwLLuimAhAwvQCewG6EAABqwp2GBbCqzfUGAMiIP3eB8+uaLtJLFmN-4I+t+3nfd33A8AOxicPLmj+PECT0Ns9+BrvmNgszbLMwm9bF2ewALq7EAA" %}

{% embed url="https://flems.io/#0=N4IgzgpgNhDGAuEAmIBcIB0sxhAGhADMBLGXVAbVADsBDAWwjUwAt56p8RYB7axfswA8SYgDcABLCi0cAXgA63PvFrFqEAE5KAfAuoSJI8VJnylAcxY8w8XYF4NwN47QgPSixeg0fenZYReAstEg8AO5KEi6eru46XJAwCMR85CAAzKgAbCAAvng0DEzoGABWuAS8-BCC6JW2Epo8qoiaEnISIbAAroz8GACOXVoAngDK0HDwPJoAFADkGI3NWnMAlADc+nXwEgmTbR083b3wA0OaYxMI0-N7CGub1Pp3p8FIAKJi1fAAMsS21S081gQWoFggczwEhmwFUmnB8ByqzaOgkwH0hiWtBaGFswxgGFo1GI9GxyWoADFSFAALI8JAQA5whEYMS0KBDR6GDENJrYrRYMxgP62RYQeg8L7zIkk-kPHk8sQ8YhIXnLTQYHiEQiQeAAdRV8BYXIkPKxOOkfhFryQSGlxNJiHl1CRj3iV3g5NSAEYAEyoAAMuXyIDojGYWBwXEqAngzAARvThmieaIwAAHGTDVASQgwAAeJpYEGIVngOe9AYDYmNPJKXVsxEIwwAtDHvjnYN8tCb2aXqC3iIh6GBO93NCb47RYABrCyNLrUJBtnhQaY5+gq4ll+MciCPHL6fQYKw2HboryEFQtsDEABeEArAc04t7DrJfBzeZ42IkvrAEgQLIECDgOPBdDs6gkMSiAHke1AAAIzhAwyEJohQAd+v4XoYACsAYAKQpl4hgSPA6HUGAV6aPQObkUSYAyIgMwBlCvoBum+YbDyh4uvBuJBCEoTEYYoSGiwFZpBxhY8sWpZsDmUmcSapLwuoLZTOmFYvvQk7TnOC5Liua6aDm8JTixUKsRI1kBhgAAs3FeImmgMpoLboaIDY5vhBFvrKnqfrsLCaOoM5-gBQGQKBLbgZB1DQUO+48vRlHUfQsWhRY6hjlUrRdnlJrQFAxDppAImkalVHTBl0yljlUjjo1hU8fovH6EhKFoRhwWhdQ4U4TZRGDaJ4mduysAzJWhESC2f46U5pESKp2XUDmAYSN6OkmrxeEzSNEhiUgRrjVAk3TURc32QtJqGCtDUbb622tV4F0VaNx0SVIE1TVWl3zeKi2kfda02Ztz1eLxOTuokgWUcw9m4ag3q5AAujkQA" %}
