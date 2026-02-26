---
icon: rocket-launch
cover: >-
  https://images.unsplash.com/photo-1671437762079-3e9f59d736ef?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxOTcwMjR8MHwxfHNlYXJjaHw1fHxzdGFydCUyMGhlcmV8ZW58MHx8fHwxNzU4MjY4MTcyfDA&ixlib=rb-4.1.0&q=85
coverY: 133.85250737463127
metaLinks:
  alternates:
    - https://app.gitbook.com/s/CyMmymf8tiNQ4Ws9WmHV/labos/labo-howto
---

# Startgids labo’s

## Stap 1: IDE in orde brengen (éénmalig)

* Installeer **Codium** en de nodige extensies (zie hoofdstuk [IDE](../ide.md)).
* Maak op je computer een mapje voor het vak (bv. `webtechnologie`).

***

## Stap 2: Git installeren (éénmalig)

Indien je Git nog niet op je systeem hebt, ga je naar [git-scm.org](https://git-scm.com/) en download je daar Git. De installatieprocedure wordt [hier](https://mrcloudbook.com/1932-2/) omschreven, onder "Install Git on Windows via GUI". **Kies bij stap 7 Codium als text editor.** Je hoeft het niet opnieuw te installeren via CMD!

Open hierna het programma "Git Bash" dat nu op je systeem staat en voer één voor één volgende twee regels in. **Pas aan met je eigen naam en e-mail.**

```
git config --global user.name "voornaam familienaam"
git config --global user.email "voornaam.familienaam@student.ap.be"
```

Heb je een fout gemaakt? Dan mag je deze regels gewoon opnieuw invoeren.

***

## Stap 3: GitHub Classroom repository aanmaken

Voor elk labo krijg je een **GitHub Classroom-link**. Deze zijn terug te vinden in de labo-pagina's (bv. [Labo 1](labo1.md), [Labo 2](labo2.md), ...). Klik op de link van het labo dat je wil starten. Aanvaard de opdracht voor dat labo. Het kan zijn dat je eerst een Github account moet aanmaken.

![GitHub Classroom](../.gitbook/assets/gh-classroom.png)\
GitHub Classroom nadat je jouw repo hebt aangemaakt. Via de URL kom je op jouw persoonlijke repository.\_

***

## Stap 4: Je repository lokaal clonen

* Open de command palette in Codium met `Ctrl+Shift+P` (of `Cmd+Shift+P` op macOS) en typ `Git: Clone`. Kopieer en plak de URL van je repository die je kreeg van GitHub Classroom.
* Kies de map die je eerder aangemaakt hebt voor het vak Webtechnologie.
* Kies om de geclonede repository te openen in een nieuw venster

> 💡 **Tip:** In de cursus IT Essentials vind je meer uitleg bij [Git > Remote Repositories en Samenwerken](https://apwt.gitbook.io/it-essentials/git/collaborating).

***

## Stap 5: Tijdens het labo

Open je labo en volg dit stappenplan:

1. Open **Codium** en selecteer de map van het labo (de map die je gecloned hebt).
2. Start de **Live Server-extensie** via de knop _Go Live_.
3.  Open het HTML-bestand in je browser.

    > Meestal vind je dit op `http://localhost:5500` (het poortnummer kan verschillen).
4. Volg de instructies van de oefening.
5. Maak **regelmatig commits** en **push** je werk naar GitHub. Maak hiervoor gebruik van de ingebouwde Git-functionaliteit in Codium:
   * Klik op het bronbeheer-icoon in de zijbalk (of gebruik de sneltoets `Ctrl+Shift+G` of `Cmd+Shift+G` op macOS).
   * Je ziet een lijst van gewijzigde bestanden. Klik op het plus-icoon naast elk bestand om ze toe te voegen aan de staging area, of klik op het plus-icoon bovenaan om alle wijzigingen toe te voegen.
   * Voer een duidelijke commit message in het tekstvak bovenaan in, bijvoorbeeld "Oefening 3 afgewerkt".
   * Klik op het vinkje-icoon om de commit te maken.
   * Klik op de drie puntjes bovenaan en selecteer "Push" om je wijzigingen naar GitHub te uploaden.

je kunt ook gebruik maken van de terminal in Codium om dezelfde acties uit te voeren:

```bash
    git add .
    git commit -m "Beschrijving van je wijzigingen"
    git push origin main
```

***

## Verwachtingen

* Maak **regelmatig commits** (bv. na elke oefening of belangrijke wijziging).
*   Gebruik **duidelijke commit messages**.

    > Voorbeeld: `Oefening 3 afgewerkt` is beter dan `update`.
* Push je werk **op tijd**.

> **Veelgemaakte fout:** Vergeet niet `git add .` te doen **voor** je een commit maakt.

***

## Handige weetjes

* Je kan je repo altijd opnieuw **clonen** op een andere computer.
* Je vooruitgang is zichtbaar in de **commit history**.
* Bij vragen of problemen: contacteer de lector of gebruik het afgesproken communicatiekanaal.

***

## Waarom werken we met GitHub Classroom?

* Je leert al doende werken met **git**.
* Je oefeningen staan veilig online als **back-up**.
* De lectoren kunnen je werk makkelijk **nakijken** bij vragen of problemen.
* Je ziet je **evolutie** in de commit history.
