# Callbacks

Functies kan je oproepen in andere functies:

```js
let printOutput = (output) => {
	console.log(output)
};

let add = (a, b) => {
	printOutput(a + b);
}

add(1,2);
```

De functie `printOutput` is beschikbaar in de global scope en ook binnen de scope van de functie `add`. De functie `add` is wel volledig afhankelijk van `printOutput`. Via callbacks kunnen we die logica loskoppelen en toch nog gebruik maken van `printOutput` zonder dat `add` die rechtstreeks aanspreekt:

```js
let printOutput = (output) => {
	console.log(output)
};

let add = (a, b, handleResult) => {
	let c = a + b;
  handleResult(c);
}

add(1,2,printOutput);
```

Nu kan `add` gebruik maken van elke functie die overeenkomt met deze logica. De code is onafhankelijk! Andere ontwikkelaars kunnen makkelijk de functionaliteit van `add` aanpassen door gewoon een andere functie mee te geven. Dit soort "doorgegeven functie" (als argument of als returnwaarde) noemen we een **callback**.

{% hint style="info" %}
De functies die we registreren om DOM-events af te handelen zijn ook callbacks.
{% endhint %}

Je kan ook de functie direct in de functie-call definiëren:

```js
let add = (a, b, handleResult) => {
	let c = a+b;
  handleResult(c);
}

add(1, 2, (output) => {console.log(output)});
```

We hadden hier dus geen nood aan een aparte variabele `printOutput`. De inhoud van deze functie werd gewoon direct meegegeven aan `add`.

**functies als return waarde**

We kunnen ook functies teruggeven als return waarde van een functie:

```js
let multiplyOrDivide = (action) => {
	if (action === 'multiply'){
		return (a, b) => {return a * b;};
	}
	else if (action === 'divide'){
		return (a, b) => {return a / b;};
	}
  return (a, b) => {return -1};
}

let multiply = multiplyOrDivide('multiply');
let divide = multiplyOrDivide('divide');
let a = multiply(2, 2);
let b = divide(2, 2);
```

De functie `multiplyOrDivide` heeft als return een functie met 2 parameters en 1 return waarde. Deze functie geeft dus een functie terug.

Op lijn 3, 6 en 8 zie je voorbeelden van deze return waarde:

* lijn 3 geeft `(a,b) => {return a * b}`
* lijn 6 geeft `(a,b) => {return a / b}` terug
* lijn 8 geeft `(a,b) => {return -1}` terug

Wanneer je de functie `multiplyOrDivide` uitvoert, dan krijg je dus 1 van de bovenstaande functies terug. De variabelen `multiply` en `divide` bevatten dus functies die je kan uitvoeren.
