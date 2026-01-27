# formulieren

Korte, praktische gids voor het bouwen van HTML-formulieren: structuur, veelgebruikte invoerelementen, groeperen, validatie en toegankelijkheid.

## Inleiding
Formulieren zijn de manier waarop gebruikers data invoeren in een website (bijv. zoekvelden, registratie, uploads). Deze gids behandelt de belangrijkste HTML-elementen en best practices voor veilige en toegankelijke formulieren.

## Structuur van een formulier
Een formulier wordt gemaakt met het `<form>`-element (MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form). De twee belangrijkste attributen zijn:

- `action` — URL waar de formuliergegevens naartoe worden gestuurd.
- `method` — HTTP-methode: meestal `GET` (gegevens in URL) of `POST` (gegevens in body).

Standaard is `method="GET"` en `action` is de huidige pagina als je het niet instelt.

Let op: het daadwerkelijk verwerken van formulierdata op de server valt buiten deze cursus.

```html
<form action="https://www.example.com/submit" method="POST">
  <!-- invoervelden hier -->
</form>
```

## [Labels](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)
Labels koppelen tekst aan invoervelden en zijn essentieel voor toegankelijkheid en gebruiksgemak:

- Expliciet (met `for` en `id`):

```html
<label for="email">E-mailadres</label>
<input id="email" name="email" type="email">
```

- Impliciet (wrappen):

```html
<label>Voornaam <input name="firstname" type="text"></label>
```

Best practices:
- Gebruik altijd een (zichtbaar of toegankelijk verborgen) label; `placeholder` is geen vervanging.
- Zorg dat `id`-waarden uniek zijn.
- Voor het structureren en beschrijven van een groep gerelateerde velden (zoals radio's of checkboxen) zie de sectie "Groeperen van velden" verderop.

### Visueel verborgen labels (toegankelijk verbergen)

Soms wil je het label niet zichtbaar tonen maar het wel beschikbaar houden voor schermlezers. Gebruik dan een toegankelijke visueel-verbergende CSS-klasse zoals `.visually-hidden` (onderaan deze pagina staat een voorbeeld-implementatie).

```html
<label for="search" class="visually-hidden">Zoek op site</label>
<input id="search" name="search" type="search" placeholder="Zoek...">
```

Dit maakt het label onzichtbaar op het scherm maar nog wel leesbaar voor schermlezers en toetsenbordgebruikers.

Belangrijk: verberg labels niet met `display: none` of `visibility: hidden` als je wil dat schermlezers de tekst nog voorlezen — die regels verwijderen het element ook uit de toegankelijkheidsboom.

Voorbeeld van een toegankelijke utility-class (`.visually-hidden`):

```css
.visually-hidden {
  position: absolute !important;
  width: 1px; height: 1px;
  margin: -1px; padding: 0; border: 0;
  clip: rect(0 0 0 0); overflow: hidden;
}
```

Gebruik bovenstaande class wanneer je het label visueel wilt verbergen maar wél toegankelijk wilt houden.

Als je een element volledig en permanent wilt verbergen (ook voor schermlezers), kun je een utility gebruiken met `display: none`. Dit verwijdert het element uit de layout én uit de toegankelijkheidsboom:

```css
.hidden { display: none !important; }
```

Gebruik `.hidden` alleen wanneer je wilt dat het element voor iedereen verborgen is (bijv. dynamische content die pas later zichtbaar wordt en niet relevant is voor schermlezers op dat moment). Voor labels en content die nog toegankelijk moeten zijn, gebruik de `.visually-hidden` variant.

Plaats deze CSS in je algemene stylesheet en gebruik de juiste utility afhankelijk van of je het element alleen visueel, of volledig wilt verbergen.

## Veelgebruikte invoerelementen
Hier korte voorbeelden en belangrijke opmerkingen per type. Voor algemene referentie, zie de MDN-artikelen onder elke kop.

### [input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
`<input>` is het algemene element voor vele type-waarden. Enkele veelgebruikte types:

#### Tekst
```html
<input type="text" name="username" id="username" maxlength="30">
```

#### Wachtwoord
```html
<input type="password" name="password" id="password">
```

#### E-mail
```html
<input type="email" name="email" id="email">
```

#### URL
```html
<input type="url" name="website" id="website">
```

#### Datum
```html
<input type="date" name="geboortedatum" id="date-of-birth">
```

#### Bestand upload (belangrijk: POST + enctype)
```html
<form action="/upload" method="POST" enctype="multipart/form-data">
  <label for="file">Kies bestand</label>
  <input type="file" id="file" name="file">
</form>
```
Gebruik `multiple` op `<input type="file">` om meerdere bestanden te selecteren.

### [textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
Textareas zijn voor meerregelige tekstinvoer:
```html
<textarea name="comments" id="comments" cols="30" rows="6"></textarea>
```

### [select](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)
Keuzelijst (dropdown):
```html
<select name="devices">
  <option value="ipod">iPod</option>
  <option value="radio">Radio</option>
</select>
```

### [radiobuttons](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio)
Gebruik radios wanneer de gebruiker één optie uit een groep moet kiezen:
```html
<fieldset>
  <legend>Geslacht</legend>
  <label><input type="radio" name="gender" value="m"> Man</label>
  <label><input type="radio" name="gender" value="f"> Vrouw</label>
</fieldset>
```

### [checkbox](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)
Checkboxes laten meerdere selecties toe:
```html
<label for="news">Nieuwsbrief</label>
<input type="checkbox" id="news" name="newsletter">
```

### [buttons](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
Knoppen hebben verschillende rollen (submit, reset, button):
```html
<button type="submit">Verstuur</button>
<button type="reset">Reset</button>
<button type="button">Gewone knop</button>
```

## [Groeperen van velden](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset)
Gebruik `<fieldset>` en `<legend>` om gerelateerde velden samen te brengen. Dit helpt gebruikers en schermlezers de context te begrijpen.

```html
<fieldset>
  <legend>Contactgegevens</legend>
  <label for="phone">Telefoon</label>
  <input id="phone" name="phone" type="tel">
</fieldset>
```

## Toegankelijkheid en best practices
- Altijd labels gebruiken (zichtbaar of met een toegankelijke utility-class; zie "Visueel verborgen labels" bij Labels).
- Plaats foutmeldingen en instructies visueel nabij het veld en koppel ze met `aria-describedby` wanneer nodig.
- Zorg voor voldoende contrast en duidelijke focus-styles voor toetsenbordgebruik.
- Gebruik `inputmode`, `autocomplete` en `type` waar mogelijk om mobiele invoer te verbeteren.

## Valideren
HTML biedt basisvalidatie via attributen:
- `required` — verplicht veld
- `min` / `max` — voor numerieke en datumwaarden
- `minlength` / `maxlength` — voor tekstlengte
- `pattern` — regex voor specifieke validatie

```html
<input type="text" name="username" required minlength="3" maxlength="30">
```

Belangrijk: vertrouw niet alleen op client-side validatie — controleer altijd ook server-side.

## Kort voorbeeldformulier
```html
<form action="/submit" method="POST">
  <label for="name">Naam</label>
  <input id="name" name="name" type="text" required>

  <label for="email">E-mail</label>
  <input id="email" name="email" type="email" required>

  <label for="bio">Korte bio</label>
  <textarea id="bio" name="bio" rows="4"></textarea>

  <button type="submit">Verstuur</button>
</form>
```

## Meer lezen
- MDN HTML forms: https://developer.mozilla.org/en-US/docs/Learn/Forms

---

{% hint style="info" %}
Het effectief verzenden/afhandelen van formulierdata (server-side) valt buiten deze cursus.
{% endhint %}
