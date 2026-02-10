# overerving

Als voor het `body`-element een `font-family` of `color` gespecificeerd wordt, is het gebruikelijk dat dit ook op het kind-elementen van toepassing is. De waarde van de `font-family` wordt dus **overgeërfd** door deze kind-elementen. Hierdoor moeten minder CSS herschreven worden, wat dan weer resulteert in kortere en meer eenvoudige stylesheets.

```html
<!-- HTML -->
<div class="page">
    <h1>Potatoes</h1>
    <p>There are dozens of different potato varieties.</p>
    <p>They are usually described as early, second early and maincrop potatoes.</p>
</div>
```

```css
/* CSS */
body {
    font-family: Arial, Verdana, sans-serif;
    color: #665544;
    padding: 10px;
}
.page {
    border: 1px solid #665544;
    background-color: #efefef;
    padding: inherit;
}
```

Niet alle attributen zullen worden doorgegeven aan de onderliggende elementen. Maak er een gewoonte van om zelf na te kijken welke attributen wel/niet worden doorgegeven.
