---
metaLinks:
  alternates:
    - https://app.gitbook.com/s/CyMmymf8tiNQ4Ws9WmHV/javascript/events
---

# Events

[MDN: Events - Web APIs (EventTarget / addEventListener)](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

Wanneer je het internet doorbladert, registreert je browser verschillende soorten gebeurtenissen. Het is de manier van de browser om te zeggen: "Hé, dit is net gebeurd." Je script kan vervolgens reageren op deze gebeurtenissen.

Scripts reageren vaak op deze gebeurtenissen door de inhoud van de webpagina bij te werken (via het Document Object Model), waardoor de pagina interactiever aanvoelt. In dit hoofdstuk zul je leren hoe:

* interacties roepen events aan: Gebeurtenissen treden op wanneer gebruikers op een link klikken of tikken, zweven of vegen over een element, typen op het toetsenbord, het venster vergroten of verkleinen, of wanneer de door hen gevraagde pagina is geladen.
* events roepen code aan: Wanneer een gebeurtenis plaatsvindt, kan deze worden gebruikt om een specifieke functie te activeren. Verschillende code kan worden geactiveerd wanneer gebruikers interageren met verschillende delen van de pagina.
* code reageert op gebruiker: In het vorige hoofdstuk heb je gezien hoe het DOM kan worden gebruikt om een pagina bij te werken. De gebeurtenissen kunnen de soorten veranderingen activeren waar het DOM toe in staat is. Dit is hoe een webpagina reageert op gebruikers.

## terminologie

**events fire or are raised** Wanneer een gebeurtenis heeft plaatsgevonden, wordt deze vaak omschreven als **fired** of **raised**. Als de gebruiker op een koppeling tikt, zal er in de browser een klikgebeurtenis worden ge-**fired**.

**events trigger scripts** Er wordt gezegd dat gebeurtenissen een functie of script **triggeren**. Wanneer de klikgebeurtenis plaatsvindt, kan dit een script **triggeren** dat bv. het geselecteerde item zal vergroot.

## event object

Wanneer een event voorkomt, krijgt dit event een eigen object (zie later [objecten](https://apwt.gitbook.io/webtechnologie/javascript/objecten) ) dat informatie over het event bevat. Het event-object wordt vaak met de letter 'e' benoemd.

```js
function checkUsername(e) {
    // code to check username
    let target = e.target; // get target of event
}

let elUsername = document.querySelector('#username');
elUsername.addEventListener('blur', checkUsername, false);
```
