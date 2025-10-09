# 3: formulieren

## formulieren

Formulieren zijn een zeer belangrijk onderdeel van elke moderne website. Het is de manier waarop je data kan invoeren in de website die dan verwerkt kan worden. Het meest gekende formulier is waarschijnlijk de zoekbalk in het midden van de Google homepage.

### structuur

We maken een formulier aan met het `<form>`-element. Binnen in dit element kunnen we dan de inputvelden gaan plaatsen. Het `<form>`-element heeft 2 belangrijke attributen namelijk `action` en `method`. Het `action`-attribuut bevat de URL waar de informatie in de form naartoe wordt gezonden, het `method`-attribuut bepaald de manier waarop deze informatie wordt verzonden (GET of POST). Als je de `action`- en `method`-attributen niet invult, staan ze standaard op GET naar het adres van de pagina.

{% hint style="info" %}
Het effectief verzenden van formulier valt buiten deze cursus.
{% endhint %}

```html
<form action="https://www.example.com" method="GET">
    <p>Hier komen de input elementen</p>
</form>
```

## invoerelementen

Er zijn verschillende soorten invoerelementen voorzien in HTML5. Alle invoerelementen maken gebruik van het `name`-attribuut. Dit attribuut geeft aan wat de naam is van de waarde die wordt ingevoerd.

### \<input>

Het `<input>`-element wordt gebruikt om verschillende soorten invoer te voorzien. Je geeft aan welk soort invoer je wenst met het `type`-attribuut.

```html
<input type="text" name="username">
```

Meer informatie over alle soorten invoervelden staat op [de volgende pagina](https://apwt.gitbook.io/webtechnologie/html/intro-2/invoervelden).

### labels

Met het `<label>`-element kunnen er labels aan invoervelden worden toegewezen. Dit kan op basis van het `id`-attribuut van het inputveld. Het id-attribuut van het te labelen invoerelement wordt in het `for`-attribuut geplaatst.

```html
<form action="https://www.example.com" method="GET">
    <label for="unTxt">Username:</label>
    <input type="text" name="username" size="15" maxlength="30" id="unTxt"><br>
    <label for="pswdTxt">Password:</label>
    <input type="password" name="password" size="15" id="pswdTxt">
</form>
```

### groeperen

Het `<fieldset>`-element maakt het mogelijk om bepaalde inputelementen te groeperen. Er kan ook een titel aan een groep elementen worden gegeven door een `<legend>`-element binnen het `<fieldset>`-element te plaatsen.

```html
<form action="https://www.example.com" method="GET">
    <fieldset>
        <legend>select your favorites</legend>
        <input type="checkbox" name="spotify">Spotify<br>
        <input type="checkbox" name="itunes">iTunes<br>            
        <input type="checkbox" name="youtube">Youtube
    </fieldset>
</form>
```

{% embed url="https://flems.io/#0=N4IgzgpgNhDGAuEAmIBcIB0ALeBbKIANCAGYCWMYaA2qAHYCGuEamO+RIsA9nYn6wA8AQgAiAeQDCAFQCaABQCiAAnZQAfAB06gtVp0AjbkgCe+7boCM66VgjLy0JJHjLoEZn0EB6LNe0WJNwATrjKDAhkvAC8miDeEfBRdAD6AA4MAOYQGGlYaXH6yoKOUM4Q8EXFMNl0SOryEMFgvAxQZAyoPjUQdVWCUAwG0A4hsaSMzIUAYmTNrpMQXd6DwxraysVkdGkArq7wJmkQ44gAHvBxymRI4ySLV4t3DyDqggbBbx-9qyNBweMoC91AAZBhgBZMJbdIbQfrbPYHI4nOLnS4ga63OJAqGPKGA4HvT5En6wqCjAFxDwMCiFRS4GlQZa-dZ0TaCBH7ZSHY7jam0jE3PkMgXKJ5UkVQQokkkbapkinjAxzeBYJAMEyFABCKrVGuZZPhOy5PJRIHViCuQriyuCqvVmox4pAtvtGul31lbK2xqRvLiYF2BlwZHRygAbm1dmaAMpBkPooo+UrlSoWbz-XDmHTeIymfQ+PTaTiQGCRXhUdAAJgAzKgAAwgAC+hHoUNYGAAVlRiDw+L14Kxm62QIsO7AwD2uLx+IP0M2ALpNoA" %}

### invoervalidatie

HTML5 biedt de mogelijkheid om de browser (beperkte) invoervalidatie te laten doen. De browser maakt hiervoor gebruik van het attributen die bij het element geplaatst worden.

### verplichte invoer

Hiervoor wordt het `required`-attribuut gebruikt. Dit attribuut kan zonder waarde worden gebruikt.

```html
<input type="text" name="username" required>
```
