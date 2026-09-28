# GET

De GET-methode wordt gebruikt om gegevens van de server op te halen. Wanneer een browser een webpagina opvraagt, wordt een GET-verzoek naar de server gestuurd. Dit verzoek bevat vaak parameters in de URL die de server helpen begrijpen welke specifieke gegevens moeten worden opgehaald.

Voorbeeld van een GET-verzoek:

```http
GET /api/users?id=123 HTTP/1.1
Host: example.com
```

In dit voorbeeld wordt met het GET-verzoek naar de server verzonden om gebruikersgegevens op te halen waarvan het id gelijk is aan 123.

**De GET methode wordt gebruikt om informatie op te halen** - en niet om deze te wijzigen. Een GET request verandert de status van een bron niet. Bovendien moeten GET-API's **idempotent** zijn, wat betekent dat het maken van meerdere identieke verzoeken elke keer hetzelfde resultaat moet opleveren totdat een andere API (**POST** of **PUT**) de status van de bron op de server heeft gewijzigd.

bij het uitvoeren van een GET request naar een publieke API zal deze een **HTTP-responscode 200 (OK)** retourneren - samen met de data, die meestal in **JSON-formaat** geschreven is (vanwege hun platform onafhankelijke aard).

Als de bron NIET op de server wordt gevonden, zal deze een **HTTP-antwoordcode 404 (NIET GEVONDEN)** retourneren.

Evenzo, als er wordt vastgesteld dat de GET request niet correct is opgebouwd, retourneert de server een **HTTP-antwoordcode 400 (BAD REQUEST)**.

{% hint style="info" %}
**Een publieke API is een API waarvan de endpoints niet beveiligd zijn.** M.a.w. er worden geen inloggegevens gestuurd bij elke request. Bij het sturen van een GET request naar een beveiligde API zonder inloggegevens, zal de server een **HTTP-antwoordcode 401 (NIET GEAUTORISEERD)** retourneren.s
{% endhint %}
