---
metaLinks:
  alternates:
    - https://app.gitbook.com/s/CyMmymf8tiNQ4Ws9WmHV/html/verwijzingen
---

# Verwijzingen

Verwijzingen of hyperlinks maken het mogelijk om met een klik van de muis van de ene locatie naar de andere te surfen. Je kan naar een andere locatie op dezelfde pagina surfen of naar een andere webpagina. Deze pagina kan zich bevinden op de lokale server, maar ook op een server elders op de wereld. Naast pagina's kan het bovendien gaan om andere soorten bestanden, zoals afbeeldingen en geluidsfragmenten, of software die je wilt laten downloaden.

Een verwijzing maak je met het `<a>`-element. Elk element moet voorzien zijn van het `href`-attribuut, hiermee definieer je op welke locatie het bestand zich bevindt.

Met het `target`-attribuut kan je aangeven of je wil dat het andere document in een nieuw venster moet worden geopend of in hetzelfde.

```html
<p>Bezoek <a href="https://www.ap.be/" target="_blank">de website van AP hogeschool</a>!</p>
```

## absolute verwijzing

Wanneer je wil verwijzen naar een webpagina die bij een andere website hoort, ga je gebruik maken van een absolute URL (Uniform Resource Locator). Bij een absolute verwijzing start de URL met het protocol van de verbinding, meestal `https`, gevolgd door de domeinnaam van de website. Eventueel met een specifieke locatie.

## relatieve verwijzing

Wanneer we echter gaan verwijzen naar pagina's van dezelfde website, hoeven we hiervoor de domeinnaam niet mee te geven. De browser weet namelijk al op welke website we aan het surfen zijn.

```html
<p>Je kan ons <a href="contact.html">hier</a> contacteren.</p>
```

## e-mail verwijzing

Door in het `href`-attribuut `mailto:` toe te voegen aan het `<a>`-element, kunnen we het e-mailprogramma van de bezoeker laten openen en ineens een nieuwe e-mail starten.

```html
<a href="mailto:lector@ap.be">E-mailadres lector</a>
```

## telefoon verwijzing

Door in het href-attribuut `tel:` toe te voegen aan het `<a>`-element, kunnen we de bezoeker automatisch laten bellen naar een door ons gedefineerd nummer.

```html
<a href="tel:+32498765432">+32 498 76 54 32</a>
```

## verwijzingen binnen één pagina

Wil je een verwijzing plaatsen naar een stuk tekst op dezelfde pagina, dan gebruik je hiervoor een `identifier`. Je moet deze echter wel ook toevoegen aan het element waarnaar je gaat verwijzen.

```html
<h1 id="top">Film-Making Terms</h1>
<nav>
    <ul>
        <li>
            <a href="#arc_shot">Arc Shot</a>            
        </li>
        <li>
            <a href="#interlude">Interlude</a>            
        </li>
        <li>
            <a href="#prologue">Prologue</a>   
        </li>
    </ul>
</nav>
<h2 id="arc_shot">Arc Shot</h2>
<p>A shot in which the subject is photographed by an
encircling or moving camera</p>
<h2 id="interlude">Interlude</h2>
<p>A brief, intervening film scene or sequence, not
   specifically tied to the plot, that appears
within a film</p>
<h2 id="prologue">Prologue</h2>
<p>A speech, preface, introduction, or brief scene
   preceding the the main action or plot of a film;
contrast to epilogue</p>
<p><a href="#top">Back to Top</a></p>
```
