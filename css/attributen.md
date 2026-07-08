---
metaLinks:
  alternates:
    - https://app.gitbook.com/s/CyMmymf8tiNQ4Ws9WmHV/css/selectors/attributen
---

# attributen

Het is mogelijk om HTML-elementen op te maken die specifieke attributen of attribute-waarden hebben. De `[attribute]`-selector wordt gebruikt om elementen met een gespecificeerd attribuut te selecteren (text, radio, email, date,...).

```css
input[type="text"] {
    background-color: yellow;
    /* ... */
}
input[type="radio"] {
    display: block;
    /* ... */
}
input[type="button"] {
    width: 20%;
    margin-left: 5%;
    /* ... */
}
input[type="email"] {
    width: 40em;
    /* ... */
}
```

meer info: [Attribute selectors op MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/Attribute_selectors)
