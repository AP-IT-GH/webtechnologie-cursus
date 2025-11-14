'use strict'

// De multiply-functie blijft hetzelfde
const multiply = (number1, number2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(number1 * number2)
        }, 1000)
    })
}

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
        // Hier gooien we bewust een fout om te testen
        throw new Error('Iets is fout gegaan tijdens stap 3')
    })
    .then((result) => {
        console.log('Stap 4 (komt niet meer aan bod):', result)
        return multiply(result, 2)
    })
    .then((result) => {
        console.log('Stap 5 (komt niet meer aan bod):', result)
    })
    .catch((error) => {
        console.error('Fout opgevangen:', error.message)
    })
