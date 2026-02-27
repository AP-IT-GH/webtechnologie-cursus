# speciale tekens

Bepaalde symbolen kunnen in HTML niet gewoon geplaatst worden als tekst, maar moeten via een specifieke HTML-entiteit worden ingevoegd.

```markup
€ = &euro;
& = &amp;
© = &copy;
```

Meer voorbeelden: [zie MDN artikel](https://developer.mozilla.org/en-US/docs/Glossary/Character_reference)

## non-breaking space

Spaties kunnen zinnen in 2 regels verdelen als de ruimte niet breed genoeg is. Wanneer we 2 woorden aan elkaar willen koppelen, kan dit met een _non breaking space_.

```html
&euro;&nbsp;12,00
```
