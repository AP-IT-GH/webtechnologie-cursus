# objecten en functies

Objecten kan je ook als parameter aan een functie meegeven. Stel dat we een functie willen aanmaken die voor een user-object de naam en de leeftijd zal tonen.

```js
function showUserInfo(user) {
    console.log(`${user.name} is ${user.age}`);
}
```

We kunnen nu de functie aanroepen aan de hand van:

```js
showUserInfo(user);
```

Functies kunnen ook objecten teruggeven.

```js
function createUserWithRandomAge(name) {
    return {
        name: name,
        age: Math.floor(Math.random() * 100)
    }
}
```

Deze functie zal user objecten aanmaken met een willekeurige leeftijd en vervolgens teruggeven (return).
