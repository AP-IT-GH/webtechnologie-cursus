# HTML aanpassen

Er bestaan verschillende manieren om HTML aan te passen vanuit JavaScript. Elk van deze manieren heeft voor- en nadelen. Het is dan ook belangrijk het verschil te kennen om goed te kunnen beslissen welke manier je wanneer gebruikt.

## document.write();

Met document.write(); kunnen we heel eenvoudig nieuwe inhoud aan de pagina (DOM) toevoegen.

{% hint style="warning" %}
Dit is echter een manier van werken die we zelden zullen adviseren. Je kan hiermee nl. jouw volledige pagina overschrijven!
{% endhint %}

## element.innerHTML = "";

Met de innerHTML-eigenschap kan je de volledige inhoud (incl. markup) van een node verkrijgen en aanpassen als een string. Dit kan echter voor onveilige situaties zorgen.

{% hint style="warning" %}
**XSS** Cross-site scripting attacks zijn manieren om bepaalde data toe te voegen aan een website die daar niet thuis hoort. (video: https://youtu.be/zv0kZKC6GAM )
{% endhint %}

{% embed url="https://flems.io/#0=N4IgzgpgNhDGAuEAmIBcIB0ALeBbKIANCAGYCWMYaA2qAHYCGuEamO+RIsA9nYn6wA8AQgAiAeQDCAFQCaABQCiAAnZQAfAB06gtVp0AjbkgCe+7boBM6gLInlAMTIAnMPGUB1CAeXyGAcwhBAHosawsAB1t7J1d3P2cAxIisDBCo7UjlMiQAXk0QJAhcbgL1dPMdMFhnMgj4fSRuWABXZj4MQPhFGHb4ACETAEkkAAoCopKCgEoMMjo6CGcACWkbABllXOUAVmUAamUANgBuC2Dq2vrKkKNTfRC9ZW1OSBgEMl4qdABGHdQAAwgAC+hHoTBY6AwACsqMQeHwIAJ0CCwSBGMxWBhYGA4VxePx4KwQQBdYFAA %}

## `element.insertAdjacentHTML(location, HTMLstring)`

Als alternatief voor innerHTML is er de `insertAdjacentHTML` functie. Daarmee geef je aan *waar* je een element wilt invoegen, en kan je vervolgens in een string meegeven welke HTML code je daar wilt plaatsen.

Je kan HTML invoegen rond een element op 4 plaatsen:
- `beforeBegin`: vlak *voor* de openingstag (dus als sibling voor het element)
- `afterBegin`: vlak *na* de openingstag (dus als eerste child)
- `beforeEnd`: vlak *voor* de sluitingstag (dus als laatste child)
- `afterEnd`: vlak *na* de sluitingstag (dus als sibling na het element)

```html
<!-- beforeBegin -->
<div id="result">
    <!-- afterBegin -->
    We gaan rond dit element HTML invoegen!
    <!-- beforeEnd -->
</div>
<!-- afterEnd -->

```

## element.textContent = ""

Met `textContent` kunnen we tekstuele inhoud van een HTML-element lezen en aanpassen. Dit zorgt op zich niet voor veiligheidsproblemen, maar kan wel voor rommelige code zorgen. Omdat het geen andere problemen met zich meebrengt, gaan we deze toch regelmatig gebruiken in onze oefeningen!

```js
let element = document.querySelector('#result');
element.textContent = "Nieuwe tekst";
```

## `element.insertAdjacentText(location, textString)`

Net als insertAdjacentHTML een alternatief is voor innerHTML, is inserAdjacentHTML een alternatief voor textContent en innerText. De functie werkt op dezelfde manier, maar zal alle tekst in de `textString` letterlijk als tekst tonen (zelfs html-elementen).

## eigenschappen

We kunnen ook alle eigenschappen van een HTML-element wijzigen. Denk hierbij bijvoorbeeld aan de `src` van een afbeelding.

```javascript
document.querySelector("#myImage").src = "landscape.jpg";
```

{% embed url="https://flems.io/#0=N4IgzgpgNhDGAuEAmIBcIB0ALeBbKIANCAGYCWMYaA2qAHYCGuEamO+RIsA9nYn6wA8AQgAiAeQDCAFQCaABQCiAAnZQAfAB06gtVp0AjbkgCe+7boBM6gFIMAbgwDKsAE5kADvGUAJaQFkAGWUJf0EAeixrCzJcAHNlMiQAXk0QWIY4iDTlMFdYVJAceA8wVHDw1wYAdww4sngsAFcDJsh83n54DB5ccIBBeQBaAElpIYBxH3CGMEh4MCGkCFxuReqIA0RYLEqIEjBIiAYkQ9wGMjpw2LiAfXhXCAgMDzo4nOqkxsKARgA2AAMOSwEDIcRwv0sQJA5h0YDcnng+iQ3FgTWYfDqEHgihgGPgACETCMkAAKNIZLJpACUGDysGUyWUaWKpXKlRqdQazVa7R4fAgmN6A2GY0m01m80Wy1W602212jwORxOZwuVw8l2OHg8MAwACsPO8QABuCzheHuLywwQedTSEHKbjueqMKCJc5ZZTVWYeu4PJ4vN6EZStbyNCC5BFeZQ7BhvZCJcPcZSauja3XPQ1xCJ27TmoymfQRPTaTiQGAIMi8KjoH4AVlQAJAAF9CPQmCx0AaqMR+V1WK32yBGMxWD05px+4L4IOWwBdFtAA" %}

## Een HTML element toevoegen

Soms wil je niet enkel bestaande HTML aanpassen, maar volledig nieuwe elementen maken en toevoegen aan de pagina. Hiervoor maak je eerst een nieuw element aan, voeg je er inhoud aan toe en plaats je het element op de juiste plaats in de DOM.

### Een nieuw element maken
Met `document.createElement()` maak je een nieuw (leeg!) HTML-element.

```js
let newElement = document.createElement("p");
```

Hiermee krijg je een nieuwe `<p>`-tag, maar die staat nog nergens in de DOM.

### Inhoud toevoegen aan het nieuwe element

Je kan de inhoud op verschillende manieren toevoegen:

**Tekst toevoegen met textContent en insertAdjacentText**

Gebruik deze methode om platte tekst toe te voegen aan een element.

```js
newElement.textContent = "Dit is een nieuwe paragraaf.";
// OF
newElement.insertAdjacentText("beforeEnd", `Dit is een nieuwe paragraaf.`);
```

**HTML toevoegen met innerHTML en insertAdjacentHTML**

Gebruik deze methode om HTML-inhoud toe te voegen aan een element.

```js
newElement.innerHTML = "<strong>Dit is een nieuwe paragraaf.</strong>";
// OF
newElement.insertAdjacentHTML("beforeEnd", `<strong>Dit is een nieuwe paragraaf.</strong>`);
```

### Het nieuwe element toevoegen aan de DOM

Nu het element klaar is, moeten we het nog toevoegen aan de pagina.

We selecteren eerst het element waar we het onder willen plaatsen en we voegen het toe als laatste child:

```js
let container = document.querySelector("#result");
container.appendChild(newElement);
```

Je kunt ook een element toevoegen vòòr een bestaand element met `insertBefore()`:

```js
let list = document.querySelector("ul");
let newItem = document.createElement("li");
newItem.textContent = "Nieuw bovenaan!";

list.insertBefore(newItem, list.firstChild);
```

Als alternatief kan je vanaf het begin werken met insertAdjacentHTML:

```js
let container = document.querySelector("#result");

container.insertAdjacentHTML("beforeEnd", "<ul></ul>");

container.lastChild.insertAdjacentHTML("beforeEnd", "<li>item 1</li>");
container.lastChild.insertAdjacentHTML("beforeEnd", "<li>item 2</li>");
container.lastChild.insertAdjacentHTML("beforeEnd", "<li>item 3</li>");
```