---
metaLinks:
  alternates:
    - https://app.gitbook.com/s/CyMmymf8tiNQ4Ws9WmHV/html/semantiek
---

# Semantiek

De betekenis van een zin in een taal is de semantiek van de zin. De betekenis van de zin kan pas blijken als we alle woorden van de zin hebben gelezen of gehoord, en de structuur van de zin tot ons is doorgedrongen. Een syntactisch correcte zin als: 'Geef de naam van de achtste dag van de week.' heeft geen betekenis en is dus semantisch gezien fout want een week heeft slechts zeven dagen.

Semantische HTML legt enkel de nadruk op de overeenkomst tussen de naam van het element en de inhoud ervan. De naam van een semantisch element drukt duidelijk zijn betekenis uit, zowel voor de ontwikkelaar als voor de browser.

## HTML5-layout elementen

HTML5 is voorzien van enkele elementen die kunnen gebruikt worden voor de opmaak van het document. Deze gedragen zich zoals een block-element, maar hebben een afgesproken betekenis binnen de webpagina.

```html
<!DOCTYPE html>
<html lang="nl-BE">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>HTML5-layout</title>
    </head>
    <body>
        <header>
            <nav></nav>
        </header>
        <main>
            <section>
                <article>
                    <h1>titel artikel 1</h1>
                    <p>tekst artikel 1</p>
                </article>
                <article>
                    <h1>titel artikel 2</h1>
                    <p>tekst artikel 2</p>
                </article>
            </section>
        </main>
        <aside></aside>
        <footer></footer>
    </body>
</html>
```

meer info: [Semantic Elements op MDN](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)
