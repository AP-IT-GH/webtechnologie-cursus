# async/await

Er bestaat ook een andere manier om met promises te werken. Dit is met behulp van async/await. Eigenlijk is dit gewoon 'syntax sugar' om het gebruik van promises wat overzichtelijker te maken. We hernemen de multiply functie.

```js
const multiply = (number1, number2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(number1 * number2);
        }, 1000);
    });
};
```

In plaats van de then-functie te gebruiken kunnen we ook het **await** keyword gebruiken.

```js
const result = await multiply(2, 2);
console.log(result);
```

{% hint style="info" %}
Opgelet, je kan het await keyword enkel gebruiken binnen een functie die het async keyword gebruikt. Als je dit niet doet zal je een foutmelding krijgen. Dus wil je await gebruiken, dan moet je de functie ook async die await gebruikt async maken.
{% endhint %}

```js
const main = async () => {
    const result = await multiply(2, 2);
    console.log(result);
};
main();
```

Om aan te tonen dat deze code overzichtelijker is dan de code met then-functies, gaan we de then-functies vervangen door await keywords.

```js
const main = async () => {
    let result = await multiply(2, 2);
    result = await multiply(result, 2);
    result = await multiply(result, 2);
    console.log(result); // 16
};
main();
```

Je ziet dat de code hierboven veel overzichtelijker is dan de code met then-functies. Eigenlijk is dit gewoon een andere manier om de then-functies te gebruiken.

Werk je met async-functies, dan is het ook mogelijk om try/catch blokken te gebruiken om fouten op te vangen.

```js
const main = async () => {
    try {
      let result = await multiply(2, 2);
      result = await multiply(result, 2);
      result = await multiply(result, 2);
      console.log(result); // 16
    } catch (e) {
        console.log(e);
    }
};
main();
```
