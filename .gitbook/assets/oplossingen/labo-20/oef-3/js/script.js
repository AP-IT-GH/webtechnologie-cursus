'use strict'

// De multiply-functie blijft dezelfde
const multiply = (number1, number2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(number1 * number2)
        }, 1000) // Kortere wachttijd om het testen sneller te maken
    })
}

// Promise chaining: vijf keer vermenigvuldigen en het resultaat telkens loggen
multiply(2, 3)
    .then((result) => {
        console.log('Stap 1:', result)
        return multiply(result, 2)
    })
    .then((result) => {
        console.log('Stap 2:', result)
        return multiply(result, 2)
    })
    .then((result) => {
        console.log('Stap 3:', result)
        return multiply(result, 2)
    })
    .then((result) => {
        console.log('Stap 4:', result)
        return multiply(result, 2)
    })
    .then((result) => {
        console.log('Stap 5:', result)
    })
    .catch((error) => {
        console.error('Er ging iets mis:', error)
    })
