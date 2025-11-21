'use strict'

// De multiply-functie zoals opgegeven
const multiply = (number1, number2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(number1 * number2)
        }, 5000) // Simuleert een trage bewerking
    })
}

// Aanroep van de functie
multiply(4, 7)
    .then((result) => {
        console.log('Resultaat:', result)
    })
    .catch((error) => {
        console.error('Er ging iets mis:', error)
    })
