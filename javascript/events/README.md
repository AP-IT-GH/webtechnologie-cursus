---
metaLinks:
  alternates:
    - https://app.gitbook.com/s/CyMmymf8tiNQ4Ws9WmHV/javascript/events
---

# Events

Terwijl je door een website navigeert, houdt je browser voortdurend bij wat er gebeurt: een muisklik, een toetsaanslag, een venster dat van grootte verandert. Zulke gebeurtenissen noemen we **events**. Ze zijn de manier waarop de browser aangeeft: _"Er is net iets gebeurd."_

Als developer kan je op die events reageren met JavaScript. Dat is de kern van interactieve webpagina's: een gebruiker doet iets, een event wordt geactiveerd, en jouw code bepaalt wat er vervolgens gebeurt.

## Hoe het werkt

Events werken volgens een eenvoudig principe:

* **Interacties veroorzaken events.** Klikken, typen, scrollen, het laden van een pagina — elk van die acties genereert een event in de browser.
* **Events activeren code.** Je koppelt een functie aan een event. Zodra het event plaatsvindt, wordt die functie uitgevoerd.
* **Code past de pagina aan.** Via het DOM kan je vervolgens de inhoud of stijl van de pagina aanpassen — zo reageert een pagina op de gebruiker.

## Terminologie

In de documentatie en in gesprekken met andere developers zal je twee werkwoorden vaak tegenkomen:

* Een event wordt **fired** of **raised** — dat betekent simpelweg dat het event heeft plaatsgevonden. Als een gebruiker op een knop klikt, wordt er een klikgebeurtenis _gefired_.
* Een event **triggert** een functie — dat wil zeggen dat het event de uitvoering van code in gang zet.

Deze termen zijn inwisselbaar en je zal ze allebei tegenkomen.
