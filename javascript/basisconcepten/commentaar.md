---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/CyMmymf8tiNQ4Ws9WmHV/javascript/basisconcepten/commentaar
---

# commentaar

{% hint style="success" %}
[Kennisclip](https://ap.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=5ad03864-50b5-46a2-8ee6-ad9d00e00e85)
{% endhint %}

Soms is het nodig om bij je code extra commentaar bij te voegen zodat je weet wat de code doet en waarom. Commentaar is een stuk tekst dat overal in de code kan geplaatst worden. Deze tekst is bedoeld voor de lezer van de code en heeft geen invloed op de uitvoering van de code.

### oneline comments

Oneline comments starten altijd met `//` en alles wat daar achter komt wordt beschouwd als commentaar.

```js
// Deze lijn code is ook commentaar.
console.log("Hello");

console.log("World"); // Dit is commentaar.
```

### multiline comments

Multiline comments starten met een `/*` en eindigen met een `*/` en laten toen om commentaar te schrijven op verschillende lijnen.

```js
/* Dit is een voorbeeld
van commentaar die
op meerdere lijnen
kan staan */
console.log("Hello World");
```

Deze vorm van commentaar wordt vaak gebruikt om stukken code tijdelijk uit te schakelen zodat deze niet wordt uitgevoerd.

```js
/* 
console.log('Hello');
*/
console.log('World');
```

### hotkeys

In je IDE kan je eenvoudig commentaar aanzetten en afzetten voor een bepaalde lijn code. Je kan bijvoorbeeld `CTRL-/` gebruiken om je huidige selectie in commentaar te zetten. Of `SHIFT-ALT-A` voor multi line comments.
