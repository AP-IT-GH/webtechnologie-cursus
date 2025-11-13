'use strict'

// De multiply-functie blijft hetzelfde
const multiply = (number1, number2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(number1 * number2)
        }, 1000)
    })
}

// Oefening 1 - Notificatie-toestemming vragen
async function requestNotificationPermission() {
    try {
        const permission = await Notification.requestPermission()
        if (permission === 'granted') {
            new Notification('Hello world')
        } else {
            console.log('Toestemming geweigerd')
        }
    } catch (error) {
        console.error('Fout bij het aanvragen van toestemming:', error)
    }
}

// Oefening 2 - Een eigen Promise gebruiken
async function multiplyNumbers() {
    try {
        const result = await multiply(4, 7)
        console.log('Resultaat:', result)
    } catch (error) {
        console.error('Fout bij vermenigvuldigen:', error)
    }
}

// Oefening 3 - Promise chaining omzetten naar async/await
async function multiplyChaining() {
    try {
        let result = await multiply(2, 3)
        console.log('Stap 1:', result)
        result = await multiply(result, 2)
        console.log('Stap 2:', result)
        result = await multiply(result, 2)
        console.log('Stap 3:', result)
        result = await multiply(result, 2)
        console.log('Stap 4:', result)
        result = await multiply(result, 2)
        console.log('Stap 5:', result)
    } catch (error) {
        console.error('Fout bij het vermenigvuldigen:', error)
    }
}

// Oefening 4 - Foutafhandeling met async/await
async function multiplyWithErrorHandling() {
    try {
        let result = await multiply(2, 3)
        console.log('Stap 1:', result)
        result = await multiply(result, 2)
        console.log('Stap 2:', result)
        result = await multiply(result, 2)
        console.log('Stap 3:', result)
        // Bewust een fout gooien om te testen
        throw new Error('Iets is fout gegaan tijdens stap 3')
    } catch (error) {
        console.error('Fout opgevangen:', error.message)
    }
}

// Functie aanroepen
requestNotificationPermission()
multiplyNumbers()
multiplyChaining()
multiplyWithErrorHandling()
