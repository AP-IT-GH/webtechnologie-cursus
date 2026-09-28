# class en id

In HTML hebben we al gezien dat we klassen en id's kunnen toevoegen aan elementen. We kunnen deze elementen gaan selecteren vanuit CSS door gebruik te maken van specifieke selectoren.

## class

Met een class-selector nemen we alle elementen vast die een bepaalde klasse hebben toegewezen gekregen. Vaak gaan we een klasse dus gebruiken om stijlregels te bundelen en in bundel door te geven aan verschillende HTML-elementen.

Een class-selector heeft betrekking op een element met een class-attribuut, waarvan de waarde overeen komt met datgene dat beschreven staat achter . .

```css
/* voor elk element met class-atribuut waarvan waarde 'note' is */
.note {
    /* ... */
}

/* voor <p>-element met class-atribuut waarvan waarde 'note' is */
p.note {
    /* ... */
}
```

### class combineren met een andere selector

`p.note` is een **combinatie** van twee selectoren: een type-selector en een class-selector, zonder spatie aan elkaar geplakt. Het element moet dan aan beide voorwaarden voldoen: het moet een `<p>`-element zijn **en** de klasse `note` hebben.

Die spatie maakt een groot verschil:

```css
/* een <p>-element dat zelf de klasse 'note' heeft */
p.note {
    /* ... */
}

/* een element met de klasse 'note' binnen een <p>-element (descendant-selector) */
p .note {
    /* ... */
}
```

```html
<p class="note">Deze paragraaf wordt geselecteerd door p.note</p>
<p>Deze <span class="note">span</span> wordt geselecteerd door p .note</p>
```

Op dezelfde manier kan je ook twee klassen aan elkaar plakken. `.note.belangrijk` selecteert enkel de elementen die beide klassen hebben, dus `class="note belangrijk"`.

## id-selector

De id-selector heeft betrekking op een element met een id-attribuut, waarvan de waarde overeen komt met datgene dat beschreven staat achter # .

Aangezien een id uniek is per pagina gaan we ook in CSS weinig met id's werken. Enkel indien één specifiek element een bepaalde set van stijlregels moet krijgen, is een id zinvol.

```css
/* voor elk element met id-atribuut waarvan waarde 'introduction' is */
#introduction {
    /* ... */
}
```
