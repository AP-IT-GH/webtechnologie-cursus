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

### id-selector

De id-selector heeft betrekking op een element met een id-attribuut, waarvan de waarde overeen komt met datgene dat beschreven staat achter # .

Aangezien een id uniek is per pagina gaan we ook in CSS weinig met id's werken. Enkel indien één specifiek element een bepaalde set van stijlregels moet krijgen, is een id zinvol.

```css
/* voor elk element met id-atribuut waarvan waarde 'introduction' is */
#introduction {
    /* ... */
}
```
