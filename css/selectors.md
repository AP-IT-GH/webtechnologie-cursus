# 2: selectors

Er bestaan in CSS verschillende manieren om HTML-elementen vast te nemen. Dit noemen we de verschillende CSS-selectoren.

## universele selector

De universele selector heeft betrekking op **alle elementen** binnen het document of pagina. Deze selector mogen we dus enkel gebruiken indien we een bepaalde set stijlregels willen toepassen op ieder en elk element in de website. Je gaat hier best spaarzaam mee om.

```css
* {
    /* ... */
}
```

## type-selector

De type-selector heeft betrekking op element-namen. We kunnen een element gaan selecteren op basis van het type HTML-element. Alle elementen van hetzelfde type krijgen dan de stijlregels die we voor deze selector definiëren.

Dit soort selectoren is de basis van het schrijven van CSS.

```css
h1, h2, h3 {
    /* ... */
}
p {
    /* ... */
}
a {
    /* ... */
}
```

## child-selector

Met de child-selector kunnen we een element selecteren dat een direct kind is van een ander element. We kunnen hiermee eenvoudig onze HTML-structuur mee gaan doorlopen.

```css
/* voor elk <a>-element als direct kind van <li>-element (niet voor andere <a>-elementen op de pagina) */
li > a {
    /* ... */
}
```

## descendant-selector

Een descendant selector heeft betrekking op een element, enkel wanneer deze een nakomeling (descendant) is van één of meerdere andere elementen (en dus niet een direct kind van dat element). Het grote verschil is dat er (in dit voorbeeld) tussen het nav-element en het a-element nog andere elementen mogen tussenstaan.

```css
/* voor elk <a>-element binnen een <p>-element */
nav a {
    /* ... */
}
```

{% hint style="info" %}
Je kan oefenen op selectoren via [CSS Diner](https://flukeout.github.io)
{% endhint %}
