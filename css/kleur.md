---
metaLinks:
  alternates:
    - https://app.gitbook.com/s/CyMmymf8tiNQ4Ws9WmHV/css/intro-2/kleur
---

# kleur

## kleur

Kleuren kunnen voor meerdere onderdelen van een HTML-document vastgelegd worden en er zijn verschillende manieren waarop deze kleuren benoemd kunnen worden. Ze kunnen gespecificeerd worden door hun kleurennaam, of HEX, RGB, RGBA, HSL of HSLA-waarden. Een waaier aan mogelijkheden dus.

### kleurnaam

De meest eenvoudige manier om een kleur vast te leggen is door middel van een naam, wat makkelijker te onthouden is dan een combinatie van cijfers en/of letters. CSS ondersteunt [named colors](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/named-color) op basis van de naam van de kleur zelf.

```css
/* kleurnaam */
h1 {
    color: yellow;
}
```

In de laatste versie van CSS Colors (Level 4) werd een extra kleur, \`rebeccapurple\`, toegevoegd ter ere van webpionier \[Eric Meyer]\(https://meyerweb.com/eric/thoughts/2014/06/19/rebeccapurple/). \{% endhint}

### HEX-code

Deze code begint met een # en telt 6-elementen, waarbij de intensiteit van rood, groen en blauw binnen een kleur geduid wordt. Hiervoor worden telkens een paar van twee karakters uit de range 0 t/m 9 en A t/m F gebruikt.

```css
/* hex-code */
h2 {
    
color: #ee3e80;
}
```

### RGB en RGBA-waarde

Om een RGB-kleur te definiëren wordt de waarde van elk van de basiskleuren rood, groen en blauw in een getal tussen 0 en 255 uitgedrukt.

```css
/* rgb-waarde */
p {
    color: rgb(102,205,170);
}
```

Bij een RGBA-waarde wordt er tevens rekening gehouden met de transparantie of opacity van een kleur. Aangezien de rgba-notatie geïntroduceerd werd binnen CSS3, wordt deze dus niet ondersteund door oudere browsers en zal enkel de kleur weergegeven worden.

```css
/* rgba-waarde met een transparantie (opacity) van 50%, dus 0.5 */
p {
    color: rgba(102,205,170,0.5);} 
```

## tekstkleur

De `color` eigenschap bepaalt de tekstkleur van een element.

```css
body {
    color: darkgrey;
}
```

## achtergrondkleur

De `background-color` eigenschap bepaalt de achtergrondkleur van een element.

```css
body {
    background-color: lightgrey;
}
```

### achtergrondafbeelding

Naast achtergrondkleuren, is het ook mogelijk om met achtergrondafbeeldingen te werken. Met de `background-image` eigenschap kunnen we achter elk HTML-element een afbeelding plaatsen. Dit kan over de ganse website of slechts een deel van de pagina. Het pad naar de afbeelding wordt meegegeven via een URL.

```css
body { 
    background-image: url("../images/pattern.gif");
}
```

extra info: artikel [A Deep Dive Into object-fit And background-size In CSS](https://www.smashingmagazine.com/2021/10/object-fit-background-size-css/)

#### herhaling

Standaard staat de afbeelding ingesteld om zichzelf te herhalen tot de volledige kader gevuld is. Uiteraard is dit niet altijd de gewenste uitkomst.

```css
body {
    background-image: url("../images/tulp.gif");
    background-repeat: no-repeat;
}
```

Andere opties zijn:

* `repeat`: afbeelding wordt verticaal en horizontaal herhaald;
* `repeat-x`: afbeelding wordt horizontaal herhaald;
* `repeat-y`: afbeelding wordt verticaal herhaald;
* `no-repeat`: afbeelding wordt niet herhaald.

#### positionering

Wanneer we een afbeelding niet herhalen, kunnen we met de `background-position` eigenschap bepalen waar in de kader de afbeelding geplaatst moet worden. Je kan zowel de horizontale als de verticale positie bepalen.

```css
body {
    background-image: url("../images/tulp.gif");
    background-repeat: no-repeat;
    background-position: center top;
}
```

#### korte schrijfwijze

Zoals wel vaker het geval is in CSS, kunnen we ook bij de achtergrondafbeeldingen de eigenschappen in een kortere weergave meegeven.

```css
body {
    background: #ffffff url("../images/tulp.gif") no-repeat top right;
}
```
