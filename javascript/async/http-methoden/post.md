# POST

De POST-methode wordt gebruikt om gegevens naar de server te sturen, meestal wanneer we informatie willen toevoegen aan een database of **een formulier versturen**. Anders dan bij de GET-methode worden de gegevens niet in de URL opgenomen, maar in de aanvraagbody.

## voorbeeld van een POST-verzoek

```http
POST /api/users HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com"
}
```

Dit voorbeeld stuurt een POST-verzoek naar de server om een nieuwe gebruiker toe te voegen. De gegevens van de nieuwe gebruiker worden in JSON-formaat in de aanvraagbody verzonden.
