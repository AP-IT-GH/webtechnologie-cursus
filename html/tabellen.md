# 4: tabellen

In HTML kan informatie getoond worden in tabellen. Tabellen maken het mogelijk om complexe data visueel overzichtelijk weer te geven. Je kan een tabel in HTML maken met het `<table>`-element. In deze tabel kan je dan rijen aanmaken met het `<tr>`-element (**t**able **r**ow) en kolommen in deze rijen met het `<td>`-element (**t**able **d**ata). De `<td>`-elementen definiëren dus de cellen van de tabel.

Op deze manier kunnen we al een simpele tabel opstellen:

```html
<table>
    <tr>
        <td>linksboven</td>
        <td>rechtsboven</td>
    </tr>
    <tr>
        <td>linksonder</td>
        <td>rechtsonder</td>
    </tr>
</table>
```

{% hint style="info" %}
De `<td>`-element staat altijd binnenin de `<tr>`-element en niet andersom. De tabel wordt dus rij per rij opgebouwd.
{% endhint %}

## titels

We kunnen aan onze tabel nu ook titels toevoegen door gebruik te maken van het `<th>`-element (**t**able **h**ead) i.p.v. het `<td>`-element.

Een tabel met titels:

```html
<table>
    <tr>
        <th></th>
        <th>Zaterdag</th>
        <th>Zondag</th>
        <th>Totaal</th>
    </tr>
    <tr>
        <th>Verkochte tickets:</th>
        <td>110</td>
        <td>140</td>
        <td>250</td>
    </tr>
    <tr>
        <th>Inkomsten:</th>
        <td>660</td>
        <td>850</td>
        <td>1450</td>
    </tr>
</table>
```

## buitenformaat cellen

Het is mogelijk om cellen meerdere rijen of kolommen te laten innemen met de `colspan`- en `rowspan`-attributen. Dit wordt op volgende manier toegepast:

### colspan

```html
<table>
    <tr>
        <th></th>
        <th>9u</th>
        <th>10u</th>
        <th>11u</th>
        <th>12u</th>
    </tr>
    <tr>
        <th>Maandag</th>
        <td colspan="2">Netwerken</td>
        <td>Linux</td>
        <td>Webtech</td>
    </tr>
    <tr>
        <th>Dinsdag</th>
        <td colspan="3">Webtech labo</td>
        <td>IT-esentials</td>
    </tr>
</table>
```

{% embed url="https://flems.io/#0=N4IgzgpgNhDGAuEAmIBcIB0ALeBbKIANCAGYCWMYaA2qAHYCGuEamO+RIsA9nYn6wA8AQgAiAeQDCAFQCaABQCiAAnZQAfAB06gtVp1YIDJPsFh4ATxj74DAEYxCy+Fifwky4NuXK73AE5IEP6oygCMAA4AHspg3FBkHg4MsADWANzevgFB-gC0PFBQDBGQoYXFpRCZdAC+2i5uHl50PhHGSGR0AOahAKzRNT6IUfB5DAnddKEwJPDpPj7a9ToA9OZWEKarhsamfkgW+tq6AEzqktBQzlgM8LHtdGDOAO7cyoUArrhPgjvnJwi6mk71wDFSEGUDA+VweDFauACkJc8OUvEhXx+Tk+kBuGPiYEeUPg8H8ZDsn0QGD+QO0J1sDkhGxgAF5NCAXokXKgwgAGXkAUnZ+h8glJIsWYqw6gAckwIH8XBLRS4PgTHmyQKdhdJoBAIlh0YrpVlFf4JWLzVkVSYAEIUa4AcTuEDAipM1uUYpMfV9AHY-QAOPoAFndyq97nUvr6AeDfXDptW4pOyfs1jpawOR1Tem0nEgMAQZF4VHQAGZy6heSBaoR6PLWBgAFZUYg8PgQAToWv1kCMZhN2BgNtcXj8eCsWsAXVqQA" %}

### rowspan

```html
<table>
    <tr>
        <th>Lokaal:</th>
        <th>-01.006</th>
        <th>-01.007</th>
        <th>-01.008</th>
    </tr>
    <tr>
        <th>18-19h</th>
        <td rowspan="3">Linux</td>
        <td rowspan="2">Webtech</td>
        <td>IT-essentials</td>
    </tr>
    <tr>
        <th>19-20h</th>
        <td rowspan="2">Elektronica</td>
    </tr>
    <tr>
        <th>20-21h</th>
        <td>communicatie</td>
    </tr>
</table>
```

{% embed url="https://flems.io/#0=N4IgzgpgNhDGAuEAmIBcIB0ALeBbKIANCAGYCWMYaA2qAHYCGuEamO+RIsA9nYn6wA8AQgAiAeQDCAFQCaABQCiAAnZQAfAB06gtVp1YIDJPsFh4ATxj74DAEYxCy+Fifwky4NuXK73AE5IEP6oygCMAA4AHspg3FBkHg4MsADWANzevgFB-gC0PFBQDBGQoYXFpRCZdAC+2i5uHl50PhHGSGR0AOahAKzRNT6IUfB5DAnddKEwJPDpPj7a9ToA9OZWEKarhsamfkgW+tq6AEzqktBQzlgM8LHtdGDOAO7cyv7cL2CCO+cnEXU0neuAYqQgygYylgVweDFauACEJc8OUvAhnxeTgArpAbhivmBHpD4PB-GQ7NjEBhfoDtCdbA4IRsYABeTQgF6JFyoMIABj5AFIOfofIIyaLFuKsOoAHJMCCoX4uSVi9zqABCFGuAHE7hAfqt1Vllf5JeKzVk1VgPoTHuyQKcRdJoBAIlh0UqjTKrcpxSY+oGAOxBgAcfQALMqTCajZbWn6Jb7-epA30Q+G+tHzXHtozrPS1gcjicdngNNpOJAYAgyLwqOgAMx9VB8kC1Qj0BWsDAAKyoxB4fAgAnQ7c7IEYzB7sDAA64vH48FY7YAurUgA" %}

## tabel onderdelen

Een goede tabel bestaat uit een head, body en foot. Deze worden gedefinieerd door de `thead`- , `tbody`- en `tfoot`-elementen. In de head zet je alle titels van de kolommen, in body de data, en in foot de opsomming van de data in de cellen.

{% hint style="info" %}
De onderdelen `thead` , `tbody` en `tfoot` zijn eigenlijk altijd aanwezig bij het maken van een `<table>`. Als jij ze er niet zet, zal de browser dit voor jou invullen.
{% endhint %}

```html
<table>
    <thead>
        <tr>
            <th>Datum</th>
            <th>Inkomsten</th>
            <th>Uitgaven</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>1 mei</th>
            <td>300</td>
            <td>200</td>
        </tr>
        <tr>
            <th>2 mei</th>
            <td>350</td>
            <td>150</td>
        </tr>
        <tr>
            <th>3 mei</th>
            <td>400</td>
            <td>350</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <th>Totaal</th>
            <td>1050</td>
            <td>700</td>
        </tr>
    </tfoot>
</table>
```

{% embed url="https://flems.io/#0=N4IgzgpgNhDGAuEAmIBcIB0ALeBbKIANCAGYCWMYaA2qAHYCGuEamO+RIsA9nYn6wA8AQgAiAeQDCAFQCaABQCiAAnZQAfAB06gtVp1YIDJPsFh4ATxj74DAEYxCy+Fifwky4NuXK73AE5IEP6oygCMAA4AHspg3FBkHg4MsADWANzaAL7aggD05lYQpnmGxqZ+SBb6uVhh6tKGzmVIbpUWTgx0HvAk3NzwytAQzHxg+XU1OrYOxd7Kgi5GJvM+i-76PlsLLuoAsrwu+burW4tY6gDKDABuZHQA5uN5J3Tbxxvzxy2bO+2-a3gnze2x2JgAUl0AK4MfwWY4rEHvdzqAAkYQADBiEQCFi9gciCaDFiYAGIQOz+GFwnGnQEmVEADmxL0R73xv2O-y+vX68Fx61x9KuUNwtKRZxR6OZ4vZQM5Lz6AxKM2s2lyeW5OlKeA02k4kBgCDIvCo6AALBjUBiQFlCPQmCx0BgAFZUYg8PgQAToW32kCMZisDCwMDuriHb3wVi2gC6WSAA" %}

## tabel titel

Je kan ook nog een titel toevoegen aan je tabel met het `caption`-element. Dan wordt onze eerdere tabel vervolledigd als:

```html
<table>
    <caption>Inkomsten tabel</caption>
    <thead>
        <tr>
            <th>Datum</th>
            <th>Inkomsten</th>
            <th>Uitgaven</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>1 mei</th>
            <td>300</td>
            <td>200</td>
        </tr>
        <tr>
            <th>2 mei</th>
            <td>350</td>
            <td>150</td>
        </tr>
        <tr>
            <th>3 mei</th>
            <td>400</td>
            <td>350</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <th>Totaal</th>
            <td>1050</td>
            <td>700</td>
        </tr>
    </tfoot>
</table>
```

{% embed url="https://flems.io/#0=N4IgzgpgNhDGAuEAmIBcIB0ALeBbKIANCAGYCWMYaA2qAHYCGuEamO+RIsA9nYn6wA8AQgAiAeQDCAFQCaABQCiAAnZQAfAB06gtVp1YIDJPsFh4ATxj74DAEYxCy+Fifwky4NuXK73AE5IEP6oygCMAA4AHspg3FBkHg4MsADWANzaAL7aggD05lYQpnmGxqZ+SBb6uVhh6tKGyrAMEfBkvMrQEMx8+XU1OrYOxd7Kgi1tHXTqALK8LlAWsQwAbmR0AOZg+ZPtvPo+gvD+hz7jLnMLWPmXY0eXAMprG9u3WGe3p2PH33TnFxMACkGHQAK4MfwWW4me6A9QAEjCAAZkTDPnkTp8sXDjiYAGIQOz+CFQ9G49yIgCsaMxsP+40xf1u9ms2lyeUq1Q5em0nEgMAQ0yo6AAzGFUMiQFlCPQmCx0BgAFZUYg8PgQAToaWykCMZisDCwMCqrgLTXwVjSgC6WSAA" %}

{% hint style="info" %}
Het `<caption>`-element moet altijd als eerste element binnen de `<table>` staan.
{% endhint %}

## tabellen opmaken in html

Alvorens het bestaan van CSS werden websites opgemaakt met behulp van tabellen. Er waren dus enkele attributen voorzien voor het opmaken van tabellen in de HTML-standaarden voor HTML5. Sinds HTML5 zijn deze attributen echter verwijderd. Toch worden ze nog gebruikt in toepassingen zoals e-mail campagnes omdat de meeste e-mail clients geen CSS ondersteunen.
