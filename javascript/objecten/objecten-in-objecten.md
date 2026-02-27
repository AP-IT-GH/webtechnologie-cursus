# objecten in objecten

Het is ook mogelijk om objecten in andere objecten te gaan steken. Bijvoorbeeld voor ons user-object zouden we kunnen kiezen om ook een adres toe te voegen. We zouden deze als aparte eigenschappen kunnen opgeven van het user object maar het is beter om dit in een apart object te steken.

```js
let user = {
  name: "Andie",
  age: 30,
  address: {
    street: "Fakestreet",
    number: 133,
    city: "Fakegem"
  }
}
```

Wil je dan bijvoorbeeld de straat van deze gebruiker op het scherm tonen dan kan je dit doen aan de hand van de dot-notatie:

```js
console.log(user.address.street);
```

## keys doorlopen (for ... of)

Je kan alle keys van een object doorlopen door gebruik te maken van de `for ... of`-lus. Dit ziet er als volgt uit:

```js
const myObject = { voornaam: 'Vincent', familienaam: 'Nys' }

for (let [key,value] of Object.entries(myObject)) {
  console.log(`${key}: ${value}`)
}
```
