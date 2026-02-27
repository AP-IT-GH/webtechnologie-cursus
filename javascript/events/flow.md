# event flow

Aangezien HTML-elementen in elkaar worden gestoken, zal je bij een event vaak ook hetzelfde event op het parent-element uitvoeren. Als je op een element klikt, klik je eigenlijk op elke parent van dat element, tot op het document zelf.

Wanneer je events oproept, kan je dus op 2 manieren kijken naar de flow van deze events:

* event bubbling: Event start bij het meest specifieke element en flows terug naar buiten naar het document.
* event capturing: Event start bij het document en gaat naar binnen tot aan het meest specifieke element.

{% hint style="info" %}
De flow van events is enkel belangrijk als er event handlers staan op boven- en/of onderliggende elementen.
{% endhint %}
