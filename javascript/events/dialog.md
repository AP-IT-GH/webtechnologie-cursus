# dialog

Soms wil je iets tonen *bovenop* de pagina: een bevestiging, een detailvenster, een waarschuwing. Zo'n venster noemen we een **modal** of een **dialoog**. HTML heeft daar een eigen element voor: `<dialog>`.

Je hebt dus geen extra `div` met een zelfgemaakte overlay nodig. De browser regelt zelf het verduisteren van de achtergrond, de focus en de Escape-toets.

## Een dialog in je HTML

Een `<dialog>` schrijf je gewoon in je HTML. Standaard is hij **niet zichtbaar**.

```html
<button id="openButton">Afrekenen</button>

<dialog id="orderDialog">
  <h2>Bestelling bevestigen</h2>
  <p>Ben je zeker dat je wil bestellen?</p>
  <button id="closeButton">Sluiten</button>
</dialog>
```

{% hint style="warning" %}
Een `dialog` zonder JavaScript blijft onzichtbaar. Je moet hem openen vanuit je code.
{% endhint %}

## Openen met showModal()

Met de methode `showModal()` open je de dialoog als **modal**: de rest van de pagina wordt verduisterd en je kan er niet meer op klikken.

```js
const openButtonEl = document.querySelector('#openButton');
const dialogEl = document.querySelector('#orderDialog');

openButtonEl.addEventListener('click', () => {
  dialogEl.showModal();
});
```

## Sluiten met close()

De methode `close()` sluit de dialoog weer.

```js
const closeButtonEl = document.querySelector('#closeButton');

closeButtonEl.addEventListener('click', () => {
  dialogEl.close();
});
```

{% hint style="info" %}
Een modale dialoog sluit ook wanneer de gebruiker op **Escape** drukt. Dat krijg je gratis van de browser, je hoeft daar zelf niets voor te schrijven.
{% endhint %}

## De inhoud vullen vanuit JavaScript

Een dialoog is een gewoon HTML-element. Alles wat je kent van de DOM werkt er ook in: je kan tekst aanpassen, elementen toevoegen of verwijderen voor je hem opent.

```js
const totalEl = document.querySelector('#dialogTotal');

openButtonEl.addEventListener('click', () => {
  totalEl.textContent = `Totaal: € ${total.toFixed(2)}`;
  dialogEl.showModal();
});
```

## De achtergrond stylen met ::backdrop

De verduisterde laag achter een modale dialoog is een eigen pseudo-element: `::backdrop`. Zo pas je die aan:

```css
dialog {
  border: none;
  border-radius: 8px;
  padding: 2rem;
}

dialog::backdrop {
  background-color: rgb(0 0 0 / 0.5);
}
```

{% hint style="info" %}
Er bestaat ook een methode `show()`. Die opent de dialoog **niet** als modal: de achtergrond blijft gewoon bruikbaar en er is geen backdrop. Voor een echte pop-up gebruik je dus `showModal()`.
{% endhint %}

Meer informatie over het dialog-element vind je op [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog).
